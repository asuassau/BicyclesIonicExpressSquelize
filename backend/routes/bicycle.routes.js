module.exports = app => {
    const bicycles = require("../controllers/bicycle.controller");

    const router = require("express").Router();

    router.post("/", bicycles.create);
    router.get("/", bicycles.findAll);
    router.put("/:id", bicycles.update);
    router.delete("/:id", bicycles.delete);

    app.use("/api/bicycles", router);
}