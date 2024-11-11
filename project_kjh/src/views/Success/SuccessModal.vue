<template>
    <div class="modal-container" v-if="isVisible">
        <div class="modal-content">
            <h2 class="modal-title">지원이 완료되었습니다!</h2>
            <p>작성자가 승인하면 프로젝트에 참가하게됩니다.</p>
            <button @click="closeModal">확인</button>
        </div>
    </div>
</template>

<script setup>
   import { defineProps, defineEmits } from 'vue';

const props = defineProps({ isVisible: Boolean });
const emit = defineEmits(['close']);

// "확인" 버튼 클릭 시
const closeModal = () => {
  emit('close');
};

</script>

<style lang="scss" scoped>
    
</style>