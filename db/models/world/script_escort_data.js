/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('script_escort_data', {
    creature_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    quest: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    escort_faction: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'script_escort_data'
  });
};
