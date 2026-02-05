import { useState, useEffect } from "react";
import { publicationsApi } from "./api";

export default function Publications() {
  const [publications, setPublications] = useState([]);
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");

  const loadPublications = async () => {
    const res = await publicationsApi.get("/publications");
    setPublications(res.data);
  };

  const createPublication = async () => {
    await publicationsApi.post("/publications", {
      title,
      authorId: Number(authorId)
    });
    setTitle("");
    setAuthorId("");
    loadPublications();
  };

  const changeStatus = async (id, status) => {
    await publicationsApi.patch(`/publications/${id}/status`, { status });
    loadPublications();
  };

  useEffect(() => {
    loadPublications();
  }, []);

  return (
    <div>
      <h2>Publicaciones</h2>

      <input placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)} />

      <input placeholder="Author ID"
        value={authorId}
        onChange={e => setAuthorId(e.target.value)} />

      <button onClick={createPublication}>Crear Publicación</button>

      <ul>
        {publications.map(p => (
          <li key={p.id}>
            {p.title} | Estado: {p.status}
            <button onClick={() => changeStatus(p.id, "PUBLISHED")}>
              Publicar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
