import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
// import HelloWorld from '@/components/HelloWorld'
import fallback from '@/layout/404'
import mainLayout from '@/layout/mainLayout'
import mainLayoutSecond from '@/layout/mainLayoutSecond'
import userLayout from '@/layout/userLayout'

import heropage from '@/pages'
import profile from '@/pages/user/profile'
import customerProfileEdit from '@/pages/user/updateProfile'
import addressAdd from '@/pages/user/addressAdd'
import addressEdit from '@/pages/user/addressEdit'
import Wishlist from '@/pages/user/wishlist'
import store from '@/pages/user/store'
import orderManage from '@/pages/user/orderManage'
import ProductReview from '@/pages/user/review'
import RefundOrReturnOrderProduct from '@/pages/user/refundOrReturnOrder'
import ConfirmRefundOrReturnOrderProduct from '@/pages/user/confirmRefundOrder'
import customerInvoice from '@/pages/user/invoice'
import OrderTracking from '@/pages/user/orderTracking'
import manageAddress from '@/pages/user/manageAddress'
import reviewsList from '@/pages/user/reviews'
import couponCodeList from '@/pages/user/couponCode'
import myBank from '@/pages/user/myBank'
import changePassword from '@/pages/user/changePassword'


import SMSVerify from '@/pages/user/profile/verifySms'
import UpdateMobile from '@/pages/user/profile/updatePhone'
import UpdateEmail from '@/pages/user/profile/updateEmail'
import SMSVerifyNew from '@/pages/user/profile/verifySmsNew'
import addEmailVerify from '@/pages/user/profile/emailVerify'
import chnageEmailVerifyOtp from '@/pages/user/profile/changeEmailOtp'
import otp from '@/pages/user/otp'


import categoryPage from '@/pages/categoryPage'
import subCategoryPage from '@/pages/categoryPage/subSubCatProduct'
import allCategory from '@/pages/categoryPage/allCategory'
import comboPage from '@/pages/comboPage'
import todayDeal from '@/pages/todayDeal'
import wholeSale from '@/pages/wholeSale'
import mostViewProduct from '@/pages/mostView'
import recentViewProduct from '@/pages/recentView'
import latestProduct from '@/pages/latestProduct'
import offerZone from '@/pages/offerzone'
import newsFeed from '@/pages/newsFeed'
import featureProduct from '@/pages/featureProduct'
import brandProduct from '@/pages/brand/product'
import vandorProduct from '@/pages/vandor/product'
import premiumPackge from '@/pages/premiumPackge/index'
import signup from '@/pages/user/signup'
import login from '@/pages/user/login'
import signinforCheckout from '@/pages/user/signinforCheckout'
import forgetPassword from '@/pages/user/forgetPassword'

import customerOtp from '@/pages/user/customerOtp'
import cartView from '@/pages/cart/cartView'
import checkOut from '@/pages/cart/checkOut'

import orderSuccess from '@/pages/cart/orderSuccess'
import productPage from '@/pages/product/productView'


//brand
import AllBrand from '@/pages/brand/AllBrand'

//vandor
import AllVandor from '@/pages/vandor/AllVandor'
import shop from '@/pages/vandor/shop'
import supperProduct from '@/pages/supper/product'
import shockingProduct from '@/pages/shockingDeal/product'
import flashSale from '@/pages/flashSale'

//footer
import career from '@/pages/footer/career'
import customerCare from '@/pages/footer/CustomerCare'
import faq from '@/pages/footer/FAQ'
import privecyPolicy from '@/pages/footer/PrivacyPolicy'
import requestForQuestion from '@/pages/footer/requestForQuestion'
import returnPolicy from '@/pages/footer/ReturnPolicy'
import termsOfUse from '@/pages/footer/TermsOfUse'
//mobile responsive
import MobileCheckout from '@/pages/mobile/checkout'
import MobileAccount from '@/components/user/userSidebar'
import MobileCategory from '@/pages/mobileCategory/category'
import MobileAllReview from '@/components/product/mobile/all-reviews'
import Maintaince from '@/pages/maintaince'
import MobileCart from '@/pages/mobile/cart'


