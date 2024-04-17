<template>
    <div class="category-page">
        <div class="loyel-container">
            <div class="banner" >
                <img v-lazy="baseUrl + shockingDeal.shockingDeal_url" alt="shockingDeal.title" class="supper-image"> 

            </div>
            <br>
            <div class="dropdown-select">
                <v-select 
                :options="options"  
                :searchable="false"
                :clearable="false"
                v-model="selected"
                ></v-select>
            </div>
            <br>
            <div class="slider-heading">
            <div class="caption pointer">
                All Product
            </div>
           
        </div>
        <br>
            <div class="category-and-products-wrapper">
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
                            <div class="col mt-2" v-for="(productInfo,productIndex) in dataList.data" :key="productIndex">
                              <div class="product" >
                                    <Card :productInfo="productInfo" />
                                </div>
                            </div>
                        </div>
                        <div class="row col-12  flex-row-reverse mt-4 mb-2">
                              <ul class="pagination pagination-sm">
                                <paginate
                                  :page-count="lastPage"
                                  :click-handler="dataByPaginate"
                                  :page-range="2"
                                  :prev-text="'<'"
                                  :next-text="'>'"
                                  :container-class="'pagination justify-content-end'"
                                  :page-class="'page-item'"
                                  :page-link-class="'page-link'"
                                  :prev-class="'page-item'"
                                  :prev-link-class="'page-link'"
                                  :next-class="'page-item'"
                                  :next-link-class="'page-link'"
                                  :first-last-button="true"
                                  :first-button-text="'<<'"
                                  :last-button-text="'>>'"                                    
                                  >
                                 <span slot="prevContent">Changed previous button</span>
                                  <span slot="nextContent">Changed next button</span>
                                  <span slot="breakViewContent">
                                    <svg width="16" height="4" viewBox="0 0 16 4">
                                      <circle fill="#999999" cx="2" cy="2" r="2" />
                                      <circle fill="#999999" cx="8" cy="2" r="2" />
                                      <circle fill="#999999" cx="14" cy="2" r="2" />
                                    </svg>
                                  </span>
                            </paginate>
                                </ul>
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
export default {
    name: 'category-page',
    components: {
    
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
            baseUrl: this.$baseUrl, 
     
            shockingDeal:null,
            numOfData:44,
            urlParam:{
                numOfData:44,
                slug:this.$route.params.slug,
            },
            dataUrl:'shockingDeal/wise/product',
            totalData:0,
            numberOfDataPage:1,
            lastPage:1,
            dataList:[],
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
        this.getMainCategory();
        this.getDataList(this.dataUrl,this.urlParam);
    },
     watch:{
        $route (to, from){ this.numOfData=44; this.pageIndexReset(); this.showDatas(); }
    },
    methods: {
        getMainCategory(){
            this.$http.get('get/main/category')
             .then(response=>{
                this.categoryList=response.data;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        getDataList(url,param) {
              if (this.numOfDataPage > 0) {
                url = url+"?page=" + this.numOfDataPage;
              }
              this.$http.get(url,{params:param})
                .then(response => {
                    // console.log(response.data);
                    if(response.data.msgFlag==true){
                       this.dataList=response.data.dataList; 
                       this.shockingDeal= response.data.shockingDeal;
                       this.lastPage=this.dataList.last_page;
                       this.totalData=this.dataList.total;
                       this.supper=response.data.supper;
                    }
                    
                })
                .catch(error => {
                  console.dir(error);
                });
                
         },
         dataByPaginate(pageIndex){
            this.numOfDataPage=pageIndex;
            this.showDatas();
        },
        showDatas(){
            this.urlParam={
                numOfData:this.numOfData,
                slug:this.$route.params.slug,
            };
            this.getDataList(this.dataUrl,this.urlParam);
            // this.getSideProductsAndPopularTags();
        },
        pageIndexReset()
        {
          this.numOfDataPage=1;
        },
        gotoCategoryPage(dataInfo){
            this.$router.push({name:'categoryPage',params:{slug:dataInfo.slug.split(' ').join('-')}});
        },
        updateSelected (newSelected) {
        this.selected = newSelected
        },
    }
}
</script>

<style scoped>
@media (min-width: 1540px) {
   
    .category-and-products-wrapper {
   display: flex;
   width: 100%;
   flex-direction: row;
   margin-left: 210px;
   max-width:1500px;
}
.dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:205px;
}
.slider-heading{
   height:40px;
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

    .product-slider{
    margin-left: 210px;
    max-width:1055px;
  
}
.dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:205px;
}
.slider-heading{
   height:40px;
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

.category-and-products-wrapper {
   display: flex;
   width: 100%;
   flex-direction: row;
   margin-left: 180px;
   max-width:1055px;
}

}

.banner.shop-info{
    margin-left: -124px;
    margin-top: 53px;
    font-size: 20px;
    font-weight: 700;
}
.seller-info{
    margin-left:1200px;
    /* border-radius: 50%; */
    margin-top: 165px;
}
.seller-image{
    border-radius: 50%;
    height: 70px;
    width: 70px;
    border: 2px solid #282525;;
}
.shop-image{
    border-radius: 50%;
    height: 90px;
    width: 90px;
    border: 2px solid #282525;;
}

.caption{
    font-size: 20px;
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
/* .dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:15px;
} */
.category-and-products-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
}
/* .left-category{
    min-width: 175px;
} */
/* .right-products-display {
    max-width: calc(100% - 175px);
} */
/* .product-slider{
    max-width:1640px;
    margin:auto;
} */
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
    height:40px;
    max-width:1640px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
} */
.banner{
    display: flex;
    justify-content: center;
    align-items: center;
  
 
    background-repeat: no-repeat;
    background-size: 1640px;
}
.supper-image{
    width: 100%;
    height: 400px;
}
</style>