const { assert } = require('chai');
const axios = require('axios')

const BUG_ID = process.env.BUG_ID ? `?bug_id=${process.env.BUG_ID}` : "";
const respBUG = process.env.BUG_ID == 2 ? '?bug_id=2' : '';
const baseUrl = 'http://localhost:3000/hw/store';

describe('Сценарий покупки', async function() {

    it('проверяем процесс чекаута', async function() {
        await this.browser.url(`${baseUrl}/cart${BUG_ID}`,  {timeout: 300});
 
        const resp = await axios.post(`${baseUrl}/api/checkout${respBUG}`, { form: {
            name: 'M0rty',
            phone: '25872586234',
            address: 'Punxatawny St',
          }, cart: {
            1: {
                name: 'Fake#1',
                price: 12,
                count: 1,
            },
            2: {
                name: 'Fake#2',
                price: 56,
                count: 3,
            },
            3: {
                name: 'Fake#3',
                price: 86,
                count: 2,
            }
        } });
        assert.equal(resp.status, 200);
        assert.isBelow(resp.data.id, 50);
    });

});

