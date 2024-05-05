import React from 'react'
import {Routes, Route } from "react-router-dom";
import { SokSidan} from '../Pages/HomePage';
import { AlbumsWebApi, AlbumsWebApiList, AlbumsWebApiView,  } from '../Pages/albums-webapi';
import { SearchInPage12a } from '../12a-search-in-page';




export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SokSidan />} />
      <Route path='/HomePage' element={<SokSidan/>}/>

      
      
      
      <Route path='/12a-search-in-page' element={<SearchInPage12a/>}/> 
      <Route  element={<SearchInPage12a/>}/> 
      <Route index path=":id"  element={<AlbumsWebApiView />} />
     

      <Route path="/albums-webapi" element={<AlbumsWebApi />}>
       

       
        <Route index element={<AlbumsWebApiList />} />
        <Route index path=":id" element={<AlbumsWebApiView />} />
        
      </Route>
      
     
      
     
        
        
    
       



    </Routes>
  )
}

