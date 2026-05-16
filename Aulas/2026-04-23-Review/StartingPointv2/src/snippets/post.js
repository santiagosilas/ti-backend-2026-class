app.post("/api/fake_tasks", (req, res) => {
  try {
    const {title, priority, isCompleted} = req.body;
    const newFakeTask = {
      id: randomUUID(), // Gera o ID aleatório
      title,
      priority,
      isCompleted: isCompleted,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    fake_tasks.push(newFakeTask);

    return res.status(201).json({
      message: "Item cadastrado!",
      fake_task: newFakeTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});
