<template>
    <div id="tracking">
        <div class="tracking overflow-auto">
            <div class="container">
                <div style="min-width: 600px">
                    <header>
                        <div class="row">
                            <div class="col company-details" style="text-align: center;">
                                Order Track
                            </div>
                        </div>
                    </header>
                    <main>
                        <div class="card-body">
                            <div class="profile-timeline">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <!-- <div class="accordion-item border-0">
                                        <div class="accordion-header">
                                            <a class="accordion-button p-2 shadow-none" href="#">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">

                                                        <div class="avatar-title bg-success rounded-circle">
                                                            
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                viewBox="0 0 24 24" width="20">
                                                                <path d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                                            </svg>
                                                        </div>


                                                    </div>
                                                    <div class="flex-grow-1 ms-3">
                                                        <h6 class="fs-15 mb-0 fw-semibold">Order Placed - <span
                                                                class="fw-normal"></span></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="collapseOne" class="accordion-collapse collapse show"
                                            v-if="expandedIndex1 === index">
                                            <div class="accordion-body ms-2 ps-5 pt-0">
                                                <h6 class="mb-1">An order has been placed.</h6>
                                                <p class="text-muted"></p>


                                                <slot>
                                                    <h6 class="mb-1">Seller has accept this order.</h6>
                                                    <p class="text-muted mb-0"></p>

                                                </slot>
                                                <slot>
                                                    <h6 class="mb-1">Seller can not accept this order.</h6>
                                                </slot>



                                            </div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="accordion-item border-0">

                                        <slot>
                                            <div class="accordion-header">

                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-success rounded-circle">
                                                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                                    <path
                                                                        d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-15 mb-0 fw-semibold">Order Processing(Seller) -
                                                                <span class="fw-normal"></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div id="collapseOne" class="accordion-collapse collapse show">
                                                <div class="accordion-body ms-2 ps-5 pt-0">



                                                    <slot>
                                                        <h6 class="mb-1">Seller has processing this order.</h6>
                                                        <p class="text-muted mb-0">
                                                        </p>

                                                    </slot>
                                                    <slot>

                                                    </slot>



                                                </div>
                                            </div>

                                        </slot>
                                        <slot>
                                            <div class="accordion-header">
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-light rounded-circle">
                                                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                                    <path
                                                                        d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-15 mb-0 fw-semibold">Order Processing(Seller) -
                                                                <span class="fw-normal"></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div id="collapseOne" class="accordion-collapse collapse show"
                                                v-if="expandedIndex2 === index">
                                                <div class="accordion-body ms-2 ps-5 pt-0">



                                                    <slot>
                                                        <h6 class="mb-1">Seller has processing this order.</h6>
                                                        <p class="text-muted mb-0">
                                                        </p>

                                                    </slot>
                                                    <slot>
                                                        <h6 class="mb-1">Seller can not accept this order.</h6>
                                                    </slot>



                                                </div>
                                            </div>
                                        </slot>

                                    </div> -->
                                    <!-- <div class="accordion-item border-0">

                                        <slot>
                                            <div class="accordion-header" @click="toggleExpand7(index)">

                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-success rounded-circle">
                                                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                                    <path
                                                                        d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-15 mb-0 fw-semibold">Order Processing(Admin) -
                                                                <span class="fw-normal"></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div id="collapseOne" class="accordion-collapse collapse show"
                                                v-if="expandedIndex7 === index">
                                                <div class="accordion-body ms-2 ps-5 pt-0">



                                                    <slot>
                                                        <h6 class="mb-1">Loyel has processing this order.</h6>
                                                        <p class="text-muted mb-0">
                                                        </p>

                                                    </slot>




                                                </div>
                                            </div>

                                        </slot>
                                        <slot>
                                            <div class="accordion-header" @click="toggleExpand7(index)">
                                                <slot>
                                                    <a class="accordion-button p-2 shadow-none" href="#">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div class="avatar-title bg-success rounded-circle">
                                                                  
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                        viewBox="0 0 24 24" width="20">
                                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                                        <path
                                                                            d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="fs-15 mb-0 fw-semibold">Order Processing(Admin) -
                                                                    <span class="fw-normal"></span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </slot>
                                                <slot>
                                                    <a class="accordion-button p-2 shadow-none" href="#">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div class="avatar-title bg-light rounded-circle">
                                                           
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                        viewBox="0 0 24 24" width="20">
                                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                                        <path
                                                                            d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="fs-15 mb-0 fw-semibold">Order Processing(Admin) -
                                                                    <span class="fw-normal"></span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </slot>

                                            </div>
                                            <div id="collapseOne" class="accordion-collapse collapse show"
                                                v-if="expandedIndex7 === index">
                                                <div class="accordion-body ms-2 ps-5 pt-0">



                                                    <slot>
                                                        <h6 class="mb-1">Loyel has processing this order.</h6>
                                                        <p class="text-muted mb-0">
                                                        </p>

                                                    </slot>




                                                </div>
                                            </div>
                                        </slot>

                                    </div> -->
                                    <div class="accordion-item border-0">
                                        <div class="accordion-header" @click="toggleExpand3(index)">
                                            <slot v-if="dataInfo.order_item_status.	is_delivered == 1">
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-success rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-15 mb-1 fw-semibold">Order Delivered -{{ dataInfo.order_item_status.delivered_date | formatDateWithDay }} <span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>
                                            <slot v-else>
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-light rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-15 mb-1 fw-semibold">Order Delivered  <span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>

                                        </div>
                                        <div class="accordion-collapse collapse show" v-if="expandedIndex3 === index">
                                            <slot v-if="dataInfo.order_item_status.	is_delivered == 1">
                                                <div class="accordion-body ms-2 ps-5 pt-0">
                                     
                                        <h6 class="mb-1">Your item has been Out For deliverded.</h6>
                                        <p class="text-muted mb-0">{{ dataInfo.order_item_status.delivered_date | formatDateWithDayTime }}</p>
                                       </div>
                                                <div class="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 class="mb-1">Your Item has been Delivered</h6>
                                                    <p class="text-muted mb-0"></p>
                                                </div>

                                            </slot>

                                        </div>
                                    </div>
                                    <div class="accordion-item border-0">
                                        <div class="accordion-header" @click="toggleExpand4(index)">
                                            <slot v-if="dataInfo.order_item_status.is_out_for_deliverd == 1">
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-success rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-15 mb-1 fw-semibold">Order Handover to Courirer -{{ dataInfo.order_item_status.out_for_deliver_date | formatDateWithDayTime }} <span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>
                                            <slot v-else>
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-light rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-15 mb-1 fw-semibold">Order Handover to Courirer  <span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>

                                        </div>
                                        <div class="accordion-collapse collapse show" v-if="expandedIndex4 === index">
                                           

                                            <slot  v-if="dataInfo.order_item_status.is_out_for_deliverd == 1" >
                                                 <div class="accordion-body ms-2 ps-5 pt-0">
                                        <!-- <h6 class="fs-14">RQK Logistics - MFDS1400457854</h6> -->
                                        <h6 class="mb-1">Your item has been Out For deliverded.</h6>
                                        <p class="text-muted mb-0">{{ dataInfo.order_item_status.processing_date | formatDateWithDayTime }}</p>
                                       </div>
                                                <div class="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 class="mb-1">Your Item has been Out For delivered</h6>
                                                    <p class="text-muted mb-0"></p>
                                                </div>

                                            </slot>
                                        </div>
                                    </div>
                                    <div class="accordion-item border-0">
                                        <div class="accordion-header" @click="toggleExpand5(index)">
                                            <slot v-if="dataInfo.order_item_status.is_processing == 1" >
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div
                                                                class="avatar-title bg-success text-success rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-14 mb-0 fw-semibold">Processing - {{ dataInfo.order_item_status.processing_date | formatDateWithDay }}<span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>
                                            <slot v-else>
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-light text-success rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-14 mb-0 fw-semibold">Processing  <span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>

                                        </div>

                                        <div class="accordion-collapse collapse show" v-if="expandedIndex5 === index">


                                            <slot v-if="dataInfo.order_item_status.is_processing == 1">
                                                <div class="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 class="mb-1">Your Item has been waiting for delivery</h6>
                                                    <p class="text-muted mb-0">{{ dataInfo.order_item_status.processing_date | formatDateWithDayTime }}</p>
                                                    <p class="text-muted mb-0">
                                                    </p>
                                                </div>

                                            </slot>
                                        </div>
                                    </div>
                                    <div class="accordion-item border-0">
                                        <div class="accordion-header" @click="toggleExpand6(index)">
                                            <slot v-if="dataInfo.order_item_status.is_accept == 1">
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div
                                                                class="avatar-title bg-success text-success rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-14 mb-0 fw-semibold">Order Approved -{{ dataInfo.order_item_status.accept_date | formatDateWithDay }} <span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </slot>
                                            <slot v-else>
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-light text-success rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-14 mb-0 fw-semibold">Order Approved  </h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>

                                        </div>
                                        <div class="accordion-collapse collapse show" v-if="expandedIndex6 === index">
                                            <slot v-if="dataInfo.order_item_status.is_accept == 1">
                                            
                                            <div class="accordion-body ms-2 ps-5 pt-0">

                                        <h6 class="mb-1">Your item has been Approved.</h6>
                                        <p class="text-muted mb-0">{{ dataInfo.order_item_status.accept_date | formatDateWithDayTime }}</p>
                                          </div>

                                            
                                                <div class="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 class="mb-1">Your Item has been Approved</h6>
                                                    <p class="text-muted mb-0"></p>
                                                </div>

                                            </slot>
                                        </div>
                                    </div>

                                    <div class="accordion-item border-0">
                                        <div class="accordion-header" @click="toggleExpand8(index)">
                                            
                                            <slot>
                                                <a class="accordion-button p-2 shadow-none" href="#">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title bg-light text-success rounded-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                                    viewBox="0 0 24 24" width="20">
                                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                        stroke-linejoin="round"></g>
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path opacity="0.1"
                                                                            d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z"
                                                                            fill="#000000"></path>
                                                                        <path
                                                                            d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linejoin="round"></path>
                                                                        <path
                                                                            d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path d="M12 7V20" stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z"
                                                                            stroke="#000000" stroke-width="2"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h6 class="fs-14 mb-0 fw-semibold">Order Placed -{{ dataInfo.created_at | formatDateWithDay }} <span
                                                                    class="fw-normal"></span></h6>
                                                        </div>
                                                    </div>
                                                </a>

                                            </slot>

                                        </div>
                                        <div class="accordion-collapse collapse show" v-if="expandedIndex8 === index">
                                            <div class="accordion-body ms-2 ps-5 pt-0">

                                                <p class="text-muted mb-0">{{ dataInfo.created_at | formatDateWithDayTime }}
                                                </p>
                                            </div>
                                            <slot>
                                                <div class="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 class="mb-1">Your Item has been Placed
                                                    </h6>
                                                    <p class="text-muted mb-0"></p>
                                                </div>

                                            </slot>
                                        </div>
                                    </div>
                                </div>
                                <!--end accordion-->
                            </div>
                        </div>
                    </main>

                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'tracking',
    data() {
        return {
            msg: 'tracking',
            dataInfo: null,
            expandedIndex1: false,
            expandedIndex2: false,
            expandedIndex3: false,
            expandedIndex4: false,
            expandedIndex5: null,
            expandedIndex6: null,
            expandedIndex7: null,
            expandedIndex8: null,
            dataId: this.$route.params.dataId,
            dataList: '',
            baseUrl: this.$baseUrl,

            itemId: '',
            message: '',
            // orderItem:{
            //     id:'',
            // }
        }
    },
    beforeMount() {
        this.orderTracking();

    },
    methods: {
        toggleExpand1() {
            this.expandedIndex1 = !this.expandedIndex1;
        },

        toggleExpand2() {
            this.expandedIndex2 = !this.expandedIndex2
        },
        toggleExpand3() {
            this.expandedIndex3 = !this.expandedIndex3;
        },
        toggleExpand4() {
            this.expandedIndex4 = !this.expandedIndex4;
        },
        toggleExpand5(index) {
            this.expandedIndex5 = this.expandedIndex5 === index ? null : index;
        },
        toggleExpand6(index) {
            this.expandedIndex6 = this.expandedIndex6 === index ? null : index;
        },
        toggleExpand7(index) {
            this.expandedIndex7 = this.expandedIndex7 === index ? null : index;
        },
        toggleExpand8(index) {
            this.expandedIndex8 = this.expandedIndex8 === index ? null : index;
        },


        async orderTracking() {
            let token = window.localStorage.getItem("customerToken");
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            };

            await this.$http.get("/customer/order/track/status?dataId=" + this.dataId, config)
                .then(response => {

                    this.dataInfo = response.data.dataInfo;


                })
                .catch(error => { console.dir(error) })
                .finally();
        },
    }
}
</script>
 
 
<style scoped>
.tracking {
    position: relative;
    background-color: #FFF;
    min-height: 680px;
    padding: 15px;
}


