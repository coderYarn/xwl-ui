<template>
  <div class="xwl-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'xwlCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
