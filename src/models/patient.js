const patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Patient.associate = models => {
    Patient.belongsTo(models.User);
  };

  Patient.associate = models => {
    Patient.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  return Patient;
};

export default patient;
