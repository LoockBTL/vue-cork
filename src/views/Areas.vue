<template>
    <h1>Areas</h1>

    <div v-if="loading" class="loading">Is Loading...</div>

    <div v-else class="container">
        <div class="areas__container">
            <div class="areas__item" v-for="area of areas" :key="area.strArea" @click="searchByArea(area.strArea)">{{
                area.strArea }}</div>

        </div>
    </div>
</template>
<style>
.areas__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
}

.areas__item {
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    background-color: rgb(221, 118, 0);
    border-radius: 50px;
    border: 5px solid rgb(151, 81, 0);
    transition: .2s;
}

.areas__item:hover {
    box-shadow: 0px 0px 46px 0px rgba(255, 160, 0, 1);
}
</style>
<script lang="ts">
import router from '@/router';
import type { IApiListAreas } from '@/types/api.types';
import type { IShortArea } from '@/types/entity.types';
import axios from 'axios';

export default {
    name: 'areas-view',
    data() {
        return {
            areas: null as IShortArea[] | null,
            loading: true as boolean,
            error: false as boolean
        }
    },
    methods: {
        searchByArea: function (area: string) {
            router.push({ path: '/search', query: { a: area } })
        }
    },
    mounted() {
        axios.get<IApiListAreas>("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then((res) => { this.areas = res.data.meals; this.loading = false; })
            .catch((err) => { console.log(err); this.error = true; });
    }
}
</script>