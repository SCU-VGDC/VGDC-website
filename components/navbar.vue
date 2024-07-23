<template>
  <div class="container">
    <NuxtLink class="logo" to="/">VGDC</NuxtLink>

    <div style="display: flex; gap: 60px;">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/">Wrath's Bargain</NuxtLink>
      <NuxtLink @click="goToSection('join')" rel="nofollow">Join Us</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { goToSection } from '~/constants/index';
</script>

<style scoped>
  .container {
    position: sticky;
	  top: 0;

    z-index: 10;

    overflow: hidden;
    background-color: var(--darker);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px;
  }

  a {
    color: var(--light);
    text-align: center;
    text-decoration: none;
    font-size: var(--medium);
    font-weight: bold;

    cursor: pointer;
  }

  a.logo {
    font-size: var(--large);
    font-weight: 800;
  }
</style>