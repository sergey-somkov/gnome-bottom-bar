// MIT License
// Copyright (c) 2022 Sergey Somkov

const Main = imports.ui.main;
const LayoutManager = Main.layoutManager;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const BottomBar = Me.imports.BottomBar.BottomBar;

class Extension
{
	#uuid = null;
	#bottom_bar = null;

	constructor(uuid)
	{
		console.log(`${uuid} - constructor`);

		this.#uuid = uuid;
	}

	enable()
	{
		console.log(`${this.#uuid} - enable`);

		this.#bottom_bar = new BottomBar(LayoutManager.panelBox);
	}

	disable()
	{
		console.log(`${this.#uuid} - disable`);

		this.#bottom_bar.dispose();
		this.#bottom_bar = null;
	}
}

function init(meta)
{
	return new Extension(meta.uuid);
}