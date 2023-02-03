<script setup lang="ts">
import sonImg from "@/assets/images/son/son.jpg"
import boxImg from "@/assets/images/son/box.svg"
import shImg from "@/assets/images/son/shangxiang.jpg"
import bgImg from "@/assets/images/son/bg.jpeg"
const doit = () => {
    let imgEle = document.createElement("img")
    imgEle.src = shImg
    imgEle.className =
        "doit -translate-x-1/2 left-1/2 bottom-32 grayscale opacity-0"
    let container = document.querySelector("#tiantang")
    imgEle.style.position = "absolute"
    container?.appendChild(imgEle)
    let timer = setTimeout(() => {
        container?.removeChild(imgEle)
        clearTimeout(timer)
    }, 4000)
}
</script>

<template>
    <main
        id="tiantang"
        class="flex flex-col items-center h-screen w-screen justify-between pb-10 md:pb-4 bg-contain bg-no-repeat"
        :style="{
            backgroundImage: 'url(' + bgImg + ')',
            backgroundColor: 'rgb(248, 249, 250)',
        }"
    >
        <div
            :style="{
                backgroundImage: 'url(' + sonImg + ')',
                width: '300px',
                height: '400px',
            }"
            alt="yang's son"
            class="mt-48 md:mt-20 grayscale bg-cover bg-no-repeat -z-0"
        ></div>
        <div class="flex flex-col items-center relative">
            <div
                :style="{
                    backgroundImage: 'url(' + boxImg + ')',
                    width: '300px',
                    height: '240px',
                }"
                class="grayscale bg-cover bg-no-repeat bg-transparent mt-auto"
            ></div>
            <button
                @click="doit"
                class="w-20 h-12 border-solid border-slate-100 bg-neutral-900 text-white rounded-xl mt-auto"
            >
                上香
            </button>

            <div class="h-10 w-1 bg-pink-500 absolute left-1/4"></div>
            <div class="w-1 h-12 bg-pink-500 absolute"></div>
            <div class="w-1 h-10 bg-pink-500 absolute left-3/4"></div>
        </div>
    </main>
</template>

<style>
@keyframes takeXiang {
    0% {
        bottom: -500px;
        opacity: 1;
    }

    75% {
        opacity: 0.75;
        bottom: 40rem;
    }

    100% {
        bottom: 20rem;
        opacity: 0.2;
    }
}
.doit {
    animation: takeXiang 2.5s ease-in-out;
}
</style>
