<template>
    <div class="customer">
        <div class="loyel-customer-box-update-email">

          

            <div class="loyel-customer-box-update-email-item" >
                <div class="header">
                    <div class="details">
                        Update Email
                    </div>
                    <!-- <div class="details-edit pointer" @click="editStoreDetails=false">
                        <h4 style="color:red;">X</h4>
                    </div> -->
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="2" cols-lg="2">
                        
                        <b-col>
                           
                           
                            <p>Old Email:
                                 <input type="email"  class="form-control" v-model="email" disabled>
                                
                            </p>

                            <p>Enter Email:
                                 <input type="email" placeholder="Enter your new Email" class="form-control" v-model="newEmail">
                                
                            </p>
                            
                          
                        </b-col>
                       
                    </b-row>
                    <b-row cols="1" cols-md="2" cols-lg="3">
                        
                        <b-col class="text-right">
                            <button class="btn btn-sm update-email-customer" @click="updateEmail">
                              Update Email
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
            email:'',
            newEmail:'',
            emailCreate: {
            email: "",
      
    },
           
            dataId: this.$route.params.dataId,
        }
    },
    beforeMount(){
     
        this.loadDataInfo();
    },
    methods:{
       

      async updateEmail()
      {
          if(this.emailFormValidation())
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
                 formData.append("newEmail", this.newEmail);
                  await this.$http.post("customer/update/email",formData,config)
                          .then(response=>{
                            this.msgFlag=response.data.msgFlag;
                            this.errMsgFlag=response.data.errMsgFlag;
                            this.msg=response.data.msg;
                            this.errMsg=response.data.errMsg;
                            if(response.data.msgFlag==true){
                                this.$toaster.success(response.data.msg);
                                this.$router.push({name:'addEmailVerify'});
                            }
                            if(response.data.errMsgFlag==true)
                                this.$toaster.warning(response.data.errMsg);
                                        
                              
                          })
                          .catch(error=>{})
                          .finally();
          }
      },
      emailFormValidation()
      {
          if( this.newEmail!=null  )
          {
              return true;
          }
          else
          {
              
              if(this.newEmail==null)
              {
                  this.errMsg="Please Enter new Email.";
                  this.$toaster.warning(this.errMsg);
              }
              
              
              this.errMsgFlag=true;
              this.msgFlag=false;
              return false;
          }
      },
      resetemailForm()
      {
          this.newEmail=null;
      },
        loadDataInfo() {
            let token=window.localStorage.getItem("customerToken");
               
               let config = {
                      headers: {
                         'Authorization': 'Bearer '+token,
                         
                     }   
                 };
      let url = "/customer/get/info?dataId=" + this.dataId;
      this.$http.get(url,config).then((response) => {
        console.log(response.data);
        let dataInfo = response.data.customerInfo;
        this.email = dataInfo.email;


      });
    },
        
    
       
    }
}
</script>

<style scoped>

.loyel-customer-box-update-email{
    background: #fff;
    padding: 20px;
}

.update-email-customer{
    background: #0094FF;
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
.addBank-title {
    font-weight: 500;
}
.bank-select {
    width: 40%;
}

/* bank css  */

</style>
