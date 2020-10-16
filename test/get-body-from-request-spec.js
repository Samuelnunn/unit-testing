const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    //arrange
   const response = getBodyFromRequest(fakeReq);

    
    //act
    fakeReq.emit('end');
    
    //assert
    response.then((data) => {
      if( data === "") {
       done("");
      } else {
        done("error!")
      }
    });
  });

  it('returns the data read from the stream', done => {
    expect.fail('please write this test');
  });
});
