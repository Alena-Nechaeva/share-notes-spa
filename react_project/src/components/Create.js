import React, { useState } from "react";
import env from '../env.json';

function Create() {
	const [url, setUrl] = useState('');
	const [showLink, setShowLink] = useState('hide');
	const [formClass, setFormClass] = useState('');

	function sendData(obj) {
		setFormClass('hide');
		setShowLink('');
		fetch(env.urlBackend, {
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(obj)
		})
			.then(response => response.json())
			.then(resp => {
				// console.log(resp)
				if (resp.result) {
					setUrl(`${env.url}/${resp.url}`)
				}
			})
	}

	function loadDataFromForm(e) {
		e.preventDefault();
		let note = e.target.elements.note.value;
		note = note.trim();
		if (note === '') {
			alert('fill the form')
			return;
		}
		sendData({ note: note });
		e.target.elements.note.value = 'some note here';
	}

	return (
		<div className="main">
			<div className="container">
				<form className={formClass} onSubmit={loadDataFromForm}>
					<div className="form-group">
						<label htmlFor="note">Enter a note</label>
						<textarea name="note" id="note" defaultValue="some note here"></textarea>
						<button className="btn" type="submit">Create</button>
					</div>
				</form>
				<div className={showLink}>
					<div className="note-link">
						<p>Copy URL and send to your destination</p>
						<p>{url}</p>
					</div>
					<div className="create-new-note-btn">
						<button className="btn" onClick={() => {
							setShowLink('hide');
							setFormClass('');
						}}>Create new note</button>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Create;