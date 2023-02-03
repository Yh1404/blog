<script setup lang="ts">
import copyIcon from "@/assets/images/profile/copy.svg"
import { copy, msg } from "@/assets/js/utils"

const name = "Hao Yang"
const tel = "18792671185"
const email = "yh.lwy@qq.com"
</script>

<template>
    <main class="flex flex-row w-4/5 pt-40 md:pt-20 justify-between m-auto md:flex-col md:items-center">
        <div class="flex flex-col font-mono items-center">
            <Avatar />
            <span class="text-xl text-center mt-2 font-semibold tracking-wide">{{ name }}</span>
            <div class="flex flex-col mt-5 text-lg items-center">
                <p class="mt3 flex items-center">
                    <span class="whitespace-nowrap"> tel: {{ tel }} </span>
                    <img @click="copy(tel).then(() => msg('copied it!'))" class="w-5 h-5 ml-2" :src="copyIcon" />
                </p>
                <p class="mt3 flex items-center">
                    <span class="whitespace-nowrap"> email: {{ email }} </span>
                    <img @click="copy(email).then(() => msg('copied it!'))" class="w-5 h-5 ml-2" :src="copyIcon" />
                </p>
            </div>
        </div>
        <div class="flex flex-col max-w-md font-mono md:mt-10 md:w-auto">
            <h2 class="bg-black text-white text-xl p-1">个人经历</h2>
            <div class="mt-3">
                2020年毕业于西安邮电大学计算机学院软件工程专业，主修课程：软件工程、数据结构、计算机网络等学科。<br /><br />
                2020.5-2020.10<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                在武汉小果科技有限公司实习前端工程师职位，主要技术栈：React、redux、ts。期间参与开发森果零售通App、甜杏小程序、森果零售通桌面版<br /><br />
                2020.11-2021.11<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                在广州博彦科技有限公司担任全栈工程师，主要技术栈：vue、python、django、mysql。期间参与开发多个内部管理平台，并学习了python、项目部署等相关知识<br /><br />
                2021.11-2022-11<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                在众言科技担任前端开发工程师，主要技术栈：vue、echarts、elmentui。期间更加深入地学习了vue和前端项目搭建等更加全面的前端相关内容。
                <a class=" text-blue-500" href="./前端开发工程师-杨昊.pdf" title="个人简历">了解更多</a>
            </div>

            <h2 class="bg-black text-white text-xl p-1 mt-10">本站技术</h2>
            <div class="mt-3">
                &nbsp;&nbsp;&nbsp;&nbsp;
                本站是通过nginx搭建的静态站点，前端使用vue3、vueRouter、vite、typescript、tailwindcss开发<br />
            </div>
        </div>
    </main>
</template>
