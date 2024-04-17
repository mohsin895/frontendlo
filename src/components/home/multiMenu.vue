<template>
    <div class="multi-menu">
        <div class="mega-menu">
            <ul>
                <li>
                    <!-- <pre>{{categoryList}}</pre> -->
                    <div class="item">
                        <div class="icon-div">
                        <slot >
                            <img src="@/assets/images/allcategory.png"  height="32" width="32">
                        </slot>
                           <!--  <v-icon name="charging-station"/> -->
                        </div>
                        <div class="icon-text" style=" font-weight:700;font-size: 17px;">
                            All categories
                            <div class="menu-arrow"> 
                                <img src="@/assets/images/arrow.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="details landing-page-category" style="padding-top: 20px;">

                        
                    <span v-for="(megaCategory,megaIndex) in categoryList" :key="megaIndex" class="category-all-design">
                      <span class="third-breadcrub"   >{{megaCategory.title}}</span>
                      <slot v-if="megaCategory.sub_category!=null">
                        <span  v-for="(subCategory,subCategoryIndex) in megaCategory.sub_category" :key="subCategoryIndex">
                      <span  >/</span><span class="third-breadcrub" @click="gotoCategoryPage(subCategory)" >{{subCategory.title}}</span>
                      <slot v-if="subCategory.sub_category!=null">    
                        <span  >/</span> <span class="third-breadcrub" v-for="(normalCategory,normalCategoryIndex) in subCategory.sub_category" :key="normalCategoryIndex" @click="gotoSubCategoryPage(normalCategory)">  {{normalCategory.title}} </span>
                      </slot>
                    </span>
                    </slot>
                </br>
                      
                
                       
                </span>
                       
                    </div>
                </li>

                <li v-for="(megaCategory,megaIndex) in categoryList" :key="megaIndex">
                    <!-- <pre>{{categoryList}}</pre> -->
                    <div class="item" >
                        <div class="icon-div">
                        <slot v-if="megaCategory.category_logo!=null">
                            <img v-lazy="baseUrl+megaCategory.category_logo" :alt="megaCategory.title" height="32" width="32">
                        </slot>
                           <!--  <v-icon name="charging-station"/> -->
                        </div>
                        <div class="icon-text">
                            {{megaCategory.title}}
                            <div class="menu-arrow"> 
                                <img src="@/assets/images/arrow.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="details landing-page-category">
                        <div class="menu-wrapper menu-font-size">
                            <slot v-if="megaCategory.sub_category!=null">
                                <div class="menu-1" v-for="(subCategory,subCategoryIndex) in megaCategory.sub_category" :key="subCategoryIndex">
                                    <h6 @click="gotoCategoryPage(subCategory)"
                                     class="submenu-design">{{subCategory.title}}</h6>
                                    <div class="menu-1-body">
                                         <slot v-if="subCategory.sub_category!=null">    
                                            <div class="menu-1-item" v-for="(normalCategory,normalCategoryIndex) in subCategory.sub_category" :key="normalCategoryIndex" @click="gotoSubCategoryPage(normalCategory)">
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
        </div>
    </div>
</template>

<script >

export default {
    name: 'multi-menu',
    props:{
        title:String,
        categoryList:{
            type:Array,
            default:()=>[]
        }
    },
    data() {
        return {
        //    categoryList:[],
           baseUrl: this.$baseUrl,
        }
    },
    // beforeMount() {
    //     this.getCategory();
    // },
    methods:{
        gotoCategoryPage(dataInfo){
            this.$router.push({name:'categoryPage',params:{slug:dataInfo.slug.split(' ').join('-')}});
        },
        gotoSubCategoryPage(dataInfo) {
            const url = `/subcategory/${dataInfo.slug.split(' ').join('-')}`;
    const newTab = window.open(url, '_blank');
    newTab.focus();
            
        },
        // getCategory(){
        //    this.$http.get("get/category/list")
        //    .then(response=>{ 
        //         this.categoryList=response.data;
        //    })
        //    .catch(error=>{console.dir(error)})
        //    .finally();
        // },
    }
}
</script>

<style scoped>
.landing-page-category{
  height: 430px;
    overflow-y: auto;
}

ul {
    position:relative;
    list-style: none;
    padding:8px 10px 8px 5px;
}

