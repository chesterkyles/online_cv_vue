<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div :class="[size, 'modal-content']">
        <header class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="modal-close" @click="close">
            <i class="fa fa-window-close"></i>
          </button>
        </header>
        <section class="modal-body">
          <slot name="body"></slot>
          <div class="modal-close-small">
            <button type="button" class="btn btn-info" @click="close">close</button>
          </div>
        </section>
        <footer v-if="withFooter" class="modal-footer">
          <slot name="header"></slot>
          <button type="button" class="btn-green" @click="close">Close Modal</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      withFooter: {
        type: Boolean,
        default: false,
      },
      size: String,
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.modal-content {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
  padding: 5px 10px;
  display: flex;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-close {
  border: none;
  font-size: 20px;
  padding: 0px!important;
  margin: 0px!important;
  cursor: pointer;
  font-weight: bold;
  color: rgba(var(--bs-info-rgb), 0.9)!important;
  background: transparent;
  margin-left: auto!important;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}

.modal-close-small {
  display: none;
}

@media screen and (max-width: 768px) {
  .modal-header {
    display:none;
  }

  .modal-close-small {
    display: block;
    text-align: center;

    > button {
      border-radius: 16px;
      border-color: rgba(var(--bs-info-rgb), 0.7);
      background-color: rgba(var(--bs-info-rgb), 0.7);
      box-shadow: 0 .125rem .25rem rgba(23, 88, 107, 0.95)!important;
      margin-top: 20px;
      padding: 0 20px;
    }
  }

}
</style>
