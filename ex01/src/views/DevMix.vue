<template>
  <div class="bg-white">
    <!-- 메인 섹션 -->
    <section class="container mx-auto py-8">
      <h1 class="text-2xl font-bold text-center mb-6">현재 모집 중인 프로젝트를 확인해보세요!</h1>

      <!-- 프로젝트 카드 그리드 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="i in 8" :key="i" class="border rounded-2xl shadow-md p-6 bg-white relative">
          <!-- 모집일 및 북마크 -->
          <div class="absolute top-4 right-4 flex items-center space-x-2 z-10 bg-white px-2">
            <div class="text-sm text-gray-500">모집일: 2023.05.25</div>
            <button class="text-blue-500">🔖</button>
          </div>

          <!-- 프로젝트 제목 -->
          <h2 class="text-lg font-semibold mt-12 mb-2">
            [UI 디자인] ○○ 서비스를 위한 ○○ 사이트 구축 디자이너 모집
          </h2>
          <!-- 모집 인원 -->
          <p class="text-sm text-gray-700 mb-4">현재 인원: 2/3</p>
          <!-- 기술 아이콘 -->
          <div class="flex space-x-2 mb-4">
            <img src="https://via.placeholder.com/20" alt="기술1" class="w-6 h-6" />
            <img src="https://via.placeholder.com/20" alt="기술2" class="w-6 h-6" />
            <img src="https://via.placeholder.com/20" alt="기술3" class="w-6 h-6" />
          </div>
        </div>
      </div>

      <!-- 모집 프로젝트 개수 -->
      <div class="text-center mt-8">
        <span class="font-semibold text-lg">
          현재 DEVMIX에서 모집 중인 프로젝트 <span class="text-[#D10000]">76건</span>
        </span>
      </div>

      <!-- 페이지네이션 -->
      <div class="flex justify-center mt-8 space-x-2">
        <button class="px-4 py-2 border rounded-lg">1</button>
        <button class="px-4 py-2 border rounded-lg">2</button>
        <button class="px-4 py-2 border rounded-lg">3</button>
        <button class="px-4 py-2 border rounded-lg">4</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjectList'
}
</script>
