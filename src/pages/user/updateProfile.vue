<template>
    <div class="customer">
        <div class="loyel-customer-box">



            <div class="loyel-customer-box-item">
                <div class="header">
                    <div class="details">
                        Profile Details
                    </div>
                    <!-- <div class="details-edit pointer" @click="editStoreDetails=false">
                        <h4 style="color:red;">X</h4>
                    </div> -->
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="3" cols-lg="3">
                        <b-col>
                            <div class="mb-3">
                                <span>Full Name:</span>
                            </div>

                            <input type="text" placeholder="Name" class="form-control" v-model="name">

                            <div class="mt-3">
                                <span>Profile Image:</span>
                            </div>
                            <p class="mt-3">
                                <span class="license-img">
                                    <img :src="avatar" alt="" v-if="avatar" style=" height: 200px; width: 200px;">
                                    <input type="file" ref="avatar" class="form-control" accept="image/*"
                                        @change="loadLogo">
                                </span>
                            </p>





                        </b-col>
                        <b-col>
                            <div class="mb-3">
                                Email:<span v-if="email != NULL">
                                    <span @click="modalvalue2 = true" class="change-email-modal">
                                        Change
                                    </span>


                                </span>
                                <span v-else>
                                    <span @click="modalvalue1 = true" class="change-email-modal">
                                        Add
                                    </span>
                                </span>
                            </div>

                            <span>
                                {{ email }}
                            </span>




                        </b-col>

                        <b-col>
                            <div class="mb-3">
                                Phone:<span  @click="modalvalue = true" class="change-mobile-modal">
                                    Change
                                </span>
                            </div>


                            <span>
                                {{ phone }}

                            </span>


                        </b-col>

                    </b-row>
                    <b-row cols="1" cols-md="2" cols-lg="3">

                        <b-col class="text-right">
                            <button class="btn btn-sm " @click="updateProfile">
                                Update Profile
                            </button>
                        </b-col>
                    </b-row>
                </div>
                <hr>
            </div>

        </div>
        <div class="first-phase-all-modals">

            <div class="modal-one">
                <a-modal v-model="modalvalue" title="Change Mobile Number" centered @ok="changedPhone()"
                    @cancel="closephoneModal()">
                    <b-row cols="1" cols-md="2">
                        <b-col>
                            <div class="phone-name">
                                <label for="">Please Click Ok to verify person:</label>
                                <a-input id="phone" v-model="phone" disabled />
                                <!-- <div class="helper-text" v-if="helper.name">
                                    {{helper.name}}
                                </div> -->
                            </div>
                        </b-col>

                    </b-row>
                    <br />

                </a-modal>
            </div>
            <div class="modal-two">
                <a-modal v-model="modalvalue1" title="Enter New Email" centered @ok="addEmail()"
                    @cancel="closeEmailModal1()">
                    <b-row cols="1" cols-md="2">
                        <b-col>
                            <div class="email-number">
                                <label for="">Please Enter New Email:</label>
                                <a-input id="email" v-model="email" />
                                <!-- <div class="helper-text" v-if="helper.name">
                                    {{helper.name}}
                                </div> -->
                            </div>
                        </b-col>

                    </b-row>
                    <br />

                </a-modal>
            </div>
            <div class="modal-three">
                <a-modal v-model="modalvalue2" title="Change Email" centered @ok="changeEmail()"
                    @cancel="closeEmailModal2()">
                    <b-row cols="1" cols-md="2">
                        <b-col>
                            <div class="phone-name">
                                <label for="">Please Click Ok to verify Email:</label>
                                <a-input id="email" v-model="email" disabled />
                                <!-- <div class="helper-text" v-if="helper.name">
                                    {{helper.name}}
                                </div> -->
                            </div>
                        </b-col>

                    </b-row>
                    <br />

                </a-modal>
            </div>


        </div>
    </div>
</template>


