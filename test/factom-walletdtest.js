/* eslint-disable no-console */
const assert = require('assert')
const walletd = require('../src/factom-walletd.js')

// todo: implement a server helper to simulate factom node for testing
//factomd.setFactomNode('http://127.0.0.1:8088/v2')

describe('factomd.directoryBlock', function () {
  it('should call factomd.directoryBlock', function (done) {
    assert.doesNotThrow(async function () {
      const ret = await walletd.directoryBlock(0, '7ed5d5b240973676c4a8a71c08c0cedb9e0ea335eaef22995911bcdc0fe9b26b')
      console.log(JSON.stringify(ret))
      done()
    }, done)
  })
})

describe('factomd.directoryBlockHead', function () {
  it('should call factomd.directoryBlockHead', function (done) {
    assert.doesNotThrow(async function () {
      const response = await walletd.directoryBlockHead(0)
      console.log(JSON.stringify(response))
      done()
    }, done)
  })
})

describe('factomd.heights', function () {
  it('should call factomd.heights', function (done) {
    assert.doesNotThrow(async function () {
      const response = await walletd.heights(0)
      console.log(JSON.stringify(response))
      done()
    }, done)
  })
})
