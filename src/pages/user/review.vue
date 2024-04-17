<template>
    <div id="invoice">
        <div class="invoice overflow-auto">
            <div class="container">
                <div style="min-width: 600px">
                    <header>
                        <div class="row">
                            <div class="col company-details">
                                <h2 class="name">Product Review</h2>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div class="row contacts">
                            <div class="rate">
                                <input type="radio" id="star5" name="rating" v-model="rating" value="5" />
                                <label for="star5" title="5">5 stars</label>
                                <input type="radio" id="star4" name="rating" v-model="rating" value="4" />
                                <label for="star4" title="4">4 stars</label>
                                <input type="radio" id="star3" name="rating" v-model="rating" value="3" />
                                <label for="star3" title="3">3 stars</label>
                                <input type="radio" id="star2" name="rating" v-model="rating" value="2" />
                                <label for="star2" title="2">2 stars</label>
                                <input type="radio" id="star1" name="rating" v-model="rating" value="1" />
                                <label for="star1" title="1">1 star</label>
                            </div>

                            <div class="product-photo">
                                <div class="loyel-box-style">
                                    <div class="head">

                                        <p>You can upload multiple product image in here</p>
                                    </div>
                                    <hr />
                                    <div class="input-field">
                                        <ImgUpload v-model="pro_imgs" />
                                    </div>
                                </div>
                            </div>

                            <div class="product-description">
                                <div class="loyel-box-style">
                                    <div class="head">
                                        <h6>Description:</h6>
                                    </div>
                                    <hr />
                                    <div class="input-field">
                                        <textarea class="form-control" v-model="description" placeholder="Enter your text here..."></textarea>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                    </main>

                    <header>
                        <div class="row">
                            <div class="col company-details">
                                <h2 class="name">Seller Review</h2>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div class="row contacts">
                            <div class="sellerrate">
                                <input type="radio" id="sellerstar5" name="sellerrating" v-model="sellerRating" value="5" />
                                <label for="sellerstar5" title="5">5 stars</label>
                                <input type="radio" id="sellerstar4" name="sellerrating" v-model="sellerRating" value="4" />
                                <label for="sellerstar4" title="4">4 stars</label>
                                <input type="radio" id="sellerstar3" name="sellerrating" v-model="sellerRating" value="3" />
                                <label for="sellerstar3" title="3">3 stars</label>
                                <input type="radio" id="sellerstar2" name="sellerrating" v-model="sellerRating" value="2" />
                                <label for="sellerstar2" title="2">2 stars</label>
                                <input type="radio" id="sellerstar1" name="sellerrating" v-model="sellerRating" value="1" />
                                <label for="sellerstar1" title="1">1 star</label>
                            </div>

                            <div class="product-description">
                                <div class="loyel-box-style">
                                    <div class="head">
                                        <h6>Description:</h6>
                                    </div>
                                    <hr />
                                    <div class="input-field">
                                        <textarea class="form-control" v-model="sellerDescription" placeholder="Enter your text here..."></textarea>
                                    </div>
                                </div>
                            </div>
                         
                        </div>

                    </main>

                    <header>
                        <div class="row">
                            <div class="col company-details">
                                <h2 class="name">Rider Review</h2>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div class="row contacts">
                            <div class="riderrate">
                                <input type="radio" id="riderstar5" name="riderrating" v-model="riderRating" value="5" />
                                <label for="riderstar5" title="5">5 stars</label>
                                <input type="radio" id="riderstar4" name="riderrating" v-model="riderRating" value="4" />
                                <label for="riderstar4" title="4">4 stars</label>
                                <input type="radio" id="riderstar3" name="riderrating" v-model="riderRating" value="3" />
                                <label for="riderstar3" title="3">3 stars</label>
                                <input type="radio" id="riderstar2" name="riderrating" v-model="riderRating" value="2" />
                                <label for="riderstar2" title="2">2 stars</label>
                                <input type="radio" id="riderstar1" name="riderrating" v-model="riderRating" value="1" />
                                <label for="riderstar1" title="1">1 star</label>
                            </div>

                            <div class="product-description">
                                <div class="loyel-box-style">
                                    <div class="head">
                                        <h6>Description:</h6>
                                    </div>
                                    <hr />
                                    <div class="input-field">
                                        <textarea class="form-control" v-model="riderDescription" placeholder="Enter your text here..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-2 d-flex flex-row-reverse">
                                <button class="btn btn-info m-2 text-light" @click="shareReview()">
                                    Share Review
                                </button>

                            </div>
                        </div>

                    </main>

                </div>
                
            </div>

         
        </div>
    </div>
