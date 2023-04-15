export type PartType = 'Info' | 'Ingridients' | 'Instruction'
export interface IPropsInfo {
  idMeal: null | string
  strMeal: null | string
  strDrinkAlternate?: null | string
  strCategory: null | string
  strArea: null | string
  strMealThumb: null | string
  strTags: null | string
}
export interface IPropsInstruction {
  strInstructions: string | null
  strYoutube: string | null
}

export interface IPropsIngredients {
  ingridient: string
  measure: string
}
