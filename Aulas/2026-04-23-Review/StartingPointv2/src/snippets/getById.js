app.get("/api/fake_tasks/:id", (req, res) => {
  try {
    const id = req.params.id;

    const item = fake_tasks.find((item) => item.id === id);

    if (!item) {
      return res.status(404).json({
        message: "Item não encontrado!",
      });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});
