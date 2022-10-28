<template>
  <div>
    <div>
      <h4 class="font-weight-bold mb-2">Orders</h4>
    </div>
    <div class="orders">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Buy Orders" name="first">
          <BuysTable />
        </el-tab-pane>
        <el-tab-pane label="Sell Orders" name="second">
          <SellsTable />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
  <script>
import { mapActions } from "vuex";
import BuysTable from "../components/buysTable.vue";
import SellsTable from "../components/sellsTable.vue";
export default {
  components: {
    BuysTable,
    SellsTable,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    ...mapActions("user", ["getDeposits", "getSells"]),
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  beforeMount() {
    this.getDeposits(), this.getSells();
  },
};
</script>