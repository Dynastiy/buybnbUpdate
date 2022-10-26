<template>
    <div>
        <AppNav/>
        <MobileNav/>
        <div class="py-3" style="background-color:var(--main-color)">
            <div class="container--fluid">
                <BnbHeader/>
            </div>
            <router-view/>
        </div>
        <BuyOrders/>
    </div>
</template>

<script>
import AppNav from '@/components/static/appNav.vue';
import BuyOrders from '../components/buyOrders.vue';
import BnbHeader from '../components/bnbHeader.vue';
import MobileNav from '@/components/static/mobileNav.vue';
export default {
    components: { AppNav, BuyOrders, BnbHeader, MobileNav },
    methods: {
    },
    beforeMount(){
    }
}
</script>