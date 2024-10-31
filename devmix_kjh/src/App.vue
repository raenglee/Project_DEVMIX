<template>
  <header>
    <div class="p-5 flex justify-between items-center bg-[#d10000] text-white">
      <h1 class="text-3xl font-bold">DEVMIX</h1>
      <div class="flex space-x-4">
        <img src="@/assets/icons/bell.png" width="32px" class="h-6 w-6" />
        <img src="@/assets/icons/pen.png" width="32px" class="h-6 w-6" />
        <img src="@/assets/icons/person.png" width="32px" class="h-6 w-6" />
      </div>
    </div>
  </header>

  <div class="flex flex-col items-center mt-8">
    <div
      class="flex items-center border border-gray-300 rounded-full px-4 py-2 w-5/6 max-w-lg mb-6"
    >
      <span class="text-gray-500 mr-2">#</span>
      <input
        type="text"
        placeholder="Search here"
        class="flex-grow focus:outline-none"
        v-model="searchText"
        @input="handleSearch"
      />
      <img src="@/assets/icons/search.png" alt="search" class="h-6 w-6 ml-2" />
    </div>

    <!-- 해시태그들 -->
    <div class="flex flex-wrap justify-center mb-6">
      <span
        v-for="tag in hashtags"
        :key="tag"
        class="text-gray-400 text-sm px-3 py-1 rounded-full hashtag"
        :class="{ 'bg-gray-300 text-white': activeTag === tag }"
        @mouseenter="hoverTag(tag)"
        @mouseleave="hoverTag(null)"
        @click="filterByTag(tag)"
      >
        {{ tag }}
      </span>
    </div>

    <!-- 최근 등록된 프로젝트 -->
    <h2 class="text-xl font-bold mb-4">최근 등록된 프로젝트</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
      <div
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="border rounded-lg p-4 bg-white shadow-md"
      >
        <h3 class="font-semibold">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
    <div class="mt-[10rem]">
      <button
        class="mt-4 px-4 py-2 body-text border-2 border- text-black rounded-full flex items-center justify-center"
        @click="loadMoreProjects"
      >
        전체 프로젝트 보기
        <img src="@/assets/icons/arrow.png" alt="arrow" class="ml-2 h-5 w-5" />
      </button>
    </div>
  </div>

  <footer class="bg-[#d10000] text-white py-[5.5rem] mt-8">
    <div class="flex flex-col items-center">
      <!-- Footer content -->
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue'

const searchText = ref('')
const activeTag = ref(null)
const projects = ref([
  { title: '프로젝트 제목 1', description: '프로젝트 설명이 여기 들어갑니다.' },
  { title: '프로젝트 제목 2', description: '프로젝트 설명이 여기 들어갑니다.' },
  { title: '프로젝트 제목 3', description: '프로젝트 설명이 여기 들어갑니다.' },
  { title: '프로젝트 제목 4', description: '프로젝트 설명이 여기 들어갑니다.' },
])
const hashtags = ref(['#UX/UI', '#백앤드', '#JAVA', '#CSS', '#react', '#웹디자인', '#vue'])
const filteredProjects = ref([...projects.value])

const hoverTag = (tag) => {
  activeTag.value = tag
}

const filterByTag = (tag) => {
  if (activeTag.value === tag) {
    filteredProjects.value = [...projects.value]
    activeTag.value = null
  } else {
    activeTag.value = tag
    filteredProjects.value = projects.value.filter((project) =>
      project.description.includes(tag.replace('#', ''))
    )
  }
}

const handleSearch = () => {
  filteredProjects.value = projects.value.filter((project) =>
    project.title.toLowerCase().includes(searchText.value.toLowerCase())
  )
}

const loadMoreProjects = () => {
  // 여기에 AJAX 요청을 추가하거나 추가 프로젝트를 가져오는 로직을 구현하세요
  console.log('Load more projects...')
}
</script>
