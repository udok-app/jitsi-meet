/* @flow */

import React, { Component } from 'react';
import { AtlasKitThemeProvider } from '@atlaskit/theme';

import { createDeepLinkingPageEvent, sendAnalytics } from '../../analytics';
import { translate } from '../../base/i18n';
import { connect } from '../../base/redux';

declare var interfaceConfig: Object;

/**
 * React component representing no mobile app page.
 *
 * @class BrowserNotSupported
 */
class BrowserNotSupported extends Component<*> {
    /**
     * Implements the Component's componentDidMount method.
     *
     * @inheritdoc
     */
    componentDidMount() {
        sendAnalytics(
            createDeepLinkingPageEvent(
                'displayed', 'browserNotSupported', { isMobileBrowser: true }));
    }

    /**
     * Renders the component.
     *
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;
        const ns = 'browser-not-supported';

        return (
            <AtlasKitThemeProvider mode = 'light'>
            <div className = { ns }>
                <h2 className = { `${ns}__title` }>
                    {t('browserunsupported.title')}
                </h2>
                <p className = { `${ns}__description` }>
                    {t('browserunsupported.description')}
                </p>
                {this._renderFooter()}
            </div>
            </AtlasKitThemeProvider>
        );
    }

    /**
     * Renders the footer.
     *
     * @returns {ReactElement}
     */
    _renderFooter() {
        const { t } = this.props;
        const {
            MOBILE_DOWNLOAD_LINK_ANDROID,
            MOBILE_DOWNLOAD_LINK_IOS
        } = interfaceConfig;

        return (<footer className = 'welcome-footer'>
            <div className = 'welcome-footer-centered'>
                <div className = 'welcome-footer-padded'>
                    <div className = 'welcome-footer-row-block welcome-footer--row-1'>
                        <a
                            className = 'welcome-badge'
                            href = { MOBILE_DOWNLOAD_LINK_IOS }>
                            <img src = './images/app-store-badge.png' />
                        </a>
                        <a
                            className = 'welcome-badge'
                            href = { MOBILE_DOWNLOAD_LINK_ANDROID }>
                            <img src = './images/google-play-badge.png' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>);
    }
}

export default translate(connect(() => ({}))(BrowserNotSupported));