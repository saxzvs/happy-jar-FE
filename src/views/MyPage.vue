<template>
  <!--div class="title-wrapper">
    <h2 class="pg-title">마이페이지</h2>
  </div-->
  <PageTitle>
    <template v-slot:title>마이페이지</template>
    <template v-slot:description>궁금한 내용이 있나요?</template>
  </PageTitle>

  <MyPageContents />
</template>

<script>
import PageTitle from '@/components/Modal/PageTitle.vue';
import MyPageContents from '@/components/MyPage/MyPageContents.vue';

export default {
  name: 'MyPage',
  props: {},
  components: {
    PageTitle,
    MyPageContents,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "src/style/common";

</style>
