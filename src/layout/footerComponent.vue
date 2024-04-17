<template>
  <div class="footer">
    <div class="footer-head">
      <div class="loyel-container subscrbe-app">
        <div class="subscribe">
          <Subscribe />
        </div>
        <div class="app-link">
          <img class="apple-img" src="@/assets/images/apple.png" alt="" />
          <img class="google-img" src="@/assets/images/google.png" alt="" />
        </div>
      </div>
    </div>
    <div class="loyel-container footer-body">
      <div class="loyel-container">
        <b-row cols="2" cols-sm="2" cols-md="2" cols-lg="4">
          <b-col>
            <div class="heading">about us</div>
            <div class="foot-body">
              <div class="item">
                <router-link to="/career">Careers</router-link>
              </div>
              <div class="item">
                <router-link to="/privecyPolicy">Privacy Policy</router-link>
              </div>
              <div class="item">
                <router-link to="/termsOfUse">Terms of Use</router-link>
              </div>
              <!-- <div class="item"><router-link to="/newsFeed">Press</router-link></div> -->
            </div>
          </b-col>
          <b-col>
            <div class="heading">help</div>
            <div class="foot-body">
              <div class="item">
                <router-link to="/customerCare">Customer Care</router-link>
              </div>
              <div class="item"><router-link to="/faq">FAQ</router-link></div>
              <div class="item">
                <router-link to="/returnPolicy">Return Policy</router-link>
              </div>
              <div class="item">
                <router-link to="/requestForQuestion"
                  >Request for Question</router-link
                >
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="heading">Business</div>
            <div class="foot-body">
              <div class="item">Sell On Loyel Shopping</div>
              <div class="item">Buy Wholesell</div>
            </div>
          </b-col>
          <b-col>
            <div class="heading">Company</div>
            <div class="foot-body">
              <div
                class="item"
                v-if="
                  globalData &&
                  globalData.shop_name !== null &&
                  globalData.shop_name !== undefined
                "
              >
                {{ globalData.shop_name }}
              </div>
              <div class="item">
                <b-icon icon="phone"></b-icon>
                <a
                  href="#"
                  v-if="
                    globalData &&
                    globalData.shop_phone !== null &&
                    globalData.shop_phone !== undefined
                  "
                  >{{ globalData.shop_phone }}</a
                >
              </div>
              <div
                class="item"
                v-if="
                  globalData &&
                  globalData.shop_address !== null &&
                  globalData.shop_address !== undefined
                "
              >
                {{ globalData.shop_address }}
              </div>
              <div
                class="item"
                v-if="
                  globalData &&
                  globalData.office_time !== null &&
                  globalData.office_time !== undefined
                "
              >
                {{ globalData.office_time }}
              </div>
              <div
                class="item"
                v-if="
                  globalData &&
                  globalData.office_email !== null &&
                  globalData.office_email !== undefined
                "
              >
                <b-icon icon="envelope"></b-icon>
                <a href="#">{{ globalData.office_email }}</a>
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="social-bank">
          <div class="social-group">
            <img src="@/assets/images/footer/facebook.png" alt="facebook" />
            <img src="@/assets/images/footer/instagram.png" alt="instagram" />
            <img src="@/assets/images/footer/twitter.png" alt="twitter" />
            <img src="@/assets/images/footer/youtube.png" alt="youtube" />
          </div>
          <div class="bank-group">
            <img src="@/assets/images/footer/pay-1.png" alt="facebook" />
            <img src="@/assets/images/footer/pay-2.png" alt="instagram" />
            <img src="@/assets/images/footer/pay-3.png" alt="twitter" />
            <img src="@/assets/images/footer/pay-5.png" alt="youtube" />
          </div>
        </div>
        <b-row>
          <b-col>
            Welcome to Loyel Shopping! <br />
            Loyel Online Shop is a B2C marketplace network for fashion and
            lifestyle buyers and sellers in categories including fashion, <br />
            and health & <br />
            beauty to buy and sell effortlessly online. Browse the vast digital
            catalog with a huge in style selection at the most competitive
            prices from trusted seller. Easily, enjoy our fast delivery services
            and benefit from flexible and secure online payments.
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="mobile-app-icon-bar d-block d-md-none">
      <div class="container-fluid">
        <div class="row text-center">
          <div class="col">
            <router-link to="/">
              <img src="@/assets/images/footer/home.png" />
            </router-link>
          </div>

          <div class="col">
            <router-link class="cart" :to="{ name: 'MobileCart' }">
              <img src="@/assets/images/footer/shop.png" />
              <span id="mwishlist-count" class="wishlist-count-foot">{{
                cartListCount
              }}</span>
            </router-link>
          </div>

          <!-- <div class="col">
            <router-link
              to="/"
              style="
                background: white;
                height: 60px;
                width: 60px;
                position: absolute;
                transform: translate(-50%, -44%);
                box-shadow: 0 0 8px #3c3c3cd1;
              "
            >
              <img
                v-if="
                  globalData &&
                  globalData.shop_logo !== null &&
                  globalData.shop_logo !== undefined
                "
                :src="baseUrl + globalData.shop_logo"
                style="
                  background: white;
                  height: 40px;
                  width: 40px;
                  position: absolute;
                  transform: translate(-50%, 16%);
                "
              />
            </router-link>
          </div> -->

          <div class="col">
            <slot v-if="$store.state.customerInfo !== null">
              <router-link
                :to="{
                  name: 'Wishlist',
                  params: {
                    name: $store.state.customerInfo.name.split(' ').join('-'),
                  },
                }"
              >
                <img src="@/assets/images/footer/favroite.png" />
                <span id="wishlist-count" class="wishlist-count-foot">{{
                  wishListCount
                }}</span>
              </router-link>
            </slot>
            <slot v-else>
              <router-link to="#">
                <img src="@/assets/images/footer/favroite.png" />
                <span id="wishlist-count" class="wishlist-count-foot">0</span>
              </router-link>
            </slot>
          </div>

          <div class="col" v-if="$store.state.customerInfo != null">
            <router-link
              :to="{
                name: 'profile',
                params: {
                  name: $store.state.customerInfo.name.split(' ').join('-'),
                },
              }"
            >
              <img src="@/assets/images/footer/profile.png" />
            </router-link>
          </div>
          <div class="col" v-else>
            <router-link :to="{ name: 'login' }">
              <img src="@/assets/images/footer/profile.png" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/pages/event-bus";
