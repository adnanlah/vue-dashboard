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
      <div class="item item-default" v-if="stats.people">
        <md-icon>group</md-icon>
        <md-badge :md-content="stats.people" class="bar" :style="`width: ${stats.people / total * 100}%`"/>
      </div>
      <div class="item item-default" v-if="stats.pending">
        <md-icon>hourglass_empty</md-icon>
        <md-badge :md-content="stats.pending" class="bar" :style="`width: ${stats.pending / total * 100}%`"/>
      </div>
      <div class="item item-default" v-if="stats.redirect">
        <md-icon>arrow_circle_up</md-icon>
        <md-badge :md-content="stats.redirect" class="bar" :style="`width: ${stats.redirect / total * 100}%`"/>
      </div>
      <div class="item item-good" v-if="stats.good">
        <md-icon>thumb_up_alt</md-icon>
        <md-badge :md-content="stats.good" class="bar" :style="`width: ${stats.good / total * 100}%`"/>
      </div>
      <div class="item item-warning" v-if="stats.warning">
        <md-icon>report_problem</md-icon>
        <md-badge :md-content="stats.warning" class="bar" :style="`width: ${stats.warning / total * 100}%`"/>
      </div>
      <div class="item item-danger" v-if="stats.danger">
        <md-icon>error</md-icon>
        <md-badge :md-content="stats.danger" class="bar" :style="`width: ${stats.danger / total * 100}%`"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stat',
  props: {
    stats: {
      required: true,
      type: Object,
    }
  },
  computed: {
    total() {
      let total = 0;
      for (let item in this.stats) {
        total += this.stats[item];
      }
      return total;
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
      .total {
        color: darkgrey;
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
        }
        & > .md-icon {
          color: #EEF4FF !important;
        }
      }
      &.item-good {
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
      &.item-danger {
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
