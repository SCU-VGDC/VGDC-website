<template>
  <div class="container">
    <a class="logo" href="/">VGDC</a>

    <div style="display:flex; gap: 60px;">
      <a href="/">Home</a>
      <a href="/">Project D</a>
      <a href="#join">Join Us</a>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
    height: 80px;
    padding: 10px;
  }

  a {
    color: var(--light);
    text-align: center;
    text-decoration: none;
    font-size: var(--medium);
    font-weight: bold;
  }

  a.logo {
    font-size: var(--large);
    font-weight: 800;
  }
</style>