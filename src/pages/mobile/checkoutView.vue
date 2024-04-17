<template>
  <div class="loyel-shopping-cart" ref="top">
    <div class="cart-product-loyal-mobile table-responsive">
      <div class="col-12">
        <b-col>
          <div class="loyel-address-box-mobile">
            <div class="shipping-info-wrapper">
              <div class="shipping-info">
                <h5>Shipping Information</h5>
                <div class="shipping-address">
                  <ul
                    v-for="(addressInfo, addressIndex) in addressList"
                    :key="addressIndex"
                    :for="'address_id' + addressInfo.id"
                  >
                    <li>
                      <div class="info">
                        <input
                          type="radio"
                          name="address"
                          v-model="Address"
                          :value="addressInfo.id"
                          :id="'address_id' + addressInfo.id"
                        />
                        {{ addressInfo.name }}
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <v-icon name="map-marker-alt" />
                      </div>
                      <div class="info">
                        {{ addressInfo.address }}
                        <slot v-if="addressInfo.union_info != null">
                          {{ addressInfo.union_info.name }}
                        </slot>
                        <slot v-if="addressInfo.thana_info != null">
                          {{ addressInfo.thana_info.name }}
                        </slot>
                        <slot v-if="addressInfo.district_info != null">
                          {{ addressInfo.district_info.name }}
                        </slot>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <v-icon name="phone-alt" />
                      </div>
                      <div class="info">
                        {{ addressInfo.phone }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="edit-btn">
                <router-link
                  class="edit-icon pointer"
                  :to="{
                    name: 'addressAdd',
                    params: { name: $store.state.customerInfo.name },
                  }"
                >
                  <v-icon name="edit" />
                </router-link>
              </div>
            </div>
          </div>
        </b-col>

        <b-col>
          <div class="loyel-checkout-box-shipping">
            <b-row cols="3" cols-md="3" cols-lg="3" class="slider-heading">
              <b-col
                class="overview-col"
                v-on:click="activetab = '1'"
                v-bind:class="[activetab === '1' ? 'active' : '']"
              >
                General
              </b-col>
              <b-col
                class="overview-col"
                v-on:click="activetab = '2'"
                v-bind:class="[activetab === '2' ? 'active' : '']"
              >
                Urgent
              </b-col>
              <b-col
                class="overview-col"
                v-on:click="activetab = '3'"
                v-bind:class="[activetab === '3' ? 'active' : '']"
              >
                Very Urgent
              </b-col>
            </b-row>

            <div class="tabs-section">
              <p v-if="activetab === '1'">
                <input
                  class="form-check-input"
                  type="radio"
                  name="shippingCharge"
                  v-model="shippingCharge"
                  value="1"
                  id="outsideDhaka"
                  @change="getDeliveryCharge()"
                />
                <label class="form-check-label" for="outsideDhaka">
                  <!-- Online Payment -->
                  Out Side Dhaka City
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="shippingCharge"
                  v-model="shippingCharge"
                  value="2"
                  id="interCity"
                  @change="getDeliveryCharge()"
                />
                <label class="form-check-label" for="interCity">
                  Inter Dhaka City
                </label>
              </p>
              <p v-if="activetab === '2'" p>
                <input
                  class="form-check-input"
                  type="radio"
                  name="shippingCharge"
                  v-model="shippingCharge"
                  value="3"
                  id="outsideDhaka"
                  @change="getDeliveryCharge()"
                />
                <label class="form-check-label" for="outsideDhaka">
                  <!-- Online Payment -->
                  Out Side Dhaka City
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="shippingCharge"
                  v-model="shippingCharge"
                  value="4"
                  id="interCity"
                  @change="getDeliveryCharge()"
                />
                <label class="form-check-label" for="interCity">
                  Inter Dhaka City
                </label>
              </p>
              <p v-if="activetab === '3'">
                <input
                  class="form-check-input"
                  type="radio"
                  name="shippingCharge"
                  v-model="shippingCharge"
                  value="5"
                  id="outsideDhaka"
                  @change="getDeliveryCharge()"
                />
                <label class="form-check-label" for="outsideDhaka">
                  <!-- Online Payment -->
                  Out Side Dhaka City
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="shippingCharge"
                  v-model="shippingCharge"
                  value="6"
                  id="interCity"
                  @change="getDeliveryCharge()"
                />
                <label class="form-check-label" for="interCity">
                  Inter Dhaka City
                </label>
              </p>
            </div>
          </div>

          
        </b-col>
        <div class="col col-lg-12 col-md-12">
          <div class="sc-shopping-cart-valid-list">
            <div
              class="sc-c-supplier-container"
              v-for="(sellerProducts, sellerId) in cartList"
              :key="sellerId"
            >
              <div class="sc-c-supplier-container-main">
                <div class="sc-c-supplier-container-hd">
                  <div class="sc-common-row">
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
                      <div class="sc-c-spu-container-bd-con-loyel-mobile">
                        <div
                          class="sc-c-sku-container"
                          id="4278350903"
                          v-for="(cart, index) in product.cart_info"
                          :key="index"
                        >
                          <div class="sc-c-sku-container-con sc-common-row">
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
        <div class="loyel-checkout-box-shipping-voucher">
            <h4>
              Voucher Code
             
            </h4>

            <div class="subtotal">
              <div class="amount" style="display: flex; width: 100%;">
                <input
                  type="text"
                  class="voucher-value"
                  placeholder="Enter Voucher Code"
                  v-model="voucher"
                  style=" width: 100%;" /><button
                  class="btn btn-warning voucher-button-mobile"
                  @click="getVoucherDiscount()"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        <div class="col-lg-12 col-md-12">
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
                    <div class="loyel-checkout-box-shipping">
                      <div class="loyel-checkout-box-mobile">
                        <h4>Order Summary</h4>
                        <br />
                      
                        <div class="subtotal">
                          <div class="title">Voucher Discount</div>
                          <div class="amount">
                            ৳ {{ promoDiscount }}
                            <input type="hidden" v-model="promoDiscount" />
                          </div>
                        </div>
                        <div class="subtotal">
                          <div class="title">Total Price</div>
                          <div class="amount">৳ {{ totalPrice }}</div>
                        </div>
                        <div class="subtotal">
                          <div class="title">Delivery Charge</div>
                          <div class="amount">৳ {{ deliveryCharge }}</div>
                        </div>

                        <div class="shipping">
                          <div class="title">Total Discount</div>
                          <div class="amount">৳ {{ totalDiscount }}</div>
                        </div>
                        <hr />
                        <div class="total">
                          <div class="title">Payable Total</div>
                          <div class="amount">৳ {{ grandTotal }}</div>
                        </div>
                        <!-- <button
                          class="proceed-to-checkout"
                          :disabled="
                            $store.state.cartInfos.totalItem < 1 ||
                            countDown > 0
                          "
                          v-on:click="orderPlaced"
                        >
                          Confirm Order
                        </button> -->
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

    <div class="footer-mobile-cart">
      <div class="mobile-app-icon-bar-loyel-cart d-block">
        <div class="container-fluid">
          <div class="text-center" style="display: flex">
            <div class="col-6" style="width: 50%">
              <div class="batch-select-block">
                <span class="batch-select-title-loyel-mobile-cart">
                  <div class="sc-shopping-cart-summary-block-loyel-mobile-cart">
                    <div>
                      <div class="next-affix-top">
                        <div class="sc-shopping-cart-summary-container">
                          <div class="summary-body-loyel-mobile-cart">
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

            <div class="col-6" style="width: 50%">
              <div class="mobile-cart-go-to-checkout">
                <button
                  type="submit"
                  class="next-btn next-large next-btn-primary summary-action"
                  v-on:click="orderPlaced"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import moment from "moment";
