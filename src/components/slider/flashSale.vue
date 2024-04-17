<template>
    <div class="product-slider">
        <div class="loyel-container slider-heading">
            <div class="caption pointer">
                {{title}}  <span class="padding-left"> Ending Soon....</span> <span style="  border-radius: 2px;
    font-weight: 500;
    margin: 12px 6px;
    font-size: 30px;
   
    color:rgb(24 22 22);
    text-align: center;
    width: 80px;
    height: 35px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 35px;background: #FFE9DE;">{{ countdownDays }}</span>Days<span style="    border-radius: 2px;
    font-weight: 500;
    margin: 12px 6px;
    font-size: 30px;
   
    color:rgb(24 22 22);
    text-align: center;
    width: 80px;
    height: 35px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 35px;background: #FFE9DE;">{{ countdownHours }}</span>Hours<span style="    border-radius: 2px;
    font-weight: 500;
    margin: 12px 6px;
    font-size: 30px;
    padding-left: 5px;
    padding-right: 5px;
    color:rgb(24 22 22);
    text-align: center;
    width: 80px;
    height: 35px;
    line-height: 35px;background: #FFE9DE;">{{ countdownMinutes }}</span>Mins
    <span style="    border-radius: 2px;
    font-weight: 500;
    margin: 12px 6px;
    font-size: 30px;
    padding-left: 5px;
 
    color:rgb(24 22 22);
    text-align: center;
    width: 80px;
    height: 35px;
    line-height: 35px;background: #FFE9DE;">{{ countdownSeconds }} </span>Secs
            </div>
            <div class="seeall-btn pointer">
                <router-link to="/flash-sale">View more</router-link>
                <!-- <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span> -->
            </div>
        </div>

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(productInfo,productIndex) in mostViewProductLis" :key="productIndex">
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
    name:'most-viewed-product',
    props:{
        title:String,
        mostViewProductLis:{
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
            endTimeDate:'',
            // dataList:[],
            countdownDays:'',
            countdownHours:'',
            countdownMinutes:'',
            countdownSeconds:'',
            deadline: '2023-4-15 23:59:59',
            countdown: '',
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
    beforeMount() {
        // this.getMostViewProduct();
        this.getFlashSaleTime();
    },

    mounted() {
  setInterval(() => {
    const now = new Date().getTime()
    const endDate = new Date(this.endTimeDate).getTime()
    const remainingTime = endDate - now
    if(endDate >now){
        this.countdownDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    this.countdownHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    this.countdownMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    this.countdownSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
       
        
    }else if(endDate >now){
        this.countdownDays=0
        this.countdownHours=0
        this.countdownMinutes=0
        this.countdownSeconds=0

    }else{
        this.countdownDays=0
        this.countdownHours=0
        this.countdownMinutes=0
        this.countdownSeconds=0
 

    }
   
  }, 1000)
},
    methods:{

        getFlashSaleTime() {
             
             this.$http.get("flashSale/time")
               .then(response => {
                   
                      this.endTimeDate=response.data.endTimeDate; 
                   
                
                
                   
               })
               .catch(error => {
                 console.dir(error);
               });
               
        },
      
        // getMostViewProduct(){
        //    this.$http.get("flashSale/product")
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
    height:90px;
    max-width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
   
    margin-bottom:10px;
    padding:0 10px;
  
}
.see-all-span{
    margin-left:0px;
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


@media(min-width: 768px){
    .see-all-span{
    margin-left:10px;
}


}





.see-all-span img{
    margin-top:-4px;
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

.product{
        padding-right: 10px;
}
/* slider header style end  */
</style>