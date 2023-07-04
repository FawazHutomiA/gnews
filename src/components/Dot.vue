<template>
  <div class="loading-container">
    <div class="dot-loader">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.dot-loader {
  display: flex;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: #000;
  animation: dot-blink 1s infinite;
}

@keyframes dot-blink {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
