<template>
	<div class="assessments">
		<div class="md-layout md-gutter">
			<StatWidget class="md-layout-item">
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
	  		</StatWidget>
			<StatWidget class="md-layout-item">
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
	  		</StatWidget>
			<StatWidget class="md-layout-item">
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
	  		</StatWidget>

			<AssessTable :data="assessments"/>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Assessments',

  props: {
  	assessmentsType: {
  		required: false,
  		type: String
  	},
  	assessments: {
  		required: true,
  		type: Array
  	}
  },

  

  data () {
    return {

    }
  }
};
</script>

<style lang="css" scoped>
</style>