<template>
  <div class="checkout loyel-container" style="padding: 10px" ref="top">
    <div class="loyel-container checkout-descktop">
      <b-row>
        <b-col cols="12" md="12" lg="7">
          <div class="loyel-checkout-box">
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
          <div class="col-12">
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
                            :title="
                              sellerProducts.seller_info.shop_info.shop_name
                            "
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
                        v-for="(
                          product, index
                        ) in sellerProducts.cart_product_info"
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
                                :src="
                                  baseUrl + product.product_info.thumbnail_img
                                "
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
                                      params: {
                                        slug: product.product_info.slug,
                                      },
                                    }"
                                    target="_blank"
                                    rel="noreferrer"
                                    >{{
                                      product.product_info.name
                                    }}</router-link
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
                          <div class="sc-c-spu-container-bd-con">
                            <div
                              class="sc-c-sku-container"
                              id="4278350903"
                              v-for="(cart, index) in product.cart_info"
                              :key="index"
                            >
                              <div class="sc-c-sku-container-con sc-common-row">
                                <div class="sc-c-sku-container-sku-item">
                                  <div class="sc-c-sku-container-sku-img"></div>
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
                                              >Size:
                                              {{ cart.size_info.size }}({{
                                                cart.size_variant_info
                                                  .attribute
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
                                        <span
                                          class="sc-c-sku-container-unitPrice"
                                        >
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
                                            <span class="discount-price">
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
                                                    cart.stock_info
                                                      .special_price
                                                  ) | formatNumberWithDecimal
                                                }}%
                                              </span>
                                            </span>
                                          </slot>
                                          <slot v-else>
                                            <span class="main-price"
                                              >৳
                                              {{
                                                cart.stock_info.sell_price
                                              }}</span
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
                                      v-on:click="
                                        productQuantityDecrease(cart.id)
                                      "
                                    >
                                      –
                                    </button>
                                    <input
                                      type="text"
                                      min="1"
                                      max="100"
                                      :value="cart.quantity"
                                      @input="
                                        updateQuantity(
                                          $event.target.value,
                                          cart.id
                                        )
                                      "
                                      class="product-quantity"
                                    />
                                    <button
                                      type="button"
                                      class="plus"
                                      v-on:click="
                                        productQuantityIncrease(cart.id)
                                      "
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div class="sc-c-sku-container-totalPrice">
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
                                        cart.stock_info.special_price *
                                        cart.quantity
                                      }}</span
                                    >
                                  </slot>
                                  <slot v-else>
                                    <span class="main-price"
                                      >৳
                                      {{
                                        cart.stock_info.sell_price *
                                        cart.quantity
                                      }}</span
                                    >
                                  </slot>
                                </div>
                                <div class="sc-c-sku-container-delete">
                                  <span
                                    class="sc-c-sku-container-action-remove"
                                  >
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
                    <div class="sc-c-spu-container-bd-con-voucher">
                      <div class="sc-c-sku-container-voucher">
                        <div class="sc-c-sku-container-con sc-common-row">
                          <div class="sc-c-sku-container-sku-item">
                            <div class="sc-c-sku-container-sku-img"></div>
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
                                        >Store Voucher
                                      </span>
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
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sc-c-sku-container-quantity">
                            <div
                              class="input-step-voucher next-input next-input-single"
                            >
                              <button
                                id="show-btn"
                                @click="
                                  $bvModal.show('bv-modal-example'),
                                    getStoreVoucher(sellerProducts.seller_id)
                                "
                              >
                                Get Voucher
                                <img src="@/assets/images/arrow.png" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="sc-c-sku-container-cart-total">
                        <div class="sc-c-sku-container-con sc-common-row">
                          <div class="sc-c-sku-container-sku-item">
                           
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
                                        >
                                      </span>
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

                           
                            </div>
                          </div>
                          <div class="sc-c-sku-container-quantity">
                            <div class="subtotal">
                          <div class="title">Voucher Discount:&nbsp;</div>
                          <div class="amount"> {{ sellerProducts.discount_amount }}৳</div>
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
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <div class="loyel-checkout-box-checkout">
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
                <hr />
                <div class="loyel-checkout-box">
                  <h4>Voucher Code</h4>

                  <div class="subtotal">
                    <div class="amount" style="display: flex; width: 100%">
                      <input
                        type="text"
                        class="voucher-value"
                        placeholder="Enter Voucher Code"
                        v-model="voucher"
                        style="width: 100%"
                      /><button
                        class="btn btn-warning voucher-button"
                        @click="getVoucherDiscount()"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="loyel-checkout-box">
                  <h4>Order Summary</h4>

                  <div class="subtotal">
                    <div class="title">Items Total</div>
                    <div class="amount">৳ {{ tatalAmount }}</div>
                  </div>
                  <div class="subtotal">
                    <div class="title">Voucher Discount</div>
                    <div class="amount">
                      ৳ {{ cartTotalDiscount + loyelDiscount }}
                      <input type="hidden" v-model="promoDiscount" value="0" />
                    </div>
                  </div>

                  <div class="subtotal">
                    <div class="title">Delivery Charge</div>
                    <div class="amount">৳ {{ deliveryCharge }}</div>
                  </div>
                  <!-- <div class="shipping">
                                <div class="title">
                                    Delivery Charge Discount
                                </div>
                                <div class="amount">
                                    ৳ {{deliveryChargeDiscount}}
                                    
                                </div>
                            </div> -->
                  <div class="shipping">
                    <div class="title">Total Discount</div>
                    <div class="amount">৳ {{ totalDiscount + loyelDiscount }}</div>
                  </div>
                  <hr />
                  <div class="total">
                    <div class="title">Payable Total</div>
                    <div class="amount">৳ {{ tatalAmount -(cartTotalDiscount+loyelDiscount) }}</div>
                  </div>
                  <button class="proceed-to-checkout" v-on:click="orderPlaced">
                    Place Order
                  </button>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-modal id="bv-modal-example" centered hide-footer>
        <template #modal-title> Store Voucher </template>
        <div class="store-voucher-modal">
          <div class="d-block text-center">
            <h3 v-for="(voucher, index) in voucherList" :key="index">
              <div
                class="card"
                style="
                  margin-top: 20px;
                  background-color: rgba(50, 50, 93, 0.25);
                "
              >
                <div class="card-header">
                  <h5 class="card-title">
                    Voucher Name: {{ voucher.voucher_name }}
                  </h5>
                </div>
                <ul
                  class="list-group"
                  style="padding-left: 20px; padding-top: 20px"
                >
                  <li>
                    <span class="voucher-code">Voucher Code:</span
                    ><span class="voucher-value-code">{{
                      voucher.promo_code
                    }}</span>
                  </li>
                  <li>
                    <span class="voucher-code">Voucher Discount:</span
                    ><span class="voucher-value-code">
                      <slot v-if="voucher.isdiscount_in_percent == 1">
                        {{ voucher.discount_amount }} %</slot
                      >
                      <slot v-else> {{ voucher.discount_amount }} ৳</slot>
                    </span>
                  </li>
                  <li>
                    <span class="voucher-code">Min. Order Value:</span
                    ><span class="voucher-value-code"
                      >{{ voucher.min_order_value }} ৳</span
                    >
                  </li>
                  <!-- <li ><span class="voucher-code">Morbi leo risus</span><span class="voucher-value-code">{{ voucher.min_order_value }}</span></li>
            <li ><span class="voucher-code">Porta ac consectetur ac</span><span class="voucher-value-code">{{ voucher.min_order_value }}</span></li>
            <li ><span class="voucher-code">Vestibulum at eros</span><span class="voucher-value-code">{{ voucher.min_order_value }}</span></li> -->
                </ul>
              </div>
            </h3>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import EventBus from "@/pages/event-bus";
