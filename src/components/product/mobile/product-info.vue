<template>
  <div class="product-info-mobile">
    <br />
    <h1 class="product-name-mobile">{{ $store.state.productInfos.name }}</h1>
    <div class="rating">
      <div class="ratings" v-if="totalrating == 5">
        <Rating size="15px" :value="5" />
        <span>{{ ratingCount }} Ratings</span>
      </div>
      <div class="ratings" v-else-if="totalrating == 4">
        <Rating size="15px" :value="4" />
        <span>{{ ratingCount }} Ratings</span>
      </div>
      <div class="ratings" v-else-if="totalrating == 3">
        <Rating size="15px" :value="5" />
        <span>{{ ratingCount }} Ratings</span>
      </div>
      <div class="ratings" v-else-if="totalrating == 2">
        <Rating size="15px" :value="5" />
        <span>{{ ratingCount }} Ratings</span>
      </div>
      <div class="ratings" v-else-if="totalrating == 1">
        <Rating size="15px" :value="5" />
        <span>{{ ratingCount }} Ratings</span>
      </div>
      <div class="ratings" v-if="totalrating == 0">
        <Rating size="15px" :value="0" />
        <span>{{ ratingCount }} Ratings</span>
      </div>
    </div>
    <div class="brand-social-container">
      <div class="brand-shop-weight">
        <slot v-if="$store.state.productInfos.brand_info != null">
          <div class="brand">
            <label for="">Brand:</label>
            <span>{{ $store.state.productInfos.brand_info.name }}</span>
          </div>
        </slot>
        <slot v-if="$store.state.productInfos.shop_info != null">
          <div class="shop">
            <label for="">Shop:</label>
            <span>{{ $store.state.productInfos.shop_info.shop_name }}</span>
          </div>
        </slot>
        <!-- <div class="weight">
                    <label for="">Weight:</label>
                    <span> No....</span>
                </div> -->
      </div>
      <div class="social">
        <div class="share">
          <b-icon icon="share-fill" />
        </div>
        <span v-if="$store.state.customerInfo">
          <div
            class="wishlist"
            @click="addToWishList($store.state.productInfos)"
          >
            <b-icon icon="heart" />
          </div>
        </span>
        <span v-else>
          <a type="primary" @click="modalvalue = true">
            <b-icon icon="heart" />
          </a>
        </span>
      </div>
    </div>
    <hr />
    <div class="pricing" v-if="sizeWizePrice.length < 1">
      <slot
        v-if="
          isDiscountTimeExpire(
            $store.state.productInfos.startDate,
            $store.state.productInfos.endDate
          )
        "
      >
        <div class="main-price">
          ৳ {{ $store.state.productInfos.special_price }}
        </div>
        <div class="discount-price">
          <del>৳ {{ $store.state.productInfos.sell_price }}</del
          >&nbsp; &nbsp; -

          <div class="percent-dicount">
            {{
              getDiscountPrice(
                $store.state.productInfos.sell_price,
                $store.state.productInfos.special_price
              ) | formatNumberWithDecimal
            }}%
          </div>
        </div>
      </slot>
      <slot v-else>
        <div class="main-price">
          ৳ {{ $store.state.productInfos.sell_price }}
        </div>
      </slot>
    </div>
    <div v-else>
      <slot
        v-if="
          isDiscountTimeExpire(sizeWizePrice.startDate, sizeWizePrice.endDate)
        "
      >
        <div class="main-price">৳ {{ sizeWizePrice.special_price }}</div>
        <div class="discount-price">
          <del>৳ {{ sizeWizePrice.sell_price }}</del>

          <div class="percent-dicount">
            {{
              getDiscountPriceInfo(
                sizeWizePrice.sell_price,
                sizeWizePrice.special_price
              ) | formatNumberWithDecimal
            }}%
          </div>
        </div>
      </slot>
      <slot v-else>
        <div class="main-price">৳ {{ sizeWizePrice.sell_price }}</div>
      </slot>
    </div>
    <hr />
    <div class="color-size">
      <div class="color-details">
        <label for="">Color</label>
        <div class="color-plate">
          <slot
            v-for="colorInfo in uniqueColors(
              $store.state.productInfos.stock_info
            )"
          >
            <div
              class="color-div"
              :id="'color_id' + colorInfo.color_id"
              @click="setColor(colorInfo)"
              :key="colorInfo.id"
            >
              {{ colorInfo.color_info.color }}
            </div>
          </slot>
        </div>
      </div>

      <div class="size-details">
        <label for=""
          >Size:<span v-if="$store.state.productInfos.stock_single_info && $store.state.productInfos.stock_single_info.size_info">
  {{ $store.state.productInfos.stock_single_info.size_info.size }}