import EventBus from "@/pages/event-bus";
export default {
  name: "loyel-shopping-cart",

  data() {
    return {
      msg: "checkout",
      activetab: "1",
      buttonDisabled: false,
      modalShow: false,
      quantity: 1,
      cart_list: [],
      indeterminate: false,
      totalPrice: "0.00",
      shippingCharge: 1,

      disabled: false,
      addressList: [],
      newAddressFlag: false,
      upazilaList: null,
      districtList: null,
      voucher: null,

      deliveryAddressForm: false,
      errMsgFlag: false,
      msgFlag: false,
      msg: null,
      errMsg: null,
      name: null,
      phone: null,
      address: null,
      upazila: null,
      district: null,
      deliveryAddressId: null,
      upazilaName: null,
      districtName: null,
      newName: null,
      newPhone: null,
      newAddress: null,
      newUpazila: null,
      newDistrict: null,
      insideDhaka: 0,
      bkashPayment: null,
      onlinePayment: null,
      cashPayment: null,
      payMethod: null,
      areaId: null,
      note: null,
      invoiceDiscount: 0,
      promoDiscount: 0,
      productDiscount: 0,
      totalPrice: 0,
      grandTotal: 0,
      deliveryCharge: 0,
      totalDiscount: 0,
      countDown: 0,
      isPreOrder: 0,
      deliveryChargeDiscount: 0,
      Address: null,
      baseUrl: this.$baseUrl,
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

      selectedItems: [],
      selectedSellerId: [],
      cart: {
        quantity: 1,
      },
    };
  },
  mounted() {
    this.totalPrice = 500;
    this.customerAuthCheck();
    this.loadCustomerAddress();
    // this.getAreaList();

    this.getCustomerLastAddress();
  },
  beforeMount() {
    this.getCartList();
  },

  methods: {
    orderPlaced() {
      if (this.orderFormValidation()) {
        if (this.$store.state.customerInfo != null) {
          let token = window.localStorage.getItem("customerToken");

          let config = {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          };

          this.countDown = 2;
          this.buttonDisabled = true;
          this.countDownTimer();
          let formData = new FormData();

          formData.append("addressId", this.deliveryAddressId);
          formData.append("areaId", this.areaId);

          formData.append("promoDiscount", this.promoDiscount);

          formData.append("shippingCharge", this.shippingCharge);
          formData.append(
            "deliveryCharge",
            this.deliveryCharge - this.deliveryChargeDiscount
          );
          if (this.note != null) formData.append("orderNote", this.note);
          let customerInfo = this.$store.state.customerInfo;

          formData.append("promoCode", this.voucher);
          // let cartInfos = this.$store.state.cartInfos;
          let flag = false;

          // cartInfos.forEach(cartInfo => {
          //     if (cartInfo.isFreeProduct != true) {

          //         formData.append("productId[]", cartInfo.product_id);
          //         formData.append("quantity[]", cartInfo.quantity);
          //         formData.append("isFreeProduct[]", false);
          //         formData.append("colorCode[]", cartInfo.color_id);
          //         formData.append("sizeCode[]", cartInfo.size_id);
          //         formData.append("sizeAttributeCode[]", cartInfo.size_attribute_id);
          //         flag = true;
          //     }
          // });

          this.$http
            .post("customer/order/placed", formData, config)
            .then((response) => {
              if (
                response.data.msgFlag == true &&
                response.data.isOrderPlaced == true
              ) {
                this.countDown = 0;
                let orderId = response.data.orderId;

                this.countDown = 0;
                this.sendOrderSms(orderId);
                // this.$toaster.success(response.data.msg);
                this.$router.push({
                  name: "Order.Success",
                  params: { orderId: orderId },
                });
                this.$store.commit("decrementCartCount");
              }
            })
            .catch((error) => {
              console.dir(error);
            })
            .finally();
        } else {
        }
      }
    },

    getPriceInfo() {
      this.promoDiscount = parseInt(this.$store.state.priceInfos.promoDiscount);
      this.productDiscount = this.$store.state.priceInfos.productDiscount;
      this.totalPrice = this.$store.state.priceInfos.totalPrice;
      this.totalDiscount = parseInt(this.promoDiscount + this.productDiscount);
      this.grandTotal =
        parseInt(this.totalPrice) +
        (parseInt(this.deliveryCharge) -
          parseInt(this.deliveryChargeDiscount)) -
        this.totalDiscount;
    },
    showModal() {
      this.modalShow = true;
    },
    async getDeliveryCharge(addressId) {
      let formData = new FormData();
      let cartInfos = this.$store.state.cartInfos;
      let flag = false;

      cartInfos.forEach((cartInfo) => {
        if (cartInfo.isFreeProduct != true) {
          // let quantity = parseFloat(cartInfo.quantity) + 1;
          formData.append("productId[]", cartInfo.product_id);
          formData.append("quantity[]", cartInfo.quantity);
          formData.append("isFreeProduct[]", false);
          formData.append("colorCode[]", cartInfo.color_id);
          formData.append("sizeCode[]", cartInfo.size_id);
          flag = true;
        }
      });
      formData.append("shippingCharge", this.shippingCharge);
      formData.append("addressId", addressId);
      await this.$http
        .post("get/delivery/charge", formData)
        .then((response) => {
          if (response.data.msgFlag == true)
            this.deliveryCharge = response.data.deliveryCharge;
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
      this.getDeliveryChargeDiscount();
      this.getPriceInfo();
    },

    async getDeliveryChargeDiscount() {
      let formData = new FormData();
      let cartInfos = this.$store.state.cartInfos;
      let flag = false;

      cartInfos.forEach((cartInfo) => {
        if (cartInfo.isFreeProduct != true) {
          // let quantity = parseFloat(cartInfo.quantity) + 1;
          formData.append("productId[]", cartInfo.product_id);
          formData.append("quantity[]", cartInfo.quantity);
          formData.append("isFreeProduct[]", false);
          formData.append("colorCode[]", cartInfo.color_id);
          formData.append("sizeCode[]", cartInfo.size_id);
          flag = true;
        }
      });
      formData.append("areaId", this.areaId);
      formData.append("deliveryCharge", this.deliveryCharge);
      await this.$http
        .post("get/delivery/charge/discount", formData)
        .then((response) => {
          if (response.data.msgFlag == true)
            this.deliveryChargeDiscount = response.data.deliveryChargeDiscount;
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
      this.getPriceInfo();
    },
    getCustomerLastAddress() {
      if (this.$store.state.customerInfo != null) {
        let token = window.localStorage.getItem("customerToken");

        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        this.$http
          .get("customer/get/last/address", config)
          .then((response) => {
            if (response.data.msgFlag) {
              this.deliveryAddressForm = true;
              this.selectCustomerAddress(response.data.lastAddressId);
            } else {
              this.deliveryAddressForm = false;
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      }
    },
    getVoucherDiscount() {
      let customerInfo = this.$store.state.customerInfo;
      let formData = new FormData();
      formData.append("promoCode", this.voucher);
      // formData.append("phone",this.customerPhone);
      // formData.append("token",this.token);
      // formData.append("remember",this.remember);
      let cartInfos = this.$store.state.cartInfos;
      let flag = false;

      cartInfos.forEach((cartInfo) => {
        if (cartInfo.isFreeProduct != true) {
          let quantity = parseFloat(cartInfo.quantity) + 1;
          formData.append("productId[]", cartInfo.product_id);
          formData.append("quantity[]", cartInfo.quantity);
          formData.append("isFreeProduct[]", false);
          formData.append("colorCode[]", cartInfo.color_id);
          formData.append("sizeCode[]", cartInfo.size_id);
          flag = true;
        }
      });
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      this.$http
        .post("get/promo/discount", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.$store.commit("storeCartInfos", response.data.cartInfos);
            this.$store.commit("storePriceInfos", response.data);
            this.getPriceInfo();
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
      this.getPriceInfo();
    },
    resetOrderForm() {
      this.name = null;
      this.phone = null;
      this.address = null;
      this.deliveryAddressId = null;
      this.onlinePayment = null;
      this.cashPayment = null;
      this.bkashPayment = null;
      this.note = null;
      this.payMethod = null;
    },
    orderFormValidation() {
      if (this.deliveryAddressId != null) {
        return true;
      } else {
        this.errMsg = "Please Select An Address or Add New Address.";
        this.errMsgFlag = true;
        this.$toaster.warning(this.errMsg);
        return false;
      }
    },
    sendOrderSms(orderId) {
      let formData = new FormData();
      formData.append("dataId", orderId);
      this.$http
        .post("sent/order/sms", formData)
        .then((response) => {})
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    countDownTimer() {
      if (this.countDown > 0) {
        if (this.countDown % 10 == 0)
          this.$toaster.warning("Your Order Is Processing.Please Wait.");
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },

    deleteAddress(addressId) {
      this.errMsgFlag = false;
      this.msgFlag = false;
      this.$http
        .get("customer/address/delete", { params: { dataId: addressId } })
        .then((response) => {
          this.errMsgFlag = response.data.errMsgFlag;
          this.msgFlag = response.data.msgFlag;
          this.errMsg = response.data.errMsg;
          this.msg = response.data.msg;
          if (response.data.errMsgFlag) this.$toaster.warning(this.errMsg);
          if (response.data.msgFlag) this.$toaster.success(this.msg);
          this.loadCustomerAddress();
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    isValidPhoneNumber() {
      let pattern = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
      let flag = pattern.test(this.newPhone);
      if (flag) return true;
      else return false;
    },
    newAddressFormValidation() {
      if (
        this.newName != null &&
        this.newPhone != null &&
        this.newAddress != null &&
        this.newUpazila != null &&
        this.newDistrict != null
      ) {
        if (this.isValidPhoneNumber()) {
          return true;
        } else {
          this.errMsg = "Please Enter Valid Bangladeshi Number.";
          this.errMsgFlag = true;
          this.$toaster.warning(this.errMsg);
          return false;
        }
      } else {
        if (this.newName == null) {
          this.errMsg = "Please Enter Your Name";
          this.$toaster.warning(this.errMsg);
        }
        if (this.newPhone == null) {
          this.errMsg = "Please Enter Phone Number.";
          this.$toaster.warning(this.errMsg);
        }
        if (this.newAddress == null) {
          this.errMsg = "Please Write Address.";
          this.$toaster.warning(this.errMsg);
        }
        if (this.newDistrict == null) {
          this.errMsg = "Please Select Your District.";
          this.$toaster.warning(this.errMsg);
        }
        if (this.newUpazila == null) {
          this.errMsg = "Please Select Your Upazila.";
          this.$toaster.warning(this.errMsg);
        }
        this.errMsgFlag = true;
        return false;
      }
    },
    addNewAddress() {
      if (this.newAddressFormValidation()) {
        let customerInfo = this.$store.state.customerInfo;
        let formData = new FormData();
        formData.append("customerPhone", customerInfo.phone);
        formData.append("token", customerInfo.phone);
        formData.append("remember", customerInfo.remember);
        formData.append("name", this.newName);
        formData.append("phone", this.newPhone);
        formData.append("address", this.newAddress);
        formData.append("upazila", this.newUpazila);
        formData.append("district", this.newDistrict);

        this.$http
          .post("add/new/address", formData)
          .then((response) => {
            if (response.data.msgFlag == true) {
              this.selectCustomerAddress(response.data.dataId);
              this.resetNewAddressForm();
              this.loadCustomerAddress();
            } else {
              this.errMsgFlag = response.data.errMsgFlag;
              this.errMsg = response.data.errMsg;
              this.$toaster.warning(this.errMsg);
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      }
    },
    async selectCustomerAddress(addressId) {
      if (this.$store.state.customerInfo != null) {
        let token = window.localStorage.getItem("customerToken");

        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        await this.$http
          .get("customer/selected/address/info?dataId=" + addressId, config)
          .then((response) => {
            if (response.data.msgFlag == true) {
              this.Address = addressId;
              this.deliveryAddressId = addressId;
              this.getDeliveryCharge(addressId);
            } else {
              this.deliveryAddressForm = false;
              this.errMsgFlag = response.data.errMsgFlag;
              this.errMsg = response.data.errMsg;
              this.$toaster.warning(this.errMsg);
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
        this.getDeliveryChargeDiscount();
        this.getPriceInfo();
      }
    },

    resetNewAddressForm() {
      this.newName = null;
      this.newPhone = null;
      this.newAddress = null;
      this.newUpazila = null;
      this.newDistrict = null;
    },
    async loadCustomerAddress() {
      if (this.$store.state.customerInfo != null) {
        let token = window.localStorage.getItem("customerToken");

        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        this.errMsgFlag = false;
        this.msgFlag = false;
        await this.$http
          .get("customer/get/addresses", config)
          .then((response) => {
            if (response.data.msgFlag == true)
              this.addressList = response.data.addresses;
          })
          .catch((error) => {
            console.dir();
          })
          .finally();
        this.getPriceInfo();
      }
    },
    customerAuthCheck() {
      if (this.$store.state.customerInfo == null) {
        this.$router.push({ name: "signinfor.checkout" });
      }
    },
    getAreaList() {
      this.$http
        .get("all/area/list")
        .then((response) => {
          if (response.data.msgFlag == true) {
            this.upazilaList = response.data.upazilaList;
            this.districtList = response.data.districtList;
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },

    signinFunction() {
      if (this.formValidation()) {
        let formData = new FormData();
        formData.append("userName", this.userName);
        formData.append("password", this.password);
        axios
          .post("website/customer/signin", formData)
          .then((response) => {
            if (response.data.msgFlag == true) {
              this.$toaster.success(response.data.msg);
              this.$store.commit(
                "storeCustomerInfo",
                response.data.customerInfo
              );
              this.userName = null;
              this.password = null;
              this.$router.push({ name: "checkout" });
            } else {
              this.errMsgFlagA = response.data.errMsgFlag;
              this.errMsg = response.data.errMsg;
              this.$toaster.warning(this.errMsgA);
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      }
    },
    formSubmitPrevent(e) {
      e.preventDefault();
    },
    formValidation() {
      if (this.userName != null && this.password != null) {
        return true;
      } else {
        if (this.userName == null) {
          this.errMsg = "Please Enter Your Phone  First.";
          this.$toaster.warning(this.errMsg);
        }
        if (this.password == null) {
          this.errMsg = "Please Enter Password.";
          this.$toaster.warning(this.errMsg);
        }
        this.errMsgFlagA = true;
        return false;
      }
    },
    resetRegistrationForm() {
      this.name = null;
      this.phone = null;
      this.email = null;
      this.password = null;
      this.conPassword = null;
      this.otp = null;
      this.otpForm = false;
      this.signUpForm = true;
    },
    // countDownTimer() {
    //     if (this.countDown > 0) {
    //         setTimeout(() => {
    //             this.countDown -= 1
    //             this.countDownTimer()
    //         }, 1000)
    //     }
    // },
    emailValidation() {
      let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let flag = pattern.test(this.email);
      if (flag) return true;
      else return false;
    },
    signUpFormValidation() {
      if (
        this.name != null &&
        this.phone != null &&
        this.newPassword != null &&
        this.conPassword != null
      ) {
        if (this.phoneNumberValidation()) {
          if (this.newPassword == this.conPassword) {
            return true;
          } else {
            this.errMsg = "Please Confirm Password.";
            this.errMsgFlagB = true;
            this.$toaster.warning(this.errMsg);

            return false;
          }
        } else {
          if (!this.phoneNumberValidation()) {
            this.errMsg = "Please Enter A Valid Bangladeshi Phone Number.";
            this.$toaster.warning(this.errMsg);
          }
          // if(!this.emailValidation()){
          //  this.errMsg="Please Enter An Valid Email Address.";
          //  this.$toaster.warning(this.errMsg);
          // }
          this.errMsgFlagB = true;
          return false;
        }
      } else {
        if (this.name == null) {
          this.errMsg = "Please Enter Your Name.";
          this.$toaster.warning(this.errMsg);
        }
        // if(this.email==null){
        //  this.errMsg="Please Enter Your Mail Address.";
        //  this.$toaster.warning(this.errMsg);
        // }
        if (this.newPassword == null) {
          this.errMsg = "Please Enter Password.";
          this.$toaster.warning(this.errMsg);
        }
        if (this.conPassword == null) {
          this.errMsg = "Please Confirm Password.";
          this.$toaster.warning(this.conPassword);
        }
        this.errMsgFlagB = true;
        return false;
      }
    },
    verifyCustomerInfo() {
      if (this.signUpFormValidation()) {
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("phone", this.phone);
        // formData.append("email",this.email);
        formData.append("password", this.newPassword);
        formData.append("conPassword", this.conPassword);
        formData.append("otp", this.otp);
        this.countDown = 280;
        this.countDownTimer();
        axios
          .post("website/verify/customer/info", formData)
          .then((response) => {
            this.errMsgFlagB = response.data.errMsgFlag;
            this.errMsg = response.data.errMsg;
            this.msgFlagB = response.data.msgFlag;
            this.msg = response.data.msg;
            if (response.data.msgFlag == true) {
              this.$toaster.success(this.msg);
              this.signUpForm = false;
              this.otpForm = true;
            }
            if (response.data.errMsgFlag == true) {
              this.$toaster.warning(this.errMsg);
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      }
    },
    signUpFunction() {
      if (this.signUpFormValidation()) {
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("phone", this.phone);
        formData.append("email", this.email);
        formData.append("password", this.newPassword);
        formData.append("conPassword", this.conPassword);
        formData.append("otp", this.otp);
        axios
          .post("website/verify/customer/phone", formData)
          .then((response) => {
            this.errMsgFlagB = response.data.errMsgFlag;
            this.errMsg = response.data.errMsg;
            this.msgFlagB = response.data.msgFlag;
            this.msg = response.data.msg;
            if (response.data.msgFlag == true) {
              this.$toaster.success(this.msg);
              this.signUpForm = false;
              this.otpForm = true;
              if (response.data.loginFlag) {
                this.$store.commit(
                  "storeCustomerInfo",
                  response.data.customerInfo
                );
                this.$router.push({ name: "checkout" });
                this.resetRegistrationForm();
              }
              this.resetRegistrationForm();
            }
            if (response.data.errMsgFlag == true) {
              this.$toaster.warning(this.errMsg);
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      }
    },
    phoneNumberValidation() {
      let pattern = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
      let flag = pattern.test(this.phone);
      if (flag) return true;
      else return false;
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

    getCartList() {
      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      // let formData=new FormData();
      this.$http
        .get("/customer/get/checkout/list", config)
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-align-items: center;
  align-items: center;
  background: #fff;

  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;

  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
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

.sc-c-spu-container-bd-con-loyel-mobile {
  margin: 8px 0 0 0px;
}


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
/* .sc-c-sku-container-sku-img-loyel-mobile {
  margin: 0 20px 0 1px;
} */

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

.sc-c-sku-container-delete {
  margin-left: 28px;
}

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
  border-radius: 8px;

  margin-top: 0;
  padding: 0px 0px;
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
  min-height: 30px;
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
.mobile-cart-go-to-checkout {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}

.checkout-mobile {
  /* background: #F3F3F9; */
  padding: 10px;
  margin-top: 15px;
}

.slider-heading {
  height: 40px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border: 1px solid rgb(167, 165, 165);
  margin-bottom: 10px;
  /* padding:0 10px; */
  background: #1f1f1f;
  color: white;
}

.loyel-checkout-box-shipping h5 {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;

  border-right: none;
  background-color: #fff;

  font-weight: bold;
}

.loyel-checkout-box-shipping .overview-col:hover {
  background-color: #aaa;
  color: #fff;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.loyel-checkout-box-shipping .overview-col.active {
  background-color: #fb5858;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

/* global css  */
li {
  cursor: pointer;
}

.loyel-checkout-box-mobile {
  width: 100%;

  background: white;
  margin: 15px 0;
}

.loyel-address-box-mobile {
  width: 100%;
  padding: 10px;
  background: white;
  border-radius: 8px;
  margin: 15px 0;
}

.loyel-checkout-box-payment-mobile {
  width: 100%;
  padding: 10px;
  background: white;
  border-radius: 15px;
  margin: 15px 0;
}

.loyel-checkout-box-shipping {
  width: 100%;
  border-radius: 8px;
  /* border: 1px solid #dedede; */
  padding: 15px 20px;
  background: white;
  margin: 15px 0;
}

.loyel-checkout-box-shipping-voucher {
  width: 100%;
  border-radius: 8px;
  /* border: 1px solid #dedede; */
  padding: 5px 10px 10px 10px;
  background: white;
  margin: 15px 0;
}

h5 {
  margin: 0;
}

/* address info css */
.shipping-info-wrapper {
  display: flex;
  justify-content: space-between;
}

ul {
  padding: 0;
  list-style: none;
}

ul li {
  display: flex;
  grid-column-gap: 5px;
  color: #999999;
}

ul li:nth-child(1) .info {
  color: #454545;
  margin-left: 17px;
}

/* total subtotal css  */
.subtotal,
.shipping,
.total {
  display: flex;
  justify-content: space-between;
  color: #999999;
}

.total {
  color: black;
  font-weight: 500;
}

.proceed-to-checkout {
  border: none;
  background: black;
  width: 100%;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  padding: 8px 0;
  margin-top: 18px;
}

/* payment option css  */

.payment-wrapper {
  display: flex;
  justify-content: space-between;
}

.left-img {
  display: flex;
  grid-column-gap: 60px;
}

.left-img img {
  width: 100px;
  display: block;
}

.left-img-mobile {
  display: flex;
  grid-column-gap: 10px;
}

.left-img-mobile img {
  width: 100px;
  display: block;
}

.change-btn {
  cursor: pointer;
  color: #10a9ff;
}

/* selection checkout css  */

/* .table-spacing{
   border-collapse: separate;
   border-spacing:0 5px;
} */
table tr td {
  padding: 10px;
}

table tr td:nth-child(1) {
  padding: 0;
}

table tr td img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

table tr td:nth-child(3) {
  width: 290px;
}

.title {
  font-weight: 500;
}

.color span {
  color: #999999;
}

.free-shipping {
  color: #10a9ff;
}

.icons-group {
  color: red;
  text-align: right;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.icons-group > :nth-child(2) {
  margin-left: 20px;
}

.voucher-button-mobile {
  height: 36px;
  margin-top: -2px;
  border-radius: 0px;
}

.voucher-value {
  height: 36px;
}

.overview-col {
  cursor: pointer;
}

.reviews-col {
  cursor: pointer;
}

.video-col {
  cursor: pointer;
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

.sc-c-sku-container-sku-img-loyel-mobile {
  margin: 0 2px 0 1px;
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

.sc-c-sku-container-sku-img-loyel-mobile {
  margin: 0 20px 0 1px;
}
}
</style>
    