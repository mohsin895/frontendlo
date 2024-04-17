<template>
    <div class="loyel-vendor-shop">
        <div class="loyel-container">
            <div class="loyel-container banner ">
                <div class="store-shop-profile grid-container">
                    <div class="shop-design">
                        <img v-lazy="baseUrl + vandorInfo.shop_logo" alt="vandorInfo.shop_name" class="shop-image">
                    </div>
                    <div class="loyel-sop-margin">
                        <div class="shop-info">
                            <span class="loyel-shop-header-font">{{ vandorInfo.shop_name }}
                               
                            
                            
                            </span>
                            </br>
                            <span> Member <span style="color:red">Since {{ vandorInfo.created_at | formatYear
                            }}</span></span>

                        </div>
                    </div>
                    <div class="">

                        <span v-if="$store.state.customerInfo">
                           
                                <slot v-if="followerInfo != null">
                                    <div class="vendor-shop-header">
                                        <div class="shop-info-following" >
                                <span class="loyel-shop-header-font"><img src="@/assets/images/check.png" height="16px" style="margin-left: 20px;">
                                </span>

                                </br>
                                <span>Favorites </span>


                            </div>
                            <div class="shop-info" @click="unfollow(vandorInfo.id)" >
                                <span class="loyel-shop-header-font"><img src="@/assets/images/cross.png" height="16px" style="margin-left: 20px;">
                                </span>

                                </br>
                                <span>Unfavorite </span>


                            </div>
                                    </div>
                                   
                                </slot>
                                <solt v-else>
                                    <div class="shop-info" @click="submitFollow($store.state.customerInfo.id,vandorInfo.id)">
                                <span class="loyel-shop-header-font"><img src="@/assets/images/plus.png" height="16px" style="margin-left: 20px;">
                                </span>

                                </br>
                                <span>Follow </span>


                            </div>
                                </solt>
                               
                              
                            
                              



                        


                        </span>
                        <span v-else>
                            <a type="primary" @click="modalvalue = true">
                                <div class="shop-info">
                                    <span class="loyel-shop-header-font"><img src="@/assets/images/plus.png" height="16px">
                                    </span>
                                    </br>
                                    <span>Follow </span>

                                </div>
                            </a>
                        </span>

                    </div>
                

                    <div class="">
                        <div class="seller-info">
                            <!-- <img v-lazy="baseUrl + vandorInfo.seller_info.avatar" alt="vandorInfo.shop_name" class="seller-image">   <br>
                    <span >Owner Name:{{vandorInfo.seller_info.name}}</span> -->
                        </div>
                    </div>
                </div>



            </div>
            <div class="store-heading-loyel">
                <div class="loyel-container slider-heading">
                    <div class="caption pointer store-heading">
                        <!-- <span class="padding-shop"  v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">Category</span> -->
                        <span class="padding-shop" v-on:click="activetab = '2'"
                            v-bind:class="[activetab === '2' ? 'active' : '']">Home </span>
                        <span class="padding-shop" v-on:click="activetab = '3'"
                            v-bind:class="[activetab === '3' ? 'active' : '']"> Products</span>
                        <span class="padding-shop" v-on:click="activetab = '4'"
                            v-bind:class="[activetab === '4' ? 'active' : '']">About Us</span>
                        <!-- <span class="padding-shop"  v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]">Contact Us</span> -->
                    </div>

                </div>

            </div>


            <br>
            <div class="loyel-container shop-slider">


                <div class="tabs-section">
                    <Category v-if="activetab === '1'" />
                    <Home v-if="activetab === '2'" />
                    <AllProduct v-if="activetab === '3'" />
                    <Profile v-if="activetab === '4'" />
                    <Contact v-if="activetab === '5'" />
                </div>
            </div>
        </div>
        <div class="modal-one">
            <a-modal v-model="modalvalue" title="Please Login First" centered @ok="login()" @cancel="closeLoginModal()">
                <b-row cols="1" cols-md="1">
                    <b-col>
                        <div class="form-part">
                            <form @submit.prevent="myform" action="">


                                <InputField :value.sync="loginInfo.phone" type="phone" label="Phone" ref="phone"
                                    @checkfail="checker" :iconFlag="true" iconName="envelope" />


                                <InputField :value.sync="loginInfo.password" type="password" label="Password" ref="password"
                                    @checkfail="checker" :iconFlag="true" iconName="file-lock2" />
                                <div class="already-account">
                                    <router-link to="forget-password">
                                        Forgot your password?
                                        <span>
                                            <b-icon icon="arrow-right" />
                                        </span>
                                    </router-link>
                                </div>
                                <button class="signup-btn" @click="login()">
                                    log in
                                </button>
                                <div class="create-not-you">
                                    <p>
                                        <router-link :to="{ name: 'signup' }">Create Account</router-link>
                                    </p>
                                    <p>Not You?</p>
                                </div>
                            </form>
                        </div>
                    </b-col>
                    <b-col>

                    </b-col>
                </b-row>
                <br />
                <b-row>
                    <b-col>

                    </b-col>
                </b-row>
            </a-modal>
        </div>
    </div>
