const location = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Location.associate = models => {
    Location.hasMany(models.User, { onDelete: 'CASCADE' });
    Location.hasMany(models.Patient, { onDelete: 'CASCADE' });
    Location.hasMany(models.Message, { onDelete: 'CASCADE' });
  };
  return Location;
};

export default location;
