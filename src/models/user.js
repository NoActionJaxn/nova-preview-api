const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  User.associate = models => {
    User.belongsTo(models.Location);
  };

  User.associate = models => {
    User.hasMany(models.Patient, { onDelete: 'CASCADE' });
  };

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { email: login }
    });
    return user;
  };

  return User;
};

export default user;
