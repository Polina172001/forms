/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */

import RegisterBtn from '../registerBtn';

test('test for click', () => {
  document.body.innerHTML = '<div class=\'btn\'><button class=\'button\'>Жми сюда</button></div>';
  const button = new RegisterBtn('.btn');
  button.createTooltip();
  const elem = document.querySelector('.tooltip');
  expect(elem.className).toEqual('tooltip');
});
