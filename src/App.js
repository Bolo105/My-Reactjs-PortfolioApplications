import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Pages } from './components/pages/Pages';

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div>
      <Pages />
    </div>
  );
}

export default App;
