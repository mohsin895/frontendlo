<template>
    <div class="product-slider">
        <div class="slider-heading">
            <div class="caption pointer">
                {{title}}
            </div>
            <div class="seeall-btn pointer">
                <router-link to="/recentViewProduct"> View more</router-link>
                <!-- <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span> -->
            </div>
        </div>

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(productInfo,productIndex) in recentViewProductList" :key="productIndex">
                <div class="product" style="background-color: #fff; margin-right: 10px;">
                    <Card :productInfo="productInfo" />
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
        </hooper>
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
    name:'recent-viewed-product',
    props:{
        title:String,
        recentViewProductList:{
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
            msg:'slider',
            // dataList:[],
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                // infiniteScroll: true,
                // centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    1: {
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
    // beforeMount() {
    //     this.getMostViewProduct();
    // },
    methods:{
        // getMostViewProduct(){
        //    this.$http.get("get/recent/viewed/product")
        //    .then(response=>{ 
        //         this.dataList=response.data;
        //    })
        //    .catch(error=>{console.dir(error)})
        //    .finally();
        // },
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
   
    margin-bottom:10px;
    padding:0 10px;
   
}
   
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
   
    margin-bottom:10px;
    padding:0 10px;
 
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
   
    margin-bottom:10px;
    padding:0 10px;
   
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
   
    margin-bottom:10px;
    padding:0 10px;
   
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
   
    margin-bottom:10px;
    padding:0 10px;
  
}


}

.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
}

/* slider header style  start */


.seeall-btn:hover{
    color: var(--see-all-color);
}


@media (min-width: 1px) and (max-width:767px) {

.caption{
font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
font-size: 12px;
font-weight: 700;
line-height: 22px;
color: #000000;
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
color: #000000;
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

.product{
        padding-right: 10px;
}

</style>
