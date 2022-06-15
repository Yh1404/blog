<script setup lang="ts">
import { onMounted, ref } from "vue"

defineProps({
    msg: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "success",
    },
})
</script>

<template>
    <div
        :class="[
            'absolute',
            'left-1/2',
            'border-solid',
            'border-2',
            'rounded-lg',
            'border-slate-300',
            '-translate-x-1/2',
            'font-mono',
            'top-10',
            'px-1',
            'py-1',
            'text-black',
            'msg-animation',
        ]"
    >
        {{ msg }}
    </div>
</template>

<style>
.msg-animation {
    animation: msgAnimation 0.1s ease-in-out 0s;
}
@keyframes msgAnimation {
    from {
        top: -10rem;
    }
    to {
        top: 2rem;
    }
}
</style>
