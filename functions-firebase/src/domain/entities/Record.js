class Record {
  constructor(data) {
    this.name = data.name;
    this.createdAt = data.createdAt || new Date();
  }
}

module.exports = Record;