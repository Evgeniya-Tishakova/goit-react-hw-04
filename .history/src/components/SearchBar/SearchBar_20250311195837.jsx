import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [username, setUsername] = useState("");

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
      <form>
        <input
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
