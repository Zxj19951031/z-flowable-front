import Vue from "vue";
import Router from "vue-router";
import ProcessManager from "@/components/ProcessManager";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            redirect: "/components/process/ProcessManager",
        },
        {
            path: "/components/process/ProcessManager",
            name: "ProcessManager",
            component: ProcessManager,
        }
    ],
});
