const { assert } = require('chai');
const axios = require('axios')
const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const respBUG = process.env.BUG_ID == 3 ? '?bug_id=3' : '';
const baseUrl = 'http://localhost:3000/hw/store';

const url = `${baseUrl}/catalog/2${BUG_ID}`;

describe('Страница продукта', async function() {
    it('отображается корректно', async function() {

        await this.browser.url(`${baseUrl}/catalog/4${BUG_ID}`,  {timeout: 300});
        await this.browser.assertView('product', '.ProductDetails-AddToCart', {
                    allowViewportOverflow: false,

                });

    });
    it('сервер отдает продукт с правильным ID', async function() {

        await this.browser.url(`${baseUrl}/catalog/4${BUG_ID}`,  {timeout: 300});
        const resp = await axios.get(`${baseUrl}/api/products/4${respBUG}`, { id: 4 });
        assert.equal(resp.status, 200);
        assert.equal(resp.data.id, 4);

    });
   
});
