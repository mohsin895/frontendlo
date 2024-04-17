<template>
    <div class="auth-page-wrapper pt-5">
         <!-- auth page bg -->
         <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
             <div class="bg-overlay"></div>
 
             <div class="shape">
                 <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                     <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                 </svg>
             </div>
         </div>
 
         <!-- auth page content -->
         <div class="auth-page-content">
             <div class="container">
                 <div class="row">
                     <div class="col-lg-12">
                         <div class="text-center mt-sm-5 mb-4 text-white-50">
                             <div>
                                 <a :href="siteUrl" class="d-inline-block auth-logo" target= '_blank' >
                                     <!-- <img src="@/assets/images/login.png" alt="" height="20" style="height: 120px;"> -->
                                     <img :src="baseUrl + globalData.shop_logo" height="20" style="height: 50px;"> 
                                 </a>
                             </div>
                             <div class="mb-5 text-white-50">
                                <h1 class="display-5 coming-soon-text">Site is Under Maintenance</h1>
                                <p class="fs-14">Please check back in sometime</p>
                                <div class="mt-4 pt-2">
                                    <a href="index.html" class="btn btn-success"><i class="mdi mdi-home me-1"></i> Back to Home</a>
                                </div>
                            </div>
                             <!-- <p class="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p> -->
                         </div>
                     </div>
                 </div>
                 <!-- end row -->
 
                 <div class="row justify-content-center mb-5">
                                <div class="col-xl-4 col-lg-8">
                                    <div>
                                        <img src="@/assets/images/maintenance.png" alt="" class="img-fluid" style="  height: 365px;
    width: 365px;
    display: block;
    margin-left: auto;
    margin-right: auto;">
                                    </div>
                                </div>
                            </div>
                 <!-- end row -->
             </div>
             <!-- end container -->
         </div>
         <!-- end auth page content -->
 
         <!-- footer -->
         <footer class="footer">
             <div class="container">
                 <div class="row">
                     <div class="col-lg-12">
                         <div class="text-center">
                             <p class="mb-0 text-muted">&copy;{{ new Date().getFullYear() }} Loyel. Crafted with  by Loyel IT Corporation
                                
                             </p>
                         </div>
                     </div>
                 </div>
             </div>
         </footer>
         <!-- end Footer -->
     </div>
 </template>


<script>

export default {
    name:'auth-page-wrapper',
   
    data() {
        return {
            msg:'footer',
         
            baseUrl:this.$baseUrl,
        }
    },
 
    computed: {
      
  globalData() {
            return this.$store.state.globalData;
        }
  
},
created() {
        this.$store.dispatch('fetchGlobalData');
    },
    methods:{
     
    }
}
</script>
<style scoped>
#login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-wrapper {
  width: 400px;
  height: 300px;
  background: rgb(44, 211, 155);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

form input {
  margin-bottom: 10px;
}
button .login {
  width: 100px;
}
/* 

//design start */

.pt-5 {
    padding-top: 3rem!important;
}


.auth-one-bg {
   
    /* background-image: url('@/assets/images/auth-one-bg.jpg'); */
    background-position: center;
    background-size: cover;
}

.auth-one-bg-position {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 390px;
    
}
.auth-one-bg .bg-overlay {
    background: -webkit-gradient(linear,left top,right top,from(#364574),to(#405189));
    background: linear-gradient(to right,#364574,#405189);
    opacity: .9;
}

.bg-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    opacity: .7;
    background-color: #000;
}

.shape {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
}

.shape>svg {
    width: 100%;
    height: auto;
    fill: #fff;
}

img, svg {
    vertical-align: middle;
}

canvas {
    aspect-ratio: auto 1903 / 380;
}
.particles-js-canvas-el {
    position: relative;
}

.auth-page-wrapper .auth-page-content {
    padding-bottom: 60px;
    position: relative;
    z-index: 2;
    width: 100%;
}

.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
 
    width: 100%;
    padding-right: calc(var(1.5rem) * .5);
    padding-left: calc(var(1.5rem) * .5);
    margin-right: auto;
    margin-left: auto;
}


/* .row {

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(0));
    margin-right: calc(-.5 * var(1.5rem));
    margin-left: calc(-.5 * var(1.5rem));
} */

.justify-content-center {
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
}

/* .row {
   
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(0));
    margin-right: calc(-.5 * var(1.5rem));
    margin-left: calc(-.5 * var(1.5rem));
} */

.row>* {
    position: relative;
}
@media (min-width: 1200px){
  .col-xl-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 41.66666667%;
}

}

