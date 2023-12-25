// MIT License
// Copyright (c) 2023 Sergey Somkov

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { BottomBar } from './BottomBar.js';

const LayoutManager = Main.layoutManager;

export default class BottomBarExtension extends Extension
{
	#bottom_bar = null;

	enable()
	{
		console.log(`${this.uuid} - enable`);

		this.#bottom_bar = new BottomBar(LayoutManager.panelBox);
	}

	disable()
	{
		console.log(`${this.uuid} - disable`);

		this.#bottom_bar.dispose();
		this.#bottom_bar = null;
	}
}