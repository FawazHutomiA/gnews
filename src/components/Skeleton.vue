<template>
  <div v-for="index in 6" :key="index">
    <div class="card is-loading">
      <div class="image"></div>
      <div class="content">
        <h2></h2>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Skeleton",
};
</script>
<style>
.card {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  .image {
    img {
      max-width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
}
.card.is-loading {
  .image {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .image {
    height: 18rem;
    border-radius: 0.25rem;
    width: 40rem;
    object-fit: cover;
    object-position: center;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
