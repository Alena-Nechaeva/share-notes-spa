import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="container header-container">
				<a className="brand" href="/">ShareNotes</a>
				<nav className="nav">
					<ul className="nav-list">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/note">Find note</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/create">Create new note</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">About this project</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;