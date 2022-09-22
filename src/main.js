import Vue from "vue";
// import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import Routes from "./router/routes";
import axios from "axios";
import VueAxios from "vue-axios";
// Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// 全局配置
// axios.defaults.baseURL = "https://vuedemo-c3f62-default-rtdb.firebaseio.com";
axios.defaults.baseURL =
  "http://106.55.107.78:8888/phpmyadmin/tbl_structure.php";

Vue.config.productionTip = false;

// 全局自定义指令
// Vue.directive("rainbow", {
//   bind(el) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   },
// });

/*Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1260px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "colum") {
      el.style.background = "#6677cc";
      el.style.padding = "20px";
    }
  },
});*/

// 自定义一个过滤器
// Vue.filter("Uppercase", function (value) {
//   return value.toUpperCase();
// });

// Vue.filter("snippet", function (value) {
//   return value.slice(0, 100) + "...";
// });

// 创建路由
const router = new VueRouter({
  mode: "history",
  routes: Routes,
});

new Vue({
  render: (h) => h(App),
  router,
  mounted() {
    console.log(this);
  },
}).$mount("#app");
