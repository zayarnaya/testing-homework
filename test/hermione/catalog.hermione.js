const { assert } = require('chai');
const axios = require('axios')
const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const respBUG = process.env.BUG_ID == 1 ? '?bug_id=1' : '';
const baseUrl = 'http://localhost:3000/hw/store';

const url = `${baseUrl}/catalog${BUG_ID}`;

describe('Каталог', async function() {

    it('должен получать с сервера корректные данные', async function() { // или нет? куда он имя-то отдает НЕ ПАДАЕТ

        await this.browser.url(url,  {timeout: 300});
        const resp = await axios.get(`${baseUrl}/api/products${respBUG}`, {});
        assert.equal(resp.status, 200);
        assert.isString(resp.data[0].name);
    });

    
});

