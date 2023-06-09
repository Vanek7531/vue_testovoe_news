<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="side-bar"><SideBar /></div>
  <div class="body">
		<RouterView />
	</div>
</template>

<style lang="sass" scoped>
.side-bar
	position: fixed
	height: 100%
	width: 20%
	border-right: 1px solid white
	// padding: 20px 
.body
	padding-left: 20%
</style>