.tracking header {
    padding: 10px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid #DFE0E1;
}

.tracking .company-details h2 {
    text-align: left;
    color: #53db50;
    padding-bottom: 20px;
    padding-top: 10px;
}

.tracking .company-details .name {
    margin-top: 0;
    margin-bottom: 0;
}

.tracking .contacts {
    margin-bottom: 20px;
}

.tracking .tracking-no .tracking_no {
    padding-bottom: 10px;
}

.tracking .tracking-no .name {
    padding-bottom: 10px;
}

.tracking .tracking-no .phone {
    padding-bottom: 10px;
}

.tracking .tracking-no span {
    font-weight: 700;
}


.tracking .tracking-details {
    text-align: right;
    margin-right: 10px;
}

.tracking .tracking-details span {
    font-weight: 700;
}

.tracking .tracking-details .tracking-id {
    margin-top: 0;
    color: #000000;
}

.tracking main {
    padding-bottom: 50px;
}


.tracking main .notices .notice {
    font-size: 1.2em
}

.tracking table {
    width: 100%;
    margin-bottom: 20px
}

.tracking table thead tr th {
    text-align: center;
    padding: 15px;
    background: #DFE0E1;
    border-bottom: 1px solid #DFE0E1;
    border: #DFE0E1 1px solid;
    font-weight: 700;
}

