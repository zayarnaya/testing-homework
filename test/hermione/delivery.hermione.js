const { assert } = require('chai');

const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const url = `http://localhost:3000/hw/store/delivery${BUG_ID}`;

describe('Страница доставки', async function() {
    it('Страница доставки совпадает сама с собой', async function() {

        await this.browser.setWindowSize(1200, 11000);
        await this.browser.url(url,  {timeout: 300});
        await this.browser.assertView('delivery', 'body', {
            allowViewportOverflow: false,
        });
    });

    
});

