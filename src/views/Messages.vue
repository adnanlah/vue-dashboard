<template>
<div class="dashboard">
	<Tabbar :labels="labels" :active="labels[0]"/>
	
	<md-content class="tabcontent md-scrollbar">
		<div class="messages">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam reprehenderit veniam ea minus, quisquam aut debitis facilis voluptates tempora placeat nulla sint saepe dolores repellendus! Sequi voluptate et animi culpa blanditiis repellat nobis, dignissimos ex odit, magni dicta delectus placeat voluptas deserunt eligendi. Tenetur voluptatibus dolorum fugit laboriosam obcaecati. Quaerat rem non animi quam mollitia iusto saepe. Officia sed, accusantium ea laudantium accusamus, eaque quos doloribus doloremque rem recusandae quis reprehenderit quod tempore voluptatibus! Sit nisi nobis beatae enim adipisci quas in tenetur officiis, fugiat sequi consequatur assumenda quasi repudiandae magni quos tempore totam placeat voluptas dignissimos rem commodi blanditiis!
		</div>
	</md-content>
</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
	name: 'Messages',
	components: {
		Tabbar,
	},
	data() {
		return {
			labels: [
			'All',
			'Unread',
			'Sent',
	  	],
		}
	},
};
</script>

<style lang="scss" scoped>
	.tabcontent {
			background-color: #F5F6FA;
		padding: 1.5rem;
		.messages {
			padding: 1.5rem;
			background-color: #fff;
		}
	}
</style>