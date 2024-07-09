const firestore = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValue(),
  get: jest.fn().mockResolvedValue({
    exists: true,
    data: () => ({ increment_id: '12345', name: 'Test Record' })
  }),
};

const admin = {
  initializeApp: jest.fn(),
  firestore: jest.fn(() => firestore),
};

module.exports = admin;
