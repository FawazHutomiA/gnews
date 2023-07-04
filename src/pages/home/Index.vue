<template>
  <div class="container">
    <h2 class="title">Welcome to GNEWS</h2>
    <!-- search input -->
    <div class="search">
      <input
        type="text"
        placeholder="Search news..."
        class="input"
        v-model="search"
        @keyup.enter="searchNews"
      />
      <button @click="searchNews" class="button">Search</button>
    </div>
    <div v-if="news.length > 0" class="item">
      <card :data="news" />
    </div>
    <div v-else>
      <span class="notFound">Not Data Found</span>
    </div>
    <div v-if="isFetching" class="item">
      <skeleton />
    </div>
    <div v-if="isLoading" class="loading-container">
      <loading />
    </div>
    <div
      v-else-if="!isLoading && news.length > 5"
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
import axios from "axios";

export default {
  name: "Home",
  components: {
    Card,
    Loading,
    Skeleton,
  },
  data() {
    return {
      news: [],
      key: "42a9078f2f8a4632b74bfd27fa751483",
      pageSize: 6,
      isLoading: false,
      search: "",
      isFetching: false,
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      this.isFetching = true;
      axios
        .get(`https://newsapi.org/v2/everything`, {
          params: {
            apiKey: this.key,
            pageSize: this.pageSize,
            domains: "wsj.com,nytimes.com",
            q: this.search,
          },
        })
        .then((response) => {
          const { status, articles } = response.data;
          if (status === "ok") {
            this.news = articles;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isFetching = false;
        });
    },
    loadMore() {
      this.isLoading = true;
      this.pageSize += 6;
      setTimeout(() => {
        this.fetchNews();
        this.isLoading = false;
      }, 1000);
    },
    searchNews() {
      this.fetchNews();
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  max-width: 1280px;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
h2 {
  margin-top: 0 !important;
  margin-bottom: 1.5rem;
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.button {
  border-radius: 0.25rem;
  background-color: black;
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
}
.input {
  border-radius: 0.25rem;
  border: 1px solid rgb(148 163 184);
  padding: 1rem 2rem;
  width: 100%;
  margin-right: 1rem;
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
