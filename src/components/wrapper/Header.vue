<template>
    <header>
        <nav>
            <RouterLink to="/" class="header__link">Main</RouterLink>
            <RouterLink to="/favorite" class="header__link">Favorite</RouterLink>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    name: 'vue-header',
}
</script>

<style>
header {
    background-color: rgb(146, 103, 8);
    padding: 15px;
}

nav {
    margin: 0 auto;
    width: fit-content;
}

.header__link {
    margin-left: 15px;
    text-decoration: none;
    position: relative;
    color: white;
    font-size: 42px;
}

.header__link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 2px;
    width: 0%;
    background-color: white;
    transition: .2s;
}

.header__link:hover::before {
    left: 0%;
    width: 100%;
}
</style>