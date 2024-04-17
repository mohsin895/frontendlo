<template>
    <div class="change-password">
        <div class="mobile-layout">

            <router-link :to="{ name: 'profile', params: { id: $store.state.customerInfo.name } }">

                <img src="@/assets/images/mobile.png" style="width: 40px;height: 15px;">
            </router-link><span style="margin-left: 20px; font-size: 20px;font-weight: 900;">Profile</span>
        </div>
        <div class="pass-fields">
            <h4>Change Password</h4>
            <hr>
            <br>
            <form @submit.prevent="formSubmitPrevent()">


                <div class="form-group mt-3">
                    <label for="title">Enter your old password</label>
                   



                        <div class="input-icon">
                            <input type="password" class="form-control mt-1" v-model="oldPass" ref="nameInput"
                        placeholder="Enter your old password" @keyup="formValidation('name')"
                        @focus="formValidation('name')" />
                        <i class="icon-eye" v-if=" eyeOld" @click="eyecheckingOld"><b-icon icon="eye" /></i>
                        <i class="icon-eye-slash" v-else @click=" eyecheckingOld"><b-icon icon="eye-slash" /></i>
                    </div>
                        
                    <div class="helper-text">{{ nameError }}</div>

                </div>

           

                <div class="form-group mt-3">
                    <label for="title">New Password</label>
                    <div class="input-icon">
                        <input type="password" class="form-control mt-1" v-model="password" ref="passwordInput"
                            placeholder="Enter your new Password" @keyup="formValidation('password')"
                            @focus="formValidation('password')" />
                        <i class="icon-eye" v-if="eye" @click="eyechecking"><b-icon icon="eye" /></i>
                        <i class="icon-eye-slash" v-else @click="eyechecking"><b-icon icon="eye-slash" /></i>
                    </div>


                    <div class="helper-text">{{ passwordError }}</div>


                </div>

                <div class="form-group mt-3 mb-2">
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

             
                <button class="save-changes" @click="changePassword(), formValidation('submit')">
                    Save Changes
                </button>
            </form>
            <!-- <b-row cols="1" cols-sm="1" cols-lg="2">
                <b-col lg="8">
                    <form @submit.prevent="submit()" action="">
                        <InputField :value.sync="userForgetPass.oldPass" type="password" label="Enter your old password"
                            ref="oldPassword" @checkfail="checker" :iconFlag="true" iconName="file-lock2" />
                        <InputField :value.sync="userForgetPass.newPass" type="password" label="Enter your new password"
                            ref="newPassword" @checkfail="checker" :iconFlag="true" iconName="file-lock2" />
                        <InputField :value.sync="userForgetPass.ConfirmPass" type="password" label="Confirm your password"
                            ref="confirmPassword" @checkfail="checker" :iconFlag="true" iconName="file-lock2" />
                        <button class="save-changes" @click="changePassword()">
                            Save Changes
                        </button>
                    </form>
                </b-col>
                <b-col lg="4"></b-col>
            </b-row> -->
            <br>
            <hr>
        </div>
    </div>
</template>

<script>

export default {
   
    name: 'changePassword',
    data() {
        return {
            msg: 'changePassword',
            helpingText: false,
            success: true,
            icon: false,
            eye: true,
            eyeOld: true,
            eyeCon: true,
            nameError: null,
            passwordError: null,
            confirmPasswordError: null,
            msg: null,
            oldPass: null,
        
            password: null,
            confirmPassword: null,
            msgFlag: false,
           
        }
    },
    methods: {
        resetForm() {
            this.userForgetPass = {
                oldPass: null,
                newPass: null,
                ConfirmPass: null,
            };
        },
        formSubmitPrevent(e) {
            // e.preventDefault();
        },


        validateName() {
            if (!this.oldPass || this.oldPass.length === 0) {
                this.nameError = 'Old Password Field cannot be empty';
                this.$refs.nameInput.style.border = '1px solid red';
                return false;
            } else {
                this.nameError = '';
                this.$refs.nameInput.style.border = '1px solid #CED4DA';
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
                const isPasswordValid = this.validatePassword();
                const isConfirmPasswordValid = this.validateConfirmPassword();


                if (isNameValid && isPasswordValid  && isConfirmPasswordValid) {
                    return true;
                } else {
                    return false;
                }
            } else {

                if (fieldName === 'name') {
                    this.validateName();
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
        eyecheckingOld() {
            let inputFieldOld = this.$refs.nameInput;
            if (this.eyeOld == true) {
                this.eyeOld = false;
                inputFieldOld.type = 'text';
            } else {
                this.eyeOld = true;
                inputFieldOld.type = 'password';
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

        async changePassword() {
            if (this.formValidation('submit')) {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            let formData = new FormData();
            formData.append("oldPassword", this.oldPass);
            formData.append("newPassword", this.password);
            formData.append("conPassword", this.confirmPassword);

            await this.$http.post('/customer/password/change', formData, config)
                .then(response => {
                    if (response.data.msgFlag == true) {
                        this.$toaster.success(response.data.msg);
                        this.resetForm();
                    }
                    if (response.data.errMsgFlag == true)
                        this.$toaster.warning(response.data.errMsg);
                })
                .catch(error => { console.dir(error) })
                .finally();
            }

        },
       
    }
}
</script>

<style scoped>


@media (min-width: 1px) and (max-width: 767px) {
    /* .mobile-layout{
        display: none;
    } */


}

@media (min-width: 768px) {
    .mobile-layout {
        display: none;
    }



}

.pass-fields {
    padding: 20px;
    width: 100%;
    min-height: 300px;
    background: white;
}

.pass-fields h4 {
    margin: 0;
    padding-bottom: 10px;
}

hr {
    margin: 0;
}

.save-changes {
    border: none;
    background: #3350EA;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: block;
    margin-left: auto;
}


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
</style>