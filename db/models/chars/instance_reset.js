/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instance_reset', {
    mapid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    resettime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'instance_reset'
  });
};
