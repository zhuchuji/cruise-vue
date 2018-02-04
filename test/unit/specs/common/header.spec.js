import Header from '@/components/common/header.vue'
import { createComponent } from 'test/unit/specs/util.js'

describe('Header', () => {
  let vm

  beforeEach(() => {
    vm = createComponent(Header)
  })

  describe('methods', () => {
    describe('collapseNav', () => {
      it('should collapse the nav', () => {
        vm.collapseNav()
        expect(vm.isNavShow).to.equal(true)
      })
    })

    describe('uncollapseNav', () => {
      it('should uncollapse the nav', () => {
        vm.uncollapseNav()
        expect(vm.isNavShow).to.equal(false)
      })
    })
  })
})
