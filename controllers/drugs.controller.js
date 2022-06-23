const Drug = require("../models/Drug.model");

module.exports.drugsController = {
  postDrug: async (req, res) => {
    const { name, price, recipe, category } = req.body;
    try {
      await Drug.create({
        name,
        price,
        recipe,
        category,
      });
      res.json("Лекарство добавлено в аптеку");
    } catch (e) {
      res.json(e);
    }
  },
  deleteDrug: async (req, res) => {
    try {
      await Drug.findByIdAndDelete(req.params.id);
    } catch (e) {
      res.json(e);
    }
  },
  patchDrug: async (req, res) => {
    const { name, price, recipe, category } = req.body;
    try {
      await Drug.findByIdAndUpdate(req.params.id, {
        name,
        price,
        recipe,
        category,
      });
      res.json(`пользователь с ид ${req.params.id} изменен`);
    } catch (e) {
      res.json(e);
    }
  },
};
