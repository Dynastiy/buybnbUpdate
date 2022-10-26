<template>
    <div>
       <AppHeader/>
       <PxAssetsTable/>
       <HowItWorks/>
       <DelayedTransaction/>
    </div>
</template>

<script>
import AppHeader from '../components/appHeader.vue';
import PxAssetsTable from '../components/pxAssetsTable.vue';
import HowItWorks from '../components/howItWorks.vue';
import DelayedTransaction from '../components/delayedTransaction.vue';
export default {
    components: { AppHeader, PxAssetsTable, HowItWorks, DelayedTransaction },
    
}
</script>