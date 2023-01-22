<template>
  <v-app>
    <Drawer />

    <v-main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis amet
      non nisi hic qui ullam eaque assumenda reprehenderit molestias. Deleniti
      beatae laudantium mollitia sint adipisci quae explicabo nam ea.
    </v-main>
  </v-app>
</template>

<script>
import Drawer from './Drawer.vue'
export default {
  data: () => ({
    active: true,
  }),

  components: {
    Drawer
  }
};
</script>