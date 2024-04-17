<template>
    <div class="store-slider">
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
    name:'store-slider',
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
    },
    data() {
        return {
            sliderList:[],
            msg:'store-slider',
            baseUrl: this.$baseUrl, 
            urlParam:{
                numOfData:44,
                slug:this.$route.params.slug,
            },
            dataUrl:'vandor/wise/slider',
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
    // mounted(){
    //     this.getSliderList();
    // },

    beforeMount(){
       
        this.getSliderList(this.dataUrl,this.urlParam);
    },
    methods:{
        getSliderList(url,param){
            this.$http.get(url,{params:param})
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
    height: 360px;
    width:100%;
}


}

/* .hooper-img{
    width:100%;
    height: 400px;
} */

@media (min-width: 1450px){
    .hooper {
    height: 330px;
    width:1400px;
}


}

@media (min-width: 1400px) and (max-width: 1449px) {
    .hooper {
    height: 400px;
    width:1300px;
}


}

@media (min-width: 1200px) and (max-width: 1399px) {
    .hooper {
    height: 325px;
    width:1150px;
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


</style>