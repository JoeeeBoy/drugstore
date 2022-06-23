const { Router } = require("express")

const router = Router()

router.use("/users", require("./users.route"))
router.use("/admin/drugs", require("./drugs.route"))


module.exports = router