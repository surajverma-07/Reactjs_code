import Love from "./Chaysuraj";
function App() {
  return (
    //by the rule of jsx we can only return one element so we have to wrap up code in div 
    //single div actually the ther comes the concept of fragment that we can written 
    //empty tag -> fragment <></> 
    <>
      <Love />
      <h1>hello </h1>
      <p>test pera </p>
      </>
  )
}

export default App;
