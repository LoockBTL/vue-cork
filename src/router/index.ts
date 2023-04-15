import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/Main.vue'
import MealView from '../views/Meal.vue'
import SearchVue from '@/views/Search.vue'
import AreasVue from '@/views/Areas.vue'
import IngridientsVue from '@/views/Ingridients.vue'
import CategoriesVue from '@/views/Categories.vue'
import FavoriteVue from '@/views/Favorite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/meal/:id',
      name: 'meal',
      component: MealView
    },
    {
      path: '/random',
      name: 'random',
      component: MealView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchVue
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesVue
    },
    {
      path: '/ingridients',
      name: 'ingridients',
      component: IngridientsVue
    },
    {
      path: '/areas',
      name: 'areas',
      component: AreasVue
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteVue
    }
  ]
})

export default router
