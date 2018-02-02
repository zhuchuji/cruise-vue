import Vue from 'vue'

function createComponent (component, propsData) {
  const constructor = Vue.extend(component)
  const newComponent = new constructor({ propsData: propsData }).$mount()
  return newComponent
}

export {
  createComponent
}
