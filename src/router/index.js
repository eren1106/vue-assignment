import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DragDropView from "@/views/DragDropView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/dragndrop",
            name: "dragndrop",
            component: DragDropView,
        }
    ],
});

export default router;
