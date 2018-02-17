/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locales_broadcast_text', {
    ID: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    MaleText_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaleText_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaleText_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaleText_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaleText_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaleText_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaleText_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaleText_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FemaleText_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VerifiedBuild: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'locales_broadcast_text'
  });
};
