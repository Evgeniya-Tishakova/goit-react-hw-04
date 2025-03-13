import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleInput = (event) => {
    setUsername(event.target.value);
}


  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "") {
      return alert();
    }
    onSubmit(username);
    setUsername("");
  };

  console.log("render", query);

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onchange={}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          required
          value={username}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
