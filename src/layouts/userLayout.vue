<template>
    <div>
        <div>
            <div>
                <div>
                    <AppDrawer/>
                </div>
                <div id="main--content">
                    <AppHeader/>
                    <div class="container--fluid">
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
export default {
    components: { AppDrawer, AppHeader }
}
</script>