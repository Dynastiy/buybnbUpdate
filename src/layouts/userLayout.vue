<template>
    <div>
        <div>
            <div>
                <div>
                    <AppDrawer/>
                </div>
                <div id="main--content">
                    <MobileHeader/>
                    <AppHeader/>
                    <div class="container-fluid">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/static/appDrawer.vue';
import AppHeader from '@/components/static/appHeader.vue';
import MobileHeader from '@/components/static/mobileHeader.vue';
export default {
    components: { AppDrawer, AppHeader, MobileHeader }
}
</script>