</span></label
        >
        <!-- <div class="size-plate">
              <slot v-for="sizeInfo in  uniqueSizes($store.state.productInfos.stock_info)">
                  <div  class="size-div" >
                  
                      <div class="size-name" v-on:click="setSize(sizeInfo)" :id="'size_id'+sizeInfo.size_id">{{sizeInfo.size_info.size}}</div>
                  
                  </div>
              </slot>
          </div>                 -->
      </div>

      <div class="size-attribute-details">
        <div class="size-attribute-plate">
          <slot
            v-for="attributeInfo in uniqueSizeAttribute(
              $store.state.productInfos.stock_info
            )"
          >
            <!--  <div class="size-name size-active">S</div> -->
            <div
              class="size-attribute-div"
              :key="attributeInfo.id"
              v-on:click="setSizeAttribute(attributeInfo)"
              :id="'size_attribute_id' + attributeInfo.size_attribute_id"
            >
              {{ attributeInfo.size_variant_info.attribute }}
            </div>
            <!-- <div class="size-number">28</div> -->
          </slot>
        </div>
      </div>
      <div class="quantity">
        <Quantity v-model="quantity" :min="1" :max="10" />
        <!-- <div class="available-quantity">
              <label for="">Quantity:
              <span> 50 available</span>
              </label>
          </div> -->
      </div>
      <br />
      <div class="btn-group-mobile">
        <div
          class="buy-btn"
          @click="
            addToCartSpecificProduct($store.state.productInfos);
            gotoCheckoutPage();
          "
        >
          buy now
        </div>
        <slot v-if="$store.state.customerInfo">
          <div
          class="atc-btn"
          @click="addToCartSpecificProduct($store.state.productInfos)"
        >
          add to cart
        </div>
        </slot>
       
        <slot v-else>
          <div
          class="atc-btn"
          @click="modalvalue = true"
        >
          add to cart
        </div>
        </slot>
      </div>
    </div>

    <div class="modal-one">
      <a-modal
        v-model="modalvalue"
        title="Please Login First"
        centered
        @ok="login()"
        @cancel="closeLoginModal()"
      >
        <b-row cols="1" cols-md="1">
          <b-col>
            <div class="form-part">
              <form @submit.prevent="myform" action="">
                <InputField
                  :value.sync="loginInfo.phone"
                  type="phone"
                  label="Phone"
                  ref="phone"
                  @checkfail="checker"
                  :iconFlag="true"
                  iconName="envelope"
                />

                <InputField
                  :value.sync="loginInfo.password"
                  type="password"
                  label="Password"
                  ref="password"
                  @checkfail="checker"
                  :iconFlag="true"
                  iconName="file-lock2"
                />
                <div class="already-account">
                  <router-link to="forget-password">
                    Forgot your password?
                    <span>
                      <b-icon icon="arrow-right" />
                    </span>
                  </router-link>
                </div>
                <button class="signup-btn" @click="login()">log in</button>
                <div class="create-not-you">
                  <p>
                    <router-link :to="{ name: 'signup' }"
                      >Create Account</router-link
                    >
                  </p>
                  <p>Not You?</p>
                </div>
              </form>
            </div>
          </b-col>
          <b-col> </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col> </b-col>
        </b-row>
      </a-modal>
    </div>
  </div>
</template>

