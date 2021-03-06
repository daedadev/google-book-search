const router = require("express").Router();
const Book = require("../models/book");

// General CRUD routes

// Get all saved books defined on /api/book/(user ID)
router.get("/:id", async (req, res) => {
  try {
    getAll = await Book.findAll({
      where: {
        user_id: req.params.id,
      },
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// Get all saved books defined on /api/book/
router.get("/api/book", async (req, res) => {
  try {
    getAll = await Book.findAll({});

    const books = getAll.map((getInfo) => getInfo.get({ plain: true }));

    res.send(books);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// Add new book defined on /api/book/
router.post("/api/book", async (req, res) => {
  try {
    console.log(req.body);

    await Book.create({
      title: req.body.title,
      authors: req.body.authors.toString(),
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
    });

    res.send(`${req.params.title} has been added to the books`);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// Delete saved book route defined on /api/book/delete
router.delete("/api/book/delete/:id", async (req, res) => {
  try {
    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(req.params.id);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
