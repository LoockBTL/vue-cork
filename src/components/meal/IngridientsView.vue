<template>
    <div class="ingridients">
        <table>
            <tr>
                <th>Ingridients</th>
                <th>Measures</th>
            </tr>
            <tr v-for="(item, index) in ingridients" :key="index">
                <td>{{ item.ingridient }}</td>
                <td>{{ item.measure }}</td>
            </tr>
        </table>
    </div>
</template>
<style>
.ingridients {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

table {
    background-color: black;
}

th,
td {
    padding: 5px;
    background-color: rgb(221, 118, 0);
}
</style>
<script lang="ts">
import type { IPropsIngredients } from '@/types/view.types';
import type { PropType } from 'vue';

export default {
    name: 'inridients-view',
    props: {
        ingridients: {
            type: null as unknown as PropType<IPropsIngredients[] | null>,
            required: true,
            default: null
        }
    }
}
</script>
