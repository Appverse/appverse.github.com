Ext.data.JsonP.Unity_Telephony({"tagname":"class","name":"Unity.Telephony","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Telephony","members":{"cfg":[],"property":[{"name":"CALLTYPE_DIALUP","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-CALLTYPE_DIALUP"},{"name":"CALLTYPE_FAX","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-CALLTYPE_FAX"},{"name":"CALLTYPE_VOICE","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-CALLTYPE_VOICE"},{"name":"STATUS_BUSY","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-STATUS_BUSY"},{"name":"STATUS_DIALING","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-STATUS_DIALING"},{"name":"STATUS_DROPPED","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-STATUS_DROPPED"},{"name":"STATUS_ESTABLISHED","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-STATUS_ESTABLISHED"},{"name":"STATUS_ESTABLISHING","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-STATUS_ESTABLISHING"},{"name":"STATUS_FAILED","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-STATUS_FAILED"},{"name":"STATUS_FINISHED","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-STATUS_FINISHED"},{"name":"serviceName","tagname":"property","owner":"Unity.Telephony","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.Telephony","meta":{},"id":"method-constructor"},{"name":"Call","tagname":"method","owner":"Unity.Telephony","meta":{},"id":"method-Call"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3326,"files":[{"filename":"unity.js","href":"unity.html#Unity-Telephony"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Telephony' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Telephony interface.</p>\n\n<br>This interface provides access to device's Telephony application.<br>\n\n\n<br> @version 1.0\n\n\n<pre>Usage: <a href=\"#!/api/Unity.Telephony\" rel=\"Unity.Telephony\" class=\"docClass\">Unity.Telephony</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.Telephony-method-Call\" rel=\"Unity.Telephony-method-Call\" class=\"docClass\">Unity.Telephony.Call</a>('3493xxxxxxx',1).</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CALLTYPE_DIALUP' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-CALLTYPE_DIALUP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-CALLTYPE_DIALUP' class='name expandable'>CALLTYPE_DIALUP</a><span> : int</span></div><div class='description'><div class='short'>Dial Up Call Type. ...</div><div class='long'><p>Dial Up Call Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-CALLTYPE_FAX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-CALLTYPE_FAX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-CALLTYPE_FAX' class='name expandable'>CALLTYPE_FAX</a><span> : int</span></div><div class='description'><div class='short'>Fax Call Type. ...</div><div class='long'><p>Fax Call Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-CALLTYPE_VOICE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-CALLTYPE_VOICE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-CALLTYPE_VOICE' class='name expandable'>CALLTYPE_VOICE</a><span> : int</span></div><div class='description'><div class='short'>Voice Call Type. ...</div><div class='long'><p>Voice Call Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-STATUS_BUSY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-STATUS_BUSY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-STATUS_BUSY' class='name expandable'>STATUS_BUSY</a><span> : int</span></div><div class='description'><div class='short'>Busy Call Status. ...</div><div class='long'><p>Busy Call Status.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-STATUS_DIALING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-STATUS_DIALING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-STATUS_DIALING' class='name expandable'>STATUS_DIALING</a><span> : int</span></div><div class='description'><div class='short'>Dialing Call Status. ...</div><div class='long'><p>Dialing Call Status.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-STATUS_DROPPED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-STATUS_DROPPED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-STATUS_DROPPED' class='name expandable'>STATUS_DROPPED</a><span> : int</span></div><div class='description'><div class='short'>Dropped Call Status. ...</div><div class='long'><p>Dropped Call Status.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-STATUS_ESTABLISHED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-STATUS_ESTABLISHED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-STATUS_ESTABLISHED' class='name expandable'>STATUS_ESTABLISHED</a><span> : int</span></div><div class='description'><div class='short'>Established Call Status. ...</div><div class='long'><p>Established Call Status.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-STATUS_ESTABLISHING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-STATUS_ESTABLISHING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-STATUS_ESTABLISHING' class='name expandable'>STATUS_ESTABLISHING</a><span> : int</span></div><div class='description'><div class='short'>Establishing Call Status. ...</div><div class='long'><p>Establishing Call Status.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-STATUS_FAILED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-STATUS_FAILED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-STATUS_FAILED' class='name expandable'>STATUS_FAILED</a><span> : int</span></div><div class='description'><div class='short'>Failed Call Status. ...</div><div class='long'><p>Failed Call Status.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-STATUS_FINISHED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-STATUS_FINISHED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-STATUS_FINISHED' class='name expandable'>STATUS_FINISHED</a><span> : int</span></div><div class='description'><div class='short'>Finished Call Status. ...</div><div class='long'><p>Finished Call Status.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-serviceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Telephony service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Telephony service name (as configured on Platform Service Locator).</p>\n\n<br> @version 1.0\n\n<p>Defaults to: <code>&quot;phone&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.Telephony-method-constructor' class='name expandable'>Unity.Telephony</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Telephony\" rel=\"Unity.Telephony\" class=\"docClass\">Unity.Telephony</a></div><div class='description'><div class='short'>Constructs a new Telephony interface. ...</div><div class='long'><p>Constructs a new Telephony interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Telephony\" rel=\"Unity.Telephony\" class=\"docClass\">Unity.Telephony</a></span><div class='sub-desc'><p>A new Telephony interface.</p>\n</div></li></ul></div></div></div><div id='method-Call' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Telephony'>Unity.Telephony</span><br/><a href='source/unity.html#Unity-Telephony-method-Call' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Telephony-method-Call' class='name expandable'>Call</a>( <span class='pre'>String number, int callType</span> ) : ICallControl</div><div class='description'><div class='short'>Shows and starts a phone call. ...</div><div class='long'><p>Shows and starts a phone call.</p>\n\n<br> @version 1.0\n\n\n<br/>Possible values of the 'callType' argument: \n\n\n<p><a href=\"#!/api/Unity.Telephony-property-CALLTYPE_VOICE\" rel=\"Unity.Telephony-property-CALLTYPE_VOICE\" class=\"docClass\">CALLTYPE_VOICE</a>,\n<a href=\"#!/api/Unity.Telephony-property-CALLTYPE_FAX\" rel=\"Unity.Telephony-property-CALLTYPE_FAX\" class=\"docClass\">CALLTYPE_FAX</a>,\n&amp; <a href=\"#!/api/Unity.Telephony-property-CALLTYPE_DIALUP\" rel=\"Unity.Telephony-property-CALLTYPE_DIALUP\" class=\"docClass\">CALLTYPE_DIALUP</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : String<div class='sub-desc'><p>Phone number to call to.</p>\n</div></li><li><span class='pre'>callType</span> : int<div class='sub-desc'><p>The type of call to open.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ICallControl</span><div class='sub-desc'><p>Call control interface to handle current call.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});