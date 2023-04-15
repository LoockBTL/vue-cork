export interface ICategorie {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface IShortArea {
  strArea: string
}

export interface IShortIngridient {
  idIngredient: string
  strIngredient: string
  strDescription: string
  strType: string | null
}

export interface IShortCategory {
  strCategory: string
}

export interface IShortMeal {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export interface IMeal {
  idMeal: string
  strMeal: string
  strDrinkAlternate: null | string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
  strIngredient1: null | string
  strIngredient2: null | string
  strIngredient3: null | string
  strIngredient4: null | string
  strIngredient5: null | string
  strIngredient6: null | string
  strIngredient7: null | string
  strIngredient8: null | string
  strIngredient9: null | string
  strIngredient10: null | string
  strIngredient11: null | string
  strIngredient12: null | string
  strIngredient13: null | string
  strIngredient14: null | string
  strIngredient15: null | string
  strIngredient16: null | string
  strIngredient17: null | string
  strIngredient18: null | string
  strIngredient19: null | string
  strIngredient20: null | string
  strMeasure1: null | string
  strMeasure2: null | string
  strMeasure3: null | string
  strMeasure4: null | string
  strMeasure5: null | string
  strMeasure6: null | string
  strMeasure7: null | string
  strMeasure8: null | string
  strMeasure9: null | string
  strMeasure10: null | string
  strMeasure11: null | string
  strMeasure12: null | string
  strMeasure13: null | string
  strMeasure14: null | string
  strMeasure15: null | string
  strMeasure16: null | string
  strMeasure17: null | string
  strMeasure18: null | string
  strMeasure19: null | string
  strMeasure20: null | string
  strSource: null | string
  strImageSource: null | string
  strCreativeCommonsConfirmed: null | string
  dateModified: null | string
}
