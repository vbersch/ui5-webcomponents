import UI5Element from "@ui5/webcomponents-base/src/UI5Element.js";
import Bootstrap from "@ui5/webcomponents-base/src/Bootstrap.js";
import TitleLevel from "./types/TitleLevel.js";
import TitleRenderer from "./build/compiled/TitleRenderer.lit.js";

// Styles
// Styles
import titleCss from "./themes/Title.css.js";

// all themes should work via the convenience import (inlined now, switch to json when elements can be imported individyally)
import "./ThemePropertiesProvider.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-title",
	properties: /** @lends sap.ui.webcomponents.main.Title.prototype */ {

		/**
		 * Defines whether the <code>ui5-title</code> would wrap.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		*/
		wrap: {
			type: Boolean,
		},

		/**
		 * Defines the <code>ui5-title</code> level.
		 * Available options are: <code>"H6"</code> to <code>"H1"</code>.
		 *
		 * @type {string}
		 * @defaultvalue "H2"
		 * @public
		*/
		level: {
			type: TitleLevel,
			defaultValue: TitleLevel.H2,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.Title.prototype */ {
		/**
		 * Defines the text of the <code>ui5-title</code>.
		 * <br><b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
		 *
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		text: {
			type: Node,
			multiple: true,
		},
	},
	defaultSlot: "text",
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-title</code> component is used to display titles inside a page.
 * It is a simple, large-sized text with explicit header/title semantics.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Title";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Title
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-title
 * @public
 */
class Title extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return TitleRenderer;
	}

	static get styles() {
		return titleCss;
	}

	get normalizedLevel() {
		return this.level.toLowerCase();
	}

	get h1() {
		return this.normalizedLevel === "h1";
	}

	get h2() {
		return this.normalizedLevel === "h2";
	}

	get h3() {
		return this.normalizedLevel === "h3";
	}

	get h4() {
		return this.normalizedLevel === "h4";
	}

	get h5() {
		return this.normalizedLevel === "h5";
	}

	get h6() {
		return this.normalizedLevel === "h6";
	}

	get classes() {
		return {
			main: {
				sapMTitle: true,
				sapMTitleWrap: this.wrap,
				sapUiSelectable: true,
				[`sapMTitleStyle${this.level}`]: true,
			},
		};
	}
}

Bootstrap.boot().then(_ => {
	Title.define();
});

export default Title;
