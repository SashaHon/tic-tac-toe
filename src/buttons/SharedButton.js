function SharedButton({ count, onClick }) {
  return (
    <button onClick={onClick}>Clicked {count} times a Shared Button</button>
  );
}

export default SharedButton;
