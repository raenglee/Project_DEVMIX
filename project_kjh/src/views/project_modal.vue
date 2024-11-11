<template>
	<div class="modal-container" :class="{ isVisible: !props.isVisible }">
		<div class="modal-content">
			<button class="close-button" @click="closeModal">x</button>
			<h2 class="modal-title">지원하시겠습니까?</h2>
			<form @submit.prevent="submitForm">
				<div class="form-group">
					<label for="position">지원 직군</label>
					<input type="text" id="position" v-model="position" placeholder="지원 직군" />
				</div>
				<div class="form-group">
					<label for="reason">지원 사유 및 한마디</label>
					<textarea id="reason" v-model="reason" placeholder="지원 사유 및 한마디"></textarea>
				</div>
				<div class="form-actions">
					<button type="button" class="btn-cancel" @click="closeModal">아니오</button>
					<button type="submit" class="btn-confirm" @click="confirmSubmit">예</button>
				</div>
				<p class="info-text">예를 누르시면, 정보제공 / 유의사항에 동의 한 것으로 간주합니다.</p>

				<h3 class="notes-title">유의사항</h3>
				<ul class="notes">
					<li>프로젝트에게 가입하신 이메일 정보에 제공됩니다.</li>
					<li>프로젝트에서 작업한 저작권에 프로젝트에 귀속됩니다.</li>
					<li>프로젝트 분쟁사항은 데브믹스에서 책임지지 않습니다.</li>
					<li>리더가 14일동안 승인하지 않으면 자동 취소됩니다.</li>
				</ul>
			</form>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const emit = defineEmits(['close', 'submit']);
const props = defineProps({ isVisible: Boolean });

const position = ref('');
const reason = ref('');



// "아니오" 버튼 클릭 시
const closeModal = () => {
  emit('close');
};

// "예" 버튼 클릭 시
const submitForm = () => {
  emit('submit');
};
</script>

<script></script>

<style lang="scss" scoped>
.modal-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-content {
	background-color: white;
	padding: 2rem;
	border-radius: 15px;
	width: 400px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	position: relative;
}

.close-button {
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
}

.modal-title {
	text-align: left;
  color: #333;
	font-size: 1.5rem;
	margin-bottom: 1rem;
}

.form-group {
	margin-bottom: 1.25rem;
  text-align: left;
}

label {
	display: block;
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
}

input,
textarea {
	width: 100%;
	padding: 0.75rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 0.9rem;
}

textarea {
	height: 120px;
  resize: none;
  overflow-y: auto;
}

.form-actions {
	display: flex;
	justify-content: center;
  gap: 0.5rem;
	margin-top: 1rem;
}

.btn-cancel,
.btn-confirm{
  width: 100px;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.btn-cancel {
  width: 110px;
  height: 50px;
	background-color: #ddd;
	border: none;
	padding: 0.75rem 1.5rem;
	border-radius: 30px;
	cursor: pointer;
}

.btn-confirm {
  width: 110px;
  height: 50xp;
	background-color: #e03a3e;
	color: white;
	border: none;
	padding: 0.75rem 1.5rem;
	border-radius: 30px;
	cursor: pointer;
}

.info-text {
	font-size: 11px;
	text-align: center;
	color: #777;
	margin-top: 1rem;
}

.notes-title {
	font-size: 1rem;
	margin-top: 1.5rem;
	margin-bottom: 0.5rem;
	color: #333;
	text-align: left;
}

.notes {
	font-size: 0.75rem;
	color: #555;
	margin-top: 1rem;
	padding-left: 1rem;
}

.notes li {
	margin-bottom: 0.5rem;
	text-align: left;
	list-style: disc;
}
.isVisible {
	display: none;
}
</style>