Vue.use(Router)
Vue.use(VueMeta)

const router= new Router({
  routes: [

    {
      path: '/mobileCategory',
      name: 'MobileCategory',
      component: MobileCategory
    },
    {
      path: '/mobileCart',
      name: 'MobileCart',
      component: MobileCart
    },
    {
      path: '/mobileCheckout',
      name: 'MobileCheckout',
      component: MobileCheckout
    },
    {
      path: '/maintaince',
      name: 'Maintaince',
      component: Maintaince
    },

    {
      path: '/product/mobile-all-review/:dataId/:slug',
      name: 'MobileAllReview',
      component: MobileAllReview
    },
    // main layout routes
    {
      path: '/',
       //name: 'mainLayout',
      component: mainLayout,
      children:[
        
        {
          path: '',
          name: 'heropage',
          component: heropage
        },
        
        {
          path: 'category/:slug',
          name: 'categoryPage',
          component: categoryPage
        },
      ]
    },
    
    {
      path: '/',
     
      component: mainLayoutSecond,
      children:[
        {
          path: 'signup',
          name: 'signup',
          component: signup
        },
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'checkout/login',
          name: 'signinfor.checkout',
          component: signinforCheckout
        },
        {
          path: 'forget-password',
          name: 'forgetPassword',
          component: forgetPassword
        },
        {
          path: 'otp',
          name: 'otp',
          component: otp
        },
        
        {
          path: 'customer-otp',
          name: 'customerOtp',
          component: customerOtp
        },
       
        
        {
          path: 'subcategory/:slug',
          name: 'subCategoryPage',
          component: subCategoryPage
        },
        {
          path: 'category',
          name: 'allCategory',
          component: allCategory
        },
        {
          path: 'comboOffer',
          name: 'comboPage',
          component: comboPage
        },
        {
          path: 'todayDeal',
          name: 'todayDeal',
          component: todayDeal
        },

        {
          path: 'wholeSale',
          name: 'wholeSale',
          component: wholeSale
        },
        {
          path: 'mostViewProduct',
          name: 'mostViewProduct',
          component: mostViewProduct
        },
        {
          path: 'recentViewProduct',
          name: 'recentViewProduct',
          component: recentViewProduct
        },
        {
          path: 'latestProduct',
          name: 'latestProduct',
          component: latestProduct
        },

        {
          path: 'flash-sale',
          name: 'flashSale',
          component: flashSale
        },

        {
          path: 'offerZone',
          name: 'offerZone',
          component: offerZone
        },
        {
          path: 'newsFeed',
          name: 'newsFeed',
          component: newsFeed
        },
        {
          path: 'feature-product',
          name: 'featureProduct',
          component: featureProduct
        },
        {
          path: 'product/:slug',
          name: 'productPage',
          component: productPage
        },
        {
          path: 'cart/view',
          name: 'cartView',
          component: cartView
        },
        {
          path: 'checkout',
          name: 'checkOut',
          component: checkOut
        },
       
        {
          path: '/order/:orderId/success',
          name: 'Order.Success',
          component: orderSuccess
        },
        {
          path: 'all-brand',
          name: 'AllBrand',
          component: AllBrand
        },
        {
          path: 'brand/:slug',
          name: 'brandProduct',
          component: brandProduct
        },
        {
          path: 'all-vandor',
          name: 'AllVandor',
          component: AllVandor
        },

       
        {
          path: 'vandor/:slug',
          name: 'vandorProduct',
          component: vandorProduct
        },
        {
          path: 'all-packge',
          name: 'premiumPackge',
          component: premiumPackge
        },

        {
          path: 'shop/:slug',
          name: 'shop',
          props: true,
          component: shop
        },
        {
          path: 'supperProduct/:slug',
          name: 'supperProduct',
          component: supperProduct
        },
        {
          path: 'shockingProduct/:slug',
          name: 'shockingProduct',
          component: shockingProduct
        },
        
        {
          path: 'career',
          name: 'career',
          component: career
        },
        {
          path: 'customerCare',
          name: 'customerCare',
          component: customerCare
        },
        {
          path: 'faq',
          name: 'faq',
          component: faq
        },
        {
          path: 'privecyPolicy',
          name: 'privecyPolicy',
          component: privecyPolicy
        },
        {
          path: 'requestForQuestion',
          name: 'requestForQuestion',
          component: requestForQuestion
        },
        {
          path: 'returnPolicy',
          name: 'returnPolicy',
          component: returnPolicy
        },
        {
          path: 'termsOfUse',
          name: 'termsOfUse',
          component: termsOfUse
        },

        
      ]
    },
   

    {
      path:'/customer/:name',
      // name: 'userLayout',
      component: userLayout,
      redirect: {path: 'profile'},
      
      
      children:[
        {
          path:'profile',
          name: 'profile',
          component: profile
        },
        {
          path:'mobileAccount',
          name: 'MobileAccount',
          component: MobileAccount
        },
        {
          path:'wishlist',
          name: 'Wishlist',
          component: Wishlist
        },
        {
          path:'store',
          name: 'store',
          component: store
        },
        {
          path:'review-manage',
          name: 'reviewsList',
          component: reviewsList
        },
        {
          path:'coupon-code',
          name: 'couponCodeList',
          component: couponCodeList
        },
        
        {
          path:'order-manage',
          name: 'orderManage',
          component: orderManage
        },
        {
          path: 'orderTracking/:dataId',
          name: 'OrderTracking',
          component: OrderTracking
        },
        {
          path: 'productReview/:dataId',
          name: 'ProductReview',
          component: ProductReview
        },

        {
          path: 'refundOrReturnOrderProduct/:dataId',
          name: 'RefundOrReturnOrderProduct',
          component: RefundOrReturnOrderProduct
        },

        {
          path: 'confirmRefundOrReturnOrderProduct/:dataId',
          name: 'ConfirmRefundOrReturnOrderProduct',
          component: ConfirmRefundOrReturnOrderProduct
        },
        {
          path:':dataId/order-invoice',
          name: 'customerInvoice',
          component: customerInvoice
        },
        {
          path:'manage-address',
          name: 'manageAddress',
          component: manageAddress
        },
        {
          path:'manage-address/add',
          name: 'addressAdd',
          component: addressAdd
        },
        {
          path:'manage-address/:dataId/edit',
          name: 'addressEdit',
          component: addressEdit
        },
        {
          path:'my-bank',
          name: 'myBank',
          component: myBank
        },
       
        
        {
          path:'change-password',
          name: 'changePassword',
          component: changePassword
        },
       
        {
          path: 'profile/edit',
          name: 'customerProfileEdit',
          component: customerProfileEdit
        },
        {
          path: 'sms/verify',
          name: 'SMSVerify',
          component: SMSVerify
        },
        {
          path: 'sms/verify/new',
          name: 'SMSVerifyNew',
          component: SMSVerifyNew
        },
        {
          path: 'update/phone',
          name: 'UpdateMobile',
          component: UpdateMobile
        },
        {
          path: 'update/email',
          name: 'UpdateEmail',
          component: UpdateEmail
        },
        {
          path: 'add/email',
          name: 'addEmailVerify',
          component: addEmailVerify
        },
        {
          path: 'change/email/otp',
          name: 'chnageEmailVerifyOtp',
          component: chnageEmailVerifyOtp
        },
      ]
    },


      //seller layout 


    {
      path: '*',
      name: 'catchAll',
      component: fallback
    }
  ],
  mode:'history',
  base: process.env.BASE_URL,
});


// router.beforeEach((to, from, next) => {

//   const hasToken = localStorage.getItem('globalData'); 
//   if (to.name !== 'Maintaince'  && hasToken =='yes') {
   
//     next({ name: 'Maintaince' });
//   }else if(to.name == 'Maintaince'  && hasToken =='no'){
//     next({ name: 'heropage' });

//   } else {
//     next(); 
//   }
// });

export default router;
