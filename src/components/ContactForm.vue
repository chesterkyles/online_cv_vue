<template>
  <ValidationObserver v-slot="{ handleSubmit }" ref="observer">
    <div class="card mt-4 p-3 p-xl-4">
      <form ref="contactForm" class="contact-form" @submit.prevent="handleSubmit(sendEmail)">
        <FormInput type="text" name="name" rules="required" v-model="name"/>
        <FormInput type="email" name="email" rules="required|email" v-model="email" />
        <FormTextArea name="message" rules="required" v-model="message" />
        <Button addClass="form-control" text="Submit" />
      </form>
      <Modal v-show="isModalVisible" @close="closeModal" size="modal-sm">
        <template v-slot:body>
          <div class="text-center">
            <div v-if="isSendSuccessful">
              <h3>Thank you for your message!&nbsp;<i class="fas fa-smile"></i></h3>
              <span class="modal-span">I will get back to you as soon as possible</span>
            </div>
            <div v-else>
              <h3 class="text-danger">There was an error trying to send your message!&nbsp;<i class="fas fa-frown"></i></h3>
              <span class="modal-span">Please try again at a later time</span>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import FormInput from '../components/FormInput'
import FormTextArea from '../components/FormTextArea'
import Button from '../components/Button'
import Modal from '../components/Modal'
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  components: {
    ValidationObserver,
    FormInput,
    FormTextArea,
    Button,
    Modal,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isModalVisible: false,
      isSendSuccessful: false,
    }
  },
  methods: {
    sendEmail() {
      const service_id = process.env.VUE_APP_EMAILJS_SERVICE_ID
      const template_id = process.env.VUE_APP_EMAILJS_TEMPLATE_ID
      const user_id = process.env.VUE_APP_EMAILJS_USER_ID

      emailjs.sendForm(service_id, template_id, this.$refs.contactForm, user_id)
        .then((result) => {
            this.isSendSuccessful = true
            this.showModal()
            this.resetModalValue()
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            this.isSendSuccessful = false
            this.showModal()
            console.log('FAILED...', error);
        });
        
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    resetModalValue() {
      this.$refs.observer.reset()
      this.name = ''
      this.email = ''
      this.message = ''
    }
  },
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid rgba(var(--bs-dark-rgb), 0.1);
  background-image: linear-gradient(190deg, rgb(44, 78, 88, 0.95), rgba(var(--bs-dark-rgb), 0.7) 40%);
  border-radius: 10px;
}

span.modal-span {
  text-transform: none;
  color: rgba(40, 161, 197, 0.95)!important;
}

h1 {
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: 700;
}

h3 {
  text-transform: none!important;
}

button {
  border-color: rgba(var(--bs-info-rgb), 0.7);
  background-color: rgba(var(--bs-info-rgb), 0.7);
  box-shadow: 0 .125rem .25rem rgba(23, 88, 107, 0.95)!important;
  transition-property: transform;
  transition: all 0.5s;

  > span {
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-0.15em);
  }

  &:focus {
    background-color: rgba(var(--bs-info-rgb), 0.5);
  }
}
</style>
