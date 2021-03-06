import React from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { addNote } from '../../store/actions/noteAction'

const Form = () => {
  const [title, setTitle, resetTitle] = useInput()
  const [content, setContent, resetContent] = useInput()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNote({title, content}))
    resetContent()
    resetTitle()
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
            <label htmlFor="textarea1">Note Content</label>
          </div>
          <button className="btn green">Add</button>
      </form>
    </div>
  )
}

export default Form
