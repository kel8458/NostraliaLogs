/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfer_skills', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    class: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    skill: {
      type: DataTypes.INTEGER(9).UNSIGNED,
      allowNull: true
    },
    value: {
      type: DataTypes.INTEGER(9).UNSIGNED,
      allowNull: true
    },
    max: {
      type: DataTypes.INTEGER(9).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'transfer_skills'
  });
};
