/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saved_variables', {
    key: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    cleaning_flags: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    lastHonorMaintenanceDay: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    nextHonorMaintenanceDay: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    honorMaintenanceMarker: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'saved_variables'
  });
};
