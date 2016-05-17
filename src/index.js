const catchAll = promises => {
  return new Promise((resolve, reject) => {
    const rejected = [];
    let idx = 0;

    const _idxHandler = () => {
      idx += 1;
      if (idx === promises.length) {
        resolve(rejected);
      }
    };


    const _reject = (res) => {
      _idxHandler();
      rejected.push(res);
    };

    try {
      for (const promise of promises) {
        promise
          .then(() => _idxHandler())
          .catch(data => _reject(data));
      }
    } catch (e) {
      reject(e);
    }
  });
};

export default catchAll;
