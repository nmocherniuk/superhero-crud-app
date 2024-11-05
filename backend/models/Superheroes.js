module.exports = (sequelize, DataTypes) => {
  const Superheroes = sequelize.define("Superheroes", {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false, // Виправлення: allowNull замість alowNull
    },
    real_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    superpowers: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    catch_phrase: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  return Superheroes;
};
