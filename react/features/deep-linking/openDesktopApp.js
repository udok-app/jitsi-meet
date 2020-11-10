// @flow
import {generateDeepLinkingURL} from './functions';

/**
 * Opens the desktop app.
 *
 * @param {Object} state - Object containing current redux state.
 * @returns {Promise<boolean>} - Resolves with true if the attempt to open the desktop app was successful and resolves
 * with false otherwise.
 */
export function _openDesktopApp(state: Object) { // eslint-disable-line no-unused-vars
    const url = generateDeepLinkingURL();
    try {
        document.location = url;
        return Promise.resolve(true);
    } catch (e) {
        return Promise.resolve(false);
    }
}
