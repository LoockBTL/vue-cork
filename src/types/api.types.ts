import type {
  ICategorie,
  IMeal,
  IShortArea,
  IShortCategory,
  IShortIngridient,
  IShortMeal
} from './entity.types'

export interface IApiCategories {
  categories: ICategorie[]
}

export interface IApiMeal {
  meals: IMeal[]
}

export interface IApiSearch {
  meals: IMeal[]
}
export interface IApiSearchBy {
  meals: IShortMeal[]
}

export interface IApiListIngridients {
  meals: IShortIngridient[]
}

export interface IApiListAreas {
  meals: IShortArea[]
}

export interface IApiListCategories {
  meals: IShortCategory[]
}
