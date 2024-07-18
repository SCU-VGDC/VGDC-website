<template>
  <div>
    <NavBar></NavBar>
    
    <section class="hero" id="hero">
      <!-- <h1 style="font-size: 18.75rem; font-weight: 800; text-align: center;">VGDC</h1> -->
       <LogoGame :width="logoGameWidth" :height="logoGameHeight"></LogoGame>
    </section>

    <Banner background_image="/images/home/Lust_Arena.jpg">
      <p style="font-size: var(--medium); opacity: 1.0">
        Check out our current Project: <br>
        <a href="/" style="color: var(--light)">Wrath's Bargain</a>
      </p>
    </Banner>

    <section class="info">
      <div style="text-align: center;">
        <h1 style="margin-bottom: 10px;">Welcome to SCU's Video Game Development Club (VGDC)!</h1>
        <p style="margin-top: 0px;">
          All skill levels and majors welcome! No experience needed :) <br>
          <a @click="goToSection('join')" rel="nofollow">Join us</a>
        </p>
      </div>

      <div class="entry">
        <h2 class="item1" style="text-align: center;">Who we are</h2>
        <NuxtImg class="item3" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item4">
          We are the club for all things game development at Santa Clara University! Whether 
          you want to work on games together through, expand your skillset through our , or just 
          hang out with other video game lovers in our weekly meetings, there's always something 
          for you here at VGDC!
        </p>
      </div>

      <div class="entry">
        <h2 class="item2" style="text-align: center;">Meetings</h2>
        <NuxtImg class="item4" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item3">
          Our club meets weekly in <a href="https://www.scu.edu/map/l/Learning-Commons-and-Library" target="_blank">LC 203</a> from 5:00 pm to 7:00 pm. Feel free to stop 
          by :) No experience needed!
        </p>
      </div>

      <div class="entry">
        <h2 class="item1" id="join" style="text-align: center;">Join us</h2>
        <NuxtImg class="item3" src="/images/home/boba_run.jpg" :sizes="imgEntrySizes"/>

        <p class="item4">
          Join at any time of the year! Feel free to join our <a :href="LINKS.discord.link" target="_blank">Discord</a> 
          to learn more and check out what we are working on
        </p>
      </div>
    </section>

    <Banner background_color="var(--primary)">
      <h1>What we do</h1>
    </Banner>

    <section class="about">
      <div class="entry">
        <h2 class="item1" style="text-align: center;">Game Design</h2>
        <NuxtImg class="item3" src="/images/home/level_design.png" :sizes="imgEntrySizes"/>

        <p class="item4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div class="entry">
        <h2 class="item2" style="text-align: center;">Art</h2>
        <NuxtImg class="item4" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div class="entry">
        <h2 class="item1" style="text-align: center;">Programming</h2>
        <NuxtImg class="item3" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div class="entry">
        <h2 class="item2" style="text-align: center;">Sound Design</h2>
        <NuxtImg class="item4" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div class="entry">
        <h2 class="item1" style="text-align: center;">World Building</h2>
        <NuxtImg class="item3" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
  import { LINKS, goToSection } from '~/constants/index';
</script>

<script lang="ts">
  export default {
    data: () => {
      return {
        logoGameWidth: 100,
        logoGameHeight: 100,
      };
    },
    methods: {
      checkScreenSize() {
        this.logoGameWidth = window.innerWidth;
        this.logoGameHeight = window.innerHeight - 60;

        //console.log(`${this.logoGameWidth} ${this.logoGameHeight}`);
      }
    },
    computed: {
      imgEntrySizes(): string {
        return "md:500px"
      },
    },
    mounted() {
      // change values based on screen size
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    unmounted() {
      window.removeEventListener("resize", this.checkScreenSize);
    }
  }
</script>

<style scoped>
  a {
    color: var(--primary);
    text-decoration: underline;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 10px;
  }

  section.hero {
    height: calc(100vh - 50px);
    margin-top: 0px;
    background-color: var(--primary);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  section.info {
    
  }

  div.entry {
    display: grid;
    columns: 2;
    column-gap: 50px;

    align-items: center;
    justify-content: center;

    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 100px;
    margin-right: 100px;
  }

  .item1 {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .item2 {
    grid-column-start: 2;
    grid-row-start: 1;
  }

  .item3 {
    grid-column-start: 1;
    grid-row-start: 2;
  }

  .item4 {
    grid-column-start: 2;
    grid-row-start: 2;
  }
</style>