<template>
    <h1>Search</h1>
    <div v-if="loading" class="loading">Is Loading...</div>
    <div v-else class="container search__container">
        <mini-meal v-for="meal in meals" :key="meal.idMeal" :strMeal="meal" />
    </div>
</template>

<style>
.search__container {
    display: flex;
    flex-wrap: wrap;
}
</style>
<script lang="ts">
import type { IApiSearch, IApiSearchBy } from '@/types/api.types';
import type { IMeal, IShortMeal } from '@/types/entity.types';
import axios from 'axios';

export default {
    name: 'search-view',
    data() {
        return {
            meals: null as IMeal[] | IShortMeal[] | null,
            loading: true as boolean,
            error: false as boolean
        }
    },
    mounted() {
        if (this.$route.query.n) {
            axios.get<IApiSearch>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.$route.query.n}`).then((res) => { this.meals = res.data.meals; this.loading = false })
        } else if (this.$route.query.l) {
            axios.get<IApiSearch>(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.$route.query.l}`).then((res) => { this.meals = res.data.meals; this.loading = false })
        } else if (this.$route.query.c) {
            axios.get<IApiSearchBy>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.query.c}`).then((res) => { this.meals = res.data.meals; this.loading = false })
        } else if (this.$route.query.a) {
            axios.get<IApiSearchBy>(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.$route.query.a}`).then((res) => { this.meals = res.data.meals; this.loading = false })
        } else if (this.$route.query.i) {
            axios.get<IApiSearchBy>(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.$route.query.i}`).then((res) => { this.meals = res.data.meals; this.loading = false })
        }
    }
}
</script>