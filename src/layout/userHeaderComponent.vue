<template>
    <div class="header">
      <div class="header-main">
        <sliding-header :threshold-hide="200" :threshold-open="400">
        <template v-slot:first-header>
          <div class="menu-part">
            <div class="menu-top">
              <div class="container-width">
                <div class="mune-top-left">
                  <!-- <router-link to="">
                              <b-icon icon="gift"></b-icon>
                              Premium Package
                          </router-link> -->
  
                </div>
                <div class="menu-top-right">
                  <slot v-if="$store.state.sellerInfo != null">
                    <router-link :to="{ name: 'sellerDashboard' }">Sell On Loyel</router-link>
                  </slot>
                  <slot v-else>
                    <a :href="sellerUrl" target="_blank" >Sell On Loyel</a>
                  </slot>
                  <router-link to="" class="curr">BDT</router-link>
                  <router-link to="" class="lang">English</router-link>
                </div>
              </div>
            </div>
            <div class="loyel-container">
              <div class="menu-bottom">
                <div class="loyel-container menu-bottom-first">
                  <router-link to="/">
                    <div class="logo">
                      <span ckass="logo">
                        <!-- <router-link to="/">LOYEL</router-link>-->
                      </span> <img :src="baseUrl + globalData.shop_logo">
                    </div>
                  </router-link>
                  <div class="search-bar">
                    <Search />
                  </div>
                  <div class="righ-part">
                    <div class="news-feed">
                      
                    </div>
                    <div class="news-feed">
                      <router-link to="/">Company</router-link>
                    </div>
                  
                    <div class="icon-list ">
                      <router-link class="cart" :to="{ name: 'cartView' }">
                        <b-icon icon="cart-dash-fill"></b-icon>
                        <span class='badge badge-warning' id='lblCartCount'> {{ cartCount }} </span>
                      </router-link>
                      <slot v-if="$store.state.customerInfo != null">
                        <router-link
                          :to="{ name: 'profile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                          <b-icon icon="person-circle"></b-icon>
                        </router-link>
                      </slot>
                      <slot v-else>
                        <router-link :to="{ name: 'login' }">
                          <b-icon icon="person-circle"></b-icon>
                        </router-link>
                      </slot>
                      <div class="notification">
                        <b-icon icon="bell-fill"></b-icon>
                      </div>
                      <div class="login-profile">
                        <slot v-if="$store.state.customerInfo != null">
                          <router-link
                            :to="{ name: 'profile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                            <b-icon icon="person-circle"></b-icon>
                          </router-link>
                        </slot>
                        <slot v-else>
                          <router-link :to="{ name: 'login' }">
                            <b-icon icon="person-circle"></b-icon>
                          </router-link>
                        </slot>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="menu-bottom-second">
  
  
  
                  <div class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
  
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li>
                            <router-link to="/">Home</router-link>
                          </li>
  
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Category
                            </a>
                            <ul class="dropdown-menu">
  
                              <li class="nav-item dropdown-submenu category-figure"
                                v-for="(megaCategory, megaIndex) in categoryList" :key="megaIndex">
                                <a class="dropdown-menu-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false" @click="gotoCategoryPage(megaCategory)">
                                  {{ megaCategory.title }}
                                </a>
                                <slot v-if="megaCategory.sub_category.length != null">
                                  <ul class="dropdown-menu ">
  
                                    <li class="nav-item dropdown-submenu category-figure"
                                      v-for="(subCategory, subCategoryIndex) in megaCategory.sub_category"
                                      :key="subCategoryIndex">
                                      <a class="nav-link dropdown-submenu-toggle" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false"
                                        @click="gotoCategoryPage(subCategory)">
                                        {{ subCategory.title }}
                                      </a>
                                      <ul class="dropdown-menu" v-if="subCategory.sub_category != null">
                                        <li v-for="(normalCategory, normalCategoryIndex) in subCategory.sub_category"
                                          :key="normalCategoryIndex"><a class="nav-link  dropdown-sub-submenu-toggle"
                                            href="#" @click="gotoCategoryPage(normalCategory)">{{ normalCategory.title
                                            }}</a></li>
  
                                      </ul>
                                    </li>
                                  </ul>
  
                                </slot>
                                <slot v-else>
  
                                </slot>
  
                              </li>
                            </ul>
                          </li>
  
                          <li>
                            <router-link to="/comboOffer">Combo Offer</router-link>
                          </li>
  
                          <!-- <li>
                              <router-link to="/flash-sale">Flash Sale</router-link>
                              </li> -->
                          <li>
                            <router-link to="/all-vandor" class="vendor">All Vendors</router-link>
                          </li>
                          <router-link to="/all-brand" class="brand">
                            <li>
                              All Brands
                            </li>
                          </router-link>
  
                        </ul>
  
                      </div>
                    </div>
                  </div>
  
  
               
  
                </div>
              </div>
            </div>
  
          </div>
        </template>
  
        <template v-slot:second-header>
          <div class="menu-part-second">
  
            <div class="loyel-container">
              <div class="menu-bottom">
                <div class="loyel-container menu-bottom-first">
                  <router-link to="/">
                    <div class="logo">
                      <span ckass="logo">
                        <!-- <router-link to="/">LOYEL</router-link>-->
                      </span> <img :src="baseUrl + globalData.shop_logo">
                    </div>
                  </router-link>
                  <div class="search-bar-slider-header">
                    <SlidingHeaderSearch />
                  </div>
  
                  <div class="righ-part">
  
  
                  </div>
  
                </div>
  
  
              </div>
            </div>
  
          </div>
        </template>
      </sliding-header>
  
      </div>
      <nav class="mobile-header-main" style="height:88px ;">
        <sliding-header :threshold-hide="200" :threshold-open="400">
        <template v-slot:first-header>
          <div class="menu-part">
            <div class="menu-top">
              <div class="container-width">
                <div class="mune-top-left">
                  <!-- <router-link to="">
                              <b-icon icon="gift"></b-icon>
                              Premium Package
                          </router-link> -->
  
                </div>
                <div class="menu-top-right">
                  <slot v-if="$store.state.sellerInfo != null">
                    <router-link :to="{ name: 'sellerDashboard' }">Sell On Loyel</router-link>
                  </slot>
                  <slot v-else>
                    <a :href="sellerUrl" target="_blank" >Sell On Loyel</a>
                  </slot>
                  <router-link to="" class="curr">BDT</router-link>
                  <router-link to="" class="lang">English</router-link>
                </div>
              </div>
            </div>
            <div class="loyel-container">
              <div class="menu-bottom">
                <div class="loyel-container menu-bottom-first">
                  <router-link to="/">
                    <div class="logo">
                      <span ckass="logo">
                        <!-- <router-link to="/">LOYEL</router-link>-->
                      </span> <img :src="baseUrl + globalData.shop_logo">
                    </div>
                  </router-link>
                  <div class="search-bar">
                    <Search />
                  </div>
                  <div class="righ-part">
                    <div class="news-feed">
                      <!-- <router-link to="/newsFeed"><img class="google-img" src="@/assets/images/newsfeed.jpg" alt=""
                          style="height: 30px;opacity: 1.0;background: #fff;"></router-link> -->
                    </div>
                    <div class="news-feed">
                      <router-link to="/">Company</router-link>
                    </div>
                    <!-- <div class="offer-zone">
                                  <router-link to="/offerZone">OfferZone</router-link>
                              </div> -->
                    <div class="icon-list ">
                      <router-link class="cart" :to="{ name: 'cartView' }">
                        <b-icon icon="cart-dash-fill"></b-icon>
                        <span class='badge badge-warning' id='lblCartCount'> {{ cartCount }} </span>
                      </router-link>
                      <!-- <slot v-if="$store.state.customerInfo != null">
                        <router-link
                          :to="{ name: 'profile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                          <b-icon icon="person-circle"></b-icon>
                        </router-link>
                      </slot>
                      <slot v-else>
                        <router-link :to="{ name: 'login' }">
                          <b-icon icon="person-circle"></b-icon>
                        </router-link>
                      </slot> -->
                      <div class="notification">
                        <b-icon icon="bell-fill"></b-icon>
                      </div>
                      <div class="login-profile">
                        <slot v-if="$store.state.customerInfo != null">
                          <router-link
                            :to="{ name: 'profile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } }">
                            <b-icon icon="person-circle"></b-icon>
                          </router-link>
                        </slot>
                        <slot v-else>
                          <router-link :to="{ name: 'login' }">
                            <b-icon icon="person-circle"></b-icon>
                          </router-link>
                        </slot>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="menu-bottom-second">
  
  
  
                  <div class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
  
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li>
                            <router-link to="/">Home</router-link>
                          </li>
  
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Category
                            </a>
                            <ul class="dropdown-menu">
  
                              <li class="nav-item dropdown-submenu category-figure"
                                v-for="(megaCategory, megaIndex) in categoryList" :key="megaIndex">
                                <a class="dropdown-menu-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false" @click="gotoCategoryPage(megaCategory)">
                                  {{ megaCategory.title }}
                                </a>
                                <slot v-if="megaCategory.sub_category.length != null">
                                  <ul class="dropdown-menu ">
  
                                    <li class="nav-item dropdown-submenu category-figure"
                                      v-for="(subCategory, subCategoryIndex) in megaCategory.sub_category"
                                      :key="subCategoryIndex">
                                      <a class="nav-link dropdown-submenu-toggle" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false"
                                        @click="gotoCategoryPage(subCategory)">
                                        {{ subCategory.title }}
                                      </a>
                                      <ul class="dropdown-menu" v-if="subCategory.sub_category != null">
                                        <li v-for="(normalCategory, normalCategoryIndex) in subCategory.sub_category"
                                          :key="normalCategoryIndex"><a class="nav-link  dropdown-sub-submenu-toggle"
                                            href="#" @click="gotoCategoryPage(normalCategory)">{{ normalCategory.title
                                            }}</a></li>
  
                                      </ul>
                                    </li>
                                  </ul>
  
                                </slot>
                                <slot v-else>
  
                                </slot>
  
                              </li>
                            </ul>
                          </li>
  
                          <li>
                            <router-link to="/comboOffer">Combo Offer</router-link>
                          </li>
  
                          <!-- <li>
                              <router-link to="/flash-sale">Flash Sale</router-link>
                              </li> -->
                          <li>
                            <router-link to="/all-vandor" class="vendor">All Vendors</router-link>
                          </li>
                          <router-link to="/all-brand" class="brand">
                            <li>
                              All Brands
                            </li>
                          </router-link>
  
                        </ul>
  
                      </div>
                    </div>
                  </div>
  
  
  
                </div>
              </div>
            </div>
  
          </div>
        </template>
  
        <template v-slot:second-header>
          <div class="menu-part-second">
  
            <div class="loyel-container">
              <div class="menu-bottom">
                <div class="loyel-container menu-bottom-first">
                  <router-link to="/">
                    <div class="logo">
                      <span ckass="logo">
                        <!-- <router-link to="/">LOYEL</router-link>-->
                      </span> <img :src="baseUrl + globalData.shop_logo">
                    </div>
                  </router-link>
                  <div class="search-bar-slider-header">
                    <SlidingHeaderSearch />
                  </div>
  
                  <div class="righ-part">
  
  
                  </div>
  
                </div>
  
  
              </div>
            </div>
  
          </div>
        </template>
      </sliding-header>
      </nav>
    
      <!-- <nav class="mobile-header">
        <router-link :to="{name:'MobileCategory'}">
          <label for="drop" class="toggle-category"><img class="google-img" src="@/assets/images/allcategory.png" alt=""
            style="height: 45px;opacity: 1.0;background: #fff;width:45px;margin-top: 15px;"></label>
        </router-link>
  
        <input type="checkbox" id="drop" />
       
      </nav> -->
    </div>
  </template>
  
  <script>
  
  import Search from '@/components/layout/search'
  import SlidingHeaderSearch from '@/components/layout/sliderHeadersearch'
  import CategorySlider from '@/components/slider/topCategorySlider'
  import SlidingHeader from "@/layout/SlidingHeader.vue";
  export default {
    name: 'headerComponent',
    components: {
      Search,
      CategorySlider,
      SlidingHeader,
      SlidingHeaderSearch
    },
    data() {
      return {
        categoryList: [],
        msg: 'header',
  
        baseUrl: this.$baseUrl,
        sellerUrl:this.$sellerUrl,
  
        // wishListCount:'',
      }
    },
    beforeMount() {
      this.getUserInfo();
  
      this.getCategory();
      // this.getWishListCount();
    },
  
    computed: {
      wishListCount() {
        return this.$store.state.wishListCount;
      },
      cartCount() {
        return this.$store.state.cartCount;
      },
      globalData() {
        return this.$store.state.globalData;
      }
  
  
    },
    created() {
      this.$store.dispatch('fetchGlobalData');
    },
  
    methods: {
  
      getUserInfo() {
  
        let token = window.localStorage.getItem("customerToken");
  
        let config = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        };
        // let formData=new FormData();
        this.$http.get('/customer/get/info', config)
          .then(response => {
            if (response.data.msgFlag == true) {
              window.localStorage.setItem('customerInfo', JSON.stringify(response.data.customerInfo));
              this.$store.commit('storeCustomerInfo', response.data.customerInfo);
            }
            else {
              window.localStorage.setItem('customerInfo', null);
              window.localStorage.setItem('customerToken', null);
            }
          })
          .catch(error => { console.dir(error) })
          .finally();
      },
  
      gotoCategoryPage(dataInfo) {
        this.$router.push({ name: 'categoryPage', params: { slug: dataInfo.slug.split(' ').join('-') } });
      },
      getCategory() {
        this.$http.get("get/category/list")
          .then(response => {
            this.categoryList = response.data;
          })
          .catch(error => { console.dir(error) })
          .finally();
      },
  
      // getWishListCount(){
  
      //         let token=window.localStorage.getItem("customerToken");
  
      //         let config = {
      //             headers: {
      //                 'Authorization': 'Bearer '+token
      //             }   
      //         };
      //             // let formData=new FormData();
      //             this.$http.get('/customer/wish/list/count',config)
      //             .then(response=>{
      //                 console.log(response.data);
      //             this.wishListCount = response.data.wishListCount;
      //             })
      //             .catch(error=>{console.dir(error)})
      //             .finally();
      //         },
    }
  }
  </script>
  
  <style lang="scss"  scoped>
  
  
  .dropdown-menu {
    height: 500px;
  }
  
  .sliding-header {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }
  
  
  
  .menu-bottom-second {
  
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  
  .navbar-nav .nav-link {
    color: #fff;
  }
  
  .dropdown-submenu .dropdown-toggle {
    color: #000000A6;
    margin-left: 1em;
  }
  
  .dropdown-submenu .dropdown-menu-toggle {
    color: #000000A6;
    margin-left: 1em;
  }
  
  .dropdown-submenu .dropdown-submenu-toggle {
    color: #000000A6;
    margin-left: 1em;
  }
  
  .dropdown-submenu .dropdown-sub-submenu-toggle {
    color: #000000A6;
    margin-left: 1em;
  }
  
  
  
  .dropdown-item:hover {
    background-color: rgb(248, 247, 247);
    color: #fff;
  }
  
  .dropdown .dropdown-menu {
    display: none;
  }
  
  .dropdown:hover>.dropdown-menu,
  .dropdown-submenu:hover>.dropdown-menu {
    display: block;
    margin-top: 0.125em;
    margin-left: 0.125em;
    width: 350px;
  }
  
  
  
  
  
  
  
  .menu {
    overflow-y: scroll;
    position: relative;
    padding: 0 20px 20px 20px;
    // height: calc(100vh - 52px);
    // padding-bottom: 150px;
  }
  
  h1 {
    margin-top: 100px;
    text-align: center;
    font-size: 60px;
    line-height: 70px;
    font-family: 'roboto', sans-serif;
  }
  
  #container {
    margin: 0 auto;
    max-width: 890px;
  }
  
  p {
    text-align: center;
  }
  
  .toggle,
  [id^=drop] {
    display: none;
  }
  
  nav {
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
  
  #logo {
    display: block;
    padding: 0 30px;
    float: left;
    font-size: 20px;
    line-height: 60px;
  }
  
  nav:after {
    content: "";
    display: table;
    clear: both;
  }
  
  nav ul {
    float: left;
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
  }
  
  nav ul li {
    margin: 0px;
    display: inline-block;
    float: left;
    background-color: #254441;
  }
  
  nav a {
    display: block;
    // padding: 0 20px;
    color: #FFF;
    font-size: 14px;
    line-height: 40px;
    text-decoration: none;
  }
  
  .mobile-header ul li ul li:hover {
    background: #fff;
  }
  
  .mobile-header a:hover {
    background-color: #fff;
  }
  
  nav ul ul {
    display: none;
    position: absolute;
    top: 60px;
    z-index: 1;
  }
  
  nav ul li:hover>ul {
    display: inherit;
  }
  
  nav ul ul li {
    width: 170px;
    float: none;
    display: list-item;
    position: relative;
  }
  
  nav ul ul ul li {
    position: relative;
    top: -60px;
    left: 170px;
  }
  
  
  
  li>a:only-child:after {
    content: '';
  }
  
  
  
  #lblCartCount {
    font-size: 16px;
    background: #1F1F1F;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -10px;
  }
  
  .badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
  }
  
  
  
  
  
  
  .menu-top-right a {
    margin-left: 20px;
  }
  
  .mune-top-left>*:hover {
    color: var(--action-btn-hover-color);
    transition: .2s;
  }
  
  .menu-top-right>*:hover {
    color: var(--action-btn-hover-color);
    transition: .3s;
  }
  
  
  
  .menu-bottom-second {
    height: 50%;
  }
  
  /* bottom menu ul li  start*/
  .menu-bottom-second .navbar .container-fluid .navbar-collapse .navbar-nav {
    height: 100%;
    padding: 0;
    list-style: none;
    display: flex;
    /* flex-flow: row wrap; */
    grid-column-gap: 30px;
    align-items: flex-end;
    justify-content: center;
  }
  
  .menu-bottom-second ul li {
    padding: 8px 0px 12px;
    transition: .1s;
    cursor: pointer;
  }
  
  .menu-bottom-second ul li:hover {
    background: #dcd2d2;
  
  }
  
  /* bottom menu ul li  end*/
  
  .container-width {
  
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  
  
  
  .righ-part {
    display: flex;
    grid-column-gap: 20px;
    align-items: center;
  }
  
  .icon-list {
    display: flex;
    font-size: 25px;
    color: white;
    grid-column-gap: 15px;
  }
  
  .icon-list>* {
    cursor: pointer;
  }
  
  .news-feed a:hover {
    color: var(--action-btn-hover-color);
    transition: .3s;
  }
  
  .offer-zone a:hover {
    color: var(--action-btn-hover-color);
    transition: .3s;
  }
  
  .icon-list>*:hover {
    color: var(--action-btn-hover-color);
    transition: .3s;
  }
  
  
  
  a:hover {
    color: white;
    text-decoration: none;
  }
  
  .search-bar-slider-header {
    margin-top: 10px;
  }
  
  
  
  
  
  
  
  //responsive query Start 
  @media (min-width:0px) and (max-width:299px) {
    .categories {
    margin-left: 65px;
    margin-top: -48px;
  }
    
  }
  
  @media (min-width:300px) {
    .categories {
    margin-left: 65px;
    margin-top: -62px;
  }
    
  }
  
  
  @media all and (max-width : 767px) {
    .header-main{
      display: none;
    }
    .menu-bottom {
    height: 0px;
  
  }
  
  .menu-part-second {
    width: 100%;
    height: 68px;
    background: #1877f2;
  
  }
  
  
  
  .menu-top {
    width: 100%;
    height: 40px;
    background: #1877f2;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  .menu-part {
      width: 100%;
      height: 90px;
      background: #1877f2;
    }
  
    .logo img {
      height: 30px;
    }
  
    .menu-bottom-first {
      height: 50%;
      display: flex;
      width: 97%;
      grid-column-gap: 20px;
      /* flex-flow: row wrap; */
      justify-content: space-between;
      align-items: center;
    }
  
    .search-bar {
      position: relative;
      // flex-basis:100%;
  
  
      // grid-column-gap: 20px;
      // -webkit-box-align: right;
      // -ms-flex-align: right;
      align-items: right;
    }
  
    .search-bar-slider-header {
      position: relative;
      // flex-basis:100%;
  
  
      // grid-column-gap: 20px;
      // -webkit-box-align: right;
      // -ms-flex-align: right;
      align-items: right;
    }
  
    .menu-bottom-second {
      display: none;
    }
  
    .news-feed {
      display: none;
    }
  
    .offer-zone {
      display: none;
    }
  
    .cart {
      display: none;
    }
  
    .wishlist {
      display: none;
    }
  
    .login-profile {
      display: none;
    }
  
    .curr {
      display: none;
    }
  
    .lang {
      display: none;
    }
  #logo {
    display: block;
    padding: 0;
    width: 100%;
    text-align: center;
    float: none;
  }
  
  nav {
    margin: 0;
  }
  
  .toggle+a,
  .menu {
    display: none;
  }
  
  .toggle {
    display: block;
    background-color: #254441;
    padding: 0 20px;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    line-height: 40px;
    text-decoration: none;
    border: none;
  }
  
  .toggle:hover {
    background-color: #000000;
  }
  
  [id^=drop]:checked+ul {
    display: block;
  }
  
  nav ul li {
    display: block;
    width: 100%;
  }
  
  nav ul ul .toggle,
  nav ul ul a {
    padding: 0 40px;
  }
  
  nav ul ul ul a {
    padding: 0 80px;
  }
  
  .mobile-header a:hover,
  .mobile-header ul ul ul a {
    background-color: #fff;
  }
  
  nav ul li ul li .toggle,
  nav ul ul a {
    background-color: #212121;
  }
  
  .mobile-header ul ul {
    float: none;
    position: static;
    color: #ffffff;
  }
  
  nav ul ul li:hover>ul,
  nav ul li:hover>ul {
    display: none;
  }
  
  nav ul ul li {
    display: block;
    width: 100%;
  }
  
  nav ul ul ul li {
    position: static;
  
  }
  
  li>a:after {
    content: ' +';
  }
  }
  
  @media all and (max-width : 330px) {
  
  nav ul li {
    display: block;
    width: 94%;
  }
  
  
  }
  
  @media (min-width: 200px) and (max-width: 767px) {
  .mobile-header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
    // position: fixed;
    width: 100%;
    z-index: 3;
    // margin-top: 95px;
  }
  
  .mobile-header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }
  
  .mobile-header li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
  }
  
  .mobile-header li a:hover,
  .mobile-header .menu-btn:hover {
    background-color: #f4f4f4;
  }
  
  .mobile-header .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }
  
  
  
  .mobile-header .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }
  
  
  
  .mobile-header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }
  
  .mobile-header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }
  
  .mobile-header .menu-icon .navicon:before,
  .mobile-header .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }
  
  .mobile-header .menu-icon .navicon:before {
    top: 5px;
  }
  
  .mobile-header .menu-icon .navicon:after {
    top: -5px;
  }
  
  
  
  .mobile-header .menu-btn {
    display: none;
  }
  
  .mobile-header .menu-btn:checked~.menu {
    max-height: 240px;
  }
  
  .mobile-header .menu-btn:checked~.menu-icon .navicon {
    background: transparent;
  }
  
  .mobile-header .menu-btn:checked~.menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  
  .mobile-header .menu-btn:checked~.menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  
  .mobile-header .menu-btn:checked~.menu-icon:not(.steps) .navicon:before,
  .mobile-header .menu-btn:checked~.menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  }
  
  @media (min-width: 320px) and (max-width: 499px) {
    .logo img {
      height: 20px;
    }
  
    .menu-bottom-first {
      height: 50%;
      display: flex;
      width: 90%;
      grid-column-gap: 20px;
      margin-top:10px;
      /* flex-flow: row wrap; */
      justify-content: space-between;
      align-items: center;
    }
  
    .search-bar {
      position: relative;
      /* display: none; */
    }
  
  }
  
  @media (min-width: 768px) {
    .mobile-header-main{
      display: none;
    }
    .menu-bottom {
    height: 108px;
  
  }
  
  .navbar-nav .dropdown-menu .category-figure>a:hover:before {
    position: absolute;
    content: "\003E";
    font-size: 25px;
    font-weight: bold;
    /* display: none; */
    /* top: 0%; */
    right: 0;
    margin-top: 14px;
    margin-right: 20px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-family: 'icomoon';
  }
  
  .dropdown-submenu .category-figure>a:hover:before {
    position: absolute;
    content: "\003E";
    font-size: 25px;
    font-weight: bold;
    /* display: none; */
    /* top: 0%; */
    right: 0;
    margin-top: 14px;
    margin-right: 20px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-family: 'icomoon';
  }
  
  
  .dropdown-menu-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
  
    border-top: 0px;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  
  .dropdown-submenu-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
  
    border-top: 0px;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  
  .dropdown-sub-submenu-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
  
    border-top: 0px;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  
  .dropdown .nav-link {
    padding: 0px;
  }
  
  .header .menu-icon {
    display: none;
  }
  
  .menu-top {
    width: 100%;
    height: 32px;
    background: #131921;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  
  .navbar-expand-lg .navbar-collapse {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
    }
  
    .mb-lg-0 {
      margin-bottom: 0 !important;
    }
  
    .navbar-expand-lg .navbar-nav {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  
  
    .dropdown-submenu:hover>.dropdown-menu {
      position: absolute;
      top: 0;
      left: 100%;
    }
  
    .dropdown-submenu .dropdown-toggle {
      margin-left: 0.5em;
    }
  
    .dropdown-submenu .dropdown-menu-toggle {
      margin-left: 0.5em;
    }
  
  }
  
  @media(min-width: 768px) and (max-width: 999px) {
  
  .news-feed {
    display: none;
  }
  
  .offer-zone {
    display: none;
  }
  
  .vendor {
    display: none;
  }
  
  .brand {
    display: none;
  }
  
  .news-feed {
    display: none;
  }
  
  
  }
  
  @media (min-width: 1500px) {
    .mobile-header {
      display: none;
    }
  
    .logo img {
      height: 45px;
    }
  
    .menu-bottom-first {
      height: 50%;
      display: flex;
      width: 1500px;
      grid-column-gap: 20px;
      /* flex-flow: row wrap; */
      justify-content: space-between;
      align-items: center;
    }
  
    .search-bar {
      position: relative;
      flex-basis: 585px;
    }
  
    .search-bar-slider-header {
      position: relative;
      flex-basis: 585px;
    }
  
    .menu-part {
      width: 100%;
      height: 140px;
      background: #1877f2;
    }
  
    .menu-part-second {
      width: 100%;
      height: 65px;
      background: #1877f2;
  
    }
  }
  
  @media (min-width: 768px) and (max-width: 1499px) {
    .menu-part {
      width: 100%;
      height: 140px;
      background: #1877f2;
    }
  
    .menu-part-second {
      width: 100%;
      height: 65px;
      background: #1877f2;
  
    }
  
    .mobile-header {
      display: none;
    }
  
    .logo img {
      height: 30px;
    }
  
    .menu-bottom-first {
      height: 50%;
      display: flex;
      width: 97%;
      grid-column-gap: 20px;
      /* flex-flow: row wrap; */
      justify-content: space-between;
      align-items: center;
    }
  
    .search-bar {
      position: relative;
      flex-basis: 285px;
    }
  
    .search-bar-slider-header {
      position: relative;
      flex-basis: 285px;
    }
  
  }
  
  .header{
    min-height:90px;
  }
  
  
  
  .row > * {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 0px; 
    padding-left: 0px; 
    margin-top: var(--bs-gutter-y);
}
  </style>