@media (min-width: 992px){
  .col-lg-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 50%;
}

}

@media (min-width: 768px){
  .col-md-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 66.66666667%;
}

}

@media (min-width: 576px){
  .mt-sm-5 {
    margin-top: 3rem!important;
}

}

.text-white-50 {
    --vz-text-opacity: 1;
    color: rgba(255,255,255,.5)!important;
}
.text-center {
    text-align: center!important;
}
.mb-4 {
    margin-bottom: 1.5rem!important;
}
.row>* {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--vz-gutter-x) * .5);
    padding-left: calc(var(--vz-gutter-x) * .5);
    margin-top: var(--vz-gutter-y);
}

.card {
    margin-bottom: 1.5rem;
    -webkit-box-shadow: 0 1px 2px rgba(56,65,74,.15);
    box-shadow: 0 1px 2px rgba(56,65,74,.15);
}
.mt-4 {
    margin-top: 1.5rem!important;
}
.card {
    --vz-card-spacer-y: 1rem;
    --vz-card-spacer-x: 1rem;
    --vz-card-title-spacer-y: 0.5rem;
    --vz-card-border-width: 0;
    --vz-card-border-color: rgba(0, 0, 0, 0.125);
    --vz-card-border-radius: 0.25rem;
    --vz-card-box-shadow: 0 1px 2px rgba(56, 65, 74, 0.15);
    --vz-card-inner-border-radius: 0.25rem;
    --vz-card-cap-padding-y: 1rem;
    --vz-card-cap-padding-x: 1rem;
    --vz-card-cap-bg: #fff;
    --vz-card-bg: #fff;
    --vz-card-img-overlay-padding: 1rem;
    --vz-card-group-margin: 0.75rem;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    height: var(--vz-card-height);
    word-wrap: break-word;
    background-color: var(--vz-card-bg);
    background-clip: border-box;
    border: var(--vz-card-border-width) solid var(--vz-card-border-color);
    border-radius: var(--vz-card-border-radius);
}

.p-4 {
    padding: 1.5rem!important;
}
.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: var(--vz-card-spacer-y) var(--vz-card-spacer-x);
    color: var(--vz-card-color);
}

.justify-content-center {
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
.row {
   
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(0));
    margin-right: calc(-.5 * var(1.5rem));
    margin-left: calc(-.5 * var(1.5rem));
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 0.9rem;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}


.form-label {
    margin-bottom: 0.5rem;
}

label {
    font-weight: 500;
    margin-bottom: 0.5rem;
}
label {
    display: inline-block;
}

button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

*, ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

/* input:not([type="range"]):not([type="color"]) {
    writing-mode: horizontal-tb !important;
}

input[type="text" i] {
    padding: 1px 2px;
} */

.btn-success{
  background-color: #0ab39c;
}

.w-100 {
    width: 100%!important;
}


a {
    text-decoration: none!important;
}
.auth-page-wrapper{
    min-height: calc(100vh - 10px);
    background: #fff;
}

.coming-soon-text {
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 3px 4px #0ab39c;
}

:is(.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6) {
    font-family: Poppins,sans-serif;
}
@media (min-width: 1200px){
.display-5 {
    font-size: 3rem;
}
}
.image-fluid{
    height: 365px;
    width: 365px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
