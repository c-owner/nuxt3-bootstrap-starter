<script setup lang="ts">
import { useHead } from "#head";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
    window.scrollTo(0, 0);
});

useHead({
    title: "Corner Nuxt3 template ",
    htmlAttrs: {
        lang: "ko"
    },
    meta: [
        { charset: "utf-8" },
        {
            name: "viewport",
            content: "width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no,viewport-fit=cover"
        },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/img/logo_clear_fsj.png" }]
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
