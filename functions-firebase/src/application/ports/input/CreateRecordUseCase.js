const RecordService = require('../../services/RecordService');
const FirestoreRecordRepository = require('../../../infrastructure/firebase/FirestoreRecordRepository');
const Record = require('../../../domain/entities/Record')

class CreateRecordUseCase {
  constructor() {
    this.recordService = new RecordService(FirestoreRecordRepository);
  }

  async execute(name) {
    try {
      const data = new Record({
        name: name,
      });
      const newRecord = await this.recordService.createRecord(data);
      return newRecord;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CreateRecordUseCase;
