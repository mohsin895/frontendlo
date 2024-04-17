<template>
    <div class="category-page">
        <div class="loyel-container">
            <div class="loyel-container banner" v-bind:style="{ 'background-image': 'url(' +baseUrl + vandorInfo.shop_banner + ')' }">
                <div class="grid-container">
                    <div class="grid-item"></div>
                    <div class="grid-item"><div class="shop-info">
                <img v-lazy="baseUrl + vandorInfo.shop_logo" alt="vandorInfo.shop_name" class="shop-image" >   <br>
                                Shop Name:{{vandorInfo.shop_name}}
                                            </div></div>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                    <div class="grid-item">             
                    <div class="seller-info">
                        <img v-lazy="baseUrl + vandorInfo.seller_info.avatar" alt="vandorInfo.shop_name" class="seller-image">   <br>
                    <span >Owner Name:{{vandorInfo.seller_info.name}}</span>
                    </div></div>
                 </div>
               

                   
            </div>
            <br>
            <div class=" dropdown-select">
                <v-select 
                :options="options"  
                :searchable="false"
                :clearable="false"
                v-model="selected"
                ></v-select>
            </div>
            <br>
            <div class="loyel-container slider-heading">
            <div class="caption pointer">
                All Product
            </div>
           
        </div>
        <br>
            <div class="loyel-container category-and-products-wrapper">
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
                            <div class="col mt-2 mb-3" v-for="(productInfo,productIndex) in dataList.data" :key="productIndex">
                              <div class="product" >
                                    <Card :productInfo="productInfo" />
                                </div>
                            </div>
                        </div>
                        <div class="row col-12  flex-row-reverse mt-2 mb-2">
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
            categoryList:[],
            vandorInfo:null,
            numOfData:44,
            urlParam:{
                numOfData:44,
                slug:this.$route.params.slug,
            },
            dataUrl:'vandor/wise/product',
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
                        itemsToShow:4
                    }
                    ,
                    1400: {
                        itemsToShow:5
                    }
                    ,
                    1540: {
                        itemsToShow:6
                    }
                }
            },
            categories: [
                'All',
                'Electronics',
                'Men',
                'Women',
                'Beauty',
                'Furniture',
                'Corona/Flue Care',
                'Home & Kitchen',
                'Collectibles & Fine Art',
                'Baby',
                'Gift Cards'
            ],
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
                       this.lastPage=this.dataList.last_page;
                       this.totalData=this.dataList.total;
                       this.vandorInfo=response.data.vandorInfo;
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
/* .product{
    width:225px;
} */

@media (min-width: 1540px){
    .category-and-products-wrapper {
        display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: center;
   max-width:1500px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  padding: 10px;
  width:1500px;

display: flex;
}
.banner {
   

   width:1500px;

    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 375px;
    background-repeat: no-repeat;
    background-size: 1500px;
   
}
.slider-heading{
   height:40px;

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

@media (min-width: 1400px) and (max-width: 1539px) {
    .category-and-products-wrapper {
        display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: center;
   max-width:1300px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  padding: 10px;
  width:1300px;

display: flex;
}

.banner {
   

   width:1300px;

    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 375px;
    background-repeat: no-repeat;
    background-size: 1300px;
   
}
.slider-heading{
   height:40px;

   max-width:1300px;
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

@media (min-width: 1200px) and (max-width: 1399px) {
    .category-and-products-wrapper {
        display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: center;
   max-width:1150px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  padding: 10px;
  width:1150px;

display: flex;
}
.banner {
   

   width:1150px;

    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 375px;
    background-repeat: no-repeat;
    background-size: 1150px;
   
}
.slider-heading{
   height:40px;

   max-width:1150px;
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



@media (min-width: 1000px) and (max-width: 1199px) {
    .category-and-products-wrapper {
        display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: center;
   max-width:100%;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  padding: 10px;
  width:100%;

display: flex;
}
.banner {
   

   width:100%;

    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 375px;
    background-repeat: no-repeat;
    background-size: 100%;
   
}
.slider-heading{
   height:40px;

   max-width:100%;
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



@media (min-width: 1px) and (max-width: 999px) {
            .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        /* background-color: #2196F3; */
        padding: 10px;
        width:100%;

        display: flex;
        }

        .banner {
   

   width:100%;

    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 375px;
    background-repeat: no-repeat;
    background-size: 100%;
   
}
    .category-and-products-wrapper {
        display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: center;
   max-width:100%;
}
.slider-heading{
   height:40px;

   max-width:100%;
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


.grid-item{
    width: 30%;
}

/* .grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
} */

/* .banner {
   

   width:1500px;

    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 375px;
    background-repeat: no-repeat;
    background-size: 1500px;
   
} */

/* .banner.shop-info{
    margin-left: -124px;
    margin-top: 53px;
    font-size: 20px;
    font-weight: 700;
} */

.shop-info{
    margin-top: 50px;
}
.seller-info{
    /* margin-left:1100px; */
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

.col {
    /* -webkit-box-flex: 1; */
    -ms-flex: 1 0 0%;
     /* flex: 0;  */
    margin-left: 5px;
}
.dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right: 200px;
}
/* .category-and-products-wrapper {
    display: flex;
    width: 1500px;
    align-items: center;

    flex-direction: row;
} */
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