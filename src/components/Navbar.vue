<template>
  <div class="navbar">
    <div class="container">
      <h1 class="logo" @click="goToHome()">GNEWS</h1>
      <p class="clicked" @click="goToClicked()">Clicked</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    goToClicked() {
      this.$router.push({ name: "Clicked" });
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: black;
  color: white;
  padding: 0.1rem;

  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 10vh;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.clicked {
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 600;
}
.logo {
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
