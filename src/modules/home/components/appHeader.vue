<template>
    <div>
        <div class="app--header_top">
            <AppNav/>
            <MobileNav/>
            <HeroSection/>
        </div>
    </div>
</template>

<script>
import AppNav from '@/components/static/appNav.vue';
import HeroSection from './heroSection.vue';
import MobileNav from '@/components/static/mobileNav.vue';
export default {
    components: { AppNav, HeroSection, MobileNav }
}
</script>