/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guild', {
    guildid: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    leaderguid: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    EmblemStyle: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    EmblemColor: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    BorderStyle: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    BorderColor: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    BackgroundColor: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    motd: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    createdate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'guild'
  });
};
