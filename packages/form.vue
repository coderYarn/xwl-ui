<template>
  <div class="xwl-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xwlForm',
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      From: this
    }
  }
}
</script>

<style>

</style>
