<template>
    <div class="signup loyel-customer-signup">
        <div class="signup-form">
            <div class="heading">
                <!-- <div class="logo-signup">
                    <img src="@/assets/images/signuplogo.png" alt="">
                    <div class="tag-line">
                        WELCOME, BE A PART OF US
                    </div>
                </div> -->
                <br>
                <h4>Create your Loyel Account </h4>
            </div>
            <div class="form-part">
                <form @submit.prevent="formSubmitPrevent()">


                    <div class="form-group mt-3">
                        <label for="title">Full Name</label>
                        <input type="text" class="form-control mt-1" v-model="name" ref="nameInput"
                            placeholder="Enter your Full Name" @keyup="formValidation('name')"
                            @focus="formValidation('name')" />
                        <div class="helper-text">{{ nameError }}</div>

                    </div>

                    <div class="form-group mt-3">
                        <label for="title"> Mobile</label>
                        <input type="text" class="form-control mt-1" v-model="phone" ref="phoneInput"
                            placeholder="Enter your Mobile Number" @keyup="formValidation('phone')"
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

                    <div class="form-group mt-3">
                        <label for="title"> Confirm Password</label>
                        <div class="input-icon">
                        <input type="password" class="form-control mt-1" v-model="confirmPassword"
                            ref="confirmPasswordInput" placeholder="Enter your Confirm Password"
                            @keyup="formValidation('confirmPassword')" @focus="formValidation('confirmPassword')" />
                            <i class="icon-eye" v-if="eyeCon" @click="eyecheckingCon"><b-icon icon="eye" /></i>
                            <i class="icon-eye-slash" v-else @click="eyecheckingCon"><b-icon icon="eye-slash" /></i>
                        </div>
                        <div class="helper-text">{{ confirmPasswordError }}</div>

                    </div>

                    <div class="already-account mt-3">
                        <router-link to="login">
                            Already have an account
                            <span>
                                <b-icon icon="arrow-right" />
                            </span>
                        </router-link>
                    </div>
                    <button class="signup-btn" @click="signupFun(), formValidation('submit')">
                        sign up
                    </button>
                </form>
            </div>
            <div class="social-account">
                <div class="social-login">or sign up with </div>
                <div class="social-icon">
                    <div class="google">
                        <div @click="loginWithGoogle">

                            <img src="@/assets/images/group.png" alt="" style="width: 32px; height: 32px;">
                        </div>
                    </div>
                    <div class="facebook">
                        <img src="@/assets/images/facebook.png" alt="" style="width: 32px; height: 32px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {


    },
    data() {
        return {
            errMsg: null,
            loggedIn: false,
            errMsgFlag: false,
            msg: 'input',
            helpingText: false,
            success: true,
            icon: false,
            eye: true,
            eyeCon: true,
            nameError: null,
            phoneError: null,
            passwordError: null,
            confirmPasswordError: null,
            msg: null,
            name: null,
            phone: null,
            password: null,
            confirmPassword: null,
            msgFlag: false,
            checkfail: true,

            genders: [
                'Male',
                'Female'
            ],
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


        signupFun() {
            if (this.formValidation('submit')) {
                let dataInfo = {
                    name: this.name,

                    phone: this.phone,
                }
                let formData = new FormData();
                formData.append("name", this.name);
                // formData.append("email",email);
                formData.append("phone", this.phone);
                formData.append("password", this.password);
                formData.append("confirmPassword", this.password);
                this.$http.post('customer/signup', formData)
                    .then(response => {
                        this.msgFlag = response.data.msgFlag;
                        this.errMsgFlag = response.data.errMsgFlag;
                        this.msg = response.data.msg;
                        this.errMsg = response.data.errMsg;
                        if (response.data.msgFlag == true) {
                            this.$toaster.success(response.data.msg);
                            this.$store.commit('storeTemporaryCustomer', dataInfo);
                            this.$router.push({ name: 'customerOtp' });
                        }
                        if (response.data.errMsgFlag == true)
                            this.$toaster.warning(response.data.errMsg);
                    })
                    .catch(error => { console.dir(error) })
                    .finally();
            }
        },

        validateName() {
            if (!this.name || this.name.length === 0) {
                this.nameError = 'Name Field cannot be empty';
                this.$refs.nameInput.style.border = '1px solid red';
                return false;
            } else {
                this.nameError = '';
                this.$refs.nameInput.style.border = '1px solid #CED4DA';
                return true;
            }
        },
        validatePhone() {
            let numberRegEx = /^(\+88|0088)?(01)[3456789]\d{8}$/;
            if (!this.phone || this.phone.length === 0) {
                this.phoneError = 'Mobile Number Field cannot be empty';
                this.$refs.phoneInput.style.border = '1px solid red';
                return false;
            } else if (!numberRegEx.test(this.phone)) {
                this.phoneError = 'Invalid phone number format';
                this.$refs.phoneInput.style.border = '1px solid red';
                return false;
            } else {
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
            } else if (!this.password || this.password.length < 6) {
                this.passwordError = 'Password must be at least 6 character';
                this.$refs.passwordInput.style.border = '1px solid red';
                return false;
            } else {
                this.passwordError = '';
                this.$refs.passwordInput.style.border = '1px solid #CED4DA';
                return true;
            }
        },
        validateConfirmPassword() {

            if (!this.confirmPassword || this.confirmPassword.length === 0) {
                this.confirmPasswordError = "Confirm Password Field cannot be empty";
                this.$refs.confirmPasswordInput.style.border = '1px solid red';
                return false;
            } else if (this.confirmPassword !== this.password) {
                this.confirmPasswordError = "Password and Confirm Password do not match";
                this.$refs.confirmPasswordInput.style.border = '1px solid red';
                return false;
            } else {
                this.confirmPasswordError = "";
                this.$refs.confirmPasswordInput.style.border = '1px solid #CED4DA';
                return true;
            }
        },



        formValidation(fieldName) {

            if (fieldName === 'submit') {

                const isNameValid = this.validateName();
                const isPhoneValid = this.validatePhone();
                const isPasswordValid = this.validatePassword();
                const isConfirmPasswordValid = this.validateConfirmPassword();


                if (isNameValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
                    return true;
                } else {
                    return false;
                }
            } else {

                if (fieldName === 'name') {
                    this.validateName();
                } else if (fieldName === 'phone') {
                    this.validatePhone();
                } else if (fieldName === 'password') {
                    this.validatePassword();
                } else if (fieldName === 'confirmPassword') {
                    this.validateConfirmPassword();
                }
            }


            if (fieldName !== 'name') {
                this.nameError = null;
                this.$refs.nameInput.style.border = '1px solid #CED4DA';
            }
            if (fieldName !== 'phone') {
                this.phoneError = null;
                this.$refs.phoneInput.style.border = '1px solid #CED4DA';
            }
            if (fieldName !== 'password') {
                this.passwordError = null;
                this.$refs.passwordInput.style.border = '1px solid #CED4DA';
            }
            if (fieldName !== 'confirmPassword') {
                this.confirmPasswordError = null;
                this.$refs.confirmPasswordInput.style.border = '1px solid #CED4DA';
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
        eyecheckingCon() {
            let inputFieldCon = this.$refs.confirmPasswordInput;
            if (this.eyeCon == true) {
                this.eyeCon = false;
                inputFieldCon.type = 'text';
            } else {
                this.eyeCon = true;
                inputFieldCon.type = 'password';
            }
        },

    },

}
</script>


<style scoped>
.loyel-customer-signup{
    margin-top: 30px;
}
@media (min-width: 540px) {
    .signup-form {
        width: 500px;
        min-height: 660px;
        background: #fff;
        padding: 20px 20px 20px 20px;
        /* border: 1px solid #ADADAD; */
        /* border-radius: 15px; */
        margin: 15px auto;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
}

@media (min-width: 1px) and (max-width: 539px) {
    .signup-form {
        width: 100%;
        min-height: 660px;
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
    height: 25%;
    /* padding-top: 50px; */
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
    height: 60%;
    /* background: greenyellow; */
    /* padding: 10px 0; */
}

.duble-input-field {
    display: flex;
    margin: 0 0 10px 0;
    justify-content: space-between;
}

.dob {
    width: 58%;
}

.gender {
    width: 32%;
}

.dob-title {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4F4F4;
    padding: 5px 0;
    margin-bottom: 10px;
    border-radius: 5px;
}

.gender-title {
    width: 150px;
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4F4F4;
    margin-left: auto;
    border-radius: 5px;
    margin-bottom: 10px;
}

.already-account {
    text-align: center;
    margin-bottom: 10px;
}

.already-account span {
    color: #1F1F1F;
    cursor: pointer;
}

.signup-btn {
    background: #1F1F1F;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
}

/* form part css  */

/* .social part css  */
.social-account {
    width: 100%;
    height: 15%;
}

.social-login {
    text-align: center;
}

.social-icon {
    display: flex;
    height: 85px;
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
    color: black;
}

.helper-text {
    font-size: .8rem;
    color: red;
    position: absolute;
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
.google{
    background: #1F1F1F;
}
.facebook{
    background: #1F1F1F;
}
</style>
