import { createRouter, createWebHistory } from "vue-router"

const HomeView = () => import("../views/HomeView.vue")
const SonView = () => import("../views/SonView.vue")
const AutoChartViewVue = () => import("@/views/autoChartView.vue")
const EditChart = () => import("@/views/autoChartView.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/yanghao",
        },
        {
            path: "/yanghao",
            name: "home",
            component: HomeView,
            meta: {
                title: "personal profile",
            },
        },
        {
            path: "/son",
            name: "qingshan",
            component: SonView,
            meta: {
                title: "my son",
            },
        },
    ],
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})

export default router
