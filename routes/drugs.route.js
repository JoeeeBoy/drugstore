const Router = require("express");
const { drugsController } = require("../controllers/drugs.controller");
const router = Router();


router.post("/", drugsController.postDrug); // добавить лекарство
router.delete("/:id", drugsController.deleteDrug) // удаление лекарство из базы
router.patch("/:id", drugsController.patchDrug) //изменение параметров лекарства


module.exports = router