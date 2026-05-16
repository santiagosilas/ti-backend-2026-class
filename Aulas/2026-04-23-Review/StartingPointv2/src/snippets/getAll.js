app.get("/api/fake_tasks", (req, res) => {
  try {
    if (fake_tasks.length === 0) {
      return res.status(404).json({
        message: "Nenhum registro disponível!",
      });
    }

    if (req.query.completed) {
      console.log(req.query.completed);
      const data = fake_tasks.filter(
        (task) => task.isCompleted == !!req.query.completed,
      );
      res.status(200).json(data);
    } else {
      res.status(200).json(fake_tasks);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});
