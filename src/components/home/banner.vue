<template>
    <div class="banner-image">

        <p v-for="bannerInfo in toBannerList" :key="bannerInfo.id" >
                <img v-lazy="baseUrl+bannerInfo.top_banner_url" :alt="bannerInfo.title">
         </p>
       
    </div>
</template>

<script>

export default {
    name: 'banner',
    props:{
     
        toBannerList:{
            type:Array,
            default:()=>[]
        }
    },
    data() {
        return {
            msg:'banner',
            // bannerList:[],
            baseUrl: this.$baseUrl, 
        }
    },
    // beforeMount() {
    //     this.getTopBanner();
    // },
    methods:{
        // getTopBanner(){
        //    this.$http.get("get/topbanner/list")
        //    .then(response=>{ 
        //     console.log(response.data);
        //         this.bannerList=response.data;
        //    })
        //    .catch(error=>{console.dir(error)})
        //    .finally();
        // },
    }
}
</script>

<style scoped>
.banner-image img{
    width:100%;
    height:500px;
}
</style>


<!-- 

<template>
    <div class="banner-image">
        <hooper  :settings="hooperSettings">
            <slide v-for="(sliderInfo,sliderIndex) in sliderList" :key="sliderIndex">
                <img class="hooper-img" v-lazy="sliderInfo.base_url+sliderInfo.slider_url" :alt="sliderInfo.title">
            </slide>
         
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
    name:'banner-image',
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
    },
    data() {
        return {
            sliderList:[],
            msg:'banner-image',
            hooperSettings: {
                itemsToShow: 1,
                centerMode: false,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
            }
        }
    },
    mounted(){
        this.getSliderList();
    },
    methods:{
        getSliderList(){
            this.$http.get("get/slider/list")
           .then(response=>{ 
                this.sliderList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        }
    }
}
</script>

<style scoped>
.banner-image img{
    width:100%;
    height:500px;
}

.hooper {
    height: 500px;
   
}
</style> -->