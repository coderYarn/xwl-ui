<template>
  <div class="xwl-form-item">
    <label class="xwl-form-item_label" :style="{width:this.From.labelWidth}">{{label}}</label>
    <div class="xwl-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xwlFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['From']
}
</script>

<style lang='scss'>
  .xwl-form-item{
    margin-bottom: 25px;
    .xwl-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color:#606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .xwl-form-item_content{
      line-height: 40px;
      position:relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
