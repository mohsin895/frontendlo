<template>
    <div id="invoice">
         <div class="invoice overflow-auto">
             <div class="container">
                 <div style="min-width: 600px">
                 <header>
                     <div class="row">
                         <div class="col company-details">
                      
                         </div>
                     </div>
                 </header>
                 <main>
                    <div style="overflow-x:auto;">
                     <table >
                         <thead class="table-light">
                             <tr>
                                 <!-- <th class="text-center">Reference</th> -->
                                 <th class="text-center">Image</th>
                                 <th class="text-center">Product Name</th>
                                 <th class="text-center">Qty</th>
                                 <th class="text-center">Rate</th>
                                 <th class="text-center">Price</th>
                                 <th class="text-center">Discount</th>
                                 <th class="text-center">Sub Total</th>
                             
                             
                                 
                             </tr>
                            
                         </thead>
                        
                         <tbody>
                             <tr class="text-center" >
                                 <!-- <td class="reference">{{orderItem.product_id}}</td> -->
                                 <td class="image">
                                
                                     <img :src="baseUrl + orderInfo.product_info.thumbnail_img" :alt="orderInfo.product_info.name" height="50" width="50">
                                   
                                 </td>
                                 <td class="product_name">
                                     <slot v-if="orderInfo.product_info!=null">
                                        {{(orderInfo.product_info.name.length > 70)? orderInfo.product_info.name.substr(0,70)+'...' : orderInfo.product_info.name}}
                                    </slot>
                                    <span>
                                        Size:

                                        <slot v-if="orderInfo.stock_info!=null">
                                        {{ orderInfo.stock_info.size_info.size}}
                                    </slot>
                                    </span>
