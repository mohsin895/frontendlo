<template>
    <div class="home-slider">
        <hooper  :settings="hooperSettings">
            <slide v-for="(sliderInfo,sliderIndex) in sliderList" :key="sliderIndex">
                <img class="hooper-img" v-lazy="baseUrl+sliderInfo.slider_url" :alt="sliderInfo.title">
            </slide>
            <!-- <slide>
                <img class="hooper-img" src="@/assets/images/slider/slides_22 1.png" alt="">
            </slide> -->
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name:'home-slider',
    props:{
        title:String,
        sliderList:{
            type:Array,
            default:()=>[]
        }
    },
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
    },
    data() {
        return {
            // sliderList:[],
            msg:'home-slider',
            baseUrl: this.$baseUrl, 
            hooperSettings: {
                itemsToShow: 1,
                centerMode: false,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: false,
                keysControl: false,
            }
        }
    },
    // mounted(){
    //     this.getSliderList();
    // },
    methods:{
        // getSliderList(){
        //     this.$http.get("get/slider/list")
        //    .then(response=>{ 
        //         this.sliderList=response.data;
        //    })
        //    .catch(error=>{console.dir(error)})
        //    .finally();
        // }
    }
}
</script>


<style scoped>
/* use height weight for prevent auto resize  */

/* mobile responsive */
@media (min-width: 1px) and (max-width: 520px) {
    .hooper-img{
    width:100%;
    height: 150px;
}

.hooper {
    height: 150px;
    width:100%;
}


}

@media (min-width: 521px) and (max-width: 767px) {
    .hooper-img{
    width:100%;
    height: 260px;
}

.hooper {
    height: 260px;
    width:100%;
}


}

@media (min-width: 768px) and (max-width: 1199px) {
    /* .hooper-img{
    width:600px;
    height: 330px;
} */

.hooper {
    height: 390px;
    width:100%;
}


}

/* .hooper-img{
    width:100%;
    height: 400px;
} */





@media (min-width: 1200px) and (max-width: 1279px) {
    .hooper {
    height: 380px;
    width:700px;
}

}

/* @media (min-width: 1000px) and (max-width: 1199px) {
    .hooper {
    height: 400px;
    width:750px;
}

} */



/* @media (min-width: 1200px) and (max-width: 1199px) {
  
    .hooper {
    height: 400px;
    width:780px;
}
} */


/* new design */
@media (min-width: 1450px){
    .hooper {
    height: 400px;
    width:886px;
}


}
@media (min-width: 1280px) and (max-width: 1449px) {
    .hooper {
    height: 400px;
   width:100%;
  
}


}
</style>