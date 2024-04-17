<template>
    <div class="right-menu">
        <div class="mega-menu">
            <ul>
                <li >
                    <!-- <pre>{{categoryList}}</pre> -->
                    <div class="premium-packge-item" >
                        <router-link :to="{name:'premiumPackge'}">
                        <div class="icon-text">
                          
                          <div class="menu-image"> 
                              <img src="@/assets/images/premiumPackge.jpg" class="right-menu-image">
                          </div>
                      </div>
                      </router-link>
                        <router-link :to="{name:'premiumPackge'}">
                           
                        <div class="premium-packge">
                        <slot >
                            <!-- <b-icon icon="gift"></b-icon> -->
                            Premium Package
                        </slot>
                       
                        </div>
                        </router-link>
                        
                    </div>
                    
                </li>

                <li v-for="(supper,rightMenuIndex) in supperProductSliderList" :key="rightMenuIndex">
                    <!-- <pre>{{categoryList}}</pre> -->
                    <div class="item"  @click="gototRightMenu(supper)">
                        <div class="icon-text">
                          
                          <div class="menu-image"> 
                              <img :src="baseUrl + supper.image" alt="supper.title"  class="right-menu-image">
                          </div>
                      </div>
                        <div class="icon-div">
                        <slot >
                            {{supper.title}}
                        </slot>
                           <!--  <v-icon name="charging-station"/> -->
                        </div>
                       
                    </div>
                    
                </li>
               
            </ul>
        </div>
    </div>
</template>

<script >

export default {
    name: 'right-menu',
    props:{
        title:String,
        supperProductSliderList:{
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
    /* background-color: #f4f4f4; */
}
.right-menu-image{
    width:60px;
    height:60px;
}
ul {
    position:relative;
    list-style: none;
    padding:8px 0 8px -5px;
    margin-left: -30px;
}
ul li {
    height:93px;
    padding:0 0 0 10px;
    transition: .1s;
    margin-bottom: 10px;
}
ul li .icon-div:hover{
    /* background:rgb(248, 247, 247);
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1),-1px -1px 1px rgba(0,0,0,.1); */
    color:#e64545;

}
ul li .item{
    height:100%;
    display: flex;
    cursor:pointer;
    align-items: center;
    /* border-bottom: 1px solid gray; */
}
ul li .premium-packge-item{
    height:100%;
    display: flex;
    cursor:pointer;
    align-items: center;
}
ul li .premium-packge:hover{
  color:#e64545;
}
ul li .details{
    position:absolute;
    width:800px;
    background: #fff;
    left:248px;
    top:0px;
    z-index:10;
    visibility: hidden;
    height:0;
}
ul li:hover  .details{
    visibility: visible;
    min-height: 470px;
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
    width:134px;
    padding-left: 10px;
}
.premium-packge{
    widows: 100%;
    margin-left: 10px;
}
.icon-text{
    margin-left:4px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    /* width:calc(100% - 30px); */
}
.menu-1 h6{
    cursor: pointer;
    font-weight: bold;
}
.menu-1-item{
    cursor: pointer;
}
a{
    color:#000000A6;
}
.premium-packge-item{
    /* background: #f4f4f4; */
}
</style>
