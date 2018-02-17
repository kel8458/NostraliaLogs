/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_instance', {
    guid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    instance: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    permanent: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_instance'
  });
};
