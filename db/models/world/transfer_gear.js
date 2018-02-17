/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfer_gear', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    class: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    item_template_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true
    },
    slot: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    random_property: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    enchant_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enchant_2: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'transfer_gear'
  });
};
