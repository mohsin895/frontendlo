<template>
    <div class="multi-menu">
        <div class="mega-menu">

            <ul>

                 <li v-for="(megaCategory,megaIndex) in categoryList" :key="megaIndex">
                
                <div class="item" >
                        <div class="icon-div">
                        <slot v-if="megaCategory.category_logo!=null">
                            <img v-lazy="baseUrl+megaCategory.category_logo" :alt="megaCategory.title" class="category-logo">
                        </slot>
                        <div class="category-title" >{{megaCategory.title}}</div>
                        

                        
                           <!--  <v-icon name="charging-station"/> -->
                        </div>
                       
                    </div>
                  
            
                    <div class="details category-page-category">
                        <div class="menu-wrapper ">
                            <slot v-if="megaCategory.sub_category!=null">
                                <div class="menu-1" v-for="(subCategory,subCategoryIndex) in megaCategory.sub_category" :key="subCategoryIndex">
                                    <h6 @click="gotoCategoryPage(subCategory)">{{subCategory.title}}</h6>
                                    <div class="menu-1-body">
                                         <slot v-if="megaCategory.sub_category!=null">    
                                            <div class="menu-1-item" v-for="(normalCategory,normalCategoryIndex) in subCategory.sub_category" :key="normalCategoryIndex" @click="gotoSubCategoryPage(normalCategory)" >
                                                {{normalCategory.title}}
                                            </div>
                                        </slot>
                                    </div>
                                </div>
                            </slot>
                        </div>
                    </div>
              </li>
            </ul>
            <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
       
            
           
        </div>
    </div>
</template>

<script >
import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name: 'multi-menu',
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
       
    },
    props:{
        title:String,
        categoryList: {
    type: Array,
    default: () => []
  }
    },
    data() {
        return {
        //    categoryList:[],
           baseUrl: this.$baseUrl,
           hooperSettings: {
                itemsToShow: 8,
                itemsToSlide:6,
          
          

                centerMode: false,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    380: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 4,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow:3
                    },
                    1200: {
                        itemsToShow: 3
                    }
                }
            }

        }
    },
    beforeMount() {
       
    },
    methods:{
        gotoCategoryPage(dataInfo){
            this.$router.push({name:'categoryPage',params:{slug:dataInfo.slug.split(' ').join('-')}});
        },
        gotoSubCategoryPage(dataInfo) {
            const url = `/subcategory/${dataInfo.slug.split(' ').join('-')}`;
    const newTab = window.open(url, '_blank');
    newTab.focus();
            
        },
     
    }
}
</script>

<style scoped>

.category-page-category{
  height: 570px;
    overflow-y: auto;
}
.hooper{
    padding-left: 50px;
}
.hooper-track{
    padding-left: 20px;
   

}
.hooper-list{
    height: 400px;
}
.category-logo{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid rgba(0,0,0,.04);
}

ul {
    position:relative;
    list-style: none;
    padding:8px 10px 8px 5px;
    padding:0;
    list-style: none;
    display: flex;
    /* flex-flow: row wrap; */
    grid-column-gap:30px;
    align-items: flex-end;
    margin-left: 20px;
    
    justify-content: center;
}
ul li {
    height:185px;
    /* padding:0 0 0 10px; */
    padding-bottom: 10px;
    transition: .1s;
    width: 100px;
    
}
ul li:hover{
    background:#fff;
    /* box-shadow: 1px 1px 1px rgba(0,0,0,0.1),-1px -1px 1px rgba(0,0,0,.1); */

}
ul li .item{
    height:100%;
    display: flex;
    cursor:pointer;
    align-items: center;
    /* border-bottom: 1px solid gray; */
}
ul li .details{
    position:absolute;
    width:100%;
    background: #fff;
    left: 0px;
    top: 184px;
    
    z-index: 1000;
    visibility: hidden;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
    height:0;

}


ul li:hover  .details{
    visibility: visible;
    min-height: 410px;
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
    width:32px;
    margin-right: 20px;
}
.icon-text{
    margin-left:4px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    width:calc(100% - 30px);
    
}
.menu-1 h6{
    cursor: pointer;
    font-weight: bold;
}
.menu-1-item{
    cursor: pointer;
}
.mega-menu{
    widows: 285px;
    font-family: "OpenSans","Open sans","Helvetica Neue","Helvetica","Arial","Microsoft YaHei","PingFang SC","Tahoma";
}
.category-title{
    min-height: 48px;
    font-size: 14px;
    color: #222;
}
</style>
