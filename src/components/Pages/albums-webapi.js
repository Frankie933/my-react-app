import React, {useState, useEffect} from 'react';
import { ArrowCounterclockwise} from 'react-bootstrap-icons'
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router-dom';
import musicService from '../services/music-group-service';
import AlbumList from '../album-list';
import AlbumDetailsView from '../album-details-view';


  //https://appmusicwebapinet8.azurewebsites.net/api/csMusicGroups/Read?flat

export function AlbumsWebApi()
{
    const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
    return (
      <div className="container px-4 py-4 text-start">

          <h2 className="pb-2 border-bottom">Music groups</h2>
          <Outlet context={service}/>
      </div>
  );
}

export function AlbumsWebApiList() {
  const service = useOutletContext();
  const navigate = useNavigate();

  //#region to read the WebApi async to initialize a React component
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
     async function readWebApi() {
        const data = await service.readMusicGroupsAsync(0);
        setServiceData(data);
     }
     readWebApi();
  }, [service])
  //#endregion

  const onView = (e) => 
  {
    const id = e.currentTarget.dataset.rowitemid;
    console.log(id);
    navigate(`/albums-webapi/${id}`);
  }

    // You need to handle the render when serviceData is null, i.e. async call has not yet completed
    return (
    <>

      <AlbumList serviceData={serviceData} onClick={onView}/>
    </>
  );
}

export function AlbumsWebApiView() {
  const service = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  //#region to read the WebApi async to initialize a React component
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
      async function readWebApi() {
        const data = await service.readMusicGroupAsync(id);
        setServiceData(data);
      }
      readWebApi(id);
  }, [service,id])
  //#endregion


  const onUndo = (e) => 
  {
    navigate(`/HomePage`);
  }  
  
  
  return (
    <>
      <h1 hidden={serviceData === undefined}>
        {serviceData?.name} 

        <button className="btn btn-primary-outline" onClick={onUndo}>
          <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        </button>
      </h1>
      <AlbumDetailsView group={serviceData}/>
    </>
    );
  }



 
  











  
  