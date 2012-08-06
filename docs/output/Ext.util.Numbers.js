Ext.data.JsonP.Ext_util_Numbers({"tagname":"class","name":"Ext.util.Numbers","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.util.Numbers","members":{"cfg":[],"property":[{"name":"toFixedBroken","tagname":"property","owner":"Ext.util.Numbers","meta":{"private":true},"id":"property-toFixedBroken"}],"method":[{"name":"constrain","tagname":"method","owner":"Ext.util.Numbers","meta":{},"id":"method-constrain"},{"name":"toFixed","tagname":"method","owner":"Ext.util.Numbers","meta":{},"id":"method-toFixed"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5230,"files":[{"filename":"sencha-touch-debug-w-comments.js","href":"sencha-touch-debug-w-comments.html#Ext-util-Numbers"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Numbers' target='_blank'>sencha-touch-debug-w-comments.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-toFixedBroken' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Numbers'>Ext.util.Numbers</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Numbers-property-toFixedBroken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Numbers-property-toFixedBroken' class='name not-expandable'>toFixedBroken</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>detect toFixed implementation bug in IE</p>\n</div><div class='long'><p>detect toFixed implementation bug in IE</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constrain' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Numbers'>Ext.util.Numbers</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Numbers-method-constrain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Numbers-method-constrain' class='name expandable'>constrain</a>( <span class='pre'>Number number, Number min, Number max</span> ) : Number</div><div class='description'><div class='short'>Checks whether or not the current number is within a desired range. ...</div><div class='long'><p>Checks whether or not the current number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded.  Note that this method returns the constrained value but does not change the current number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : Number<div class='sub-desc'><p>The number to check</p>\n</div></li><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>The minimum number in the range</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>The maximum number in the range</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The constrained value if outside the range, otherwise the current value</p>\n</div></li></ul></div></div></div><div id='method-toFixed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Numbers'>Ext.util.Numbers</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Numbers-method-toFixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Numbers-method-toFixed' class='name expandable'>toFixed</a>( <span class='pre'>Number value, Number precision</span> )</div><div class='description'><div class='short'>Formats a number using fixed-point notation ...</div><div class='long'><p>Formats a number using fixed-point notation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The number to format</p>\n</div></li><li><span class='pre'>precision</span> : Number<div class='sub-desc'><p>The number of digits to show after the decimal point</p>\n</div></li></ul></div></div></div></div></div></div></div>"});