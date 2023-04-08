const db = require("../database/models");
const Op = db.Sequelize.Op;
module.exports = {
      list: (req, res) => {
            db.Movies.findAll()
                  .then((movies) => {
                        res.render("moviesList", { movies });
                  })
                  .catch((error) => {
                        res.send(error);
                  });
      },
      new: (req, res) => {
            db.Movies.findAll({
                  order: [["release_date", "DESC"]],
            })
                  .then((movies) => {
                        res.render("newestMovies", { movies });
                  })
                  .catch((error) => {
                        res.send(error);
                  });
      },
      recommended: (req, res) => {
            db.Movies.findAll({
                  where: {
                        rating: { [Op.gte]: 8 },
                  },
                  order: [["rating", "DESC"]],
                  limit: 5,
            })
                  .then((movies) => {
                        res.render("recommendedMovies", { movies });
                  })
                  .catch((error) => {
                        res.send(error);
                  });
      },
      detail: (req, res) => {
            db.Movies.findByPk(req.params.id)
                  .then((movie) => {
                        res.render("moviesDetail", { movie });
                  })
                  .catch((error) => {
                        res.send(error);
                  });
      },
};
