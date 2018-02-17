/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creature_ai_texts', {
    entry: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    content_default: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sound: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    language: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    emote: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'creature_ai_texts'
  });
};
