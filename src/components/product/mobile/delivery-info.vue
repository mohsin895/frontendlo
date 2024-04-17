<template>
    <div class="delivery-info">
        <div class="first-part">
            <span>
                <b-icon icon="truck" />
                <span> Delivery Information</span>
            </span>
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

        <div class="second-part">
            <div class="left">
                <div class="icons">
                    <div class="icon-one">
                        <!-- <icon name="ambulance" /> -->
                    </div>
                    <div class="icon-second">
                        <icon name="money-bill" />
                    </div>
                </div>
                <div class="details">
                    <div class="home-delivery">
                        <span>Standard Delivery</span>
                        <div class="recap">3-5 days delivered</div>
                    </div>
                    <div class="cash-delivery">
                        <span>Cash on delivery available</span>
                    </div>
                </div>
            </div>
            <div class="right">
                ৳ {{ $store.state.productInfos.delivery_charge.interCityDeliveryCharge }}(Inter dhaka City)<br>
                ৳ {{ $store.state.productInfos.delivery_charge.outCityDeliveryCharge }}(Out dhaka City)
            </div>
        </div>

        <div class="third-part">
            <label for="">Return & Warranty</label>
            <div class="seven-days">
                <div class="icon">
                    <!-- <icon name="undo-alt" /> -->
                </div>
                <div class="text">
                    <div class="main-text">
                        {{ $store.state.productInfos.warranty_period }}
                    </div>
                    <div class="slog-text">
                        Terms and Condition
                    </div>
                </div>
            </div>
            <div class="warranty-status">
                <div class="icon">
                    <!-- <icon name="shield-alt" /> -->
                </div>
                <div class="text">
                    <div class="main-text">
                        Warranty Status
                    </div>

                    <div class="slog-text" v-if="$store.state.productInfos.warranty_type == 0">
                        No Warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type == 1">
                        International Manufacturer Warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type == 2">
                        Non-local warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type == 3">
                        Local Seller Warranty
                    </div>
                    <div class="slog-text" v-else-if="$store.state.productInfos.warranty_type == 4">
                        International seller warranty
                    </div>
                </div>
            </div>
        </div>


        <div class="fourth-part">
            <div class="delivery-info-mobile">
                <div class="delivery-info-left">
                    <div class="mobile-store-image">
                        <img v-lazy="baseUrl + $store.state.productInfos.shop_info.shop_logo" alt="vandorInfo.shop_name" class="shop-image">
                    </div>
                    <div class="mobile-store-name">
                        <p style="font-size:16px;color:black;margin-left: 10px;margin-top: 10px;">{{
                            $store.state.productInfos.shop_info.shop_name }}</p>
                    </div>

                </div>
                <div class="delivery-info-right">
                    (0)

                </div>

            </div>

                <div class="middle-row mt-2">
                    <div class="seller-all">
                        Positive Seller Ratings
                    </div>
                    <div class="seller-all">
                        Ship on Time
                    </div>
                    <div class="seller-all">
                        Chat Response Rate
                    </div>
                </div>

            <div class="store-mobile mt-2">
                <div class="follow-store-mobile">
                    <span>follow</span>

                </div>
                <div class="visit-store-mobile">
                    <router-link class="name" :to="{ name: 'shop', params: { slug: $store.state.productInfos.shop_info.slug } }"> visit store</router-link>

                </div>







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
          
          
            baseUrl: this.$baseUrl,
            

        }
    },
    beforeMount() {
     

    },
 
    methods: {


      
    }
}
</script>

<style scoped>
.middle-row {
    display: flex;
    justify-content: space-between;
}

.shop-image {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 2px solid #282525;


}

.first-part,
.second-part,
.third-part,
.fourth-part {
    padding: 0 10px 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
}

.third-part-space {
    height: 20px;
    background-color: #fff;
}

.first-aprt {
    font-size: 0.8rem;
}

h6 .b-icon {
    font-size: 25px;
}

.delivery-location {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.delivery-location> :nth-child(2) span {
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
    font-size: 0.8rem;
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

.visit-store-mobile {
    text-align: center;
    font-size: 20px;


}

.main-text {
    font-weight: 500;
    font-size: 1.3rem;
}

.seller-status {
    font-size: 15px;
}

.slog-text {
    font-size: 0.9rem;
}

.seller-all {
    border: 1px solid #eff0f5
}

a {
    font-size: 15px;
}

.delivery-info-mobile {
    display: flex;
    justify-content: space-between;

}

.delivery-info-left {
    display: flex;

}

.store-mobile {
    display: flex;
    justify-content: space-around;
}
</style>