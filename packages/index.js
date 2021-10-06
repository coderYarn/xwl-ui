// 整个包的入口
import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Switch from './switch.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'
import Form from './form.vue'
import FormItem from './form-item.vue'
import './fonts/iconfont.css'
const components = [Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem
]
const install = (Vue) => {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
