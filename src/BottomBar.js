// MIT License
// Copyright (c) 2022 Sergey Somkov

const Main = imports.ui.main;
const LayoutManager = Main.layoutManager;

var BottomBar = class BottomBar
{
	#actor = null;
	#monitors_changed_listener = null;
	#height_listener = null;

	constructor(actor)
	{
		this.#actor = actor;
		this.#dock_bottom();

		// TODO: "monitors-changed" signal documentation link and explanation.
		// https://github.com/GNOME/gnome-shell/blob/main/js/ui/layout.js#L572
		// https://gjs-docs.gnome.org/meta10~10_api/meta.monitormanager#signal-monitors-changed
		this.#monitors_changed_listener = LayoutManager.connect("monitors-changed", () =>
		{
			this.#dock_bottom();
		});

		// TODO: "notify::height" signal documentation link and explanation.
		// https://gjs-docs.gnome.org/gobject20/gobject.object#signal-notify
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
		// https://github.com/GNOME/gnome-shell/blob/42.2/js/ui/layout.js#L152
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