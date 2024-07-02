import Render from './render';
let state = null;

let renderer = new Render();

renderer.render();

if (module.hot) {
	module.hot.accept();
	module.hot.accept('./render.js', () => {
		state = renderer.getState();
		console.log('getting state to ', state);
	});
	module.hot.dispose(() => {
		console.log('setting state to ', state);
		renderer.cleanup();
		renderer = new Render();
		renderer.setState(state ?? 0);
	});
}
