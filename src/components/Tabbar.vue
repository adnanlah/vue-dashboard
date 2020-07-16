<template>
  <div class="tabbar">
    <div class="datebar">July 16, 2020 4:30 PM</div>
    <div class="tabs">
      <div
      v-for="(label, idx) in labels"
      :class="{label: true, 'is-active': label == realActiveTab}"
      @click="tabClicked(label)"
      >{{label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
  	labels: {
  		required: true,
  		type: Array
  	},
  	active: {
  		required: true,
  		type: String
  	}
  },
  data() {
  	return {
  		clickedTab: '',
  	}
  },
  computed: {
  	realActiveTab() {
  		return this.clickedTab ? this.clickedTab : this.active;
  	}
  },
  methods: {
  	tabClicked(val) {
  		this.clickedTab = val;
  		return this.$emit('click', this.realActiveTab)
  	}
  }
};
</script>

<style lang="scss" scoped>
	$bord-rad: .25rem;
	$base-spacing: 1.5rem;
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
    .tabs {
      display: flex;
      .label {
        cursor: pointer;
        padding: 10px $base-spacing;
        border-radius: $bord-rad $bord-rad 0 0;
        font-weight: 800;
        &.is-active {
          color: blue;
          background-color: #F5F6FA;
        }
      }
    }
  }
</style>