import {App, PluginSettingTab, Setting} from "obsidian";
import Habitude from "./main";

export interface HabitudeSettings {
    username: string;
}

export const DEFAULT_SETTINGS: HabitudeSettings = {
    username: "Username",
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

        new Setting(containerEl)
            .setName("Username")
            .setDesc("The username that will be used in some contextual message.")
            .addText(text => text
                .setPlaceholder("Username")
                .setValue(this.plugin.settings.username)
                .onChange(async (value) => {
                    this.plugin.settings.username = value;
                    await this.plugin.saveSettings();
                }));
    }
}