import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'

const NotesDetail = (props) => {
  const id = props.match.params.id
  useFirestoreConnect([{ collection: 'notes', doc: id}])
  const note = useSelector(({firestore:{ data }}) =>
    data.notes && data.notes[id])
  const noteMarkup = !isLoaded(note)?(
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Loading...</div>
        </div>
      </div>
    </div>
  ): isEmpty(note)?(
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">The note is empty !</div>
        </div>
      </div>
    </div>
  ):(
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{note.title}</div>
            <p>{note.content}</p>
            <div className="card-action grey lighten-4 frey-text">
              <div>{moment(note.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  return noteMarkup
}

export default NotesDetail
