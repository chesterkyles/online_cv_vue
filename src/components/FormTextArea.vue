<template>
  <ValidationProvider :rules="rules" v-slot="{ errors }">
    <div :class="[errors[0] ? 'mb-2' : 'mb-3', 'form-floating']">
      <textarea 
        class="form-control"
        :class="errors[0] ? 'is-invalid' : (value ? 'is-valid' : '')"
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
  font-weight: 500;
}
</style>