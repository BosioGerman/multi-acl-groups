const test = require('ava').test
// const fixtures = require('./fixtures')
const acl = require('./../')

test('Group acl revoked by User acl', t => {
  let userAcls = [
    {
      id: 'acl1',
      endpoint: 'api.server.com',
      resource: '*',
      methods: ['GET'],
      action: 'allow'
    }
  ]
  let groupAcls = [
    {
      id: 'gpo01',
      endpoint: '*',
      resource: '*',
      methods: '*',
      action: 'deny'
    }]
  let result = acl.CheckAcl(groupAcls, userAcls, 'api.server.com', '/', 'GET')
  t.true(result)
})

test('Only Group Acl', t => {
  let userAcls = [
  ]
  let groupAcls = [
    {
      id: 'gpo01',
      endpoint: 'api.server.com',
      resource: '*',
      methods: '*',
      action: 'allow'
    }]
  let result = acl.CheckAcl(groupAcls, userAcls, 'api.server.com', '/', 'GET')
  t.true(result)
})

test('Only User Acl', t => {
  let groupAcls = [
  ]
  let userAcls = [
    {
      id: 'gpo01',
      endpoint: 'api.server.com',
      resource: '*',
      methods: '*',
      action: 'allow'
    }]
  let result = acl.CheckAcl(groupAcls, userAcls, 'api.server.com', '/', 'GET')
  t.true(result)
})
