/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antispam_replacement', {
    from: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    to: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'antispam_replacement'
  });
};
