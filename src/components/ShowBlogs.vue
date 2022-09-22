<template>
  <div v-theme:colum="'narrow'" id="singleblogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <div class="singleblog" v-for="blog in filteredBlogs" :key="blog.id">
      <router-link :to="{ name: 'SingleBlog', query: { id: blog.id } }"
        ><h2 v-rainbow>{{ blog.title | Uppercase }}</h2></router-link
      >
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    this.axios
      .get()
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((res) => {
        var blogsArray = [];
        for (let key in res) {
          console.log(key);
          console.log(res[key]);
          res[key].id = key;
          blogsArray.unshift(res[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  filters: {
    Uppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + "...";
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
    theme: {
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
    },
  },
};
</script>
<style scoped>
#singleblogs {
  max-width: 800px;
  margin: 0 auto;
}
.singleblog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#singleblogs a {
  color: #444;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
