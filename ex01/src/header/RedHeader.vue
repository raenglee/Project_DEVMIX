<template>
  <!--🔴헤더-->
  <header>
    <div class="p-3 bg-[#d10000]">
      <nav class="flex space-x-5 justify-between items-center">
        <div>
          <RouterLink to="/" class="text-3xl text-white font-bold">DEVMIX</RouterLink>
        </div>

        <div class="flex space-x-4">
          <button><img src="/img/bell.png" class="h-6 w-6" /></button>
          <RouterLink to="/projectlist"><img src="/img/pen.png" class="h-6 w-6" /></RouterLink>
          <button class="focus:outline-none" @click.stop="modalLogin('login')">
            <img src="/img/person.png" class="h-6 w-5" />
          </button>
        </div>
      </nav>
    </div>
  </header>

  <!--🙎‍♂️로그인 모달-->
  <div class="overlay" :class="{ isModal: isModal }"></div>
  <div class="modal p-5 w-96 rounded-lg" :class="{ isView: isModal }">
    <div class="flex items-center justify-between">
      <h1 class="text-lg text-black font-bold">로그인</h1>
      <button class="h-4 w-4" @click="modalLogin"><img src="/img/x.png" /></button>
    </div>

    <div class="m-5 justify-center">
      <div>
        <button class="m-1" @click="DoGoogleLogin"><img src="/img/sns_G.png" /></button>
        <button id="custom-login-btn" class="m-1" @click="kakaoLogin()">
          <img src="/img/sns_k.png" />
        </button>
        <button class="m-1"><img src="/img/sns_n.png" /></button>

        <p>
          <a
            href="http://localhost:5173/oauth2/authorization/naver?redirect_uri=http://localhost:5173/oauth2/redirect"
            >네이버</a
          >
        </p>
        <p>
          <a
            href="http://localhost:5173/oauth2/authorization/kakao?redirect_uri=http://localhost:5173/oauth2/redirect"
            >카카오</a
          >
        </p>
        <p>
          <a href="http://localhost:5173?redirect_uri=http://localhost:5173/test">구글</a>
        </p>
      </div>
    </div>

    <p class="text-center text-xs text-gray-400">
      소셜 로그인 시 <br />
      이용약관, 개인정보처리방침, 전자금융거래약관에 동의함으로 처리됩니다.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isModal = ref(false)

const modalLogin = async () => {
  isModal.value = !isModal.value
}

const DoGoogleLogin = () => {
  const url =
    'https://accounts.google.com/o/oauth2/v2/auth?client_id=' +
    '296298834351-i3rb8vhr7repa385aum4jdm5agris39s.apps.googleusercontent.com' +
    '&redirect_uri=' +
    'http://localhost:5173/test' +
    '&response_type=code' +
    '&scope=email profile'

  this.showSocialLoginPopup(url)

  window.Google.Auth.authorize({
    redirectUri: 'http://localhost:5173/test'
  })
}

const kakaoLogin = () => {
  window.Kakao.Auth.authorize({
    redirectUri: 'http://localhost:5173/oauth'
    // scope: 'account_email,friends,talk_calendar,talk_calendar_task',
  })
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0.3);
  display: none;
}
.isModal {
  display: block;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1001;
  display: none;
}
.isView {
  display: block;
}
</style>
