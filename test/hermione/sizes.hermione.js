const { assert } = require('chai');

describe('Адаптивная верстка каталог', async function() {
    it('Ширина больше 1200', async function() {

        await this.browser.setWindowSize(1200, 11000);
        await this.browser.url('http://localhost:3000/hw/store/catalog',  {timeout: 300});
        await this.browser.assertView('wide', '.Application', {
            allowViewportOverflow: false,
            compositeImage: false,
            ignoreElements: [
                '.card-body'
            ]
        });
    });

    it('Ширина больше 576', async function() {

        await this.browser.setWindowSize(576, 11000);
        await this.browser.url('http://localhost:3000/hw/store/catalog',  {timeout: 300});
        await this.browser.assertView('medium', '.Application', {
            allowViewportOverflow: false,
            compositeImage: false,
            ignoreElements: [
                '.card-body'
            ]
        });
    });

    it('Ширина меньше 576', async function() {

        await this.browser.setWindowSize(576, 12000);
        await this.browser.url('http://localhost:3000/hw/store/catalog',  {timeout: 300});
        await this.browser.assertView('narrow', '.Application', {
            allowViewportOverflow: false,
            screenshotDelay: 1000,
            compositeImage: false,
            ignoreElements: [
                '.card-body'
            ]        });

    });
});

describe('Адаптивная верстка меню', async function() {
    it('Ширина больше 1200', async function() {

        await this.browser.setWindowSize(1200, 600);
        await this.browser.url('http://localhost:3000/hw/store',  {timeout: 300});
        const nav = await this.browser.$('nav', {
            allowViewportOverflow: false,
        });

        await nav.assertView('wide-nav');

    });

    it('Ширина больше 576', async function() {

        await this.browser.setWindowSize(576, 600);
        await this.browser.url('http://localhost:3000/hw/store',  {timeout: 300});
        const nav = await this.browser.$('nav', {
            allowViewportOverflow: false,
        });

        await nav.assertView('medium-nav');
    });

    it('Ширина меньше 576', async function() {

        await this.browser.setWindowSize(575, 600);
        await this.browser.url('http://localhost:3000/hw/store');
        const nav = await this.browser.$('nav');

        await nav.assertView('narrow-nav', {
            allowViewportOverflow: false,
            screenshotDelay: 1000,
        });
       const hamburger = await nav.$('.Application-Toggler');
        assert.isTrue(Boolean(hamburger), 'гамбургер не появился');
    });
});

describe('Меню-гамбургер', async function() {

    it ('При нажатии на иконку гамбургера должно открываться', async function () {
        await this.browser.setWindowSize(575, 1000);
        await this.browser.url('http://localhost:3000/hw/store',  {timeout: 900});
        
        await this.browser.assertView('hamburger-closed', 'body', {
            allowViewportOverflow: false,
            screenshotDelay: 1000,
        });

        await this.browser.$('button.navbar-toggler').click();
        await this.browser.pause(1000);

        await this.browser.assertView('hamburger-opened', 'body', {
            allowViewportOverflow: false,
            // screenshotDelay: 1000,
        });
        await this.browser.pause(1000);
        const menu = await this.browser.$('.Application-Menu');
        const attr = await menu.getAttribute("class");
        assert.equal(attr, 'Application-Menu navbar-collapse', 'меню не открылось');
    })

    it('При выборе пункта должно закрываться', async function() {
       
        await this.browser.setWindowSize(575, 600);
        await this.browser.url('http://localhost:3000/hw/store',  {timeout: 900});
        // TODO вставить зависимость от багайди


        await this.browser.$('button.navbar-toggler').click();
        await this.browser.pause(1000);
        await this.browser.$(".Application-Menu .navbar-nav:first-child").click();
        await this.browser.pause(1000);

        await this.browser.assertView('menu-closed', 'body', {
            allowViewportOverflow: false,
            screenshotDelay: 1000,
        });
        await this.browser.pause(1000);
        const menu = await this.browser.$('.Application-Menu');
        const attr = await menu.getAttribute("class");
        assert.equal(attr, 'Application-Menu collapse navbar-collapse', 'меню не свернулось');
    });
});
