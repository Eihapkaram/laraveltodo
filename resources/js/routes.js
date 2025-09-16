import Home from "../js/components/HomeCom.vue";
import AboutP from "./components/AboutP.vue";
import CreatePost from "./components/CreatePost.vue";
import EditPost from "./components/EditPost.vue";
export const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: AboutP,
    },
    {
        path: "/create",
        name: "create",
        component: CreatePost,
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: EditPost,
    },
]
