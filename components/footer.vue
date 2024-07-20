<template>
  <div class="container">
    <NuxtLink class="logo" to="/">VGDC</NuxtLink>

    <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
      <NuxtLink :href="LINKS.discord.link" target="_blank"><NuxtImg :src="LINKS.discord.icon" :height="iconHeight"></NuxtImg></NuxtLink>
      <NuxtLink :href="LINKS.linkedin.link" target="_blank"><NuxtImg :src="LINKS.linkedin.icon" :height="iconHeight + 6"></NuxtImg></NuxtLink>
      <NuxtLink :href="LINKS.github.link" target="_blank"><NuxtImg :src="LINKS.github.icon" :height="iconHeight + 6"></NuxtImg></NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { LINKS } from '~/constants/index';
</script>

<script lang="ts">
  export default {
    computed: {
      iconHeight(): number {
        return 40.0;
      }
    },
  }
</script>

<style scoped>
  div {
    height: 50px;
  }

  .container {
    position: sticky;
	  top: 0;

    overflow: hidden;
    background-color: var(--primary);
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