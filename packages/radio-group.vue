<template>
  <div class="xwl-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XwlRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>

</style>
