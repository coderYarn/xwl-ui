<template>
  <div class="xwl-input" :class="{'xwl-input_suffix':showSuffix}">
    <input
    :type="showPassword?(passwordVisible?'text':'password'):type"
    :placeholder="placeholder"
    class="xwl-input_inner"
    :name='name'
    :disabled='disabled'
    :class="{
      'is-disabled':disabled
    }"
    :value='value'
    @input="handleInput"
     />

  <span class="xwl-input_suffix" v-if="showSuffix">
   <i class="xwl-icon-cancel1" v-if="clearable && value" @click="clear"></i>
   <i  :class="{'xwl-icon-eye_protection':!passwordVisible,'xwl-icon-visible':passwordVisible,'xwl-icon-visible-active':passwordVisible}" v-if="showPassword" @click="handlePassword"></i>
 </span>
  </div>
</template>

<script>
export default {
  name: 'XwlInput',
  data () {
    return {
      passwordVisible: false// 密码框
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // 把内容清空
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>

  .xwl-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .xwl-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }

  .xwl-input_suffix{
    .xwl-input_inner{
      padding-right: 30px;
    }
    .xwl-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .xwl-icon-visible-active{
        color: skyblue;
      }
    }
  }
</style>
