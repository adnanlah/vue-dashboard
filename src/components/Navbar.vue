<template>
	<div class="navbar">
		<div>
			<div class="logo">
				<img src="@/assets/logo.svg" alt="logo">
			</div>
			<div class="menu">
				<router-link class="item" to="/">
					<md-icon>house</md-icon>
					Dashboard
				</router-link>
				<router-link class="item" to="messages">
					<md-icon>message</md-icon>
					Messages
				</router-link>
				<router-link class="item" to="assessments">
					<md-icon>attachment</md-icon>
					Assessments
				</router-link>
				<router-link class="item" to="patients">
					<md-icon>group</md-icon>
					Patients
				</router-link>
				<router-link class="item" to="data">
					<md-icon>pie_chart</md-icon>
					Data
				</router-link>
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
	& *, & * .md-icon {
		color: rgba(255,255,255,.2);
	}
	.menu {
		margin: 0 0 10% 10%;
		.item {
			width: 100%;
			padding: 10px 10px 10px 30px;
			border-radius: 5px 0 0 5px;
			margin-bottom: 5px;
			display: block;
			color: rgba(255,255,255,.2);
			&.router-link-active, &.router-link-active .md-icon {
				color: #001C31 !important;
				background-color: #F5F6FA;
			}
			&:hover {
				text-decoration: none;
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
			.md-icon {
				color: #fff;
			}
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