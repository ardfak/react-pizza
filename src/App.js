import { Box, Container } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        {/* <Container maxWidth='sm' fixed>
        <Box></Box>
      </Container> */}
      </div>
    </BrowserRouter>
  )
}

export default App
