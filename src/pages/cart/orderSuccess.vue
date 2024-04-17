<template>
    <div id="loyel-payemnt-method-landing">
        <div class="loyel-container">
            <div class="loyel-payemnt-method overflow-auto loyel-payemnt-method-desktop">

                <div style="min-width: 600px">
                    <header>
                        <div class="row">
                            <div class="col company-details">
                                <h2 class="name">Select Payment Method</h2>
                            </div>
                        </div>
                    </header>
                    <main>

                        <div class="row">
                            <div class="col-md-8 col-lg-8 col-sm-12 ">




                                <div class="product-content desktop-payment-content-first">



                                    <div class="tab-buttons">
                                        <span>
                                            <h5 v-on:click="activetab = '1'"
                                                v-bind:class="[activetab === '1' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/cod.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Cash on delivery</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '2'"
                                                v-bind:class="[activetab === '2' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/bkash.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Bkash payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '3'"
                                                v-bind:class="[activetab === '3' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/rocket.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Rocket Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '4'"
                                                v-bind:class="[activetab === '4' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/op.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Online Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '1'">
                                            <span>
                                                <div class="tab-pane fade show ">
                                                    <p>Cash on delivery</p>
                                                    <button class="proceed-to-checkout" :disabled="buttonDisabled"
                                                        v-on:click="orderPlacedCOD" @click="openModal">Confirm
                                                        Order</button>
                                                </div>
                                            </span>


                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '2'">

                                            <span v-if="activetab === '2'">
                                                <div class="tab-pane fade show">
                                                    <p>Bkash payment</p>
                                                </div>

                                            </span>

                                        </div>


                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '3'">


                                            <span v-if="activetab === '3'">
                                                <div class="tab-pane fade show">
                                                    <p>Rocket Payment</p>
                                                </div>

                                            </span>

                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '4'">


                                            <span v-if="activetab === '4'">
                                                <div class="tab-pane fade show">
                                                    <p>Online Payment</p>
                                                    <button class="proceed-to-checkout"
                                                        v-on:click="orderPlacedOnlinePayment" :disabled="buttonDisabled"
                                                        @click="openModal">Pay now</button>
                                                </div>

                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div class="product-content desktop-payment-content-second">



                                    <div class="tab-buttons">
                                        <span>
                                            <h5 v-on:click="activetab = '1'"
                                                v-bind:class="[activetab === '1' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/cod.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Cash on delivery</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '2'"
                                                v-bind:class="[activetab === '2' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/bkash.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Bkash payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '3'"
                                                v-bind:class="[activetab === '3' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/rocket.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Rocket Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>


                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '1'">
                                            <span>
                                                <div class="tab-pane fade show ">
                                                    <p>Cash on delivery</p>
                                                    <button class="proceed-to-checkout" :disabled="buttonDisabled"
                                                        v-on:click="orderPlacedCOD" @click="openModal">Confirm
                                                        Order</button>
                                                </div>
                                            </span>


                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '2'">

                                            <span v-if="activetab === '2'">
                                                <div class="tab-pane fade show">
                                                    <p>Bkash payment</p>
                                                </div>

                                            </span>

                                        </div>


                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '3'">


                                            <span v-if="activetab === '3'">
                                                <div class="tab-pane fade show">
                                                    <p>Rocket Payment</p>
                                                </div>

                                            </span>

                                        </div>

                                    </div>



                                    <div class="tab-buttons mt-2">

                                        <span>
                                            <h5 v-on:click="activetab = '4'"
                                                v-bind:class="[activetab === '4' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/op.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Online Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                    <br>
                                    <div class="tabs-section">

                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '4'">


                                            <span v-if="activetab === '4'">
                                                <div class="tab-pane fade show">
                                                    <p>Online Payment</p>
                                                    <button class="proceed-to-checkout"
                                                        v-on:click="orderPlacedOnlinePayment" :disabled="buttonDisabled"
                                                        @click="openModal">Pay now</button>
                                                </div>

                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div class="product-content desktop-payment-content-third">



                                    <div class="tab-buttons">
                                        <span>
                                            <h5 v-on:click="activetab = '1'"
                                                v-bind:class="[activetab === '1' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/cod.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Cash on delivery</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '2'"
                                                v-bind:class="[activetab === '2' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/bkash.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Bkash payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>


                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '1'">
                                            <span>
                                                <div class="tab-pane fade show ">
                                                    <p>Cash on delivery</p>
                                                    <button class="proceed-to-checkout" :disabled="buttonDisabled"
                                                        v-on:click="orderPlacedCOD" @click="openModal">Confirm
                                                        Order</button>
                                                </div>
                                            </span>


                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '2'">

                                            <span v-if="activetab === '2'">
                                                <div class="tab-pane fade show">
                                                    <p>Bkash payment</p>
                                                </div>

                                            </span>

                                        </div>



                                    </div>
                                    <div class="tab-buttons mt-3">

                                        <span>
                                            <h5 v-on:click="activetab = '3'"
                                                v-bind:class="[activetab === '3' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/rocket.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Rocket Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '4'"
                                                v-bind:class="[activetab === '4' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/op.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Online Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                    <br>
                                    <div class="tabs-section">



                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '3'">


                                            <span v-if="activetab === '3'">
                                                <div class="tab-pane fade show">
                                                    <p>Rocket Payment</p>
                                                </div>

                                            </span>

                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '4'">


                                            <span v-if="activetab === '4'">
                                                <div class="tab-pane fade show">
                                                    <p>Online Payment</p>
                                                    <button class="proceed-to-checkout"
                                                        v-on:click="orderPlacedOnlinePayment" :disabled="buttonDisabled"
                                                        @click="openModal">Pay now</button>
                                                </div>

                                            </span>

                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4">
                                <div class="loyel-payment-total-amount-container">
                                    <div class="loyel-payment-total-amount-card">
                                        <h2>Order Summery</h2>
                                        <span> Total Amount:৳
                                            {{ ((parseFloat(orderInfo.price) + parseFloat(orderInfo.delivery_charge)) -
                                                (parseFloat(orderInfo.discount) + parseFloat(orderInfo.promo_discount)))
                                                | formatNumberWithOutDecimal }}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>

                </div>


            </div>
            <div class="loyel-payemnt-method overflow-auto loyel-payemnt-method-mobile">

                <div style="min-width: 100%">
                    <header>
                        <div class="row">
                            <div class="col company-details">
                                <h2 class="name">Select Payment Method</h2>
                            </div>
                        </div>
                    </header>
                    <main>

                        <div class="row">
                            <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                <div class="loyel-payment-total-amount-container">
                                    <div class="loyel-payment-total-amount-card">
                                        <h2>Order Summery</h2>
                                        <span> Total Amount:৳
                                            {{ ((parseFloat(orderInfo.price) + parseFloat(orderInfo.delivery_charge)) -
                                                (parseFloat(orderInfo.discount) + parseFloat(orderInfo.promo_discount)))
                                                | formatNumberWithOutDecimal }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 col-lg-8 col-sm-12 ">




                                <div class="product-content mobile-payment-content-first">



                                    <div class="tab-buttons">
                                        <span>
                                            <h5 v-on:click="activetab = '1'"
                                                v-bind:class="[activetab === '1' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/cod.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Cash on delivery</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '2'"
                                                v-bind:class="[activetab === '2' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/bkash.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Bkash payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '3'"
                                                v-bind:class="[activetab === '3' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/rocket.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Rocket Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '4'"
                                                v-bind:class="[activetab === '4' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/op.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Online Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '1'">
                                            <span>
                                                <div class="tab-pane fade show ">
                                                    <p>Cash on delivery</p>
                                                    <button class="proceed-to-checkout" :disabled="buttonDisabled"
                                                        v-on:click="orderPlacedCOD" @click="openModal">Confirm
                                                        Order</button>
                                                </div>
                                            </span>


                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '2'">

                                            <span v-if="activetab === '2'">
                                                <div class="tab-pane fade show">
                                                    <p>Bkash payment</p>
                                                </div>

                                            </span>

                                        </div>


                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '3'">


                                            <span v-if="activetab === '3'">
                                                <div class="tab-pane fade show">
                                                    <p>Rocket Payment</p>
                                                </div>

                                            </span>

                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '4'">


                                            <span v-if="activetab === '4'">
                                                <div class="tab-pane fade show">
                                                    <p>Online Payment</p>
                                                    <button class="proceed-to-checkout"
                                                        v-on:click="orderPlacedOnlinePayment" :disabled="buttonDisabled"
                                                        @click="openModal">Pay now</button>
                                                </div>

                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div class="product-content mobile-payment-content-second">



                                    <div class="tab-buttons">
                                        <span>
                                            <h5 v-on:click="activetab = '1'"
                                                v-bind:class="[activetab === '1' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/cod.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Cash on delivery</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '2'"
                                                v-bind:class="[activetab === '2' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/bkash.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Bkash payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '3'"
                                                v-bind:class="[activetab === '3' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/rocket.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Rocket Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>


                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '1'">
                                            <span>
                                                <div class="tab-pane fade show ">
                                                    <p>Cash on delivery</p>
                                                    <button class="proceed-to-checkout" :disabled="buttonDisabled"
                                                        v-on:click="orderPlacedCOD" @click="openModal">Confirm
                                                        Order</button>
                                                </div>
                                            </span>


                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '2'">

                                            <span v-if="activetab === '2'">
                                                <div class="tab-pane fade show">
                                                    <p>Bkash payment</p>
                                                </div>

                                            </span>

                                        </div>


                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '3'">


                                            <span v-if="activetab === '3'">
                                                <div class="tab-pane fade show">
                                                    <p>Rocket Payment</p>
                                                </div>

                                            </span>

                                        </div>

                                    </div>



                                    <div class="tab-buttons mt-2">

                                        <span>
                                            <h5 v-on:click="activetab = '4'"
                                                v-bind:class="[activetab === '4' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/op.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Online Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                    <br>
                                    <div class="tabs-section">

                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '4'">


                                            <span v-if="activetab === '4'">
                                                <div class="tab-pane fade show">
                                                    <p>Online Payment</p>
                                                    <button class="proceed-to-checkout"
                                                        v-on:click="orderPlacedOnlinePayment" :disabled="buttonDisabled"
                                                        @click="openModal">Pay now</button>
                                                </div>

                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div class="product-content mobile-payment-content-third">



                                    <div class="tab-buttons">
                                        <span>
                                            <h5 v-on:click="activetab = '1'"
                                                v-bind:class="[activetab === '1' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/cod.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Cash on delivery</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '2'"
                                                v-bind:class="[activetab === '2' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/bkash.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Bkash payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>


                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '1'">
                                            <span>
                                                <div class="tab-pane fade show ">
                                                    <p>Cash on delivery</p>
                                                    <button class="proceed-to-checkout" :disabled="buttonDisabled"
                                                        v-on:click="orderPlacedCOD" @click="openModal">Confirm
                                                        Order</button>
                                                </div>
                                            </span>


                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '2'">

                                            <span v-if="activetab === '2'">
                                                <div class="tab-pane fade show">
                                                    <p>Bkash payment</p>
                                                </div>

                                            </span>

                                        </div>



                                    </div>
                                    <div class="tab-buttons mt-3">

                                        <span>
                                            <h5 v-on:click="activetab = '3'"
                                                v-bind:class="[activetab === '3' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/rocket.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Rocket Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                        <span>
                                            <h5 v-on:click="activetab = '4'"
                                                v-bind:class="[activetab === '4' ? 'active' : '']"
                                                style="margin-left: 10px;">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/op.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Online Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                    <br>
                                    <div class="tabs-section">



                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '3'">


                                            <span v-if="activetab === '3'">
                                                <div class="tab-pane fade show">
                                                    <p>Rocket Payment</p>
                                                </div>

                                            </span>

                                        </div>
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '4'">


                                            <span v-if="activetab === '4'">
                                                <div class="tab-pane fade show">
                                                    <p>Online Payment</p>
                                                    <button class="proceed-to-checkout"
                                                        v-on:click="orderPlacedOnlinePayment" :disabled="buttonDisabled"
                                                        @click="openModal">Pay now</button>
                                                </div>

                                            </span>

                                        </div>
                                    </div>

                                </div>

                                <div class="product-content mobile-payment-content-fourth">



                                    <div class="tab-buttons ">
                                        <span>
                                            <h5 v-on:click="activetab = '1'"
                                                v-bind:class="[activetab === '1' ? 'active' : '']">
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/cod.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Cash on delivery</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                       

                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '1'">
                                            <span>
                                                <div class="tab-pane fade show ">
                                                    <p>Cash on delivery</p>
                                                    <button class="proceed-to-checkout" :disabled="buttonDisabled"
                                                        v-on:click="orderPlacedCOD" @click="openModal">Confirm
                                                        Order</button>
                                                </div>
                                            </span>


                                        </div>
                                       
                                    </div>
                                    <div class="tab-buttons mt-3">
                                      
                                        <span>
                                            <h5 v-on:click="activetab = '2'"
                                                v-bind:class="[activetab === '2' ? 'active' : '']"
                                               >
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/bkash.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Bkash payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                      

                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                        
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '2'">

                                            <span v-if="activetab === '2'">
                                                <div class="tab-pane fade show">
                                                    <p>Bkash payment</p>
                                                </div>

                                            </span>

                                        </div>


                                    </div>
                                    <div class="tab-buttons mt-3">
                                       
                                        <span>
                                            <h5 v-on:click="activetab = '3'"
                                                v-bind:class="[activetab === '3' ? 'active' : '']"
                                              >
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/rocket.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Rocket Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>
                                       

                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                       

                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '3'">


                                            <span v-if="activetab === '3'">
                                                <div class="tab-pane fade show">
                                                    <p>Rocket Payment</p>
                                                </div>

                                            </span>

                                        </div>
                                      
                                    </div>
                                    <div class="tab-buttons mt-3">
                                       
                                        <span>
                                            <h5 v-on:click="activetab = '4'"
                                                v-bind:class="[activetab === '4' ? 'active' : '']"
                                               >
                                                <div class="loyel-payment-method-container">
                                                    <div class="loyel-payment-method-card">
                                                        <h2><img src="@/assets/images/op.png" alt=""
                                                                style="width: 125px; height: 80px;"></h2>
                                                        <span style="font-size: 12px;"> Online Payment</span>
                                                    </div>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                    <br>
                                    <div class="tabs-section">
                                       
                                        <div class="tab-content border border-top-0 p-4" v-if="activetab === '4'">


                                            <span v-if="activetab === '4'">
                                                <div class="tab-pane fade show">
                                                    <p>Online Payment</p>
                                                    <button class="proceed-to-checkout"
                                                        v-on:click="orderPlacedOnlinePayment" :disabled="buttonDisabled"
                                                        @click="openModal">Pay now</button>
                                                </div>

                                            </span>

                                        </div>
                                    </div>

                                </div>


                            </div>


                        </div>
                    </main>

                </div>

            </div>

            <div v-if="isModalOpen" class="modal" @click="preventClose">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderId: null,
            isModalOpen: false,
            message: null,
            orderInfo: [],
            baseUrl: this.$baseUrl,
            activetab: '',
            countDown: 0,
            modalvalue: false,
            disabled: false,
            buttonDisabled: false,
            dataId: this.$route.params.orderId,

        }
    },
    beforeMount() {
        let orderId = this.$route.params.orderId;
        this.message = "Your Order Has Been Successfully.<br>Your Order ID Is: MWBD-" + orderId;
        // this.getCartInfos();
        this.resetCartInfo();
        this.getOrderDetails(orderId);

    },


    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        preventClose() {

        },
        orderPlacedCOD() {


            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            };


            this.countDown = 2;
            this.buttonDisabled = true;
            this.countDownTimer();

            let formData = new FormData();


            formData.append("dataId", this.dataId);


            this.$http.post("customer/order/placed/cod", formData, config)
                .then(response => {
                    if (response.data.msgFlag == true && response.data.isOrderPlaced == true) {

                        let orderId = response.data.orderId;
                        this.countDown = 0;

                        this.sendOrderSms(orderId);
                        this.$toaster.success(response.data.msg);
                        this.$router.push({ name: 'profile' });


                    }
                })
                .catch(error => {
                    console.dir(error);
                })
                .finally(() => {
                    this.buttonDisabled = false; // Ensure button is enabled after completion
                });


        },

        orderPlacedOnlinePayment() {

            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            };

            this.countDown = 2;
            this.buttonDisabled = true;
            this.countDownTimer();

            let formData = new FormData();


            formData.append("dataId", this.dataId);

            let flag = false;


            this.$http.post("customer/order/placed/online/payment", formData, config)
                .then(response => {
                    if (response.data.msgFlag == true && response.data.isOrderPlaced == true) {

                        let orderId = response.data.orderId;

                        this.countDown = 0;
                        this.sendOrderSms(orderId);
                        window.open(this.$store.state.onlinePaymentUrl + orderId + "/online/payment", "_self");


                    }
                })
                .catch(error => { console.dir(error) })
                .finally();

        },
        sendOrderSms(orderId) {
            let formData = new FormData();
            formData.append("dataId", orderId);
            this.$http.post("sent/order/sms", formData)
                .then(response => {
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        getOrderDetails(orderId) {
            let token = window.localStorage.getItem("customerToken");

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            };

            this.$http.get("customer/get/order/details?dataId=" + orderId, config)
                .then(response => {
                    if (response.data.msgFlag == true)
                        this.$store.commit("storeOrderDetails", response.data);
                    this.orderInfo = response.data.orderInfo;
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        resetCartInfo() {
            let formData = new FormData();
            formData.append("nothing", null);
            this.$http.post("product/add/to/cart", formData)
                .then(response => {
                    this.$store.commit("storeCartInfos", response.data.cartInfos);
                    this.$store.commit("storePriceInfos", response.data);
                })
                .catch(error => { console.dir(error) })
                .finally();
        },
        countDownTimer() {
            if (this.countDown > 0) {
                if (this.countDown % 10 == 0)
                    this.$toaster.warning("Your Order Is Processing.Please Wait.");
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            }
        },
    }
}
</script>


<style scoped>
#loyel-payemnt-method-landing {
    margin-top: 30px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

@media (min-width: 768px) {


    .loyel-payemnt-method-mobile {
        display: none;
    }

}

@media (max-width: 767px) {

    .loyel-payemnt-method-desktop {
        display: none;
    }


}

.loyel-payemnt-method {
    position: relative;
    background-color: #F4f4f4;
    min-height: 50px;
    padding: 15px;
    margin-top: 20px;
}

.loyel-payemnt-method .container {
    border: #DFE0E1 solid 1px;

}

.loyel-payemnt-method header {
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #DFE0E1;
}

.loyel-payemnt-method .company-details h2 {
    text-align: left;
    color: #53db50;
    padding-bottom: 20px;
    padding-top: 10px;
}

.loyel-payemnt-method .company-details .name {
    margin-top: 0;
    margin-bottom: 0;
}

.loyel-payemnt-method .contacts {
    margin-bottom: 20px;
}

.loyel-payemnt-method .loyel-payemnt-method-no .loyel-payemnt-method_no {
    padding-bottom: 10px;
}

.loyel-payemnt-method .loyel-payemnt-method-no .name {
    padding-bottom: 10px;
}

.loyel-payemnt-method .loyel-payemnt-method-no .phone {
    padding-bottom: 10px;
}

.loyel-payemnt-method .loyel-payemnt-method-no span {
    font-weight: 700;
}


.loyel-payemnt-method .loyel-payemnt-method-details {
    text-align: right;
    margin-right: 10px;
}

.loyel-payemnt-method .loyel-payemnt-method-details span {
    font-weight: 700;
}

.loyel-payemnt-method .loyel-payemnt-method-details .loyel-payemnt-method-id {
    margin-top: 0;
    color: #000000;
}

.loyel-payemnt-method main {
    padding-bottom: 50px;
}


.loyel-payemnt-method main .notices .notice {
    font-size: 1.2em
}

.loyel-payemnt-method table {
    width: 100%;
    margin-bottom: 20px
}

.loyel-payemnt-method table thead tr th {
    text-align: center;
    padding: 15px;
    background: #DFE0E1;
    border-bottom: 1px solid #DFE0E1;
    border: #DFE0E1 1px solid;
    font-weight: 700;
}

.loyel-payemnt-method table tbody tr td {
    text-align: center;
    font-size: 15px;
    border: #DFE0E1 1px solid;
    padding-top: 20px;
    padding-bottom: 20px;
}

.loyel-payemnt-method table th {
    font-weight: 400;
    font-size: 16px;
}


.loyel-payemnt-method table tfoot td {
    background: #DFE0E1;
    border: #DFE0E1 1px solid;
    white-space: nowrap;
    text-align: right;
    padding: 10px 20px;
    font-size: 1.2em;
    border-top: 1px solid #aaa;
}

.loyel-payemnt-method table tfoot tr:first-child td {
    border-top: none
}

.loyel-payemnt-method table tfoot tr:last-child td {
    color: #000000;
    font-weight: 600;
    font-size: 1.4em;
    border-top: 1px solid #3989c6
}

.loyel-payemnt-method table tfoot tr td:first-child {
    border: none
}

.loyel-payemnt-method footer {
    width: 100%;
    text-align: center;
    color: rgb(0, 0, 0);
    border-top: 1px solid #DFE0E1;
    padding-top: 15px;
}

.loyel-payemnt-method footer span {
    font-weight: 600;
}



.tab-content {
    background: #fff;
}


.loyel-payment-method-container {
    max-width: 400px;
    width: 100%;
}

.loyel-payment-total-amount-container {
    max-width: 400px;
    width: 100%;
}

.loyel-payment-total-amount-card {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-align: center;
}

.loyel-payment-method-card {
    /* background-color: #fff; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-align: center;
}

.loyel-payment-method-card h2 {
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
}

button {
    background-color: #007BFF;
    color: #fff;
    padding: 12px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.loyel-payment-info {
    display: flex;
    column-gap: 15px;
}


.tab-buttons {
    overflow: hidden;
    margin-bottom: -32px;
    /* hide bottom border */
    font-size: OpenSans, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC, Microsoft YaHei;

}

.tab-buttons h5 {
    float: left;
    cursor: pointer;
    /* padding: 5px 10px; */
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    /* border-radius: 10px 10px 0 0; */
    font-weight: 700;
    font-size: 16px;
    color: #0c0000
        /* margin-left: 10px; */
}

.tab-buttons h5:last-child {
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tab-buttons h5:hover {
    background-color: #fff;
    color: #0ab39c;
}

/* Styling for active tab */
.tab-buttons h5.active {
    background-color: #fff;
    color: #0ab39c;
    border-bottom: 2px solid #fff;
    cursor: default;
}

@media(min-width:1014px) {
    .desktop-payment-content-second {
        display: none;
    }

    .desktop-payment-content-third {
        display: none;
    }
    .tabs-section{
        max-width:610px
    }
}

@media(min-width:779px) and (max-width:1013px) {
    .desktop-payment-content-first {
        display: none;
    }

    .desktop-payment-content-third {
        display: none;
    }
    .tabs-section{
        max-width:465px
    }
}


@media(min-width:768px) and (max-width:778px) {
    .desktop-payment-content-first {
        display: none;
    }

    .desktop-payment-content-second {
        display: none;
    }
    .tabs-section{
        max-width:310px
    }
}

@media(min-width:692px) {
    .mobile-payment-content-second {
        display: none;
    }

    .mobile-payment-content-third {
        display: none;
    }
    .mobile-payment-content-fourth {
        display: none;
    }
    .tabs-section{
        max-width:615px
    }
}

@media(min-width:535px) and (max-width:691px) {
    .mobile-payment-content-first {
        display: none;
    }

    .mobile-payment-content-third {
        display: none;
    }
    .mobile-payment-content-fourth {
        display: none;
    }
    .tabs-section{
        max-width:465px
    }
}


@media(min-width:374px) and (max-width:534px) {
    .mobile-payment-content-first {
        display: none;
    }

    .mobile-payment-content-second {
        display: none;
    }
    .mobile-payment-content-fourth {
        display: none;
    }
    .tabs-section{
        max-width:310px
    }
}
@media(min-width:1px) and (max-width:373px) {
    .mobile-payment-content-first {
        display: none;
    }

    .mobile-payment-content-second {
        display: none;
    }
    .mobile-payment-content-third {
        display: none;
    }
}
</style>