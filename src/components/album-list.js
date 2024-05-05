import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AlbumList(props) {
    const group = props.serviceData?.pageItems || [];
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = Math.ceil(group.length / 10); // Beräkna antalet poster per sida för att fylla 10 sidor
    const totalNumberOfPages = 10; // Statiskt antal sidor

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = group.slice(firstIndex, lastIndex);

    function prePage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function changeCpage(n) {
        setCurrentPage(n);
    }

    function nextPage() {
        if (currentPage < totalNumberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>
       

          
            <div className="row mb-4 text-center">
                <div className="col-md-4 themed-grid-col themed-grid-head-col">Name</div>
                <div className="col-md-4 themed-grid-col themed-grid-head-col">Established year</div>
                <div className="col-md-4 themed-grid-col themed-grid-head-col">Genre</div>
            </div>
            {records.map((row, idx) => (
                <div id='clickable' className="row mb-2 text-center" key={row.musicGroupId} data-rowitemid={row.musicGroupId} onClick={props.onClick}>
                    <div className="col-md-4 themed-grid-col">
                        {row.name}
                    </div>
                    <div className="col-md-4 themed-grid-col">
                        {row.establishedYear}
                    </div>
                    <div className="col-md-4 themed-grid-col">
                        {row.strGenre}
                    </div>

                
                </div>
            ))}
           
            <div className='col-ml-12'> 
            <nav >
                <ul className='pagination'>
                    <li className='page-item'>
                        <button className='page-link' onClick={prePage}>Prev</button>
                    </li>
                    {[...Array(totalNumberOfPages).keys()].map(n => (
                        <li className={`page-item ${currentPage === n + 1 ? 'active' : ''}`} key={n}>
                            <button className='page-link' onClick={() => changeCpage(n + 1)}>{n + 1}</button>
                        </li>
                    ))}
                    <li className='page-item'>
                        <button className='page-link' onClick={nextPage}>Next</button>
                    </li>
                </ul>
            </nav>
          
            </div> 
        </>
    );
}
