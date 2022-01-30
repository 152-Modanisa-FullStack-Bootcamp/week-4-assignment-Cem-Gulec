import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "@/views/MainPage";
import FavoritesPage from "@/views/FavoritesPage";
import WatchPage from "@/views/WatchPage";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: MainPage},
        {path: "/favorites/:userid", component: FavoritesPage},
        {path: "/watch", component: WatchPage}
    ]
});

export default router;