<template>
  <div class="wrapper">
    <div class="item">
      <p>앱버전</p>
      <span>{{appVer}}</span>
    </div>
    <div class="item">
      <p class="sub">로그아웃</p>
    </div>
    <div class="item">
      <p class="sub">자주 묻는 질문</p>
    </div>
    <div class="item">
      <p>잠금 설정</p>
      <span v-if="isLocked">on</span>
      <span v-else>off</span>
    </div>
    <div class="item">
      <p class="sub">데이터 초기화</p>
    </div>
    <div class="item">
      <p class="sub">만든 사람들</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPageContents',
  props: {},
  data() {
    return {
      appVer: 'v 1.0.0',
      isLocked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 5.5vw;
  padding: 0.85vw;
  background: #fff;
  border-radius: 0.8vw;
  font-size: 4.6vw;
  align-items: center;
}
.item > span:last-child {
  color: #979797;
}
.item p.sub {
  display: contents;
}
.item p.sub:after {
  content: '>';
  display: inline-block;
  margin-left: 0.1125vw;
  font-weight: normal;
  color: #979797;
  float: right;
}
</style>
