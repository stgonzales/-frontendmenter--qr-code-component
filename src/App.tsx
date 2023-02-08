import { Card, CardImage, CardContent } from './Components/Card'
import './App.css'

function App() {
  return (
    <div className="App">
      <Card>
        <CardImage className='card-image' src='/image-qr-code.png' alt='qr code'/>
        <CardContent>
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
