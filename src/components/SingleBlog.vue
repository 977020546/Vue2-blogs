<template>
  <div id="Single-Blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>作者：{{ blog.author }}</p>
    <p>分类：</p>
    <ul>
      <li v-for="(category, index) in blog.categories" :key="index">
        {{ category }}
      </li>
    </ul>
    <button @click="deleteSingleBlog">删除</button>
    <router-link :to="{ name: 'EditBlog', query: { id: this.id } }"
      ><button>编辑</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.query.id,
      blog: {},
    };
  },
  created() {
    this.axios
      .get("/posts/" + this.id + ".json")
      .then((res) => {
        this.blog = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteSingleBlog() {
      this.axios
        .delete("/posts/" + this.id + ".json")
        .then((res) => {
          alert("删除成功");
          this.$router.push({ path: "/blogs" });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#Single-Blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
button {
  margin-right: 10px;
}
</style>
