import Resources from '@/components/agent-detail/resources.vue'
import { createComponent } from 'test/unit/specs/util.js'

describe('Resources', () => {
  describe('props', () => {
    let vm

    describe('resources', () => {
      it('should validate [] to true', () => {
        vm = createComponent(Resources, { resources: [] })
        expect(vm.resources).to.deep.equal([])
      })

      it('should validate [{name: "chrome"}] to true', () => {
        vm = createComponent(Resources, { resources: [{name: 'chrome'}] })
        expect(vm.resources).to.deep.equal([{name: 'chrome'}])
      })

      describe('exceptions', () => {
        let consoleError

        before(() => {
          consoleError = sinon.spy(console, 'error')
        })

        it('should validate {} to false', () => {
          vm = createComponent(Resources, { resources: {} })
          expect(consoleError.lastCall.args[0]).to.include('Invalid prop')
        })

        it('should validate [{}] to false', () => {
          vm = createComponent(Resources, { resources: [{}] })
          expect(consoleError.lastCall.args[0]).to.include('Invalid prop')
        })
      })
    })
  })

  describe('methods', () => {
    describe('delete', () => {
      let resources, vm

      beforeEach(() => {
        resources = [{name: 'chrome'}]
        vm = createComponent(Resources, {resources: resources})
      })

      it('should delete one resource if pos < length', () => {
        vm.deleteResource(0)
        expect(vm.resources).to.deep.equal([])
      })

      it('should do nothing if pos >= length', () => {
        vm.deleteResource(1)
        expect(vm.resources).to.deep.equal(resources)
      })
    })
  })

  describe('showAddRes', () => {
    it('should set isAddResShow to true', () => {
      let vm = createComponent(Resources)
      expect(vm.isAddResShow).to.equal(false)
      vm.showAddRes()
      expect(vm.isAddResShow).to.equal(true)
    })
  })

  describe('addRes', () => {
    it('should add resources', () => {
      let vm = createComponent(Resources, {resources: []})
      vm.addRes(['chrome'])
      expect(vm.resources).to.deep.equal([{name: 'chrome'}])
      expect(vm.isAddResShow).to.equal(false)
      expect(vm.isAddResDlgShow).to.equal(false)
    })
  })

  describe('hideAddRes', () => {
    it('should set isAddResShow to false', () => {
      let vm = createComponent(Resources)
      vm.isAddResShow = true
      vm.hideAddRes()
      expect(vm.isAddResShow).to.equal(false)
    })
  })

  describe('showAddResDlg', () => {
    it('should set isAddResDlgShow to true', () => {
      let vm = createComponent(Resources)
      expect(vm.isAddResDlgShow).to.equal(false)
      vm.showAddResDlg()
      expect(vm.isAddResDlgShow).to.equal(true)
    })
  })

  describe('hideAddResDlg', () => {
    it('should set isAddResDlgShow to false', () => {
      let vm = createComponent(Resources)
      vm.isAddResDlgShow = true
      vm.hideAddResDlg()
      expect(vm.isAddResDlgShow).to.equal(false)
    })
  })
})
