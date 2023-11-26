import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom';


const Home = ()=> <h1>Home</h1>

const SearchPage = () => {

  const arepas = [
    'queso',
    'pelua',
    'pabellon',
    'domino',
  ]

  return(
    <div>
      <h1>SearchPage</h1>
      <ul>
        {arepas.map( (arepa, index) => (
          <li key={index}>
            <Link  to={`/arepas/${arepa}`}>{arepa}</Link>
          </li>
        ) )}
      </ul>
    </div>
  )

}

const Arepas = () => {
  const { arepa } = useParams()

  console.log(arepa)

  return(
    <div>
      <h1>Arepas</h1>
      <h3>{arepa}</h3>
      <Link to={`details`}>Detalles</Link>
      {/* indica donde renderizar el contenido de rutas secundarias */}
      <Outlet />
    </div>
  )
}

const ArepaIndex = () => <h2>ArepaIndex</h2>

const Details = () => {
  const { arepa } = useParams()

  console.log(arepa)

  return(
    <div>
      <h1>Detalles de {arepa}</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <header>
        <h1>miduchollos</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search-page'>Search Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/arepas/:arepa' element={<Arepas />}>
          <Route index element={<ArepaIndex />}/>
          <Route path='details' element={<Details />}/>
        </Route>
        <Route path='*' element={<h1>Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
