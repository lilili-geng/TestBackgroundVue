import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 滑块验证
import MakeitCaptcha from "makeit-captcha";
import "makeit-captcha/dist/captcha.min.css";

// 动画库
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

// 全局注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(store).use(router).use(MakeitCaptcha).use(MotionPlugin).mount("#app");