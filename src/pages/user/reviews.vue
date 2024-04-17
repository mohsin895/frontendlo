<template>
    <div class="customer-review">
        <div class="customer-review-wrapper mb-3" v-for="(dataInfo,index) in dataList" :key="index">
            <div class="header">
                <div class="details">
                    Order Details
                </div>
                <div class="details-edit pointer">
                    <b-icon icon="pencil-square"/>
                </div>
            </div>
            <hr>
            <div class="bnk-inner-part">
                <b-row cols="1" cols-md="2" cols-lg="2">
                    <b-col>
                        <p>Order ID: {{dataInfo.item_info.rand_order_id}}</p>
                        <p>Order Date: {{dataInfo.item_info.created_at | formatDateWithDay}}</p>
                        <p>Order Amount: 12564</p>
                    </b-col>
                    <b-col>
                        <p>Product Name:{{dataInfo.product_info.name}} </p>
                        <p>Product Color:{{dataInfo.stock_info.color_info.color}}</p>
                        <p>Product Size:  {{dataInfo.stock_info.size_info.size}}({{dataInfo.stock_info.size_variant_info.attribute}})</p>
                    </b-col>
                   
                </b-row>
            </div>
            <br>
            <div class="header">
                <div class="details">
                   Review Details
                </div>
              
            </div>
            <hr>
            <br>
            <b-row cols="1" cols-md="2" cols-lg="3">
                <b-col>
                    <span>Product Review</span>
                    <p>Rating: <span class="name-span">
                        <div class="first-step">
                            <div class="reting" v-if="dataInfo.rating==5" >
                                <Rating 
                                size="15px"
                                :value="5"
                                />
                              
                            </div>
                            <div class="reting" v-else-if="dataInfo.rating==4" >
                                <Rating 
                                size="15px"
                                :value="4"
                                />
                               
                            </div>
                            <div class="reting" v-else-if="dataInfo.rating==3" >
                                <Rating 
                                size="15px"
                                :value="3"
                                />
                              
                            </div>
                            <div class="reting" v-else-if="dataInfo.rating==2" >
                                <Rating 
                                size="15px"
                                :value="2"
                                />
                               
                            </div>
                             <div class="reting" v-if="dataInfo.rating==1" >
                                <Rating 
                                size="15px"
                                :value="1"
                                />
                            
                              
                            </div>
                          
                        </div>
                    </span></p>
                    <p>Description: <span class="number-span">    <p v-html="dataInfo.description"></p></span></p>
                    <p>Images: <span class="number-span">0177508266</span></p>
                </b-col>     
                <b-col>
                    <span>Seller Review</span>
                    <p>Rating: <span class="name-span">Anower Hossen</span></p>
                    <p>Description: <span class="number-span"> <p v-html="dataInfo.	seller_description"></p></span></p>
                  
                </b-col>  
                <b-col>
                    <span>Rider Review</span>
                    <p>Rating: <span class="name-span">Anower Hossen</span></p>
                    <p>Description: <span class="number-span"> <p v-html="dataInfo.rider_description"></p></span></p>
                </b-col>       
            </b-row>
        </div>
    </div>
</template>

<script>
import Rating from '@/components/product/rating-view'
export default {
    name: 'myBank',
    components: {
        Rating,
       
    },
    data() {
        return {
            msg: 'invoice',
       
            dataList: '',
            baseUrl: this.$baseUrl,
           
           
        }
    },
    beforeMount() {
        this.loadDataInfo();

    },
    methods: {

        async loadDataInfo() {
            let token = window.localStorage.getItem("customerToken");
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            };
            await this.$http
                .get("/customer/get/review/info", config)
                .then((response) => {
                    if (response.data.msgFlag == true) {
                        // console.log(response.data);
                        this. dataList = response.data.dataList;
            
                      
                    }
                })
                .catch((error) => {
                    console.dir(error);
                })
                .finally();
        },
      

    }
}
</script>


<style scoped>
.rating-number > :nth-child(1) {
    font-size: 3rem;
    color: black;
}
.customer-review-wrapper {
    width: 100%;
    min-height: 400px;
    background: white;
    padding: 20px;    
}

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
</style>