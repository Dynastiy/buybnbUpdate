<template>
    <div>
      <div class="modal--mask">
        <div class="modal--content">
          <div class="text-right" @click="$emit('close')" role="button">
            <i-icon icon="eva:close-circle-outline" style="font-size: 30px" />
          </div>
          <div v-if="!submitted">
            <h4>Submit payment proof</h4>
            <div class="my-3">
              <div class="actions--container" role="button" style="gap: 5px">
                <input
                  @change="onFileChange"
                  type="file"
                  accept="image/*"
                  id="choose-file"
                  name="choose-file"
                />
                <label class="m-0" for="choose-file"
                  ><i-icon
                    icon="ic:outline-photo-size-select-actual"
                    class="file--icons"
                    style="font-size: 50px"
                  />
                  Select Photo
                </label>
              </div>
              <div v-if="imgSrc3">
                <img
                  :src="imgSrc3"
                  width="50px"
                  height="60px"
                  style="object-fit: cover; object-position: center"
                  alt=""
                />
              </div>
            </div>
  
            <!-- <div>
              <input
                type="text"
                v-model="wallet_address"
                placeholder="Enter Wallet Address(BNB Smart Chain Address)"
              />
            </div> -->
  
            <div class="mt-3">
              <div class="text-center" v-if="loading">
                <i class="el-icon-loading" style="font-size: 20px"></i>
              </div>
              <button
                v-else
                class="primary--btn"
                @click="makeDeposit"
                style="background-color: var(--main-color)"
              >
                Submit
              </button>
            </div>
          </div>
  
          <div class="text-center" v-else>
            <i class="el-icon-success text-success" style="font-size: 80px"></i>
            <h5>
              Order with reference
              <span class="text-success text-uppercase">
                {{ createRef(deposit_details.ref_no) }}
              </span>
              Submitted!!!
            </h5>
            <div>
            </div>
            <p class="small">Please wait while your order status is updated!!!</p>
              <button
                  @click="goToOrder"
                class="mt-2 primary--btn mx-auto"
                style="width: max-content"
              >
                View Submitted Order
              </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "vuex";
  import { createRef } from "@/plugins/filter";
  export default {
    data() {
      return {
        createRef,
        payload: {
          media: null,
        },
        wallet_address: "",
        imgSrc3: null,
      };
    },
    methods: {
      ...mapActions("home", ["createSell", "removeSubmitted"]),
      onFileChange(e) {
        this.imgPreview = true;
        var input = e.target;
        this.payload.media = input.files[0];
        console.log(this.payload.media);
        if (e.target.files.length > 0) {
          var src = URL.createObjectURL(e.target.files[0]);
          this.imgSrc3 = src;
        }
      },
      makeDeposit() {
        let formData = new FormData();
        formData.append("payment_proof", this.payload.media);
        // formData.append("wallet_address", this.wallet_address);
        formData.append("amount_bnb", Number(this.amount.bnb_amount));
        formData.append("amount_naira", Math.round(this.amount.ngn_amount));
        this.createSell(formData);
      },
      goToOrder(){
          this.$router.push(`/bnb/ng/order/${this.deposit_details.id}`)
          this.removeSubmitted()
      }
    },
    computed: {
      amount() {
        let res = JSON.parse(localStorage.getItem("amount"));
        console.log(res);
        return res;
      },
      ...mapState("home", ["loading", "submitted", "sell_details"]),
    },
  };
  </script>