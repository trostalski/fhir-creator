import { ColorStore, Outline, OutlineArrayItem, OutlineItem } from '@/types';
import sortBy from 'lodash/sortBy'
import { SplitProps } from './TextAnnotator';


const constructOutlineArray = (outline:Outline): OutlineArrayItem[] =>{
  const outlineArray: OutlineArrayItem[] = []
  if(outline){
    for(const key in outline){
        for (const entity of outline[key]){
          if(entity.matches && entity.matches.length > 0){
            outlineArray.push({...entity, resourceType: key})
          }
      }
    }
    
  }
  return outlineArray
}


export const splitWithOutline = (text:string, offsets: {start: number; end: number}[],colors: ColorStore, outline?:Outline ) => {
  let lastEnd = 0
  const splits: SplitProps[] = []

  if(outline){
    const outlineArray = constructOutlineArray(outline)
  
    for (let outlineArrayItem of sortBy(outlineArray, o => o.matches![0][0])) {
      const [start, end] = outlineArrayItem.matches![0]
      if (lastEnd < start) {
        splits.push({
          start: lastEnd,
          end: start,
          content: text.slice(lastEnd, start),
          onClick: ()=>{}
        })
      }
      splits.push({
        start,
        end,
        outlineArrayItem,
        mark: true,
        content: text.slice(start, end),
        color: colors[outlineArrayItem.resourceType],
        onClick: ()=>{}
      })
      lastEnd = end
    }
    if (lastEnd < text.length) {
      splits.push({
        start: lastEnd,
        end: text.length,
        content: text.slice(lastEnd, text.length),
        onClick: ()=>{}
      })
    }
  }

  
  return splits
}

export const splitWithOffsets = (text:string, offsets: {start: number; end: number}[]) => {
  let lastEnd = 0
  const splits = []

  for (let offset of sortBy(offsets, o => o.start)) {
    const {start, end} = offset
    if (lastEnd < start) {
      splits.push({
        start: lastEnd,
        end: start,
        content: text.slice(lastEnd, start),
      })
    }
    splits.push({
      ...offset,
      mark: true,
      content: text.slice(start, end),
    })
    lastEnd = end
  }
  if (lastEnd < text.length) {
    splits.push({
      start: lastEnd,
      end: text.length,
      content: text.slice(lastEnd, text.length),
    })
  }
  return splits
}

export const splitTokensWithOffsets = (text:string, offsets: {start: number; end: number}[]) => {
  let lastEnd = 0
  const splits = []

  for (let offset of sortBy(offsets, o => o.start)) {
    const {start, end} = offset
    if (lastEnd < start) {
      for (let i = lastEnd; i < start; i++) {
        splits.push({
          i,
          content: text[i],
        })
      }
    }
    splits.push({
      ...offset,
      mark: true,
      content: text.slice(start, end),
    })
    lastEnd = end
  }

  for (let i = lastEnd; i < text.length; i++) {
    splits.push({
      i,
      content: text[i],
    })
  }
  return splits
}

export const selectionIsEmpty = (selection: Selection) => {
  if (!selection.anchorNode || !selection.focusNode) return true;
  let position = selection.anchorNode.compareDocumentPosition(selection.focusNode)

  return position === 0 && selection.focusOffset === selection.anchorOffset
}

export const selectionIsBackwards = (selection: Selection) => {
  if (selectionIsEmpty(selection)) return false
  if (!selection.anchorNode || !selection.focusNode) return true;
  let position = selection.anchorNode.compareDocumentPosition(selection.focusNode)

  let backward = false
  if (
    (!position && selection.anchorOffset > selection.focusOffset) ||
    position === Node.DOCUMENT_POSITION_PRECEDING
  )
    backward = true

  return backward
}
