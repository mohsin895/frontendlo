<template>
   <div id="invoice">
        <div class="invoice overflow-auto">
            <div class="container">
                <div style="min-width: 600px">
                <header>
                    <div class="row">
                        <div class="col company-details">
                            <h2 class="name">{{globalData.shop_name}}</h2>
                        </div>
                    </div>
                </header>
                <main>
                    <div class="row contacts">
                        <div class="col invoice-no">
                            <div class="invoice_no text-gray-light">
                                <span>Invoice No: </span>#{{orderInfo.randomOrderCode}}</div>
                            <div class="name text-gray-light">
                                <span>Name: </span>
                                <slot v-if="orderInfo.address_info!=null">
                                   {{orderInfo.address_info.name}}
                                </slot>
                            </div>
                            <div class="phone text-gray-light">
                                <span>Phone: </span>
                                <slot v-if="orderInfo.address_info!=null">
                                    {{orderInfo.address_info.phone}}
                                </slot>
                            </div>
                            <div class="address text-gray-light">
                                <span>Address: </span>
                                {{orderInfo.address_info.address}}
                            </div>

                        </div>
                        <div class="col invoice-details">
                            <div class="date">
                                <span>Date:</span>
                                 {{orderInfo.created_at | formatDate}}
                             </div>
                        </div>
                    </div>
                    <table >
                        <thead class="table-light">
                            <tr>
                                <!-- <th class="text-center">Reference</th> -->
                                <th class="text-center">Image</th>
                                <th class="text-center">Product Name</th>
                                <th class="text-center">Qty</th>
                                <th class="text-center">Unit Price</th>
                                <!-- <th class="text-center">Price</th> -->
                                <!-- <th class="text-center">Discount</th> -->
                                <th class="text-center">Sub Total</th>
                                <th class="text-center"> Status</th>
                              
                                <th class="text-center">Action</th>
                                
                            </tr>
                           
                        </thead>
                       
                        <tbody>
                            <tr class="text-center" v-for="orderItem,orderItemIndex in orderInfo.order_items" :key="orderItemIndex">
                                <!-- <td class="reference">{{orderItem.product_id}}</td> -->
                                <td class="image">
                                    <router-link class="name" :to="{name:'productPage',params:{slug:orderItem.product_info.slug}}" >
                                    <img :src="baseUrl + orderItem.product_info.thumbnail_img" :alt="orderItem.product_info.name" height="50" width="50">
                                </router-link>
                                </td>
                                <td class="product_name">
                                    <slot v-if="orderItem.product_info!=null">
                                       {{(orderItem.product_info.name.length > 70)? orderItem.product_info.name.substr(0,70)+'...' : orderItem.product_info.name}}
                                   </slot>
                                </td>
                                <td class="qty text-center">
                                    {{orderItem.quantity}}
                                </td>
                                <td class="rate">
                                 ৳ {{orderItem.sell_rate | formatNumberWithOutDecimal }}
                                </td>
                                <!-- <td class="price">
                                    ৳ {{(parseFloat(orderItem.sell_rate)*parseFloat(orderItem.quantity)) | formatNumberWithOutDecimal }}
                                </td> -->
                                <!-- <td class="discount">
                                    ৳ {{orderItem.discount | formatNumberWithOutDecimal }}
                                </td> -->
                                <td class="sub_total">
                                    ৳ {{orderItem.sell_price | formatNumberWithOutDecimal }}
                                </td>
                                <td>
                                    <p v-if="orderItem.item_status == 1"> New</p>
                                    <p v-else-if="orderItem.item_status == 2"> Processing</p>
                                    <p v-else-if="orderItem.item_status == 3"> Packagigng</p>
                                    <p v-else-if="orderItem.item_status == 4"> Waiting for delivery</p>
                                    <p v-else-if="orderItem.item_status == 5"> Shipping</p>
                                    <p v-else-if="orderItem.item_status == 6"> Delivered</p>
                                    <p v-else-if="orderItem.item_status == 7"> Completed</p>
                                    <p v-else-if="orderItem.item_status == 8"> Cancelled</p>
                                    <p v-else-if="orderItem.item_status == 9"> Pending</p>
                                    <p v-else> New</p>
                                </td>

                                <td>
                                    <form @submit.prevent="formSubmitPrevent()">
                                        <p v-if="orderItem.customer_status == 0">You cancel this Item</p>
                                        <p v-else-if="orderItem.item_status == 1">
                                            <a href="#" class="btn btn-warning float-right" @click="orderCancel(orderItem)">Request for Cancel</a>
                                         
                                        </p>
                                        <p v-else>
                                            <slot v-if="orderItem.item_status == 7">
                                                <!-- Complete -->

                                            </slot>
                                            <slot v-else>
                                                You can not cancelled this Item
                                            </slot>
                                        </p>
                                    
                                    <!-- <input type="text" v-model="orderItem.id" /> -->

                                    <p v-if="orderItem.item_status == 7">
                                    </p>
                                    <p v-else-if="orderItem.item_status == 1">
                                        
                                    </p>
                                    <p v-else>
                                        <router-link  :to="{name:'OrderTracking',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:orderItem.id}}">Order Tracking</router-link>
                                    <span v-if="orderItem.id == itemId">{{ message }}</span>
                                    </p>

                                    <p v-if="orderItem.item_status == 7">
                                        <slot v-if="orderItem.order_item_review_info && orderItem.order_item_review_info.length > 0">
                                            <router-link  :to="{name:'ProductReview',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:orderItem.id}}">Update Review</router-link>
                                        </slot>
                                        <slot v-else>
                                            <router-link  :to="{name:'ProductReview',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:orderItem.id}}">Write A Review</router-link>
                                        </slot>
                                      
                                    </p>

                                    <p v-if="orderItem.item_status == 7">
                                        <router-link  :to="{name:'RefundOrReturnOrderProduct',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:orderItem.id}}">Refund Or Return Order Item</router-link>
                                    </p>
                                    </form>

                                </td>
                            </tr>
                            
                        </tbody>
                        <tfoot>
                             <tr>
                            <td colspan="3"></td>
                            <td >SUB TOTAL:</td>
                            <td>৳ {{totalPrice | formatNumberWithOutDecimal}}</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td >Product Discount:</td>
                            <td>৳ {{orderInfo.discount | formatNumberWithOutDecimal}}</td>
                        </tr>
                        <!-- <tr>
                            <td colspan="3"></td>
                            <td >Invoice Discount:</td>
                            <td>৳ {{(parseFloat(orderInfo.invoice_discount)+parseFloat(orderInfo.promo_discount)) | formatNumberWithOutDecimal}}</td>
                        </tr> -->
                        <tr>
                            <td colspan="3"></td>
                            <td >Shipping Cost:</td>
                            <td>৳ {{deliveryCharge | formatNumberWithOutDecimal}}</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td >Total:</td>
                            <td>৳ {{(parseFloat(totalAmount)-(parseFloat(orderInfo.invoice_discount)+parseFloat(discount))) | formatNumberWithOutDecimal}}</td>
                        </tr>
                        </tfoot>
               
                    </table>
                </main>
                <footer>
                    <p><span>Phone:</span> {{globalData.shop_phone}}, <span>Email:</span> {{globalData.office_email}}</p>
                </footer>
            </div>
            </div>
            <div></div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'invoice',
   
    data() {
        return {
            msg: 'invoice',
            orderInfo:{},
       
            baseUrl:this.$baseUrl,
            itemId:'',
            message:'',
            totalPrice:'',
            deliveryCharge:'',
            totalAmount:'',
            discount:'',
         
            // orderItem:{
            //     id:'',
            // }
        }
    },
    beforeMount(){
        this.getOrderDetails();

        // this.orderTracking();
    },
    computed: {
      
  globalData() {
            return this.$store.state.globalData;
        }
  
},
    created() {
        this.$store.dispatch('fetchGlobalData');
    },
    methods:{
        formSubmitPrevent(e) {
      // e.preventDefault();
    },
    // orderReview(orderItem){
    //         this.$router.push({name:'ProductReview',params:{name:$store.state.customerInfo.name.split(' ').join('-'),dataId:orderItem.id}});
    //     },
       
        async getOrderDetails(){
            let orderId=this.$route.params.dataId;

            let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/customer/get/order/details?dataId='+orderId,config)
                 .then(response=>{
                        if(response.data.msgFlag){
                            this.orderInfo=response.data.orderInfo;
                            this.totalPrice = response.data.totalPrice;
                            this.deliveryCharge=response.data.deliveryCharge;
                            this.totalAmount=response.data.totalAmount;
                            this.discount=response.data.discount;
                           
                        }
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        
        },
        async orderTracking(orderItem){

            
            this.ItemId = orderItem.id;
    
      let formData=new FormData();
      formData.append("dataId[]",this.ItemId);

      await this.$http.post("/customer/order/track",formData)
       .then(response=>{
        console.log(response.data);
        let dataInfo = response.data.dataInfo;
        this.message = dataInfo.customer_message;
        this.itemId = dataInfo.item_id;
        
       })
       .catch(error=>{console.dir(error)})
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
            this.getOrderDetails();
            this.$toaster.success(response.data.msg);
        }
        if(response.data.errMsgFlag==true){
        this.$toaster.warning(response.data.errMsg);
        }
        
       })
       .catch(error=>{console.dir(error)})
       .finally();
    },
    }
}
</script>


