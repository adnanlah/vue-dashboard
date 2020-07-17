<template>
	<div class="dashboard">
		<Tabbar :labels="labels" @click="tabClicked" :active="labels[0]"/>

		<md-content class="tabcontent md-scrollbar">
			<div class="stat-widgets">
				<StatWidget :stats="allStats" v-if="filterBy == 'All'">
		  			<template v-slot:title>PATIENTS</template>
		  		</StatWidget>
				<StatWidget :stats="covidStats" v-if="filterBy == 'All' || filterBy == 'Covid-19'" sorted>
		  			<template v-slot:title>COVID-19</template>
		  		</StatWidget>
				<StatWidget :stats="asthmaStats" v-if="filterBy == 'All' || filterBy == 'Asthma'" sorted>
		  			<template v-slot:title>Asthma</template>
		  		</StatWidget>
				<StatWidget :stats="familyStats" v-if="filterBy == 'All' || filterBy == 'Family History'" sorted>
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
import Tabbar from '@/components/Tabbar.vue'

export default {
  name: 'Dashboard',
  components: {
    Tabbar,
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
  	allStats: [{
  		type: 'population',
		value: 20,
	},{
  		type: 'pending',
		value: 40,
	},{
  		type: 'discharged',
		value: 50,
	}],
  	covidStats: [{
  		type: 'active',
		value: 20,
	},{
  		type: 'warning',
		value: 40,
	},{
  		type: 'hospitalized',
		value: 50,
	}],
  	asthmaStats: [{
  		type: 'active',
		value: 220,
	},{
  		type: 'warning',
		value: 40,
	},{
  		type: 'hospitalized',
		value: 50,
	}],
  	familyStats: [{
  		type: 'hospitalized',
		value: 150,
	},{
  		type: 'active',
		value: 60,
	},{
  		type: 'warning',
		value: 10,
	}],
  	assessments: [
        {
          id: 1,
          score: 1,
          name: "Diana Reede",
          status: 'active',
          gender: "Female",
          age: 78,
          dateOfBirth: '2/12/1942',
          assessment: 'Covid-19',
          keyMetrics: {
          	type: 'Covid-19',
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
          name: "Jennifer Corner",
          status: 'discharged',
          gender: "Female",
          age: 78,
          dateOfBirth: '2/12/1942',
          assessment: 'Asthma',
          keyMetrics: {
          	type: 'Asthma',
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
          score: 11,
          name: "Sam Johnson",
          status: 'hospitalized',
          gender: "Male",
          age: 45,
          dateOfBirth: '2/12/1976',
          assessment: 'Family History',
          keyMetrics: {
          	type: 'Family History',
          	data: ['Heart disease', 'Asthma', 'Diabetes', 'Hypertension']
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
		height: 100vh;
		
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