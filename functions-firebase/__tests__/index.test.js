const { describe, it } = require('node:test');
const { deepStrictEqual } = require('node:assert');
const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:5001/wide-dryad-300221/us-central1/api';

describe('API Workflow', () => {
  it('should create a new record', async () => {
    const data = {
      name: 'test',
    }
    const request = await axios.post(`${BASE_URL}/records`, data)

    deepStrictEqual(request.status, 201)
  })
})

it('should handle server error when creating a record', async () => {
  const data = {
    name: '',
  };

  try {
    const response = await axios.post(`${BASE_URL}/records`, data);
    deepStrictEqual(response.status, 201); 
  } catch (error) {
    deepStrictEqual(error.response.status >= 400 && error.response.status < 500, true);
  }
});