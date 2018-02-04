import ResourcesAddForm from '@/components/agent-detail/resources-add-form.vue'
import { expect } from 'chai'
import { createComponent } from 'test/unit/specs/util.js'

describe('ResourcesAddForm', () => {
  let vm, spy

  describe('methods', () => {
    describe('add', () => {
      beforeEach(() => {
        vm = createComponent(ResourcesAddForm)
        spy = sinon.spy()
      })
      it('should add 0 resource with an empty string', () => {
        vm.resource = ''
        vm.$on('add', spy)
        vm.add()
        expect(spy.calledWith([])).to.equal(true)
      })

      it('should add 2 resources when passing "chrome, safari"', () => {
        vm.resources = 'chrome,safari'
        vm.$on('add', spy)
        vm.add()
        expect(spy.calledWith(['chrome', 'safari'])).to.equal(true)
      })

      it('should trim the spaces before and after the resources inputted', () => {
        vm.resources = '     chrome   ,   safari   '
        vm.$on('add', spy)
        vm.add()
        expect(spy.calledWith(['chrome', 'safari'])).to.equal(true)
      })
    })
  })

  describe('close', () => {
    beforeEach(() => {
      vm = createComponent(ResourcesAddForm)
    })

    it('should emit close event', () => {
      let spy = sinon.spy()
      vm.$on('close', spy)
      vm.close()
      expect(spy.called).to.equal(true)
    })
  })
})
