<template>
    <div class="user-sidebar">

        <div class="mobile-sidebar-wrapper">
            <div class="profile-1">

                <div class="manage-order"> <router-link
                        :to="{ name: 'orderManage', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        Order Manage
                    </router-link></div>
                <div class="message">Message</div>
            </div>
            <div class="profile-1">

                <div class="manage-order"> Manage Address</div>
                <div class="message"> <router-link :to="{ name: 'wishlist' }">
                        Wishlist
                    </router-link></div>
            </div>
            <div class="profile-1">

                <div class="manage-order"> Setting</div>
                <div class="message"> <router-link :to="{ name: 'wishlist' }">
                        Notification
                    </router-link></div>
            </div>
            <div class="profile-1">

                <div class="manage-order"> Change Password</div>
                <div class="message">
                    <router-link
                        :to="{ name: 'changePasswordMobile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                        Change Password
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
            msg: 'sidebar'
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
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: white;
}

.mobile-sidebar-wrapper {
    min-height: 468px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
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
    border-bottom: 1px solid black;
    cursor: pointer;
    text-decoration: none;
    color: black;
}

a.router-link-active,
ul li a:hover,
.signout:hover {
    background: #323232;
    color: white;
}

.profile-1 {
    display: flex;
}

.manage-order {
    width: 50%;
}

.message {
    width: 50%;
}
</style>
