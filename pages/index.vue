<template>
  <div>
    <NavBar></NavBar>
    
    <section class="hero" id="hero">
      <div v-if="isDesktop">
        <div class="front">
          <LogoGame></LogoGame>
        </div>
        <h2 class="behind" style="text-align: center;">
          Santa Clara University's <br>
          Video Game Development Club
        </h2>
      </div>

      <div v-else style="text-align: center;">
        <h1 style="font-size: 10rem; font-weight: 800; margin-bottom: 0px;">VGDC</h1>

        <h2 style="font-size: 2rem; margin-top: 0px;">
          Santa Clara University's <br>
          Video Game Development Club
        </h2>
      </div>
    </section>

    <Banner background_image="/images/home/Lust_Arena.jpg">
      <p style="font-size: var(--medium); opacity: 1.0">
        Check out our current Project: <br>
        <NuxtLink to="/" style="color: var(--light)">Wrath's Bargain</NuxtLink>
      </p>
    </Banner>

    <section class="info">
      <div style="text-align: center;">
        <h1 style="margin-bottom: 10px;">Welcome to SCU's Video Game Development Club (VGDC)!</h1>
        <p style="margin-top: 0px;">
          All skill levels and majors welcome! No experience needed :) <br>
          <NuxtLink @click="goToSection('join')" rel="nofollow">Join us</NuxtLink>
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
          Our club meets weekly in <NuxtLink to="https://www.scu.edu/map/l/Learning-Commons-and-Library" target="_blank">LC 203</NuxtLink> from 5:00 pm to 7:00 pm. Feel free to stop 
          by :) No experience needed!
        </p>
      </div>

      <div class="entry">
        <h2 class="item1" id="join" style="text-align: center;">Join us</h2>
        <NuxtImg class="item3" src="/images/home/boba_run.jpg" :sizes="imgEntrySizes"/>

        <p class="item4">
          Join at any time of the year! Feel free to join our <NuxtLink :to="LINKS.discord.link" target="_blank">Discord</NuxtLink> 
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
          We collaborate, discuss, and iterate on current projects in order to design fun and immersive games. 
          We collaborate with our art, audio, and world building teams to discuss what gameplay features would 
          corroborate with our initial game idea and general atmosphere of the project. We then implement these 
          ideas with the help of our programming team to create a playable prototype. From there, we host playtest 
          sessions where members of the club play our prototype and give feedback on what can be improved. Then, 
          we create another prototype to playtest and the cycle continues until we are satisfied with our game. 
          Along the way, we make sure to host club-wide as well as team-wide discussions to assess the current 
          direction of our game.
        </p>
      </div>

      <div class="entry">
        <h2 class="item2" style="text-align: center;">Art</h2>
        <JustifiedGrid class="item4" style="width:500px;" :columnRange="[2,2]" :gap="10" :isCroppedSize="true">
          <NuxtImg src="/images/home/art/Fallen_Angel_Concept.JPG" height="200" quality="100" />
          <NuxtImg src="/images/home/art/height_comparison.png" height="200" quality="100" />
          <NuxtImg src="/images/home/art/lust_teleport.gif" height="200" quality="100" />
          <NuxtImg src="/images/home/art/Female_Tank.JPG" height="200" quality="100" />
        </JustifiedGrid>

        <p class="item3">
          We create concept art, sprites, and animations to bring our game to life. Our concept art helps us 
          to better plan the atmosphere of our game and help everyone involved to understand what characters, 
          enemies, and environments look like and act. Our sprites and animations give our game life and help 
          to implement the atmosphere of our game. We also make sure to design our environment, characters, 
          enemies, and UI elements with visual clarity in mind. We also create standards for our art so that 
          multiple artists can create sprites and animations in a unified and consistent artstyle. 
        </p>
      </div>

      <div class="entry">
        <h2 class="item1" style="text-align: center;">Programming</h2>
        <NuxtImg class="item3" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item4">
          We design, implement, and test the technical features of our game in order to make a game that works 
          as intended and feels great to play. We design features alongside the game design team and implement 
          them with game feel, balance, and performance in mind. We also make sure that level and game design 
          features are easily editable so that the game design team can easily build levels and tweak mechanics. 
          We also make sure to thoroughly test the features we implement so that they adhere to our desired game 
          feel and work as intended. 
        </p>
      </div>

      <div class="entry">
        <h2 class="item2" style="text-align: center;">Audio</h2>
        <NuxtImg class="item4" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item3">
          The audio team at VGDC consists of both music and sound design. We adopt a player first mentality 
          that focuses on elevating the player's experience using sound. In addition, the majority of focus 
          is on sound design, while music will typically be created as needed later when the game is more 
          developed. Both music and sound have preset general standards to maximize consistency across the 
          board—whether that be a tone, keyword, or genre. <br><br>

          Members can use any DAW they wish, and workflow is an iterative approach. When a sound asset is 
          produced it is typically sent to the sound design discord channel for constructive feedback. Most 
          importantly, we monitor and work closely with other teams to maximize collaboration and have fun 
          creating!
        </p>
      </div>

      <div class="entry">
        <h2 class="item1" style="text-align: center;">Writing</h2>
        <NuxtImg class="item3" src="/images/home/group_pic.jpg" :sizes="imgEntrySizes"/>

        <p class="item4">
          We design and write the world, plot, and characters for our project to create an immersive game 
          inhabited by believable characters with an engaging plot. To do this, we host club-wide and team-wide 
          discussions to expand off of our initial project idea. We then iterate on these ideas as development 
          progresses; changing and re-writing anything that no longer makes sense or fits the game's atmosphere. 
        </p>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
  import { LINKS, goToSection } from '~/constants/index';

  import { JustifiedGrid } from '@egjs/vue-grid';
</script>

<script lang="ts">
  export default {
    data: () => {
      return {
        isDesktop: true,
      };
    },
    methods: {
      checkScreenSize() {
        this.isDesktop = window.innerWidth > 660;
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

  .front {
    position: relative;
    z-index: 2;
  }

  .behind {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
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
    margin-left: 75px;
    margin-right: 75px;
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

    margin-top: 0px;
  }

  .item4 {
    grid-column-start: 2;
    grid-row-start: 2;

    margin-top: 0px;
  }
</style>