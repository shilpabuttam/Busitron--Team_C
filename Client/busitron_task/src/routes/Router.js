import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VideoChapterMarkers from '../Components/VideoChapterMarkers'

const Router = () => {
  return (
    <Routes>
        <Route path='/videoChapterMarkers' element={<VideoChapterMarkers />} />
    </Routes>
    
  )
}

export default Router