.tracking table tbody tr td {
    text-align: center;
    font-size: 15px;
    border: #DFE0E1 1px solid;
    padding-top: 20px;
    padding-bottom: 20px;
}

.tracking table th {
    font-weight: 400;
    font-size: 16px;
}


.tracking table tfoot td {
    background: #DFE0E1;
    border: #DFE0E1 1px solid;
    white-space: nowrap;
    text-align: right;
    padding: 10px 20px;
    font-size: 1.2em;
    border-top: 1px solid #aaa;
}

.tracking table tfoot tr:first-child td {
    border-top: none
}

.tracking table tfoot tr:last-child td {
    color: #000000;
    font-weight: 600;
    font-size: 1.4em;
    border-top: 1px solid #3989c6
}

.tracking table tfoot tr td:first-child {
    border: none
}

.tracking footer {
    width: 100%;
    text-align: center;
    color: rgb(0, 0, 0);
    border-top: 1px solid #DFE0E1;
    padding-top: 15px;
}

.tracking footer span {
    font-weight: 600;
}






.accordion-button:not(.collapsed)::after {
    background-image: url();
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
}

.loyel-order-details-list {
    opacity: 1;
    background-color: rgba(243, 246, 249) !important;
}

.product-top {
    background: #fff;
    height: 35px;
    font-weight: 700;
    font-size: 15px !important;
    text-transform: uppercase;
    display: block;

}

