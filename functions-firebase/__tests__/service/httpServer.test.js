const { describe, it } = require('node:test');
const assert = require('assert');
const http = require('http');

function makeRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';

      res.setEncoding('utf8');

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const responseBody = body ? JSON.parse(body) : {};
          resolve({ status: res.statusCode, body: responseBody });
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (postData) {
      req.write(JSON.stringify(postData));
    }

    req.end();
  });
}

describe('HTTP API Tests', () => {
  it('should create a new record via POST /records', async () => {
    const postData = { name: 'Test Record' };
    const options = {
      hostname: '127.0.0.1',
      port: 5001,
      path: '/wide-dryad-300221/us-central1/api/records',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': JSON.stringify(postData).length,
      },
    };

    const response = await makeRequest(options, postData);

    assert.strictEqual(response.status, 201);
    assert.strictEqual(response.body.name, 'Test Record');
  });

  it('should return 400 if "name" is missing', async () => {
    const postData = {};
    const options = {
      hostname: '127.0.0.1',
      port: 5001,
      path: '/wide-dryad-300221/us-central1/api/records',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': JSON.stringify(postData).length,
      },
    };

    const response = await makeRequest(options, postData);

    assert.strictEqual(response.status, 400);
    assert.strictEqual(response.body.error, 'O campo "name" é obrigatório');
  });
});
