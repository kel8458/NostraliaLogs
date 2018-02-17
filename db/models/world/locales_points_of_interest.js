/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locales_points_of_interest', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    icon_name_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon_name_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon_name_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon_name_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon_name_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon_name_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon_name_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon_name_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'locales_points_of_interest'
  });
};