.product-color {
    color: #495057;
    font-family: Poppins, sans-serif;
    margin-left: 10px;
    margin-top: 5px;

}

.btn-success {
    color: #fff;
    background-color: #0ab39c;
    border-color: #0ab39c;
    --vz-btn-hover-color: #fff;
    --vz-btn-hover-bg: #099885;
    --vz-btn-hover-border-color: #088f7d;
    --vz-btn-focus-shadow-rgb: 47, 190, 171;
    --vz-btn-active-color: #fff;
    --vz-btn-active-bg: #088f7d;
    --vz-btn-active-border-color: #088675;
    --vz-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --vz-btn-disabled-color: #fff;
    --vz-btn-disabled-bg: #0ab39c;
    --vz-btn-disabled-border-color: #0ab39c;
}

.md-theme-default a:not(.md-button) {
    color: #3577f1 !important;

}

.link-secondary {
    color: #3577f1 !important;
}

.card {
    margin-bottom: 1.5rem;
    -webkit-box-shadow: 0 1px 2px rgba(56, 65, 74, .15);
    box-shadow: 0 1px 2px rgba(56, 65, 74, .15);
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    /* background: #f3f3f9; */
    font-family: Poppins, sans-serif;
    font-size: 15px !important;
    color: #495057;
}


.text-muted {
    --vz-text-opacity: 1;
    color: #878a99 !important;
}

