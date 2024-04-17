<template>
    <div class="loyel-latest-product">
        <div class="loyel-container">
            <!-- <div class="banner">
                <slot v-if="categoryInfo!=null">
                    <slot v-if="categoryInfo!=null">
                        <Banner :imageName="categoryInfo.category_image.base_url+categoryInfo.category_image.category_image" :title="categoryInfo.title"/>
                    </slot>
                </slot>   
            </div> -->
            <br>
            <div class="dropdown-select">
                <select v-model="sortBy" @change="getDataList()">
                <option value="old">Old Items</option>
                <option value="new">New Items</option>
                <option value="max">Max Price</option>
                <option value="min">Min Price</option>
                </select>
            </div>
            <br>
            <div class="slider-heading">
            <div class="caption pointer">
             Latest Products
            </div>
           
        </div>
        <br>
            <div class="loyel-latest-page-and-products-wrapper">
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
    name: 'loyel-latest-product',
    components: {

        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
            categoryList:[],
            categoryInfo:null,
            numOfData:48,
         
               
            dataUrl:'latest/product',
            totalData:0,
            numberOfDataPage:1,
            lastPage:1,
            dataList:[],
            msg:'loyel-latest-product',
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
    },
    
    methods: {
     
        getDataList() {
            
          this.$http.get("latest/product?page="+this.pageNo+"&numOfData="+this.numOfData, {
        params: {
            sort_by: this.sortBy,
        },
      })
                .then(response => {
                    if(response.data.msgFlag==true){
                       this.dataList=response.data.dataList; 
                       this.lastPage=this.dataList.last_page;
                      
                     
                    }
                    
                })
                .catch(error => {
                  console.dir(error);
                });
                
         },
         dataByPaginate(pageIndex){
            this.pageNo = pageIndex;
            this.getDataList();
        },
      
        pageIndexReset()
        {
          this.numOfDataPage=1;
        },
    
      
    }
}
</script>

<style scoped>

@media (min-width: 1540px) {
   
   .loyel-latest-page-and-products-wrapper {
   display: flex;
   width: 100%;
   flex-direction: row;
   margin-left: 210px;
   max-width:1500px;
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

@media (min-width: 1200px) and (max-width: 1539px) {

   .loyel-latest-page-and-products-wrapper {
   display: flex;
   width: 100%;
   flex-direction: row;
   margin-left: 180px;
   max-width:1155px;
}

.slider-heading{
   height:40px;
   margin-left: 180px;
   max-width:1155px;
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
.dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:210px;
    width: 1500px;
}
.loyel-latest-page-and-products-wrapper {
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
.flex-row-reverse{
    margin-left: 10px;
}

</style>