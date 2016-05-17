import {
  expect
}
from 'chai';
import catchAll from './index';

describe('catch.all', function() {
  describe('all', function() {
    it('Fullfield returns empty errors', async function(done) {
      const promises = [
        Promise.resolve('1'),
        Promise.resolve('2'),
        Promise.resolve('3')
      ];

      try {
        const result = await catchAll(promises);
        expect(result)
          .to.be.equal([]);
        done();
      } catch (e) {
        done();
      }
    });

    it('Should return on error', async function(done) {
      const promises = [
        Promise.reject('test 1'),
        Promise.reject('test 2')
      ];

      try {
        const result = await catchAll(promises);

        expect(result)
          .to.be.an('array');
        expect(result)
          .to.have.lengthOf(2);
        expect(result)
          .to.include('test 1');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('Return an error from catch', async function(done) {
      const promises = [
        Promise.reject('test value'),
        'rest',
      ];

      try {
        const result = await catchAll(promises);
        done();
      } catch (e) {
        expect(e.toString())
          .to.be.equal('TypeError: promise.then is not a function');
        done();
      }

    });

    it('Should return all errors', async function(done) {
      const promises = [
        Promise.reject('1'),
        Promise.reject('2'),
        Promise.reject('3')
      ];

      try {
        const result = await catchAll(promises);

        expect(result).to.have.lengthOf(3);
        expect(result).to.include('1');
        expect(result).to.include('2');
        expect(result).to.include('3');

        done();
      } catch (e) {
        done(e);
      }
    });

  });

});
