<script setup lang="ts">
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'

const news = ref()
const showModal = ref()
const arr = ref([])

const showText = (idx: number) => {
  let a = news.value.find((el:any) => el.id === idx + 1)
  if (a.show) {
    a.show = false
  } else a.show = true
}

const showClass = computed(() => {
  return
})

const delNew = async (id: number, idx:number) => {
	if(confirm(`вы уверены xчто хотите удалить новость №${id}?`)){
		await axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      news.value.splice(idx, 1)
    })
    .catch((er) => {
      console.log('er', er)
    })
	}
  return
}

const getAllNews = async () => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      news.value = res.data
    })
    .catch((er) => {
      console.log('er', er)
    })
  return
}

onMounted(async () => {
  getAllNews()
})

const reactive = computed(()=>news.value)
</script>

<template>
	<div class="news-body" v-if="news">
		<!-- {{ reactive }} -->
    <h1>Все новости</h1>
    <div
      class="body-new"
      v-for="(story, idx) in reactive"
      :key="story.id"
      @click="showText(idx)"
    >
      <div class="new-id">{{ story.id }} // {{ idx }}</div>
      <div style="max-width: 80%;">
        <div>{{ story.title }}</div>
        <div>id автора:{{ story.userId }}</div>
        <div :class="story.show ? 'show' : 'hide'">{{ story.body }}</div>
      </div>
      <div style="position: relative;">
        <button style="cursor: help;" @click.stop="delNew(story.id, idx)">
          удалить
        </button>
      </div>
    </div>
  </div>
  <div v-else>loading</div>
</template>

<style lang="sass" scoped>
.news-body
	// padding: 20px
	border: 1px solid grey

.show
	display: block
.hide
	display: none
.body-new
	display: flex
	justify-content: space-between
	border: 1px solid grey
	padding: 15px 10px
	align-items: center
	cursor: pointer


.modal
	position: absolute
	top: 30%
	left: 35%
	width: 700px
	height: 400px
	background: #6f6969
	display: flex
	justify-content: space-around
	align-items: center
	cursor: default
	div
		border: 1px solid black
		padding: 20px
		cursor: pointer
		border-radius: 20px
.new-id
	font-size: 28px
</style>
