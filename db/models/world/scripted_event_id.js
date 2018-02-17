/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scripted_event_id', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    ScriptName: {
      type: DataTypes.CHAR(64),
      allowNull: false
    }
  }, {
    tableName: 'scripted_event_id'
  });
};
