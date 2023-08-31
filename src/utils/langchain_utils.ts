import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
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
    buildResource: `
      You are an assistant to a researcher creating FHIR-Data. You will be provided with
      1) a medical term
      2) a FHIR-Resource-Type
  Your task is to create a FHIR-R4-Resource of specified resource type representing the medical term.
  The output should be in json format without further explanation.
  
  %MEDICAL TERM:
  {medical_term}
  
  %FHIR-RESOURCE-TYPE:
  {resource_type}
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
  };
  
  export const promptList = {
    bundleOutlineV2: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.bundleOutlineV2),
    ]),
    buildResource: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.buildResource),
    ]),
    buildResourceV2: ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate(templateList.buildResourceV2),
    ]),
  };
  

const chat = new ChatOpenAI({
    temperature: 0,
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  
  export const chains = {
    bundleOutlineV2: new LLMChain({
      llm: chat,
      prompt: promptList.bundleOutlineV2,
    }),
    buildResource: new LLMChain({
      llm: chat,
      prompt: promptList.buildResource,
    }),
    buildResourceV2: new LLMChain({
      llm: chat,
      prompt: promptList.buildResourceV2,
    }),
  };
  