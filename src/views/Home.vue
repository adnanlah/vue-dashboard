<template>
	<div class="dashboard">
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
				AVATAR
			</div>
		</div>
		<div class="container">
			<md-tabs>
				<md-tab id="tab-home" md-label="All">
					<div class="md-layout md-gutter">
						<stat class="md-layout-item">
				  			<template v-slot:title>PEOPLE</template>
				  			<template v-slot:total>310</template>
				  			<template v-slot:data>
								<div class="item">
									<md-icon>group</md-icon>
									<md-badge md-content="125" class="bar"/>    
								</div>
								<div class="item">
									<md-icon>hourglass_empty</md-icon>
									<md-badge md-content="125" class="bar"/>
								</div>
								<div class="item">
									<md-icon>arrow_circle_up</md-icon>
									<md-badge md-content="125" class="bar"/>
								</div>
				  			</template>
				  		</stat>
						<stat class="md-layout-item">
				  			<template v-slot:title>PEOPLE</template>
				  			<template v-slot:total>310</template>
				  			<template v-slot:data>
								<div class="item">
									<md-icon>group</md-icon>
									<md-badge md-content="125" class="bar"/>    
								</div>
								<div class="item">
									<md-icon>hourglass_empty</md-icon>
									<md-badge md-content="125" class="bar"/>
								</div>
								<div class="item">
									<md-icon>arrow_circle_up</md-icon>
									<md-badge md-content="125" class="bar"/>
								</div>
				  			</template>
				  		</stat>
						<stat class="md-layout-item">
				  			<template v-slot:title>PEOPLE</template>
				  			<template v-slot:total>310</template>
				  			<template v-slot:data>
								<div class="item">
									<md-icon>group</md-icon>
									<md-badge md-content="125" class="bar"/>    
								</div>
								<div class="item">
									<md-icon>hourglass_empty</md-icon>
									<md-badge md-content="125" class="bar"/>
								</div>
								<div class="item">
									<md-icon>arrow_circle_up</md-icon>
									<md-badge md-content="125" class="bar"/>
								</div>
				  			</template>
				  		</stat>
					</div>
					
			  		<assessments :data="assessments"/>
				</md-tab>
				<md-tab id="tab-pages" md-label="Following">
					2
				</md-tab>
				<md-tab id="tab-posts" md-label="Covid-19">
					3
				</md-tab>
				<md-tab id="tab-favorites" md-label="Asthma">
					4
				</md-tab>
				<md-tab id="fam-history" md-label="Family History">
					5
				</md-tab>
			</md-tabs>
		</div>
  		
	</div>
</template>

<script>
import stat from '@/components/stat.vue'
import assessments from '@/components/assessments.vue'

export default {
  name: 'Home',
  components: {
    assessments,
    stat
  },
  data: () => ({
  	assessments: [
        {
          id: 1,
          score: 6,
          name: "Diana Reede",
          gender: "Female",
          age: 78,
          dateOfBirth: '2/12/1942',
          assessment: 'Covid-19',
          keyMetrics: {
          	type: 'temp',
          	data: [
	          	{
	          		type: 'negative',
	          		content: 'Body temp: 104F'
	          	},
	          	{
	          		type: 'positive',
	          		content: 'Resp rate: 25'
	          	}
	         ]
          },
          messages: {
          	pictures: true,
          	messages: false
          },
          following: true
        },
        {
          id: 1,
          score: 6,
          name: "Diana Reede",
          gender: "Female",
          age: 78,
          dateOfBirth: '2/12/1942',
          assessment: 'Covid-19',
          keyMetrics: {
          	type: 'observ',
          	data: [
	          	{
	          		type: 'positive',
	          		content: 'Flovent HFA PO'
	          	},
	          	{
	          		type: 'negative',
	          		content: 'Daily breathing exercises'
	          	}
	         ]
          },
          messages: {
          	pictures: true,
          	messages: false
          },
          following: true
        },
        {
          id: 2,
          score: 10,
          name: "Sam Johnson",
          gender: "Male",
          age: 45,
          dateOfBirth: '2/12/1976',
          assessment: 'Covid-19',
          keyMetrics: {
          	type: 'notes',
          	data: ['Heart disease', 'Asthma']
          },
          messages: {
          	pictures: true,
          	messages: true
          },
          following: false
        }
      ]
  })
};
</script>

<style lang="scss">
	@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
	
	.dashboard {
		display: flex;
		align-items: stretch;
		font-weight: 800;
		.logo {
			height: 48px;
			display: flex;
			justify-content: center;
			img {
				width: 50%;
				display: block;
			}
		}
		.navbar {
			background-color: #001C31 !important;
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			& * {
			color: rgba(255,255,255,.2);

			}
			.menu {
				margin: 0 0 10% 10%;
				.item {
					padding: 10px 10px 10px 30px;
					border-radius: 5px 0 0 5px;
					margin-bottom: 5px;
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
					.avatar {
						margin-right: 10px;
					}
				}
			}
		}
		
	}
</style>