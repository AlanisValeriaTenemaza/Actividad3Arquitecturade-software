import { useState, useEffect } from "react";
import { authorsApi } from "./api";

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadAuthors = async () => {
    const res = await authorsApi.get("/authors");
    setAuthors(res.data);
  };

  const createAuthor = async () => {
    await authorsApi.post("/authors", { name, email });
    setName("");
    setEmail("");
    loadAuthors();
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  return (
    <div>
      <h2>Autores</h2>

      <input placeholder="Nombre" value={name}
        onChange={e => setName(e.target.value)} />

      <input placeholder="Email" value={email}
        onChange={e => setEmail(e.target.value)} />

      <button onClick={createAuthor}>Crear Autor</button>

      <ul>
        {authors.map(a => (
          <li key={a.id}>{a.name} - {a.email}</li>
        ))}
      </ul>
    </div>
  );
}
