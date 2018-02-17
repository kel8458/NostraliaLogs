/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locales_gossip_menu_option', {
    menu_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    option_text_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option_text_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option_text_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option_text_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option_text_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option_text_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option_text_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option_text_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    box_text_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'locales_gossip_menu_option'
  });
};
