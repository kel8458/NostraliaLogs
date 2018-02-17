/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bugreport', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'bugreport'
  });
};
