app.put("/api/fake_tasks/:id", (req, res) => {
  try {
    const id = req.params.id;
    const {title, priority, isCompleted} = req.body;

    const index = fake_tasks.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: "Item não encontrado!",
      });
    }

    fake_tasks[index].title = title;
    fake_tasks[index].priority = priority;
    fake_tasks[index].isCompleted = isCompleted;
    fake_tasks[index].updatedAt = new Date();

    return res.status(200).json({
      message: "Item atualizado!",
      livro: fake_tasks[index],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});
