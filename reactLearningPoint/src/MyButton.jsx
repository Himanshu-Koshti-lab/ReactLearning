import "./App.css";

export default function MyButton({count, functionPass}) {
  return (
    <>
      <button onClick={functionPass}>Dare Click me... {count}</button>
    </>
  );
}
