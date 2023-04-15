<template>
    <h1>Categories</h1>

    <div v-if="loading" class="loading">Is Loading...</div>

    <div class="container" v-else>
        <div class="categories__container">
            <div class="categories__item" v-for="category of categories" :key="category.strCategory"
                @click="searchByCategory(category.strCategory)">
                {{ category.strCategory }}
            </div>
        </div>
    </div>
</template>
<style>
.categories__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
}

.categories__item {
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    background-color: rgb(221, 118, 0);
    border-radius: 50px;
    border: 5px solid rgb(151, 81, 0);
    transition: .2s;
}

.categories__item:hover {
    box-shadow: 0px 0px 46px 0px rgba(255, 160, 0, 1);

}
</style>
<script lang="ts">
import router from '@/router';
import type { IApiListCategories } from '@/types/api.types';
import type { IShortCategory } from '@/types/entity.types';
import axios from 'axios';

export default {
    name: 'categories-view',
    data() {
        return {
            categories: null as IShortCategory[] | null,
            loading: true as boolean,
            error: false as boolean
        }
    },
    methods: {
        searchByCategory: function (category: string) {
            router.push({ path: '/search', query: { c: category } })
        }
    },
    mounted() {
        axios.get<IApiListCategories>("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then((res) => { this.categories = res.data.meals; this.loading = false; })
            .catch((err) => { console.log(err); this.error = true; });
    }
}
</script>