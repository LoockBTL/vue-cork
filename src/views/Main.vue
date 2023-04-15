<template>
    <div class="container">
        <h2>Search</h2>
        <div class="search">
            <div class="search__div">
                <input type="text" v-model="search">
                <button @click="searchByName" class="btn">Search</button>
                <p v-if="search.length === 0 && validation" class="error">Write something to search</p>
            </div>
            <RouterLink to="/random" class="btn item">Random</RouterLink>
        </div>
        <h2>Filter by</h2>
        <div class="filter">
            <RouterLink to="/categories" class="btn item">Categories</RouterLink>
            <RouterLink to="/ingridients" class="btn item">Ingridients</RouterLink>
            <RouterLink to="/areas" class="btn item">Areas</RouterLink>
        </div>
        <h2>List all meals by first letter</h2>
        <div class="alphabet">
            <button class="alphabet__item btn" v-for="(item, index) in alphabet" :key="item + index"
                @click="searchByLetter(item)">
                {{ item }}</button>
        </div>
    </div>
</template>
<style>
.error {
    background: red;
    font-size: 14px;
    width: fit-content;
    padding: 5px;
    border-radius: 50px;
}

.search {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search__div {
    padding: 10px;
}

.search__div input {
    outline: none !important;
    border: none;
    border: 0px;
    border-radius: 50px;
    padding: 10px;
    margin-right: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

.search__div button {
    border: 0px;
    border-left: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.btn {
    display: inline-block;
    text-decoration: none;
    padding: 10px;
    color: white;
    background-color: rgb(221, 118, 0);
    border-radius: 50px;
    border: 5px solid rgb(151, 81, 0);
    transition: .2s;
}

.btn:hover {
    box-shadow: 0px 0px 46px 0px rgba(255, 160, 0, 1);

}

.alphabet {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.alphabet__item {
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 24px;
}

.filter {
    display: flex;
    width: fit-content;
    margin: 0 auto;
}

.item {
    margin: 5px;
    font-size: 24px;
}
</style>

<script lang="ts">
import router from '@/router';

export default {
    name: 'main-view',
    data() {
        return {
            search: '',
            validation: false as boolean,
            alphabet: ["a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"]
        }
    },
    methods: {
        searchByLetter: function (letter: string) {
            router.push({ path: '/search', query: { l: letter } })
        },
        searchByName: function () {
            if (this.search.length === 0) {
                this.validation = true
            } else {
                router.push({ path: '/search', query: { n: this.search } })
            }
        }
    }
}
</script>