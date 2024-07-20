<template>
  <div class="container">
    <a class="logo" href="/">VGDC</a>

    <div style="display: flex; gap: 60px;">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/">Wrath's Bargain</a>
      <a @click="goToSection('join')" rel="nofollow">Join Us</a>
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