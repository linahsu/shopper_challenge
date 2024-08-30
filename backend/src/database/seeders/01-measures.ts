import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('measures', [
      {
        measure_uuid: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
        measure_datetime: new Date('2023-08-30'),
        measure_type: 'WATER',
        measure_value: 100,
        has_confirmed: true,
        image_url: 'https://example.com/image1.jpg',
        customer_code: '12345',
      },
      {
        measure_uuid: '8a6e0804-2bd0-4672-b79d-d97027f9071b',
        measure_datetime: new Date('2023-10-20'),
        measure_type: 'GAS',
        measure_value: 1023,
        has_confirmed: false,
        image_url: 'https://example.com/image2.jpg',
        customer_code: '23456',
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('measures', {});
  }
};