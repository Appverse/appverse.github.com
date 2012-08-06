Ext.data.JsonP.Ext_data_JsonReader({"tagname":"class","name":"Ext.data.JsonReader","extends":"Ext.data.Reader","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Ed Spencer"]},"private":null,"id":"class-Ext.data.JsonReader","members":{"cfg":[{"name":"idProperty","tagname":"cfg","owner":"Ext.data.Reader","meta":{},"id":"cfg-idProperty"},{"name":"implicitIncludes","tagname":"cfg","owner":"Ext.data.Reader","meta":{},"id":"cfg-implicitIncludes"},{"name":"record","tagname":"cfg","owner":"Ext.data.JsonReader","meta":{},"id":"cfg-record"},{"name":"root","tagname":"cfg","owner":"Ext.data.JsonReader","meta":{},"id":"property-root"},{"name":"successProperty","tagname":"cfg","owner":"Ext.data.Reader","meta":{},"id":"cfg-successProperty"},{"name":"totalProperty","tagname":"cfg","owner":"Ext.data.Reader","meta":{},"id":"cfg-totalProperty"}],"property":[{"name":"createAccessor","tagname":"property","owner":"Ext.data.JsonReader","meta":{"private":true},"id":"property-createAccessor"},{"name":"jsonData","tagname":"property","owner":"Ext.data.JsonReader","meta":{},"id":"property-jsonData"},{"name":"nullResultSet","tagname":"property","owner":"Ext.data.Reader","meta":{"private":true},"id":"property-nullResultSet"},{"name":"rawData","tagname":"property","owner":"Ext.data.Reader","meta":{},"id":"property-rawData"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.data.Reader","meta":{},"id":"method-constructor"},{"name":"buildExtractors","tagname":"method","owner":"Ext.data.JsonReader","meta":{"private":true},"id":"method-buildExtractors"},{"name":"buildFieldExtractors","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-buildFieldExtractors"},{"name":"extractData","tagname":"method","owner":"Ext.data.JsonReader","meta":{"private":true},"id":"method-extractData"},{"name":"extractValues","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-extractValues"},{"name":"getAssociatedDataRoot","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-getAssociatedDataRoot"},{"name":"getData","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-getData"},{"name":"getResponseData","tagname":"method","owner":"Ext.data.JsonReader","meta":{},"id":"method-getResponseData"},{"name":"getRoot","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-getRoot"},{"name":"onMetaChange","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-onMetaChange"},{"name":"read","tagname":"method","owner":"Ext.data.Reader","meta":{},"id":"method-read"},{"name":"readAssociated","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-readAssociated"},{"name":"readRecords","tagname":"method","owner":"Ext.data.JsonReader","meta":{},"id":"method-readRecords"},{"name":"setModel","tagname":"method","owner":"Ext.data.Reader","meta":{"private":true},"id":"method-setModel"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":15895,"files":[{"filename":"sencha-touch-debug-w-comments.js","href":"sencha-touch-debug-w-comments.html#Ext-data-JsonReader"}],"html_meta":{"author":null},"component":false,"superclasses":["Ext.data.Reader"],"subclasses":["Ext.data.ArrayReader"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='docClass'>Ext.data.Reader</a><div class='subclass '><strong>Ext.data.JsonReader</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.data.ArrayReader' rel='Ext.data.ArrayReader' class='docClass'>Ext.data.ArrayReader</a></div><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader' target='_blank'>sencha-touch-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually\nhappens as a result of loading a Store - for example we might create something like this:</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Ext-method-regModel\" rel=\"Ext-method-regModel\" class=\"docClass\">Ext.regModel</a>('User', {\n    fields: ['id', 'name', 'email']\n});\n\nvar store = new <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>({\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json'\n        }\n    }\n});\n</code></pre>\n\n\n\n\n<p>The example above creates a 'User' model. Models are explained in the <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> docs if you're\nnot already familiar with them.</p>\n\n\n\n\n<p>We created the simplest type of JSON Reader possible by simply telling our <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>'s \n<a href=\"#!/api/Ext.data.Proxy\" rel=\"Ext.data.Proxy\" class=\"docClass\">Proxy</a> that we want a JSON Reader. The Store automatically passes the configured model to the\nStore, so it is as if we passed this instead:\n\n<pre><code>reader: {\n    type : 'json',\n    model: 'User'\n}\n</code></pre>\n\n<p>The reader we set up is ready to read data from our server - at the moment it will accept a response like this:</p>\n\n<pre><code>[\n    {\n        \"id\": 1,\n        \"name\": \"Ed Spencer\",\n        \"email\": \"ed@sencha.com\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Abe Elias\",\n        \"email\": \"abe@sencha.com\"\n    }\n]\n</code></pre>\n\n<p><u>Reading other JSON formats</u></p>\n\n<p>If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually\npass JsonReader a couple of configuration options to make it parse your format. For example, we can use the \n<a href=\"#!/api/Ext.data.JsonReader-property-root\" rel=\"Ext.data.JsonReader-property-root\" class=\"docClass\">root</a> configuration to parse data that comes back like this:</p>\n\n<pre><code>{\n    \"users\": [\n       {\n           \"id\": 1,\n           \"name\": \"Ed Spencer\",\n           \"email\": \"ed@sencha.com\"\n       },\n       {\n           \"id\": 2,\n           \"name\": \"Abe Elias\",\n           \"email\": \"abe@sencha.com\"\n       }\n    ]\n}\n</code></pre>\n\n<p>To parse this we just pass in a <a href=\"#!/api/Ext.data.JsonReader-property-root\" rel=\"Ext.data.JsonReader-property-root\" class=\"docClass\">root</a> configuration that matches the 'users' above:</p>\n\n<pre><code>reader: {\n    type: 'json',\n    root: 'users'\n}\n</code></pre>\n\n<p>Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata\naround each record inside a nested structure like this:</p>\n\n<pre><code>{\n    \"total\": 122,\n    \"offset\": 0,\n    \"users\": [\n        {\n            \"id\": \"ed-spencer-1\",\n            \"value\": 1,\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Ed Spencer\",\n                \"email\": \"ed@sencha.com\"\n            }\n        }\n    ]\n}\n</code></pre>\n\n<p>In the case above the record data is nested an additional level inside the \"users\" array as each \"user\" item has\nadditional metadata surrounding it ('id' and 'value' in this case). To parse data out of each \"user\" item in the \nJSON above we need to specify the <a href=\"#!/api/Ext.data.JsonReader-cfg-record\" rel=\"Ext.data.JsonReader-cfg-record\" class=\"docClass\">record</a> configuration like this:</p>\n\n<pre><code>reader: {\n    type  : 'json',\n    root  : 'users',\n    record: 'user'\n}\n</code></pre>\n\n<p><u>Response metadata</u></p>\n\n<p>The server can return additional data in its response, such as the <a href=\"#!/api/Ext.data.JsonReader-cfg-totalProperty\" rel=\"Ext.data.JsonReader-cfg-totalProperty\" class=\"docClass\">total number of records</a> \nand the <a href=\"#!/api/Ext.data.JsonReader-cfg-successProperty\" rel=\"Ext.data.JsonReader-cfg-successProperty\" class=\"docClass\">success status of the response</a>. These are typically included in the JSON response\nlike this:</p>\n\n<pre><code>{\n    \"total\": 100,\n    \"success\": true,\n    \"users\": [\n        {\n            \"id\": 1,\n            \"name\": \"Ed Spencer\",\n            \"email\": \"ed@sencha.com\"\n        }\n    ]\n}\n</code></pre>\n\n<p>If these properties are present in the JSON response they can be parsed out by the JsonReader and used by the\nStore that loaded it. We can set up the names of these properties by specifying a final pair of configuration \noptions:</p>\n\n<pre><code>reader: {\n    type : 'json',\n    root : 'users',\n    totalProperty  : 'total',\n    successProperty: 'success'\n}\n</code></pre>\n\n<p>These final options are not necessary to make the Reader work, but can be useful when the server needs to report\nan error or if it needs to indicate that there is a lot of data available of which only a subset is currently being\nreturned.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-idProperty' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-idProperty' class='name expandable'>idProperty</a><span> : String</span></div><div class='description'><div class='short'>Name of the property within a row object\nthat contains a record identifier value. ...</div><div class='long'><p>Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>id</tt></p>\n<p>Defaults to: <code>'id'</code></p></div></div></div><div id='cfg-implicitIncludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-implicitIncludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-implicitIncludes' class='name expandable'>implicitIncludes</a><span> : Boolean</span></div><div class='description'><div class='short'>True to automatically parse models nested within other models in a response\nobject. ...</div><div class='long'><p>True to automatically parse models nested within other models in a response\nobject. See the <a href=\"#!/api/Ext.data.Reader\" rel=\"Ext.data.Reader\" class=\"docClass\">Ext.data.Reader</a> intro docs for full explanation. Defaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-record' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-record' class='name expandable'>record</a><span> : String</span></div><div class='description'><div class='short'>The optional location within the JSON response that the record data itself can be found at. ...</div><div class='long'><p>The optional location within the JSON response that the record data itself can be found at.\nSee the JsonReader intro docs for more details. This is not often needed and defaults to undefined.</p>\n</div></div></div><div id='property-root' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-property-root' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-property-root' class='name expandable'>root</a><span> : String</span></div><div class='description'><div class='short'>Required. ...</div><div class='long'><p><b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n<p>Defaults to: <code>''</code></p><p>Overrides: <a href='#!/api/Ext.data.Reader-cfg-root' rel='Ext.data.Reader-cfg-root' class='docClass'>Ext.data.Reader.root</a></p></div></div></div><div id='cfg-successProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-successProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-successProperty' class='name expandable'>successProperty</a><span> : String</span></div><div class='description'><div class='short'>Name of the property from which to\nretrieve the success attribute. ...</div><div class='long'><p>Name of the property from which to\nretrieve the success attribute. Defaults to <tt>success</tt>.  See\nExt.data.DataProxy.exception\nfor additional information.</p>\n<p>Defaults to: <code>'success'</code></p></div></div></div><div id='cfg-totalProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-totalProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-totalProperty' class='name expandable'>totalProperty</a><span> : String</span></div><div class='description'><div class='short'>Name of the property from which to\nretrieve the total number of records in the dataset. ...</div><div class='long'><p>Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n<p>Defaults to: <code>'total'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-createAccessor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-property-createAccessor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-property-createAccessor' class='name expandable'>createAccessor</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns an accessor function for the given property string. ...</div><div class='long'><p>Returns an accessor function for the given property string. Gives support for properties such as the following:\n'someProperty'\n'some.property'\n'some[\"property\"]'\nThis is used by buildExtractors to create optimized extractor functions when casting raw data into model instances.</p>\n</div></div></div><div id='property-jsonData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-property-jsonData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-property-jsonData' class='name expandable'>jsonData</a><span> : Mixed</span></div><div class='description'><div class='short'>DEPRECATED - will be removed in Ext JS 5.0. ...</div><div class='long'><p>DEPRECATED - will be removed in Ext JS 5.0. This is just a copy of this.rawData - use that instead</p>\n</div></div></div><div id='property-nullResultSet' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-property-nullResultSet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-property-nullResultSet' class='name expandable'>nullResultSet</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private. ...</div><div class='long'><p>Private. Empty ResultSet to return when response is falsy (null|undefined|empty string)</p>\n</div></div></div><div id='property-rawData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-property-rawData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-property-rawData' class='name expandable'>rawData</a><span> : Mixed</span></div><div class='description'><div class='short'>The raw data object that was last passed to readRecords. ...</div><div class='long'><p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.Reader-method-constructor' class='name expandable'>Ext.data.JsonReader</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildExtractors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-method-buildExtractors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-buildExtractors' class='name expandable'>buildExtractors</a>( <span class='pre'>Boolean force</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>inherit docs\n\nThis builds optimized functions for retrieving record data and meta data from an object. ...</div><div class='long'><p>inherit docs</p>\n\n<p>This builds optimized functions for retrieving record data and meta data from an object.\nSubclasses may need to implement their own getRoot function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>force</span> : Boolean<div class='sub-desc'><p>True to automatically remove existing extractor functions first (defaults to false)</p>\n\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.Reader-method-buildExtractors' rel='Ext.data.Reader-method-buildExtractors' class='docClass'>Ext.data.Reader.buildExtractors</a></p></div></div></div><div id='method-buildFieldExtractors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-buildFieldExtractors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-buildFieldExtractors' class='name expandable'>buildFieldExtractors</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-extractData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-method-extractData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-extractData' class='name expandable'>extractData</a>( <span class='pre'>Object root</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>We're just preparing the data for the superclass by pulling out the record objects we want. ...</div><div class='long'><p>We're just preparing the data for the superclass by pulling out the record objects we want. If a <a href=\"#!/api/Ext.data.JsonReader-cfg-record\" rel=\"Ext.data.JsonReader-cfg-record\" class=\"docClass\">record</a>\nwas specified we have to pull those out of the larger JSON object, which is most of what this function is doing</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>root</span> : Object<div class='sub-desc'><p>The JSON root node</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>The records</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.Reader-method-extractData' rel='Ext.data.Reader-method-extractData' class='docClass'>Ext.data.Reader.extractData</a></p></div></div></div><div id='method-extractValues' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-extractValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-extractValues' class='name expandable'>extractValues</a>( <span class='pre'>Object data</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Given an object representing a single model instance's data, iterates over the model's fields and\nbuilds an object wi...</div><div class='long'><p>Given an object representing a single model instance's data, iterates over the model's fields and\nbuilds an object with the value for each field.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data object to convert</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Data object suitable for use with a model constructor</p>\n</div></li></ul></div></div></div><div id='method-getAssociatedDataRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-getAssociatedDataRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-getAssociatedDataRoot' class='name expandable'>getAssociatedDataRoot</a>( <span class='pre'>Mixed data, String associationName</span> ) : Mixed<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Used internally by readAssociated. ...</div><div class='long'><p>Used internally by <a href=\"#!/api/Ext.data.Reader\" rel=\"Ext.data.Reader\" class=\"docClass\">readAssociated</a>. Given a data object (which could be json, xml etc) for a specific\nrecord, this should return the relevant part of that data for the given association name. This is only really\nneeded to support the XML Reader, which has to do a query to get the associated data object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Mixed<div class='sub-desc'><p>The raw data object</p>\n</div></li><li><span class='pre'>associationName</span> : String<div class='sub-desc'><p>The name of the association to get data for (uses associationKey if present)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The root</p>\n</div></li></ul></div></div></div><div id='method-getData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-getData' class='name expandable'>getData</a>( <span class='pre'>Object data</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>By default this function just returns what is passed to it. ...</div><div class='long'><p>By default this function just returns what is passed to it. It can be overridden in a subclass\nto return something else. See XmlReader for an example.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The normalized data object</p>\n</div></li></ul></div></div></div><div id='method-getResponseData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-method-getResponseData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-getResponseData' class='name expandable'>getResponseData</a>( <span class='pre'>Object response</span> ) : Object</div><div class='description'><div class='short'>inherit docs\n\nTakes a raw response object (as passed to this.read) and returns the useful data segment of it. ...</div><div class='long'><p>inherit docs</p>\n\n<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be implemented by each subclass</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The responce object</p>\n\n\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The useful data from the response</p>\n\n\n\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.Reader-method-getResponseData' rel='Ext.data.Reader-method-getResponseData' class='docClass'>Ext.data.Reader.getResponseData</a></p></div></div></div><div id='method-getRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-getRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-getRoot' class='name expandable'>getRoot</a>( <span class='pre'>Mixed data</span> ) : Mixed<strong class='private signature'>private</strong></div><div class='description'><div class='short'>This will usually need to be implemented in a subclass. ...</div><div class='long'><p>This will usually need to be implemented in a subclass. Given a generic data object (the type depends on the type\nof data we are reading), this function should return the object as configured by the Reader's 'root' meta data config.\nSee XmlReader's getRoot implementation for an example. By default the same data object will simply be returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Mixed<div class='sub-desc'><p>The data object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The same data object</p>\n</div></li></ul></div></div></div><div id='method-onMetaChange' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-onMetaChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-onMetaChange' class='name expandable'>onMetaChange</a>( <span class='pre'>Object meta</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Reconfigures the meta data tied to this Reader ...</div><div class='long'><p>Reconfigures the meta data tied to this Reader</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-read' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-read' class='name expandable'>read</a>( <span class='pre'>Object response</span> ) : <a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></div><div class='description'><div class='short'>Reads the given response object. ...</div><div class='long'><p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the readRecords function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></span><div class='sub-desc'><p>The parsed ResultSet object</p>\n</div></li></ul></div></div></div><div id='method-readAssociated' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-readAssociated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-readAssociated' class='name expandable'>readAssociated</a>( <span class='pre'><a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> record, Mixed data</span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Loads a record's associations from the data object. ...</div><div class='long'><p>Loads a record's associations from the data object. This prepopulates hasMany and belongsTo associations\non the record provided.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><div class='sub-desc'><p>The record to load associations for</p>\n</div></li><li><span class='pre'>data</span> : Mixed<div class='sub-desc'><p>The data object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Return value description</p>\n</div></li></ul></div></div></div><div id='method-readRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonReader-method-readRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-readRecords' class='name expandable'>readRecords</a>( <span class='pre'>Object data</span> ) : <a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></div><div class='description'><div class='short'>Reads a JSON object and returns a ResultSet. ...</div><div class='long'><p>Reads a JSON object and returns a ResultSet. Uses the internal getTotal and getSuccess extractors to\nretrieve meta data from the response, and extractData to turn the JSON data into model instances.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The raw JSON data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></span><div class='sub-desc'><p>A ResultSet containing model instances and meta data about the results</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.Reader-method-readRecords' rel='Ext.data.Reader-method-readRecords' class='docClass'>Ext.data.Reader.readRecords</a></p></div></div></div><div id='method-setModel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='defined-in docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-setModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Reader-method-setModel' class='name expandable'>setModel</a>( <span class='pre'>Object model, Boolean setOnProxy</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Sets a new model for the reader. ...</div><div class='long'><p>Sets a new model for the reader.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'><p>The model to set.</p>\n</div></li><li><span class='pre'>setOnProxy</span> : Boolean<div class='sub-desc'><p>True to also set on the Proxy, if one is configured</p>\n</div></li></ul></div></div></div></div></div></div></div>"});