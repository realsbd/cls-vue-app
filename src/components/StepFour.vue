<template>
  <!-- step-4-->
    <div class="step-tab step-4">
        <h2 class="ttl ttl-add">Let’s finalize your loan offer!</h2>
        <div class="entry">
            <h4>To complete your application, we need to verify your business banking information.</h4>
            <p><strong>Why?</strong><br>This is the fastest, most secure way to verify the financial information you provided. It allows us to determine if you are eligible for a higher loan amount or lower rate, and ultimately it ensures you get the best possible loan for your business.</p>
            <div class="v-space"></div>
            <p><strong>How?</strong><br> This automated process is handled quickly and securely through our trusted verification partner. We will be able to review your bank statements, but we will not be able to view or access your login credentials.</p>
            <div class="v-space"></div>
            <p><strong>When?</strong><br> Right now! Click the “Verify Now” button below. Your information will be verified within 48 hours, and you will receive email from us for confirmation.</p>
            <div class="v-space"></div>
            <form class="form-validate-me" action="/app/review" method="post">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="input">
                                <div class="btn-hold">
                                    <a class="btn btn-primary" href="/app/success">VERIFY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="v-space"></div>
            <hr>
            <p><strong>Questions?</strong><br> If you have any questions about this process, or issues with logging in, please contact us at 1-567-233-9839 or support@Hydrafunding.com.</p>
            <div class="v-space"></div>
        </div>
    </div>
    <!-- end step-4-->
</template>

<script>
export default {

}
</script>

<style>

</style>