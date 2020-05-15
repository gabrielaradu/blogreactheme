/**
 * Show the correct className for a selected menu item in navigation
 * @param menuId
 * @param currentItemMenuId
 * @returns {string}
 */
export function sidebarLinkClass(activeMenuId, currentItemMenuId) {
    return activeMenuId === currentItemMenuId ? ' item-active' : '';
}