</template>
 
<script>
import ImgUpload from '@/components/re-useable/ImagesUpload'

export default {
    components: {
        ImgUpload,
       
    },
    name: 'invoice',
    data() {
        return {
            msg: 'invoice',
            orderInfo: {},
            dataList: '',
            baseUrl: this.$baseUrl,
            itemId: '',
            message: '',
            rating: null,
            riderRating: null,
            sellerRating: null,
            pro_imgs: null,
            description: '',
            SellerDescription: '',
            SellerDescription: '',
            dataId: this.$route.params.dataId,
            // orderItem:{
            //     id:'',
            // }
        }
    },
    beforeMount() {
        this.loadDataInfo();

    },
    methods: {

        async loadDataInfo() {
            let token = window.localStorage.getItem("customerToken");
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            };
            await this.$http
                .get("/customer/product/review/info?dataId=" + this.dataId, config)
                .then((response) => {
                    if (response.data.msgFlag == true) {
                        // console.log(response.data);
                        let dataInfo = response.data.dataInfo;
                        this.rating = dataInfo.rating;
                        this.description = dataInfo.description;
                        this.sellerRating = dataInfo.seller_rating;
                        this.sellerDescription = dataInfo.seller_description;
                        this.riderRating = dataInfo.rider_rating;
                        this.riderDescription = dataInfo.rider_description;
                        // this.targetUrl = dataInfo.target_url;
                        // this.sliderImage = this.$baseUrl + dataInfo.slider_url;
                    }
                })
                .catch((error) => {
                    console.dir(error);
                })
                .finally();
        },
        formSubmitPrevent(e) {
            // e.preventDefault();
        },



        async shareReview() {
           
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            let formData = new FormData();
            formData.append("dataId", this.dataId);
            formData.append("description", this.description);
            formData.append("rating", this.rating);
            formData.append("sellerDescription", this.sellerDescription);
            formData.append("sellerRating", this.sellerRating);
            formData.append("riderDescription", this.riderDescription);
            formData.append("riderRating", this.riderRating);
            // for (let i = 0; i < files.length; i++) {
            //     formData.append('pro_imgs[]', files[i]);
            // }

            for (const img of this.pro_imgs) {
           formData.append('images[]', img);
           }

            await this.$http.post("/customer/product/review", formData, config)
                .then(response => {
                    if (response.data.msgFlag == true) {
                        // console.dir(response.data);

                        this.$toaster.success(response.data.msg);
                    }
                    if (response.data.errMsgFlag == true) {
                        this.$toaster.warning(response.data.errMsg);
                    }

                })
                .catch(error => { console.dir(error) })
                .finally();
        },
    }
}
</script>
 
 
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
}

.rate:not(:checked)>input {
    position: absolute;
    top: -9999px;
}

.rate:not(:checked)>label {
    text-align: center;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 40px;
    color: #ccc;
    margin-top: -40px;
}

.rate:not(:checked)>label:before {
    content: '★ ';
}

.rate>input:checked~label {
    color: #ffc700;
}

.rate:not(:checked)>label:hover,
.rate:not(:checked)>label:hover~label {
    color: #deb217;
}

.rate>input:checked+label:hover,
.rate>input:checked+label:hover~label,
.rate>input:checked~label:hover,
.rate>input:checked~label:hover~label,
.rate>label:hover~input:checked~label {
    color: #c59b08;
}

.sellerrate {
    float: left;
    height: 46px;
    padding: 0 10px;
}

.sellerrate:not(:checked)>input {
    position: absolute;
    top: -9999px;
}

.sellerrate:not(:checked)>label {
    text-align: center;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 40px;
    color: #ccc;
    margin-top: -40px;
}

.sellerrate:not(:checked)>label:before {
    content: '★ ';
}

.sellerrate>input:checked~label {
    color: #ffc700;
}

.sellerrate:not(:checked)>label:hover,
.sellerrate:not(:checked)>label:hover~label {
    color: #deb217;
}

