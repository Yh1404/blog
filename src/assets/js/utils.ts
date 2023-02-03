import Message from "@/components/Message.vue"
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

export function on(target: EventTarget, handle: EventListener) {
    target.addEventListener("click", handle)
}

export function off(target: EventTarget, handle: EventListener) {
    target.removeEventListener("click", handle)
}

export function isSameArray<T>(source: Array<T>, target: Array<T>): Boolean {
    let result = true
    if (source.length !== target.length) {
        result = false
    }
    for (const s in source) {
        if (typeof source[s] !== typeof target[s]) {
            result = false
            break
        }
        if (source[s] !== target[s]) {
            result = false
            break
        }
    }
    return result
}

export function isEmpty(o: any): Boolean {
    const toString = (val: any) => {
        return Object.prototype.toString.call(val)
    }
    if (typeof o === "string") return o === ""
    else if (o instanceof Array && toString(o) === "[object Array]") return o.length === 0 && JSON.stringify(o) === "[]"
    else if (toString(o) === "[object object]") return JSON.stringify(o) === "{}"
    return false
}
