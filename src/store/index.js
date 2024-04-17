import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';



Vue.use(Vuex)

let priceInfos = window.localStorage.getItem("priceInfos");
let customerInfo = window.localStorage.getItem("customerInfo");
let sellerInfo = window.localStorage.getItem("sellerInfo");
let sellerToken = window.localStorage.getItem("sellerInfo");
let customerToken = window.localStorage.getItem("sellerInfo");



const store = new Vuex.Store({
    state: {
    orderHistory:null,
    orderDetails:null,
    globalData: null,

    priceInfos: priceInfos ? JSON.parse(priceInfos) : [],
    customerInfo: customerInfo ? JSON.parse(customerInfo) : null,
    sellerInfo: sellerInfo ? JSON.parse(sellerInfo) : null,
    temporaryCustomer:null,
    temporarySeller:null,
  
    productInfos:[],
     onlinePaymentUrl: "https://seller.loyel.com.bd/loyelApi/public/order/",
    //onlinePaymentUrl: "http://localhost/loyal/public/order/",
    
  },
  mutations: {
    setGlobalData(state, data) {
      state.globalData = data;
  },
    storeOrderHistory(state,datas){state.orderHistory=datas;},
    storeOrderDetails(state,datas){state.orderDetails=datas;},

    storePriceInfos(state,datas){
        state.priceInfos=datas;
        window.localStorage.removeItem("priceInfos");
        window.localStorage.setItem("priceInfos", JSON.stringify(state.priceInfos));
    },
 
      storeProductDetails(state,datas){
              state.productInfos=datas;     
      },
      storeCustomerInfo(state,datas) { 
        state.customerInfo=datas;
        window.localStorage.removeItem("customerInfo");
        window.localStorage.setItem("customerInfo", JSON.stringify(state.customerInfo));
      },
 

      storeSellerInfo(state,datas) { 
        state.sellerInfo=datas;
        window.localStorage.removeItem("sellerInfo");
        window.localStorage.setItem("sellerInfo", JSON.stringify(state.sellerInfo));
      },
      storeTemporaryCustomer(state,datas){state.temporaryCustomer=datas},
      storeTemporarySeller(state,datas){state.temporarySeller=datas},
  },
  actions: {
    fetchGlobalData({ commit }) {
      //const  globalUrl="http://localhost/loyal/public/api/get/setting/info";
      const  globalUrl="https://seller.loyel.com.bd/loyelApi/public/api/get/setting/info";
      axios.get(globalUrl)
          .then(response => {
              commit('setGlobalData', response.data);
        
              window.localStorage.setItem("globalData", response.data.user_panel_down);
          })
          .catch(error => {
              console.error('Error fetching global data:', error);
          });
  },
}
})


export default store;