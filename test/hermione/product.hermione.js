const { assert } = require('chai');

const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const url = `http://localhost:3000/hw/store/catalog/2${BUG_ID}`;

describe('Страница продукта', async function() {
    it('Страница продукта совпадает сама с собой', async function() {

        // await this.browser.url(`${baseUrl}/catalog/0${BUG_ID}`,  {timeout: 300});
        // await this.browser.$('.ProductDetails-AddToCart').click();
        // await this.browser.pause(1000);

        await this.browser.url(url,  {timeout: 300});
        await this.browser.$('.ProductDetails-AddToCart').click();
        await this.browser.pause(1000);
        const link = await this.browser.$(".navbar-nav .nav-link:nth-child(4)");
        // const href = await link.getAttribute("text");
        // assert.equal(link, 'Cart');
        const text = await JSON.stringify(link);
        assert.isTrue(/Cart \(\d+?\)/.test(text), 'количество не изменилось');
        await this.browser.assertView('product', '.Application', {
            allowViewportOverflow: false,
            ignoreElements: [
                '.ProductDetails-Name',
                '.ProductDetails-Description',
                '.ProductDetails-Price',
                '.ProductDetails-Color',
                '.ProductDetails-Material'
            ]
        });
    });
    // it('Тут должно падать', async function() { // или нет? куда он имя-то отдает

    //     await this.browser.url('http://localhost:3000/hw/store/catalog/0?bug_id=9',  {timeout: 300});
    //     await this.browser.assertView('product-bugged', 'body', {
    //         allowViewportOverflow: false,
    //         ignoreElements: [
    //             '.ProductDetails-Name',
    //             '.ProductDetails-Description',
    //             '.ProductDetails-Price',
    //             '.ProductDetails-Color',
    //             '.ProductDetails-Material'
    //         ]
    //     });
    // });
    // it('Тут должно падать', async function() { // или нет? куда он имя-то отдает

    //     await this.browser.url('http://localhost:3000/hw/store/catalog/4',  {timeout: 300});

    //     // await this.browser.assertView('product-bugged', 'body', {
    //     //     allowViewportOverflow: false,
    //     //     ignoreElements: [
    //     //         '.ProductDetails-Name',
    //     //         '.ProductDetails-Description',
    //     //         '.ProductDetails-Price',
    //     //         '.ProductDetails-Color',
    //     //         '.ProductDetails-Material'
    //     //     ]
    //     // });
    // });

    
});

// describe('Адаптивная верстка меню', async function() {
//     it('Ширина больше 1200', async function() {

//         await this.browser.setWindowSize(1200, 600);
//         await this.browser.url('http://localhost:3000/hw/store',  {timeout: 300});
//         const nav = await this.browser.$('nav', {
//             allowViewportOverflow: false,
//         });

//         await nav.assertView('wide-nav');

//     });

//     it('Ширина больше 576', async function() {

//         await this.browser.setWindowSize(576, 600);
//         await this.browser.url('http://localhost:3000/hw/store',  {timeout: 300});
//         const nav = await this.browser.$('nav', {
//             allowViewportOverflow: false,
//         });

//         await nav.assertView('medium-nav');
//     });

//     it('Ширина меньше 576', async function() {

//         await this.browser.setWindowSize(575, 600);
//         await this.browser.url('http://localhost:3000/hw/store');
//         const nav = await this.browser.$('nav');

//         await nav.assertView('narrow-nav', {
//             allowViewportOverflow: false,
//             screenshotDelay: 1000,
//         });
//        const hamburger = await nav.$('.Application-Toggler');
//         assert.isTrue(Boolean(hamburger), 'гамбургер не появился');
//     });
// });

// describe('Меню-гамбургер', async function() {

//     it ('При нажатии на иконку гамбургера должно открываться', async function () {
//         await this.browser.setWindowSize(575, 1000);
//         await this.browser.url('http://localhost:3000/hw/store',  {timeout: 900});
        
//         await this.browser.assertView('hamburger-closed', 'body', {
//             allowViewportOverflow: false,
//             screenshotDelay: 1000,
//         });

//         await this.browser.$('button.navbar-toggler').click();
//         await this.browser.pause(1000);

//         await this.browser.assertView('hamburger-opened', 'body', {
//             allowViewportOverflow: false,
//             // screenshotDelay: 1000,
//         });
//         await this.browser.pause(1000);
//         const menu = await this.browser.$('.Application-Menu');
//         const attr = await menu.getAttribute("class");
//         assert.equal(attr, 'Application-Menu navbar-collapse', 'меню не открылось');
//     })

//     it('При выборе пункта должно закрываться', async function() {
       
//         await this.browser.setWindowSize(575, 600);
//         await this.browser.url('http://localhost:3000/hw/store',  {timeout: 900});
//         // TODO вставить зависимость от багайди


//         await this.browser.$('button.navbar-toggler').click();
//         await this.browser.pause(1000);
//         await this.browser.$(".Application-Menu .navbar-nav:first-child").click();
//         await this.browser.pause(1000);

//         await this.browser.assertView('menu-closed', 'body', {
//             allowViewportOverflow: false,
//             screenshotDelay: 1000,
//         });
//         await this.browser.pause(1000);
//         const menu = await this.browser.$('.Application-Menu');
//         const attr = await menu.getAttribute("class");
//         assert.equal(attr, 'Application-Menu collapse navbar-collapse', 'меню не свернулось');
//     });
// });
