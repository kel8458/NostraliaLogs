/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locales_page_text', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Text_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Text_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Text_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Text_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Text_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Text_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Text_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Text_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'locales_page_text'
  });
};
