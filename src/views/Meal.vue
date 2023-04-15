<template>
    <div class="container">
        <div v-if="loading" class="loading">Is Loading...</div>
        <div v-else>
            <nav class="meal__nav">
                <button class="nav__btn" @click="() => part = 'Info'" :class="{
                    active: part === 'Info'
                }">Info</button>
                <button class="nav__btn" @click="() => part = 'Ingridients'" :class="{
                    active: part === 'Ingridients'
                }">Ingridients</button>
                <button class="nav__btn" @click="() => part = 'Instruction'" :class="{
                    active: part === 'Instruction'
                }">Instruction</button>
            </nav>
            <div class="meal__container">
                <div class="svg__btn">
                    <svg @click="addDeleteFavorite" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xml:space="preserve">
                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                            <path :fill="favorite ? 'white' : 'black'"
                                d="M 42.901 85.549 c 1.059 1.383 3.138 1.383 4.197 0 c 7.061 -9.223 28.773 -25.692 33.475 -30.82 c 12.568 -12.568 12.568 -32.946 0 -45.514 h 0 c -8.961 -8.961 -26.859 -7.239 -34.145 3.1 c -0.699 0.992 -2.158 0.992 -2.857 0 C 36.286 1.975 18.387 0.253 9.426 9.214 h 0 c -12.568 12.568 -12.568 32.946 0 45.514 C 14.128 59.857 35.84 76.325 42.901 85.549 z"
                                transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        </g>
                    </svg>
                </div>
                <div class="meal__views">
                    <InfoView :str-meal="info" v-if="part === 'Info'" />
                    <InridientsView :ingridients="ingridients" v-if="part === 'Ingridients'" />
                    <InstructionView :instructions="instruction" v-if="part === 'Instruction'" />
                </div>

            </div>
        </div>
    </div>
</template>
<style>
.svg__btn {
    margin: 10px;
    cursor: pointer;
}

.svg__btn svg {
    height: 30px;
}

.meal__views {
    display: flex;
}

.meal__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: rgb(221, 118, 0);
    border: 5px solid rgb(151, 81, 0);
    border-radius: 10px;
}

.meal__nav {
    margin: 40px auto;
    transition: .2s;
    border-radius: 15px;
}

.nav__btn {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    padding: 10px;
    color: white;
    background-color: rgb(221, 118, 0);
    transition: .2s;
    border: 0px;
    border-top: 5px solid rgb(151, 81, 0);
    border-bottom: 5px solid rgb(151, 81, 0);
}

.nav__btn:first-of-type {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    border-left: 5px solid rgb(151, 81, 0);
}

.nav__btn:last-of-type {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-right: 5px solid rgb(151, 81, 0);
}

.nav__btn:hover {
    background-color: rgb(182, 97, 0);
}

.meal__nav:hover {
    box-shadow: 0px 0px 46px 0px rgba(255, 160, 0, 1);
}
</style>
<script lang="ts">
import InfoView from '@/components/meal/InfoView.vue'
import InstructionView from '@/components/meal/InstructionView.vue'
import InridientsView from '@/components/meal/IngridientsView.vue'
import type { IMeal } from '@/types/entity.types';
import type { PartType, IPropsInfo, IPropsIngredients, IPropsInstruction } from "@/types/view.types"
import axios from 'axios'
import type { IApiMeal } from '@/types/api.types';
import router from '@/router';
import { useFavoriteStore } from '../stores/favoriteStore'

export default {
    name: "meal-view",
    data() {
        return {
            meal: null as IMeal | null,
            info: null as IPropsInfo | null,
            ingridients: null as IPropsIngredients[] | null,
            instruction: null as IPropsInstruction | null,
            part: "Info" as PartType,
            loading: true as boolean,
            error: false as boolean,
            favorite: false as boolean
        };
    },
    methods: {
        addDeleteFavorite: function () {
            const favoriteMeals = useFavoriteStore();
            const id = this.$route.params.id.toString()

            if (favoriteMeals.currentMealStatus(id)) {
                favoriteMeals.deleteFromFavorite(id)
                this.favorite = false
            } else {
                favoriteMeals.addToFavorite(id)
                this.favorite = true
            }
        }
    },
    watch: {
        meal() {
            if (this.meal !== null) {
                this.info = {
                    idMeal: this.meal?.idMeal || null,
                    strMeal: this.meal?.strMeal || null,
                    strDrinkAlternate: this.meal?.strDrinkAlternate || null,
                    strCategory: this.meal?.strCategory || null,
                    strArea: this.meal?.strArea || null,
                    strMealThumb: this.meal?.strMealThumb || null,
                    strTags: this.meal?.strTags || null,

                }
                this.instruction = {
                    strInstructions: this.meal?.strInstructions || null,
                    strYoutube: "https://www.youtube.com/embed/" + this.meal.strYoutube?.slice(32) || null
                }

                let ingridients: string[] = []
                let measures: string[] = []
                Object.keys(this.meal).forEach((key) => {
                    if (this.meal !== null)
                        if (this.meal[key as keyof IMeal] !== null) {
                            if (this.meal[key as keyof IMeal]?.trim()?.length !== 0) {
                                if (key.includes("strIngredient")) {
                                    ingridients.push(this.meal[key as keyof IMeal] || '')
                                }
                                if (key.includes("strMeasure")) {
                                    measures.push(this.meal[key as keyof IMeal] || '')
                                }
                            }
                        }
                })
                let ingridientsWithMeasures = []
                for (let i = 0; i < ingridients.length; i++) {
                    ingridientsWithMeasures.push({ ingridient: ingridients[i], measure: measures[i] })
                }

                this.ingridients = ingridientsWithMeasures

            }
        }
    },
    async mounted() {
        if (this.$route.path === "/random") {
            await axios.get<IApiMeal>(`https://www.themealdb.com/api/json/v1/1/random.php`)
                .then((res) => { this.meal = res.data.meals[0]; this.loading = false; })
                .catch((err) => { console.log(err); this.error = true; });
            router.push({ path: `/meal/${this.meal?.idMeal}` })
        } else {
            await axios.get<IApiMeal>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`)
                .then((res) => { this.meal = res.data.meals[0]; this.loading = false; console.log(res.data.meals[0]) })
                .catch((err) => { console.log(err); this.error = true; });
        }
        const favoriteMeals = useFavoriteStore()
        const id = this.$route.params.id.toString()
        if (favoriteMeals.currentMealStatus(id)) {
            this.favorite = true
        }
    },
    components: { InstructionView, InridientsView, InfoView }
}
</script>