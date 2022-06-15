<script setup lang="ts">
import avatar from "@/components/avatar.vue"
import copyIcon from "@/assets/images/copy.svg"
import { copy, msg } from "@/assets/js/utils"

const name = "Hao Yang"
const tel = "18792671185"
const email = "yh.lwy@qq.com"
</script>

<template>
    <main
        class="flex flex-row w-4/5 pt-40 md:pt-20 justify-between m-auto md:flex-col md:items-center"
    >
        <div class="flex flex-col font-mono items-center">
            <avatar></avatar>
            <span
                class="text-xl text-center mt-2 font-semibold tracking-wide"
                >{{ name }}</span
            >
            <div class="flex flex-col mt-5 text-lg items-center">
                <p class="mt3 flex items-center">
                    <span class="whitespace-nowrap"> tel: {{ tel }} </span>
                    <img
                        @click="copy(tel).then(() => msg('copied it!'))"
                        class="w-5 h-5 ml-2"
                        :src="copyIcon"
                    />
                </p>
                <p class="mt3 flex items-center">
                    <span class="whitespace-nowrap"> email: {{ email }} </span>
                    <img
                        @click="copy(email).then(() => msg('copied it!'))"
                        class="w-5 h-5 ml-2"
                        :src="copyIcon"
                    />
                </p>
            </div>
        </div>
        <div class="flex flex-col max-w-md font-mono md:mt-10 md:w-auto">
            <h2 class="bg-black text-white text-xl p-1">个人经历</h2>
            <div class="mt-3">
                &nbsp;&nbsp;&nbsp;&nbsp;
                2020年毕业于西安邮电大学计算机学院软件工程专业，主修课程：软件工程、数据结构、计算机网络等学科。<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                毕业至今从事web前端开发工作，熟悉ES6、响应式页面开发、vue2、3及其相关生态工具、typescript。
            </div>

            <h2 class="bg-black text-white text-xl p-1 mt-10">本站技术</h2>
            <div class="mt-3">
                &nbsp;&nbsp;&nbsp;&nbsp;
                本站是通过nginx搭建的静态站点，前端使用vue3、vueRouter、vite、typescript、tailwindcss开发<br />
            </div>
        </div>
    </main>
</template>
