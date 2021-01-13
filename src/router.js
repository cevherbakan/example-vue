import Vue from "vue"
import VueRouter from "vue-router"
import ExamTypes from "./components/ExamTypes"
import Homepage from "./components/Homepage"
import Login from "./components/Login"

import store from "./store"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Homepage,
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/login")
                }
            }
        },
        {
            path: "/exam-types",
            component: ExamTypes,
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/login")
                }
            }
        },
        {path: "/login", component: Login}
    ],
    mode: "history"
})