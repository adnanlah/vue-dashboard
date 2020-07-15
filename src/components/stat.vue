<template>
  <div class="stat">
    <div class="header">
      <slot name="title" class="title"></slot>
      <div class="total">
        <md-icon>group</md-icon>
        <slot name="total"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="data"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stat',
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .stat {
    
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #222;
    .header {
      display: flex;
      justify-content: space-between;
      font-weight: 800;
      .total {
        color: darkgrey;
      }
    }
    .bar {
      position: relative !important;
      width: 60%;
      border-radius: 5px;
      justify-content: flex-end;
      padding: 0 5px;
      background: #EEF4FF !important;
      color: black;
      margin-bottom: 5px;
      font-weight: 800;
    }
    .item {
      display: flex;
      justify-content: flex-start;
    }
    .content {
      .item {
        .md-icon {
          margin: 0;
        }
      }
    }
  }
</style>
