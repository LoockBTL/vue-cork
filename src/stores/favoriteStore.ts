import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favoriteStore', {
  state: () => {
    return {
      favorites: [] as string[]
    }
  },
  getters: {
    currentMealStatus: (state) => {
      return (mealId: string): boolean => state.favorites.includes(mealId)
    }
  },
  actions: {
    addToFavorite(mealId: string) {
      this.favorites.push(mealId)
    },
    deleteFromFavorite(mealId: string) {
      this.favorites = this.favorites.filter((id) => id !== mealId)
    }
  }
})
