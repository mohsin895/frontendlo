<template>
    <div class="header">
     
      <nav class="mobile-header-main-loyel-cart" style="height:60px ;padding-top: 25px;">
        <sliding-header :threshold-hide="200" :threshold-open="400">
        <template v-slot:first-header>
          <div class="menu-part">
           
            <div class="loyel-container">
              <div class="menu-bottom">
                <div class="loyel-container menu-bottom-first" style="margin-left: 10px;">
                  <router-link to="/">
                    <div class="logo"  v-if="globalData">
                      <img :src="baseUrl + globalData.shop_logo">
                    </div>
                  </router-link>
                  <div class="search-bar">
                    <Search />
                  </div>
                  <div class="righ-part">
                   
                  
                    <div class="icon-list ">
                     
                      <div class="notification">
                        <b-icon icon="bell-fill"></b-icon>
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
                       <img :src="baseUrl + globalData.shop_logo">
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
    
    
    </div>
  </template>
  
  <script>
  
  import Search from '@/components/layout/search';
  import SlidingHeaderSearch from '@/components/layout/sliderHeadersearch'

  import SlidingHeader from "@/layout/SlidingHeader.vue";
  export default {
    name: 'headerComponent',
    components: {
      Search,
      SlidingHeaderSearch,
      SlidingHeader,
    
    },
    data() {
      return {
       
        msg: 'header',
  
        baseUrl: this.$baseUrl,
  
        // wishListCount:'',
      }
    },
    beforeMount() {
      this.getUserInfo();
  
    },
  
    computed: {
      
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
    margin-right: 40px;
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
  
  
  
  @media all and (max-width : 767px) {
    .header-main{
      display: none;
    }
    .menu-bottom {
    height: 0px;
  
  }
  
  .menu-part-second {
    width: 100%;
    height: 60px;
    background: #232f3e;
  
  }
  
  
  
  a {
    color: #fff;
    text-decoration: none;
  }
  .menu-part {
      width: 100%;
      height: 60px;
      background: #232f3e;
    }
  
    .logo img {
      height: 25px;
    }
  
    .menu-bottom-first {
      height: 50%;
      display: flex;
      width: 97%;
      margin-top: 20px;
      grid-column-gap: 20px;
      /* flex-flow: row wrap; */
      justify-content: space-between;
      align-items: center;
    }
  
    .search-bar {
      position: relative;
    
      align-items: right;
    }
  
    .search-bar-slider-header {
      position: relative;

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
  
  
  }
  
  @media all and (max-width : 330px) {
  
  nav ul li {
    display: block;
    width: 94%;
  }
  
  
  }
  
  @media (min-width: 200px) and (max-width: 767px) {
  
    .logo{
      width: 45px;
      display: block;
      padding-left: 10px;
    }
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
  
  @media (min-width: 0px) and (max-width: 767) {
    .logo img {
      height: 20px;
    }
  
    .menu-bottom-first {
      height: 50%;
      display: flex;
      width: 90%;
      margin-top:15px;
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
  
  @media (min-width: 768px) {
   
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
      height: 60px;
      background: #232f3e;
    }
  
    .menu-part-second {
      width: 100%;
      height: 65px;
      background: #232f3e;
  
    }
  }
  
  @media (min-width: 768px) and (max-width: 1499px) {
    .menu-part {
      width: 100%;
      height: 60px;
      background: #232f3e;
    }
  
    .menu-part-second {
      width: 100%;
      height: 65px;
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
  
    .search-bar-slider-header {
      position: relative;
      flex-basis: 285px;
    }
  
  }
  
  
  
  .full-page-scroll {
  width: 100%;
  height: 100vh; /* Set the height to cover the entire viewport */
  overflow: hidden; /* Hide overflowing content */
  position: relative; /* Position relative for child elements */
}
  
     
.mobile-app-icon-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index:99;
		background-color: white;
		border-top: 1px solid #0b1a2d2e;
		box-shadow: 0 0 20px #0b1a2d59;
		padding: 15px 0;
	}
	
	.mobile-app-icon-bar button {
		border: none;
		color: #ee222b;
		font-size: 18px;
		background-color: transparent;
		border-radius: 85px;
		padding: 2px 8px;
		/*box-shadow: 0 0 8px #3c3c3cd1;*/
	}
	.mobile-app-icon-bar a {
		border: none;
		color: #ee222b;
		/*color: #0b1a2d;*/
		font-size: 18px;
		background-color: transparent;
		border-radius: 85px;
		padding: 0px;
		/*box-shadow: 0 0 8px #3c3c3cd1;*/
	}
	
	.wishlist-count-foot, .cart-count-foot, .compare-count-foot {
		position: absolute;
		font-size: 15px;
		transform: translateY(-30%);
		font-weight: 600;
	}



    

  </style>