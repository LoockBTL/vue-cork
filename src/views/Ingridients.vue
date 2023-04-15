<template>
    <h1>Ingridients</h1>
    <div class="search__ingridients">
        <input type="text" v-model="search">
    </div>
    <div v-if="loading" class="loading">Is Loading...</div>
    <div v-else class="container">

        <div class="ingridients__container">
            <div class="ingridients__item"
                v-for="ingridient of ingridients?.filter((item) => item.strIngredient.toLowerCase().includes(search.toLowerCase()))"
                :key="ingridient.idIngredient" @click="searchByIngridient(ingridient.strIngredient)">
                {{ ingridient.strIngredient }}
            </div>
        </div>
    </div>
</template>
<style>
.search__ingridients {
    display: flex;
    justify-content: center;
    margin: 10px;
}

.search__ingridients input {
    outline: none !important;
    border: none;
    border: 0px;
    border-radius: 50px;
    padding: 10px;
    margin-right: 5px;
}

.ingridients__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
}

.ingridients__item {
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    background-color: rgb(221, 118, 0);
    border-radius: 50px;
    border: 5px solid rgb(151, 81, 0);
    transition: .2s;
}

.ingridients__item:hover {
    box-shadow: 0px 0px 46px 0px rgba(255, 160, 0, 1);
}
</style>
<script lang="ts">
import router from '@/router';
import type { IApiListIngridients } from '@/types/api.types';
import type { IShortIngridient } from '@/types/entity.types';
import axios from 'axios';

export default {
    name: 'ingridients-view',
    data() {
        return {
            search: '' as string,
            ingridients: null as IShortIngridient[] | null,
            loading: true as boolean,
            error: false as boolean
        }
    },
    methods: {
        searchByIngridient: function (ingridient: string) {
            router.push({ path: '/search', query: { i: ingridient } })
        }
    },
    mounted() {
        axios.get<IApiListIngridients>("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then((res) => { this.ingridients = res.data.meals; this.loading = false; })
            .catch((err) => { console.log(err); this.error = true; });
    }
}
</script>