import useCounter from "./useCounter";
import Links from "./link";
export default function App() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  const handleChange = ({ currentTarget: { value } }) => {
    setValue(value);
  };

  return (
    <>
     <Links/>
      <div className="base-app">
      <span className="base-app__tag">Counter</span> {count}
       <div className="base-app__actions">
        <button className="theme-green" onClick={increment}>
          Increment
        </button>
        {count > 0 ? (
          <button className="theme-red" onClick={decrement}>
            Decrement
          </button>
        ) : null}
        <button onClick={reset}>Reset</button>
      </div>
      <br />
      <input value={count} onChange={handleChange} type="number" />
      </div>
    </>
  );
}
