<template>
	<div id="app">
    	<Navbar />
		<div class="main-container">
			<router-view/>
		</div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
	components: {
		Navbar
	},
	name: 'App',
};
</script>

<style lang="scss">
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");

#app {
	display: flex;
	font-weight: 800;
	.main-container {
		background-color: #F5F6FA;
		flex: 1;
	}
}
.pos {
	color: #39C38D !important;
}
.warn {
	color: #F7B500 !important;
}
.dang {
	color: #FF5252 !important;
}
.gray {
	color: #ccc !important;
}
.bg-pos {
	background-color: #39C38D !important;
}
.bg-warn {
	background-color: #F7B500 !important;
}
.bg-dang {
	background-color: #FF5252 !important;
}
.bg-gray {
	background-color: #ccc !important;
}
</style>
