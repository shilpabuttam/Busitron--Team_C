import React from 'react'
import { Route,Routes } from 'react-router-dom';
import AddVideo from './AddVideo';
import ViewVideo from './ViewVideo';

const Router = () => {
  return (
    <div className='container-fluid'>
        <Routes>
          <Route path='/addvideos'element={<AddVideo/>}/>
          <Route path='/videos'element={<ViewVideo/>}/>
        </Routes>
    </div>
  )
}

export default Router;