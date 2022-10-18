<template>
    <div>
        <div>
            <div>
                <div class="app--drawer shadow-lg">
                    <div class="text-center my-5">
                        <img src="@/assets/img/icon.svg" width="80" alt="">
                    </div>
                    <ul class="m-0">
                        <li>
                            <router-link to="/dashboard" class="d-flex align-items-center" style="gap:10px">
                                <span> <i-icon icon="material-symbols:dashboard-rounded"></i-icon> </span>
                                <span>Dashboard</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/orders" class="d-flex align-items-center" style="gap:10px">
                                <span> <i-icon icon="bxs:business" > </i-icon> </span>
                                <span>Orders</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/transactions" class="d-flex align-items-center" style="gap:10px">
                                <span> <i-icon icon="uil:transaction"></i-icon> </span>
                                <span>Transactions</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/referrals" class="d-flex align-items-center" style="gap:10px">
                                <span> <i-icon icon="ci:share"></i-icon> </span>
                                <span>Referrals</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>