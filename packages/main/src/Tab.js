import Bootstrap from "@ui5/webcomponents-base/src/Bootstrap.js";
import URI from "@ui5/webcomponents-base/src/types/URI.js";
import TabBase from "./TabBase.js";
import IconColor from "./types/IconColor.js";
import Icon from "./Icon.js";
import TabRenderer from "./build/compiled/TabRenderer.lit.js";

// all themes should work via the convenience import (inlined now, switch to json when elements can be imported individyally)
import "./ThemePropertiesProvider.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-tab",
	defaultSlot: "content",
	slots: /** @lends sap.ui.webcomponents.main.Tab.prototype */ {

		/**
		 * Defines the tab content.
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		content: {
			type: HTMLElement,
			multiple: true,
		},
	},
	properties: /** @lends sap.ui.webcomponents.main.Tab.prototype */ {

		/**
		 * Defines the text of the <code>ui5-tab</code> displayed in the tab strip.
		 * @type {string}
		 * @defaultvalue: ""
		 * @public
		 */
		text: {
			type: String,
		},

		/**
		 * Defines whether the <code>ui5-tab</code> is disabled.
		 * <br><br>
		 * <b>Note:</b> A disabled <code>ui5-tab</code> can`t be selected.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines the "additionalText" of the <code>ui5-tab</code>, displayed in the tab strip.
		 * @type {string}
		 * @defaultvalue: ""
		 * @public
		 */
		additionalText: {
			type: String,
		},

		/**
		 * Defines the icon of the <code>ui5-tab</code> displayed in the tab strip. The SAP-icons font provides numerous options.
		 * <br><br>
		 * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 * @type {URI}
		 * @defaultvalue: ""
		 * @public
		 */
		icon: {
			type: URI,
			defaultValue: "",
		},

		/**
		 * Defines a semantic color for the <code>ui5-tab</code> icon within the tab strip.
		 *
		 * Available options are: "Default", "Neutral", "Positive", "Critical" and "Negative".
		 * <br><b>Note:</b> the resulting color depends on the theme.
		 * @type {IconColor}
		 * @defaultvalue "Default"
		 * @public
		 */
		iconColor: {
			type: IconColor,
			defaultValue: IconColor.Default,
		},

		/**
		 * Defines if the <code>ui5-tab</code> is selected.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		selected: {
			type: Boolean,
		},

		_tabIndex: {
			type: String,
			defaultValue: "-1",
		},

		_getTabContainerHeaderItemCallback: {
			type: Function,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.Tab.prototype */ {

	},
};

/**
 * @class
 * The <code>ui5-tab</code> represents a selectable item inside a <code>ui5-tabcontainer</code>.
 * It defines both the item in the tab strip (top part of the <code>ui5-tabcontainer</code>) and the
 * content that is presented to the user once the <code>ui5-tab</code> is selected.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Tab
 * @extends TabBase
 * @tagname ui5-tab
 * @public
 */
class Tab extends TabBase {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return TabRenderer;
	}

	static async define(...params) {
		await Icon.define();

		super.define(...params);
	}

	getFocusDomRef() {
		let focusedDomRef = super.getFocusDomRef();

		if (this._getTabContainerHeaderItemCallback) {
			focusedDomRef = this._getTabContainerHeaderItemCallback();
		}

		return focusedDomRef;
	}
}

Bootstrap.boot().then(_ => {
	Tab.define();
});

export default Tab;