<script>
import EventBus from '@/pages/event-bus';
export default {
    name: 'customer',

    data() {
        return {

            editStoreDetails: false,
            msgFlag: false,
            errMsgFlag: false,
            errMsg: null,
            msg: null,
            name: '',

            modalvalue: false,
            modalvalue1: false,
            modalvalue2: false,

            email: '',
            phone: '',
            avatar: '',
            phoneCreate: {
                phone: "",

            },
            emailCreate: {
                email: "",

            },

            dataId: this.$route.params.dataId,
        }
    },
    beforeMount() {

        this.loadDataInfo();
    },
    methods: {
        closephoneModal() {
            let phoneName = document.getElementById('phone');

            if (this.phoneCreate.phone == '') {
                phoneName.style.border = '1px solid red';
                phoneName.style.boxShadow = 'none';
                this.helper.phone = 'phone can\'t be empty';
            } else {
                console.log('phone Details: ', this.phoneCreate);
                this.phoneCreate = {};
                this.modalvalue = false;
            }
        },
        closeEmailModal1() {
            let emailNumber = document.getElementById('email');

            if (this.emailCreate.email == '') {
                emailNumber.style.border = '1px solid red';
                emailNumber.style.boxShadow = 'none';
                this.helper.email = 'email can\'t be empty';
            } else {
                console.log('email Details: ', this.emailCreate);
                this.emailCreate = {};
                this.modalvalue = false;
            }
        },
        closeEmailModal2() {
            let emailNumber = document.getElementById('email');

            if (this.emailCreate.email == '') {
                emailNumber.style.border = '1px solid red';
                emailNumber.style.boxShadow = 'none';
                this.helper.email = 'email can\'t be empty';
            } else {
                console.log('email Details: ', this.emailCreate);
                this.emailCreate = {};
                this.modalvalue = false;
            }
        },

        async changedPhone() {
            if (this.phoneFormValidation()) {
                this.errMsgFlag = false;
                this.msgFlag = false;
                let token = window.localStorage.getItem("customerToken");

                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + token,

                    }
                };
                let formData = new FormData();
                formData.append("dataId", this.dataId);
                await this.$http.post("customer/send/verify/phone", formData, config)
                    .then(response => {
                        this.errMsgFlag = response.data.errMsgFlag;

                        this.$router.push({ name: 'SMSVerify' });


                    })
                    .catch(error => { })
                    .finally();
            }
        },
        phoneFormValidation() {
            if (this.phone != null) {
                return true;
            }
            else {

                if (this.phone == null) {
                    this.errMsg = "Please Enter Mobile Number.";
                    this.$toaster.warning(this.errMsg);
                }


                this.errMsgFlag = true;
                this.msgFlag = false;
                return false;
            }
        },
        resetPhoneForm() {
            this.phone = null;
        },
        async addEmail() {
            if (this.emailFormValidation()) {
                this.errMsgFlag = false;
                this.msgFlag = false;
                let token = window.localStorage.getItem("customerToken");

                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + token,

                    }
                };
                let formData = new FormData();
                formData.append("email", this.email);
                await this.$http.post("customer/add/new/email", formData, config)
                    .then(response => {
                        this.errMsgFlag = response.data.errMsgFlag;
                        if(response.data.msgFlag==true){
                            this.$router.push({ name: 'addEmailVerify' });

                        }else{
                            this.$toaster.warning(response.data.errMsg);
                        }

                      


                    })
                    .catch(error => { })
                    .finally();
            }
        },
        emailFormValidation() {
            if (this.email != null) {
                return true;
            }
            else {

                if (this.email == null) {
                    this.errMsg = "Please Enter Email Number.";
                    this.$toaster.warning(this.errMsg);
                }


                this.errMsgFlag = true;
                this.msgFlag = false;
                return false;
            }
        },
        resetPhoneForm() {
            this.email = null;
        },

        async changeEmail() {
            if (this.emailFormValidation()) {
                this.errMsgFlag = false;
                this.msgFlag = false;
                let token = window.localStorage.getItem("customerToken");

                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + token,

                    }
                };
                let formData = new FormData();
                formData.append("dataId", this.dataId);
                await this.$http.post("customer/send/verify/email", formData, config)
                    .then(response => {
                        this.errMsgFlag = response.data.errMsgFlag;

                        this.$router.push({ name: 'chnageEmailVerifyOtp' });


                    })
                    .catch(error => { })
                    .finally();
            }
        },
        emailFormValidation() {
            if (this.email != null) {
                return true;
            }
            else {

                if (this.email == null) {
                    this.errMsg = "Please Enter Email.";
                    this.$toaster.warning(this.errMsg);
                }


                this.errMsgFlag = true;
                this.msgFlag = false;
                return false;
            }
        },
        resetEmailForm() {
            this.email = null;
        },
        loadDataInfo() {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,

                }
            };
            let url = "/customer/get/info?dataId=" + this.dataId;
            this.$http.get(url, config).then((response) => {
                console.log(response.data);
                let dataInfo = response.data.customerInfo;
                this.name = dataInfo.name;
                this.avatar = this.$baseUrl + dataInfo.avatar;
                this.phone = dataInfo.phone;
                this.email = dataInfo.email;

            });
        },

        loadLogo(e) {
            this.errMsgFlag = false;
            this.msgFlag = false;
            const file = e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if (Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension == 'gif') {
                this.avatar = URL.createObjectURL(file);
                // this.sliderImage=this.$refs.slider.files[0];

            }
            else {
                this.errMsg = "Photo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag = true;
                this.msgFlag = false;
                this.$toaster.warning(this.errMsg);
            }
        },

        async updateProfile() {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            };
            let formData = new FormData();
            formData.append("dataId", this.dataId);
            formData.append('name', this.name);

            formData.append('phone', this.phone);
            formData.append('email', this.email);


            if (this.$refs.avatar.files[0] != null)
                formData.append('avatar', this.$refs.avatar.files[0]);




            await this.$http.post('customer/update/info', formData, config)
                .then(response => {
                    EventBus.$emit('profile-updated');
                    if (response.data.msgFlag == true)
                        this.$toaster.success(response.data.msg);
                        this.$router.push({ name: 'profile' });
                    if (response.data.errMsgFlag == true)
                        this.$toaster.warning(response.data.errMsg);

                })
                .catch(error => { console.dir(error) })
                .finally();
        },

    }
}
</script>

<style scoped>
.banner img {
    width: 100%;
}

.account-cheque pre {
    display: inline-block;

}

.account-cheque img {
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

.loyel-customer-box-item {
    background: #fff;
    padding: 24px;
}

.change-email-modal {
   cursor: pointer;
   color: darkturquoise;
}

.change-mobile-modal {
   cursor: pointer;
   color: darkturquoise;
}

input {
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
.btn-sm{
    background: #232f3e;
    color: #fff;
    border: 1px solid #232f3e;
    border-radius: 0px;

}
/* bank css  */
</style>
