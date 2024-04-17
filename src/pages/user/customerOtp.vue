<template>
    <div class="seller-signup">
        <div class="loyel-container seller-background">
            <div class="seller-signup-form">
                <div class="signup-form-inner-content">
                    <div class="heading">
                        <!-- <div class="logo-signup">
                            <img src="@/assets/images/signuplogo.png" alt="">
                            <div class="tag-line">
                                WELCOME, BE A PART OF US
                            </div>
                        </div> -->
                        <br>
                        <h4>Account Verification</h4>
                        <h5>Please Enter your Verification  Code Below</h5>
                        <slot v-if="globalData.send_reg_otp_sms=='no'"><p style="color:red">Please use otp: <span class="fw-semibold" style="color:#000">1234</span></p></slot>
                    </div>
                    <div class="form-part">
                        <form @submit.prevent="formSubmitPrevent()" action="">
                            <div class="card-body p-4">
                                <div class="mb-4">
                                    <div class="avatar-lg mx-auto">
                                        <div class="avatar-title bg-light text-primary display-5 rounded-circle">
                                            <i class="ri-mail-line"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-2 mt-4">
                                    
                                    <!-- <div class="text-muted text-center mb-4 mx-lg-3">
                                        <h4>Verify Your Mobile Number</h4>
                                        <p>Please enter the 4 digit code sent to <span class="fw-semibold">01xxxxxxxx</span></p>
                                        <p>Please use otp <span class="fw-semibold">1234</span></p>
                                    </div> -->

                                    <form autocomplete="off" @submit.prevent="verifyOtp()">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="mb-3">
                                                    <label for="digit1-input" class="visually-hidden">Digit 1</label>
                                                    <input type="text" v-model="otp1" class="form-control form-control-lg bg-light border-light text-center" :maxlength="maxLength"   ref="inputField1" @input="handleInput(1)"  @keydown.delete="handleDelete(1)">
                                                </div>
                                            </div><!-- end col -->
                                    
                                            <div class="col-3">
                                                <div class="mb-3">
                                                    <label for="digit2-input" class="visually-hidden">Digit 2</label>
                                                    <input type="text" v-model="otp2" class="form-control form-control-lg bg-light border-light text-center" :maxlength="maxLength" ref="inputField2" @input="handleInput(2)"  @keydown.delete="handleDelete(2)">
                                                </div>
                                            </div><!-- end col -->
                                    
                                            <div class="col-3">
                                                <div class="mb-3">
                                                    <label for="digit3-input" class="visually-hidden">Digit 3</label>
                                                    <input type="text" v-model="otp3" class="form-control form-control-lg bg-light border-light text-center" :maxlength="maxLength"  ref="inputField3"  @input="handleInput(3)"  @keydown.delete="handleDelete(3)">
                                                </div>
                                            </div><!-- end col -->
                                    
                                            <div class="col-3">
                                                <div class="mb-3">
                                                    <label for="digit4-input" class="visually-hidden">Digit 4</label>
                                                    <input type="text" v-model="otp4" class="form-control form-control-lg bg-light border-light text-center"  :maxlength="maxLength"  ref="inputField4" @input="handleInput(4)"  @keydown.delete="handleDelete(4)">
                                                </div>
                                            </div><!-- end col -->
                                        </div>


                                        <div class="mt-3">
                                            <button class="signup-btn" type="submit" >
                                   confirm
                                 </button> 
                                    </div>
                                    </form><!-- end form -->

                                   
                                </div>
                            </div>
                            
                            

                                              
                            <div class="already-account">
                                <div class="already-account-left">
                                    <router-link :to="{name:'login'}">
                                        Already have an account 
                                        <span>
                                            <b-icon icon="arrow-right"/>
                                        </span>
                                    </router-link>
                                </div>
                                <div class="not-you pointer">
                                    Not You?
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
    
    data() {
        return {
            errMsg:null,
            errMsgFlag:false,
            msg:null,
            msgFlag:false,
            checkfail: false,
            otp1: '', 
            otp2: '', 
            otp3: '', 
            otp4: '', 
            maxLength: 1,
            
        }
    },
    computed: {

globalData() {
          return this.$store.state.globalData;
      }

},
created() {
      this.$store.dispatch('fetchGlobalData');
  },
    mounted() {
    	if(this.$store.state.temporaryCustomer==null)
    		this.$router.push({name:'signup'})
    },
    methods: {
        formSubmitPrevent(e) {
            // e.preventDefault();
        },
        handleInput(fieldIndex) {
      const nextFieldIndex = fieldIndex + 1;
      if (this[`otp${fieldIndex}`].length === this.maxLength) {
        if (nextFieldIndex <= 4) {
          this.$refs[`inputField${nextFieldIndex}`].focus(); // Move focus to the next input field
        }
      }
    },

    handleDelete(fieldIndex) {
      if (this[`otp${fieldIndex}`].length === 0) {
        const previousFieldIndex = fieldIndex - 1;
        if (previousFieldIndex >= 1) {
          this.$refs[`inputField${previousFieldIndex}`].focus(); // Move focus to the previous input field
        }
      }
    },
    	verifyOtp(){
  			
  			let phone=this.$store.state.temporaryCustomer.phone;
  			let email=this.$store.state.temporaryCustomer.email;
  			

            let formData=new FormData();
            formData.append("email",email);
            formData.append("phone",phone);
            formData.append("otp1", this.otp1);
           formData.append("otp2", this.otp2);
           formData.append("otp3", this.otp3);
           formData.append("otp4", this.otp4);
            this.$http.post('customer/otp/verify',formData)
             .then(response=>{
            
                if(response.data.msgFlag==true){
                    this.$toaster.success(response.data.msg);
                    this.$router.push({name:'login'});
                }
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
.seller-signup{
    margin-top: 30px;
}

.seller-signup-form {
    max-width: 700px;
    min-height: 390px;
    background: white;
    padding: 0px 10px;
    /* box-shadow: 5px 5px 15px rgb(0, 0, 0, 0.2), -5px -5px 15px rgb(0, 0, 0, 0.2); */
    /* border-radius: 15px; */
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.seller-background {
    width: 100%;
    min-height: 450px;
    /* background-image: url('../../assets/images/seller/login/bg-image.png'); */
    background-size: cover;
    background-repeat: no-repeat;
}
.signup-form-inner-content {
    width: 450px;
    max-width: 100%;
    margin: 30px auto;
}
 /* heading part css  */
.heading {
    width: 100%;
    height: 15%;
    /* padding-top:50px; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo-signup {
    position: relative;
}
.tag-line {
    position: absolute;
    bottom: -22px;
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
    background: #1F1F1F;
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

.form-control-lg {
    min-height: calc(1.5em + 1.4rem + 2px);
    font-size: 1.015625rem;
    border-radius: 0.3rem;
    min-width: 50px;
}

.bg-light {
    --vz-bg-opacity: 1;
    background-color: #e7e7e7!important;
    color:#000;
}
</style>
