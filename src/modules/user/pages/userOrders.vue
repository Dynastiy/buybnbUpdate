<template>
  <div>
    <div>
      <h4 class="font-weight-bold mb-2">Orders</h4>
    </div>
    <div class="orders">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="All Orders" name="first">
          <h5 class="text-bold">All Orders</h5>
        </el-tab-pane>
        <el-tab-pane label="Pending Orders" name="second">
            <h5 class="text-bold">Pending Orders</h5>
        </el-tab-pane>
        <el-tab-pane label="Completed Orders" name="third">
            <h5 class="text-bold">Completed Orders</h5>
        </el-tab-pane>
        <el-tab-pane label="Cancelled Orders" name="fourth">
            <h5 class="text-bold">Cancelled Orders</h5>
        </el-tab-pane>
      </el-tabs>

      <!-- Data table  -->
      <section>
        <OrdersTable/>
      </section>
    </div>
  </div>
</template>
  <script>
import OrdersTable from '../components/ordersTable.vue';
export default {
    data() {
        return {
            activeName: "first",
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
    components: { OrdersTable }
};
</script>