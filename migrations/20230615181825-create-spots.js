'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Spots', {
      listingId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      listingTitle: {
        type: Sequelize.STRING
      },
      streetAddress: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      borough: {
        type: Sequelize.STRING
      },
      latlog: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
      },
      lat: {
        type: Sequelize.FLOAT
      },
      log: {
        type: Sequelize.FLOAT
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      socialMedia: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      dressCode: {
        type: Sequelize.STRING
      },
      access: {
        type: Sequelize.STRING
      },
      yearOpened: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      hours: {
        type: Sequelize.JSONB(Sequelize.STRING),
      },
      outdoor: {
        type: Sequelize.BOOLEAN
      },
      indoor: {
        type: Sequelize.BOOLEAN
      },
      food: {
        type: Sequelize.BOOLEAN
      },
      drinks: {
        type: Sequelize.BOOLEAN
      },
      music: {
        type: Sequelize.BOOLEAN
      },
      views: {
        type: Sequelize.BOOLEAN
      },
      seating: {
        type: Sequelize.BOOLEAN
      },
      rooftop: {
        type: Sequelize.BOOLEAN
      },
      pool: {
        type: Sequelize.BOOLEAN
      },
      allowEvents: {
        type: Sequelize.BOOLEAN
      },
      eventContactEmail: {
        type: Sequelize.STRING
      },
      eventContactPhone: {
        type: Sequelize.STRING
      },
      eventPriceStart: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      visibleSpots: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      popularHours: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      popularDays: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      popularMonths: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      amenities: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      spotDescription: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      mainImage: {
        type: Sequelize.STRING
      },
      hasVideo: {
        type: Sequelize.BOOLEAN
      },
      mainVideo: {
        type: Sequelize.STRING
      },
      imagesGallery: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      notablePoints: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      reviews: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      rating: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      ratingCount: {
        type: Sequelize.INTEGER
      },
      ratingAvg: {
        type: Sequelize.INTEGER
      },
      ratingTotal: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
      },
      featured: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Spots');
  }
};