<template>
  <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '40' // 기본 너비
    },
    height: {
      type: String,
      default: '40' // 기본 높이
    }
  }
};
</script>

<style scoped>
/* 스타일 추가 */
</style>
