import Love from "./Chaysuraj";
function App() {
   const username = "Suraj Kumar Verma"
  return (
    //by the rule of jsx we can only return one element so we have to wrap up code in div 
    //single div actually the ther comes the concept of fragment that we can written 
    //empty tag -> fragment <></> 
    //{evaluated JS expression -> final outcome}
    <>
      <Love />
      <h1>hello {username}</h1>
      <p>test pera </p>
      <pre>
        <h2>Notes</h2>
        <p></p>
      </pre>
      </>
  )
}

export default App;
