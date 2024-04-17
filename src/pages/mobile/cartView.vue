<template>
  <div class="loyel-shopping-cart" ref="top">
    <slot v-if="countAllItem > 0">
    <div class="cart-product-loyal-mobile table-responsive">
      <h3 class="loyel-shopping-cart-title">Shopping cart</h3>
      <div class="col-12">
        <div class="col ">
          <div class="sc-shopping-cart-valid-list">
            <div
              class="sc-c-supplier-container"
              v-for="(sellerProducts, sellerId) in cartList"
              :key="sellerId"
            >
              <div class="sc-c-supplier-container-main">
                <div class="sc-c-supplier-container-hd">
                  <div class="sc-common-row">
                    <label class="next-checkbox-wrapper">
                      <span class="next-checkbox">
                        <!-- <span class="next-checkbox-inner">
                            <i
                              class="next-icon next-icon-select next-xs next-checkbox-select-icon"
                            ></i>
                          </span> -->
                        <slot
                          v-if="
                            totalCheckSeller(sellerProducts.cart_stock_info) ==
                            totalStockSeller(sellerProducts.cart_stock_info)
                          "
                        >
                          <img
                            src="@/assets/images/check.png"
                            alt="facebook"
                            style="height: 20px; width: 20px; cursor: pointer"
                            @click="sellerWise(sellerProducts.id)"
                          />
                        </slot>
                        <slot v-else>
                          <img
                            src="@/assets/images/checkbox.png"
                            alt="facebook"
                            style="height: 20px; width: 20px; cursor: pointer"
                            @click="sellerWise(sellerProducts.id)"
                          />
                        </slot>
                      </span>
                    </label>
                    <span class="sc-c-supplier-container-sellerInfo">
                      <router-link
                        class="sc-c-supplier-container-supplierLink"
                        :to="{
                          name: 'shop',
                          params: {
                            slug: sellerProducts.seller_info.shop_info.slug,
                          },
                        }"
                        :title="sellerProducts.seller_info.shop_info.shop_name"
                        target="_blank"
                        rel="noreferrer"
                        >{{
                          sellerProducts.seller_info.shop_info.shop_name
                        }}.</router-link
                      >
                    </span>
                    <div
                      class="sc-c-supplier-container-card-header-right"
                    ></div>
                  </div>
                </div>
                <div class="sc-c-supplier-container-bd">
                  <div
                    class="sc-c-spu-container"
                    id="1600590490858"
                    v-for="(product, index) in sellerProducts.cart_product_info"
                    :key="index"
                  >
                    <div class="sc-c-spu-container-bd">
                      <div class="sc-c-spu-container-product-baseinfo">
                        <label
                          class="next-checkbox-wrapper sc-c-spu-container-product-checkbox"
                        >
                          <span class="next-checkbox">
                            <slot
                              v-if="
                                totalCheckProduct(product.cart_info) ==
                                totalUncheckProduct(product.cart_info)
                              "
                            >
                              <img
                                src="@/assets/images/check.png"
                                alt="facebook"
                                style="
                                  height: 20px;
                                  width: 20px;
                                  cursor: pointer;
                                "
                                @click="productWise(product.product_info.id)"
                              />
                            </slot>
                            <slot v-else>
                              <img
                                src="@/assets/images/checkbox.png"
                                alt="facebook"
                                style="
                                  height: 20px;
                                  width: 20px;
                                  cursor: pointer;
                                "
                                @click="productWise(product.product_info.id)"
                              />
                            </slot>
                          </span>
                        </label>
                        <router-link
                          class="sc-c-spu-container-img-con"
                          target="_blank"
                          rel="noreferrer"
                          :to="{
                            name: 'productPage',
                            params: { slug: product.product_info.slug },
                          }"
                        >
                          <img
                            :src="baseUrl + product.product_info.thumbnail_img"
                            :title="product.product_info.name"
                          />
                        </router-link>
                        <div class="sc-c-spu-container-product-main-info">
                          <div class="sc-c-spu-container-title">
                            <div class="sc-c-spu-container-title-main">
                              <router-link
                                class="link-spu-title"
                                :title="product.product_info.name"
                                :to="{
                                  name: 'productPage',
                                  params: { slug: product.product_info.slug },
                                }"
                                target="_blank"
                                rel="noreferrer"
                                >{{ product.product_info.name }}</router-link
                              >
                            </div>
                            <span class="sc-c-spu-container-action-remove">
                              <img
                                src="https://img.alicdn.com/imgextra/i3/O1CN01fm75wI26Avj9JjZ3J_!!6000000007622-2-tps-64-64.png"
                                alt=""
                                @click="removeProduct(product.id)"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="sc-c-spu-container-bd-con-loyel-mobile-large">
                        <div
                          class="sc-c-sku-container"
                          id="4278350903"
                          v-for="(cart, index) in product.cart_info"
                          :key="index"
                        >
                          <div class="sc-c-sku-container-con sc-common-row">
                           
                              <div class="sc-c-sku-container-checkbox">
                              <div class="sku-checkbox-block">
                                <label
                                  class="next-checkbox-wrapper sc-c-sku-container-sku-checkbox"
                                >
                                  <span class="next-checkbox">
                                    <slot v-if="cart.check_uncheck == 1">
                                      <img
                                        src="@/assets/images/check.png"
                                        alt="facebook"
                                        style="
                                          height: 20px;
                                          width: 20px;
                                          cursor: pointer;
                                        "
                                        @click="stockInfoWise(cart.id)"
                                      />
                                    </slot>
                                    <slot v-else>
                                      <img
                                        src="@/assets/images/checkbox.png"
                                        alt="facebook"
                                        style="
                                          height: 20px;
                                          width: 20px;
                                          cursor: pointer;
                                        "
                                        @click="stockInfoWise(cart.id)"
                                      />
                                    </slot>
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div class="sc-c-sku-container-sku-item">
                              <div
                                class="sc-c-sku-container-sku-img-loyel-mobile"
                              ></div>
                              <div class="sc-c-sku-container-sku-info">
                                <div class="sku-detail-block">
                                  <span class="sku-select selected">
                                    <span
                                      class="next-select next-select-trigger next-select-multiple next-medium next-inactive next-no-search next-has-clear"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <span
                                        class="next-input next-medium next-select-inner"
                                      >
                                        <span
                                          class="next-select-values next-input-text-field"
                                          >Size: {{ cart.size_info.size }}({{
                                            cart.size_variant_info.attribute
                                          }}); Color:
                                          {{ cart.color_info.color }}</span
                                        >
                                        <span class="next-input-control">
                                          <span
                                            aria-hidden="true"
                                            class="next-select-clear"
                                          >
                                            <i
                                              class="next-icon next-icon-delete-filling next-medium"
                                            ></i>
                                          </span>
                                        </span>
                                      </span>
                                      <span
                                        class="next-sr-only"
                                        aria-live="polite"
                                      >
                                      </span>
                                    </span>
                                  </span>
                                </div>

                                <div class="sc-c-sku-container-price-wrap">
                                  <div class="sc-c-sku-container-price">
                                    <span class="sc-c-sku-container-unitPrice">
                                      <slot
                                        v-if="
                                          isDiscountTimeExpireInfo(
                                            cart.stock_info.startDate,
                                            cart.stock_info.endDate
                                          )
                                        "
                                      >
                                        <span class="main-price"
                                          >৳
                                          {{
                                            cart.stock_info.special_price
                                          }}</span
                                        >
                                        <span
                                          class="discount-price-loyel-mobile-cart"
                                        >
                                          <del
                                            >৳
                                            {{
                                              cart.stock_info.sell_price
                                            }}</del
                                          >

                                          <span class="percent-dicount">
                                            {{
                                              getDiscountPriceInfo(
                                                cart.stock_info.sell_price,
                                                cart.stock_info.special_price
                                              ) | formatNumberWithDecimal
                                            }}%
                                          </span>
                                        </span>
                                      </slot>
                                      <slot v-else>
                                        <span class="main-price"
                                          >৳
                                          {{ cart.stock_info.sell_price }}</span
                                        >
                                      </slot>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="sc-c-sku-container-quantity">
                              <div
                                class="input-step next-input next-input-single"
                              >
                                <button
                                  type="button"
                                  class="minus"
                                  v-on:click="productQuantityDecrease(cart.id)"
                                >
                                  –
                                </button>
                                <input
                                  type="text"
                                  min="1"
                                  max="100"
                                  :value="cart.quantity"
                                  @input="
                                    updateQuantity($event.target.value, cart.id)
                                  "
                                  class="product-quantity"
                                />
                                <button
                                  type="button"
                                  class="plus"
                                  v-on:click="productQuantityIncrease(cart.id)"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div class="sc-c-sku-container-delete">
                              <span class="sc-c-sku-container-action-remove">
                                <img
                                  src="https://img.alicdn.com/imgextra/i3/O1CN01fm75wI26Avj9JjZ3J_!!6000000007622-2-tps-64-64.png"
                                  alt=""
                                  @click="removeStockInfo(cart.id)"
                                />
                              </span>
                            </div>
                            
                           
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-2">
        
          <div class="sc-shopping-cart-summary-block-loyel-mobile-cart mb-3">
            <div>
              <div class="next-affix-top">
                <div class="sc-shopping-cart-summary-container">
                  <div class="loyel-checkout-box-shipping-voucher">
         

            <div class="subtotal">
              <div class="amount" style=" display: flex;">
                <input
                  type="text"
                  class="voucher-value"
                  placeholder="Enter Voucher Code"
                  v-model="voucher"
                  style="height: 35px;width: 100%;"
                /><button
                  class="btn btn-warning voucher-button-mobile"
                  @click="getVoucherDiscount()"
                style=" margin-left: 10px;">
                  Apply
                </button>
              </div>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="col">
         
          <div class="sc-shopping-cart-summary-block-loyel-mobile-cart">
            <div>
              <div class="next-affix-top">
                <div class="sc-shopping-cart-summary-container">
                  <div class="summary-title">
                    <span>Order summary ({{ totalCartCheckInfo }} items)</span>
                  </div>
                  <div class="summary-body-loyel-mobile-cart">
                    <div class="label-value-line-loyel-mobile-cart">
                      <div class="left-label">
                        <span>Item(s) total</span>
                      </div>
                      <div class="right-value">
                        <span class="">{{ tatalAmount }} ৳</span>
                      </div>
                    </div>
                    <div class="line-divider"></div>
                    <div class="label-value-line-loyel-mobile-cart">
                      <div class="left-label">
                        <span class="text-bold">
                          <span>Cart total</span>
                        </span>
                      </div>
                      <div class="right-value">
                        <span class="text-bold text-subtotal"
                          >{{ tatalAmount }} ৳</span
                        >
                      </div>
                    </div>
                    <div class="line-sub-des">
                      <span>(Excluding shipping fee )</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="footer-mobile-cart">
      <div class="mobile-app-icon-bar-loyel-cart d-block ">
        <div class="container-fluid">
          <div class="text-center" style="display: flex">
            <div class="col-8" style="width: 80%">
              <div class="batch-select-block">
                <label class="next-checkbox-wrapper">
                  <slot
                    v-if="
                      totalCartStock == totalCartCheckInfoCount &&
                      totalCartStock > 0
                    "
                  >
                    <img
                      src="@/assets/images/check.png"
                      alt="facebook"
                      style="height: 20px; width: 20px; cursor: pointer"
                      @click="selectAllProducts(1)"
                    />
                  </slot>
                  <slot v-else>
                    <img
                      src="@/assets/images/checkbox.png"
                      alt="facebook"
                      style="height: 20px; width: 20px; cursor: pointer"
                      @click="selectAllProducts(2)"
                    />
                  </slot>
                </label>

                <span class="batch-select-title-loyel-mobile-cart">
                  
                  <div class="sc-shopping-cart-summary-block-loyel-mobile-cart">
                    <div>
                      <div class="next-affix-top">
                        <div class="sc-shopping-cart-summary-container">
                          <div class="summary-body-loyel-mobile-cart">
                            <div class="line-divider"></div>
                            <span> All items ({{ countAllItem }})</span>
                            <div class="label-value-line-loyel-mobile-cart">
                                
                              <div class="left-label">
                                <span class="text-bold">
                                  <span> Total:</span>
                                </span>
                              </div>
                              <div class="right-value">
                                <span class="text-bold text-subtotal"
                                  >{{ tatalAmount }} ৳</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            <div class="col-4" style="width: 20%">
                
              <div class="mobile-cart-go-to-checkout">
                <button
                  type="submit"
                  class="next-btn next-large next-btn-primary summary-action"
                  @click="gotoCheckoutPage()"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </slot>
    <solt v-else>
      <div class="cart-empty">
        <div style="text-align: center;  justify-content: center; align-items: center; "> cart is empty</div>
       <div style="text-align: center;  justify-content: center; align-items: center; ">
        <router-link to="/">  <button type="button" class="next-btn next-btn-secondary next-btn-large cart-empty-button" >CONTINUE SHOPPING</button></router-link>
      </div>
       </div>
       
   
    </solt>
  </div>
