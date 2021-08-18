// Make some clickable buttons, using 
// modularity in nested React logic
// time functions

// This snip is most easily run in the online React REPL at
// https://jscomplete.com/playground/rgs1.6


function App() {
	let now = new Date();
	now = now.toLocaleTimeString();
	// see also toLocaleString toLocaleDateString...
	return <h3> Yippy, I am a hippy, at {now}.</h3>
}

ReactDOM.render(
	<App />,
	document.getElementById('mountNode')
)