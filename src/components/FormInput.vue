<template>
  <ValidationProvider :rules="rules" v-slot="{ errors }">
    <div :class="[errors[0] ? 'mb-2' : 'mb-3', 'form-floating' ]">
      <input class="form-control" 
        :type="type"
        :name="name"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
      <label :for="name">{{ name }}</label>
      <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { extend, localize } from 'vee-validate';
import { en } from '../assets/json/validation.json'

extend('email', email);
extend('required', required);
localize({en});

export default {
  name: 'FormInput',
  components: {
    ValidationProvider,
  },
  props: {
    rules: String,
    type: String,
    name: String,
    value: String,
  },
}
</script>

<style scoped>
label {
  text-transform: capitalize;
}

span.error {
  color: rgb(107, 14, 14);
  margin-left: 10px;
  font-weight: 500;
}
</style>