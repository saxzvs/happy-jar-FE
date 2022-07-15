<template>
  <article class="mood-list" >
    <div class="mood-item" v-for="mood in moods" :key="mood.id">
      {{ mood.ment }}
    </div>
  </article>
</template>

<script>
import moodData from '@/assets/datas/moodData';

export default {
  name: 'MoodList',
  props: {},
  data() {
    return {
      moods: moodData,
    };
  },
};
</script>

<style lang="scss">
@import "src/style/color";
.mood-list {
  padding: 10px 0;

  .mood-item {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 5vh;
    margin-bottom: 10px;
    padding: 5px 0;
    border: 1px solid $border-color;
    border-radius: 20px;
  }
}
</style>
