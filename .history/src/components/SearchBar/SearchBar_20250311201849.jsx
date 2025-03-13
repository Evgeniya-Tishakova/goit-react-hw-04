import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleInput = (event) => {
    setUsername(event.target.value);
    console.log("handleInput", username);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "") {
      return (
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            removeDelay: 1000,
          }}
        />
      );
    }
    onSubmit(username);
    setUsername("");
  };

  console.log("render", query);

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          onchange={handleInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          required
          value={username}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
