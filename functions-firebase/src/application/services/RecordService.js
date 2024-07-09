const Record = require('../../domain/entities/Record')

class RecordService {
  constructor(firebaseRepository) {
    this.firebaseRepository = firebaseRepository;
  }

  async createRecord(recordData) {
    try {
      if (!(recordData instanceof Record)) {
        throw new Error('Dados inválidos para criação de registro');
      }

      const data = {
        name: recordData.name,
        createdAt: recordData.createdAt,
      };
      const addedRecord = await this.firebaseRepository.create(data);
      return addedRecord;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = RecordService

