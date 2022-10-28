<template>
  <div class="container--fluid mt-3">
    <div>
      <h4 class="font-weight-bold">Coin List</h4>
      <!-- <input type="text" placeholder="search"> -->
    </div>
    <div class="mt-4 other--tables">
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0">
          <tr>
            <th scope="col">Ranking</th>
            <th scope="col">Name</th>
            <th scope="col">Price (USD)</th>
            <th scope="col">Market Cap</th>
            <th scope="col">24Hrs Variation</th>
            <th scope="col">Action</th>
          </tr>
          <tr v-for="item in assets" :key="item.id">
            <td>
              {{ "#" + item.rank }}
            </td>
            <td class="d-flex align-items-center" style="gap: 10px">
              <img
                :src="`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`"
                width="20"
                alt=""
              />
              {{ item.name }}
              <span class="small text-secondary"> {{ item.symbol }} </span>
            </td>
            <td>
              {{ dollarFilter2(item.priceUsd) }}
            </td>
            <td>
              {{ dollarFilter2(item.marketCapUsd) }}
            </td>
            <td
              :class="
                item.changePercent24Hr.includes('-')
                  ? 'text-danger'
                  : 'text-success'
              "
            >
              {{ percentFilter(item.changePercent24Hr) }}
            </td>
            <td>
              <a :href="item.explorer" target="_blank"> View Explorer </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { dollarFilter2, percentFilter } from "@/plugins/filter";
import { mapState } from "vuex";
export default {
  data() {
    return {
      dollarFilter2,
      percentFilter,
    };
  },
  methods: {},
  beforeMount() {
    console.log(this.assets[3]);
  },
  computed: {
    ...mapState("home", ["assets"]),
  },
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 100%;
}
th {
  background-color: var(--main-color) !important;
  color: white;
}
th,
td {
  /* width: 100%; */
  border: none;
  /* padding: 5px; */
  background: var(--accent-color);
  padding: 1rem;
  font-size: 0.8rem;
}

th:nth-child(1) {
  border-radius: 20px 0 0 20px;
}

th:last-child {
  border-radius: 0 20px 20px 0;
}

td:nth-child(1) {
  border-radius: 20px 0 0 20px;
}

td:last-child {
  border-radius: 0 20px 20px 0;
}
</style>