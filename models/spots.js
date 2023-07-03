'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spots.init({
    listingId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    listingTitle: {
      type: DataTypes.STRING,
    },
    streetAddress: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    borough: {
      type: DataTypes.STRING,
    },
    latlog : {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
    },
    lat: {
      type: DataTypes.FLOAT,
    },
    log: {
      type: DataTypes.FLOAT,
    },
    phone : {
      type: DataTypes.STRING,
    },
    email : {
      type: DataTypes.STRING,
    },
    website : {
      type: DataTypes.STRING,
    },
    socialMedia : {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    dressCode : {
      type: DataTypes.STRING,
    },
    access: {
      type: DataTypes.STRING,
    },
    //type: {
    //  type: DataTypes.STRING,
    //},
    yearOpened: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    //aproximateSize: {
    //  type: DataTypes.STRING,
    //},
    capacity: {
      type: DataTypes.STRING,
    },
    //elevation: {
    //  type: DataTypes.STRING,
    //},
    //designer: {
    //  type: DataTypes.STRING,
    //},
    //manager: {
    //  type: DataTypes.STRING,
    //},
    hasVideo: {
      type: DataTypes.BOOLEAN,
    },
    mainVideo: {
      type: DataTypes.STRING,
    },
    hours : {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    outdoor: {
      type: DataTypes.BOOLEAN,
    },
    indoor: {
      type: DataTypes.BOOLEAN,
    },
    food: {
      type: DataTypes.BOOLEAN,
    },
    drinks: {
      type: DataTypes.BOOLEAN,
    },
    music: {
      type: DataTypes.BOOLEAN,
    },
    views: {
      type: DataTypes.BOOLEAN,
    },
    seating: {
      type: DataTypes.BOOLEAN,
    },
    rooftop: {
      type: DataTypes.BOOLEAN,
    },
    pool: {
      type: DataTypes.BOOLEAN,
    },
    allowEvents: {
      type: DataTypes.BOOLEAN,
    },
    eventContactEmail: {
      type: DataTypes.STRING,
    },
    eventContactPhone: {
      type: DataTypes.STRING,
    },
    eventPriceStart: {
      type: DataTypes.STRING,
    },
    tags : {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    visibleSpots: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    popularHours: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    popularDays: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    popularMonths: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    amenities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    spotDescription: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    mainImage: {
      type: DataTypes.STRING,
    },
    imagesGallery: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    notablePoints: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    reviews: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    ratingCount: {
      type: DataTypes.INTEGER,
    },
    //ratingAverage: {
    //  type: DataTypes.INTEGER,
    //},
    ratingTotal: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
    //approved: {
    //  type: DataTypes.BOOLEAN,
    //  defaultValue: false,
    //},
    //approvedBy: {
    //  type: DataTypes.STRING,
    //},
    //approvedDate: {
    //  type: DataTypes.DATE,
    //},
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    
    updatedAt: {
      type: DataTypes.DATE,
    },
    
  }, {
    sequelize,
    modelName: 'Spots',
  });
  return Spots;
};