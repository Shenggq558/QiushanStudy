import VueRouter from "vue-router"
const router = new VueRouter({
    mode: "hash",
    routes: [
        //配置路由的路径
        {
            path: '/',
            component: () => import("@/views/myHome/myHome.vue")
        }
    ]
})
export default router