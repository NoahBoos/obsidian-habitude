import {Plugin} from "obsidian";

export default class Habitude extends Plugin {

    async onload() {
        await this.loadSettings();

        this.addSettingTab(new HabitudeSettingsTab(this.app, this));
    }

    async onunload() {
        await this.saveSettings();
    }
}