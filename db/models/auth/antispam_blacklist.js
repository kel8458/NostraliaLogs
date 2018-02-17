/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antispam_blacklist', {
    word: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'antispam_blacklist'
  });
};
