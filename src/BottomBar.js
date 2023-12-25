// MIT License
// Copyright (c) 2023 Sergey Somkov

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const LayoutManager = Main.layoutManager;

export class BottomBar
{
	// Clutter.Actor of the Bottom Bar.
	#actor = null;

	// Monitors configuration signal listener.
	// See more comments inside constructor.
	#monitors_changed_listener = null;

	// Actor height signal listener.
	// See more comments inside constructor.
	#height_listener = null;

	constructor(actor)
	{
		this.#actor = actor;
		this.#dock_bottom();

		// If monitors configuration is changed, then we need to re-dock the Bottom Bar.
		// Details about "monitors-changed" event:
		// - https://github.com/GNOME/gnome-shell/blob/42.2/js/ui/layout.js#L576
		// - https://gjs-docs.gnome.org/meta10~10_api/meta.monitormanager#signal-monitors-changed
		this.#monitors_changed_listener = LayoutManager.connect("monitors-changed", () =>
		{
			this.#dock_bottom();
		});

		// If height of the Bottom Bar is changed, then we need to re-dock it.
		// Details about "notify::height" event:
		// - https://gjs-docs.gnome.org/gobject20/gobject.object#signal-notify
		this.#height_listener = actor.connect("notify::height", () =>
		{
			this.#dock_bottom();
		});
	}

	dispose()
	{
		if (this.#height_listener != null)
		{
			this.#actor.disconnect(this.#height_listener);
			this.#height_listener = null;
		}
		if (this.#monitors_changed_listener != null)
		{
			LayoutManager.disconnect(this.#monitors_changed_listener);
			this.#monitors_changed_listener = null;
		}

		this.#dock_top();
		this.#actor = null;
	}

	get #primary_monitor()
	{
		// Monitor class:
		// - https://github.com/GNOME/gnome-shell/blob/42.2/js/ui/layout.js#L152
		// - x,y, width, height - are representing the size and position of the individual monitor within the entire screen area.
		//   https://docs.gtk.org/gdk3/method.Screen.get_monitor_geometry.html
		return LayoutManager.primaryMonitor;
	}

	#dock_bottom()
	{
		let monitor = this.#primary_monitor;
		// Actor position:
		// - https://gjs-docs.gnome.org/clutter10~10_api/clutter.actor#method-get_position
		// - https://gjs-docs.gnome.org/clutter10~10_api/clutter.actor#method-set_position
		this.#actor.set_position(monitor.x, monitor.y + monitor.height - this.#actor.height);

		// See also stylesheet.css for ".popup-menu.panel-menu" modification.
	}

	#dock_top()
	{
		let monitor = this.#primary_monitor;
		// See comments in #dock_bottom method.
		this.#actor.set_position(monitor.x, monitor.y);
	}
};