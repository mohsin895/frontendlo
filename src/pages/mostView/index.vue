<template>
    <div class="most-view-page">
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
                <option value="new">New Items</option>
                <option value="old">Old Items</option>
                
                <option value="max">Price - high to low</option>
                <option value="min">Price - low to high</option>
                </select>
            </div>
            <br>
            <div class="slider-heading">
            <div class="caption pointer">
            Most View  Product
            </div>
           
        </div>
        <br>
            <div class="loyel-most-view-and-products-wrapper">
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
    name: 'most-view-page',
    components: {
       
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
     
            sortBy: 'old',
           
            numOfData:44,
            urlParam:{
                numOfData:44,
                slug:this.$route.params.slug,
            },
            dataUrl:'most/view/product',
            totalData:0,
            numberOfDataPage:1,
            lastPage:1,
            dataList:[],
            msg:'most-view-page',
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
                        itemsToShow: 1,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
                    },
                    1200: {
                        itemsToShow:4
                    }
                    ,
                    1540: {
                        itemsToShow:6
                    }
                }
            },
            
         
        }
    },
    beforeMount(){
      
        this.getDataList();
    },
   
    methods: {
     
        getDataList() {
             
              this.$http.get("most/view/product", {
        params: {
            sort_by: this.sortBy,
        },
      })
                .then(response => {
                    // console.log(response.data);
                    if(response.data.msgFlag==true){
                       this.dataList=response.data.dataList; 
                       this.lastPage=this.dataList.last_page;
                       this.totalData=this.dataList.total;
                   
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
       
        updateSelected (newSelected) {
        this.selected = newSelected
        },
    }
}
</script>

<style scoped>

@media (min-width: 1540px) {
   
    .dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:210px;
    width: 1500px;
}
.loyel-most-view-and-products-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    width: 1500px;
    margin-left: 210px;
}
/* .left-category{
    min-width: 175px;
} */
/* .right-products-display {
    max-width: calc(100% - 175px);
} */
.product-slider{
    max-width:1500px;
    margin:auto;
}
.slider-heading{
    height:40px;
    width: 1500px;
    margin-left: 210px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
}
}

@media (min-width: 1200px) and (max-width: 1549px) {

    .dropdown-select {
    max-width:190px;
    margin-left: auto;
    margin-right:210px;
    width: 1055px;
}
.loyel-most-view-and-products-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    width: 1055px;
    margin-left: 180px;
}
/* .left-category{
    min-width: 175px;
} */
/* .right-products-display {
    max-width: calc(100% - 175px);
} */
.product-slider{
    max-width:1055px;
    margin:auto;
}
.slider-heading{
    height:40px;
    width: 1055px;
    margin-left: 210px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
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



</style>