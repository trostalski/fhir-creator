import { toastError } from "@/toasts";
import { InputDict, Outline } from "@/types";
import { Fhir, ValidatorMessage } from "fhir";
import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChainValues } from "langchain/dist/schema";
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
  } from "langchain/prompts";
  
  export const templateList = {
    bundleOutlineV2: `
      You are an assistant to a researcher creating FHIR-Data. You will be provided with a medical text. The task for you and the researcher is to create a bundle of FHIR-resources,
      representing the content of the text. As a first step to creating these resources, your task is to create an outline of this bundle. The output should have the following form:
  
      {{
          "ResourceType1": [
              "Concept1",
              "Concept2",
          ],
          "ResourceType2": [
              "Concept3",
          ]
      }}
      
      Make sure only to use resource types from the FHIR R4 specification.
      Try to capture as many concepts as possible in resource form.
  
      If possible try to extract resources specified in the focus resources. If there is no concept corresponding to a requested focus resource, Leave it out.
      Still include concepts and resource types that are not listed in the focus resources, if they are in the FHIR R4 specification.
      %FOCUS RESOURCES
      {focus_resources}
  
      %MEDICAL TEXT:
      {medical_text}
      `,
    buildResourceV2: `
      You are an assistant to a researcher creating FHIR-Data. You will be provided with
      1) a FHIR-Resource-Type
      2) a medical term
      3) the text passage the term is extracted from
  Your task is to create a FHIR-R4-Resource of specified resource type representing the medical term.
  The output should be in json format without further explanation.
  
  %FHIR-RESOURCE-TYPE:
  {resource_type}
  
  %MEDICAL TERM:
  {medical_term}
  
  %CONTEXT:
  {context}
      `,
      buildResourceV3: `
      You are an assistant to a researcher creating FHIR-Data. You will be provided with
      1) a FHIR-Resource-Type
      2) a medical term
      3) the text passage the term is extracted from
  Your task is to create a FHIR-R4-Resource of specified resource type representing the medical term.
  The output should be in json format without further explanation.
  
  %FHIR-RESOURCE-TYPE:
  {resource_type}

  %MEDICAL TERM:
  {medical_term}

  %TEXT PASSAGE:
  {context}
      `,
      correctJsonError: `
      You are an assistant to a researcher creating FHIR-Data. You will be provided with
      1) a FHIR-Resource-Type
      2) a medical term
      3) the text passage the term is extracted from
  Your task is to create a FHIR-R4-Resource of specified resource type representing the medical term.
  The output should be in json format without further explanation.
  
  %FHIR-RESOURCE-TYPE:
  {resource_type}

  %MEDICAL TERM:
  {medical_term}

  %TEXT PASSAGE:
  {context}

  The first attempt to create a resource failed. Please make sure to only output a valid FHIR resource and nothing else.
      `,
      correctValidationError: `
      You are an assistant to a researcher creating FHIR-Data. You will be provided with
      1) a FHIR-Resource-Type
      2) a medical term
      3) the text passage the term is extracted from
  Your task is to create a FHIR-R4-Resource of specified resource type representing the medical term.
  The output should be in json format without further explanation.
  
  %FHIR-RESOURCE-TYPE:
  {resource_type}

  %MEDICAL TERM:
  {medical_term}

  %TEXT PASSAGE:
  {context}

  Your first attempt produced the following resource:
  {resource}

  Validation of this resource failed with following error:
  {error}

  Please modify the resource to comply with the error message.
      `
  };
  
  export const promptList = {
    bundleOutlineV2: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.bundleOutlineV2),
    ]),
    buildResourceV2: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.buildResourceV2),
    ]),
    buildResourceV3: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.buildResourceV3),
    ]),
    correctJsonError: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.correctJsonError),
    ]),
    correctValidationError: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.correctValidationError),
    ]),
  };
  

// const chat = new ChatOpenAI({
//     temperature: 0,
//     openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   });
  
