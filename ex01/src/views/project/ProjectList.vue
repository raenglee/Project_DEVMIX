<template>
  <div class="bg-white">
    <!--🟥메인 박스-->
    <section class="container mx-auto py-8">
      <h1 class="text-4xl font-bold text-center mb-6 animate-slideUp py-10">현재 모집 중인 프로젝트를 확인해보세요!</h1>

      <!--🔍서치 박스-->
      <div class="flex items-center justify-between">
        <div class="flex gap-4">
          <form action="#">
            <select name="" size="1" class="px-4 py-1 my-5 border-2 border-gray rounded-full cursor-pointer outline-none">
              <option selected>구별</option>
              <option>온라인</option>
              <option>서울</option>
              <option>대구</option>
              <option>부산</option>
            </select>
          </form>

          <form action="#">
            <select name="" size="1" class="px-4 py-1 my-5 border-2 border-gray rounded-full cursor-pointer outline-none">
              <option selected>포지션</option>
              <option>프론트엔드</option>
              <option>백엔드</option>
              <option>디자이너</option>
              <option>PM</option>
              <option>기획자</option>
              <option>데브옵스</option>
              <option>안드로이드 개발자</option>
              <option>IOS 개발자</option>
              <option>크로스 플랫폼 개발자</option>
            </select>
          </form>

          <form action="#">
            <select name="" size="1" class="px-4 py-1 my-5 border-2 border-gray rounded-full cursor-pointer outline-none">
              <option selected>기술 / 언어</option>
              <option>JAVA</option>
              <option>JavaScript</option>
              <option>PHP</option>
              <option>Python</option>
              <option>C#</option>
              <option>Figma</option>
            </select>
          </form>

          <button 
  class="px-4 py-1 my-5 border-2 border-[#d10000] rounded-full outline-none"
  :class="{
    'bg-[#d10000] text-white': onlyBookmarked,
    'bg-white text-black': !onlyBookmarked
  }" 
  @click="clickBookmarkonly"
>
  북마크만 보기
</button>

<button 
  class="px-4 py-1 my-5 border-2 border-[#d10000] rounded-full outline-none"
  :class="{
    'bg-[#d10000] text-white': onlyNeeded,
    'bg-white text-black': !onlyNeeded
  }" 
  @click="clickneededonly"
>
  모집중만 보기
</button>


          <!-- <button class="px-4 py-1 my-5 border-2 border-[#d10000] rounded-full outline-none" @click="clickneededonly">모집중만 보기</button>-->
        </div>

        <div class="flex items-center border border-gray-300 rounded-full px-4 py-1">
          <input type="text" placeholder="# 검색어를 입력하세요" class="flex-grow focus:outline-none" v-model="searchText" />
          <button><img src="/img/search.png" class="h-5 w-5" /></button>
        </div>
      </div>
      
      <!--서치 박스 끝-->

      <!--📝프로젝트 글 박스-->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div v-for="i in 8" :key="i" class="relative">
          <div class="border-2 rounded-2xl p-4 relative">
            <div class="top-4 flex items-center justify-between">
              <div class="border px-2 rounded-full mb-2 bg-gray-300">지역</div>
              <font-awesome-icon
                :icon="isBookmarked ? ['fas', 'bookmark'] : ['far', 'bookmark']"
                :class="[isBookmarked ? 'text-[#7371fc]' : 'text-gray-400', 'cursor-pointer']"
                style="font-size: 22px"
                @click="toggleBookmark"
              />
            </div>
            <div class="text-sm mb-2">마감일 | yyyy.mm.dd</div>
            <div class="text-2xl font-bold mb-2">제목</div>
            <div class="flex p-3 gap-7 mb-1">
              <span class="flex flex-col size-5 items-center text-sm"
                ><img src="/img/figma.png" />
                <!-- <SvgIcon src="@/assets/svg/figma.svg" /> -->
                Figma
              </span>
              <span class="flex flex-col size-8 items-center text-sm"
                ><img src="/img/springboot.png" />
                <!-- <SvgIcon src="@/assets/svg/figma.svg" /> -->
                Spring
              </span>
            </div>
            <div class="flex flex-col">
              <div class="ml-auto mb-1">닉네임</div>
              <div class="flex justify-between">
                <div class="text-sm">인원 n/n</div>
                <div><font-awesome-icon icon="eye" class="text-gray-400" /> 20 <font-awesome-icon icon="comment" class="text-gray-400" /> 30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--프로젝트 글 박스 끝-->

      <div class="text-center mt-10 mb-10">
        <span class="font-semibold text-3xl"> 현재 DEVMIX에서 모집 중인 프로젝트 <span class="text-[#D10000]">N</span>건</span>
      </div>

      <!--📝프로젝트 글 박스2-->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div v-for="i in 8" :key="i" class="relative">
          <div class="border rounded-2xl p-4 relative">
            <div class="top-4 flex items-center justify-between">
              <div class="border px-2 rounded-full mb-2 bg-gray-300">지역</div>
              <font-awesome-icon
                :icon="isBookmarked ? ['fas', 'bookmark'] : ['far', 'bookmark']"
                :class="[isBookmarked ? 'text-[#7371fc]' : 'text-gray-400', 'cursor-pointer']"
                style="font-size: 22px"
                @click="toggleBookmark"
              />
            </div>
            <div class="text-sm mb-2">마감일 | yyyy.mm.dd</div>
            <div class="text-2xl font-bold mb-2">제목</div>
            <div class="flex gap-5 mb-1">기술스택</div>
            <div class="flex flex-col">
              <div class="ml-auto mb-1">닉네임</div>
              <div class="flex justify-between">
                <div class="text-sm">인원 n/n</div>
                <div><font-awesome-icon icon="eye" class="text-gray-400" /> 20 <font-awesome-icon icon="comment" class="text-gray-400" /> 30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--프로젝트 글 박스 끝-->

      <!--페이지-->
      <div class="flex justify-center mt-8 space-x-2">
        <button class="px-4 py-2">1</button>
      </div>
    </section>
  </div>

  <div class="bottom bg-[#d10000] bottom-0 left-0 w-full text-white text-center">DEVMIX</div>
</template>

<!--스크립트-->
<script>
import { ref } from 'vue';

export default {
  setup() {
    const onlyBookmarked = ref(false);
    const onlyNeeded = ref(false);
    const isBookmarked = ref(false);

    const clickBookmarkonly = () => {
      onlyBookmarked.value = !onlyBookmarked.value;
      console.log('북마크만보기');
    };

    const clickneededonly = () => {
      onlyNeeded.value = !onlyNeeded.value;
      console.log('모집중만 보기');
    }

    const toggleBookmark = () => {
      isBookmarked.value = !isBookmarked.value; //
    };
    
    return {
      isBookmarked,
      onlyBookmarked,
      onlyNeeded,
      clickBookmarkonly,
      clickneededonly,
      toggleBookmark
    };
  },
};
</script>
