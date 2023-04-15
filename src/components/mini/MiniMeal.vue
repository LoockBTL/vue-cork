<template>
    <div @click="redirect" class="meal-mini">
        <img :src="strMeal?.strMealThumb" alt="">
        <div>{{ strMeal?.strMeal }}</div>
    </div>
</template>

<style>
.meal-mini {
    cursor: pointer;
    width: 10vw;
    padding: 10px;
    background-color: rgb(221, 118, 0);
    border: 5px solid rgb(151, 81, 0);
    border-radius: 10px;
    margin: 10px;
    text-align: center;
    transition: .2s;
}

.meal-mini img {
    width: 100%;
    border-radius: 10px;
}

.meal-mini:hover {
    box-shadow: 0px 0px 46px 0px rgba(255, 160, 0, 1);

}
</style>

<script lang="ts">
import router from '@/router';
import type { IMeal, IShortMeal } from '@/types/entity.types';
import type { PropType } from 'vue';

export default {
    name: 'mini-meal',
    props: {
        strMeal: {
            type: null as unknown as PropType<IMeal | IShortMeal | null>,
            required: true,
            default: null
        }
    },
    methods: {
        redirect: function () {
            router.push({ path: `/meal/${this.strMeal?.idMeal}` })
        }
    }
}
</script>