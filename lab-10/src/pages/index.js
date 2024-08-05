export default function Home() {
  
  const handleSubmit = () => {
    alert("You did it!")
  }  
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#4a455c'
      }}>
     <Form onSubmit={handleSubmit}>
        <Label labelFor="Email" />
          <Input type="Email"></Input>
        <Label labelFor="Password"/>
          <Input type="Password"/>
     </Form>
    </div>
  );
}

function Form(props){
  return (
    <form style={{
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 5,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }} onSubmit={props.onSubmit}>
      {props.children}
      <button type="submit" style={{
            padding: '10 20',
            backgroundColor: '#a56d8b',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            height: '4vh',
            width: '10vw',
            cursor: 'pointer',
      }}>Submit here!</button>
    </form>
    
  )
}

function Label(props){
  return (
    <div style={{marginBottom: 10}}>
      <label style={{    
        display: 'block',
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#a56d8b'
        }}>{props.labelFor}</label>
    {props.children}
    </div>
  )
}

function Input(props){
  return (
    <div style={{marginBottom: 20}}>
      <input type={props.type} placeholder={props.type} style={{
            width: '100%',
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
            textAlign: 'center'
      }}/>
    </div>
  )
}