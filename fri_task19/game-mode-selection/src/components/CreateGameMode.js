
import React, { useState } from "react";
import "./CreateGameMode.css";

const CreateGameMode = ({ onCreate }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    difficulty: "",
    duration: "",
    players: "",
    rules: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rulesArray = form.rules.split("\n").filter((rule) => rule.trim() !== "");
    onCreate({ ...form, rules: rulesArray });
  };

  return (
    <>
    <h1>Game Mode Selection</h1>
    <form onSubmit={handleSubmit} className="create-game-mode">
      <input
        type="text"
        name="name"
        placeholder="Game Mode Name"
        value={form.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <select name="difficulty" value={form.difficulty} onChange={handleChange}>
        <option value="">Select Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <input
        type="number"
        name="duration"
        placeholder="Duration (minutes)"
        value={form.duration}
        onChange={handleChange}
      />
      <input
        type="number"
        name="players"
        placeholder="Number of Players"
        value={form.players}
        onChange={handleChange}
      />
      <textarea
        name="rules"
        placeholder="Rules (one per line)"
        value={form.rules}
        onChange={handleChange}
      />
      <button type="submit">Create Game Mode</button>
    </form>
    </>
  );
};

export default CreateGameMode;