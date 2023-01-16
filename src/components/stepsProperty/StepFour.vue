<template>
<div class="stepfour">
    <div class="row">
        <div class="col-md-6">
            <h4 class="headingSec">Amenities</h4>
            <div class="row">
                <div class="col-md-6">
                    <div class="field">
                        Family Room

                        <div class="control">
                            <input
                            id="checkbox-1"
                            :class="['input', $v.form.address.$error ? 'is-danger' : '']"
                            type="checkbox"
                            v-model="form.address"
                            class="form-control" />
                            <label class="label">Family Room</label>
                        </div>
                    <p v-if="$v.form.address.$error" class="help is-danger">
                        This address is invalid
                    </p>
        </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: ['currentStep'],
        methods: {
          canContinue() {
              this.$emit('can-continue', {value: true});
          }
        },
        mounted() {
//            this.$emit('can-continue', {value: true})
        }
    }
</script>