const { assert } = require('chai');

const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const url = `http://localhost:3000/hw/store/cart${BUG_ID}`;

describe('Корзина', async function() {
    it('Пустая корзина', async function() {

        await this.browser.url(url,  {timeout: 300});
        await this.browser.assertView('cart_empty', '.Application', {
            allowViewportOverflow: false,
            compositeImage: false,
        });
    });

//     it('Полная корзина', async function() {
// // а вот тут надо как-то замокать
//         await this.browser.url('http://localhost:3000/hw/store/catalog',  {timeout: 300});
//         await this.browser.assertView('medium', '.Application', {
//             allowViewportOverflow: false,
//             compositeImage: false,
//             ignoreElements: [
//                 '.card-body'
//             ]
//         });
//     });
});

