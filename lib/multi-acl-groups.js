'use strict'

const multiacl = require('multi-acl')
// const _ = require('lodash')

module.exports = {
  CheckAcl (groupAclList, userAclList, endpoint, resource, method) {
    // let acls = _.concat(groupAclList, userAclList)
    // return multiacl.CheckUserAcl(acls, endpoint, resource, method)
    return multiacl.CheckUserAcl(groupAclList, endpoint, resource, method) || multiacl.CheckUserAcl(userAclList, endpoint, resource, method)
  }
}
