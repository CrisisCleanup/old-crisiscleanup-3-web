import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://webapp`;


test('My first test', async t => {
  await t
    .expect(Selector('.app-header')).visible;
});
