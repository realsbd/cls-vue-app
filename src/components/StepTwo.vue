<template>
  <!-- step-2-->
<div class="step-tab step-2">
    <h3 class="ttl">To help calculate your best loan offer, we need additional information about your business.</h3>
    <div class="box">
       <form class="form-validate-me" action="/app/business_information" method="post">
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputBusinessAddress">Business Street Address</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <input type="text" class="form-control" name="business_address" placeholder="" id="inputBusinessAddress" data-error="Please provide business address." required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputBusinessCity">Business City</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <input type="text" class="form-control" name="business_city" placeholder="" id="inputBusinessCity" data-error="Please provide business city." required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-7">
                        <div class="form-group">
                            <div class="bootstrap-select">
                                <div class="ttl-label">
                                    <label for="inputBusinessState">Business State and Country</label>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <input type="text" class="form-control" id="inputBusinessState" name="business_state" data-error="Please select state." required>
                                    <!-- <option value=""></option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska </option>
                                    <option value="Arizona">Arizona </option>
                                    <option value="Arkansas">Arkansas </option>
                                    <option value="California">California </option>
                                    <option value="Colorado">Colorado </option>
                                    <option value="Connecticut">Connecticut </option>
                                    <option value="Delaware">Delaware </option>
                                    <option value="Florida">Florida </option>
                                    <option value="Georgia">Georgia </option>
                                    <option value="Hawaii">Hawaii </option>
                                    <option value="Idaho">Idaho </option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Indiana">Indiana </option>
                                    <option value="Iowa">Iowa </option>
                                    <option value="Kansas">Kansas </option>
                                    <option value="Kentucky">Kentucky </option>
                                    <option value="Louisiana">Louisiana </option>
                                    <option value="Maine">Maine </option>
                                    <option value="Maryland">Maryland </option>
                                    <option value="Massachusetts">Massachusetts </option>
                                    <option value="Michigan">Michigan </option>
                                    <option value="Minnesota">Minnesota </option>
                                    <option value="Mississippi">Mississippi </option>
                                    <option value="Missouri">Missouri </option>
                                    <option value="Montana">Montana</option>
                                    <option value="Nebraska">Nebraska </option>
                                    <option value="Nevada">Nevada </option>
                                    <option value="New Hampshire">New Hampshire </option>
                                    <option value="New Jersey">New Jersey </option>
                                    <option value="New Mexico">New Mexico </option>
                                    <option value="New York">New York </option>
                                    <option value="North Carolina">North Carolina </option>
                                    <option value="North Dakota">North Dakota </option>
                                    <option value="Ohio">Ohio </option>
                                    <option value="Oklahoma">Oklahoma </option>
                                    <option value="Oregon">Oregon </option>
                                    <option value="Pennsylvania">Pennsylvania</option>
                                    <option value="Rhode Island">Rhode Island </option>
                                    <option value="South Carolina">South Carolina </option>
                                    <option value="South Dakota">South Dakota </option>
                                    <option value="Tennessee">Tennessee </option>
                                    <option value="Texas">Texas </option>
                                    <option value="Utah">Utah </option>
                                    <option value="Vermont">Vermont </option>
                                    <option value="Virginia">Virginia </option>
                                    <option value="Washington">Washington </option>
                                    <option value="West Virginia">West Virginia </option>
                                    <option value="Wisconsin">Wisconsin </option>
                                    <option value="Wyoming">Wyoming</option>
                                </select> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-group">
                            <div class="input">
                                <div class="ttl-label">
                                    <label for="inputBusinessZip">Business Zip Code</label>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <input type="text" class="form-control" name="business_zip" placeholder="" pattern="[0-9]{5}" id="inputBusinessZip" data-inputmask="'mask': '99999'" data-error="Please provide zip code." required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputBusinessPhone">Business Phone</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <input type="tel" data-phone="true" name="business_phone" class="form-control" placeholder="(555) 555-5555" id="inputBusinessPhone" data-inputmask="'mask': '(999) 999-9999'" data-error="Please provide phone number." required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bootstrap-select">
                            <div class="ttl-label">
                                <label for="inputCompany">Company Structure</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <select class="selectpicker" name="company_structure" id="inputCompany" data-error="Please select company structure." required>
                                <option value=""></option>
                                <option value="Sole Proprietorship">Sole Proprietorship</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Limited Liability Company">Limited Liability Company</option>
                                <option value="Corporation">Corporation</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputOwnership">Business Ownership %</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <!-- <input type="text" name="ownership_percent" class="form-control precent-input" id="inputOwnership" data-error="Please provide ownership %." required> -->
                            <select class="selectpicker" name="ownership_percent" id="inputOwnership" data-error="Please provide ownership %." required>
                                <option value=""></option>
                                <option value="0%">0%</option>
                                <option value="1-24%">0% to 24%</option>
                                <option value="25-49%">25% to 49%</option>
                                <option value="50-74%">50% to 74%</option>
                                <option value="75-99%">75% to 99%</option>
                                <option value="100%">100%</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputFederal">Federal Tax ID / EIN</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <input type="text" name="ein" class="form-control fs-hide" pattern="[0-9]{2}-[0-9]{7}" data-inputmask="'mask': '99-9999999'" value="" placeholder="" id="inputFederal" data-error="Please provide valid Tax ID." >
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputRouting">Business Bank Account Routing Number</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="input-question">
                                <input type="text" name="bank_routing_number" class="form-control fs-hide" placeholder="" id="inputRouting" data-error="Please provide valid bank routing number." required>
                                <a href="#" data-toggle="modal" data-target="#modal-question" class="ico-question">
                                    <span>?</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputBankAccount">Operating Bank Account</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <input type="text" name="bank_last_4_digits" class="form-control fs-hide" placeholder="" id="inputBankAccount">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input">
                            <div class="ttl-label">
                                <label for="inputWebsite">Business Website (optional)</label>
                            </div>
                            <input type="text" name="business_website" class="form-control" placeholder="" id="inputWebsite">
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-holder">
                <button type="submit" class="btn btn-primary">Next</button>
            </div>
        </form>
    </div>
    <ul class="access-list">
        <li>
            <div class="icon">
                <img src="../assets/loanbuilder/images/ico_lock.svg" width="39" height="50" alt="">
            </div>
            <p>We care about your privacy and use<br> high-level security to protect your information</p>
        </li>
        <li>
            <img src="../assets/loanbuilder/images/logo_bbb.png" srcset="/assets/loanbuilder/images/logo_bbb@2x.png 2x" alt="" width="113" height="40">
        </li>
    </ul>
</div>
<!-- end step-2-->
</template>

<script>
export default {

}
</script>

<style>

</style>