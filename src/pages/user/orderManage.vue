<template>
  <div class="order-manage table-responsive">
    <div class="mobile-layout">
      <router-link
        :to="{
          name: 'profile',
          params: { id: $store.state.customerInfo.name },
        }"
      >
        <img
          src="@/assets/images/mobile.png"
          style="width: 40px; height: 15px"
        /> </router-link
      ><span style="margin-left: 20px; font-size: 20px; font-weight: 900"
        >Profile</span
      >
    </div>
    <div class="order-wrapper">
      <div class="order-info">My Orders</div>

      <div class="col col-lg-12 col-md-12">
         
  
         <div class="sc-shopping-cart-valid-list"  v-for="(dataInfo, dataIndex) in orderList.data" :key="dataIndex" style="    background: #fff;
    padding: 5px;
    margin-top: 10px;">
           <div
             class="sc-c-supplier-container"
             
            >
             <span style="padding-left: 10px;color:red">#{{ dataInfo.randomOrderCode }}</span>
             <span style="    position: relative;
    float: right;
    font-family: verdana;
    padding: 3px;
    margin-right: 20px;"><router-link  :to="{name:'customerInvoice',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:dataInfo.id}}">Manage</router-link></span>
             <div class="sc-c-supplier-container-main" v-for=" (shop, shopList) in dataInfo.orderhop_info" :key="shopList">
               <div class="sc-c-supplier-container-hd">
                 <div class="sc-common-row">
                 
                   <span class="sc-c-supplier-container-sellerInfo">
                


                  <router-link
                          class="sc-c-supplier-container-supplierLink"
                          :to="{
                            name: 'shop',
                            params: {
                              slug: shop.seller_info.shop_info.slug,
                            },
                          }"
                          :title="
                            shop.seller_info.shop_info.shop_name
                          "
                          target="_blank"
                          rel="noreferrer"
                          >{{
                            shop.seller_info.shop_info.shop_name
                          }}.</router-link
                        >
                   </span>
                   <div
                     class="sc-c-supplier-container-card-header-right"
                   ></div>
                 </div>
               </div>
               <div class="sc-c-supplier-container-bd" v-for=" (product, productList) in shop.order_product" :key="productList">
                 <div
                   class="sc-c-spu-container"
                   id="1600590490858"
                   
                 >
                   <div class="sc-c-spu-container-bd">
                     <div class="sc-c-spu-container-product-baseinfo" >
                      
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
                          
                         </div>
                       </div>
                     </div>
                     <div class="sc-c-spu-container-bd-con">
                       <div
                         class="sc-c-sku-container"
                         id="4278350903"
                        
                         v-for=" (stockInfo, stockList) in product.order_stock_info" :key="stockList">
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
                                            >Size: {{ stockInfo.stock_info.size_info.size }}({{
                                              stockInfo.stock_info.size_variant_info.attribute
                                            }}); Color:
                                            {{ stockInfo.stock_info.color_info.color }}</span
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
                                   
                                   </span>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div class="sc-c-sku-container-quantity">
                             
                             <span>Qty:</span> {{stockInfo.quantity}}
                            
                           </div>
                           <div class="sc-c-sku-container-quantity">
                             
                           
                             ৳ {{stockInfo.sell_rate | formatNumberWithOutDecimal }}
                           
                          </div>
                          <div class="sc-c-sku-container-quantity">
                             
                            ৳ {{stockInfo.sell_price | formatNumberWithOutDecimal }}
                           
                          </div>
                           <div class="sc-c-sku-container-quantity">
                            <p v-if="stockInfo.item_status == 1"> New</p>
                                    <p v-else-if="stockInfo.item_status == 2"> Processing</p>
                                    <p v-else-if="stockInfo.item_status == 3"> Packagigng</p>
                                    <p v-else-if="stockInfo.item_status == 4"> Waiting for delivery</p>
                                    <p v-else-if="stockInfo.item_status == 5"> Shipping</p>
                                    <p v-else-if="stockInfo.item_status == 6"> Delivered</p>
                                    <p v-else-if="stockInfo.item_status == 7"> Completed</p>
                                    <p v-else-if="stockInfo.item_status == 8"> Cancelled</p>
                                    <p v-else-if="stockInfo.item_status == 9"> Pending</p>
                                    <p v-else> New</p>
                           </div>
                           <!-- <div class="sc-c-sku-container-totalPrice">
                            
                           </div> -->
                           <div class="sc-c-sku-container-delete">
                             <span class="sc-c-sku-container-action-remove">
                              <form @submit.prevent="formSubmitPrevent()">
                                        <p v-if="stockInfo.customer_status == 0">You cancel this Item</p>
                                        <p v-else-if="stockInfo.item_status == 1">
                                            <a href="#" class="btn btn-warning float-right" @click="orderCancel(stockInfo)">Request for Cancel</a>
                                         
                                        </p>
                                        <p v-else>
                                            <slot v-if="stockInfo.item_status == 7">
                                                <!-- Complete -->

                                            </slot>
                                            <slot v-else>
                                                You can not cancelled this Item
                                            </slot>
                                        </p>
                                    
                                    <!-- <input type="text" v-model="stockInfo.id" /> -->

                                    <p v-if="stockInfo.item_status == 7">
                                    </p>
                                    <p v-else-if="stockInfo.item_status == 1">
                                        
                                    </p>
                                    <p v-else>
                                        <router-link  :to="{name:'OrderTracking',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:stockInfo.id}}">Order Tracking</router-link>
                                    <span v-if="stockInfo.id == itemId">{{ message }}</span>
                                    </p>

                                    <p v-if="stockInfo.item_status == 7">
                                        <slot v-if="stockInfo.order_item_review_info && stockInfo.order_item_review_info.length > 0">
                                            <router-link  :to="{name:'ProductReview',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:stockInfo.id}}">Update Review</router-link>
                                        </slot>
                                        <slot v-else>
                                            <router-link  :to="{name:'ProductReview',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:stockInfo.id}}">Write A Review</router-link>
                                        </slot>
                                      
                                    </p>

                                    <p v-if="stockInfo.item_status == 7">
                                        <router-link  :to="{name:'RefundOrReturnOrderProduct',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:orderItem.id}}">Refund Or Return Order Item</router-link>
                                    </p>
                                    </form>
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
      <!-- <table>
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Order Id</th>
           

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dataInfo, dataIndex) in orderList.data" :key="dataIndex">
            <td>{{ dataInfo.created_at | formatDate }}</td>
            <th>{{ "#" + dataInfo.randomOrderCode }}</th>
           

            <td>
              <router-link
                :to="{
                  name: 'customerInvoice',
                  params: {
                    name: $store.state.customerInfo.name.split(' ').join('-'),
                    dataId: dataInfo.id,
                  },
                }"
                >view</router-link
              >
            </td>
          </tr>
          <br />
        </tbody>
      </table> -->
      <div class="overflow-auto">
        <div class="mt-3">
          <paginate
            :page-count="lastPage"
            :click-handler="dataByPaginate"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination justify-content-end'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :prev-class="'page-item'"
            :prev-link-class="'page-link'"
            :next-class="'page-item'"
            :next-link-class="'page-link'"
            :first-last-button="true"
            :first-button-text="'<<'"
            :last-button-text="'>>'"
          >
            <span slot="prevContent">Changed previous button</span>
            <span slot="nextContent">Changed next button</span>
            <span slot="breakViewContent">
              <svg width="16" height="4" viewBox="0 0 16 4">
                <circle fill="#999999" cx="2" cy="2" r="2" />
                <circle fill="#999999" cx="8" cy="2" r="2" />
                <circle fill="#999999" cx="14" cy="2" r="2" />
              </svg>
            </span>
          </paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-manage",
  data() {
    return {
      msg: "order-manage",
      rows: 7,
      perPage: 1,
      currentPage: 2,
      orderList: [],
      baseUrl: this.$baseUrl,
      pastPage: 1,
      pageNo: 1,
      lastPage: 1,
      numOfData: 50,
    };
  },
  beforeMount() {
    this.getOrderList();
  },
  methods: {
    getTotalPrice(
      price,
      deliveryCharge,
      productDiscount,
      invoiceDiscount,
      promoDiscount
    ) {
      let totalPrice = 0;
      let totalDiscount = 0;
      price = parseInt(price);
      deliveryCharge = parseInt(deliveryCharge);
      productDiscount = parseInt(productDiscount);
      invoiceDiscount = parseInt(invoiceDiscount);
      promoDiscount = parseInt(promoDiscount);
      totalPrice = price + deliveryCharge;
      totalDiscount = productDiscount + invoiceDiscount + promoDiscount;
      return totalPrice - totalDiscount;
    },

    dataByPaginate(pageIndex) {
      this.pageNo = pageIndex;
      this.getOrderList();
    },
    getOrderList() {
      let token = window.localStorage.getItem("customerToken");

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      // let formData=new FormData();
      this.$http
        .get(
          "/customer/get/order/list?page=" +
            this.pageNo +
            "&numOfData=" +
            this.numOfData,
          config
        )
        .then((response) => {
          this.orderList = response.data;
          this.lastPage = this.orderList.last_page;
        })
        .catch((error) => {
          console.dir(error);
        })
        .finally();
    },
    async orderCancel(orderItem){
        let token=window.localStorage.getItem("customerToken");
           
           let config = {
                  headers: {
                     'Authorization': 'Bearer '+token
                 }   
             };
            this.ItemId = orderItem.id;
    
      let formData=new FormData();
      formData.append("dataId",this.ItemId);

      await this.$http.post("/customer/order/cancel",formData,config)
       .then(response=>{
        if(response.data.msgFlag==true){
                    // console.dir(response.data);
            this.getOrderList();
            this.$toaster.success(response.data.msg);
        }
        if(response.data.errMsgFlag==true){
        this.$toaster.warning(response.data.errMsg);
        }
        
       })
       .catch(error=>{console.dir(error)})
       .finally();
    },
  },
};
</script>

