export default function Home() {
  return (
    <div className="App">
      <Animals>
        <Family title="Canine">
          <Animal name="Dog"/>
          <Animal name="Wolf"/>
        </Family>
        <Family title="Feline"/>
        <Animal name="Cat"/>
        <Animal name="Lion"/>
      </Animals>
      {/* <h1>This goes inside the Animals component</h1> */}
    </div>
  );
}

function Animals(props){
  return <div>
    {/* <h1>Something before the children</h1> */}
    {props.children}</div>
}

function Family(props){
  return (
    <div>
      <div style = {{
        padding: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "green"
      }}>
        {props.title}
      </div>
      {props.children}
    </div>
  )
}

function Animal(props){
  return (
    <div style={{
      padding: 5,
      margin: 10,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "purple"
    }}>
      {props.name}
    </div>
  )
}