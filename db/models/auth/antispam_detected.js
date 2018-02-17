/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antispam_detected', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    detectScore: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    detectTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    unmuteTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'antispam_detected'
  });
};
