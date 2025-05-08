import {App, WorkspaceLeaf} from "obsidian";

/**
 * Activate a given type of view by creating a new instance of it or by displaying/focusing on an existing one.
 * @description
 * Check if some instances of the view to be displayed already exists.
 * If yes, the view to be displayed is the first instance contained in the array.
 * If no, we create the view that will be displayed.
 * @description
 * Reveal the leaf in case it is located in a collapsed sidebar.
 * @param {string} viewType - A string referring the type of the view to be displayed.
 */
export async function ActivateView(viewType: string) {
    /**
     * @type {App} workspace
     * @description The instance of the Obsidian app.
     */
    const {workspace}: App = this.app;
    /**
     * @type {WorkspaceLeaf | null} leaf
     * @description The leaf that has to be displayed, null by default.
     */
    let leaf: WorkspaceLeaf | null = null;
    /**
     * @type {WorkspaceLeaf[]} leaves
     * @description An array containing all the instances of the leaf that has to be displayed.
     */
    const leaves: WorkspaceLeaf[] = workspace.getLeavesOfType(viewType);

    if (leaves.length > 0) {
        leaf = leaves[0];
    } else {
        leaf = workspace.getLeaf(false);
        await leaf.setViewState({ type: viewType, active: true });
    }
    await workspace.revealLeaf(leaf);
}