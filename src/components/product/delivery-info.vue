<template>
    <div class="delivery-info">
        <div class="first-part">
            <h6>
                <b-icon icon="truck"/>
                <span> Delivery Information</span>
            </h6>
            <div class="delivery-location">
                <div>Delivered within 3-7 working days</div>
                <!-- <div>
                    <span>Savar, Dhaka </span>
                    <button class="change-btn">CHANGE</button>
                </div> -->
                <div>Delivery Charges may apply</div>
                <div> 100% payment protection</div>
            </div>
        </div>
        <hr>
        <div class="second-part">
            <div class="left">
                <div class="icons">
                    <div class="icon-one">
                        <!-- <icon name="ambulance"/> -->
                    </div>
                    <div class="icon-second">
                        <icon name="money-bill"/>
                    </div>
                </div>
                <div class="details">
                    <div class="home-delivery">
                        <h6>Standard Delivery</h6>
                        <div class="recap">3-5 days delivered</div>
                    </div>
                    <div class="cash-delivery">
                        <h6>Cash on delivery available</h6>
                    </div>
                </div>
            </div>
            <div class="right">
                ৳  {{$store.state.productInfos.delivery_charge.interCityDeliveryCharge}}(Inter dhaka City ) <br>
                ৳  {{$store.state.productInfos.delivery_charge.outCityDeliveryCharge}}(Out dhaka City)
            </div>
        </div>
        <hr>
        <div class="third-part">
            <label for="">Return & Warranty</label>
            <div class="seven-days">
                <div class="icon">
                    <!-- <icon name="undo-alt"/> -->
                </div>
                <div class="text">
                    <div class="main-text">
                       {{$store.state.productInfos.warranty_period}}
                    </div>
                    <div class="slog-text">
                        Terms and Condition
                    </div>
                </div>
            </div>
            <div class="warranty-status">
                <div class="icon">
                    <!-- <icon name="shield-alt"/> -->
                </div>
                <div class="text">
                    <div class="main-text">
                        Warranty Status
                    </div>
                  
                    <div class="slog-text" v-if="$store.state.productInfos.warranty_type==0">
                        No Warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type==1">
                        International Manufacturer Warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type==2">
                        Non-local warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type==3">
                        Local Seller Warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type==4">
                        International seller warranty
                    </div>
                </div>
            </div>
        </div>
        
        <div class="third-part-space">
           
        </div>

        <div class="third-part">
            <label for="">Sold by</label>
           <p style="font-size:16px;color:black">{{$store.state.productInfos.shop_info.shop_name}}</p> 
            <div class="seven-days">
                <div class="icon">
                    <!-- <icon name="undo-alt"/> -->
                </div>
                <div class="text">
                    <div class="seller-status">
                        <b-row class="middle-row">
                    <b-col md="4" class="seller-all">
                        Positive Seller Ratings
                    </b-col>
                    <b-col md="4" class="seller-all">
                        Ship on Time
                    </b-col>
                    <b-col md="4" class="seller-all">
                        Chat Response Rate
                    </b-col>
                </b-row>
                    </div>
                 
                </div>
            </div>
            <div class="visit-store" >
              
             
          
     <h2 >  <router-link class="name" :to="{name:'shop',params:{slug:$store.state.productInfos.shop_info.slug}}" > visit store</router-link></h2>
                 
                 
              
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props:{
      
      productInfo: {
    type: Object,
    default: () => ({}), 
    required: true
  }
  },
    
    data() {
        return {
        

        }
    },
    beforeMount(){

  },

    methods: {
      
    
    }
}
</script>

<style scoped>
.first-part,
.second-part,
.third-part {
    padding: 0 10px 20px;
}
.third-part-space{
    height: 20px;
    background-color: #fff;
}
h6 .b-icon {
    font-size: 25px;
}
.delivery-location {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.delivery-location > :nth-child(2) span {
    font-weight: 500;
}
.change-btn {
    border: none;
    background: transparent;
    color: #4ED77D;
}



.second-part {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
}
.left {
    display: flex;
    grid-column-gap: 5px;
}
.details,
.icons {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.recap {
    font-size: 12px;
    margin-top: -7px;
}
.right {
    color: #4ED77D;
}

.seven-days,
.warranty-status {
    display: flex;
    margin-top: 10px;
    grid-column-gap: 10px;
}
.visit-store{
    text-align: center;
    font-size: 20px;
    margin-top: 10px;

}

.main-text {
    font-weight: 500;
    font-size: 1.3rem;
}
.seller-status{
    font-size: 15px;
}

.slog-text {
    font-size: 0.9rem;
}
.seller-all{
    border:1px solid #eff0f5
}

a{
    font-size: 20px;
}
</style>