/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antispam_scores', {
    word: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    score: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'antispam_scores'
  });
};