.sellerrate>input:checked+label:hover,
.sellerrate>input:checked+label:hover~label,
.sellerrate>input:checked~label:hover,
.sellerrate>input:checked~label:hover~label,
.sellerrate>label:hover~input:checked~label {
    color: #c59b08;
}

.riderrate {
    float: left;
    height: 46px;
    padding: 0 10px;
}

.riderrate:not(:checked)>input {
    position: absolute;
    top: -9999px;
}

.riderrate:not(:checked)>label {
    text-align: center;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 40px;
    color: #ccc;
    margin-top: -40px;
}

.riderrate:not(:checked)>label:before {
    content: '★ ';
}

.riderrate>input:checked~label {
    color: #ffc700;
}

.riderrate:not(:checked)>label:hover,
.riderrate:not(:checked)>label:hover~label {
    color: #deb217;
}

.riderrate>input:checked+label:hover,
.riderrate>input:checked+label:hover~label,
.riderrate>input:checked~label:hover,
.riderrate>input:checked~label:hover~label,
.riderrate>label:hover~input:checked~label {
    color: #c59b08;
}

@media (min-width: 1540px) {

    .invoice {
        display: flex;

        flex-direction: row;
        align-items: center;
        max-width: 1500px;
    }
}

@media (min-width: 1200px) and (max-width: 1549px) {
    .invoice {
        display: flex;

        flex-direction: row;
        align-items: center;
        max-width: 900px;
    }

}

/* .invoice {
     position: relative;
     background-color: #FFF;
     min-height: 680px;
     padding: 15px;
 } */
.invoice .container {
    border: #DFE0E1 solid 1px;
    background: #fff;
    padding: 20px;
}

.invoice header {
    padding: 10px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid #DFE0E1;
}

.invoice .company-details h2 {
    text-align: left;
    color: #53db50;
    padding-bottom: 20px;
    padding-top: 10px;
}

.invoice .company-details .name {
    margin-top: 0;
    margin-bottom: 0;
}

.invoice .contacts {
    margin-bottom: 20px;
}

.invoice .invoice-no .invoice_no {
    padding-bottom: 10px;
}

.invoice .invoice-no .name {
    padding-bottom: 10px;
}

.invoice .invoice-no .phone {
    padding-bottom: 10px;
}

.invoice .invoice-no span {
    font-weight: 700;
}


.invoice .invoice-details {
    text-align: right;
    margin-right: 10px;
}

.invoice .invoice-details span {
    font-weight: 700;
}

.invoice .invoice-details .invoice-id {
    margin-top: 0;
    color: #000000;
}

// .invoice main {
//     padding-bottom: 50px;
// }


.invoice main .notices .notice {
    font-size: 1.2em
}

.invoice table {
    width: 100%;
    margin-bottom: 20px
}

.invoice table thead tr th {
    text-align: center;
    padding: 15px;
    background: #DFE0E1;
    border-bottom: 1px solid #DFE0E1;
    border: #DFE0E1 1px solid;
    font-weight: 700;
}

.invoice table tbody tr td {
    text-align: center;
    font-size: 15px;
    border: #DFE0E1 1px solid;
    padding-top: 20px;
    padding-bottom: 20px;
}

.invoice table th {
    font-weight: 400;
    font-size: 16px;
}


.invoice table tfoot td {
    background: #DFE0E1;
    border: #DFE0E1 1px solid;
    white-space: nowrap;
    text-align: right;
    padding: 10px 20px;
    font-size: 1.2em;
    border-top: 1px solid #aaa;
}

.invoice table tfoot tr:first-child td {
    border-top: none
}

.invoice table tfoot tr:last-child td {
    color: #000000;
    font-weight: 600;
    font-size: 1.4em;
    border-top: 1px solid #3989c6
}

.invoice table tfoot tr td:first-child {
    border: none
}

.invoice footer {
    width: 100%;
    text-align: center;
    color: rgb(0, 0, 0);
    border-top: 1px solid #DFE0E1;
    padding-top: 15px;
}

.invoice footer span {
    font-weight: 600;
}

@media print {
    .invoice {
        font-size: 11px !important;
        overflow: hidden !important
    }

    .invoice footer {
        position: absolute;
        bottom: 10px;
        page-break-after: always
    }

    .invoice>div:last-child {
        page-break-before: always
    }
}
.name{
    font-size: 1.5rem;
}
.head{
    margin-bottom: 10px;
}
.input-field{
    margin-bottom: 10px;
}

</style>