<template>
  <component :is="layout">
    <router-view :key="$route.fullPath" />
  </component>
</template>

<script>
import defaultLayout from "@/layouts/Default.vue";
export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || defaultLayout;
    },
  },
};
</script>

<style scoped></style>
