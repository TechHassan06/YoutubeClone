import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />


      <Routes>
        <Route
          path='/'
          element={
            <Home
              sidebar={sidebar}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
};
export default App