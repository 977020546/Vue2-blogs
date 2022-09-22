// import ShowBlogs from "./components/ShowBlogs.vue";
import AddBlog from "../components/AddBlog.vue";
import SingleBlog from "../components/SingleBlog.vue";
export default [
  {
    path: "/",
    redirect: "/blogs",
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../components/ShowBlogs.vue"),
  },
  {
    path: "/addblogs",
    name: "addblogs",
    component: AddBlog,
  },
  {
    path: "/blogs",
    name: "SingleBlog",
    component: SingleBlog,
  },
  {
    path: "/edit",
    name: "EditBlog",
    component: () => import("../components/EditBlog.vue"),
  },
];
