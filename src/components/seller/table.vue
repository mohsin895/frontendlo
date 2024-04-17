<template>
    <b-row>
      <b-col cols="8">
        <div class="tableVue">
          <div class="Recent_order">
            <span> Recent Order</span>
            <div class="Filter_order">
              <select name="" id="">
                <option aria-placeholder="report" value="Report">Report</option>
                <option value="">Pending</option>
                <option value="">Delevered</option>
                <option value="">Recevied</option>
              </select>
            </div>
          </div>
  
          <table class="table text-center">
            <thead class="table text-center">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Payment method</th>
                <th>Seller</th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="(dataInfo,dataInfoIndex) in totalOrderItem" :key="dataInfoIndex">
                <td>
                  <div class="td-item"># {{ dataInfo.randomOrderCode }}</div>
                </td>
                <td>
                  <div class="td-item">
                    <div class="icon-with-text">
                      <div
                        class="icon"
                        v-if="dataInfo.customer_info.avatar != NULL"
                      >
                        <img
                          style="height: 40px; width: 40px; border-radius: 50%"
                          :src="baseUrl + dataInfo.customer_info.avatar"
                        />
                      </div>
                      <div v-else>
                        <img
                          style="height: 40px; width: 40px; border-radius: 50%"
                          :src="dataInfo.customer_info.avatar"
                        />
                      </div>
                    </div>
                    <div class="icon-text">
                      <div class="text-center">
                        {{ dataInfo.customer_info.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="td-item">
                    <div class="" v-if="dataInfo.order_items.length > 0">
                      <slot v-for="item in dataInfo.order_items">
                        {{ item.product_info.name | subStr }}
                      </slot>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="td-item">
                    <div class="after-order-text">৳ {{ dataInfo.price }}</div>
                  </div>
                </td>
                <td>
                  <div class="after-payment-icon">
                    <slot v-if="dataInfo.is_cash_on == 1"> COD </slot>
                    <slot v-else> Online </slot>
                  </div>
                </td>
                <td>
                  <div class="td-item">
                    <div class="activity">
                      <div>SR Footwear</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="after-order-icon">
                    <slot v-if="dataInfo.is_cash_on == 1"> Pending </slot>
                  
                    <slot v-else> Receving </slot>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class=" Nav_Recent_order">
            <div class="Filter_order">
              <!-- Pagination Disabled & Active -->
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                            <a class="page-link" href="#">2 <span class="sr-only"></span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="4">
        <div class="tableVue">
          <div class="Recent_order">
            <span> Top Sales Products</span>
            <div class="Filter_order">
              <select name="" id="">
                <option value="">By Order</option>
                <option aria-placeholder="report" value="Report">By Stock</option>
                <option value="">By Sell</option>
              </select>
            </div>
          </div>
  
          <table class="table text-center">
            <thead class="table text-center">
              <tr>
                <th>Seller</th>
                <th>Category</th>
                <th>Total Sell</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="dataInfo in totalOrderItem" :key="dataInfo">
                <td>
                  <div class="td-item">
                    <div class="icon-with-text">
                      <div
                        class="icon"
                        v-if="dataInfo.customer_info.avatar != NULL"
                      >
                        <img
                          style="height: 40px; width: 40px; border-radius: 50%"
                          :src="baseUrl + dataInfo.customer_info.avatar"
                        />
                      </div>
                      <div v-else>
                        <img
                          style="height: 40px; width: 40px; border-radius: 50%"
                          :src="dataInfo.customer_info.avatar"
                        />
                      </div>
                      <br />
                    </div>
                    <div class="icon-text">
                      <div class="text-center">
                        {{ dataInfo.customer_info.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="td-item">
                    Seller category
                    <!-- <div class="" v-if="dataInfo.order_items.length > 0">
                      <slot v-for="item in dataInfo.order_items">
                        {{ item.product_info.name | subStr }}
                      </slot>
                    </div> -->
                  </div>
                </td>
                <td>
                  <div class="td-item">
                    <div class="after-order-text">৳ {{ dataInfo.price }}</div>
                  </div>
                </td>
  
                <td>
                  <div class="td-item">
                    <div class="activity">
                      <div>52,356</div>
                      <div>Stock</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class=" Nav_Top_Seller">
            <div class="Filter_order">
              <!-- Pagination Disabled & Active -->
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item ">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1 </a></li>
                        <li class="page-item ">
                            <a class="page-link" href="#">2 </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </template>
  
  <script>
  export default {
    name: "tablevue",
    data() {
      return {
        orderList: [],
        totalOrderItem: "",
        baseUrl: this.$baseUrl,
      };
    },
    beforeMount() {
      this.getOrderList();
      // this.getUserPermissionList();
    },
    filters: {
      subStr: (string) => {
        return string.substring(0, 10) + "...";
      },
    },
  
    methods: {
      getOrderList() {
        let token = window.localStorage.getItem("token");
  
        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        // let formData=new FormData();
        this.$http
          .get("/dashboard/get/order/list", config)
          .then((response) => {
            console.log(response.data);
            this.totalOrderItem = response.data.totalOrderItem;
          })
          .catch((error) => {
            console.dir(error);
          })
          .finally();
      },
    },
  };
  </script>
  
  
  <style scoped lang="scss">
  /* table css start  */
  table {
    width: 100%;
    padding: 0 20px;
    background-color: #fff;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    box-shadow: 0 1px 1px #999797, 0 -1px 1px #999797;
  }
  table tr {
    align-content: center ;
    text-align:center center ;
    height: auto;
    &:hover {
      background-color: #d1dcff;
    }
    
  }
  table th {
    padding-left: 10px;
    background-color: none !important;
  }
  table td {
    align-content: center ;
    text-align:center center ;
    padding: 5px 10px;
  }
  table td,
  
  table td:nth-child(5) {
    text-align: center;
  }
  table tr:nth-child(even) {background-color: #f2f2f2;}
  table tr:nth-child(even):hover {background-color: #d1dcff;}
  /* table css end  */
  /* table image or icon css start  */
  .icon-with-text {
    display: flex;
    justify-content: center;
    grid-column-gap: 5px;
    text-align: left;
    font-size: 0.8rem;
  }
  .order-icon {
    width: 50px;
    height: 25px;
    font-size: 11px;
    background: #ff5c00;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: white;
  }
  .after-order-icon {
    width: 50px;
    height: 20px;
    font-size: 11px;
    background: #ffda62;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: white;
  }
  .after-payment-icon {
    width: 50px;
    height: 20px;
    font-size: 11px;
    background: #ff8181;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff;
  }
  .Recent_order {
    width: 100%;
    height: 50px;
    background: #fff;
    font-size: 20px;
    font-weight: 600;
    padding: 15px;
    color: #5f5f5f;
  }
  .Filter_order {
    float: right;
    font-size: 15px;
  }
  .Filter_order select {
    width: 100px;
    height: 25px;
    border: none !important;
    background-color: #fafafa !important;
    &:hover {
      background-color: #f3f3f3 !important;
    }
  }
  /* table image or icon css end  */
  </style>