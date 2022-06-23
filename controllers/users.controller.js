const Drug = require("../models/Drug.model");
const User = require("../models/User.model");

module.exports.usersController = {
  getDrug: async (req, res) => {
    try {
      res.json(await Drug.find({}));
    } catch (e) {
      res.json(e);
    }
  },
  getIdDrug: async (req, res) => {
    try {
      res.json(await Drug.findById(req.params.id));
    } catch (e) {
      res.json(e);
    }
  },
  getCategoryDrug: async (req, res) => {
    try {
      res.json(await Drug.find({ category: req.body.category }));
    } catch (e) {
      res.json(e);
    }
  },
  upWallet: async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
      await User.findByIdAndUpdate(req.params.id, {
        wallet: user.wallet + req.body.wallet,
      });
      res.json(`кошелек пополнен на сумму ${req.body.wallet}`);
    } catch (e) {
      res.json(e);
    }
  },
  addDrugInCard: async (req, res) => {
    const drug = await Drug.findById(req.params.idDrug);
    const user = await User.findById(req.params.id);
    try {
      if (drug.recipe === false || user.recipe.includes(req.params.idDrug)) {
        await User.findByIdAndUpdate(req.params.id, {
          $push: { shopCard: req.params.idDrug },
          sum: user.sum + drug.price,
        });
        res.json("Лекарстов добавлено в корзину");
      } else {
        res.json("У вас нет рецепта");
      }
    } catch (e) {
      res.json(e);
    }
  },

  deleteDrugFromCard: async (req, res) => {
    const drug = await Drug.findById(req.params.idDrug);
    const user = await User.findById(req.params.id);
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: { shopCard: req.body.drug },
        sum: user.sum - drug.price,
      });
      res.json("Лекарство из корзины удалено");
    } catch (e) {
      res.json(e);
    }
  },

  clearCard: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        shopCard: [],
        sum: 0,
      });
      res.json("Корзина удалена");
    } catch (e) {
      res.json(e);
    }
  },

  buyCard: async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
      if (user.wallet >= user.sum) {
        await User.findByIdAndUpdate(req.params.id, {
          shopCard: [],
          wallet: user.wallet - user.sum,
          sum: 0,
        });
        res.json("Лекарство из корзины куплены");
      } else {
        res.json("на счету недостаточно средств");
      }
    } catch (e) {
      res.json(e);
    }
  },

  postUser: async (req, res) => {
    const { name, wallet, recipe, shopCard, sum } = req.body;
    try {
      await User.create({
        name,
        wallet,
        recipe,
        shopCard,
        sum,
      });
      res.json("Пользователь создан");
    } catch (e) {
      res.json(e);
    }
  },

  addRepice: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: { recipe: req.body.idDrug },
      });
      res.json("Пользователь получил рецепт");
    } catch (e) {
      res.json(e);
    }
  },
};
