<template>
  <ValidationProvider :rules="rules" v-slot="{ errors }">
    <div class="form-floating mb-3">
      <textarea class="form-control"
        :value="value"
        :name="name"
        @input="$emit('input', $event.target.value)"
      ></textarea>
      <label :for="name">{{ name }}</label>
      <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { extend, localize } from 'vee-validate';
import { en } from '../assets/json/validation.json'

// Validation rules
extend('required', required);
localize({en});

export default {
  name: 'FormTextArea',
  components: {
    ValidationProvider,
  },
  props: {
    rules: String,
    name: String,
    value: String,
  },
}
</script>

<style scoped>
label {
  text-transform: capitalize;
}

textarea {
  height: 200px!important;
  resize: none;
}

span.error {
  color: rgb(107, 14, 14);
  margin-left: 10px;
}
</style>