<template>
    <div class="brand-slider">
        <div class="loyel-container slider-heading">
            <div class="caption pointer">
                {{title}}
            </div>
            <div class="seeall-btn pointer">
                <router-link to="/all-brand">  View more</router-link>
                <!-- <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span> -->
            </div>
        </div>

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(brandInfo,brandIndex) in brandList" :key="brandIndex">
                <div class="brands" @click="gotoBrandProductPage(brandInfo)">
                    <img v-lazy="baseUrl + brandInfo.logo" :alt="brandInfo.name" style="height:90px; width:90px; border-radius:50%;">
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
    name:'brand-slider',
    props:{
        title:String,
        brandList:{
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
            // brandList:[],
            msg:'slider',
            baseUrl: this.$baseUrl, 
            hooperSettings: {
                itemsToShow: 9,
                itemsToSlide:1,
                // infiniteScroll: true,
                // centerMode: true,
                
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    1: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    320: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 3,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
                    },
                    800: {
                        itemsToShow: 4
                    },
                    1000: {
                        itemsToShow:5
                    },
                    1100: {
                        itemsToShow:6
                    }
                    ,
                    1540: {
                        itemsToShow:8
                    }
                }
            }
        }
    },
    // beforeMount(){
    //     this.getBrandList();
    // },
    methods:{
        gotoBrandProductPage(brandInfo){
            this.$router.push({name:'brandProduct',params:{slug:brandInfo.slug.split(' ').join('-')}});
        },
        // getBrandList(){
        // this.$http.get("get/brand/list")
        //    .then(response=>{ 
        //         this.brandList=response.data;
        //    })
        //    .catch(error=>{console.dir(error)})
        //    .finally();
        // }
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
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
}
   
}
/* other responsive */


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
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
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
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
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
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
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
    /* border:1px solid rgb(167, 165, 165); */
    margin-bottom:10px;
    padding:0 10px;
    /* background: white; */
}


}
.brands{
    cursor: pointer;
}


.brands{
    width: 120px;
    height:120px;
    border-radius:50%;
    background: #F4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
}
.brands > * img{
    width:80px;
    height:80px;
    object-fit: contain;
}
.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
    height:20px;
    width:20px;
}



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

.brand-slider{
    padding-bottom: 20px;
}
/* slider header style end  */
</style>
