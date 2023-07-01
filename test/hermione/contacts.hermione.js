const { assert } = require('chai');

const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const url = `http://localhost:3000/hw/store/contacts${BUG_ID}`;

describe('Страница контактов', async function() {
    it('Страница контактов совпадает сама с собой', async function() {

        // await this.browser.setWindowSize(1200, 11000);
        await this.browser.url(url,  {timeout: 300});
        await this.browser.assertView('contacts', 'body', {
            allowViewportOverflow: false,
        });
    });

    
});

