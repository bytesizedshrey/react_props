/*
export default function App(){
  return (
    <>
    <Hello name="Smooth" />
    <Hello name="Operator" />
    </>
  );
}

function Hello({name = 'user'}){
  return <h1>Hello {name}</h1>
}
*/
export default function App() {
  return (
    <Comment username='Conner' time={(new Date()).toString()}>
      <h1>Hello World</h1>
      <p>This is a comment</p>
    </Comment>
  );
}

function Comment({username, time, children}){
  return (
    <section>
      <p>{username} commented at {time}</p>
      {children}
    </section>
  )
}