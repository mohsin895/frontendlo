<template>
    <div class="user-sidebar">
        <div class="sidebar-wrapper">
            <div class="user-sidebar-heading">
                <div class="main-profile">
                    <div class="profile-img">
                        <img :src="baseUrl + dataInfo.avatar" alt="">
                        <div class="Profile-name">
                            {{ dataInfo.name }}
                        </div>
                    </div>

                </div>

            </div>
            <ul>
                <li>
                    <router-link
                        :to="{ name: 'profile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        Profile
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{ name: 'orderManage', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        Order Manage
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{ name: 'manageAddress', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        Manage Address
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'couponCodeList', params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                       Vouchers
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Wishlist' , params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                        Wishlist
                    </router-link>
                </li>
               
                <li>
                    <router-link :to="{ name: 'store', params: { name: $store.state.customerInfo.name.split(' ').join('-') }}">
                        My Favorite Shop
                    </router-link>
                </li>
               
                <!-- <li>
                    <router-link :to="{name:'reviewsList', params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                    My Reviews
                    </router-link>
                </li> -->
                <li>
                    <router-link
                        :to="{ name: 'changePassword', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        Change Password
                    </router-link>
                </li>
              
                <li class="signout" @click="logout()">Sign Out</li>
            </ul>
        </div>
     
    </div>
</template>

<script>
import EventBus from '@/pages/event-bus';
export default {
    data() {
        return {
            msg: 'user-sidebar',
            sellerUrl: this.$sellerUrl,
            dataInfo: null,
            baseUrl: this.$baseUrl,
        }
    },
    mounted() {
   
   EventBus.$on('profile-updated', () => {
    
    this.getUserInfo();
   });

  
   
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
                    if (response.data.msgFlag == true) {
                        this.dataInfo = response.data.customerInfo;
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



.main-profile {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;


}

.Profile-name {
    width: 220px;
}

.profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.user-sidebar-heading {
    text-align: center;
    padding: 5px;
}

.sidebar-wrapper {
    min-height: 468px;
    width: 234px;
    /* border:1px solid rgba(0,0,0,0.2); */
    background: white;
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
    /* border-bottom:1px solid black; */
    cursor: pointer;
    text-decoration: none;
    color: black;
}

a.router-link-active,
ul li a:hover,
.signout:hover {
    background: #c20000;
    color: white;
}</style>
