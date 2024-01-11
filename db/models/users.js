// models/user.js

module.exports = async (sequelize, DataTypes) => {
  const User = await sequelize.define(
    "Users",
    {
      // Model attributes are defined here
      userID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      created_by: { type: DataTypes.INTEGER, allowNull: true },
      updated_at: { type: DataTypes.DATE, allowNull: true },
      updated_by: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      freezeTableName: true,
      timestamps: false, // disable Sequelize's default timestamps
    }
  );

  return User;
};
