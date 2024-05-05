import React from 'react'

function AlbumDetailsView(props) {

  const group = props.group;
  console.log(group?.name);
  return (
    
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
    <div className="col-md-7 col-lg-8">
      <form className="needs-validation">
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="name" className="form-label">Group Name </label>
            <input type="text" className="form-control" id="name" value={group?.name} readOnly/>
          </div>

          <div className="col-sm-6">
            <label htmlFor="genre" className="form-label">Genre</label>
            <input type="text" className="form-control" id="genre" value={group?.strGenre} readOnly/>
          </div>
      
          <div className="col-sm-6">
           </div>
          <div className="col-sm-6">
            <label htmlFor="establishedyear" className="form-label">Established Year</label>
            <input type="text" className="form-control" id="establishedyear" value={group?.establishedYear} readOnly/>
          </div>


        </div>
      </form>            
    </div>
</div>
  )
}

export default AlbumDetailsView