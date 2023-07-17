import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

function Note() {
  let { noteURL } = useParams();
  const [noteTxt, setNoteTxt] = useState('');
  const [showNote, setShowNote] = useState('hide');
  const [formClass, setFormClass] = useState('');
  const [errorClass, setErrorClass] = useState('hide');

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL })
      })
        .then(response => response.json())
        .then(resp => {
          // console.log(resp)
          if (resp.result) {
            setNoteTxt(resp.note);
            setShowNote('');
            setFormClass('hide');
            setErrorClass('hide')
          }
          else if (!resp.result) {
            setShowNote('hide');
            setFormClass('hide');
            setErrorClass('errorBlock');
          }
        })
    } else {
      setShowNote('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, [noteURL]);

  function getNote(e) {
    e.preventDefault();
    let url = e.target.elements.url.value;
    url = url.trim();

    if (url === '') {
      alert('enter note hash');
      return;
    }

    noteURL = url;
    window.location.href = `${env.url}/${url}`;
  }

  function searchNote() {
    window.location.href = env.url;
  }

  return (
    <div className="main">
      <div className="container note-container">
        <div className={showNote}>
          <div className="note-content">
            <h4>Note:</h4>
            <p>{noteTxt}</p>
            <div>
              <button onClick={searchNote} className="btn">search another note</button>
            </div>
          </div>
        </div>
        <div className={errorClass}>
          <p className="note-not-found">note not found, try again please</p>
          <a className="note-action" href="/note">try again</a>
        </div>
        <div className={formClass}>
          <form onSubmit={getNote} className="note-form">
            <label htmlFor="url">Enter note hash</label>
            <input type="text" name="url" id="url" className="form-control" />
            <button type="submit" className="btn">search the note</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Note;