</template>
  
  <script>
import moment from "moment";
import EventBus from "@/pages/event-bus";
export default {
  name: "loyel-shopping-cart",

  data() {
    return {
      baseUrl: this.$baseUrl,
      voucher:null,
      cartList: [],
      countAllItem: "",
      totalCartCheckInfo: "",
      totalCartStock: "",
      totalShopCheck: "",
      tatalAmount: "",
      totalShop: "",
      totalCartCheckInfoCount: "",
      totalcheckshop: "",
      checked: true,
      isAllSelected: true,
      sellerWiseCheck: {},
      isCheckedStock: true,
      isUncheckedStock: false,
      isAllUnselected: false,
      sellerWiseUncheck: {},
      selectedItems: [],
      selectedSellerId: [],
      cart: {
        quantity: 1,
      },
    };
  },
  mounted() {
    this.scrollToTop();
    this.$refs.top.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollTo(0, 0);
  },
  beforeMount() {
    this.getCartList();
  },
 

  methods: {
    totalCheckSeller(productsInfo) {
      return productsInfo.reduce((total, stock) => {
        if (stock.check_uncheck == 1) {
          return total + 1;
        }
        return total;
      }, 0);
    },
    totalStockSeller(products) {
      return products.reduce((total, product) => {
        if (product.id) {
          return total + 1;
        }
        return total;
      }, 0);
    },
    totalCheckProduct(products) {
      return products.reduce((total, product) => {
        if (product.check_uncheck == 1) {
          return total + 1;
        }
        return total;
      }, 0);
    },
    totalUncheckProduct(products) {
      return products.reduce((total, product) => {
        if (product.id) {
          return total + 1;
        }
        return total;
      }, 0);
    },

    selectAllProducts(dataId) {
      let formData = new FormData();

      formData.append("dataId", dataId);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      this.$http
        .post("customer/update/check/uncheck/all", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    sellerWise(dataId) {
      let formData = new FormData();

      formData.append("dataId", dataId);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      this.$http
        .post("customer/update/check/uncheck/seller", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },

    productWise(dataId) {
      let formData = new FormData();

      formData.append("dataId", dataId);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      this.$http
        .post("customer/update/check/uncheck/product", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    stockInfoWise(dataId) {
      let formData = new FormData();

      formData.append("dataId", dataId);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      this.$http
        .post("customer/update/check/uncheck/stock/cart", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    updateQuantity(value, cartId) {
      // Ensure the value is within the range
      // console.log(value);
      if (value >= 1 && value <= 100) {
        // this.cart.quantity = value;
        let formData = new FormData();

        formData.append("cartId", cartId);
        formData.append("quantity", value);

        let token = window.localStorage.getItem("customerToken");

        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        this.$http
          .post("customer/update/qunatity", formData, config)
          .then((response) => {
            if (response.data.msgFlag == true) {
              this.getCartList();
            }
            if (response.data.errMsgFlag == true) {
              this.getCartList();
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    gotoCheckoutPage() {
      this.$router.push({ name: "MobileCheckout" });
    },
    isCartVisiable() {
      if (
        this.$route.name == "PreOrder" ||
        this.$route.name == "signinfor.preOrderCheckout" ||
        this.$route.name == "PreOrderCheckout"
      )
        return true;
      else return false;
    },
    getCartList() {
      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      // let formData=new FormData();
      this.$http
        .get("/customer/get/cart/list", config)
        .then((response) => {
          // console.log(response.data);
          this.cartList = response.data.cartList;
          this.countAllItem = response.data.countAllItem;
          this.totalCartCheckInfo = response.data.totalCartCheckInfo;
          this.totalCartStock = response.data.totalCartStock;
          this.totalShopCheck = response.data.totalShopCheck;
          this.totalShop = response.data.totalShop;
          this.totalcheckshop = response.data.totalcheckshop;
          this.tatalAmount = response.data.tatalAmount;
          this.totalCartCheckInfoCount = response.data.totalCartCheckInfoCount;
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    isDiscountTimeExpireInfo(startAt, endAt) {
      endAt = moment(endAt); //Date format
      startAt = moment(startAt); //Date format
      let today = moment();
      let isAfter = moment(endAt).isAfter(today);
      let isBefore = moment(startAt).isBefore(today);
      if (isAfter && isBefore) return true;
      else return false;
    },
    getDiscountPriceInfo(price, discount) {
      return ((price - discount) * 100) / price;
    },

    productQuantityIncrease(cartId) {
      let formData = new FormData();

      formData.append("cartId", cartId);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      this.$http
        .post("customer/update/qunatity/increase", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
            this.$toaster.warning(response.data.errMsg);
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    productQuantityDecrease(cartId) {
      let formData = new FormData();

      formData.append("cartId", cartId);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      this.$http
        .post("customer/update/qunatity/decrease", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
            this.$toaster.warning(response.data.errMsg);
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    removeProduct(dataId) {
      let formData = new FormData();
      formData.append("dataId", dataId);
      let token = window.localStorage.getItem("customerToken");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      };

      this.$http
        .post("customer/remove/to/cart", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
            EventBus.$emit("cartList-count");
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
            EventBus.$emit("cartList-count");
            this.$toaster.warning(response.data.errMsg);
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    removeStockInfo(dataId) {
      let formData = new FormData();
      formData.append("dataId", dataId);
      let token = window.localStorage.getItem("customerToken");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      };

      this.$http
        .post("customer/remove/to/cart/stock/info", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.getCartList();
            EventBus.$emit("cartList-count");
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.getCartList();
            EventBus.$emit("cartList-count");
            this.$toaster.warning(response.data.errMsg);
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
  },
};
</script>
  
  <style scoped>
.cart-product-mobile {
  padding: 20px;
  background: #f3f3f9;
}

@media (min-width: 1450px) {
  .cart-product-loyal-mobile {
    min-height: 300px;

    padding: 10px 15px;
    flex-direction: row;
    align-items: center;
  }
}

@media (min-width: 1200px) and (max-width: 1449px) {
  .cart-product-loyal-mobile {
    min-height: 300px;

    padding: 10px 15px;
    flex-direction: row;
    align-items: center;
  }
}

.select-and-add-all {
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.shop-name {
  font-weight: bold;
}

/* .cart-product-loyal-mobile {
      width: 100%;
      min-height: 300px;
      background: white;
      padding: 10px 15px;
  } */
.product-wrap {
  display: flex;
  grid-column-gap: 15px;
}

.product-wrap > :nth-child(1) {
  display: flex;
  align-items: center;
}

.product-wrap > :nth-child(3) p:nth-child(1) {
  font-weight: 500;
  margin: 0;
}

.product-wrap > :nth-child(3) p:nth-child(2) {
  font-size: 0.9rem;
}

.delete-icon {
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
}

.money-cart {
  display: flex;
  justify-content: space-between;
}

/* .product-price {
    color: #F12323;
  } */

.discount-sticker {
  color: #6daf68;
}

.product-discount del {
  margin-right: 5px;
}

.cart-cart-icon {
  display: flex;
  align-items: center;
}

.icon-wrapper {
  width: 60px;
  height: 35px;
  display: flex;
  color: white;
  font-size: 20px;
  background: #f12323;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.input-step {
  border: 1px solid #ced4da;

  display: inline-flex;
  overflow: visible;
  height: 37.5px;
  border-radius: 0.25rem;
  background: #fff;
  padding: 4px;
}

.input-step button {
  width: 1.4em;
  font-weight: 300;
  height: 100%;
  line-height: 0.1em;
  font-size: 1.4em;
  padding: 0.2em !important;
  background: #f3f6f9;
  color: #212529;
  border: none;
  border-radius: 0.25rem;
}

/* .input-step input {
  width: 4em;
  height: 100%;
  text-align: center;
  border: 0;
  background: 0 0;
  color: #212529;
  border-radius: 0.25rem;
  outline: none;
} */

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.avatar-lg {
  height: 6rem;
  width: 6rem;
}

.btn-success {
  background: #0ab39c;
  --vz-btn-border-color: #0ab39c;
  --vz-btn-hover-bg: var(--vz-success-text-emphasis);
  --vz-btn-hover-border-color: var(--vz-success-text-emphasis);
  --vz-btn-focus-shadow-rgb: var(--vz-success-rgb);
  --vz-btn-active-bg: var(--vz-success-text-emphasis);
  --vz-btn-active-border-color: var(--vz-success-text-emphasis);
}

.text-end {
  text-align: right !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.btn-label.right {
  padding-left: 0.9rem;
  padding-right: 44px;
}

.card {
  margin-bottom: 1.5rem;
  -webkit-box-shadow: 0 1px 2px rgba(56, 65, 74, 0.15);
  box-shadow: 0 1px 2px rgba(56, 65, 74, 0.15);
}
.card-footer {
  background: #fff;
}

.loyel-shopping-cart {
  width: 100%;
}

.batch-select-block {

  align-items: center;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px;
  display: flex;
  flex-direction: row;
}
.next-checkbox-wrapper {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
}

.next-checkbox .next-checkbox-inner {
  height: 16px !important;
  width: 16px !important;
}

.next-checkbox-wrapper .next-checkbox-inner {
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: block;
  height: 16px;
  text-align: left;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
  width: 16px;
}

.next-checkbox-wrapper input[type="checkbox"] {
  cursor: pointer;
  height: 16px;
  left: 0;
  margin: 0;
  /* opacity: 0; */
  position: absolute;
  top: 0;
  width: 16px;
}

.next-checkbox .next-checkbox-input {
  height: 16px !important;
  width: 16px !important;
}
.batch-select-title-loyel-mobile-cart {
  color: #222;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin-left: 2px;
  vertical-align: middle;
}

.sc-c-supplier-container {
  /* border-bottom: 1px solid #ddd; */
  margin: 10px 0;
  /* padding-bottom: 14px; */
}
.sc-c-supplier-container-main {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
}
.sc-c-supplier-container-hd {
  font-family: Roboto-Regular;
  font-size: 14px;
  margin-bottom: 14px;
}
.sc-common-row {
  display: table;
  width: 100%;
}
.next-checkbox-wrapper {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
}

.next-checkbox-wrapper .next-checkbox-inner {
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: block;
  height: 16px;
  text-align: left;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
  width: 16px;
}
/* .next-checkbox-wrapper input[type="checkbox"] {
    cursor: pointer;
    height: 16px;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 16px;
  } */

.sc-c-supplier-container-sellerInfo {
  margin-left: 24px;
  width: 400px;
}
.sc-c-supplier-container-supplierLink:active,
.sc-c-supplier-container-supplierLink:link,
.sc-c-supplier-container-supplierLink:visited {
  color: #222;
}
.sc-c-supplier-container-card-header-right {
  float: right;
}

.sc-c-spu-container:last-child {
  border: none;
}

.sc-c-spu-container {
  padding: 14px 0;
}

.sc-c-spu-container-product-baseinfo {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  overflow: hidden;
}
.next-checkbox-wrapper {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
}
.next-checkbox-wrapper .next-checkbox {
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.next-checkbox-wrapper .next-checkbox-inner {
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: block;
  height: 16px;
  text-align: left;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
  width: 16px;
}
/* .next-checkbox-wrapper input[type="checkbox"] {
    cursor: pointer;
    height: 16px;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 16px;
  } */

.sc-c-spu-container-img-con img {
  background-color: #f2f2f2;
  border: 1px solid #ededed;
  border-radius: 8px;
  display: inline-block;
  height: 120px;
  vertical-align: middle;
  width: 120px;
}

.sc-c-spu-container-product-main-info {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-box-flex: 1;

  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
  min-height: 50px;
}
.sc-c-spu-container-title {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  color: #222;

  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  line-height: 22px;
  overflow: hidden;
}

.sc-c-spu-container-title-main {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}

.sc-c-spu-container-action-remove {
  color: #d6d6d6;
  cursor: pointer;
  float: right;
  margin-left: 20px;
  margin-right: 20px;
}

.sc-c-spu-container-action-remove img {
  height: 24px;
  max-width: none;
  opacity: 0.85;
  vertical-align: middle;
  width: 24px;
}

.sc-c-spu-container-moq {
  color: #767676;
  font-size: 14px;
  line-height: 18px;
  margin-top: 6px;
}

.sc-c-spu-container-bd-con-loyel-mobile-large {
  margin: 8px 0 0 0px;
}

/* .sc-c-sku-container {
  background: #f4f4f4;
  border-radius: 8px;
  color: #000;
  font-family: Inter;
  margin-top: 5px;
  padding: 10px 20px 10px 24px;
} */

.sc-common-row {
  display: table;
  width: 100%;
}

.sc-c-sku-container-con,
.sc-c-sku-container-sku-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.sc-c-sku-container-con {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-align: center;

  display: flex !important;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.sc-c-sku-container-sku-item {
  -webkit-box-flex: 1;
  -ms-flex-align: center;

  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.sc-c-sku-container-con,
.sc-c-sku-container-sku-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.sc-c-sku-container-sku-img-loyel-mobile {
  margin: 0 20px 0 1px;
}

.sc-c-sku-container-sku-img-loyel-mobile img {
  border-radius: 4px;
  height: 48px;
  vertical-align: middle;
  width: 48px;
}

img {
  border-style: none;
}
audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: inline;
  display: initial;
}
img,
video {
  height: auto;
  max-width: 100%;
}

.sc-c-sku-container-action-remove img:hover {
  opacity: 1;
}
.sc-c-sku-container-action-remove img {
  height: 24px;
  max-width: none;
  opacity: 0.85;
  vertical-align: middle;
  width: 24px;
}
img {
  border-style: none;
}

.sc-c-sku-container-action-remove {
  color: #d6d6d6;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
}

/* .sc-c-sku-container-delete {
  margin-left: 28px;
} */

.sc-c-sku-container-totalPrice {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  margin-left: 40px;
  min-width: 16%;
}
.sc-c-spu-container-img-con img {
  background-color: #f2f2f2;
  border: 1px solid #ededed;
  border-radius: 8px;
  display: inline-block;
  height: 70px;
  vertical-align: middle;
  width: 70px;
}

.sc-c-spu-container-img-con {
  float: left;
  margin-left: 24px;
  text-align: center;
}

.discount-price-loyel-mobile-cart {
  display: flex;
  grid-column-gap: 10px;
  color: #ff4040;
}

.main-price {
  color: #44b201;
  font-size: 14px;
  line-height: 18px;
  margin: 3px 0;
  font-weight: 600;
}
.discount-price-loyel-mobile-cart {
  font-size: 0.6rem;
}
.sc-shopping-cart-summary-block-loyel-mobile-cart {
  float: right;
  width: 100%;
}
.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container {
  background-color: #fff;
  /* border-radius: 8px; */

  margin-top: 0;
  padding: 7px 12px;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-title {
  color: #222;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart {
  margin-top: 0px;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart
  .label-value-line-loyel-mobile-cart {
  overflow: hidden;
  padding: 6px 0;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart
  .line-sub-des {
  color: #666;
  font-size: 12px;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart
  .mobile-cart-go-to-checkout {
  margin-top: 24px;
  text-align: center;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart
  .label-value-line-loyel-mobile-cart
  .left-label {
  color: #222;
  float: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart
  .label-value-line-loyel-mobile-cart
  .right-value {
  color: #222;
  float: right;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}

.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart
  .mobile-cart-go-to-checkout
  .summary-action {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-align-items: center;
  align-items: center;

  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 48px;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
}

.next-btn.next-btn-primary {
  border-color: #f60;
  font-weight: 700;
  margin-top: -25px;
}
.next-btn:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  width: 0;
}
.sc-shopping-cart-summary-block-loyel-mobile-cart
  .sc-shopping-cart-summary-container
  .summary-body-loyel-mobile-cart
  .mobile-cart-go-to-checkout
  .summary-action
  span {
  font-size: 18px;
  font-weight: 700;
  margin-left: 8px;
}

.mobile-app-icon-bar-loyel-cart {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background-color: white;
  border-top: 1px solid #0b1a2d2e;
  box-shadow: 0 0 20px #0b1a2d59;
  padding: 1px 0;
}

.mobile-app-icon-bar-loyel-cart button {
  border: none;
  color: #ee222b;
  font-size: 18px;
  background-color: transparent;
  border-radius: 85px;
  padding: 2px 8px;
  /*box-shadow: 0 0 8px #3c3c3cd1;*/
}
.mobile-app-icon-bar-loyel-cart a {
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

.footer-mobile-cart {
  width: 100%;
  min-height: 70px;
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
.mobile-cart-go-to-checkout
{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
}
@media(min-width: 1px) and (max-width: 490px){
  .sc-c-sku-container-delete {
    margin-left: 5px;
}

.sc-c-sku-container {
    background: #f4f4f4;
    border-radius: 8px;
    color: #000;
    font-family: Inter;
    margin-top: 5px;
    padding: 10px 10px 10px 5px;
}

.input-step input {
    width: 2em;
    height: 100%;
    text-align: center;
    border: 0;
    background: 0 0;
    color: #212529;
    border-radius: 0.25rem;
    outline: none;
}
}
@media(min-width:491px){
  .sc-c-sku-container-delete {
    margin-left: 28px;
}

.sc-c-sku-container {
    background: #f4f4f4;
    border-radius: 8px;
    color: #000;
    font-family: Inter;
    margin-top: 5px;
    padding: 10px 20px 10px 24px;
}

.input-step input {
    width: 4em;
    height: 100%;
    text-align: center;
    border: 0;
    background: 0 0;
    color: #212529;
    border-radius: 0.25rem;
    outline: none;
}
}

.cart-empty{
  padding-top: 147px;

    /* display: flex; */
    justify-content: center;
    align-items: center;
    padding-bottom: 69px;
}

.next-btn-secondary.active, .next-btn-secondary.hover, .next-btn-secondary:active, .next-btn-secondary:focus, .next-btn-secondary:hover {
    color: #fff;
    background-color: #3577f1;
    border-color: #131921;
    text-decoration: none;
}
.next-btn-large {
    margin: 0;
    height: 48px;
    padding: 0 36px;
    font-size: 14px;
    line-height: 46px;
    border-width: 1px;
}
</style>
  