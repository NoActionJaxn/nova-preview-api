import 'dotenv/config';
import bcrypt from 'bcrypt';

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    type: {
      type: DataTypes.STRING,
      trim: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      trim: true
    },
    last_name: {
      type: DataTypes.STRING,
      trim: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      trim: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      trim: true
    }
  });

  // eslint-disable-next-line no-unused-vars
  User.beforeCreate((user, options) => {
    return bcrypt
      .hash(user.password, parseInt(process.env.SALTING_ROUNDS))
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        throw new Error(err.message);
      });
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
