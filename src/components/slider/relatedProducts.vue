<template>
    <div class="product-slider">
        <div class="slider-heading">
            <div class="caption pointer">
                {{title}}
            </div>
            <div class="seeall-btn pointer">
                View more
                <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span>
            </div>
        </div>

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(productInfo,productIndex) in relatedProducts" :key="productIndex">
                <div class="product" @click="scrollToTop" style="background-color: #fff; margin-right: 10px;">
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
    name:'latest-product',
    props:{
        title:String,
        relatedProducts:{
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
                    320: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    380: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    550: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
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
    beforeMount() {
       
    },
    methods:{

        scrollToTop() {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    },
        
    
    }
}
</script>

<style scoped>
/* .hooper {
    width: calc(100% + 2 * var(--slider-gap));
    margin: var(--slider-gap);
}
.hooper-slide {
    padding: 0 10px;
} */

.product{
        padding-left: 10px;
}
@media (min-width: 1450px) {
    .hooper{
    height:auto;
    max-width: 1400px;
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
    padding:0 10px;
    background: white;
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
    padding:0 10px;
    background: white;
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
    padding:0 10px;
    background: white;
}


}

@media (min-width: 1px) and (max-width: 1199px) {
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
    padding:0 10px;
    background: white;
}


}
/* .product{
    width: 180px;
    height:300px;
} */
.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
}

/* slider header style  start */
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

.seeall-btn:hover{
    color: var(--see-all-color);
}
.seeall-btn{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  
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
        padding-left: 10px;
}
/* .product-slider{
    background: #fff;
} */
/* slider header style end  */
</style>
