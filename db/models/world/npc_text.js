/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('npc_text', {
    ID: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    BroadcastTextID0: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability0: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    BroadcastTextID1: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    BroadcastTextID2: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    BroadcastTextID3: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    BroadcastTextID4: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    BroadcastTextID5: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    BroadcastTextID6: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    BroadcastTextID7: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Probability7: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'npc_text'
  });
};
