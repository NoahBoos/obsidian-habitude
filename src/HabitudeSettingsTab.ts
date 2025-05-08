import {App, PluginSettingTab} from "obsidian";
import Habitude from "./main";

export interface HabitudeSettings {

}

export const DEFAULT_SETTINGS: HabitudeSettings = {

}

export class HabitudeSettingsTab extends PluginSettingTab {
    plugin: Habitude;

    constructor(app: App, plugin: Habitude) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const {containerEl} = this;
        containerEl.empty();
    }
}