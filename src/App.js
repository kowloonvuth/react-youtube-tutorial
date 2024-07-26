function App() {
  return (

    <div className="App">
      <Job salary={900} position="Senior Developer" company="Google" experience={5}/>
      <Job salary={200} position="Junior Developer" company="Google" experience={0}/>
      <Job salary={300} position="UX/UI Developer" company="Google" experience={0}/>
    </div>
  );
}

const Job = (props) => {
  
  return (
  <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
    <h1>{props.experience >= 3 ? <p style={{color: "green"}}> You hired</p> : <p style={{color: "red"}}>You Failed</p>}</h1>
  </div> 
  );
}

export default App;
