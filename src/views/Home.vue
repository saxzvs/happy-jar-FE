<template>
  <div>
    <h1 data-test="title">Home</h1>
    <button class="edit">
      <font-awesome-icon icon="edit" class="fa-xl" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {}
}
</script>

<style lang="scss">
@import "src/style/color";

  .edit {
    position: fixed;
    bottom: 11vh;
    right: 3vh;
    width: 4em;
    height: 4em;
    background: $black;
    color: $white;
    border: none;
    border-radius: 50px;
  }
</style>
