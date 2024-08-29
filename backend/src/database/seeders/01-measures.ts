import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('measures', [
      {
        measure_uuid: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
        measure_datetime: '2024-08-28 14:35:00',
        measure_type: 'WATER',
        has_confirmed: true,
        image_url: 'https://example.com/image1.jpg',
        customer_code: 12345,
      },
      {
        measure_uuid: '8a6e0804-2bd0-4672-b79d-d97027f9071b',
        measure_datetime: '2024-08-28 14:35:00',
        measure_type: 'GAS',
        has_confirmed: false,
        image_url: 'https://example.com/image2.jpg',
        customer_code: 23456,
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('measures', {});
  }
};