<style scoped>
@media (min-width: 1540px) {
   
   .invoice {
  display: flex;
background: #fff;
  flex-direction: row;
  align-items: center;
  max-width:1500px;
}
}

@media (min-width: 1200px) and (max-width: 1549px) {
  .invoice {
  display: flex;
  background: #fff;
  flex-direction: row;
  align-items: center;
  max-width:900px;
}

}

/* .invoice {
    position: relative;
    background-color: #FFF;
    min-height: 680px;
    padding: 15px;
} */
.invoice .container{
    border: #DFE0E1 solid 1px;
}

.invoice header {
    padding: 10px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid #DFE0E1;
}

.invoice .company-details h2{
    text-align: left;
    color: #53db50;
    padding-bottom: 20px;
    padding-top: 10px;
}

.invoice .company-details .name {
    margin-top: 0;
    margin-bottom: 0;
}

.invoice .contacts {
    margin-bottom: 20px;
}

.invoice .invoice-no .invoice_no{
    padding-bottom: 10px;
}
.invoice .invoice-no .name{
    padding-bottom: 10px;
}
.invoice .invoice-no .phone{
    padding-bottom: 10px;
}

.invoice .invoice-no span{
    font-weight: 700;
}


.invoice .invoice-details {
    text-align: right;
    margin-right: 10px;
}
.invoice .invoice-details span{
    font-weight: 700;
}
.invoice .invoice-details .invoice-id {
    margin-top: 0;
    color: #000000;
}