<script>
import EventBus from "@/pages/event-bus";
import Quantity from "@/components/product/Quantity";
import Rating from "@/components/product/rating-view";
import InputField from "@/components/user/inputField";
import moment from "moment";
export default {
  name: "product-info-mobile",
  components: {
    Quantity,
    Rating,
    InputField,
    EventBus,
  },
  props: {
    productInfo: Object,
    totalrating: {
      type: Number,
      required: true,
    },
    ratingCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      modalvalue: false,
      quantity: 1,
      productId: null,
      colorCode: 0,
      sizeCode: 0,
      sizeAttributeCode: 0,
      checkfail: false,

      sizeWizePrice: "",
      loginInfo: {
        phone: "",
        password: "",
      },
    };
  },

  beforeMount() {
    this.setSizeAttribute();
  },

  methods: {
    closeLoginModal() {
      this.modalvalue = false;
    },


    login() {
      let phone = this.$refs.phone.value;
      let password = this.$refs.password.value;

      let formData = new FormData();
      formData.append("phone", phone);
      formData.append("password", password);
      this.$http
        .post("customer/login", formData)
        .then((response) => {
          this.msgFlag = response.data.msgFlag;
          this.errMsgFlag = response.data.errMsgFlag;
          this.errMsg = response.data.errMsg;

          if (response.data.msgFlag) {
            let customerInfo = response.data.customerInfo;
            window.localStorage.setItem(
              "customerInfo",
              JSON.stringify(response.data.customerInfo)
            );
            window.localStorage.setItem("customerToken", response.data.token);
            // window.localStorage.setItem('userType',response.data.userType);
            // this.$store.commit('storeUserToken',response.data.token);

            this.$store.commit("storeCustomerInfo", response.data.customerInfo);
            this.$toaster.success(response.data.msg);
            this.modalvalue = false;
          } else {
            window.localStorage.setItem("customerInfo", null);
            window.localStorage.setItem("customerToken", null);
            this.$toaster.warning(this.errMsg);
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    checker(payload) {
      this.checkfail = payload;
    },
    myform() {
      let name = this.$refs.name.$refs.input;
      let email = this.$refs.email.$refs.input;
      let phone = this.$refs.phone.$refs.input;
      const inputArray = [name, email, phone];
      // for (let index = 0; index < inputArray.length; index++) {
      //     const element = inputArray[index];
      //     if (element.value.length < 1) {
      //         element.focus();
      //         break;
      //     }
      // }
      if (!this.checkfail) {
        console.log(this.loginInfo);
      }
    },

    setColor(colorInfo) {
      $(".color-div").removeClass("color-active");
      $("#color_id" + colorInfo.color_id).addClass("color-active");

      this.colorCode = colorInfo.color_id;
    },
    setSize(sizeInfo) {
      $(".size-name").removeClass("size-active");
      $("#size_id" + sizeInfo.size_id).addClass("size-active");
      this.sizeCode = sizeInfo.size_id;
    },
    // setSizeAttribute(attributeInfo) {
    //   $(".size-attribute-div").removeClass("size-attribute-active");
    //   $("#size_attribute_id" + attributeInfo.size_attribute_id).addClass(
    //     "size-attribute-active"
    //   );
    //   this.sizeAttributeCode = attributeInfo.size_attribute_id;
    //   let slug = this.$route.params.slug;

    //   let formData = new FormData();
    //   formData.append("sizeAttribute", attributeInfo.size_attribute_id);
    //   formData.append("slug", slug);
    //   this.$http
    //     .post("product/size/price", formData)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.sizeWizePrice = response.data;
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     })
    //     .finally();
    // },

    setSizeAttribute(attributeInfo) {
  if (attributeInfo && attributeInfo.size_attribute_id ) {
    $(".size-attribute-div").removeClass("size-attribute-active");
    $("#size_attribute_id" + attributeInfo.size_attribute_id).addClass(
      "size-attribute-active"
    );
    this.sizeAttributeCode = attributeInfo.size_attribute_id;
    let slug = this.$route.params.slug;

    let formData = new FormData();
    formData.append("sizeAttribute", attributeInfo.size_attribute_id);
    formData.append("slug", slug);
    this.$http
      .post("product/size/price", formData)
      .then((response) => {
        // console.log(response.data);
        this.sizeWizePrice = response.data;
      })
      .catch((error) => {
        console.dir(error);
      });
  } else {
   
  }
},
    gotoCheckoutPage() {
      if (this.addToCartValidation(productInfo)) {
        this.$router.push({ name: "cartView" });
      }
    },
    async addToCartSpecificProduct(productInfo) {
      if (this.addToCartValidation(productInfo)) {
        let formData = new FormData();
        this.productId = productInfo.id;
        formData.append("sizeAttributeCode", this.sizeAttributeCode);
        formData.append("productId", this.productId);
        formData.append("colorCode", this.colorCode);
        formData.append("quantity", this.quantity);
        let token=window.localStorage.getItem("customerToken");
           
           let config = {
                  headers: {
                     'Authorization': 'Bearer '+token,
                     "Content-Type": "multipart/form-data",
                 }   
             };
       

        await this.$http
          .post("customer/product/add/to/cart", formData, config)
          .then((response) => {
            if (response.data.msgFlag == true) {
              // console.dir(response.data);
              // this.$store.commit("storeCartInfos", response.data.cartInfos);
              // this.$store.commit("storePriceInfos", response.data);
              // this.$store.commit("incrementCartCount");
              EventBus.$emit("cartList-count");
              this.$toaster.success(response.data.msg);
            }
            if (response.data.errMsgFlag == true) {
              // this.$store.commit("storeCartInfos", response.data.cartInfos);
              // this.$store.commit("storePriceInfos", response.data);
              this.$toaster.warning(response.data.errMsg);
            }
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      }
    },
    // async addToCartSpecificProduct(productInfo) {
    //   if (this.addToCartValidation(productInfo)) {
    //     let cartInfos = this.$store.state.cartInfos;
    //     let formData = new FormData();
    //     let flag = false;
    //     this.productId = productInfo.id;

    //     cartInfos.forEach((cartInfo) => {
    //       if (
    //         cartInfo.productId == this.productId &&
    //         cartInfo.isFreeProduct != true &&
    //         parseInt(cartInfo.colorId) == this.colorCode &&
    //         parseInt(cartInfo.sizeAttributeId) == this.sizeAttributeCode
    //       ) {
    //         let quantity = parseFloat(cartInfo.quantity) + 1;
    //         formData.append("productId[]", this.productId);
    //         formData.append("quantity[]", this.quantity);
    //         formData.append("isFreeProduct[]", false);
    //         formData.append("colorCode[]", this.colorCode);
    //         formData.append("sizeAttributeCode[]", this.sizeAttributeCode);
    //         formData.append("addedToCart[]", true);
    //         flag = true;
    //       } else if (cartInfo.isFreeProduct != true) {
    //         formData.append("productId[]", cartInfo.product_id);
    //         formData.append("quantity[]", cartInfo.quantity);
    //         formData.append("isFreeProduct[]", cartInfo.isFreeProduct);
    //         formData.append("colorCode[]", cartInfo.color_id);
    //         formData.append("sizeAttributeCode[]", cartInfo.size_attribute_id);
    //         formData.append("addedToCart[]", false);
    //       }
    //     });

    //     if (!flag) {
    //       formData.append("productId[]", this.productId);
    //       formData.append("quantity[]", this.quantity);
    //       formData.append("isFreeProduct[]", false);
    //       formData.append("colorCode[]", this.colorCode);
    //       formData.append("sizeAttributeCode[]", this.sizeAttributeCode);
    //       formData.append("addedToCart[]", true);
    //     }
    //     let config = {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     };

    //     await this.$http
    //       .post("product/add/to/cart", formData, config)
    //       .then((response) => {
    //         if (response.data.msgFlag == true) {
             
    //           this.$store.commit("storeCartInfos", response.data.cartInfos);
    //           this.$store.commit("storePriceInfos", response.data);
    //           this.$store.commit("incrementCartCount");
    //           this.$toaster.success(response.data.msg);
    //         }
    //         if (response.data.errMsgFlag == true) {
    //           this.$store.commit("storeCartInfos", response.data.cartInfos);
    //           this.$store.commit("storePriceInfos", response.data);
    //           this.$toaster.warning(response.data.errMsg);
    //         }
    //       })
    //       .catch((error) => {
    //         console.dir(error);
    //       })
    //       .finally();
    //   }
    // },
    addToCartValidation(productInfo) {
      if (productInfo.has_size == 1 && productInfo.has_color == 1) {
        if (this.colorCode != 0 && this.sizeAttributeCode != 0) {
          return true;
        } else {
          if (this.sizeAttributeCode == 0)
            this.$toaster.warning("Choose A Size Attribute First.");
          if (this.colorCode == 0)
            this.$toaster.warning("Choose A Color First.");
          return false;
        }
      } else {
        if (productInfo.has_size == 1) {
          if (this.sizeAttributeCode != 0) {
            return true;
          } else {
            this.$toaster.warning("Choose A Size Atribute First.");
            return false;
          }
        } else if (productInfo.has_color == 1) {
          if (this.colorCode != 0) {
            return true;
          } else {
            this.$toaster.warning("Choose A Color First.");
            return false;
          }
        } else {
          this.colorCode = 0;
          this.sizeAttributeCode = 0;
          return true;
        }
      }
      // if(hasSizeColorVarity==1){
      //   if(this.colorCode!=0 && this.sizeCode!=0){
      //     return true;
      //   }
      //   else{
      //     if(this.colorCode==0)
      //       this.$toaster.warning("Choose A Color First.");
      //     if(this.sizeCode==0)
      //       this.$toaster.warning("Choose A Size First.");
      //     return false;
      //   }
      // }
      // else{
      //   return true;
      // }
    },

    productQuantityChange(value) {
      if (value == -1 && parseInt(this.quantity) > 1) {
        this.quantity = parseInt(this.quantity) - 1;
      }
      if (value == 1) {
        this.quantity = parseInt(this.quantity) + 1;
      }
      this.addToCartSpecificProduct();
    },
    getSizeAndColorWisePrice() {
      this.productId = this.$store.state.productId;
      this.$http
        .get("product/details/size/color/wise", {
          params: {
            productId: this.productId,
            colorId: this.colorCode,
            sizeId: this.sizeCode,
          },
        })
        .then((response) => {
          if (response.data.msgFlag == true)
            this.$store.commit("storeProductDetails", response.data.dataInfos);
          // if(response.data.errMsgFlag==true)
          //   // this.$toaster.warning(response.data.errMsg);
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    // uniqueSizes(quantityInfos) {
    //     let sizes=[];
    //     quantityInfos.forEach(quantityInfo=>{
    //       if(!sizes.some(size => size.size_id === quantityInfo.size_id))
    //         sizes.push(quantityInfo);
    //     });
    //     return sizes;
    // },
    uniqueSizeAttribute(quantityInfos) {
      let sizeAttributes = [];
      if (quantityInfos) {
      quantityInfos.forEach((quantityInfo) => {
        if (
          !sizeAttributes.some(
            (attribute) =>
              attribute.size_attribute_id === quantityInfo.size_attribute_id
          )
        )
          sizeAttributes.push(quantityInfo);
      });
    }
      return sizeAttributes;
    },
    uniqueColors(quantityInfos) {
      let colors = [];
      if (quantityInfos) {
        quantityInfos.forEach((quantityInfo) => {
          if (!colors.some((color) => color.color_id === quantityInfo.color_id))
            colors.push(quantityInfo);
        });
      }
      return colors;
    },
    getDiscountPrice(price, discount) {
      return ((price - discount) * 100) / price;
    },
    getDiscountPriceInfo(price, discount) {
      return ((price - discount) * 100) / price;
    },
    //     getDiscountPrice(price,discount){
    //         return parseInt((parseInt(price)*parseInt(discount))/100);
    //     },
    //     getSellPrice(stockInfos){
    //          let sellPrice=0;
    //           stockInfos.forEach(stockInfo=>{
    //               sellPrice=parseInt(stockInfo.sell_price);
    //           });
    //         return parseInt(sellPrice);
    //     },
    //     getQuantityLabel(quantityType){
    //      let label="1 PCS";
    //       if(quantityType!=null){
    //         label=quantityType.smallQuantity+" "+quantityType.label;
    //       }
    //       return label;
    //    },
    isDiscountTimeExpire(startAt, endAt) {
      endAt = moment(endAt); //Date format
      startAt = moment(startAt); //Date format
      let today = moment();
      let isAfter = moment(endAt).isAfter(today);
      let isBefore = moment(startAt).isBefore(today);
      if (isAfter && isBefore) return true;
      else return false;
    },

    async addToWishList(productInfo) {
      this.productId = productInfo.id;

      let formData = new FormData();

      formData.append("productId", this.productId);

      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      await this.$http
        .post("customer/product/add/to/wish/list", formData, config)
        .then((response) => {
          if (response.data.msgFlag == true) {
            // console.dir(response.data);

            EventBus.$emit("wishList-count");
            this.$toaster.success(response.data.msg);
          }
          if (response.data.errMsgFlag == true) {
            this.$toaster.warning(response.data.errMsg);
          }
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },

    //   getWishListCount(){

    //     let token=window.localStorage.getItem("customerToken");

    //     let config = {
    //     headers: {
    //     'Authorization': 'Bearer '+token
    //     }
    //     };
    //     // let formData=new FormData();
    //     this.$http.get('/customer/wish/list/count',config)
    //     .then(response=>{
    //     console.log(response.data);
    //     this.wishListCount = response.data.wishListCount;
    //     })
    //     .catch(error=>{console.dir(error)})
    //     .finally();
    //     },
  },
};
</script>

<style scoped>
.product-name-mobile {
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
  color: #333;
  font-family: OpenSans, Roboto, Helvetica Neue, Helvetica, Arial,
    Microsoft YaHei;
}
@media (min-width: 768px) {
  .form-part {
    width: 100%;
    height: 40%;
    padding: 10px 0;
  }
}

@media (min-width: 1px) and (max-width: 767px) {
  .form-part {
    width: 100%;
    height: 40%;
    padding: 20px 20px;
  }
}

/* heading part css  */
.heading {
  width: 100%;
  height: 30%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-signup {
  position: relative;
}
.tag-line {
  position: absolute;
  bottom: 20px;
  left: 15px;
  color: #8e8e8e;
}
/* heading part css  */

/* form part css  */

.already-account {
  text-align: right;
  margin-bottom: 10px;
}
.already-account span {
  color: #db3022;
  cursor: pointer;
}
.signup-btn {
  background: #db3022;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
}
.create-not-you {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
}
.create-not-you > * {
  cursor: pointer;
}
/* form part css  */

/* .social part css  */
.social-account {
  width: 100%;
  height: 30%;
}
.social-login {
  text-align: center;
}
.social-icon {
  display: flex;
  height: 110px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-column-gap: 20px;
}
.social-icon > * {
  width: 100px;
  height: 70px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #8E8E8E; */
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1), -5px -5px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
/* .social part css  */
a {
  text-decoration: none;
  color: black;
}
@media (min-width: 540px) {
  .signup-form {
    width: 500px;
    min-height: 700px;
    background: white;
    padding: 0 10px;
    border: 1px solid #adadad;
    border-radius: 15px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}

@media (min-width: 320px) and (max-width: 539px) {
  .signup-form {
    width: 320px;
    min-height: 700px;
    background: white;
    padding: 0 10px;
    border: 1px solid #adadad;
    border-radius: 15px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}

/* heading part css  */
.heading {
  width: 100%;
  height: 30%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-signup {
  position: relative;
}
.tag-line {
  position: absolute;
  bottom: 20px;
  left: 15px;
  color: #8e8e8e;
}
/* heading part css  */

/* form part css  */
.form-part {
  width: 100%;
  height: 40%;
  padding: 10px 0;
}

.already-account {
  text-align: right;
  margin-bottom: 10px;
}
.already-account span {
  color: #db3022;
  cursor: pointer;
}
.signup-btn {
  background: #db3022;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
}
.create-not-you {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
}
.create-not-you > * {
  cursor: pointer;
}
/* form part css  */

/* .social part css  */
.social-account {
  width: 100%;
  height: 30%;
}
.social-login {
  text-align: center;
}
.social-icon {
  display: flex;
  height: 110px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-column-gap: 20px;
}
.social-icon > * {
  width: 100px;
  height: 70px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #8E8E8E; */
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1), -5px -5px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
/* .social part css  */
a {
  text-decoration: none;
  color: black;
}

h2 {
  margin-bottom: 5px;
}
hr {
  margin: 5px;
}
.brand-social-container {
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
}
.brand-shop-weight {
  display: flex;
  grid-column-gap: 10px;
}

.social {
  display: flex;
  grid-column-gap: 15px;
}
.social .b-icon {
  font-size: 25px;
  cursor: pointer;
}
.discount-price {
  display: flex;
  grid-column-gap: 10px;
  color: #ff4040;
}

.main-price {
  color: #44b201;
  font-size: 1.8rem;
  font-weight: 600;
}
.discount-price {
  font-size: 0.9rem;
}
.brand-shop-weight label,
.del-price {
  color: #8a8a8a;
}
.brand,
.percent-dicount {
  color: #ff4040;
}
.shop {
  color: #4ed77d;
}

.color-size label {
  font-weight: bold;
  margin: 5px 0;
  font-size: 0.8rem;
}
.color-plate {
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  grid-column-gap: 5px;
  font-size: 0.8rem;
  /* margin-left: 49px; */
}
.color-div {
  /* min-width: 65px;
    min-height: 25px;
    border-radius: 6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px 0; */

  box-sizing: border-box;
  display: inline-block;
  position: relative;
  margin-top: 8px;
  margin-right: 1px;
  overflow: hidden;
  min-width: 36px;
  min-height: 36px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #eff0f5;
  border-radius: 2px;
  padding: 4px;
}

.size-plate {
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  grid-column-gap: 10px;
}

.size-attribute-plate {
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  grid-column-gap: 10px;
}
.size-div > * {
  width: 30px;
  height: 30px;
  border: 1px solid #c0c0c0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.size-div > :nth-child(1) {
  cursor: pointer;
}
.size-active {
  background: #d4d4d4;
}

.size-attribute-div > * {
  min-width: 30px;
  height: 30px;
  /* border: 1px solid #c0c0c0; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.size-attribute-div {
  /* min-width: 65px;
    min-height: 25px;
    border-radius: 6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px 0; */

  box-sizing: border-box;
  display: inline-block;
  position: relative;
  margin-top: 8px;
  margin-right: 1px;
  overflow: hidden;
  min-width: 30px;
  min-height: 30px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #eff0f5;
  border-radius: 2px;
  padding: 4px;
}
.size-attribute-div > :nth-child(1) {
  cursor: pointer;
}

.quantity {
  margin-top: 10px;
  display: flex;
  grid-column-gap: 15px;
}
.available-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
}
.available-quantity label {
  color: #767676;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-top: -2px;
}
.available-quantity span {
  font-weight: initial;
  color: #ff4040;
  margin-left: 6px;
}

.btn-group-mobile {
  display: flex;
  grid-column-gap: 15px;
  font-size: 12px;
}
.btn-group-mobile > * {
  width: 150px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}
.btn-group > * {
  width: 150px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}

.buy-btn {
  background: #ff4040;
}

.buy-btn {
  background: #ff4040;
}
.atc-btn {
  background: #363636;
}
.size-attribute-active {
  border: 1.5px solid #ff4040;
  background-color: #ededed;
}

.size-attribute-div:hover {
  border: 1.5px solid #ff4040;
  background-color: #ededed;
}

.color-active {
  border: 1.5px solid #ff4040;
  background-color: #ededed;
}

.color-div:hover {
  border: 1.5px solid #ff4040;
  background-color: #ededed;
}
.size-attribute-details-mobile {
  margin-left: 5px;
}

.product-info-mobile {
  width: 100%;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff;
  padding: 10px;
  margin-top: 10px;
}
</style>
