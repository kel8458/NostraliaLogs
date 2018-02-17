/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bugreports', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    reportTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    playerGuid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    playerMap: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    playerInstanceId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    playerX: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    playerY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    playerZ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    clientIp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    reportType: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    reportText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serverInformation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bugStatus: {
      type: DataTypes.ENUM('New','NeedTest','Fixed','Invalid','Duplicate','Confirmed'),
      allowNull: false,
      defaultValue: 'New'
    }
  }, {
    tableName: 'bugreports'
  });
};
