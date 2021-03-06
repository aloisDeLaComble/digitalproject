/** qooxdoo v4.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = qxWeb.$$qx;
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"library.Application","qx.debug":true,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.globalErrorHandling":false,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"4.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};

/** qooxdoo v4.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
qx.$$packageData['0']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Provides a way to block elements so they will no longer receive (native)
 * events by overlaying them with a DIV element.
 *
 * The blocker can also be applied to the entire document, e.g.:
 *
 * <pre class="javascript">
 * q(document).block();
 * </pre>
 *
 * @require(qx.module.Environment)
 * @require(qx.module.Manipulating)
 * @require(qx.module.Traversing)
 * @require(qx.module.Css)
 * @require(qx.module.Attribute)
 */
qxWeb.define("qx.module.Blocker", {
  statics : {
    /**
     * Attaches a blocker div to the given element.
     *
     * @param item {Element|Document} The element to be overlaid with the blocker
     * @param color {String} The color for the blocker element (any CSS color value)
     * @param opacity {Number} The CSS opacity value for the blocker
     * @param zIndex {Number} The zIndex value for the blocker
     */
    __attachBlocker : function(item, color, opacity, zIndex){

      var win = qxWeb.getWindow(item);
      var isDocument = qxWeb.isDocument(item);
      if(!isDocument && !qxWeb.isElement(item)){

        return;
      };
      if(!item.__blocker){

        item.__blocker = {
          div : qxWeb.create("<div class='qx-blocker' />")
        };
      };
      if(isDocument){

        item.__blocker.div.insertBefore(qxWeb(win.document.body).getChildren(':first'));
      } else {

        item.__blocker.div.appendTo(win.document.body);
      };
      qx.module.Blocker.__styleBlocker(item, color, opacity, zIndex, isDocument);
    },
    /**
     * Styles the blocker element(s)
     *
     * @param item {Element|Document} The element to be overlaid with the blocker
     * @param color {String} The color for the blocker element (any CSS color value)
     * @param opacity {Number} The CSS opacity value for the blocker
     * @param zIndex {Number} The zIndex value for the blocker
     * @param isDocument {Boolean} Whether the item is a document node
     */
    __styleBlocker : function(item, color, opacity, zIndex, isDocument){

      var qItem = qxWeb(item);
      var styles = {
        "display" : "block"
      };
      styles.backgroundColor = typeof color !== 'undefined' ? color : null;
      styles.zIndex = typeof zIndex !== 'undefined' ? zIndex : null;
      if(qxWeb.env.get("browser.name") === "ie" && qxWeb.env.get("browser.version") <= 8){

        styles.opacity = typeof opacity !== 'undefined' ? opacity : 0;
      } else {

        styles.opacity = typeof opacity !== 'undefined' ? opacity : null;
      };
      if(isDocument){

        styles.top = 0 + "px";
        styles.left = 0 + "px";
        styles.position = "fixed";
        styles.width = "100%";
        styles.height = "100%";
      } else {

        var pos = qItem.getOffset();
        styles.top = pos.top + "px";
        styles.left = pos.left + "px";
        styles.position = "absolute";
        styles.width = qItem.getWidth() + "px";
        styles.height = qItem.getHeight() + "px";
      };
      item.__blocker.div.setStyles(styles);
    },
    /**
     * Removes the given item's blocker element(s) from the DOM
     *
     * @param item {Element} Blocked element
     * @param index {Number} index of the item in the collection
     */
    __detachBlocker : function(item, index){

      if(!item.__blocker){

        return;
      };
      item.__blocker.div.remove();
    },
    /**
     * Returns the blocker elements as collection
     *
     * @param collection {qxWeb} Collection to get the blocker elements from
     * @return {qxWeb} collection of blocker elements
     */
    __getBlocker : function(collection){

      var blockerElements = qxWeb();
      collection.forEach(function(item, index){

        if(typeof item.__blocker !== "undefined"){

          blockerElements = blockerElements.concat(item.__blocker.div);
        };
      });
      return blockerElements;
    },
    /**
     * Adds an overlay to all items in the collection that intercepts mouse
     * events.
     *
     * @attach {qxWeb}
     * @param color {String ? transparent} The color for the blocker element (any CSS color value)
     * @param opacity {Number ? 0} The CSS opacity value for the blocker (floating point number from 0 to 1)
     * @param zIndex {Number ? 10000} The zIndex value for the blocker
     * @return {qxWeb} The collection for chaining
     */
    block : function(color, opacity, zIndex){

      if(!this[0]){

        return this;
      };
      this.forEach(function(item, index){

        qx.module.Blocker.__attachBlocker(item, color, opacity, zIndex);
      });
      return this;
    },
    /**
     * Removes the blockers from all items in the collection
     *
     * @attach {qxWeb}
     * @return {qxWeb} The collection for chaining
     */
    unblock : function(){

      if(!this[0]){

        return this;
      };
      this.forEach(qx.module.Blocker.__detachBlocker);
      return this;
    },
    /**
     * Returns all blocker elements as collection.
     *
     * <strong>Note:</strong> This will only return elements if
     * the <code>block</code> method was called at least once,
     * since the blocker elements are created on-demand.
     *
     * @attach {qxWeb}
     * @return {qxWeb} collection with all blocker elements
     */
    getBlocker : function(){

      if(!this[0]){

        return this;
      };
      var collection = qx.module.Blocker.__getBlocker(this);
      return collection;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "block" : statics.block,
      "unblock" : statics.unblock,
      "getBlocker" : statics.getBlocker
    });
  }
});


var exp = envinfo["qx.export"];
if (exp) {
  for (var name in exp) {
    var c = exp[name].split(".");
    var root = window;
    for (var i=0; i < c.length; i++) {
      root = root[c[i]];
    };
    window[name] = root;
  }
}

window["qx"] = undefined;
try {
  delete window.qx;
} catch(e) {}

})();