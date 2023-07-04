<template>
  <div v-for="(item, index) in data" :key="index">
    <div class="container" @click="getData(index)">
      <img :src="item.urlToImage" alt="image" class="image" />
      <div class="content">
        <p class="title">{{ limitStringTitle(item.title) }}</p>
        <p class="description">{{ limitStringDesc(item.description) }}</p>
        <div class="bottom">
          <p class="author">Author: {{ item.author }}</p>
          <p class="date">
            {{ formatDate(item.publishedAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { truncate } from "lodash-es";
import moment from "moment";
export default {
  name: "Card",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    limitStringDesc(string) {
      return truncate(string, { length: 150 });
    },
    limitStringTitle(string) {
      return truncate(string, { length: 60 });
    },
    getData(index) {
      let articles = JSON.parse(localStorage.getItem("articles")) || [];

      articles.push(this.data[index]);
      console.log(articles);
      localStorage.setItem("articles", JSON.stringify(articles));
      window.open(this.data[index].url, "_blank");
    },
    formatDate(date) {
      return moment(date).format("ddd MMMM YYYY HH:mm");
    },
  },
};
</script>
<style scoped>
.image {
  width: 40rem;
  object-fit: cover;
  object-position: center;
}
.image:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}
.title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
  padding-left: 1rem;
  padding-right: 1rem;
}
.container {
  position: relative;
  cursor: pointer;
}
.content {
  position: absolute;
  bottom: 0;
  margin-bottom: 0.2rem;
  width: 40rem;
  height: 10rem;
  background-color: rgba(0, 0, 0, 0.5);
}
.description {
  font-size: 1rem;
  color: #ffffff;
  padding-left: 1rem;
  padding-right: 1rem;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}

.author {
  padding-left: 1rem;
}
.date {
  padding-right: 1rem;
}
</style>
