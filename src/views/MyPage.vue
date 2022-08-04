<template>
  <h2 class="pg-title">마이페이지</h2>

  <MyPageContents />
</template>

<script>
// eslint-disable-next-line no-unused-vars,import/extensions
import MyPageContents from '@/components/MyPage/MyPageContents';

export default {
  name: 'MyPage',
  props: {},
  components: {
    MyPageContents,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.pg-title{
  width: 100%;
  margin-bottom: 1.5vw;
  justify-content: center;
}
.pg-title:after {
  content: "";
  display: inline-block;
  height:0px;
  border-radius: 2px;
  color: gray;
  border: 1px solid currentColor;
  width: 80%;
}
</style>
