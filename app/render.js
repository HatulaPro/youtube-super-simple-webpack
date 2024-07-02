class Render {
	constructor() {
		this.child = null;
		this.count = 0;
	}

	render() {
		this.cleanup();

		this.child = document.createElement('div');
		const text = document.createElement('p');
		text.textContent = 'wowza' + '!'.repeat(this.count);
		const btn = document.createElement('button');
		btn.onclick = () => {
			this.setState(this.getState() + 1);
			this.render();
		};
		btn.textContent = 'click';
		this.child.append(text);
		this.child.append(document.createElement('br'));
		this.child.append(btn);
		document.body.appendChild(this.child);
	}
	cleanup() {
		this.child?.remove();
	}
	getState() {
		return this.count;
	}
	setState(count) {
		this.count = count;
	}
}

export default Render;
