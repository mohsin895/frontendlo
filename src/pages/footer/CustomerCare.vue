<template>
  <div class="seller-signup">
      <div class="loyel-container seller-background">
          <div class="seller-signup-form">
              <div class="loyel-container signup-form-inner-content">
                 
                  <div class="form-part">
                    <form @submit.prevent="formSubmitPrevent()">
                      <div class="product-create-body">
                        <div class="product-information" >
                        
                          <b-row cols="1">
                            <b-col>
                              <div class="loyel-box-style">
                                <div class="box-wrapper">
                                  <div class="product-name">
                                    <label for="">Name:</label>
                                    <a-input placeholder="Enter Your Name" v-model="name" />
                                  </div>
                                  <br />
                              
                                  <br />
                                  <div class="Product-unit">
                                    <label for="">Email:</label>
                                    <div class="select-with-btn">
                                      <a-input type="email" placeholder="Enter Your Email" v-model="email" />
                                    </div>
                                  </div>
                                  <br />
                                  <div class="Product-shocking-deal">
                                    <label for="">Message:</label>
                                    <div>
                                      <VueEditor v-model="message" readonly/>
                                    </div>
                                  </div>
                                  <br />
                                

                                  <div class="refundable">
                                
                                    <div>
                                    
                                      <button class="btn btn-info m-2 text-light" @click="sendMessage()">
                                          <icon name="save" size="20px" /> Submit
                                    </button>
                                    </div>

                                    
                                  </div>
                                </div>
                              </div>
                            </b-col>
                          
                          </b-row>
                          <br />
                
                        </div>
                    
                      
                      </div>
                     </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'product-create',
   
    data() {
        return {
        errMsgFlag: false,
        msgFlag: false,
        msg: null,
        errMsg: null,
        status: 1,
        name: null,
        email: null,
        message: null,
        readonly: true
     
   
     
    };
    },

    methods: {
        formSubmitPrevent(e) {
        // e.preventDefault();
      },

    async sendMessage(){
        if (this.formValidation()) {
                this.errMsgFlag = false;
                this.msgFlag = false;
       
      
                  let formData = new FormData();
                  formData.append("name", this.name);
                    formData.append("email", this.email);
                    formData.append("message", this.message);
             
        
        await  this.$http.post("customer/message",formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                this.errMsgFlag=response.data.errMsgFlag;
            
                if(this.errMsgFlag==true)
                    this.$toaster.warning(this.errMsg);
                if(this.msgFlag==true){
                    this.$toaster.success(this.msg);
                    this. resetForm();
                  
                }
             })
             .catch(error=>{console.dir()})
             .finally();
            }
    },
    formValidation() {
        if (
        
  
          this.email != null &&
          this.name != null &&
          this.message !=null
        ) {
          return true;
        } else {
         
          if (this.message == null) {
            this.errMsg = "Please Enter Your Message.";
            this.$toaster.warning(this.errMsg);
          }
          if (this.email == null) {
            this.errMsg = "Please Enter your Email.";
            this.$toaster.warning(this.errMsg);
          }
          if (this.name == null) {
            this.errMsg = "Please Enter your Name.";
            this.$toaster.warning(this.errMsg);
          }
         
          this.errMsgFlag = true;
          return false;
        }
      },
      resetForm() {
    
        this.email = null;
        this.name = null;
        this.message = null;
      
      },
     
       
    }
}
</script>


<style scoped>

.input-field .ant-input-number {
    width: 100%;
}
@media (min-width: 540px) {
  .heading {
  width: 100%;
  height: 15%;
  padding-top:50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

@media (min-width: 320px) and (max-width: 539px) {
  .heading {
 display: none;
}
}
.seller-signup-form {
  max-width: 700px;
  min-height: 700px;
  background: white;
  padding: 0px 10px;
  box-shadow: 5px 5px 15px rgb(0, 0, 0, 0.2), -5px -5px 15px rgb(0, 0, 0, 0.2);
  border-radius: 15px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.seller-background {
  width: 100%;
  min-height: 650px;
  background-image: url('../../assets/images/seller/login/bg-image.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.signup-form-inner-content {
  /* width: 450px; */
  max-width: 1500px;
  align-items: center;
  display: flex;
  margin: 30px auto;
}
/* heading part css  */

.logo-signup {
  position: relative;
}
.tag-line {
  position: absolute;
  bottom: -2px;
  left: 15px;
  color: #8E8E8E;
}
/* heading part css  */

/* form part css  */
.form-part {
  width: 100%;
  height: 85%;  
  /* background: greenyellow; */
  padding: 10px 0;
}
.duble-input-field {
  display: flex;
  margin: 0 0 10px 0;
  justify-content: space-between;
}
.business-model {
  width: 58%;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.business-model-select {
  width: 32%;
}


.already-account {
  text-align: left;
  margin-bottom:10px;
}
.already-account span {
  color: #DB3022;
  cursor: pointer;
}
.signup-btn {
  background: #DB3022;
  width:100%;
  height:40px;
  font-size: 1rem;
  color:white;
  border-radius:5px;
  text-transform: uppercase;
  border:none;
}

.already-account {
  display: flex;
  justify-content: space-between;
}
/* form part css  */




a {
  text-decoration: none;
  color:black;
}

</style>