import Subscribe from "@/components/layout/subscribe.vue";
export default {
  name: "footerComponent",
  components: {
    Subscribe,
    EventBus,
  },
  data() {
    return {
      msg: "footer",
      wishListCount: "",
      cartListCount: "",
      baseUrl: this.$baseUrl,
    };
  },
  mounted() {
    EventBus.$on("wishList-count", () => {
      this.getWishListCount();
    });

    EventBus.$on("cartList-count", () => {
      this.getCartListCount();
    });
  },
  beforeMount() {
    if (this.$store.state.customerInfo != null) {
      this.getWishListCount();
      this.getCartListCount();
    }
  },
  computed: {
    //         wishListCount() {
    //     return this.$store.state.wishListCount;
    //   },
    cartCount() {
      return this.$store.state.cartCount;
    },
    globalData() {
      return this.$store.state.globalData;
    },
  },
  created() {
    this.$store.dispatch("fetchGlobalData");
  },
  methods: {
    getWishListCount() {
      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      // let formData=new FormData();
      this.$http
        .get("/customer/wish/list/count", config)
        .then((response) => {
          // console.log(response.data);
          this.wishListCount = response.data.wishListCount;
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },

    getCartListCount() {
      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      // let formData=new FormData();
      this.$http
        .get("/customer/cart/list/count", config)
        .then((response) => {
          // console.log(response.data);
          this.cartListCount = response.data.cartListCount;
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
  },
};
</script>

<style  scoped>
.mobile-app-icon-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background-color: white;
  border-top: 1px solid #0b1a2d2e;
  box-shadow: 0 0 20px #0b1a2d59;
  padding: 15px 0;
}

.mobile-app-icon-bar button {
  border: none;
  color: #ee222b;
  font-size: 18px;
  background-color: transparent;
  border-radius: 85px;
  padding: 2px 8px;
  /*box-shadow: 0 0 8px #3c3c3cd1;*/
}
.mobile-app-icon-bar a {
  border: none;
  color: #ee222b;
  /*color: #0b1a2d;*/
  font-size: 18px;
  background-color: transparent;
  border-radius: 85px;
  padding: 0px;
  /*box-shadow: 0 0 8px #3c3c3cd1;*/
}

.wishlist-count-foot,
.cart-count-foot,
.compare-count-foot {
  position: absolute;
  font-size: 15px;
  transform: translateY(-30%);
  font-weight: 600;
}

@media (min-width: 1540px) {
  .subscrbe-app {
    /* height:100%; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 1500px;
  }
  .footer-body {
    padding: 20px;
    align-items: center;
    display: flex;
    width: 1500px;
  }
}

@media (min-width: 1400px) and (max-width: 1539px) {
  .subscrbe-app {
    /* height:100%; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 1300px;
  }
  .footer-body {
    padding: 20px;
    align-items: center;
    display: flex;
    width: 1300px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .subscrbe-app {
    /* height:100%; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 1150px;
  }
  .footer-body {
    padding: 20px;
    align-items: center;
    display: flex;
    width: 1150px;
  }
}

@media (min-width: 1000px) and (max-width: 1199px) {
  .subscrbe-app {
    /* height:100%; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .footer-body {
    padding: 20px;
    align-items: center;
    display: flex;
    width: 100%;
  }
}

@media (min-width: 1px) and (max-width: 999px) {
  .subscrbe-app {
    /* height:100%; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .footer-body {
    padding: 20px;
    align-items: center;
    display: flex;
    width: 100%;
  }
}

.footer {
  width: 100%;
  min-height: 500px;
}
.footer-head {
  width: 100%;
  min-height: 60px;
  background: #1f1f1f;
}

.subscrbe-app > * {
  padding: 10px 0px;
}
.subscribe {
  position: relative;
  flex-basis: 600px;
}

.apple-img {
  height: 60px;
}
.google-img {
  height: 40px;
}

.footer-body .heading {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
}
.foot-body .item {
  font-weight: 300;
  cursor: pointer;
}
.foot-body .item a {
  color: black;
  text-decoration: none;
}
.foot-body .item a:hover {
  color: rgb(172, 159, 159);
  text-decoration: none;
}
.social-bank {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
</style>