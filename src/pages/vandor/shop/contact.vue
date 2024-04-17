<template>
    <div class="overview-review">
    
        <div class="tab-body">
            
          <div class="contact-container">
             
        <form @submit.prevent="formSubmitPrevent()">
        
        <div class="row seller-form">
       
          <div class="col-12" v-if="errMsgFlag">
            <div class="alert alert-danger">{{ errMsg }}</div>
          </div>
          <div class="col-12" v-if="msgFlag">
            <div class="alert alert-success">{{ msg }}</div>
          </div>
          <div class="loyel-seller-box-item">

            <div class="header">
                
              <div class="details">Send your message to this Shop</div>
             
            </div>
            <hr />
            <div class="bnk-inner-part">
              <b-row cols="1" cols-md="2" cols-lg="2">
                <b-col>
                  <p>
                   From:
                    <input
                      type="email"
                      placeholder="Enter Email"
                      class="form-control"
                      v-model="email"
                    />

                    <input
                      type="hidden"
                    
                      class="form-control"
                      v-model="shopId"
                    />
                    
                  </p>
                  <p>
                   To:
                   <img v-lazy="baseUrl + vandorInfo.shop_logo" alt="vandorInfo.shop_name" class="shop-image" style="height:50px;width:50px"> {{ vandorInfo.shop_name }}
                
                  </p>
                
                  <p>
                    Message:
                    <textarea
                      class="form-control"
                      placeholder="Enter Your Message"
                      rows="6"
                      v-model="message"
                    ></textarea>
                  </p>

                  <p>

                  
                    <button class="btn btn-info m-2 text-light" @click="sendMessage">
                    <icon name="save" size="20px" /> Send
                    </button>
           
       
                 </p>
                </b-col>

              
              </b-row>
            </div>
            <hr />
          </div>

         
        </div>
      </form>

      
            </div>

            <div class="contact-container">
             
          
             
             <div class="row seller-form">
            
          
               <div class="loyel-seller-box-item">
     
                 <div class="header">
                     
                   <div class="details">Contact Details</div>
                  
                 </div>
                 <hr />
                 <div class="bnk-inner-part">
                   <b-row cols="1" cols-md="2" cols-lg="2">
                     <b-col>
                       <p>
                        Address:<span>{{vandorInfo.address}}</span>
                        
                       </p>
                     
                       <p>
                         Office Time:
                         <span>haymetpur</span>
                       </p>
                       <p>
                         Close Day:
                         <span>haymetpur</span>
                       </p>
                       <p>
                         Mobile Number:
                         <span>{{vandorInfo.phone}}</span>
                       </p>
                       <p>
                         Email:
                         <span>{{vandorInfo.email}}</span>
                       </p>
     
                       <p>
     
                      
                
            
                      </p>
                     </b-col>
     
                   
                   </b-row>
                 </div>
                 <hr />
               </div>
     
              
             </div>
         
     
           
                 </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'overview-tab',
    data() {
        return {
         errMsgFlag: false,
        msgFlag: false,
        msg: null,
        errMsg: null,
        email:null,
        message:null,
        shopId:null,
        baseUrl: this.$baseUrl, 
        vandorInfo:[],
            numOfData:44,
            urlParam:{
                numOfData:44,
                slug:this.$route.params.slug,
            },
            dataUrl:'vandor/wise/product',
            totalData:0,
            numberOfDataPage:1,
            lastPage:1,
            dataList:[],
       

        }
    },
    beforeMount(){
      
      this.getDataList(this.dataUrl,this.urlParam);
  },
   watch:{
      $route (to, from){ this.numOfData=44; this.pageIndexReset(); this.showDatas(); }
  },
    methods: {
     
        formSubmitPrevent(e) {
        // e.preventDefault();
      },

      getDataList(url,param) {
              if (this.numOfDataPage > 0) {
                url = url+"?page=" + this.numOfDataPage;
              }
              this.$http.get(url,{params:param})
                .then(response => {
                    // console.log(response.data);
                    if(response.data.msgFlag==true){
                       this.dataList=response.data.dataList; 
                       this.lastPage=this.dataList.last_page;
                       this.totalData=this.dataList.total;
                       this.vandorInfo=response.data.vandorInfo;
                       this.shopId = response.data.vandorInfo.id;
                    }
                    
                })
                .catch(error => {
                  console.dir(error);
                });
                
         },

    async sendMessage(){
        if (this.formValidation()) {
                    this.errMsgFlag = false;
                    this.msgFlag = false;
                    let formData = new FormData();
                    formData.append("email",this.email);
                    formData.append("shopId",this.shopId);
                    formData.append("message",this.message);

        
        await  this.$http.post("user/send/message/seller",formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                this.errMsgFlag=response.data.errMsgFlag;
            
                if(this.errMsgFlag==true)
                    this.$toaster.warning(this.errMsg);
                if(this.msgFlag==true){
                    this.$toaster.success(this.msg);
                    this.resetForm();
                  
                }
             })
             .catch(error=>{console.dir()})
             .finally();
            }
    },
    formValidation()
    	{
    		if( this.email!=null && this.message!=null   )
    		{
    			return true;
    		}
    		else
    		{
    			
    			if(this.email==null)
    			{
    				this.errMsg="Please Enter  email";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.message==null)
    			{
    				this.errMsg="Please Write  message";
    				this.$toaster.warning(this.errMsg);
    			}
    			
    			this.errMsgFlag=true;
    			this.msgFlag=false;
    			return false;
    		}
    	},
    	resetForm()
    	{
			this.email=null;
			this.message=null;
			
    	}
     
       
    }
}
</script>


<style scoped>
.loyel-seller-box-item{
   margin-bottom: 20px;
}

</style>