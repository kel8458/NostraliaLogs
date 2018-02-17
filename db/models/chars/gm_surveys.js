/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gm_surveys', {
    surveyId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mainSurvey: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    overallComment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'gm_surveys'
  });
};
