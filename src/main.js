import { createApp } from "vue";
import "@/assets/css/style.css";
import App from "./App.vue";
import routes from "./routes";

createApp(App).use(routes).mount("#app");
