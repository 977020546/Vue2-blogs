<template>
  <div id="ShowBlogs">
    <!-- <AddBlog /> -->
    <!-- <ShowBlogs /> -->
    <BlogHeader />
    <router-view></router-view>
  </div>
</template>

<script>
// import AddBlog from "./components/AddBlog";
// import ShowBlogs from "./components/ShowBlogs";
import BlogHeader from "./pages/BlogHeader.vue";

export default {
  name: "App",
  components: {
    // AddBlog,
    // ShowBlogs,
    BlogHeader,
  },
};
</script>

<style></style>
