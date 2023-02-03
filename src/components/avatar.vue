<script setup lang="ts">
import avatar from "@/assets/images/profile/avt.jpg"
</script>

<template>
    <div
        class="rounded-full w-32 h-32 bg-slate-700"
        :style="{
            background: 'url(' + avatar + ' ) no-repeat',
            backgroundSize: '250px',
            backgroundPosition: '-110px -40px',
        }"
    ></div>
</template>

<style></style>
