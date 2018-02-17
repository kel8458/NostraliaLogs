/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antispam_unicode', {
    from: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    to: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'antispam_unicode'
  });
};
