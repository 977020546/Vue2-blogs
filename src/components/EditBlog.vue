<template>
  <div id="EditBlog">
    <h2>编辑博客:</h2>
    <form v-if="!submited">
      <label>博客标题:</label>
      <input type="text" v-model="blog.title" required />
      <label>博客内容:</label>
      <textarea v-model="blog.content"></textarea>
      <label>分类:</label>
      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label>Angular</label>
        <input type="checkbox" value="Angular" v-model="blog.categories" />
      </div>
    </form>
    <div v-if="submited">
      <h3>你的博客编辑成功！</h3>
    </div>
    <label>作者：</label>
    <input type="text" v-model="blog.author" />
    <!-- <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select> -->
    <button @click.prevent="edit">编辑博客</button>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <p>博客内容:</p>
      <p>{{ blog.content }}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories" :key="category.id">
          {{ category }}
        </li>
      </ul>
      <p>作者：{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditBlog",
  data() {
    return {
      id: this.$route.query.id,
      blog: {},
      authors: [],
      submited: false,
    };
  },
  methods: {
    fetchData() {
      console.log(this.id);
      this.axios.get("/posts/" + this.id + ".json").then((res) => {
        console.log(res);
        this.blog = res.data;
      });
    },
    edit() {
      this.axios.put("/posts/" + this.id + ".json", this.blog).then((res) => {
        console.log(res);
        this.blog = res.data;
        alert("编辑成功");
        this.$router.push({ path: "/blogs" });
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
#EditBlog * {
  box-sizing: border-box;
}
#AddBlog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
