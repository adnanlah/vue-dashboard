<template>
	<div class="dashboard">
		<div class="tabbar">
			<div class="datebar">July 16, 2020 4:30 PM</div>
			<Tabs :labels="labels" @click="tabClicked" :active="labels[0]"/>
		</div>
		<md-content class="tabcontent md-scrollbar">
			<div class="stat-widgets">
				<StatWidget :stats="allStats" v-if="filterBy == 'All'">
		  			<template v-slot:title>PATIENTS</template>
		  		</StatWidget>
				<StatWidget :stats="covidStats" v-if="filterBy == 'All' || filterBy == 'Covid-19'">
		  			<template v-slot:title>COVID-19</template>
		  		</StatWidget>
				<StatWidget :stats="asthmaStats" v-if="filterBy == 'All' || filterBy == 'Asthma'">
		  			<template v-slot:title>Asthma</template>
		  		</StatWidget>
				<StatWidget :stats="familyStats" v-if="filterBy == 'All' || filterBy == 'Family History'">
		  			<template v-slot:title>Family History</template>
		  		</StatWidget>
			</div>
			<div class="assessments-data">
				<AssessTable :data="assessments"/>
			</div>
		</md-content>
	</div>
</template>

<script>
import StatWidget from '@/components/StatWidget.vue'
import AssessTable from '@/components/AssessTable.vue'
import Tabs from '@/components/Tabs.vue'

export default {
  name: 'Dashboard',
  components: {
    Tabs,
    AssessTable,
    StatWidget
  },
  methods: {
  	tabClicked(val) {
  		this.filterBy = val;
  	}
  },
  data: () => ({
  	filterBy: 'All',
  	labels: [
		'All',
		'Following',
		'Covid-19',
		'Asthma',
		'Family History'
  	],
  	// stats should be computed but I don't have enough data to do so
  	allStats: {
		people: 50,
		pending: 50,
		redirect: 50
	},
  	covidStats: {
		good: 60,
		warning: 70,
		danger: 80
	},
  	asthmaStats: {
		good: 90,
		warning: 150,
		redirect: 60
	},
  	familyStats: {
		good: 44,
		pending: 77,
	},
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

<style lang="scss" scoped>
	$base-spacing: 1.5rem;
	$bord-rad: .25rem;

	.dashboard {
		flex-grow: 1;
		height: 100vh;
		.tabbar {
			padding: 0 $base-spacing;
			background-color: #fff;
			height: 4rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.datebar {
				font-size: .75rem;
				color: grey;
				font-weight: 100;
				text-align: right;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			
		}
		.tabcontent {
			background-color: #F5F6FA;
			padding: $base-spacing;
			height: calc(100vh - 4rem);
			overflow-y: scroll;
			.stat-widgets {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: $base-spacing;
				& > div {
					width: 24%;
				}
			}
			.assessments-data {
				padding: $base-spacing;
				background-color: #fff;
				
			}
		}
	}
</style>