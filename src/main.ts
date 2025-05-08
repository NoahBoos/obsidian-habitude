import {Plugin} from "obsidian";
import {DEFAULT_SETTINGS, HabitudeSettings, HabitudeSettingsTab} from "./HabitudeSettingsTab";
import {habitudeViewTypeHome, HomeView} from "./windows/HomeView";

export default class Habitude extends Plugin {
    settings: HabitudeSettings;

    async onload() {
        await this.loadSettings();

        this.addSettingTab(new HabitudeSettingsTab(this.app, this));

        this.registerView(
            habitudeViewTypeHome,
            (leaf) => new HomeView(leaf),
        )
    }

    async onunload() {
        await this.saveSettings();
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}