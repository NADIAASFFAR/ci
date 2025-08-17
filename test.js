const app = require('./server.js');
const http = require('http');

function test() {
    const server = app.listen(3001);

    http.get('http://localhost:3001/', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            if (data.includes('Hello CD World!')) {
                console.log('✅ Test passed');
                server.close();
                process.exit(0);
            } else {
                console.log('❌ Test failed');
                server.close();
                process.exit(1);
            }
        });
    }).on('error', (err) => {
        console.log('❌ Test failed:', err.message);
        server.close();
        process.exit(1);
    });
}

test();