<br></br>
                                    <span>
                                

                                        <slot v-if="orderInfo.stock_info!=null">
                                      
                                            Color:
                                        <div class="color-div" :style="{background: orderInfo.stock_info.color_info.color_code}" >
                                                {{orderInfo.stock_info.color_info.color}}
                                            </div>
                                    </slot>
                                    </span>
                                 </td>
                                 <td class="qty text-center">
                                     {{orderInfo.quantity}}
                                 </td>
                                 <td class="rate">
                                  ৳ {{orderInfo.sell_rate | formatNumberWithOutDecimal }}
                                 </td>
                                 <td class="price">
                                     ৳ {{(parseFloat(orderInfo.sell_rate)*parseFloat(orderInfo.quantity)) | formatNumberWithOutDecimal }}
                                 </td>
                                 <td class="discount">
                                     ৳ {{orderInfo.discount | formatNumberWithOutDecimal }}
                                 </td>
                                 <td class="sub_total">
                                     ৳ {{orderInfo.sell_price | formatNumberWithOutDecimal }}
                                 </td>
                                
 
                                
                             </tr>
                             
                         </tbody>

                         <tfoot>
                             <tr>
                            <td ></td>
                            <td >Select Return Cause:</td>
                            <td colspan="6">
                                    <v-select :options="returnInfo" :reduce="returnInfo => returnInfo.id" label="name" v-model="returnCause" >
                                    <template v-slot:option="option">
                                        {{option.name}}
                                    </template>
                                 </v-select>
                                </td>
                        </tr>

                        <tr>
                            <td ></td>
                            <td >Select Return Type:</td>
                            <td colspan="6">
                                <div class="left-img mb-5">
                                    <label class="form-check-label" for="cashPayment" >
                                          Refund Cash
                                        </label>
                                    <input class="form-check-input" type="radio" name="returnType" v-model="returnType" value="2" id="cashPayment">
                                    <label class="form-check-label" for="productExchange">
                                        <!-- Online Payment -->
                                        Exchange Product
                                    </label>
                                    <input class="form-check-input" type="radio"  name="returnType" v-model="returnType" value="1" id="productExchange">
                                   
                                    
                                   
                                </div>

                            

                                </td>
                        </tr>

                        <tr>
                            <td ></td>
                            <td ></td>
                            <td colspan="6" v-if="returnType==2">
                              
                                    <span>Select Account Type:
                                        <v-select :options="financialAccount" :reduce="financialAccount => financialAccount.id" label="name" v-model="financialAccountName"  >
                                    <template v-slot:option="option">
                                        {{option.name}}
                                    </template>
                                 </v-select>
                                    </span>
                              
                                   
                                 <span>
                                    Select Deleviry Type:
                                    <v-select :options="curior" :reduce="curior => curior.id" label="name" v-model="curiorName" >
                                    <template v-slot:option="option">
                                        {{option.name}}
                                    </template>
                                </v-select>
                                 </span>
                               

                                    


                                </td>
                                <td colspan="6" v-if="returnType==1">
                                    <v-select :options="curior" :reduce="curior => curior.id" label="name" v-model="curiorName" >
                                    <template v-slot:option="option">
                                        {{option.name}}
                                    </template>
                                </v-select>

                                </td>
                        </tr>

                        <tr>
                            <td ></td>
                            <td >Image</td>
                            <td colspan="6" >
                                <div class="input-field">
                                    <input type="file" ref="files" multiple>
                     </div>


                             </td>
                               
                        </tr>

                        <tr>
                            <td ></td>
                            <td >Description</td>
                            <td colspan="6" >
                                <div class="input-field">
                                <VueEditor v-model="description" />
                                </div>


                             </td>
                               
                        </tr>
                        <div class="col-12 mt-2 d-flex flex-row-reverse">
                            <button class="btn btn-info m-2 text-light" @click="sendOrderItem()">
                            Next
                            </button>
                        
                        </div>
                     
                        </tfoot>
                      
                
                     </table>
                     </div>
                 </main>
                 <footer>
                     <p><span>Phone:</span> {{dataList.shop_phone}}, <span>Email:</span> {{dataList.office_email}}</p>
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
             returnCause:null,
            returnType:null,
            accountType:null,
            description:null,
             orderInfo:{},
             returnInfo:[],
             curior:[],
             financialAccount:[],
             dataId:this.$route.params.dataId,
             dataList:'',
             financialAccountName:null,
             curiorName:null,
             baseUrl:this.$baseUrl,
             itemId:'',
             message:'',
             totalPrice:'',
             deliveryCharge:'',
             totalAmount:'',
             discount:'',
          
         }
     },
     beforeMount(){
         this.getOrderDetails();
         this.getDataInfo();
         this.getReturnPolicy();
         this.getCurior();
         this.getFinancialAccount();
         // this.orderTracking();
     },
     methods:{
         formSubmitPrevent(e) {
       // e.preventDefault();
     },
    
         async getDataInfo(){
            
            let url="/get/setting/info";
 
            await this.$http.get(url)
             .then(response=>{
                   
                       console.log(response.data);
                       this.dataList = response.data;
                      
                    
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
         async getOrderDetails(){
             let itemOrderId=this.$route.params.dataId;
 
             let token=window.localStorage.getItem("customerToken");
            
             let config = {
                    headers: {
                       'Authorization': 'Bearer '+token
                   }   
               };
                 // let formData=new FormData();
                 this.$http.get('/customer/get/order/refund/return?dataId='+itemOrderId,config)
                  .then(response=>{
                         if(response.data.msgFlag){
                             this.orderInfo=response.data.dataInfo;
                          
                         
                            
                         }
                  })
                  .catch(error=>{console.dir(error)})
                  .finally();
         
         },

         async getReturnPolicy(){
          

             let token=window.localStorage.getItem("customerToken");
            
             let config = {
                    headers: {
                       'Authorization': 'Bearer '+token
                   }   
               };
                 // let formData=new FormData();
                 this.$http.get('/customer/get/return/policy',config)
                  .then(response=>{
                         if(response.data.msgFlag){
                             this.returnInfo=response.data.dataInfo;
                          
                         
                            
                         }
                  })
                  .catch(error=>{console.dir(error)})
                  .finally();
         
         },

         async getCurior(){
          

          let token=window.localStorage.getItem("customerToken");
         
          let config = {
                 headers: {
                    'Authorization': 'Bearer '+token
                }   
            };
              // let formData=new FormData();
              this.$http.get('/customer/get/curior',config)
               .then(response=>{
                      if(response.data.msgFlag){
                          this.curior=response.data.dataInfo;
                       
                      
                         
                      }
               })
               .catch(error=>{console.dir(error)})
               .finally();
      
      },
      async getFinancialAccount(){
          

          let token=window.localStorage.getItem("customerToken");
         
          let config = {
                 headers: {
                    'Authorization': 'Bearer '+token
                }   
            };
              // let formData=new FormData();
              this.$http.get('/customer/get/financial/account',config)
               .then(response=>{
                      if(response.data.msgFlag){
                          this.financialAccount=response.data.dataInfo;
                       
                      
                         
                      }
               })
               .catch(error=>{console.dir(error)})
               .finally();
      
      },
         async sendOrderItem(){
 
            let token=window.localStorage.getItem("customerToken");
         
         let config = {
                headers: {
                   'Authorization': 'Bearer '+token
               }   
           };
   
     
          let formData=new FormData();
        formData.append("dataId",this.dataId);
        formData.append("returnType",this.returnType);
        formData.append("financialAccountName",this.financialAccountName);
        formData.append("curiorName",this.curiorName);
        formData.append('returnCauseId',this.returnCause);
        formData.append("description",this.description);
 
       await this.$http.post("/customer/send/refund/product",formData,config)
        .then(response=>{
         console.log(response.data);
         this.$router.push({name:'ConfirmRefundOrReturnOrderProduct'});
         
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
     background: #fff;
     border: #DFE0E1 1px solid;
     white-space: nowrap;
     text-align: left;
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
     font-size: 0.8em;
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

 .color-div {
    min-width: 65px;
    min-height: 25px;
    border-radius: 6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px 0;
}
 </style>