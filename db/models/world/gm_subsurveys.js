/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gm_subsurveys', {
    surveyId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subsurveyId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    rank: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'gm_subsurveys'
  });
};
