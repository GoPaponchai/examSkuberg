// models/crypto.js

module.exports = async (sequelize, DataTypes) => {
  const Crypto = await sequelize.define(
    "Crypto",
    {
      cryptoID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      currencyName: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL(20, 8), allowNull: false }, // ตั้งค่าตำแหน่งทศนิยมตามความเหมาะสม
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
      timestamps: false,
    }
  );

  return Crypto;
};
