<template>
    <div class="loyel-flash-sale-page">
        <div class="loyel-container">
            <!-- <div class="banner">
                <slot v-if="categoryInfo!=null">
                    <slot v-if="categoryInfo!=null">
                        <Banner :imageName="categoryInfo.category_image.base_url+categoryInfo.category_image.category_image" :title="categoryInfo.title"/>
                    </slot>
                </slot>   
            </div> -->
            <br>
            <!-- <div class="dropdown-select">
                <v-select 
                :options="options"  
                :searchable="false"
                :clearable="false"
                v-model="selected"
                ></v-select>
            </div> -->
            <br>
            <div class="slider-heading">
            <div class="caption pointer">
            <span style="color:#fb5858">On Sale Now</span>  Ends in: <span style="    border-radius: 2px;
                    font-weight: 500;
                    margin: 12px 6px;
                    font-size: 30px;
                    color: #fff;
                    background-color: #fb5858;
                    text-align: center;
                    width: 80px;
                    height: 35px;
                    line-height: 35px;">{{ countdownDays }}</span>:<span style="    border-radius: 2px;
                    font-weight: 500;
                    margin: 12px 6px;
                    font-size: 30px;
                    color: #fff;
                    background-color: #fb5858;
                    text-align: center;
                    width: 80px;
                    height: 35px;
                    line-height: 35px;">{{ countdownHours }}</span>:<span style="    border-radius: 2px;
                    font-weight: 500;
                    margin: 12px 6px;
                    font-size: 30px;
                    color: #fff;
                    background-color: #fb5858;
                    text-align: center;
                    width: 80px;
                    height: 35px;
                    line-height: 35px;">{{ countdownMinutes }}</span>:<span style="    border-radius: 2px;
                    font-weight: 500;
                    margin: 12px 6px;
                    font-size: 30px;
                    color: #fff;
                    background-color: #fb5858;
                    text-align: center;
                    width: 80px;
                    height: 35px;
                    line-height: 35px;">{{ countdownSeconds }} </span>
            </div>
           
        </div>
        <br>
            <div class="loyel-flash-sale-and-products-wrapper">
                <!-- <div class="left-category">
                    <div class="cateogry">
                        <div class="heading">Categories</div>

                        <ul>
                            <li v-for="categoryInfo,index in categoryList" :key="index">
                                <input type="checkbox" :id="'id'+index" @click="gotoCategoryPage(categoryInfo)" name="cateogry[1][]">
                                <label :for="'id'+index">{{categoryInfo.title}}</label>
                            </li>
                        </ul>
                    </div>
                </div> -->
              
                <div class="right-products-display">
                    <div class="product-slider">
                         <div class="row">
                            <div class="col mt-2 mb-3" v-for="(productInfo,productIndex) in dataList" :key="productIndex">
                              <div class="product" >
                                    <Card :productInfo="productInfo" />
                                </div>
                            </div>
                        </div>
                                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import Card from '@/components/slider/productCard'
import moment from 'moment';
export default {
    name: 'loyel-flash-sale-page',
    components: {
       
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },

    metaInfo: {
    title: 'Flash Sale Product!',
    titleTemplate: 'Loyel.com.bd | %s ',
   
  },
    data() {
        return {
           
            numOfData:200,
            dataUrl:'todayDeal/wise/product',
            totalData:0,
            numberOfDataPage:1,
            lastPage:1,
            endTimeDate:'',
            dataList:[],
            countdownDays:'',
            countdownHours:'',
            countdownMinutes:'',
            countdownSeconds:'',
            deadline: '2023-4-15 23:59:59',
            countdown: '',
            msg:'category-page',
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    380: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 4,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 5
                    },
                    1200: {
                        itemsToShow: 6
                    }
                }
            },
          
            options: [
            'New items',
            'Price - high to low',
            'Price - low to high',
            'Old items'
            ],
            selected: 'Price - high to low'
        }
    },
    beforeMount(){
      
      this.getDataList();
      this.getFlashSaleTime();
  },
   
   
    mounted() {
  setInterval(() => {
    const now = new Date().getTime()
    const endDate = new Date(this.endTimeDate).getTime()
    const remainingTime = endDate - now
    if(endDate >now){
        this.countdownDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    this.countdownHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    this.countdownMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    this.countdownSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
       
        
    }else if(endDate >now){
        this.countdownDays=0
        this.countdownHours=0
        this.countdownMinutes=0
        this.countdownSeconds=0

    }else{
        this.countdownDays=0
        this.countdownHours=0
        this.countdownMinutes=0
        this.countdownSeconds=0
 

    }
   
  }, 1000)
},
    methods: {
        getFlashSaleTime() {
             
             this.$http.get("flashSale/time")
               .then(response => {
                   
                      this.endTimeDate=response.data.endTimeDate; 
                   
                
                
                   
               })
               .catch(error => {
                 console.dir(error);
               });
               
        },
      
       
        getDataList() {
             
              this.$http.get("flashSale/product")
                .then(response => {
                   
                       this.dataList=response.data; 
                      
                    
                })
                .catch(error => {
                  console.dir(error);
                });
                
         },
         dataByPaginate(pageIndex){
            this.pageNo = pageIndex;
            this.getDataList();
        },
     
      
    }
}
</script>

<style scoped>

@media (min-width: 1540px) {
   
   .loyel-flash-sale-and-products-wrapper {
   display: flex;
   width: 100%;
   flex-direction: row;
   margin-left: 210px;
   max-width:1500px;
}
.slider-heading{
   height:80px;
   margin-left: 180px;
   max-width:1500px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin:auto;
   border:1px solid rgb(167, 165, 165);
   margin-bottom:10px;
   padding:0 10px;
   background: white;
   margin-top: 20px;
}
}

@media (min-width: 1200px) and (max-width: 1549px) {

   .loyel-flash-sale-and-products-wrapper {
   display: flex;
   width: 100%;
   flex-direction: row;
   margin-left: 180px;
   max-width:1055px;
}

.slider-heading{
   height:80px;
   margin-left: 180px;
   max-width:1055px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin:auto;
   border:1px solid rgb(167, 165, 165);
   margin-bottom:10px;
   padding:0 10px;
   background: white;
   margin-top: 20px;
}
}
.caption{
    font-size: 15px;
    font-weight: 700;
}
.banner {
    margin: 20px 0;
}
.col {
    /* -webkit-box-flex: 1; */
    -ms-flex: 1 0 0%;
     flex: 0; 
    margin-left: 10px;
}
.dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:210px;
    width: 1500px;
}
/* .loyel-flash-sale-and-products-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-left: 210px;
    max-width:1500px;
} */
/* .left-category{
    min-width: 175px;
} */
/* .right-products-display {
    max-width: calc(100% - 175px);
} */
.product-slider{
    margin-left: 210px;
    max-width:1500px;
    margin:auto;
}
.heading {
    width: 95%;
    padding: 8px;
    background: #E1E1E1;
    font-weight: 600;
    font-size: 1.2rem;
}
ul {
    padding:0;
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

/* .slider-heading{
    height:80px;
    margin-left: 210px;
    max-width:1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
} */

</style>