<template>
    <div class="user-layout-mobile">
      <header-page/>
        <div class="user-pages" >
              <div class="loyel-container ">
                  <div class="loyel-container user-content-wrapper-mobile">
                   
                      
                      <div class="right-part-mobile">
                          <router-view/>
                      </div>
                  </div>
              </div>
             
        </div>
      <footer-page/>
    </div>
  </template>
  
  <script>
  import headerPage from '@/layout/userHeaderComponent'
  import footerPage from '@/layout/footerComponent'
  import UserSidebar from '@/components/user/userSidebar'

  export default {
    name: 'userLayout',
    components:{
      headerPage,
      footerPage,
      UserSidebar,
     
    },
    data() {
      return {
        msg:'appFile'
      }
    }
  }
  </script>
  
  <style>
  @import '../assets/css/style.css';
  @import '../assets/css/normalize.css';

  @media (min-width: 1px) and (max-width: 767px) {
    
    .user-left-mobile{
    width:100%;
  }
  }
  
  
  
  @media (min-width: 1540px) {
     
    
  .user-content-wrapper-mobile{
     /* padding:20px 0; */
     align-items: center;
     display: flex;
     width: 1500px;
  }
  }
  
  @media (min-width: 1200px) and (max-width: 1539px) {
   
   
  .user-content-wrapper-mobile{
     /* padding:20px 0; */
     align-items: center;
     display: flex;
     width: 1055px;
  }
  }
  
  @media (min-width: 1000px) and (max-width: 1199px) {
   
  
  .user-content-wrapper-mobile{
   /* padding:20px 0; */
   align-items: center;
   display: flex;
   width: 955px;
  }
  }
  
  @media (min-width: 800px) and (max-width: 999px) {
   
  .user-content-wrapper-mobile{
   /* padding:20px 0; */
   align-items: center;
   display: flex;
   width: 755px;
  }
  }
  
  @media (min-width: 600px) and (max-width: 799px) {
   
   
  .user-content-wrapper-mobile{
   /* padding:20px 0; */
   align-items: center;
   display: flex;
   width: 555px;
  }
  }
  
  @media (min-width: 400px) and (max-width: 599px) {
   
   
  .user-content-wrapper-mobile{
   /* padding:20px 0; */
   align-items: center;
   display: flex;
   width: 100%;
  
  }
  }
  
  @media (min-width: 320px) and (max-width: 399px) {
   
  .user-content-wrapper-mobile{
   /* padding:20px 0; */
   align-items: center;
   display: flex;
   width: 100%;
  
  }
  }

  .right-part-mobile{
      width: 100%;
      min-height: 100%;
  
  }
  
 
  
  .user-pages{
    background: #f4f4f4;
    margin: 10px;
  }
  
  </style>
  