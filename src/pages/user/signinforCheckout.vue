<template>
      <div class="signup signup-customer-checkout-login">
        <div class="signup-form">
            <div class="heading">
        
                <br>
                <h4>Sign In to Loyel</h4>
            </div>
            <div class="form-part">
                <form @submit.prevent="formSubmitPrevent()" action="">


                    <div class="form-group mt-3">
                        <label for="title"> Phone Number or Email</label>
                        <input type="text" class="form-control mt-1" v-model="userName" ref="phoneInput"
                            placeholder="Enter your Mobile Number or Email" @keyup="formValidation('phone')"
                            @focus="formValidation('phone')" />
                        <div class="helper-text">{{ phoneError }}</div>

                    </div>

                    <div class="form-group mt-3">
                        <label for="title"> Password</label>
                        <div class="input-icon">
                            <input type="password" class="form-control mt-1" v-model="password" ref="passwordInput"
                                placeholder="Enter your Password" @keyup="formValidation('password')"
                                @focus="formValidation('password')" />
                            <i class="icon-eye" v-if="eye" @click="eyechecking"><b-icon icon="eye" /></i>
                            <i class="icon-eye-slash" v-else @click="eyechecking"><b-icon icon="eye-slash" /></i>
                        </div>


                        <div class="helper-text">{{ passwordError }}</div>


                    </div>

                  
                    <div class="already-account">
                        <router-link to="forget-password">
                            Forgot your password? 
                            <span>
                                <b-icon icon="arrow-right"/>
                            </span>
                        </router-link>
                    </div>
                    <button class="signup-btn" @click="login(), formValidation('submit')">
                        log in
                    </button>
                    <div class="social-account">
                <div class="social-login">or Log in with social account</div>
                <div class="social-icon">
                    <div class="google" @click="loginWithGoogle">
                        <img src="@/assets/images/group.png" alt="" style="width: 32px; height: 32px;">
                    </div>
                    <div class="facebook">
                        <img src="@/assets/images/facebook.png" alt="" style="width: 32px; height: 32px;">
                    </div>
                </div>
            </div>
                    <div class="create-not-you">
                        <p>
                            <router-link :to="{name:'signup'}">Create Account</router-link>
                        </p>    
                        <p>Not You?</p>    
                    </div>                                      
                </form>
            </div>
          
        </div>
    </div>
</template>

<script>