.table>thead {
    border-color: var(--vz-border-color);
}

.link-primary {
    color: #405189 !important;
}

.table>thead {
    vertical-align: bottom;
}

.text-muted {
    --vz-text-opacity: 1;
    color: #878a99 !important;
}

.card-header {

    margin-bottom: 0;

    background-color: #fff;

}


.shadow-none {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

a {
    text-decoration: none !important;
}

.accordion-button {
    /* position: relative; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    padding: var(--vz-accordion-btn-padding-y) var(--vz-accordion-btn-padding-x);
    font-size: .8125rem;
    color: var(--vz-accordion-btn-color);
    text-align: left;
    background-color: var(--vz-accordion-btn-bg);
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    -webkit-transition: var(--vz-accordion-transition);
    transition: var(--vz-accordion-transition);
}


.rounded-circle {
    border-radius: 50% !important;
}

.accordion .accordion-body {
    color: #878a99;
}

.profile-timeline .accordion-item:first-child::before {
    top: 8px;
}

.align-items-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
}

.d-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
}

*,
::after,
::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.bg-success {
    --vz-bg-opacity: 1;
    background-color: rgba(10, 179, 156) !important;
}

.avatar-md {
    height: 4.5rem;
    width: 4.5rem;
}

.avatar-md {
    height: 4.5rem;
    width: 4.5rem;
}

.rounded {
    border-radius: 0.25rem !important;
}

.color-div {
    min-width: 65px;
    min-height: 25px;
    border-radius: 6px;
    color: white;
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px 0;
}

.bg-light {
    --vz-bg-opacity: 1;
    background-color: rgba(243, 246, 249) !important;
}

.p-1 {
    padding: 0.25rem !important;
}

.flex-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
}

.ps-5 {
    padding-left: 3rem !important;
}

.pt-0 {
    padding-top: 0 !important;
}

.ms-3 {
    margin-left: 1rem !important;
}

.ms-2 {
    margin-left: 0.5rem !important;
}

.invoice {
    position: relative;
    background-color: #FFF;
    min-height: 680px;
    padding: 15px;
}

.col-xl-9 {
    margin-top: 20px;
}

.col-xl-3 {
    margin-top: 20px;
}

.invoice .container {
    border: #DFE0E1 solid 1px;
}

.profile-timeline .accordion-item {
    position: relative;
}

.profile-timeline .accordion-item::before {
    content: "";
    border-left: 2px dashed;
    position: absolute;
    height: 100%;
    left: 23px;
    color: #e9ebec;
}

.avatar-sm {
    height: 3rem;
    width: 3rem;
}

.profile-timeline .accordion-item:last-child::before {
    height: 20px;
    top: 3px;
}

:is(.btn-soft-danger, .btn-outline-danger) {
    --vz-btn-active-color: #fff;
    --vz-btn-hover-color: #fff;
}

.btn-soft-danger {
    color: #299cdb;
    background: #dff0fa;
    --vz-btn-border-color: transparent;
    --vz-btn-hover-bg: #f06548;
    --vz-btn-hover-border-color: transparent;
    --vz-btn-focus-shadow: var(--vz-danger-rgb);
    --vz-btn-active-bg: #f06548;
    --vz-btn-active-border-color: transparent;
}</style>