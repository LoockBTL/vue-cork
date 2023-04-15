<template>
    <img class="info__img" :src="strMeal?.strMealThumb || ''" alt="" srcset="">
    <div class="info__container">
        <p>Name: {{ strMeal?.strMeal }}</p>
        <p>Area: {{ strMeal?.strArea }}</p>
        <p>Category: {{ strMeal?.strCategory }}</p>
        <p>Tags: {{ strMeal?.strTags }}</p>
    </div>
</template>
<style>
.info__img {
    width: 50%;
    border-radius: 15px;
}

.info__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 42px;
    margin-left: 10px;
}
</style>
<script lang="ts">
import type { IPropsInfo } from '@/types/view.types';
import type { PropType } from 'vue';

export default {
    name: 'info-view',
    props: {
        strMeal: {
            type: null as unknown as PropType<IPropsInfo | null>,
            required: true,
            default: null
        }
    }


}

</script>