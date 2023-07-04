<template>
  <div class="error-page">
    <h1>404</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <button @click="goToHome">Back to Home</button>
  </div>
</template>

<script>
export default {
  name: "Error",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
  text-align: center;
}

.error-page h1 {
  font-size: 72px;
  margin-bottom: 16px;
}

.error-page p {
  margin-bottom: 16px;
}

.error-page button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

.error-page button:hover {
  background-color: #0056b3;
}
</style>
