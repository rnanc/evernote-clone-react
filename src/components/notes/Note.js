import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote, toggleFav } from '../../store/actions/noteAction'
import moment from 'moment'

const Note = ({ note }) => {
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(deleteNote(note))
  }
  const favHandler = () => {
    dispatch(toggleFav(note))
  }
  const heartMarkup = note.favorite ? 'favorite' : 'favorite_border'
  return (
    <div className="note white">
      <div className="right-align">
        <i className="material-icons red-text" style={{cursor: 'pointer'}} onClick={ favHandler }>{ heartMarkup }</i>
        <i className="material-icons" style={{cursor: 'pointer'}} onClick={ deleteHandler }>delete</i>
      </div>
      <h5 className="black-text">{note.title}</h5>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{ moment(note.createdAt.toDate()).fromNow() }</p>
      <div className="right-align"><i className="material-icons black-text">edit</i></div>
    </div>
  )
}

export default Note
