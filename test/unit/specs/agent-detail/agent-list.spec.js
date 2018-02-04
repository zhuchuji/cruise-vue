import AgentList from '@/components/agent-detail/agent-list.vue'
import { createComponent } from 'test/unit/specs/util.js'

describe('AgentList', () => {
  let vm

  beforeEach(() => {
    vm = createComponent(AgentList)
  })

  describe('methods', () => {
    describe('statusBgColor', () => {
      it('should return "bg-green" if passing "idle"', () => {
        expect(vm.statusBgColor('idle')).to.equal('bg-green')
      })

      it('should return "bg-orange" if passing "building"', () => {
        expect(vm.statusBgColor('building')).to.equal('bg-orange')
      })
    })
  })

  describe('filters', () => {
    describe('getSystemUrl', () => {
    })
  })
})
