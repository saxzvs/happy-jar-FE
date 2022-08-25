<template>
  <div class="login-wrapper">
    <div class="item">
      <p>나에게 받는 위로</p>
      <div class="login-logo"></div>
      <p>
        반가워요. 오늘의 기분을 남겨 보세요.<br/>
        오늘의 내가 내일의 나에게<br/>
        응원이 될 수도, 위로가 되어 줄 수 있답니다.
      </p>
    </div>

    <div class="btn-group">
      <button class="login-btn naver"></button>
      <button class="login-btn kakao"></button>
    </div>

    <div class="sign-in">
      <p>Sign in</p>
    </div>

    <div class="skip">
      <p>SKIP</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: auto;
  font-size: 2vh;
  text-align: center;
  color: #aaa;
  line-height: initial;
}
.login-logo {
  width:19.322vw;
  height:10vh;
  margin:1.5625vw auto 1.5625vw auto;
  background:url(../assets/images/h-jar-logo.png) no-repeat;
  background-size:contain;
  font-size:0
}
login-wrapper:first-child {
  height: 25vh;
}
.btn-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 2.5vh auto 0 auto;
}
.btn-group > * {
  border: none;
  min-height: 9vh;
  min-width: 80vw;
  margin: 1.5625vw auto;
}
.naver {
  background: url(../assets/images/login-naver.png) no-repeat;
  background-size: contain;
}
.kakao {
  background: url(../assets/images/login-kakao.png) no-repeat;
  background-size: contain;
}
</style>
