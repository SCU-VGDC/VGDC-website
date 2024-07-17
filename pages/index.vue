<template>
  <div>
    <Navbar></Navbar>
    
    <section class="hero">
      <h1 style="font-size: 18.75rem; font-weight: 800; text-align: center;">VGDC</h1>
    </section>

    <Banner background_image="/images/home/Lust_Arena.jpg">
      <p style="font-size: var(--medium); opacity: 1.0">
        Check out our current Project: <br>
        <a>Wrath's Bargain</a>
      </p>
    </Banner>

    <section class="info">
      
    </section>

    <Banner background_color="var(--primary)">
      <h1>What we do</h1>
    </Banner>

    <section class="about">
      
    </section>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  section.hero {
    height: calc(100vh - 80px);
    margin-top: 0px;
    background-color: var(--primary);

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>