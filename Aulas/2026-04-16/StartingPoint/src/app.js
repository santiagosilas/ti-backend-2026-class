import express from "express";
import {randomUUID} from "node:crypto";
import {fake_tasks} from "./fake_data.js";

const app = express();

app.use(express.json());

app.get("/alive", (req, res) => {
  res.json({message: "Api em funcionamento!"});
});

app.get("/team", (req, res) => {
  res.send([
    {nome: "Fulano", curso: "TI"},
    {nome: "Fulano", curso: "TI"},
    {nome: "Ciclano", curso: "TI"},
  ]);
});

app.get("/api/fake_tasks", (req, res) => {
  try {
    if (!fake_tasks || fake_tasks.length === 0) {
      return res.status(404).json({
        message: "Nenhum registro disponível!",
      });
    }

    res.status(200).json(fake_tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});

app.post("/api/fake_tasks", (req, res) => {
  try {
    const {title, priority, isCompleted} = req.body;
    const newFakeTask = {
      id: randomUUID(), // Gera o ID aleatório
      title,
      priority,
      isCompleted: isCompleted,
      createdAt: new Date(),
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

app.patch("/api/fake_tasks/:id", (req, res) => {
  try {
    const id = req.params.id;
    const {title, priority, isCompleted} = req.body;

    const index = fake_tasks.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: "Item não encontrado!",
      });
    }

    if (title !== undefined) fake_tasks[index].title = title;
    if (priority !== undefined) fake_tasks[index].priority = priority;
    if (isCompleted !== undefined) fake_tasks[index].isCompleted = isCompleted;

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

app.delete("/api/fake_tasks/:id", (req, res) => {
  try {
    const id = req.params.id;

    const index = fake_tasks.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: "Item não encontrado!",
      });
    }

    const [deletedItem] = fake_tasks.splice(index, 1);

    return res.status(200).json({
      message: "Item deletado!",
      item: deletedItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});

export default app;