export default {
 
    data() {
        return {
            msg:'signup',
            checkfail: false,
            success: true,
            icon: false,
            eye: true,
        
            phoneError: null,
            passwordError: null,
            msg: null,
            userName: null,
            password: null,
        }
    },
    mounted() {
        
    },
    methods: {

        loginWithGoogle() {
      window.location.href = 'https://loyel.com.bd/loyelApi/public/auth/google'; // Redirect to Laravel route
    },
    formSubmitPrevent(e) {
            // e.preventDefault();
        },
        login(){

            if (this.formValidation('submit')) {

            let formData=new FormData();
            formData.append("userName",this.userName);
            formData.append("password",this.password);
            this.$http.post('customer/login',formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.errMsgFlag=response.data.errMsgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                if(response.data.msgFlag){
                    let customerInfo=response.data.customerInfo;
                    window.localStorage.setItem('customerInfo',JSON.stringify(response.data.customerInfo));
                    window.localStorage.setItem('customerToken',response.data.token);
                    // window.localStorage.setItem('userType',response.data.userType);
                    // this.$store.commit('storeUserToken',response.data.token);
                    this.$store.commit('storeCustomerInfo',response.data.customerInfo);
                    if (window.innerWidth < 768) {
                        this.$router.push({name:'MobileCart'});
                    }else{
                  this.$router.push({name:'cartView'});
                    }
                   
                }
                else{
                    window.localStorage.setItem('customerInfo',null);
                    window.localStorage.setItem('customerToken',null);
                    this.$toaster.warning(this.errMsg);
                }
             })
             .catch(error=>{console.dir(error)})
             .finally();

            }
        },
        validatePhone() {
            
            if (!this.userName || this.userName.length === 0) {
                this.phoneError = 'UserName Field cannot be empty';
                this.$refs.phoneInput.style.border = '1px solid red';
                return false;
            }  else {
                this.phoneError = '';
                this.$refs.phoneInput.style.border = '1px solid #CED4DA';
                return true;
            }
        },

        validatePassword() {

            if (!this.password || this.password.length === 0) {
                this.passwordError = 'Password Field can not empty';
                this.$refs.passwordInput.style.border = '1px solid red';
                return false;
            } else {
                this.passwordError = '';
                this.$refs.passwordInput.style.border = '1px solid #CED4DA';
                return true;
            }
        },
       


        formValidation(fieldName) {

            if (fieldName === 'submit') {

             
                const isPhoneValid = this.validatePhone();
                const isPasswordValid = this.validatePassword();
              


                if ( isPhoneValid && isPasswordValid ) {
                    return true;
                } else {
                    return false;
                }
            } else {

                 if (fieldName === 'phone') {
                    this.validatePhone();
                } else if (fieldName === 'password') {
                    this.validatePassword();
                }
            }


           
            if (fieldName !== 'phone') {
                this.phoneError = null;
                this.$refs.phoneInput.style.border = '1px solid #CED4DA';
            }
            if (fieldName !== 'password') {
                this.passwordError = null;
                this.$refs.passwordInput.style.border = '1px solid #CED4DA';
            }
           



        },

        eyechecking() {
            let inputField = this.$refs.passwordInput;
            if (this.eye == true) {
                this.eye = false;
                inputField.type = 'text';
            } else {
                this.eye = true;
                inputField.type = 'password';
            }
        },
    }
}
</script>


<style scoped>

.signup-customer-checkout-login{
    margin-top: 30px;
}

@media (min-width: 768px) {
    .signup-form {
    width: 500px;
    min-height: 510px;
    background: #fff;
    padding: 20px 20px 20px 20px;
    /* border: 1px solid #ADADAD; */
    /* border-radius: 15px; */
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.form-part {
    width: 100%;
    height: 40%;  
    padding: 10px 0;
}
}

@media (min-width: 1px) and (max-width: 767px) {
    .signup-form {
    width: 100%;
    min-height: 510px;
    background: #fff;
    padding: 20px 20px 20px 20px;
    /* border: 1px solid #ADADAD; */
     /* border-radius: 15px;  */
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

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


.already-account {
    text-align: right;
    margin-bottom:10px;
}
.already-account span {
    color: #1F1F1F;
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
.create-not-you {
    margin-top:10px;
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
    height:110px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column-gap: 20px;
}
.social-icon>* {
    width: 100px;
    height: 50px;
    /* border-radius: 15px; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #8E8E8E; */
    /* box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1), -5px -5px 8px rgba(0, 0, 0, 0.1); */
    cursor: pointer;
}
/* .social part css  */
a {
    text-decoration: none;
    color:black;
}

.eye-off-on>* {
    cursor: pointer;
}

.form-group {
    position: relative;
}

.input-icon {
    display: flex;
    align-items: center;
}

.input-icon i {
    cursor: pointer;

    width: 40px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 12px;
    right: 25px;
}

/* Styling for the eye and eye-slash icons */
.icon-eye {
    color: #333;
    /* Change the color as needed */
    margin-left: 10px;
    /* Adjust the margin as needed for spacing */
}

.icon-eye-slash {
    color: #333;
    /* Change the color as needed */
    margin-left: 10px;
    /* Adjust the margin as needed for spacing */
}

.form-group input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 14px;
    height: 40px;
    line-height: 38px \0;
    padding: 0 35px 0 10px;
    margin-bottom: 2px;
    outline: none;
   border-radius: 0px;
}

.helper-text {
    font-size: .8rem;
    color: red;
    position: absolute;
}

.google{
    background: #1F1F1F;
}
.facebook{
    background: #1F1F1F;
}
</style>
