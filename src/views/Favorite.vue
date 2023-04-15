<template>
    <div v-if="loading" class="loading">Is Loading...</div>
    <div class="nothing" v-else-if="favorites.length === 0">
        There is nothing...
    </div>
    <div class="container search__container" v-else>
        <mini-meal v-for="favorite of favorites" :key="favorite.idMeal" :strMeal="favorite" />
    </div>
</template>
<style>
.nothing {
    margin-top: 20px;
    text-align: center;
    font-size: 42px;
}
</style>
<script lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore';
import type { IApiMeal } from '@/types/api.types';
import type { IMeal } from '@/types/entity.types';
import axios from 'axios';

export default {
    name: 'favorite-view',
    data() {
        return {
            favorites: [] as IMeal[],
            loading: true as boolean,
            error: false as boolean
        }
    },
    async mounted() {
        const favoritesStore = useFavoriteStore();

        if (favoritesStore.favorites.length === 0) {
            this.loading = false
            return
        }
        favoritesStore.favorites.map(async (obj) => {
            await axios.get<IApiMeal>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${obj}`)
                .then((res) => { this.favorites.push(res.data.meals[0]); })
                .catch((err) => { console.log(err); this.error = true; });
        })
        this.loading = false
    }
}
</script>