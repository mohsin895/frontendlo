<template>
    <div>
        <!-- <pre>{{categoryList}}</pre> -->
        <div class="tab-product-slider" v-for="(categoryInfo,categoryIndex) in dualCategoryList" :key="categoryIndex">
            <div class="tab-slider">
                <div class="loyel-container slider-heading">
                    <div class="caption pointer">
                        <div class="tabs">
                            <ul>
                                <li ref="tabUl" class="isActive" :id="'category_id_'+categoryInfo.id" v-on:click="tabChange(categoryInfo.id,1)">
                                    {{categoryInfo.title}}
                                </li>
                            <slot v-if="categoryInfo.single_sub_category!=null">
                                <li ref="tabUl" :id="'subCategory_id_'+categoryInfo.id" v-on:click="tabChange(categoryInfo.id,2)" class="responsive-design">
                                    {{categoryInfo.single_sub_category.title}}
                                </li>
                            </slot>
                            </ul>
                        </div>
                    </div>
                    <div class="seeall-btn pointer" @click="gotoCategoryPage(categoryInfo)">
                        View more
                        <span class="see-all-span"> 
                            <img src="@/assets/images/arrow-blue.png" alt="">
                        </span>
                    </div>
                </div>

                <hooper  :settings="hooperSettings" :play-speed="5000">
                <slot v-if="categoryInfo.category_products.length>0">  
                    <slide v-for="(productInfo,productIndx) in categoryInfo.category_products" :key="productIndx" :class="'category_product_'+categoryInfo.id">
                        <div class="product" style="background-color: #fff; margin-right: 10px;">
                            <Card :productInfo="productInfo"/>
                        </div>
                    </slide>
                </slot>
                <slot v-if="categoryInfo.single_sub_category!=null">  
                    <slot v-if="categoryInfo.single_sub_category.sub_category_products.length>0">  
                        <slide v-for="(productInfo,productIndx) in categoryInfo.single_sub_category.sub_category_products" :key="productIndx" :class="'subCategory_product_'+categoryInfo.id">
                            <div class="product" style="background-color: #fff; margin-right: 10px;">
                                <Card :productInfo="productInfo"/>
                            </div>
                        </slide>
                    </slot>
                </slot>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
                </hooper>
            </div>
            <br>
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
    name:'tab-slider',
    props:{
        tabs:Array,
        selectedTabIndex:Number,
        dualCategoryList:{
            type:Array,
            default:()=>[]
        }
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
            // categoryList:[],
            msg:'tab-slider',
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                // infiniteScroll: true,
                // centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: false,
                keysControl: false,
                breakpoints: {
                    1: {
                        itemsToShow: 1,
                        centerMode: false,
                    },
                    320: {
                        itemsToShow: 1,
                        centerMode: false,
                    },
                    400: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    680: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                 
                    1000: {
                        itemsToShow:4
                    }
                    ,
                    1200: {
                        itemsToShow:5
                    }
                    ,
                    1540: {
                        itemsToShow:6
                    }
                }
            }
        }
    },
    // beforeMount(){
    //     this.getDualCategory();
    // },
    methods:{
        gotoCategoryPage(dataInfo){
            this.$router.push({name:'categoryPage',params:{slug:dataInfo.slug.split(' ').join('-')}});
        },
        tabChange(categoryId,categoryType){
            // console.dir(categoryId);
            if(categoryType==1){
                $("#category_id_"+categoryId).addClass("isActive");
                $("#subCategory_id_"+categoryId).removeClass("isActive");  
                $(".category_product_"+categoryId).show();
                $(".subCategory_product_"+categoryId).hide(); 
            }
            else{
                $("#category_id_"+categoryId).removeClass("isActive");
                $("#subCategory_id_"+categoryId).addClass("isActive"); 
                $(".category_product_"+categoryId).hide();
                $(".subCategory_product_"+categoryId).show();
            }
            
        },
        async getDualCategoryProduct(categoryInfo){
            await this.$http.get("get/random/dual/category/product")
           .then(response=>{ 
                return response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
        // async getDualCategory(){
        //   await this.$http.get("get/random/dual/category")
        //    .then(response=>{ 
        //         this.categoryList=response.data;
        //    })
        //    .catch(error=>{console.dir(error)})
        //    .finally();
        // },
        cicktab(currentTab) {
            // console.log(currentTab);
            let tabLits = this.$refs.tabUl;
            tabLits.forEach((tab,index) => {
                (currentTab == index) ? tab.classList.add('isActive') : tab.classList.remove('isActive');
            });


        }
    }
}
</script>

<style scoped>

@media(min-width: 200px) and (max-width: 999px){
    .hooper{
    height:auto;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
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
    /* padding:0 10px; */
    background: #1F1F1F;
    color:white;
}
.tabs ul li{
    min-width:50px;
    padding:0 10px;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tabs ul li.responsive-design{
    display: none;
}
   
}


@media(min-width: 768px){
  
    .tabs ul li{
    min-width:200px;
    padding-left: 10px;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
  
}

.tab-slider{
  
    padding-bottom: 20px;
}

@media (min-width: 1450px){
    .hooper{
    height:auto;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.slider-heading{
    height:40px;
    max-width:1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
   
    background: #1F1F1F;
    color:white;
}

}

@media (min-width: 1400px) and (max-width: 1449px) {
    .hooper{
    height:auto;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
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
    background: #1F1F1F;
    color:white;
}


}

@media (min-width: 1200px) and (max-width: 1399px) {
    .hooper{
    height:auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.slider-heading{
    height:40px;
    max-width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    background: #1F1F1F;
    color:white;
}


}

@media (min-width: 1000px) and (max-width: 1199px) {
    .hooper{
    height:auto;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
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
    background: #1F1F1F;
    color:white;
}


}

.see-all-span{
    margin-left:10px;
    padding-right: 10px;
}
.see-all-span img{
    margin-top:-4px;
}
.tabs{
    height:40px;
    padding: 0;
    margin:0;
}
.tabs ul{
    height:40px;
    list-style:none;
    display: flex;
    grid-column-gap:5px;
    align-items: center;
    padding:0;
}

.isActive{
    background:#da0a22;
}



@media (min-width: 1px) and (max-width:767px) {

.caption{
font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
font-size: 12px;
font-weight: 700;
line-height: 22px;

}
.seeall-btn{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 12px;
    font-weight: 700;
    line-height: 22px;
  
}
.seeall-btn a{
     font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 12px;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
}

}

@media (min-width: 768px) {

.caption{
font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
font-size: 20px;
font-weight: 700;
line-height: 22px;

}
.seeall-btn{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  
}
.seeall-btn a{
     font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
}

}
.seeall-btn:hover{
    color: var(--see-all-color);
}

.product{
        padding-right: 10px;
}


</style>
