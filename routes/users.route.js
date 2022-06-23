const Router = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();

router.get("/drugs", usersController.getDrug); //просматривать все лекарства
router.get("/drug/:id", usersController.getIdDrug); //просматривать определенное лекарство
router.get("/drug/conclusion/category", usersController.getCategoryDrug); //просматривать все лекарства по определенной категории
router.patch("/:id/wallet", usersController.upWallet); // пополнять свой кошелек
router.delete("/:id/cardShop/drug/:drugId", usersController.deleteDrugFromCard); //удалять лекарство из корзины
router.patch("/:id/cardShop/drug", usersController.clearCard); //очищать корзину
router.patch("/:id/cardShop/buy", usersController.buyCard); //покупать товар из корзины (корзина должна очиститься)
router.patch("/:id/cardShop/drug/:idDrug", usersController.addDrugInCard); //добавлять определенное лекарство в корзину
router.post("/", usersController.postUser); // функция создание пользователя
router.patch("/:id", usersController.addRepice) // функция дачи рецепта пользевателю

module.exports = router;
