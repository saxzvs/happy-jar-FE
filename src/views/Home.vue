<template>
  <div>
    <h1 data-test="title">Home</h1>
    <button
      class="edit"
      @click="openModal"
      data-test="mood-edit-button">
      <font-awesome-icon icon="edit" class="fa-xl" />
    </button>
  </div>

  <AddMood
    v-if="editModal.isVisible"
    @close="closeModal"/>
</template>

<script>
import AddMood from '@/components/Modal/Modal.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  components: {
    AddMood,
  },
  props: {},
  data() {
    return {
      editModal: {
        isVisible: false,
      },
    };
  },
  methods: {
    openModal() {
      this.editModal.isVisible = true;
    },
    closeModal() {
      this.editModal.isVisible = false;
    },
  },
};

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
