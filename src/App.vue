<template>
	<div id="app">
    	<Navbar />
		<div class="container">
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

	data () {
	return {

	}
	}
};
</script>

<style lang="scss">
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");

#app {
	display: flex;
	align-items: stretch;
	font-weight: 800;
	
	.navbar {
		background-color: #001C31 !important;
		width: 20%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.logo {
			height: 4rem;
			display: flex;
			justify-content: center;
			img {
				width: 50%;
				display: block;
			}
		}
		& * {
		color: rgba(255,255,255,.2);

		}
		.menu {
			margin: 0 0 10% 10%;
			.item {
				padding: 10px 10px 10px 30px;
				border-radius: 5px 0 0 5px;
				margin-bottom: 5px;
				cursor: pointer;
				&.active {
					color: #001C31;
					background-color: #F5F6FA;
				}
			}
		}
		.more {
			margin: 0 10%;
			.new-patient {
				padding: 10px 10px 10px 30px;
				border-radius: 5px;
				background-color: #294052;
				color: #fff;
				margin-bottom: 10%;
			}
			.labo {
				display: flex;
				justify-content: space-between;
			}
		}
		.avatar {
			margin-right: 10px;
		}
		.account {
			width: 100%;
			padding: 5% 10%;
			background-color: #0E283C;
		}
		.account, .account-info {
			justify-content: space-between;
			align-items: stretch;
			display: flex;
		}
	}
	
}
</style>
