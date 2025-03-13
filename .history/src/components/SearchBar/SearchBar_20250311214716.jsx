import { useState } from "react";
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
      console.log("boroda");
      toast.error("This didn't work.");
      return;
    }
    onSubmit(username);
    resetForm();
  };

  const resetForm = () => {
    setUsername("");
  };

  console.log("render", username);

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={handleInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={username}
        />
        <button className={css.button} type="submit">
          Search
        </button>
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
      </form>
    </header>
  );
}
