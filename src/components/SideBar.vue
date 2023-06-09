<script setup lang="ts">
import router from "@/router";
import axios from "axios";
import { computed, onMounted } from "vue";


const getStatus = async () => {
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/posts`
      )
      .then((res) => {
				console.log('rse',res);
      })
      .catch((er) => {
        console.log("er", er);
      });
    return
  };
const activePage = computed(()=>{
	return router.currentRoute.value.fullPath.includes('create')
})


onMounted (async()=>{
	getStatus()
})
</script>

<template>
	<div class="side-bar--container">
		<div class="border">USER INFO</div>
		<div class="link border" :class="!activePage ? 'active' : ''"><RouterLink to="/">
			<div style="display: flex;">
				<img style="width: 30px;" src="@/components/icons/home.svg" alt="">
				AllNews
			</div>
		</RouterLink></div>
    <div class="link border" :class="activePage ? 'active' : ''"><RouterLink to="/create">create</RouterLink></div>
	</div>
</template>

<style lang="sass" scoped>
.side-bar--container
	display: flex
	flex-direction: column
	align-items: center

.border
	width: 100%
	padding: 5px
	border: 1px solid grey
	
.link
	display: flex
	align-items: center
	justify-content: center
	a 
		width: 100%
		text-align: center
.active
	background: red
</style>