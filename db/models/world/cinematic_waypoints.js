/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cinematic_waypoints', {
    cinematic: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    timer: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    posx: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    posy: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    posz: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'cinematic_waypoints'
  });
};
