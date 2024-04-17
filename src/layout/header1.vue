<template>
    <div class="header">
  
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
                <router-link to="/seller-welcome">Sell On Loyel</router-link>
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
                  <router-link to="/newsFeed"><img class="google-img" src="@/assets/images/newsfeed.jpg" alt=""
                      style="height: 30px;opacity: 1.0;background: #fff;"></router-link>
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
                  <div class="wishlist">
                    <router-link :to="{ name: 'wishlist' }">
                      <b-icon icon="heart-fill"></b-icon>
                      <span class='badge badge-warning' id='lblCartCount'> {{ wishListCount }} </span>
                    </router-link>
  
                  </div>
                  <div class="notification">
                    <b-icon icon="bell-fill"></b-icon>
                  </div>
                  <div class="login-profile">
                    <slot v-if="$store.state.customerInfo != null">
                      <router-link :to="{ name: 'profile', params: { name: $store.state.customerInfo.name.split(' ').join('-') } } ">
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
                        <a class="nav-link dropdown-toggle" href="#" role="button"  data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Category
                        </a>
                        <ul class="dropdown-menu">
                         
                          <li class="nav-item dropend" v-for="(megaCategory, megaIndex) in categoryList" :key="megaIndex">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                              aria-expanded="false" @click="gotoCategoryPage(megaCategory)">
                              {{ megaCategory.title }}
                            </a>
                            <ul class="dropdown-menu " v-if="megaCategory.sub_category != null">
                              
                              <li class="nav-item dropend" v-for="(subCategory, subCategoryIndex) in megaCategory.sub_category" :key="subCategoryIndex">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false" @click="gotoCategoryPage(subCategory)">
                                  {{ subCategory.title }}
                                </a>
                                <ul class="dropdown-menu" v-if="subCategory.sub_category != null">
                                  <li v-for="(normalCategory, normalCategoryIndex) in subCategory.sub_category" :key="normalCategoryIndex"><a class="nav-link dropdown-item dropdown-toggle" href="#" @click="gotoCategoryPage(normalCategory)">{{ normalCategory.title }}</a></li>
                                  
                                </ul>
                              </li>
                            </ul>
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
  
  
              <!-- <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
  
                </li>
                <li>
                  <router-link to="/feature-product">Featured Products</router-link>
                </li>
                <li>
                  <router-link to="/todayDeal">Todays Deal</router-link>
                </li>
  
  
  
                <li>
                  <router-link to="/comboOffer">Combo Offer</router-link>
                </li>
  
                <li>
                  <router-link to="/flash-sale">Flash Sale</router-link>
                </li>
                <li>
                  <router-link to="/all-vandor" class="vendor">All Vendors</router-link>
                </li>
                <router-link to="/all-brand" class="brand">
                  <li>
                    All Brands
                  </li>
                </router-link>
              </ul> -->
  
  
            </div>
          </div>
        </div>
  
      </div>
  
  
      <nav class="mobile-header">
        <label for="drop" class="toggle-category"><img class="google-img" src="@/assets/images/menu.png" alt=""
            style="height: 45px;opacity: 1.0;background: #fff;width:70px"></label>
        <div class="categories">
          <div class="loyel-container brands-top"></div>
          <CategorySlider />
        </div>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li><a href="#">Home</a></li>
  
          <li>
  
            <!-- First Tier Drop Down -->
            <label for="drop-200" class="toggle">Category +</label>
  
            <input type="checkbox" id="drop-200" />
            <ul>
  
              <li v-for="(megaCategory, megaIndex) in categoryList" :key="megaIndex">
  
  
                <label :for="'drop-' + megaCategory.id" class="toggle"> <span @click="gotoCategoryPage(megaCategory)">{{
                  megaCategory.title }}</span> +</label>
  
                <input type="checkbox" :id="'drop-' + megaCategory.id" />
                <ul v-if="megaCategory.sub_category != null">
  
  
  
                  <li v-for="(subCategory, subCategoryIndex) in megaCategory.sub_category" :key="subCategoryIndex">
                    <label :for="'drop-' + subCategory.id" class="toggle"><span @click="gotoCategoryPage(subCategory)">{{
                      subCategory.title }} </span>+</label>
  
                    <input type="checkbox" :id="'drop-' + subCategory.id" />
                    <ul v-if="subCategory.sub_category != null">
  
  
  
                      <li v-for="(normalCategory, normalCategoryIndex) in subCategory.sub_category"
                        :key="normalCategoryIndex"><a @click="gotoCategoryPage(normalCategory)">{{ normalCategory.title
                        }}</a>
                      </li>
  
  
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
  
          <!-- <li>
                              <router-link to="/wholeSale">Whole Sale</router-link>
                              </li> -->
          <!-- <li>
                              <router-link to="/feature-product">Featured Products</router-link>
                              </li> -->
          <!-- <li>
                              <router-link to="/todayDeal">Todays Deal</router-link>
                              </li> -->
          <li>
            <router-link to="/comboOffer">Combo Offer</router-link>
          </li>
          <li>
            <router-link to="/all-vandor" class="vendor">All Vendors</router-link>
          </li>
          <li>
            <router-link to="/all-brand" class="brand">
  
              All Brands
  
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  
  import Search from '@/components/layout/search'
  import CategorySlider from '@/components/slider/topCategorySlider'
  export default {
    name: 'headerComponent',
    components: {
      Search,
      CategorySlider
    },
    data() {
      return {
        categoryList: [],
        msg: 'header',
  
        baseUrl: this.$baseUrl,
  
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
  
  
  .menu-bottom-second{
  
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  .navbar-nav .nav-link {
    color: #fff;
  }
  
  .dropend .dropdown-toggle {
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
  .dropend:hover>.dropdown-menu {
    display: block;
    margin-top: 0.125em;
    margin-left: 0.125em;
  }
  
  @media screen and (min-width: 769px) {
    .dropend:hover>.dropdown-menu {
      position: absolute;
      top: 0;
      left: 100%;
    }
  
    .dropend .dropdown-toggle {
      margin-left: 0.5em;
    }
  }
  
  .categories {
    margin-left: 100px;
    margin-top: -70px;
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
    padding: 0 20px;
    color: #FFF;
    font-size: 14px;
    line-height: 40px;
    text-decoration: none;
  }
  
  nav ul li ul li:hover {
    background: #000000;
  }
  
  nav a:hover {
    background-color: #000000;
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
  
  
  /* Media Queries
  --------------------------------------------- */
  
  @media all and (max-width : 768px) {
  
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
  
    nav a:hover,
    nav ul ul ul a {
      background-color: #000000;
    }
  
    nav ul li ul li .toggle,
    nav ul ul a {
      background-color: #212121;
    }
  
    nav ul ul {
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
  
  /* desktop and laptop */
  @media(min-width: 1px) and (max-width: 767px) {
  
    /* .menu-part{
      display: none;
    } */
    .menu-part {
      width: 100%;
      height: 90px;
      background: #fff;
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
  
  /* @media(min-width: 700px){
    .mobile-header-menu-part{
      display: none;
    }
    
  }
  @media (min-width: 200px) and (max-width: 700px) {
  .mobile-header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index: 3;
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
  
  .mobile-header .menu-btn:checked ~ .menu {
    max-height: 240px;
  }
  
  .mobile-header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  
  .mobile-header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  
  .mobile-header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  
  .mobile-header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .mobile-header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  } */
  /* 48em = 768px */
  
  /* @media (min-width: 48em) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  } */
  
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
  
  
  .menu-top {
    width: 100%;
    height: 32px;
    background: #131921;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  
  .menu-bottom {
    height: 108px;
  
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
  
    .menu-part {
      width: 100%;
      height: 140px;
      background: #232f3e;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1499px) {
    .menu-part {
      width: 100%;
      height: 140px;
      background: #232f3e;
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
      /* flex-flow: row wrap; */
      justify-content: space-between;
      align-items: center;
    }
  
    .search-bar {
      position: relative;
      /* display: none; */
    }
  
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
    padding: 8px 10px;
    transition: .1s;
    cursor: pointer;
  }
  
  .menu-bottom-second ul li:hover {
    background: #373737;
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
  
  
  
  
  
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    color: white;
    text-decoration: none;
  }
  </style>