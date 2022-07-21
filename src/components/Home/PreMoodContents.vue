<template>
  <div class="wrapper" data-test="pre-mood-container">
    <div class="comment">
      <p class="title-comment">오늘 하루 어땠나요?</p>
      <p class="sub-comment">당신의 기분을 알려 주세요 😊</p>
    </div>
    <div class="quote">
      <p class="quote-title">🌼 힘이 되는 말</p>
      <p class="quote-text">{{ quote }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreMoodContents',
  data() {
    return {
      quote: '항상 맑으면 사막이 된다.비가 내리고 바람이 불어야만비옥한 땅이 된다. \n – 스페인 속담',
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px;
}

.comment {
  max-width: 400px;
  margin: 10px 0;

  .title-comment {
    text-align: left;
    font-size: 1.5em;
    font-weight: bolder;
    padding-bottom: 10px;
  }
  .sub-comment {
    text-align: right;
    font-size: 1.3em;
    font-weight: bold;
  }
}

.quote {
  padding: 20px 0;

  .quote-title {
    font-weight: bold;
    padding-bottom: 10px;
  }
  .quote-text {
  }
}

</style>
