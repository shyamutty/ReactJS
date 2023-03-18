export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

//The information you pass down like this is called props. 
//Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.