export default {
  name: "checkout",
  components: {},
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
      loyelDiscount:"",
      totalShop: "",
      totalCartCheckInfoCount: "",
      totalcheckshop: "",
      checked: true,
      cartTotalDiscount:'',
      totalPrice: 0,
      selectedItems: [],
      voucherList: [],
      selectedSellerId: [],
      cart: {
        quantity: 1,
      },
    };
  },
  beforeMount() {
    this.getCheckoutList();
  },

  mounted() {
    this.totalPrice = 500;
    this.customerAuthCheck();
    this.loadCustomerAddress();
    // this.getAreaList();

    this.getCustomerLastAddress();
    this.scrollToTop();
    this.$refs.top.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollTo(0, 0);
    // this.voucher=this.$store.state.cartInfos.promoCode;
  },

 
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    
    async getStoreVoucher(dataId) {
      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      formData.append("dataId", dataId);
      await this.$http
        .post("customer/get/store/voucher", formData, config)
        .then((response) => {
          this.voucherList = response.data;
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },

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

    showModal() {
      this.modalShow = true;
    },
    async getDeliveryCharge(addressId) {
      let formData = new FormData();
    
      let flag = false;

     
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
      // this.getPriceInfo();
    },

    async getDeliveryChargeDiscount() {
      let formData = new FormData();
    
      let flag = false;

   
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
      // this.getPriceInfo();
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
      let formData = new FormData();
      formData.append("promoCode", this.voucher);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      };

      this.$http
        .post("customer/get/promo/discount", formData, config)
        .then((response) => {
          this.errMsgFlag = response.data.errMsgFlag;
          this.msgFlag = response.data.msgFlag;
          this.msg = response.data.msg;
          this.errMsg = response.data.errMsg;

          if (this.errMsgFlag == true) this.$toaster.warning(this.errMsg);
          if (this.msgFlag == true) {
            this.$toaster.success(this.msg);
          }
          this.getCheckoutList();
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
      // this.getPriceInfo();
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
        // this.getPriceInfo();
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
        // this.getPriceInfo();
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

    formSubmitPrevent(e) {
      e.preventDefault();
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

    getCheckoutList() {
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
          this.cartTotalDiscount=response.data.cartTotalDiscount;
          this.totalCartCheckInfoCount = response.data.totalCartCheckInfoCount;
          this.loyelDiscount=response.data.loyelDiscount;
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
            this.getCheckoutList();
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.getCheckoutList();
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
            this.getCheckoutList();
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.getCheckoutList();
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
            this.getCheckoutList();
            EventBus.$emit("cartList-count");
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.getCheckoutList();
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
            this.getCheckoutList();
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
@media (min-width: 1450px) {
  .checkout-descktop {
    /* display: flex; */
    min-height: 300px;
    /* background: white; */
    padding: 10px 15px;
    flex-direction: row;
    align-items: center;
    max-width: 1450px;
    min-width: 1450px;
    margin-top: 0px;
  }
}

@media (min-width: 1200px) and (max-width: 1449px) {
  .checkout-descktop {
    /* display: flex; */
    min-height: 300px;
    /* background: white; */
    padding: 10px 15px;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    min-width: 100%;
  }
}

.checkout-mobile {
  background: #f3f3f9;
  padding: 10px;
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

.loyel-checkout-box-checkout h5 {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;

  border-right: none;
  background-color: #fff;

  font-weight: bold;
}

/* .loyel-checkout-box-checkout h5:last-child { 
    border-right: 1px solid #ccc;
} */

/* Change background color of tabs on hover */
.loyel-checkout-box-checkout .overview-col:hover {
  background-color: #aaa;
  color: #fff;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

/* Styling for active tab */
.loyel-checkout-box-checkout .overview-col.active {
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

.loyel-checkout-box {
  width: 100%;
  /* border-radius: 15px;
    border: 1px solid #DEDEDE; */
  padding: 10px 10px;
  background: white;
  margin: 1px 0;
  border-radius: 8px;
}

.loyel-checkout-box-checkout {
  width: 100%;
  /* border-radius: 15px;
    border: 1px solid #DEDEDE; */
  padding: 15px 10px;
  background: white;
  margin: 1px 0;
  border-radius: 8px;
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

.voucher-button {
  height: 36px;
  border-radius: 0px;
  /* margin-top: -6px; */
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

@media (min-width: 770px) {
  .cart-product-mobile {
    display: none;
  }
}

.cart-product-mobile {
  padding: 20px;
  background: #f3f3f9;
}

@media (min-width: 1450px) {
  .checkout-product-desktop {
    min-height: 300px;

    padding: 0px 0px;
    flex-direction: row;
    align-items: center;
  }
}

@media (min-width: 1200px) and (max-width: 1449px) {
  .checkout-product-desktop {
    min-height: 300px;

    padding: 0px 0px;
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

.input-step-voucher button {
  width: 160px;
  font-weight: 500;
  height: 100%;
  line-height: 0.1em;
  font-size: 13px;
  padding: 0.2em !important;
  background: #fff;
  color: #212529;
  border: none;
  border-radius: 0.25rem;
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
  padding: 10px;

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

  box-shadow: none;
  display: block;
  height: 16px;
  text-align: left;

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
.batch-select-title {
  color: #222;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin-left: 24px;
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
  box-sizing: border-box;
  display: inline-block;
}

.next-checkbox-wrapper .next-checkbox-inner {
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: none;
  display: block;
  height: 16px;
  text-align: left;
  transition: all 0.1s linear;
  width: 16px;
}

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
  align-items: center;

  display: flex;
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

  box-shadow: none;
  display: block;
  height: 16px;
  text-align: left;

  transition: all 0.1s linear;
  width: 16px;
}

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
  display: flex;

  flex-direction: column;

  justify-content: flex-start;
  margin-left: 20px;
  min-height: 50px;
}
.sc-c-spu-container-title {
  align-items: flex-start;
  color: #222;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
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

.sc-c-spu-container-bd-con {
  margin: 8px 0 0 48px;
}

.sc-c-sku-container {
  background: #f4f4f4;
  border-radius: 8px;
  color: #000;
  font-family: Inter;
  margin-top: 5px;
  padding: 10px 20px 10px 1px;
}

.sc-common-row {
  display: table;
  width: 100%;
}

.sc-c-sku-container-con,
.sc-c-sku-container-sku-item {
  align-items: center;
}
.sc-c-sku-container-con {
  display: flex !important;

  flex-direction: row;
}

.sc-c-sku-container-sku-item {
  display: flex;

  flex: 1;
}

.sc-c-sku-container-con,
.sc-c-sku-container-sku-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.sc-c-sku-container-sku-img {
  margin: 0 20px 0 1px;
}

.sc-c-sku-container-sku-img img {
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
  display: flex;

  flex-direction: row;
  font-size: 16px;
  font-weight: 700;

  margin-left: 10px;
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

.discount-price {
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
.discount-price {
  font-size: 0.9rem;
}
.sc-shopping-cart-summary-block {
  float: right;
  width: 100%;
}
.sc-shopping-cart-summary-block .sc-shopping-cart-summary-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.06);
  margin-top: 0;
  padding: 36px 32px;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-title {
  color: #222;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body {
  margin-top: 18px;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body
  .label-value-line {
  overflow: hidden;
  padding: 6px 0;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body
  .line-sub-des {
  color: #666;
  font-size: 12px;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body
  .summary-action-block {
  margin-top: 24px;
  text-align: center;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body
  .label-value-line
  .left-label {
  color: #222;
  float: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body
  .label-value-line
  .right-value {
  color: #222;
  float: right;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}

.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body
  .summary-action-block
  .summary-action {
  align-items: center;

  display: flex;
  flex-direction: row;
  height: 48px;

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
.sc-shopping-cart-summary-block
  .sc-shopping-cart-summary-container
  .summary-body
  .summary-action-block
  .summary-action
  span {
  font-size: 18px;
  font-weight: 700;
  margin-left: 8px;
}

.sc-c-sku-container-voucher {
  background: #fff;
  border-radius: 8px;
  color: #000;
  font-family: Inter;
  border: 1px solid #e5e5e5;
  margin-top: 5px;
  padding: 10px 20px 10px 1px;
  width: 60%;
  margin-right: 10px;
}

.sc-c-sku-container-cart-total{
  background: #fff;
  border-radius: 8px;
  color: #000;
  font-family: Inter;
  /* border: 1px solid #e5e5e5; */
  margin-top: 5px;
  padding: 10px 20px 10px 1px;
  width: 35%;
}
.sc-c-spu-container-bd-con-voucher {
  /* margin: 8px 187px 0 48px; */
  /* margin-right: 30%; */
  display: flex;
  margin-left: 40px;
  margin-top: 20px;
  padding-bottom: 20px;
}
.modal-header {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.store-voucher-modal {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  min-height: 129px;

  margin: -15px;
}
.voucher-code {
  color: #000;
  font-family: Inter;

  margin-top: 5px;
  padding: 1px 20px 10px 1px;
  font-size: 18px;
}

.voucher-value-code {
  color: #000;
  font-family: Inter;

  margin-top: 5px;
  padding: 1px 20px 10px 1px;
  font-size: 18px;
}
</style>