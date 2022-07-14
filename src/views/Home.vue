<template>
  <div data-test="home-wrapper">
<!--    <h1 data-test="title">Home</h1>-->
    <Calendar data-test="calendar" />

    <PreMoodContents v-if="!todayMood.isSave"/>
    <AfterMoodContents v-else/>

    <button
      class="edit"
      data-test="mood-edit-button"
      @click="openModal">
      <font-awesome-icon icon="edit" class="fa-xl" />
    </button>
  </div>

  <AddMood
    v-if="editModal.isVisible"
    @close="closeModal"/>
</template>

<script>
import AddMood from '@/components/Modal/Modal.vue';
import Calendar from '@/components/Home/Calendar.vue';
import PreMoodContents from '@/components/Home/PreMoodContents.vue';
import AfterMoodContents from '@/components/Home/AfterMoodContents.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  components: {
    AddMood,
    Calendar,
    PreMoodContents,
    AfterMoodContents,
  },
  props: {},
  data() {
    return {
      todayMood: {
        type: '',
        isSave: false,
      },
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
<style lang="scss" scoped>
@import "src/style/color";

  .edit {
    position: fixed;
    bottom: 11vh;
    right: 3vh;
    width: 4em;
    height: 4em;

    border: none;
    border-radius: 50px;
    color: $white;
    background: $black;
  }
</style>
