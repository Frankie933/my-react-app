import React, { useState } from 'react';
import { FormSearch } from './12-form-search';
import musicService from './services/music-group-service';
import {useNavigate} from 'react-router-dom';

export function SearchInPage12a(props) {
    const [albums, setAlbums] = useState({});
    const navigate = useNavigate();

    const onSave = async (e) => {
        console.log(`onSave invoked`);

        // Kontrollera att sökfältet inte är tomt
        if (!e.searchFilter.trim()) {
            console.log("No search term provided, displaying zero results.");
            setAlbums({ pageItems: [] });  // Sätt albums till ett tomt objekt med en tom array för pageItems
            return;
        }

        const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
        try {
            const a = await service.readMusicGroupsAsync(0, true, e.searchFilter);
            setAlbums(a);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setAlbums({ pageItems: [] });
        }
    };

    const onUndo = (e) => {
        console.log(`onUndo invoked`);
    };

    const onView = (e) => 
    {
      const id = e.currentTarget.dataset.rowitemid;
      console.log(id);
      navigate(`/albums-webapi/${id}`);
    }

    return (
        <>
            <div className="container px-4 py-4 text-start">
                <h2 className="pb-1 border-bottom">Search music groups</h2>
                <FormSearch searchFilter="" onSave={onSave} onUndo={onUndo} />
                
                {/* kolla om det fins någonting i listan visa */}
                {albums.pageItems && albums.pageItems.length > 0 ? (
                    <div>
                        <h4 className="col mb-2 text-center">The amout of albums found: {albums.pageItems.length}</h4>
                        {albums.pageItems.map((a, index) => (
                           <div className="row mb-2 text-center" id='clickable'>
                           <div key={index.musicGroupId} className="col mb-2 text-center"  data-rowitemid={a.musicGroupId} onClick={onView}>
                                <div className="row-md-4 themed-grid-col"> 
                                    {a.name} {a.strGenre} from year {a.establishedYear}
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h5 className="col mb-2  mt-5 text-center">No music groups found</h5>
                )}
            </div>
        </>
    );
}