ul li:hover{
    background:rgb(248, 247, 247);
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1),-1px -1px 1px rgba(0,0,0,.1);

}
ul li .item{
    height:100%;
    display: flex;
    cursor:pointer;
    align-items: center;
    
    /* border-bottom: 1px solid gray; */
}

@media (min-width: 1450px) {
    ul li {
    height:45px;
    /* padding:0 0 0 10px; */
    padding-bottom: 10px;
    transition: .1s;
    padding: 6px 5px 7px 10px;
}
   
    ul li .details{
    position:absolute;
    width:930px;
    background: #fff;
    left:260px;
    top:0px;
    opacity: 0.9;
    z-index:10;
    visibility: hidden;
    height:0;
}

.icon-text{
    margin-left:4px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    width:calc(100% - 30px);
    
}
.menu-font-size{
    font-size: 1.2rem;
}
.icon-div{
    width:32px;
    margin-right: 5px;
}

ul li:hover  .details{
    visibility: visible;
    min-height: 430px;
}
}
@media (min-width: 1280px) and (max-width: 1449px) {
    ul li {
    height:44px;
    /* padding:0 0 0 10px; */
    padding-bottom: 10px;
    transition: .1s;
    padding: 6px 5px 7px 10px;
    width: 100%;
}

 .mega-menu ul li .details{
 position:absolute;
 min-width:623px !important;
 max-width:800px !important;
 background: #fff;
 left:95%;
 top:0px;
 opacity: 0.9;
 z-index:10;
 visibility: hidden;
 height:0;
}
.icon-text{
 margin-left:4px;
 font-size: .8rem;
 display: flex;
 justify-content: space-between;
 width:calc(100% - 30px);
 
}
.menu-font-size{
 font-size: 0.9rem;
}

.icon-div{
    width:32px;
    margin-right: 5px;
}
ul li:hover  .details{
    visibility: visible;
    min-height: 380px;
}
}

@media (min-width: 1200px) and (max-width: 1279px) {
    ul li {
    height:44px;
    /* padding:0 0 0 10px; */
    padding-bottom: 10px;
    transition: .1s;
    padding: 6px 5px 7px 10px;
    width: 100%;
}
 
 ul li .details{
 position:absolute;
 width:623px;
 background: #fff;
 left:95%;
 top:0px;
 opacity: 0.9;
 z-index:10;
 visibility: hidden;
 height:0;
}
.icon-text{
 margin-left:4px;
 font-size: .8rem;
 display: flex;
 justify-content: space-between;
 width:calc(100% - 30px);
 
}
.menu-font-size{
 font-size: 0.9rem;
}

.icon-div{
    width:32px;
    margin-right: 5px;
}
ul li:hover  .details{
    visibility: visible;
    min-height: 380px;
}
}

@media (min-width: 768px) and (max-width: 1199px) {

    ul li:hover  .details{
    visibility: visible;
    min-height: 410px;
}
    ul li {
    height:40px;
    /* padding:0 0 0 10px; */
    padding-bottom: 10px;
    transition: .1s;
    padding: 6px 5px 7px 10px;
    width: 100%;
}
    .icon-div{
   display: none;
}
 
    ul li .details{
    position:absolute;
    width:600px;
    background: #fff;
    left:95%;
    top:0px;
    opacity: 0.9;
    z-index:10;
    visibility: hidden;
    height:0;
}
.icon-text{
    margin-left:4px;
    font-size: .8rem;
    display: flex;
    justify-content: space-between;
    width:calc(100% - 0px);
    
}
.menu-font-size{
    font-size: 0.9rem;
}
}


.menu-wrapper{
    display: flex;
    flex-flow: row wrap;
    grid-column-gap:14px;
    padding: 10px;
    margin-left: 10px;
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
/* .icon-div{
    width:32px;
    margin-right: 5px;
} */
/* .icon-text{
    margin-left:4px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    width:calc(100% - 30px);
    
} */
.menu-1 h6{
    cursor: pointer;
    font-weight: bold;
}
.menu-1-item{
    cursor: pointer;
    font-size: 12px;
}
.mega-menu{
    widows: 285px;
}
.category-all-design{
    color: #767676;
    font-size: 12px;
    margin-left: 10px;
    
}
.third-breadcrub{
    cursor: pointer;
    margin-left: 5px;
}
.submenu-design{
    color: #333;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 10px;
    padding-right: 5px;
}
</style>
