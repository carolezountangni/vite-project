
const title = " Hello <strong>♠everyone </strong> ";
const style = {color:'blue' , backgroundColor :'gray'};
const showTitle = true
const todos = [
  'Présenter react',
  'Présenter le JSX',
  'Créer des composants',
]




function Syntaxe() {

  const handleClick = (e) => {

  e.preventDefault()
  e.stopPropagation()
  alert("J'ai cliqué sur le titre ")
  }

  return  <>

  <Title color="green" id="nomid" className="demo" data-demo="demo" > Mon composant </Title>
    {showTitle?
        <h1 onClick={handleClick} id="title" className="title" style={style}>{title}</h1>:
            <p>demo</p>
    }
      {showTitle && <h2 onClick={() => alert('Jai  cliqué sur le 2 titre')} id="title" className="title" style={style}>{title}</h2>

    }

  

   {/* <h1 id="title" className="title" dangerouslySetInnerHTML={{ __html:title }}></h1> */}

   <input type="text" />
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis consectetur ipsam libero tempora dolorem tempore,
     praesentium rerum quibusdam maxime enim. Sed amet quia quasi molestias facere illum, a est.</p>
   
    <ul>
      {todos.map(todo => (<li key ={todo}>{todo}</li>))}
    </ul>
    </>
}

function Title ({color, children ,hidden, ...props }){

  if(hidden){return null}
  // const props = {
  //   id : 'nomid',
  //   className: 'maclass'
  // }

  return <h1 style={{color : color }} {...props}>{children}</h1>
}

export default Syntaxe






