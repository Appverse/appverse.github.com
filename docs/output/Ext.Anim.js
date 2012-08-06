Ext.data.JsonP.Ext_Anim({"tagname":"class","name":"Ext.Anim","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.Anim","members":{"cfg":[{"name":"autoClear","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-autoClear"},{"name":"before","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-before"},{"name":"delay","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-delay"},{"name":"direction","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-direction"},{"name":"disableAnimations","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-disableAnimations"},{"name":"duration","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-duration"},{"name":"easing","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-easing"},{"name":"from","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-from"},{"name":"out","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-out"},{"name":"reverse","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-reverse"},{"name":"scope","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-scope"},{"name":"to","tagname":"cfg","owner":"Ext.Anim","meta":{},"id":"cfg-to"}],"property":[{"name":"defaultConfig","tagname":"property","owner":"Ext.Anim","meta":{"private":true},"id":"property-defaultConfig"},{"name":"isAnim","tagname":"property","owner":"Ext.Anim","meta":{"private":true},"id":"property-isAnim"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.Anim","meta":{"private":true},"id":"method-constructor"},{"name":"initConfig","tagname":"method","owner":"Ext.Anim","meta":{"private":true},"id":"method-initConfig"},{"name":"onTransitionEnd","tagname":"method","owner":"Ext.Anim","meta":{"private":true},"id":"method-onTransitionEnd"},{"name":"run","tagname":"method","owner":"Ext.Anim","meta":{},"id":"method-run"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":21796,"files":[{"filename":"sencha-touch-debug-w-comments.js","href":"sencha-touch-debug-w-comments.html#Ext-Anim"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim' target='_blank'>sencha-touch-debug-w-comments.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a> is used to excute animations defined in <a href=\"#!/api/Ext.anims\" rel=\"Ext.anims\" class=\"docClass\">Ext.anims</a>. The <a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">run</a> method can take any of the \nproperties defined below.</p>\n\n\n\n\n<h2>Example usage:</h2>\n\n\n<p><code></p>\n\n<pre><a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">Ext.Anim.run</a>(this, 'fade', {\n    out: false,\n    autoClear: true\n});\n</pre>\n\n\n<p></code></p>\n\n<p>Animations are disabled on Android and Blackberry by default using the <a href=\"#!/api/Ext.Anim-cfg-disableAnimations\" rel=\"Ext.Anim-cfg-disableAnimations\" class=\"docClass\">disableAnimations</a> property.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoClear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-autoClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-autoClear' class='name expandable'>autoClear</a><span> : Boolean</span></div><div class='description'><div class='short'>True to remove all custom CSS defined in the to config when the animation is over. ...</div><div class='long'><p>True to remove all custom CSS defined in the <a href=\"#!/api/Ext.Anim-cfg-to\" rel=\"Ext.Anim-cfg-to\" class=\"docClass\">to</a> config when the animation is over.\n(Defaults to true).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-before' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-before' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-before' class='name not-expandable'>before</a><span> : Function</span></div><div class='description'><div class='short'><p>Code to execute before starting the animation.</p>\n</div><div class='long'><p>Code to execute before starting the animation.</p>\n</div></div></div><div id='cfg-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-delay' class='name expandable'>delay</a><span> : Number</span></div><div class='description'><div class='short'>Time to delay before starting the animation. ...</div><div class='long'><p>Time to delay before starting the animation.\n(Defaults to 0).</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-direction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-direction' class='name expandable'>direction</a><span> : String</span></div><div class='description'><div class='short'>Valid values are 'left', 'right', 'up', 'down' and null. ...</div><div class='long'><p>Valid values are 'left', 'right', 'up', 'down' and null.\n(Defaults to null).</p>\n</div></div></div><div id='cfg-disableAnimations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-disableAnimations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-disableAnimations' class='name expandable'>disableAnimations</a><span> : Boolean</span></div><div class='description'><div class='short'>True to disable animations. ...</div><div class='long'><p>True to disable animations. By default, animations are disabled on Android and Blackberry</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-duration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-duration' class='name expandable'>duration</a><span> : Number</span></div><div class='description'><div class='short'>Time in milliseconds for the animation to last. ...</div><div class='long'><p>Time in milliseconds for the animation to last.\n(Defaults to 250).</p>\n<p>Defaults to: <code>250</code></p></div></div></div><div id='cfg-easing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-easing' class='name expandable'>easing</a><span> : String</span></div><div class='description'><div class='short'>Valid values are 'ease', 'linear', ease-in', 'ease-out', 'ease-in-out' or a cubic-bezier curve as defined by CSS. ...</div><div class='long'><p>Valid values are 'ease', 'linear', ease-in', 'ease-out', 'ease-in-out' or a cubic-bezier curve as defined by CSS.\n(Defaults to 'ease-in-out').</p>\n<p>Defaults to: <code>'ease-in-out'</code></p></div></div></div><div id='cfg-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-from' class='name expandable'>from</a><span> : Object</span></div><div class='description'><div class='short'>An object of CSS values which the animation begins with. ...</div><div class='long'><p>An object of CSS values which the animation begins with. If you define a CSS property here, you must also\ndefine it in the <a href=\"#!/api/Ext.Anim-cfg-to\" rel=\"Ext.Anim-cfg-to\" class=\"docClass\">to</a> config.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-out' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-out' class='name expandable'>out</a><span> : Boolean</span></div><div class='description'><div class='short'>True if you want the animation to slide out of the screen. ...</div><div class='long'><p>True if you want the animation to slide out of the screen.\n(Defaults to true).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-reverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-reverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-reverse' class='name expandable'>reverse</a><span> : Boolean</span></div><div class='description'><div class='short'>True to reverse the animation direction. ...</div><div class='long'><p>True to reverse the animation direction. For example, if the animation direction was set to 'left', it would\nthen use 'right'.\n(Defaults to false).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-scope' class='name not-expandable'>scope</a><span> : Scope</span></div><div class='description'><div class='short'><p>Scope to run the before function in.</p>\n</div><div class='long'><p>Scope to run the before function in.</p>\n</div></div></div><div id='cfg-to' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-cfg-to' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-to' class='name expandable'>to</a><span> : Object</span></div><div class='description'><div class='short'>An object of CSS values which the animation ends with. ...</div><div class='long'><p>An object of CSS values which the animation ends with. If you define a CSS property here, you must also\ndefine it in the <a href=\"#!/api/Ext.Anim-cfg-from\" rel=\"Ext.Anim-cfg-from\" class=\"docClass\">from</a> config.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-defaultConfig' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-property-defaultConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-property-defaultConfig' class='name expandable'>defaultConfig</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>disableAnimations: (!Ext.is.iOS || Ext.is.Blackberry) ? true : false, ...</div><div class='long'><p>disableAnimations: (!<a href=\"#!/api/Ext.is-property-iOS\" rel=\"Ext.is-property-iOS\" class=\"docClass\">Ext.is.iOS</a> || <a href=\"#!/api/Ext.is-property-Blackberry\" rel=\"Ext.is-property-Blackberry\" class=\"docClass\">Ext.is.Blackberry</a>) ? true : false,</p>\n<p>Defaults to: <code>{from: {}, to: {}, duration: 250, delay: 0, easing: 'ease-in-out', autoClear: true, out: true, direction: null, reverse: false}</code></p></div></div></div><div id='property-isAnim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-property-isAnim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-property-isAnim' class='name expandable'>isAnim</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Anim-method-constructor' class='name expandable'>Ext.Anim</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'>Object el, Object runConfig</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>runConfig</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onTransitionEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-method-onTransitionEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-method-onTransitionEnd' class='name expandable'>onTransitionEnd</a>( <span class='pre'>Object ev, Object el, Object o</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>o</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-Anim-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-method-run' class='name expandable'>run</a>( <span class='pre'>Ext.Element/Element el, String anim, Object config</span> )</div><div class='description'><div class='short'>Used to run an animation on a specific element. ...</div><div class='long'><p>Used to run an animation on a specific element. Use the config argument to customize the animation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Ext.Element/Element<div class='sub-desc'><p>The element to animate</p>\n</div></li><li><span class='pre'>anim</span> : String<div class='sub-desc'><p>The animation type, defined in Ext.anims</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object for the animation</p>\n</div></li></ul></div></div></div></div></div></div></div>"});