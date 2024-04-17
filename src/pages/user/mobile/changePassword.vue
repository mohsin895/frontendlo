<template>
    <div class="change-password">
        <div class="mobile-layout">
        
        <router-link :to="{name:'profile',params:{id: $store.state.customerInfo.name}}">
                            
                            <img src="@/assets/images/mobile.png" style="width: 40px;height: 15px;">
                             </router-link><span style="margin-left: 20px; font-size: 20px;font-weight: 900;">Profile</span> 
    </div>
        <div class="pass-fields">
            <h4>Change Password</h4>
            <hr>
            <br>
            <b-row cols="1" cols-sm="1" cols-lg="2">
                <b-col lg="8">
                    <form @submit.prevent="submit()" action="">
                        <InputField 
                        :value.sync="userForgetPass.oldPass"
                        type="password"
                        label="Enter your old password"
                        ref="oldPassword"
                        @checkfail="checker"
                        :iconFlag="true"
                        iconName="file-lock2"
                        /> 
                        <InputField 
                        :value.sync="userForgetPass.newPass"
                        type="password"
                        label="Enter your new password"
                        ref="newPassword"
                        @checkfail="checker"
                        :iconFlag="true"
                        iconName="file-lock2"
                        />
                        <InputField 
                        :value.sync="userForgetPass.ConfirmPass"
                        type="password"
                        label="Confirm your password"
                        ref="confirmPassword"
                        @checkfail="checker"
                        :iconFlag="true"
                        iconName="file-lock2"
                        />
                        <button class="save-changes" @click="changePassword()">
                            Save Changes
                        </button>
                    </form>
                </b-col>
                <b-col lg="4"></b-col>
            </b-row>
            <br>
            <hr>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/user/inputField';
export default {
    components: {
        InputField,
    },
    name: 'changePassword',
    data() {
        return {
            msg:'changePassword',
            userForgetPass: {
                oldPass: null,
                newPass: null,
                ConfirmPass: null,
            }
        }
    },
    methods: {
        resetForm(){
            this.userForgetPass={
                oldPass: null,
                newPass: null,
                ConfirmPass: null,
            };
        },
         async changePassword(){
            
                let token=window.localStorage.getItem("customerToken");
           
                let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };
                   
                    let formData=new FormData();
                    formData.append("oldPassword",this.userForgetPass.oldPass);
                    formData.append("newPassword",this.userForgetPass.newPass);
                    formData.append("conPassword",this.userForgetPass.ConfirmPass);

                 await  this.$http.post('/customer/password/change',formData,config)
                     .then(response=>{
                        if(response.data.msgFlag==true){
                            this.$toaster.success(response.data.msg);
                            this.resetForm();
                        }
                        if(response.data.errMsgFlag==true)
                            this.$toaster.warning(response.data.errMsg);
                     })
                     .catch(error=>{console.dir(error)})
                     .finally();
            
        },
        checker(payload) {
            this.checkfail = payload;
        },
        submit() {
            if (!this.checkfail) {
                if (this.userForgetPass.newPass != this.userForgetPass.ConfirmPass) {
                    toast.warning({
                        position: 'topRight',
                        message: 'Confirm password must be same as password'
                    });
                } else {
                    console.log(this.userForgetPass);
                }
            }
        }
    }
}
</script>

<style scoped>

.mobile-layout{
    margin-bottom: 48px;
    /* box-shadow: 5px 10px 8px 10px; */
}

@media (min-width: 1px) and (max-width: 767px) {
    /* .mobile-layout{
        display: none;
    } */


}

@media (min-width: 768px){
    .mobile-layout{
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
</style>