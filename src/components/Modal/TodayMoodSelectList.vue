<template>
  <article class="today-mood-item-wrapper">
    <label v-for="mood in moods" :key="mood.id" data-test="today-mood-item">
      <input
          class="today-mood-radio"
          type="radio"
          v-model="todayMoodType"
          :value="mood.type"
          data-test="today-mood-radio"/>
      <span
          class="today-mood-label box-shadow"
          :class="mood.type"
          :data-test="`today-mood-${ mood.type }`">
        {{ mood.ment }}
      </span>
    </label>
  </article>
</template>

<script>
import { mapState } from 'vuex';
import moodData from '@/assets/datas/moodData';

export default {
  name: 'MoodList',
  props: {
  },
  computed: {
    ...mapState(['todayMood']),
    todayMoodType: {
      get() {
        return this.todayMood;
      },
      set(value) {
        this.$store.commit('setTodayMood', value);
      },
    },
  },
  data() {
    return {
      moods: moodData,
    };
  },
};
</script>

<style lang="scss">
@import "src/style/color";

.today-mood-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 0;

  label {
    .today-mood-label {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30vh;
      height: 5vh;
      margin-bottom: 20px;
      padding: 5px 0;
      border: 1px solid $border-color;
      border-radius: 20px;
      font-weight: bold;
    }

    &:last-child .today-mood-label {
      margin-bottom: 0;
    }
  }
}

.today-mood-radio {
  display: none;
}
.today-mood-radio:checked ~ .today-mood-label {

  &.happy {
    background: $happy;
  }
  &.excite {
    background: $excite;
  }
  &.angry {
    background: $angry;
  }
  &.worry {
    background: $worry;
  }
  &.depressed {
    background: $depressed;
  }
  &.peaceful {
    background: $peaceful;
  }
}

</style>
