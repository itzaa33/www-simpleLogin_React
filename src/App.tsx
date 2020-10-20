import React, { useState } from 'react';
import { Container } from 'react-bootstrap'

import Login from './components/Login'

import 'App.css'

const App: React.FC = () =>
{

  const [user, setUser] = useState<string>('')

  if (user.length <= 0)
  {
    return (
      <Login setUser={setUser} />
    )
  }

  return (
    <Container style={{ height: '100vh', display:'flex' }}>
      <h1 style={{textAlign:'center', margin:'auto'}}>ยินดีต้อนรับ คุณ{user}</h1>
    </Container>
  )
}

export default App;
