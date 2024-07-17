<template>
  <div class="container">
    <a class="logo" href="/">VGDC</a>

    <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
      <a :href="LINKS.discord.link" target="_blank"><NuxtImg :src="LINKS.discord.icon" :height="iconHeight"></NuxtImg></a>
      <a :href="LINKS.linkedin.link" target="_blank"><NuxtImg :src="LINKS.linkedin.icon" :height="iconHeight + 6"></NuxtImg></a>
      <a :href="LINKS.github.link" target="_blank"><NuxtImg :src="LINKS.github.icon" :height="iconHeight + 6"></NuxtImg></a>
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