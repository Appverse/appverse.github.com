Ext.data.JsonP.Ext_layout_AutoContainerLayout({"tagname":"class","name":"Ext.layout.AutoContainerLayout","extends":"Ext.layout.ContainerLayout","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.layout.AutoContainerLayout","members":{"cfg":[{"name":"itemCls","tagname":"cfg","owner":"Ext.layout.ContainerLayout","meta":{},"id":"cfg-itemCls"}],"property":[{"name":"initialized","tagname":"property","owner":"Ext.layout.Layout","meta":{"private":true},"id":"property-initialized"},{"name":"isLayout","tagname":"property","owner":"Ext.layout.Layout","meta":{"private":true},"id":"property-isLayout"},{"name":"type","tagname":"property","owner":"Ext.layout.AutoContainerLayout","meta":{"private":true},"id":"property-type"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-constructor"},{"name":"afterLayout","tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{"private":true},"id":"method-afterLayout"},{"name":"afterRemove","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-afterRemove"},{"name":"beforeLayout","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-beforeLayout"},{"name":"configureItem","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-configureItem"},{"name":"destroy","tagname":"method","owner":"Ext.layout.Layout","meta":{"protected":true,"private":true},"id":"method-destroy"},{"name":"getLayoutItems","tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{},"id":"method-getLayoutItems"},{"name":"getTarget","tagname":"method","owner":"Ext.layout.ContainerLayout","meta":{},"id":"method-getTarget"},{"name":"initLayout","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-initLayout"},{"name":"isValidParent","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-isValidParent"},{"name":"layout","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-layout"},{"name":"moveItem","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-moveItem"},{"name":"onDestroy","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-onDestroy"},{"name":"onLayout","tagname":"method","owner":"Ext.layout.AutoContainerLayout","meta":{"private":true},"id":"method-onLayout"},{"name":"onRemove","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-onRemove"},{"name":"renderItem","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-renderItem"},{"name":"renderItems","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-renderItems"},{"name":"setOwner","tagname":"method","owner":"Ext.layout.Layout","meta":{"private":true},"id":"method-setOwner"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":44292,"files":[{"filename":"sencha-touch-debug-w-comments.js","href":"sencha-touch-debug-w-comments.html#Ext-layout-AutoContainerLayout"}],"html_meta":{},"component":false,"superclasses":["Ext.layout.Layout","Ext.layout.ContainerLayout"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='docClass'>Ext.layout.Layout</a><div class='subclass '><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><strong>Ext.layout.AutoContainerLayout</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-AutoContainerLayout' target='_blank'>sencha-touch-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>The AutoLayout is the default layout manager delegated by <a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Ext.Container</a> to\nrender any child Components when no <tt><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">layout</a></tt> is configured into\na <tt><a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Container</a>.</tt>.  AutoLayout provides only a passthrough of any layout calls\nto any child containers.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-itemCls' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-ContainerLayout-cfg-itemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-itemCls' class='name expandable'>itemCls</a><span> : String</span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.ctCls also.</p>\n\n\n<p></p></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-initialized' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-property-initialized' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-initialized' class='name expandable'>initialized</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-isLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-property-isLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-property-isLayout' class='name expandable'>isLayout</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AutoContainerLayout'>Ext.layout.AutoContainerLayout</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-AutoContainerLayout-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AutoContainerLayout-property-type' class='name expandable'>type</a><span> : String</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'autocontainer'</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-property-type' rel='Ext.layout.ContainerLayout-property-type' class='docClass'>Ext.layout.ContainerLayout.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.Layout-method-constructor' class='name expandable'>Ext.layout.AutoContainerLayout</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-ContainerLayout-method-afterLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-afterLayout' class='name expandable'>afterLayout</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.layout.Layout-method-afterLayout' rel='Ext.layout.Layout-method-afterLayout' class='docClass'>Ext.layout.Layout.afterLayout</a></p></div></div></div><div id='method-afterRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-afterRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-afterRemove' class='name expandable'>afterRemove</a>( <span class='pre'>Object item</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Removes itemCls ...</div><div class='long'><p>Removes itemCls</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beforeLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-beforeLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-beforeLayout' class='name expandable'>beforeLayout</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>Object item, Object position</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Applies itemCls ...</div><div class='long'><p>Applies itemCls</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Destroys this layout. ...</div><div class='long'><p>Destroys this layout. This is a template method that is empty by default, but should be implemented\nby subclasses that require explicit destruction to purge event handlers or remove DOM nodes.</p>\n</div></div></div><div id='method-getLayoutItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-ContainerLayout-method-getLayoutItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getLayoutItems' class='name expandable'>getLayoutItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Returns an array of child components. ...</div><div class='long'><p>Returns an array of child components.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>of child components</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.Layout-method-getLayoutItems' rel='Ext.layout.Layout-method-getLayoutItems' class='docClass'>Ext.layout.Layout.getLayoutItems</a></p></div></div></div><div id='method-getTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-ContainerLayout-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Returns the owner component's resize element. ...</div><div class='long'><p>Returns the owner component's resize element.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-initLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-initLayout' class='name expandable'>initLayout</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Adds the layout's targetCls if necessary and sets\ninitialized flag when complete. ...</div><div class='long'><p>Adds the layout's targetCls if necessary and sets\ninitialized flag when complete.</p>\n</div></div></div><div id='method-isValidParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-isValidParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-isValidParent' class='name expandable'>isValidParent</a>( <span class='pre'>Object item, Object target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Validates item is in the proper place in the dom. ...</div><div class='long'><ul>\n<li>Validates item is in the proper place in the dom.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-layout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-layout' class='name expandable'>layout</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-moveItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-moveItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-moveItem' class='name expandable'>moveItem</a>( <span class='pre'>Object item, Object position, Object target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Moved Component to the provided target instead. ...</div><div class='long'><p>Moved Component to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onDestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-onDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-onDestroy' class='name expandable'>onDestroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AutoContainerLayout'>Ext.layout.AutoContainerLayout</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-AutoContainerLayout-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AutoContainerLayout-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>Object owner, Object target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.Layout-method-onLayout' rel='Ext.layout.Layout-method-onLayout' class='docClass'>Ext.layout.Layout.onLayout</a></p></div></div></div><div id='method-onRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-renderItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> c, Number position, <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Renders the given Component into the target Element. ...</div><div class='long'><p>Renders the given Component into the target Element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n</div></li><li><span class='pre'>position</span> : Number<div class='sub-desc'><p>The position within the target to render the item to</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n</div></li></ul></div></div></div><div id='method-renderItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-renderItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-renderItems' class='name expandable'>renderItems</a>( <span class='pre'>Object items, Object target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Iterates over all passed items, ensuring they are rendered. ...</div><div class='long'><p>Iterates over all passed items, ensuring they are rendered.  If the items are already rendered,\nalso determines if the items are in the proper place dom.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOwner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='defined-in docClass'>Ext.layout.Layout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-Layout-method-setOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.Layout-method-setOwner' class='name expandable'>setOwner</a>( <span class='pre'>Object owner</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Sets the layout owner ...</div><div class='long'><p>Sets the layout owner</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});