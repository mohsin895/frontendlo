<template>
    <div class="shocking-deal">
        <div class="slider-heading">
            <div class="caption pointer">
               Shocking Deal
            </div>
            <!-- <div class="seeall-btn pointer">
                SEE ALL
                <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span>
            </div> -->
        </div>
        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(shockingDealInfo,shockingDealIndex) in shockingSliderList" :key="shockingDealIndex">
                <img  v-lazy="baseUrl+shockingDealInfo.shockingDeal_url" alt=""  class="shocking-deal-image" @click="gotoShockingDeal(shockingDealInfo)">
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
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name:'shocking-deal',
    props:{
        title:String,
        shockingSliderList:{
            type:Array,
            default:()=>[]
        }
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination
    },
    data() {
        return {
            msg:'shocking-deal',
            // dataList:[],
            baseUrl:this.$baseUrl,
            hooperSettings: {
                itemsToShow: 4,
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
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
                    },
                    1000: {
                        itemsToShow:4
                    }
                    ,
                    1540: {
                        itemsToShow:4
                    }
                }
            }
        }
    },
    // beforeMount(){
    //     this.getShockingDealList();
    // },
    methods:{
        gotoShockingDeal(shockingDealInfo){
            this.$router.push({name:'shockingProduct',params:{slug:shockingDealInfo.slug.split(' ').join('-')}});
        },
        // getShockingDealList(){
        // this.$http.get("get/shockingDeal/list")
        //    .then(response=>{ 
        //         this.dataList=response.data;
        //    })
        //    .catch(error=>{console.dir(error)})
        //    .finally();
        // }
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
  
    margin-left: 10px;
    margin-right: 10px;
}
.shocking-deal .hooper ul {
 margin-left: 0px;

}
.shocking-deal-image{
    width:95%;
    height: 80px;
}
}

@media (min-width: 1540px){
    .hooper{
    height:auto;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}
.shocking-deal .hooper ul {
 margin-left: -130px;

}
.shocking-deal-image{
    width:370px;
    height: 120px;
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

.shocking-deal-image{
    width:280px;
    height: 120px;
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

.shocking-deal-image{
    width:280px;
    height: 120px;
}


}


@media(min-width: 200px) and (max-width: 999px){
   

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
/* other responsive */


@media (min-width: 1450px){
 
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
.hooper{
    height:auto;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}
.shocking-deal .hooper ul {
 margin-left: -130px;

}
.shocking-deal-image{
    width:315px;
    height: 120px;
}

}

@media (min-width: 1400px) and (max-width: 1449px) {
  
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
.hooper{
    height:auto;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}
.shocking-deal .hooper ul {
 margin-left: -130px;

}
.shocking-deal-image{
    width:315px;
    height: 120px;
    border-radius: 10px;
}


}

@media (min-width: 1200px) and (max-width: 1399px) {
  
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

@media (min-width: 1100px) and (max-width: 1199px) {
   
.slider-heading{
    height:40px;
    max-width:1150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
   
    margin-bottom:10px;
    padding:0 10px;
  
}


}


@media (min-width: 1px) and (max-width:767px) {

.caption{
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


}

.shocking-deal-image{

    border-radius: 10px;
}
</style>
