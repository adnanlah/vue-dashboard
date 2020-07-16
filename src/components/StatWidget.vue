<template>
  <div class="stat">
    <div class="header">
      <slot name="title" class="title"></slot>
      <div class="total">
        <md-icon>group</md-icon>
        <slot name="total">{{total}}</slot>
      </div>
    </div>
    <div class="content">
      <template v-for="(stat, idx) in realStats">
        <div class="item item-default" v-if="stat.type == 'population'">
          <md-icon>group</md-icon>
          <md-badge :md-content="stat.value" class="bar" :style="getStyle(idx, stat.value)"/>
        </div>
        <div class="item item-default" v-if="stat.type == 'pending'">
          <md-icon>hourglass_empty</md-icon>
          <md-badge :md-content="stat.value" class="bar" :style="getStyle(idx, stat.value)"/>
        </div>
        <div class="item item-default" v-if="stat.type == 'discharged'">
          <md-icon>arrow_circle_up</md-icon>
          <md-badge :md-content="stat.value" class="bar" :style="getStyle(idx, stat.value)"/>
        </div>
        <div class="item item-active" v-if="stat.type == 'active'">
          <md-icon>thumb_up_alt</md-icon>
          <md-badge :md-content="stat.value" class="bar" :style="getStyle(idx, stat.value)"/>
        </div>
        <div class="item item-warning" v-if="stat.type == 'warning'">
          <md-icon>report_problem</md-icon>
          <md-badge :md-content="stat.value" class="bar" :style="getStyle(idx, stat.value)"/>
        </div>
        <div class="item item-hospitalized" v-if="stat.type == 'hospitalized'">
          <md-icon>error</md-icon>
          <md-badge :md-content="stat.value" class="bar" :style="getStyle(idx, stat.value)"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stat',
  props: {
    stats: {
      required: true,
      type: Array,
    },
    sorted: {
      required: false,
      defaultValue: false,
      type: Boolean
    }
  },
  methods: {
    getStyle(idx, value) {
      let width = 0;
      if (idx == 0 && this.sorted) {
        width = 100;
      } else if ((value / this.total * 100) < 15) {
        width = 15;
      } else {
        width = value / this.total * 100
      }
      return `width: ${width}%`
    }
  },
  computed: {
    total() {
      let total = 0;
      for (let item in this.stats) {
        total += this.stats[item].value;
      }
      return total;
    },
    realStats() {
      if (!this.sorted)
        return this.stats;
      return this.stats.sort((a, b) => {
        if ( a.value > b.value )
          return -1;
        if ( a.value < b.value )
          return 1;
        return 0;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .stat {
    background: #fff;
    padding: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    .header {
      display: flex;
      justify-content: space-between;
      font-weight: 800;
      .total, .total .md-icon {
        color: #ccc;
      }
    }
    
    .item {
      display: flex;
      justify-content: flex-start;
      .bar {
        position: relative !important;
        border-radius: 5px;
        justify-content: flex-end;
        padding: 0 5px;
        color: black;
        margin-bottom: 5px;
        font-weight: 800;
      }
      &.item-default {
        & > .bar {
          background-color: #EEF4FF;
          color: #ccc;
        }
        & > .md-icon {
          color: #EEF4FF !important;
        }
      }
      &.item-active {
        & > .bar {
          background-color: #39C38D;
          color: #fff;
        }
        & > .md-icon {
          color: #39C38D !important;
        }
      }
      &.item-warning {
        & > .bar {
          background-color: #F5B355;
          color: #fff;
        }
        & > .md-icon {
          color: #F5B355 !important;
        }
      }
      &.item-hospitalized {
        & > .bar {
          background-color: #F55555;
          color: #fff;
        }
        & > .md-icon {
          color: #F55555 !important;
        }
      }
    }
    .content {
      .item {
        .md-icon {
          margin: 0;
        }
      }
    }
    .md-icon {
      font-size: 1.2rem !important;
    }
  }
</style>
