const { assert } = require('chai');

const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const baseUrl = 'http://localhost:3000/hw/store';

describe('Сценарий покупки', async function() {
    // it('проверяем отображение единичного товара', async function() {

    //     await this.browser.url(`${baseUrl}/catalog/1${BUG_ID}`,  {timeout: 300});
    //     await this.browser.assertView('product', '.Product', {
    //         allowViewportOverflow: false,
    //     });
    // });
    it('проверяем процесс чекаута', async function() {

        await this.browser.url(`${baseUrl}/catalog/0${BUG_ID}`,  {timeout: 300});
        await this.browser.$('.ProductDetails-AddToCart').click();
        await this.browser.pause(1000);
        // await this.browser.$(".navbar-nav:nth-child(3)").click();
        await this.browser.url(`${baseUrl}/cart${BUG_ID}`,  {timeout: 300});
        await this.browser.assertView('cart-with-product', '.Application', {
            allowViewportOverflow: false,
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

