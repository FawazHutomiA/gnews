<template>
  <div class="container">
    <h2 class="title">News was clicked</h2>
    <div v-if="newsClicked.length > 0" class="item">
      <card :data="newsClicked" />
    </div>
    <div v-else>
      <span class="notFound">Not Data Found</span>
    </div>
    <div v-if="isLoading" class="loading-container">
      <loading />
    </div>
    <div
      v-else-if="!isLoading && newsClicked.length > 5"
      class="load"
      @click="loadMore"
    >
      Load More
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import Loading from "@/components/Dot.vue";
import Skeleton from "@/components/Skeleton.vue";
export default {
  name: "Clicked",
  components: {
    Card,
    Loading,
    Skeleton,
  },
  data() {
    return {
      newsClicked: [],
      isLoading: false,
    };
  },
  mounted() {
    this.fetchNewsClicked();
  },
  methods: {
    // get data from local storage
    fetchNewsClicked() {
      this.newsClicked = JSON.parse(localStorage.getItem("articles")) || [];
      if (this.newsClicked) {
        this.newsClicked = this.newsClicked.slice(0, 6);
      }
    },
    loadMore() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.newsClicked = JSON.parse(localStorage.getItem("articles"));
      }, 1000);
    },
  },
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  height: 100%;
  min-height: 80vh;
  width: 100%;
  max-width: 1280px;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
h1 {
  margin: 0 !important;
}
.item {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1rem;
  row-gap: 0.25rem;
}
.title {
  color: rgb(148 163 184);
  font-size: 1.75rem;
}

.load {
  color: rgb(148 163 184);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.notFound {
  font-size: 1.5rem;
  color: rgb(148 163 184);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
