import type { App, Component } from "vue"

import MessageVue from "./Message.vue"
import SelectVue from "./Select.vue"
import AvatarVue from "./Avatar.vue"

export interface ComponentsList {
    readonly [key: string]: Component
}

const components: ComponentsList = {
    Message: MessageVue,
    Select: SelectVue,
    Avatar: AvatarVue,
}

// register components automatically
export default {
    install: function (app: App<Element>) {
        Object.keys(components).forEach(comName => app.component(comName, components[comName]))
    },
}
