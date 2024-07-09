const assert = require('assert');
const { describe, beforeEach, it } = require('node:test')
const RecordService = require('../../src/application/services/RecordService');
const Record = require('../../src/domain/entities/Record');


class MockFirestoreRecordRepository {
  async create(data) {
    return { id: 'mockedId', ...data };
  }
}

describe('RecordService', () => {
  let recordService;

  beforeEach(() => {
    const mockRepository = new MockFirestoreRecordRepository();
    recordService = new RecordService(mockRepository);
  });

  it('should create a new record', async () => {
    const recordData = new Record({ name: 'Test Record' });
    const newRecord = await recordService.createRecord(recordData);
    assert.strictEqual(newRecord.name, 'Test Record');
    assert.strictEqual(newRecord.id, 'mockedId');
  });

  it('should throw an error with invalid record data', async () => {
    const invalidData = { name: 'Invalid Record Data' };
    try {
      await recordService.createRecord(invalidData);
      assert.fail('Expected an error to be thrown');
    } catch (error) {
      assert(error.message.includes('Dados inválidos para criação de registro'));
    }
  });
});