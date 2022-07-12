<template>
  <div class="overlay" data-test="modal">
    <div class="modal-container">

      <div class="header">
        <slot name="header">default header</slot>
        <font-awesome-icon
          icon="xmark"
          class="close fa-2x"
          @click="close"
          data-test="modal-close" />
      </div>

      <div class="body">
        <slot name="body">default body</slot>
      </div>

      <div class="footer">
        <button class="button" @click="close">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
@import "src/style/color.scss";

.overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $modalBgColor;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: $white;
    border-radius: 2px;

    .header {
      position: relative;

      .close {
        position: absolute;
        top: -10px;
        right: -15px;
      }
    }
    .body {
      margin: 20px 0;
    }
  }
}

</style>
