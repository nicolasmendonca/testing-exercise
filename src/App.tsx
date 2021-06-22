import React from "react";

interface IAppProps {
  onSubmit: (e: React.FormEvent) => void;
}

const App: React.FC<IAppProps> = ({ onSubmit }) => {
  const [name, setName] = React.useState("John Doe");

  return (
    <form className="App__input-container" onSubmit={onSubmit}>
      <label htmlFor="input">First Name</label>
      <input
        id="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="firstName"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default App;
