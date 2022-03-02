export default function Buttons({
  handleResetClick,
  handleDecrementClick,
  handleIncrementClick,
}) {
  return (
    <>
      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
    </>
  );
}
