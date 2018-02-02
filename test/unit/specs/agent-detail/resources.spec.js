import Resources from '@/components/agent-detail/resources.vue'
import { expect } from 'chai'
import { createComponent } from 'test/unit/specs/util.js'

describe('Resources', () => {
  it('should pass in an array to props', () => {
    let resourcesComp = createComponent(Resources, {resources: [{name: 'chrome'}]})
    expect(resourcesComp.resources).to.deep.equal([{name: 'chrome'}])
  })

  it('should throw error if passing in anything else than array', () => {
    let consoleLog = sinon.spy(console, 'error')
    createComponent(Resources, {resources: {}})
    expect(consoleLog.lastCall.args[0].toLowerCase()).to.include('invalid prop')
  })

  it('should delete one resource', () => {
    let resourcesComp = createComponent(Resources, {resources: [{name: 'chrome'}]})
    resourcesComp.deleteResource(0)
    expect(resourcesComp.resources).to.deep.equal([])
  })

  it('should set isAddResShow to true', () => {
    let resourcesComp = createComponent(Resources)
    expect(resourcesComp.isAddResShow).to.equal(false)
    resourcesComp.showAddRes()
    expect(resourcesComp.isAddResShow).to.equal(true)
  })

  it('should add resources', () => {
    let resourcesComp = createComponent(Resources, {resources: []})
    resourcesComp.addRes(['chrome'])
    expect(resourcesComp.resources).to.deep.equal([{name: 'chrome'}])
    expect(resourcesComp.isAddResShow).to.equal(false)
    expect(resourcesComp.isAddResDlgShow).to.equal(false)
  })

  it('should set isAddResShow to false', () => {
    let resourcesComp = createComponent(Resources)
    resourcesComp.isAddResShow = true
    resourcesComp.hideAddRes()
    expect(resourcesComp.isAddResShow).to.equal(false)
  })

  it('should set isAddResDlgShow to true', () => {
    let resourcesComp = createComponent(Resources)
    expect(resourcesComp.isAddResDlgShow).to.equal(false)
    resourcesComp.showAddResDlg()
    expect(resourcesComp.isAddResDlgShow).to.equal(true)
  })

  it('should set isAddResDlgShow to false', () => {
    let resourcesComp = createComponent(Resources)
    resourcesComp.isAddResDlgShow = true
    resourcesComp.hideAddResDlg()
    expect(resourcesComp.isAddResDlgShow).to.equal(false)
  })
})