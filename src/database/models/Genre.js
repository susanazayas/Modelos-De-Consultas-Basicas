module.exports = (sequelize, dataTypes) => {
      let alias = "Genres";
      let cols = {
            id: {
                  type: dataTypes.INTEGER(10).UNSIGNED,
                  primaryKey: true,
                  autoIncrement: true,
                  allowNull: false,
            },
            name: {
                  type: dataTypes.STRING(100),
                  allowNull: false,
            },
            ranking: {
                  type: dataTypes.INTEGER(10).UNSIGNED,
                  allowNull: false,
            },
            active: {
                  type: dataTypes.BOOLEAN,
                  allowNull: false,
            },
      };
      let config = {
            tableName: "genres",
            //timestamps: false,
            createdAt: "created_at",
            updatedAt: "updated_at",
      };

      const Genre = sequelize.define(alias, cols, config);

      return Genre;
};
