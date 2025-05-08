import {ItemView, WorkspaceLeaf} from "obsidian";
import {AddContainer, AddTitle} from "../utils";
import Habitude from "../main";

export const habitudeViewTypeHome = "habitude-view-home";

/**
 * A view displaying all information related to the habit the user registered.
 * @extends ItemView
 */
export class HomeView extends ItemView {
    plugin: Habitude;

    constructor(leaf: WorkspaceLeaf, plugin: Habitude) {
        super(leaf);
        this.plugin = plugin;
    }

    getViewType(): string {
        return habitudeViewTypeHome;
    }

    getDisplayText(): string {
        return "";
    }

    async onOpen() {
        /**
         * @type {Element} container
         * The element containing the whole content of the view.
         */
        const container: Element = this.containerEl.children[1];
        container.empty();

        const header: HTMLDivElement = AddContainer(container);
        let headerTitle: string;
        if (this.plugin.settings.username === "Username") {
            headerTitle = "Welcome to your habits panel."
        } else {
            headerTitle = "Welcome to your habits panel, " + this.plugin.settings.username;
        }
        AddTitle(header, headerTitle);
        const main: HTMLDivElement = AddContainer(container);
        const footer: HTMLDivElement = AddContainer(container);
    }

    async onClose() {

    }
}