function About() {
	return (
		<div className="main">
			<div className="container">
				<div className="text">
					<p><b>ShareNotes</b> - a service for sharing notes. You can create a note, then copy and send the received link to the recipient.</p>
					<ol>
						<li>Press the button "Create note" on home page</li>
						<li>Enter any text you want to share and press the button</li>
						<li>Send the link anyone you want</li>
					</ol>
					<p>How to read the note you received? Press the button "Find note" and enter the hash-part of the link you've get. Also you can put directly the full link in the url-line of your browser.</p>
				</div>
			</div>
		</div>
	);
}

export default About;