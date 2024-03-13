// @ts-check

import index from '../index.js';

const port = 8080;
index().listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server was started on '${port}'`);
});
