<template>
    <div class="signup">
        <div class="signup-form">
            <div class="heading">
                <!-- <div class="logo-signup">
                    <img src="@/assets/images/signuplogo.png" alt="">
                    <div class="tag-line">
                        WELCOME, BE A PART OF US
                    </div>
                </div> -->
                <br>
                <h4>Forget Your Password</h4>
            </div>
            <div class="form-part">
                <form @submit.prevent="formSubmitPrevent()" action="">
                    
                    <div class="alert-information mb-3">
                        Please enter your email address or phone number. You will receive
                        a one time password to login your account.
                    </div>
                    <br>
                    <div class="form-group mt-3">
                        <label for="title"> Phone Number or Email</label>
                        <input type="text" class="form-control mt-1" v-model="userName" ref="phoneInput"
                            placeholder="Enter your Mobile Number or Email" @keyup="formValidation('phone')"
                            @focus="formValidation('phone')" />
                        <div class="helper-text">{{ phoneError }}</div>

                    </div>
                    <br>
                    <button class="signup-btn" @click="sendPassword(), formValidation('submit')">
                        send
                    </button>  
                    <div class="already-account mt-3">
                        <router-link to="login">
                           Go Back
                        
                        </router-link>
                    </div>                                   
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/user/inputField';
export default {
    components: {
        InputField,
    },
    data() {
        return {
            msg:'signup',
            checkfail: false,
            msgFlag: false,
            errMsgFlag: false,
            msg: null,
            errMsg: null,
            phoneError: null,
        
            userName: null,
          
        }
    },
    mounted() {
        
    },
    methods: {
        formSubmitPrevent(e) {
            // e.preventDefault();
        },
        sendPassword(){
            if (this.formValidation('submit')) {
      
          
            let formData=new FormData();
            formData.append("userName",this.userName);
          
            this.$http.post('customer/forget/password',formData)
            .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.errMsgFlag=response.data.errMsgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                if(response.data.msgFlag){
                    this.$router.push({ name: "login" });
                  
                }
                else{
                  
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

     


        formValidation(fieldName) {

            if (fieldName === 'submit') {

                const isPhoneValid = this.validatePhone();
              
                if ( isPhoneValid ) {
                    return true;
                } else {
                    return false;
                }
            } else {

                 if (fieldName === 'phone') {
                    this.validatePhone();
                } 
            }

           
            if (fieldName !== 'phone') {
                this.phoneError = null;
                this.$refs.phoneInput.style.border = '1px solid #CED4DA';
            }
           
        },
    }
}
</script>


<style scoped>

@media (min-width: 540px) {
    .signup-form {
    width: 500px;
    min-height: 530px;
    background: #fff;
    padding: 20px 20px 20px 20px;
    /* border: 1px solid #ADADAD; */
    /* border-radius: 15px; */
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
}

@media (min-width: 320px) and (max-width: 539px) {
    .signup-form {
    width: 320px;
    min-height: 530px;
    background: #fff;
    padding: 20px 20px 20px 20px;
    /* border: 1px solid #ADADAD; */
    /* border-radius: 15px; */
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

}

 /* heading part css  */
.heading {
    width: 100%;
    height: 30%;
    padding-top:50px;
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
.heading h4 {
    color: red;
}
 /* heading part css  */

/* form part css  */
.form-part {
    width: 100%;
    height: 40%;  
    padding: 10px 0;
}

.already-account {
    text-align: left;
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
    border-radius:20px;
    text-transform: uppercase;
    border:none;
}


.form-group {
    position: relative;
}

.input-icon {
    display: flex;
    align-items: center;
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
/* form part css  */


</style>
