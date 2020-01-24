<template>
    <!-- step-3-->
                        <div class="step-tab step-3">
                            <h3 class="ttl">You’re almost there! Just a few more fields and we can process your application.</h3>
                            <form class="form-validate-me" action="/app/personal_information" method="post">
                                <div class="box">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="input">
                                                    <div class="ttl-label">
                                                        <label for="inputHomeAddress">Home Address</label>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <input type="text" name="home_address" class="form-control" placeholder="" id="inputHomeAddress" data-error="Please provide street address." required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="input">
                                                    <div class="ttl-label">
                                                        <label for="inputHomeCity">Home City</label>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <input type="text" name="home_city" class="form-control" placeholder="" id="inputHomeCity" data-error="Please provide city." required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div class="bootstrap-select">
                                                        <div class="ttl-label">
                                                            <label for="inputHomeState">Home State</label>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                        <input type="text" class="form-control" name="home_state" id="inputHomeState" data-error="Please enter your state." required>
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
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div class="input">
                                                        <div class="ttl-label">
                                                            <label for="inputHomeZip">Home Zip Code</label>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                        <input type="text" name="home_zip" class="form-control" placeholder="" id="inputHomeZip" pattern="[0-9]{5}" data-inputmask="'mask': '99999'" data-error="Please provide zip code." required>
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
                                                        <label for="inputSocialNumber">International Passport Number/ SSN</label>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="input-question">
                                                        <input type="tel" name="ssn" class="form-control fs-hide" placeholder="" id="inputSocialNumber" data-error="Please provide valid SSN." required>
                                                        <a href="#" data-toggle="modal" data-target="#modal-question-social" class="ico-question">
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
                                                        <label for="inputDateofBirth">Date of Birth</label>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <input type="text" name="dob" class="form-control" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" placeholder="MM/DD/YYYY" data-inputmask="'mask': '99/99/9999'" id="inputDateofBirth" data-error="Please provide valid DOB." required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="communication">
                                    <div class="communication-block">
                                        <div class="holder">
                                            <h4>Communication Preferences</h4>
                                            <p>Let us know which form of communication is most convenient for you to receive updates on your application and loan status. <em>Please select at least one method of communication.</em></p>
                                            <div class="form-group has-checkbox">
                                                <!-- <div class="switch-group">
                                                    <label for="inputCheckEmail">Email</label>
                                                    <div class="switch-check">
                                                        <input type="checkbox" name="email_opt_in" class="check" data-foo="check" id="inputCheckEmail" checked>
                                                    </div>
                                                    <div class="description">
                                                        <p>By toggling this box, you agree Hydra Funding may email you about products and services that may be of interest to you. Opting out from receiving marketing emails will not stop nonmarketing email notifications related to your Hydra Funding loan applications</p>
                                                    </div>
                                                </div> -->
                                                <div class="switch-group">
                                                    <label for="inputCheckPhone">Phone</label>
                                                    <div class="switch-check">
                                                        <input type="checkbox" name="phone_opt_in" class="check" data-foo="check" id="inputCheckPhone" checked>
                                                    </div>
                                                </div>
                                                <div class="switch-group">
                                                    <label for="inputCheckText">Text</label>
                                                    <div class="switch-check">
                                                        <input type="checkbox" name="text_opt_in" class="check" data-foo="check" id="inputCheckText">
                                                    </div>
                                                    <div class="description">
                                                        <p>By toggling this box, you agree Hydra Funding may periodically send text messages for nonmarketing and marketing purposes to telephone numbers provided in this application. Consent to these terms is not a condition to obtain a loan. Mobile rates may apply. You may opt-out at any time. <a href="../page/terms" target="_new">Terms and Conditions</a> | <a href="../page/privacy" target="_new">Privacy Policy</a>.</p>
                                                    </div>
                                                </div>
                                                <div class="with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="holder">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- end step-3-->
</template>

<script>
export default {

}
</script>

<style>

</style>