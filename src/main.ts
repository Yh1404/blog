import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import "@/assets/style/base.css"
import components from "@/components/index"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(components)

app.mount("#app")
