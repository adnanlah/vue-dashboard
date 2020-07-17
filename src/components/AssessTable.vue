<template>
  <div class="table-wrapper">
  	<div class="table-header">
	  	<md-field>
			<label for="first-name"></label>
			<md-input v-model="search" @input="searchOnTable" placeholder="Search by the date..."/>
		</md-field>

		<md-menu md-direction="bottom-end">
			<md-button md-menu-trigger>Actions</md-button>
			<md-menu-content>
				<md-menu-item>Action 1</md-menu-item>
				<md-menu-item>Action 2</md-menu-item>
				<md-menu-item>Action 3</md-menu-item>
			</md-menu-content>
		</md-menu>
  	</div>

     <md-table>

      <md-table-row>
        <md-table-head md-numeric>Score</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Age/Gender</md-table-head>
        <md-table-head>Assessment</md-table-head>
        <md-table-head>Key Metrics</md-table-head>
        <md-table-head>Messages</md-table-head>
        <md-table-head>Following</md-table-head>
      </md-table-row>

      <md-table-row v-for="(assess, idx) in searched" :key="idx">
        <md-table-cell md-numeric>
			<span :class="{
				score: true,
				'bg-pos': assess.score < 5,
				'bg-warn': assess.score > 5 && assess.score < 9,
				'bg-dang': assess.score > 10,
			}">
				<span class="score-num">{{assess.score}}</span>
			</span>
        </md-table-cell>
        <md-table-cell>
        	<md-icon :class="{
				'patient-status': true,
				'pos': assess.status == 'active',
				'dang': assess.status == 'hospitalized',
				'gray': assess.status == 'discharged',
			}">person</md-icon>
	        {{assess.name}}
	    </md-table-cell>
        <md-table-cell>
	        {{assess.age}}/{{assess.gender}} <br> {{assess.dateOfBirth}}
	    </md-table-cell>
        <md-table-cell>{{assess.assessment}}</md-table-cell>
        <md-table-cell>
	        <div v-if="assess.keyMetrics.type == 'Covid-19'" class="key-metric" v-for="(keyM, kmidx) in assess.keyMetrics.data" :key="kmidx">
	        	<md-icon :class="keyM.type == 'positive' ? 'pos' : 'dang'">
		        	{{keyM.type == 'positive' ? 'show_chart' : 'show_chart'}}
		        </md-icon>
	        	<span>{{keyM.content}}</span>
	        </div>
	        <div v-if="assess.keyMetrics.type == 'Asthma'" class="key-metric" v-for="(keyM, kmidx) in assess.keyMetrics.data" :key="kmidx">
	        	<md-icon :class="keyM.type == 'positive' ? 'pos' : 'dang'">
		        	{{keyM.type == 'positive' ? 'thumb_up_alt' : 'thumb_down_alt'}}
		        </md-icon>
	        	<span>{{keyM.content}}</span>
	        </div>
	        <div v-if="assess.keyMetrics.type == 'Family History'" class="key-metric">
	        	<span>{{assess.keyMetrics.data.join(', ')}}</span>
	        </div>
	    </md-table-cell>
        <md-table-cell>
        	<md-icon :class="{pos: assess.messages.pictures}">camera_alt</md-icon>
        	<md-icon :class="{pos: assess.messages.messages}">chat_bubble</md-icon>
        </md-table-cell>
        <md-table-cell>
        	<span v-if="assess.following" class="f-button f-button-following">Following</span>
        	<span v-else class="f-button f-button-follow">Follow</span>
        </md-table-cell>
      </md-table-row>

      
    </md-table>
  </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term)
		return items.filter(item => toLower(item.dateOfBirth) == term)
    return items
  }

  export default {
    name: 'AssessTable',
    props: {
    	data: {
    		required: true,
    		type: Array
    	}
    },
    data: () => ({
      search: null,
      searched: [],
      
    }),
    methods: {
      searchOnTable () {
        this.searched = searchByName(this.data, this.search)
      }
    },
    created () {
      this.searched = this.data
    }
  };
</script>

<style lang="scss" scoped>
	.table-wrapper {
		.md-icon {
			margin-right: 3px;
		}
		.table-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.md-field {
				width: 25%;
			}
			.md-menu > .md-button {
				color: #fff;
				background-color: #0054FE !important;
			}
		}

		.md-badge {
			position: relative;
		}
		.score {
			width: 2rem !important;
			height: 2rem !important;
			position: absolute;
			left: calc(50% - 1rem) !important;
			top: calc(50% - 1rem);
			padding: 10px;
			border-radius: 100%;
			background: orange;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			color: #fff;
		}
		.f-button {
			padding: .5rem 1rem;
			border-radius: .25rem;
		}
		.f-button-following {
			color: #219E6C;
			background-color: #E9F6F1;
		}
		.f-button-follow {
			color: #AAAAAA;
			background-color: #F0F1F2;
		}
		.patient-status * {
			width: 10px;
			font-size: .25rem !important;
		}
	}
	
</style>