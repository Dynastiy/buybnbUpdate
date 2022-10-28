<template>
    <div>
        <div>
            <div class="app--header container-fluid">
                <div class="d-flex align-items-center justify-content-end">
                    
                    <!-- <div class="search--field">
                        <i-icon icon="akar-icons:search"></i-icon>
                        <input type="text" placeholder="search">
                    </div> -->

                    <div class="user d-flex align-items-center" style="gap:15px">
                        <span :class="user.name.charAt(0)" class="user--avatar text-capitalize"> {{ user.name.charAt(0) }} </span>
                        <div>
                            <h6 style="font-weight:400"> {{ user.name }} </h6>
                            <router-link to="/profile" class="text-muted d-flex align-items-center mt-1" style="font-size:12px; gap:5px" role="button">
                                <span> <i-icon icon="charm:person"></i-icon> </span>
                                <span>View Profile</span>
                            </router-link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState("auth", ["user"])
    }
}
</script>