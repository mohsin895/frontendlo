<template>
    <div class="voucher table-responsive">
        <div class="voucher-wrapper">
            <div class="wishlit-info">
          Vouchers List
            </div>
            <br>
            <table class="wish-list">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Active</th>
                        <th>Uses</th>
                  
                        <th>Voucher Code</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dataInfo,dataIndex in voucher.data" :key="dataIndex">
                        <td>{{++dataIndex }}</td>
                        <td v-if="dataInfo.status==1">
                            Yes
                           
                        </td>
                        <td v-else> No</td>
                        <td > </td>
     
                        <td>
                           {{ dataInfo.promo_code }}
                        </td>
                        <td >
                            {{ dataInfo.startAt }} 
                        </td>
                        <td >
                            {{ dataInfo.endAt }}
                       
                        </td>
                        <td v-if="dataInfo.isdiscount_in_percent==1">
                           
                       {{ dataInfo.discount_amount }} %
                        </td>
                        <td v-else>
                            {{ dataInfo.discount_amount }} ৳
                        </td>
                    </tr>
                </tbody>
            </table> 
            <div class="overflow-auto">
                <div class="mt-3">
                    <paginate
                          :page-count="lastPage"
                          :click-handler="dataByPaginate"
                          :prev-text="'<'"
                          :next-text="'>'"
                          :container-class="'pagination justify-content-end'"
                          :page-class="'page-item'"
                          :page-link-class="'page-link'"
                          :prev-class="'page-item'"
                          :prev-link-class="'page-link'"
                          :next-class="'page-item'"
                          :next-link-class="'page-link'"
                          :first-last-button="true"
                          :first-button-text="'<<'"
                          :last-button-text="'>>'"
                         
                          >

                         <span slot="prevContent">Changed previous button</span>
                          <span slot="nextContent">Changed next button</span>
                          <span slot="breakViewContent">
                            <svg width="16" height="4" viewBox="0 0 16 4">
                              <circle fill="#999999" cx="2" cy="2" r="2" />
                              <circle fill="#999999" cx="8" cy="2" r="2" />
                              <circle fill="#999999" cx="14" cy="2" r="2" />
                            </svg>
                          </span>
                        </paginate>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>

export default {
    name: 'voucher',
    data() {
        return {
            msg:'voucher',
            rows: 7,
            perPage: 1,
            currentPage: 2,
            voucher:[],
            pastPage:1,
            pageNo:1,
            lastPage:1,
            numOfData:50,
            baseUrl:this.$baseUrl,
        }


    },

 

    beforeMount(){
        this.getVoucherCodeList();
    },
    methods:{
  
         dataByPaginate(pageIndex){
            this.pageNo=pageIndex;
            this.getVoucherCodeList();
        },
      

        getVoucherCodeList(){
            let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/customer/get/voucher/list?page='+this.pageNo+'&numOfData='+this.numOfData,config)
                 .then(response=>{
                    console.log(response.data);
                        this.voucher=response.data;
                        this.lastPage=this.voucher.last_page;
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        }
    }
}
</script>

<style scoped>
.wish-list{
    background:#fff;
}
.wishlit-info {
    width: 100%;
    height: 50px;
    border: 1px solid #999999;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
}

/* table css  */
table {
    width: 100%;
}
table thead  tr{
    background: #DCDCDC;
    height: 50px;
}
table thead tr th {
    text-align: center;
}
table tbody tr td {
    border: 1px solid #DDDDDD;
    text-align: center;
}

table tbody tr td:nth-child(1) {
    padding:0 5px;
}
table tbody tr td:nth-child(2) {
    padding:10px;
}
table tbody tr td:nth-child(3) {
    text-align: left;
    padding: 0 5px;
}

table tbody tr td:nth-child(4) {
    padding:0 10px;
}
/* table css  */


.available-btn  {
    border: none;
    border-radius: 5px;
    background: #00A64C;
    color: white;
    padding: 5px 10px;
}
.addToCart-btn {
    border: none;
    border-radius: 5px;
    background: #1F1F1F;
    color: white;
    padding: 8px;
}
.icon .b-icon{
    cursor: pointer;
    font-size: 25px;
}
.product-image-wiseList{
    width: 200px;
    height: 150px;
}
</style>