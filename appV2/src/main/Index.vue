<script setup lang="ts">
import SkinSidebar from '@/components/partials/SkinSidebar.vue';
import HorizontalNav from '@/components/partials/HorizontalNav.vue';
import VerticalNav from '@/components/partials/VerticalNav.vue';
import Footer from '@/components/partials/Footer.vue';
import RightSidebar from '@/components/partials/RightSidebar.vue';
</script>

<template>
    <div class="container-scroller">
        <HorizontalNav />
        <div class="container-fluid page-body-wrapper" >
            <SkinSidebar />
            <RightSidebar />
            <VerticalNav />

            <div class="main-panel">
                <router-view />
                <Footer />
            </div>
        </div>
    </div>
</template>

<script scoped></script>
