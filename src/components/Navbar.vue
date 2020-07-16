<template>
	<div class="navbar">
		<div>
			<div class="logo">
				<img src="@/assets/logo.svg" alt="logo">
			</div>
			<div class="menu">
				<div class="item active">
					<md-icon>house</md-icon>
					Dashboard
				</div>
				<div class="item">
					<md-icon>message</md-icon>
					Messages
				</div>
				<div class="item">
					<md-icon>attachment</md-icon>
					Assessments
				</div>
				<div class="item">
					<md-icon>group</md-icon>
					Patients
				</div>
				<div class="item">
					<md-icon>pie_chart</md-icon>
					Data
				</div>
			</div>
			<div class="more">
				<div class="new-patient">
					<md-icon>add</md-icon>
					Patient
				</div>
				<div class="labo">
					<md-avatar class="avatar">
				      <img src="@/assets/labo.png" alt="Avatar">
				    </md-avatar>
					<span>Kaiser permanente Redwood City</span>
				</div>
			</div>
		</div>
		<div class="account">
			<div class="account-info">
				<md-avatar class="avatar">
			    	<img src="@/assets/labo.png" alt="Avatar">
			    </md-avatar>
			    <div class="name">Valentina <br> Rossi MD</div>
			</div>
			<div>
				<md-icon>expand_more</md-icon>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Navbar',

  data () {
    return {

    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>