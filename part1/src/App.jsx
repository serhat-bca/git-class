const Hello = (props)=>(
  <div>
    <p>Hello {props.name}. You are number {props.number}</p>
  </div>
)


const App = () => {
  console.log("Hello World, from console")
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = 'Tim';
  console.log(now, a+b)
  const friends = ['Peter', 'July'];
  return (
    <>
    <Hello name="George" number = {27}/>
    <Hello name={name} number = {a+b} />
      <p>Hello World, it is {now.toString()} </p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <p>{friends}</p>
    </>
  )}

export default App
