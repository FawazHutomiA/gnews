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
      <div v-if="item.isClicked">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-check"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { truncate } from "lodash-es";
import moment from "moment";
export default {
  name: "Card",
  data() {
    return {
      list: [],
    };
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
      if (
        !this.list.includes(this.data[index]) &&
        !this.data[index].isClicked
      ) {
        this.list.push(this.data[index]);
        this.data[index].isClicked = true;
      } else if (this.data[index].isClicked) {
        this.data[index].isClicked = false;
        this.list.splice(this.list.indexOf(this.data[index]), 1);
      } else {
        this.data[index].isClicked = true;
        this.list.push(this.data[index]);
      }
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

.feather {
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 1rem;
  color: greenyellow;
}
</style>
