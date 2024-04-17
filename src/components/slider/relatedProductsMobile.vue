<template>
    <div class="product-slider-mobile">
        <div class="slider-heading">
            <div class="caption pointer">
                {{title}}
            </div>
            <!-- <div class="seeall-btn pointer">
                View more
                <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span>
            </div> -->
        </div>

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(productInfo,productIndex) in relatedProducts" :key="productIndex">
                <div class="product" style="background-color: #fff; margin-right: 10px;">
                    <Card :productInfo="productInfo" />
                </div>
            </slide>
            <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
            <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
        </hooper>
    </div>
</template>


<script>
import { 
    Hooper,
    Slide, 

 Pagination as HooperPagination
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
       HooperPagination,
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
                autoPlay: false,
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
                        itemsToShow: 4,
                        centerMode: false,
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
        
   
    }
}
</script>

<style scoped>



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

.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
}


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
 .product-slider-mobile{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
} 
/* slider header style end  */
</style>
