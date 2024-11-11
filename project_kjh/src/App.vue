<template>
  <div id="app">
    <button @click="showModal = true">지원하기</button>

    <!-- 모달 컴포넌트 연결 -->
    <Modal :isVisible="showModal" @close="showModal = false" @submit="handleSubmit" />
    <SuccessModal :isVisible="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './views/project_modal.vue'
import SuccessModal from './views/Success/SuccessModal.vue'

const showModal = ref(false)
const showSueccessModal = ref(false)

const handleSubmit = () => {
  const result = confirm('지원하시겠습니까?')
  console.log(result)
}
</script>

<style>
/* 기본 스타일 */
#app {
  text-align: center;
  margin-top: 60px;
}

button {
  background-color: #e03a3e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