.invoice main {
    padding-bottom: 50px;
}


.invoice main .notices .notice {
    font-size: 1.2em
}

.invoice table {
    width: 100%;
    margin-bottom: 20px
}

.invoice table thead tr th{
    text-align: center;
    padding: 15px;
    background: #DFE0E1;
    border-bottom: 1px solid #DFE0E1;
    border: #DFE0E1 1px solid;
    font-weight: 700;
}

.invoice table tbody tr td{
    text-align: center;
    font-size: 15px;
    border: #DFE0E1 1px solid;
    padding-top: 20px;
    padding-bottom: 20px;
}
.invoice table th {
    font-weight: 400;
    font-size: 16px;
}


.invoice table tfoot td {
    background: #DFE0E1;
    border: #DFE0E1 1px solid;
    white-space: nowrap;
    text-align: right;
    padding: 10px 20px;
    font-size: 1.2em;
    border-top: 1px solid #aaa;
}

.invoice table tfoot tr:first-child td {
    border-top: none
}

.invoice table tfoot tr:last-child td {
    color: #000000;
    font-weight: 600;
    font-size: 1.4em;
    border-top: 1px solid #3989c6
}

.invoice table tfoot tr td:first-child {
    border: none
}

.invoice footer {
    width: 100%;
    text-align: center;
    color: rgb(0, 0, 0);
    border-top: 1px solid #DFE0E1;
    padding-top: 15px;
}
.invoice footer span{
    font-weight: 600;
}

@media print {
    .invoice {
        font-size: 11px!important;
        overflow: hidden!important
    }

    .invoice footer {
        position: absolute;
        bottom: 10px;
        page-break-after: always
    }

    .invoice>div:last-child {
        page-break-before: always
    }
}
</style>