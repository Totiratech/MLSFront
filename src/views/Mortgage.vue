<template>
  <div class="mortgage">
    <div class="container py-5">
      <div class="row py-3">
        <div class="col-12">
          <div class="form_holder p-4">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center">
                  <h1 class="black_font">
                    Mortgage and Amortization Calculator
                  </h1>
                  <span>
                    This calculator will show you the amortization schedule and
                    breakdown of your payments made towards a home loan.
                  </span>
                </div>
                <div class="col-12 py-md-3 py-5">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <form class="px-md-3 px-md-2">
                          <div class="container">
                            <div class="row">
                              <div class="col-md-6 mb-3">
                                <label
                                  for="purchasePrice"
                                  class="form-label capitalize small_font"
                                  aria-placeholder="Enter Purchase Price "
                                  >purchase price</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="purchasePrice"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="term"
                                  class="form-label capitalize small_font"
                                  >Term</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="term"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="rate"
                                  class="form-label capitalize small_font"
                                  >Interest Rate</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="rate"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="insurance"
                                  class="form-label capitalize small_font"
                                  >Homeowners Insurance Rate</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="insurance"
                                />
                              </div>
                              <div class="col-md-6">
                                <label
                                  for="payment"
                                  class="form-label capitalize small_font"
                                  >Down Payment</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="payment"
                                />
                              </div>
                              <div class="col-md-6">
                                <label
                                  for="privatePayment"
                                  class="form-label capitalize small_font"
                                  >Private mortgage insurance</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="privatePayment"
                                />
                              </div>
                              <div class="col-12 text-center pt-5">
                                <button
                                  type="button"
                                  class="btn btn-lg main_btn px-5"
                                >
                                  Calculate
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mortgage {
  background-color: #f6f8f9;
}
h1 {
  font-family: "Literata-Regular";
}
</style>