//   export const chains = {
//     bundleOutlineV2: new LLMChain({
//       llm: chat,
//       prompt: promptList.bundleOutlineV2,
//     }),
//     buildResourceV2: new LLMChain({
//       llm: chat,
//       prompt: promptList.buildResourceV2,
//     }),
//     buildResourceV3: new LLMChain({
//       llm: chat,
//       prompt: promptList.buildResourceV3,
//     }),
//     correctJsonError: new LLMChain({
//       llm: chat,
//       prompt: promptList.correctJsonError,
//     }),
//     correctValidationError: new LLMChain({
//       llm: chat,
//       prompt: promptList.correctValidationError,
//     }),
//   };
  
  function createSlice(text: string, match: number[], extendBy: number = 50) {
    // Adjust the start and end indices by the extension value.
    // If the indices go beyond the string bounds, clamp them to the string boundaries.
    const extendedStart = Math.max(0, match[0] - extendBy);
    const extendedEnd = Math.min(text.length, match[1] + extendBy);

    return text.slice(extendedStart, extendedEnd);
  }
   
  const checkFailCap = (failCount:number, failCap:number, errorStack:string[])=>{
    if(failCount >= failCap){
      toastError("Exceeded the maximum number of tries while creating a resource")
      console.log(errorStack)
      throw new Error()
    }
  }


  const createBuildCall = async (inputDict:InputDict, chains: {
    [key: string]: LLMChain<string, ChatOpenAI>;
  },  failCap: number = 6) =>{
    let failCount = 0
    let jsonResult : any
    const errorStack: string[] = []
    const response = await chains.buildResourceV3.call(inputDict);
    ({jsonResult, failCount} = await jsonTransformation(response, inputDict, failCount, failCap, errorStack, chains));
    ({jsonResult, failCount} = await fhirValidation(jsonResult, inputDict, failCount, failCap, errorStack, chains));
    return jsonResult
  }

  const getErrorLocation = (errorMessages: ValidatorMessage[]) =>{
    const arrayErrorIndex = errorMessages.findIndex((message)=> message.message === "Property is not an array")
    const parts = errorMessages[arrayErrorIndex].message!.split(".")
    return parts.slice(1)
  }

  const checkArrayErrorSolvable = (errorMessages: ValidatorMessage[]) =>{
    let solvable = false
    if (errorMessages.some((message) => message.message === "Property is not an array")){
      const errorLocation = getErrorLocation(errorMessages)
      if(errorLocation.length === 1){
        solvable = true
      }
    }
    return solvable
  }

  const fhirValidation = async (jsonResult:any, inputDict: InputDict, failCount:number, failCap:number, errorStack:string[], chains: {
    [key: string]: LLMChain<string, ChatOpenAI>;
  })=>{
    const fhir = new Fhir()
    const valResult = fhir.validate(jsonResult)
    if(valResult.valid){
      return {jsonResult, failCount}
    } else{
      errorStack.push(JSON.stringify(valResult))
      const errorMessages = valResult.messages.filter((message) => message.severity === "error")
      if(checkArrayErrorSolvable(errorMessages)){ // handle array error
        const errorLocation = getErrorLocation(errorMessages)
        jsonResult[errorLocation[0]] = [jsonResult[errorLocation[0]]]
      } else {
        checkFailCap(failCount, failCap, errorStack);
        failCount += 1;
        const retryInputDict = createValidationFailInputDict(inputDict, jsonResult, errorMessages);
        const response = await chains.correctValidationError.call(retryInputDict);
        ({jsonResult, failCount} = await jsonTransformation(response, inputDict, failCount, failCap, errorStack, chains));
      }
      ({jsonResult, failCount} = await fhirValidation(jsonResult, inputDict, failCount, failCap, errorStack, chains));
      return {jsonResult, failCount}
    }

  }

  const createValidationFailInputDict = (inputDict: InputDict, jsonResult: any, errorMessages: ValidatorMessage[]) =>{
    let retryInputDict = JSON.parse(JSON.stringify(inputDict))
    retryInputDict["resource"] = jsonResult
    retryInputDict["error"] = JSON.stringify(errorMessages)
    return retryInputDict
  }

  const injectRefs = (jsonResult:any)=>{
    if(jsonResult["resourceType"] && (jsonResult["resourceType"] === "Condition" || jsonResult["resourceType"] === "Observation")){
      jsonResult["subject"] = {reference:"Patient/example"}
    }
  }

  const jsonTransformation = async (response: ChainValues, inputDict: InputDict, failCount: number, failCap: number, errorStack:string[], chains: {
    [key: string]: LLMChain<string, ChatOpenAI>;
  })=>{
    let jsonResult: any
    try{
      jsonResult = JSON.parse(response.text);
      injectRefs(jsonResult)
    } catch(error){
      errorStack.push(String(error));
      checkFailCap(failCount, failCap, errorStack);
      failCount += 1;
      response = await chains.correctJsonError.call(inputDict);
      ({jsonResult, failCount} = await jsonTransformation(response, inputDict, failCount, failCap, errorStack, chains));
    }
    return {jsonResult: jsonResult, failCount: failCount} 
  }

  export const createResources = async (text:string, outline:Outline, chains: {
    [key: string]: LLMChain<string, ChatOpenAI>;
  })=> {
    let responses = []
    for(const resourceType in outline){
      for(const item of outline[resourceType]){
        if(item.matches && item.matches.length > 0){
          const inputDict = {
            resource_type: resourceType,
            medical_term: item.item,
            context: createSlice(text, item.matches![0])
          }
          responses.push(createBuildCall(inputDict, chains))
        }
      }
    }
    try{
      const results = await Promise.allSettled(responses)
      return results
    } catch(error) {
      console.log('An error occured')
    }
  }