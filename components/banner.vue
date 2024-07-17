<template>
  <div :style="divStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    background_color?: string,
    background_image?: string
  }>()
</script>

<script lang="ts">
 export default {
    computed: {
      divStyle(): string {
        let style = "";

        if (this.background_color !== null) {
          style += `background-color: ${this.background_color};`;
        }

        if (this.background_image !== null) {
          style += `background-image: url(${this.background_image}); background-position: center; background-repeat:no-repeat; background-size: cover; background-blend-mode: lighten;`;
        }
        
        return style;
      },
    },
  }
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    
    text-align: center;

    margin: 0px;
  }
</style>