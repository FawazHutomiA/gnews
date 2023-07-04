<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </router-view>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Default",
  components: {
    Navbar,
    Footer,
  },
};
</script>
