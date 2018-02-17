/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instance_buff_removal', {
    mapId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    auraId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    flags: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'instance_buff_removal'
  });
};
