const message = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    message_audio_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    message_transcript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Message.associate = models => {
    Message.belongsTo(models.Patient, {
      foreignKey: 'patient_telephone',
      targetKey: 'telephone'
    });
    Message.belongsTo(models.Location, {
      foreignKey: 'location_telephone',
      targetKey: 'telephone'
    });
  };

  return Message;
};

export default message;
