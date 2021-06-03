import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../store/actions/noteAction'
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'

const EditForm = () => {
  const note = useSelector(state => state.note)
  const history = useHistory()
  const [title, setTitle, resetTitle] = useInput(note.title)
  const [content, setContent, resetContent] = useInput(note.content)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateNote({id: note.id, title, content}))
    resetContent()
    resetTitle()
    history.push('/')
  }

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
          <div className="input-field">
            <input value="Alvin" id="first_name2" type="text" className="validate" {...setTitle}/>
            <label className="active" htmlFor="first_name2">Note Title</label>
          </div>
          <div className="input-field">
            <textarea id="textarea1" className="materialize-textarea" {...setContent}/>
            <label className="active" htmlFor="textarea1">Note Content</label>
          </div>
          <button className="btn green">Update</button>
      </form>
    </div>
  )
}

export default EditForm
