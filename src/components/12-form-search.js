import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export function FormSearch(props) {

  const [searchFilter, setSearchFilter] = useState(props.searchFilter || "");

  const handleChange = (e) => {

    const id = e.target.id;
    const val = e.target.value;
    let s = searchFilter;
 
    switch (id) {
      case 'search':
        s = val;
        break;
      default:
        return;
    }
    setSearchFilter(s);
  }

  const onSave = (e) => 
  { 
    //We are going to add validation here later
    e.searchFilter = searchFilter;
    props.onSave(e);
  }  

  return (
    <>
    
      <div className="row mb-8 text-center" id="edit-item">
        <button className="btn btn-outline-success" onClick={onSave} >Search <i className="bi bi-search"></i> </button>
        <div>
          <div className="row mb-8 text-center">
            <form >

              <div className="row mb-8 text-center">
                
                <div className="row mb-8 text-center">
                  <label htmlFor="name" className="form-label" title='Search'></label>
                  <input type="text"  placeholder="Search..." className="form-control" id="search" value={searchFilter} onChange={handleChange}/>
                </div>
              </div>
            </form>            
          </div>
        </div>
      </div>
    </>
  )
}
