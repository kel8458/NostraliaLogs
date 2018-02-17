/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geoip', {
    network_start_integer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    network_last_integer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    geoname_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registered_country_geoname_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    represented_country_geoname_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_anonymous_proxy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_satellite_provider: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: "DOUBLE",
      allowNull: true
    },
    longitude: {
      type: "DOUBLE",
      allowNull: true
    },
    accuracy_radius: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'geoip'
  });
};