<style scoped>
@media (min-width: 1px) and (max-width: 767px) {
}

@media (min-width: 768px) {
  .mobile-layout {
    display: none;
  }
}
.order-info {
  width: 100%;
  height: 50px;
  border: 1px solid #999999;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
}

/* table css  */
table {
  width: 99.9%;
}
table thead tr {
  background: #dcdcdc;
  height: 50px;
}
table thead tr th {
  text-align: center;
}
table tbody tr {
  border: 1px solid #999999;
  background: white;
}
table tbody tr td {
  /* padding: 10px; */
  text-align: center;
}
table tbody tr th {
  /* padding: 10px; */
  text-align: center;
}
table tbody tr td:nth-child(1) {
  padding-left: 30px;
}
table tbody tr td:nth-child(2),
table tbody tr td:nth-child(4) {
  white-space: nowrap;
}

/* table css  */
.info-details p:nth-child(2) {
  color: #999999;
}
.product-details-wrapper {
  display: flex;
  grid-column-gap: 10px;
}

/* status & btn css  */
.order-btn-group > * {
  display: block;
}
.order-btn-group {
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-between;
}

.status {
  display: flex;
  grid-column-gap: 10px;
  align-items: center;
}
.cancel-status-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f12323;
}
.pending-status-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ff9900;
}
.placed-status-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #00a64c;
}

.cancel-btn {
  border: none;
  padding: 5px;
  background: #f12323;
  color: white;
  font-size: 0.9rem;
}
.track-btn {
  border: none;
  padding: 5px;
  background: #424242;
  color: white;
  font-size: 0.9rem;
}
.regular-cancel-btn,
.pending-track-btn {
  border: 1px solid #424242;
  padding: 5px;
  background: white;
  font-size: 0.9rem;
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

  .sc-c-sku-container-quantity{
   
    display: flex;

    flex-direction: row;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    min-width: 10%;
  }
/* status & btn css  */
</style>