</template>

<script>

import AllProduct from '@/pages/vandor/shop/product'
import Home from '@/pages/vandor/shop/home'
import Profile from '@/pages/vandor/shop/profile'
import Contact from '@/pages/vandor/shop/contact'
// import Multiselect from 'vue-multiselect'
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import Card from '@/components/slider/productCard'
import InputField from '@/components/user/inputField';
export default {
    name: 'loyel-vendor-shop',
    components: {
        AllProduct,
        Home,
        Profile,
        Contact,
        Hooper,
        Slide,
        HooperNavigation,
        InputField,
        // HooperPagination,
        Card
    },
    data() {
        return {
            activetab: '2',
            dataList: [],
            followerInfo:null,
            baseUrl: this.$baseUrl,
            modalvalue: false,
            vandorInfo: [],
            numOfData: 44,
            urlParam: {
                numOfData: 44,
                slug: this.$route.params.slug,
            },
            dataUrl: 'vandor/wise/product',
    
          
            totalData: 0,
            numberOfDataPage: 1,
            lastPage: 1,
            dataList: [],
            checkfail: false,
            loginInfo: {
                phone: '',
                password: '',
            },
            msg: 'loyel-vendor-shop',
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide: 1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,

                breakpoints: {
                    1: {
                        itemsToShow: 1,
                        centerMode: false,
                    },
                    320: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    550: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    // 768: {
                    //     itemsToShow: 3
                    // },
                    1000: {
                        itemsToShow: 4
                    }
                    ,
                    1400: {
                        itemsToShow: 5
                    }
                    ,
                    1540: {
                        itemsToShow: 6
                    }
                }
            },

        }
    },
    beforeMount() {

        this.getDataList(this.dataUrl, this.urlParam);
        this.getCustomerFollowingInfo();
       
    },
    watch: {
        $route(to, from) { this.numOfData = 44; this.pageIndexReset(); this.showDatas(); }
    },
    methods: {

      
        async getCustomerFollowingInfo() {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
      
            let vendofrInfoSlug=this.$route.params.slug;

       await this.$http.get("customer/following/info?slug="+vendofrInfoSlug,config)
                .then(response => {
                    this.followerInfo = response.data.followerInfo;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        closeLoginModal() {
            this.modalvalue = false;

        },

        login() {

            let phone = this.$refs.phone.value;
            let password = this.$refs.password.value;

            let formData = new FormData();
            formData.append("userName", phone);
            formData.append("password", password);
            this.$http.post('customer/login', formData)
                .then(response => {
                    this.msgFlag = response.data.msgFlag;
                    this.errMsgFlag = response.data.errMsgFlag;
                    this.errMsg = response.data.errMsg;

                    if (response.data.msgFlag) {
                        let customerInfo = response.data.customerInfo;
                        window.localStorage.setItem('customerInfo', JSON.stringify(response.data.customerInfo));
                        window.localStorage.setItem('customerToken', response.data.token);
                        // window.localStorage.setItem('userType',response.data.userType);
                        // this.$store.commit('storeUserToken',response.data.token);

                        this.$store.commit('storeCustomerInfo', response.data.customerInfo);
                        this.$toaster.success(response.data.msg);
                        this.modalvalue = false;


                    }
                    else {
                        window.localStorage.setItem('customerInfo', null);
                        window.localStorage.setItem('customerToken', null);
                        this.$toaster.warning(this.errMsg);
                    }
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        checker(payload) {
            this.checkfail = payload;
        },
        myform() {
            let name = this.$refs.name.$refs.input;
            let email = this.$refs.email.$refs.input;
            let phone = this.$refs.phone.$refs.input;
            const inputArray = [
                name,
                email,
                phone
            ];
            // for (let index = 0; index < inputArray.length; index++) {
            //     const element = inputArray[index];
            //     if (element.value.length < 1) {
            //         element.focus();
            //         break;
            //     }                
            // }
            if (!this.checkfail) {
                console.log(this.loginInfo);
            }
        },

        async submitFollow(customerId, storeId) {

            let formData = new FormData();
            formData.append("customerId", customerId);
            formData.append("shopId", storeId);


            await this.$http
                .post("/customer/follow/store", formData)
                .then((response) => {
                    this.errMsgFlag = response.data.errMsgFlag;
                    this.msgFlag = response.data.msgFlag;
                    this.msg = response.data.msg;
                    this.errMsg = response.data.errMsg;
                    if (this.errMsgFlag == true) this.$toaster.warning(this.errMsg);
                    if (this.msgFlag == true) this.$toaster.success(this.msg);
                    this.getCustomerFollowingInfo();
                })
                .catch((error) => {
                    console.dir(error);
                })
                .finally();

        },

        async unfollow(storeId) {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            let formData = new FormData();

            formData.append("shopId", storeId);


            await this.$http
                .post("/customer/unFollowing/store", formData, config)
                .then((response) => {
                    this.errMsgFlag = response.data.errMsgFlag;
                    this.msgFlag = response.data.msgFlag;
                    this.msg = response.data.msg;
                    this.errMsg = response.data.errMsg;
                    if (this.errMsgFlag == true) this.$toaster.warning(this.errMsg);
                    if (this.msgFlag == true) this.$toaster.success(this.msg);
                    this.getCustomerFollowingInfo();
                })
                .catch((error) => {
                    console.dir(error);
                })
                .finally();

        },

        getDataList(url, param) {

            this.$http.get(url, { params: param })
                .then(response => {
                    // console.log(response.data);
                    if (response.data.msgFlag == true) {
                        this.dataList = response.data.dataList;
                        this.vandorInfo = response.data.vandorInfo;
                       
                      
                    }

                })
                .catch(error => {
                    console.dir(error);
                });

        },
        dataByPaginate(pageIndex) {
            this.numOfDataPage = pageIndex;
            this.showDatas();
        },
        showDatas() {
            this.urlParam = {
                numOfData: this.numOfData,
                slug: this.$route.params.slug,
            };
            this.getDataList(this.dataUrl, this.urlParam);
            // this.getSideProductsAndPopularTags();
        },
     


    }
}
</script>

<style scoped>
/* .product{
    width:225px;
} */
.vendor-shop-header{
    display: flex;
    column-gap: 20px;
}
.store-shop-profile{
    display: flex;
    grid-column-gap: 10px;
}
.store-heading-loyel {
    height: 50px;
    position: static;
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom: 10px;

    background: #1F1F1F;
    margin-top: 1px;

}

.banner {
    height: 110px
}

.caption span {
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border-right: none;
    font-weight: bold;
    color: #fff;
}

/* .caption span:last-child { 
    border-right: 1px solid #ccc;
} */

/* Change background color of tabs on hover */
.caption span:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.caption span.active {
    background-color: #da0a22;
    color: #fff;
    /* border-bottom: 2px solid #fff; */
    cursor: default;
}

@media (min-width: 1540px) {

    .shop-slider {
        width: 1500px;
        align-items: center;

        widows: 1500px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 1500px;
        height: 110px;
        display: flex;
    }

    .banner {


        /* width:1500px; */

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        /* height: 250px; */
        background-repeat: no-repeat;
        /* background-size: 1500px; */

    }

    .slider-heading {
        height: 50px;

        max-width: 1500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        /* border:1px solid rgb(167, 165, 165); */
        margin-bottom: 10px;

        background: #1F1F1F;
        margin-top: 1px;
    }



}

@media (min-width: 1400px) and (max-width: 1539px) {


    .shop-slider {
        width: 1300px;
        align-items: center;

        widows: 1300px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 1300px;
        height: 110px;
        display: flex;
    }

    .banner {

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        /* height: 250px; */
        background-repeat: no-repeat;
        /* background-size: 1500px; */

    }

    .slider-heading {
        height: 50px;

        max-width: 1300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        /* border:1px solid rgb(167, 165, 165); */
        margin-bottom: 10px;

        background: #1F1F1F;
        margin-top: 1px;
    }


}

@media (min-width: 1200px) and (max-width: 1399px) {

    .shop-slider {
        width: 1150px;
        align-items: center;

        widows: 1150px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 1150px;
        height: 110px;
        display: flex;
    }

    .banner {

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        /* height: 250px; */
        background-repeat: no-repeat;
        /* background-size: 1500px; */

    }

    .slider-heading {
        height: 50px;

        max-width: 1150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        /* border:1px solid rgb(167, 165, 165); */
        margin-bottom: 10px;

        background: #1F1F1F;
        margin-top: 1px;
    }

}



@media (min-width: 1000px) and (max-width: 1199px) {

    .shop-slider {
        width: 100%;
        align-items: center;

        widows: 100%;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 100%;
        height: 110px;
        display: flex;
    }

    .banner {


        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        /* height: 250px; */
        background-repeat: no-repeat;
        /* background-size: 1500px; */

    }

    .slider-heading {
        height: 50px;

        max-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        /* border:1px solid rgb(167, 165, 165); */
        margin-bottom: 10px;

        background: #1F1F1F;
        margin-top: 1px;
    }

}



@media (min-width: 1px) and (max-width: 999px) {

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width: 100%;
        height: 110px;

        display: flex;
    }

    .banner {

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        /* height: 250px; */
        background-repeat: no-repeat;
        /* background-size: 1500px; */

    }

   

    .shop-slider {
        width: 100%;
        align-items: center;

        widows: 100%;
    }

    .slider-heading {
        height: 50px;

        max-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        /* border:1px solid rgb(167, 165, 165); */
        margin-bottom: 10px;

        background: #1F1F1F;
        margin-top: 1px;
    }

}


.grid-item {
    width: 30%;
}



.seller-image {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    border: 2px solid #282525;
    ;
}

.shop-image {
    border-radius: 50%;
    height: 90px;
    width: 90px;
    border: 2px solid #282525;

    margin-left: 10px;
}

.caption {
    font-size: 20px;
    font-weight: 700;
}

.col {
    /* -webkit-box-flex: 1; */
    -ms-flex: 1 0 0%;
    /* flex: 0;  */
    margin-left: 5px;
}

.dropdown-select {
    max-width: 190px;
    margin-left: auto;
    margin-right: 200px;
}


.heading {
    width: 95%;
    padding: 8px;
    background: #E1E1E1;
    font-weight: 600;
    font-size: 1.2rem;
}

ul {
    padding: 0;
    list-style: none;
}

ul li {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
}

ul li label {
    cursor: pointer;
}


.padding-shop {
    padding-right: 20px;
    color: rgb(158, 158, 158);
    font-size: 14px;
}

/* .shop-design{
    background: #fff;
} */

.loyel-shop-header-font {
    font-size: 20px;
    font-weight: bold;
    /* margin-left: 20px; */
    color: #222;
}



@media (min-width: 540px) {
    .signup-form {
        width: 500px;
        min-height: 700px;
        background: white;
        padding: 0 10px;
        border: 1px solid #ADADAD;
        border-radius: 15px;
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
}

@media (min-width: 320px) and (max-width: 539px) {
    .signup-form {
        width: 320px;
        min-height: 700px;
        background: white;
        padding: 0 10px;
        border: 1px solid #ADADAD;
        border-radius: 15px;
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
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo-signup {
    position: relative;
}

.tag-line {
    position: absolute;
    bottom: 20px;
    left: 15px;
    color: #8E8E8E;
}

/* heading part css  */

/* form part css  */
.form-part {
    width: 100%;
    height: 40%;
    padding: 10px 0;
}

.already-account {
    text-align: right;
    margin-bottom: 10px;
}

.already-account span {
    color: #DB3022;
    cursor: pointer;
}

.signup-btn {
    background: #DB3022;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
}

.create-not-you {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
}

.create-not-you>* {
    cursor: pointer;
}
.shop-info{
    cursor: pointer;
}
.loyel-vendor-shop{
    margin-top: 30px;
}
</style>