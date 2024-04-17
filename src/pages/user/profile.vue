<template>
    <div class="profile">
        <div class="mobile-layout">
        
            <router-link :to="{name:'profile',params:{id: $store.state.customerInfo.name}}">
								
                                <img src="@/assets/images/mobile.png" style="width: 40px;height: 15px;">
                                 </router-link><span style="margin-left: 20px; font-size: 20px;font-weight: 900;">Profile</span> 
        </div>
   
        <div class="profile-wrapper">
            <div class="profile-firstPart">
                <!-- <div class="profile-img-ful-part">
                    <div class="profile-img">
                        <img v-lazy="baseUrl + $store.state.customerInfo.avatar" alt="" style="height:150px; width:150px;">
                       
                    </div>
                    <div class="verified">
                     verified profile 
                    </div>
                </div> -->

                <div class="profile-table table-responsive">
                    <div class="profile-info">
                        Profile Information
                    </div>
                    <table class="table-responsive">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{{$store.state.customerInfo.name}}</td>
                                <!-- <td>Last Name</td>
                                <td>Ahamed</td> -->
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td v-if="$store.state.customerInfo.email != NULL">{{$store.state.customerInfo.email}}
                                    <span v-if="$store.state.customerInfo.email_verify == 1">
                                        <img src="@/assets/images/check.png" height="16px"></span>
                                    <span v-else><img src="@/assets/images/cross.png" height="16px"></span>
                                </td>
                                <td v-else></td>
                                <!-- <td>Contact No</td>
                                <td>+8801769367392</td> -->
                            </tr>
                            <tr>
                                <td>Phone</td>

                                <td v-if="$store.state.customerInfo.phone != NULL">{{$store.state.customerInfo.phone}}
                                    <span v-if="$store.state.customerInfo.is_verify == 1">
                                        <img src="@/assets/images/check.png" height="16px"></span>

                                    <span v-else><img src="@/assets/images/cross.png" height="16px"></span>
                                </td>
                                <td v-else></td>
                                <!-- <td>{{$store.state.customerInfo.phone}}<span><img src="@/assets/images/check.png" height="16px"></span></td> -->
                             
                            </tr>
                            <tr>
                                <td>Date Of Birth</td>
                                <td>{{$store.state.customerInfo.dob}}</td>
                                <!-- <td>Country</td>
                                <td>Bangladesh</td> -->
                            </tr>
                            <tr>
                                <td> <router-link
                  :to="{
                    name: 'customerProfileEdit',
                   
                  }"
                  class="btn  btn-sm text-light"
                >
                        <b-icon icon="pencil-square"/>
                    </router-link></td>
                               
                            </tr>
                            <!-- <tr>
                                <td>Default Currency</td>
                                <td>BDT</td>
                                <td>Pakage</td>
                                <td class="platinum-color">Platinum</td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
            <br>
            <br>
            <!-- <div class="profile-secondPart">
                <div class="purchase-head">
                    <p>purchase Summary</p>
                    <div class="hr-box">
                        <div class="hr"></div>
                    </div>
                    <p>purchase Summary</p>
                </div>
                <br>
                <div class="two-box">
              
                    <div class="box-one">
                        <p>Total Purchase : ৳ {{purchaseHistory.totalPurchase}}</p>
                        <p>Last 7 Days : ৳ {{purchaseHistory.last7Days}}</p>
                        <p>Last 30 Days : ৳ {{purchaseHistory.last30Days}}</p>
                    </div>
                    <div class="box-two">
                        <p>Wished Purchase : 12</p>
                        <p>User Since : {{$store.state.customerInfo.created_at |formatDateWithDay}}</p>
                        <p>Last Login : {{$store.state.customerInfo.last_login |formatDateWithDay}}</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>

export default {
    name: 'profile',
    data() {
        return {
            msg:'profile',
            purchaseHistory:[],
            baseUrl:this.$baseUrl,
        }
    },
    mounted(){
        this.getCustomerPurchaseHistory();
    },
    methods:{
        getCustomerPurchaseHistory(){
             let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };

                this.$http.get('/customer/get/purchase/history',config)
                 .then(response=>{
                    if(response.data.msgFlag==true){
                        this.purchaseHistory=response.data.purchaseHistory;
                    }
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        }
    }
}
</script>


<style scoped>


.mobile-layout{
    margin-bottom: 48px;
    /* box-shadow: 5px 10px 8px 10px; */
}



@media (min-width: 480px){
    .profile-firstPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.profile-table {
    width: calc(97% - 180px);
}

.profile-img {
    width: 180px;
    min-height: 225px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

}



@media (min-width: 768px){
    .mobile-layout{
        display: none;
    }

    .two-box {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;

}
.box-one,
.box-two {
    width: 350px;
    height: 180px;
    /* border: 2px solid #989898; */
    padding: 35px;
    font-size: 1.03rem;
}
.box-one {
    text-align: left;
}
.box-two {
    text-align: right;
}

}



.profile-img img {
    width: 150px;
    padding: 20px 0;
}

.verified-status {
    color: red;
    margin: 5px auto;
    text-align: center;
    cursor: pointer;
}
.verified {
    padding: 2px 5px;
    color: white;
    font-size: 0.8rem;
    background: #00C708;
    border-radius: 6px;
    margin: 5px auto;
    text-align: center;
}
/* profile image css */


/* profile info  */

.profile-info {
    width: 100%;
    height: 50px;
    /* border: 1px solid #999999; */
    display: flex;
    background: white;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
}
/* table {
    width: 100%;
} */
table tr td:nth-child(1),
table tr td:nth-child(3) {
    font-weight: bold;
}
table tr td:nth-child(2),
table tr td:nth-child(4) {
    /* color: #020202; */
}
table tr {
    /* border-bottom: 1px solid #999999; */
}
table tr td {
    padding: 5px 0;
}
.platinum-color {
    color: #00A64C;
}
/* profile info */

/* purchase head css  */
.purchase-head {
    display: flex;
    width: 80%;
    margin: auto;
    grid-column-gap: 30px;
    font-size: 1.2rem;
}
.purchase-head p {
    margin: 0;
    padding: 0;
}
.hr-box {
    display: flex;
    height: auto;
    align-items: center;
}
.hr {
    width: 300px;
    /* border-bottom: 2px solid #989898; */
}
.profile-table {
    width: 100%;
    background: #fff;
    padding: 24px;
    margin-left: 20px;
}
.btn-sm{
    background: #232f3e;
    /* border: 1px solid #232f3e; */
}
</style>