<template>
    <div class="customer">
        <div class="loyel-customer-box-chnage-otp">

          

            <div class="loyel-customer-box-chnage-otp-item" >
                <div class="header">
                    <div class="details">
                         Email Verify
                    </div>
                    <!-- <div class="details-edit pointer" @click="editStoreDetails=false">
                        <h4 style="color:red;">X</h4>
                    </div> -->
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="2" cols-lg="2">
                        
                        <b-col>
                           
                           

                            <p>Enter Code:
                                 <input type="text" placeholder="Enter Your Email verify Code" class="form-control" v-model="smsCode">
                                
                            </p>
                            
                          
                        </b-col>
                       
                    </b-row>
                    <b-row cols="1" cols-md="2" cols-lg="3">
                        
                        <b-col class="text-right">
                            <button class="btn btn-sm change-customer-otp-button" @click="verifyEmail">
                              Verify
                            </button>
                        </b-col>
                    </b-row>
                </div>
                <hr>
            </div>

        </div>
        
    </div>
</template>


<script>

export default {
    name: 'customer',
   
    data() {
        return {
           
            editStoreDetails:false,
            msgFlag:false,
            errMsgFlag:false,
            errMsg:null,
            msg:null,
            name:'',
      
            modalvalue: false,
           
            email:'',
            phone:'',
            smsCode:'',
            phoneCreate: {
            phone: "",
      
    },
           
            dataId: this.$route.params.dataId,
        }
    },
    beforeMount(){
     
       
    },
    methods:{
       

      async verifyEmail()
      {
          if(this.phoneFormValidation())
          {
              this.errMsgFlag=false;
              this.msgFlag=false;
              let token=window.localStorage.getItem("customerToken");
               
               let config = {
                      headers: {
                         'Authorization': 'Bearer '+token,
                         
                     }   
                 };
                 let formData=new FormData();
                 formData.append("smsCode", this.smsCode);
                  await this.$http.post("customer/verify/email",formData,config)
                          .then(response=>{
                            this.msgFlag=response.data.msgFlag;
                            this.errMsgFlag=response.data.errMsgFlag;
                            this.msg=response.data.msg;
                            this.errMsg=response.data.errMsg;
                            if(response.data.msgFlag==true){
                                this.$toaster.success(response.data.msg);
                                this.$router.push({name:'UpdateEmail'});
                            }
                            if(response.data.errMsgFlag==true)
                                this.$toaster.warning(response.data.errMsg);
                                        
                              
                          })
                          .catch(error=>{})
                          .finally();
          }
      },
      phoneFormValidation()
      {
          if( this.smsCode!=null  )
          {
              return true;
          }
          else
          {
              
              if(this.smsCode==null)
              {
                  this.errMsg="Please Enter Mobile Number.";
                  this.$toaster.warning(this.errMsg);
              }
              
              
              this.errMsgFlag=true;
              this.msgFlag=false;
              return false;
          }
      },
      resetPhoneForm()
      {
          this.smsCode=null;
      },
      
       
    }
}
</script>

<style scoped>

.loyel-customer-box-chnage-otp{
    background: #fff;
    padding: 20px;
}
.change-customer-otp-button{
    background: #1877f2;
    color: #fff;
}

hr {
    margin: 5px 0;
}

.header {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
}



.bank-wrapper {
    display: flex;
    justify-content: space-between;
}

.bank-select {
    width: 40%;
}



</style>
