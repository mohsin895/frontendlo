<template>
    <div class="customer">
        <div class="loyel-customer-box">

          

            <div class="loyel-customer-box-item" >
                <div class="header">
                    <div class="details">
                        Mobile Number Verify
                    </div>
                    <!-- <div class="details-edit pointer" @click="editStoreDetails=false">
                        <h4 style="color:red;">X</h4>
                    </div> -->
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="2" cols-lg="2">
                        
                        <b-col>
                           
                           
                            <p>Old Phone Number:
                                 <input type="text" placeholder="Enter Mobile Number" class="form-control" v-model="phone" disabled>
                                
                            </p>

                            <p>Enter New Phone Number:
                                 <input type="text" placeholder="Enter New Mobile Number" class="form-control" v-model="newPhone">
                                
                            </p>
                            
                          
                        </b-col>
                       
                    </b-row>
                    <b-row cols="1" cols-md="2" cols-lg="3">
                        
                        <b-col class="text-right">
                            <button class="btn btn-sm btn-info" @click="updatePhone">
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
            newPhone:'',
            phoneCreate: {
            phone: "",
      
    },
           
            dataId: this.$route.params.dataId,
        }
    },
    beforeMount(){
     
        this.loadDataInfo();
    },
    methods:{
       

      async updatePhone()
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
                 formData.append("newPhone", this.newPhone);
                  await this.$http.post("customer/update/phone",formData,config)
                          .then(response=>{
                            this.msgFlag=response.data.msgFlag;
                            this.errMsgFlag=response.data.errMsgFlag;
                            this.msg=response.data.msg;
                            this.errMsg=response.data.errMsg;
                            if(response.data.msgFlag==true){
                                this.$toaster.success(response.data.msg);
                                this.$router.push({name:'SMSVerifyNew'});
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
          if( this.phone!=null  )
          {
              return true;
          }
          else
          {
              
              if(this.phone==null)
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
          this.phone=null;
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
        this.name = dataInfo.name;
        this.avatar = this.$baseUrl + dataInfo.avatar;
        this.phone = dataInfo.phone;
        this.email = dataInfo.email;

      });
    },
        
        loadLogo(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.avatar = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Photo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
        },
        
        async updateProfile(){
            let token=window.localStorage.getItem("customerToken");
               
                let config = {
                       headers: {
                          'Authorization': 'Bearer '+token,
                           'Content-Type': 'multipart/form-data'
                      }   
                  };
                let formData=new FormData();
                formData.append("dataId", this.dataId);
                formData.append('name',this.name);

                formData.append('phone',this.phone);
                formData.append('email',this.email);


                if(this.$refs.avatar.files[0]!=null)
                    formData.append('avatar',this.$refs.avatar.files[0]);

                


                await this.$http.post('customer/update/info',formData,config)
                    .then(response=>{
                        if(response.data.msgFlag==true)
                            this.$toaster.success(response.data.msg);
                            // this.$router.push("/customer/profile");
                        if(response.data.errMsgFlag==true)
                            this.$toaster.warning(response.data.errMsg);
                       
                    })
                    .catch(error=>{console.dir(error)})
                    .finally();
        },
       
    }
}
</script>

<style scoped>

.banner img{
  width: 100%;
}
.account-cheque pre{
    display: inline-block;

}
.account-cheque img{
    width: 100px;
    position: relative;
    top: -10px;

}

.wholecustomer-style {
    background: #0094FF;
}
/* .license-img img {
    max-width: 60px;
} */

/* bank css  */

hr {
    margin: 5px 0;
}

.header {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
}

.bnk-inner-part {
    padding: 15px 10px;
}
.name-span {
    color: #62BD5F;
}
.number-span {
    color: red;
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
