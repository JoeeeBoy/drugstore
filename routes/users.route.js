const Router = require('express');
const { usersController } = require('../controllers/users.controller');
const router = Router();

router.get('/drugs', usersController.getDrug); //просматривать все лекарства
router.get('/drug/:id', usersController.getIdDrug); //просматривать определенное лекарствоrouter.patch("/:id/wallet", usersController.upWallet); // пополнять свой кошелек
router.delete('/:id/cardShop/drug/:drugId', usersController.deleteDrugFromCard); //удалять лекарство из корзины
router.patch('/:id/cardShop/drug', usersController.clearCard); //очищать корзину

module.exports = router;
