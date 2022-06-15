import Message from "@/components/message.vue"
import { createVNode, render, type ComponentPublicInstance } from "vue"

/** copy text to the clipboard */
export function copy(text: string): Promise<void> {
    if (navigator.clipboard) {
        const clip = navigator.clipboard
        return clip.writeText(text)
    } else {
        return new Promise(resolve => {
            const inputDom = document.createElement("input")
            inputDom.value = text
            inputDom.select()
            document.execCommand("copy")
            resolve()
        })
    }
}

export function msg(text: string) {
    const container = document.createElement("div")

    const vm = createVNode(Message, { msg: text })

    render(vm, container)

    document.body.appendChild(container)

    let timer = setTimeout(() => {
        document.body.removeChild(container)
        clearTimeout(timer)
    }, 2000)
}
