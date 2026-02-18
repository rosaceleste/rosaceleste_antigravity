const fetch = require('node-fetch');

async function test() {
    try {
        const response = await fetch('http://localhost:3000/api/test-sheets', {
            method: 'POST',
        });
        const data = await response.json();
        console.log('Test Sheets Response:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error testing sheets:', error);
    }
}

test();
