<template>
  <div class="title-wrapper">
    <div class="pg-title">
      <slot name="title">Page Title</slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div.title-wrapper {
  width: 85%;
  margin: auto auto 3vh auto;
  text-align: left;
}
div.title-wrapper > .pg-title {
  margin-bottom: 3.5vh;
  font-size: 1.5em;
  font-weight: bolder;
}
div.title-wrapper > :not(.pg-title) {
  padding-left: 3.5vw;
  color: #767676;
}
div.title-wrapper:not(.no-line):after {
  content: "";
  display: block;
  border: 1px solid currentColor;
  margin: 1.5vh auto;
}
</style>
