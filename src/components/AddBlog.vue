<template>
  <div id="AddBlog">
    <h2>添加博客:</h2>
    <form>
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
    <label>作者：</label>
    <input type="text" v-model="blog.author" />
    <!-- <select v-model="blog.author">
      <option v-for="author in authors" :key="author">{{ author }}</option>
    </select> -->
    <button @click.prevent="post">添加博客</button>
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
  name: "AddBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
    };
  },
  methods: {
    post() {
      this.axios.post("/posts.json", this.blog).then((data) => {
        console.log(data);
        alert("添加成功");
        this.$router.push({ path: "/blogs" });
      });
    },
  },
};
</script>

<style scoped>
#AddBlog * {
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
