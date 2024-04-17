<template>
    <div class="supper-product">
        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(supper,rightMenuIndex) in supperProductSliderList" :key="rightMenuIndex">
                <div class="item"  @click="gototRightMenu(supper)">
                        <div class="icon-div">
                        <slot >
                            {{supper.title}}
                        </slot>
                           <!--  <v-icon name="charging-station"/> -->
                        </div>
                        <div class="icon-text">
                          
                            <div class="menu-image"> 
                                <img :src="baseUrl + supper.image" alt="supper.title"  class="supper-product-image">
                            </div>
                        </div>
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
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name:'supper-product',
    props:{
        title:String,
        supperProductSliderList:{
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
            msg:'supper-product',
            // bannerList:[],
            
            baseUrl: this.$baseUrl, 
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
                    300: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3
                    }
                }
            }
        }
    },
    // beforeMount(){
    //     this.getTopBanner();
    // },
    methods:{
        gototRightMenu(supper){
            this.$router.push({name:'supperProduct',params:{slug:supper.slug.split(' ').join('-')}});
        },
        // getTopBanner(){
        //    this.$http.get("get/random/right/slider")
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
.item{
    background-color: #ffffff;
}

ul {
    position:relative;
    list-style: none;
    padding:8px 0 8px -5px;
}
ul li {
    height:100%;
    padding:0 0 0 0px;
    transition: .1s;
    margin-bottom: 10px;
}
ul li:hover{
    background:rgb(248, 247, 247);
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1),-1px -1px 1px rgba(0,0,0,.1);

}


.menu-wrapper{
    display: flex;
    flex-flow: row wrap;
    grid-column-gap:14px;
    padding: 10px;
}
.menu-1{
    height:auto;
    width:250px;
    padding:10px 0px;
    /* background:white;
    border:1px solid black; */
}
.menu-1{
    text-align: left;
}
.icon-div{
    width:180px;
    padding-left: 10px;
}

.menu-1 h6{
    cursor: pointer;
    font-weight: bold;
}
.menu-1-item{
    cursor: pointer;
}

@media(min-width: 200px) and (max-width: 999px){
    .hooper{
    height:auto;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.supper-product-image{
    width:100%;
    height: 80px;
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
.supper-product .hooper ul {
 margin-left: -130px;

}
.supper-product-image{
    width:370px;
    height: 120px;
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
.supper-product-image{
    width:315px;
    height: 120px;
}

}

@media (min-width: 1200px) and (max-width: 1399px) {
    .hooper{
    height:auto;
    max-width: 1150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    margin:auto;
}

.supper-product-image{
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

.supper-product-image{
    width:280px;
    height: 120px;
}


}
@media (min-width:1px) and (max-width: 500px){

    .icon-div{
        display: none;
    }
    ul li .item{
    height:100%;
    /* display: flex; */
    cursor:pointer;
    align-items: center;
    margin-right: 10px;
    
}
.icon-text{
    margin-left:4px;
    font-size: 1.2rem;

    justify-content: space-between;
    /* width:calc(100% - 30px); */
}
    
}


@media (min-width:501px) {
    ul li .item{
    height:100%;
    display: flex;
    cursor:pointer;
    align-items: center;
    margin-right: 10px;
    
}
.icon-text{
    margin-left:4px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    width:calc(100% - 30px);
} 
}


.supper-product{
    /* margin-block: 30px; */
    height: 90px;
}
</style>
