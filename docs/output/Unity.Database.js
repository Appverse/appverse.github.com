Ext.data.JsonP.Unity_Database({"tagname":"class","name":"Unity.Database","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Database","members":{"cfg":[],"property":[{"name":"serviceName","tagname":"property","owner":"Unity.Database","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.Database","meta":{},"id":"method-constructor"},{"name":"","tagname":"method","owner":"Unity.Database","meta":{},"id":"method-"},{"name":"GetDatabaseList","tagname":"method","owner":"Unity.Database","meta":{},"id":"method-GetDatabaseList"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":1108,"files":[{"filename":"unity.js","href":"unity.html#Unity-Database"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Database' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Database interface.</p>\n\n<br>This interface allows to create SQL Databases for use by your application and access them from your application's Javascript.<br>\n\n\n<pre>Usage: <a href=\"#!/api/Unity.Database\" rel=\"Unity.Database\" class=\"docClass\">Unity.Database</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.Database-method-GetDatabaseList\" rel=\"Unity.Database-method-GetDatabaseList\" class=\"docClass\">Unity.Database.GetDatabaseList</a>().</pre>\n\n\n<br> @version 1.0\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Database'>Unity.Database</span><br/><a href='source/unity.html#Unity-Database-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Database-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Database service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Database service name (as configured on Platform Service Locator).</p>\n\n<br> @version 1.0\n\n<p>Defaults to: <code>&quot;db&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Database'>Unity.Database</span><br/><a href='source/unity.html#Unity-Database-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.Database-method-constructor' class='name expandable'>Unity.Database</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Database\" rel=\"Unity.Database\" class=\"docClass\">Unity.Database</a></div><div class='description'><div class='short'>Constructs a new Database interface. ...</div><div class='long'><p>Constructs a new Database interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Database\" rel=\"Unity.Database\" class=\"docClass\">Unity.Database</a></span><div class='sub-desc'><p>A new Database interface.</p>\n</div></li></ul></div></div></div><div id='method-' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Database'>Unity.Database</span><br/><a href='source/unity.html#Unity-Database-method-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Database-method-' class='name expandable'></a>( <span class='pre'><a href=\"#!/api/Unity.Database.Database\" rel=\"Unity.Database.Database\" class=\"docClass\">Unity.Database.Database</a> db, String[] statements, Boolean rollbackFlag</span> ) : Boolean</div><div class='description'><div class='short'>Executes SQL transaction (some statements chain) inside given database.For further information see, Database. ...</div><div class='long'><p>Executes SQL transaction (some statements chain) inside given database.<br/>For further information see, <a href=\"#!/api/Unity.Database.Database\" rel=\"Unity.Database.Database\" class=\"docClass\">Database</a>.</p>\n\n<br> @version 1.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Unity.Database.Database\" rel=\"Unity.Database.Database\" class=\"docClass\">Unity.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by GetDatabase).</p>\n</div></li><li><span class='pre'>statements</span> : String[]<div class='sub-desc'><p>The statements to be executed during transaction (sqlite syntax language)..</p>\n</div></li><li><span class='pre'>rollbackFlag</span> : Boolean<div class='sub-desc'><p>Indicates if rollback should be performed when any statement execution fails.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True on successful transaction execution.</p>\n</div></li></ul></div></div></div><div id='method-GetDatabaseList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Database'>Unity.Database</span><br/><a href='source/unity.html#Unity-Database-method-GetDatabaseList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Database-method-GetDatabaseList' class='name expandable'>GetDatabaseList</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Database.Database\" rel=\"Unity.Database.Database\" class=\"docClass\">Unity.Database.Database</a>[]</div><div class='description'><div class='short'>Gets stored databases.For further information see, Database. ...</div><div class='long'><p>Gets stored databases.<br/>For further information see, <a href=\"#!/api/Unity.Database.Database\" rel=\"Unity.Database.Database\" class=\"docClass\">Database</a>.</p>\n\n<br> @version 1.0\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Database.Database\" rel=\"Unity.Database.Database\" class=\"docClass\">Unity.Database.Database</a>[]</span><div class='sub-desc'><p>List of application Databases.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});