<template>
    <div class="user-sidebar">
        <div class="profile-img-mobile">
            <img v-lazy="baseUrl + dataInfo.avatar" alt=""
                style="height:80px; width:80px; border-radius:50%;border:1px solid;"><br>
            <span>{{ $store.state.customerInfo.name }}</span>
            <span><router-link :to="{
                name: 'customerProfileEdit',

            }"> <img src="@/assets/images/profile.png" style="width:20px" /></router-link></span>
            <br>
            <span>{{ $store.state.customerInfo.phone }}</span>

        </div>

        <div class="mobile-sidebar-wrapper">

            <div class="profile-1">

                <div class="manage-order">
                    <router-link
                        :to="{ name: 'orderManage', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        <div class="wrapper">
                            <div class="pic"><img src="@/assets/images/order.png" style="padding-left:20px;width:40px" /></div>
                            <p class="header">
                                Order Manage
                            </p>


                        </div>



                    </router-link>



                </div>
                <div class="message">
                    <div class="wrapper">
                        <div class="pic"><img src="@/assets/images/message.png" style="padding-left:20px;width:40px" /></div>
                        <p class="header">
                            Message
                        </p>


                    </div>

                </div>
            </div>
            <div class="profile-1">

                <div class="manage-order"><router-link
                        :to="{ name: 'manageAddress', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">

                        <div class="wrapper">
                            <div class="pic"><img src="@/assets/images/address.png" style="padding-left:20px;width:40px" /></div>
                            <p class="header">
                                Manage Address
                            </p>


                        </div>

                    </router-link>
                </div>
                <div class="message"> <router-link :to="{ name: 'wishlist', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        <div class="wrapper">
                            <div class="pic"><img src="@/assets/images/wishlist.png" style="padding-left:20px;width:40px" /></div>
                            <p class="header">
                                WishList
                            </p>


                        </div>
                    </router-link></div>
            </div>
            <div class="profile-1">

                <div class="manage-order">
                    <div class="wrapper">
                        <div class="pic"><img src="@/assets/images/setting.png" style="padding-left:20px;width:40px" /></div>
                        <p class="header">
                            Setting
                        </p>


                    </div>
                </div>
                <div class="message"> <router-link :to="{ name: 'Wishlist' , params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                        <div class="wrapper">
                            <div class="pic"><img src="@/assets/images/notification.png" style="padding-left:20px;width:40px" /></div>
                            <p class="header">
                                Notification
                            </p>


                        </div>
                    </router-link></div>
            </div>
            <div class="profile-1">

                <div class="manage-order" @click="logout()">
                    <div class="wrapper">
                        <div class="pic"><img src="@/assets/images/logout.png" style="padding-left:20px;width:40px" /></div>
                        <p class="header">
                            Sign Out
                        </p>


                    </div>
                </div>
                <div class="message">
                    <router-link
                        :to="{ name: 'changePasswordMobile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        <div class="wrapper">
                            <div class="pic"><img src="@/assets/images/password.png" style="padding-left:20px;width:40px" /></div>
                            <p class="header">
                                Change Password
                            </p>


                        </div>
                    </router-link>

                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            msg: 'sidebar',
            purchaseHistory: [],
            dataInfo:[],
            baseUrl: this.$baseUrl,
        }
    },
    beforeMount() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {

            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            // let formData=new FormData();
            this.$http.get('/customer/get/info', config)
                .then(response => {
                    this.dataInfo = response.data.userInfo;
                    if (response.data.msgFlag == true) {
                        window.localStorage.setItem('customerInfo', JSON.stringify(response.data.customerInfo));
                        this.$store.commit('storeCustomerInfo', response.data.customerInfo);
                    }
                    else {
                        window.localStorage.setItem('customerInfo', null);
                        window.localStorage.setItem('customerToken', null);
                    }
                })
                .catch(error => { console.dir(error); this.$router.push({ name: 'login' }); })
                .finally();
        },
        async logout() {

            await this.$http.get('/customer/logout')
                .then(response => {
                    this.$toaster.success(response.data.msg);
                    window.localStorage.setItem('customerInfo', null);
                    window.localStorage.setItem('customerToken', null);
                    this.$store.commit('storeCustomerInfo', null);
                    this.$router.push({ name: 'heropage' });

                })
                .catch(error => { console.dir(error) })
                .finally();

        }
    }
}
</script>

<style scoped>
@media (min-width: 1px) and (max-width: 767px) {
    .sidebar-wrapper {
        display: none;
    }

}

@media (min-width: 768px) {
    .mobile-sidebar-wrapper {
        display: none;
    }

}

.user-sidebar-heading {
    text-align: center;
    padding: 5px;
}

.sidebar-wrapper {
    min-height: 468px;
    width: 234px;

    background: white;
}

.mobile-sidebar-wrapper {
    min-height: 320px;
    width: 100%;
    margin-top: 10px;
    background: #f4f4f4;
}

ul {
    list-style: none;
    padding: 0;
}

ul li a,
.signout {
    display: block;
    padding: 10px;
    font-size: 1rem;
    border-bottom: 1px solid black;
    cursor: pointer;
    text-decoration: none;
    color: black;
}

a.router-link-active,
ul li a:hover,
.signout:hover {
    /* background: #323232; */
    color: rgb(13, 12, 12);
}

.profile-1 {
    display: flex;
}

.manage-order {
    width: 50%;
    min-height: 30px;

    font-size: 20px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-left: 5px;

}

.message {
    width: 50%;
    min-height: 30px;

    font-size: 20px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-left: 5px;

}

.profile-img-mobile {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 5px;

}

.wrapper {
    /* border-radius: 5px; */
    display: inline-block;
     background: #fff; 
    position: relative;
    height: auto;
    border-radius: 7px;
    overflow: hidden;
    /* box-shadow: 10px 10px 25px #999; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 100%
}

.pic {

    background-size: 400px;
    background-position: center;
    /* padding: 0 0 20px 0;
    margin-bottom: 15px; */
}

.wrapper:hover .pic,
.wrapper:focus .pic {
    transform: scale(1.2);
}

p.header {
    padding: 0 20px;
    font-size: 12px;
    /* font-weight: bold;
    font-style: italic; */
    color:#080808
}

p.content {
    padding: 0 20px;
    font-size: 12px;
    text-align: justify;
}

a .readmore {
    height: 40px;
    width: 100px;
    float: right;
    padding-left: 10px;
    line-height: 40px;
    background-color: #8bc34a;
    margin: 20px;
    font-size: 12px;
    border-radius: 5px;
}

a .readmore:hover {
    background-color: #9fdf55;
}

a .readmore i {
    color: #fff;
    margin-left: 5px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
}

a .readmore:hover i {
    margin: 0 0 0 20px;
}




.button-center {
    background-color: #8bc34a;
    margin-top: 20px;
}

a .leesmeer {
    height: 40px;
    width: 110px;
    padding-left: 10px;
    line-height: 40px;
    margin: 0 auto;
    font-size: 15px;
    border-radius: 5px;
}

a .button-center:hover {
    background-color: #9fdf55;
}

a .button-center i {
    color: #fff;
    margin-left: 5px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
}

a .button-center:hover i {
    margin: 0 0 0 20px;
}</style>
