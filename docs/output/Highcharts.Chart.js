Ext.data.JsonP.Highcharts_Chart({"tagname":"class","name":"Highcharts.Chart","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Highcharts.Chart","members":{"cfg":[],"property":[{"name":"","tagname":"property","owner":"Highcharts.Chart","meta":{},"id":"property-"},{"name":"container","tagname":"property","owner":"Highcharts.Chart","meta":{},"id":"property-container"},{"name":"options","tagname":"property","owner":"Highcharts.Chart","meta":{},"id":"property-options"},{"name":"series","tagname":"property","owner":"Highcharts.Chart","meta":{},"id":"property-series"},{"name":"xAxis","tagname":"property","owner":"Highcharts.Chart","meta":{},"id":"property-xAxis"},{"name":"yAxis","tagname":"property","owner":"Highcharts.Chart","meta":{},"id":"property-yAxis"}],"method":[{"name":"","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-"},{"name":"Toolbar","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-Toolbar"},{"name":"defaultFormatter","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-defaultFormatter"},{"name":"drawChartBox","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-drawChartBox"},{"name":"initReflow","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-initReflow"},{"name":"initSeries","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-initSeries"},{"name":"redraw","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-redraw"},{"name":"render","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-render"},{"name":"resetMargins","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-resetMargins"},{"name":"setChartSize","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-setChartSize"},{"name":"setTitle","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-setTitle"},{"name":"zoom","tagname":"method","owner":"Highcharts.Chart","meta":{},"id":"method-zoom"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":9733,"files":[{"filename":"highcharts.sencha.js","href":"highcharts.sencha.html#Highcharts-Chart"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/highcharts.sencha.html#Highcharts-Chart' target='_blank'>highcharts.sencha.js</a></div></pre><div class='doc-contents'><p>The chart class</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-property-' class='name not-expandable'></a><span> : Object</span></div><div class='description'><div class='short'><p>Hide the loading layer</p>\n</div><div class='long'><p>Hide the loading layer</p>\n</div></div></div><div id='property-container' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-property-container' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-property-container' class='name not-expandable'>container</a><span> : Object</span></div><div class='description'><div class='short'><p>A reference to the containing HTML element as given in chart.renderTo.</p>\n</div><div class='long'><p>A reference to the containing HTML element as given in chart.renderTo.</p>\n</div></div></div><div id='property-options' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-property-options' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-property-options' class='name not-expandable'>options</a><span> : Object</span></div><div class='description'><div class='short'><p>The options stucture for the chart.</p>\n</div><div class='long'><p>The options stucture for the chart.</p>\n</div></div></div><div id='property-series' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-property-series' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-property-series' class='name not-expandable'>series</a><span> : Array{Object}</span></div><div class='description'><div class='short'><p>An array of all the chart's series.</p>\n</div><div class='long'><p>An array of all the chart's series.</p>\n</div></div></div><div id='property-xAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-property-xAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-property-xAxis' class='name expandable'>xAxis</a><span> : Array{Object}</span></div><div class='description'><div class='short'>An array of the chart's x axes. ...</div><div class='long'><p>An array of the chart's x axes. If only one x axis, it is referenced by chart.xAxis[0].</p>\n</div></div></div><div id='property-yAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-property-yAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-property-yAxis' class='name expandable'>yAxis</a><span> : Array{Object}</span></div><div class='description'><div class='short'>An array of the chart's y axes. ...</div><div class='long'><p>An array of the chart's y axes. If only one y axis, it is referenced by chart.yAxis[0].</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-' class='name expandable'></a>( <span class='pre'>Object chart, Object options</span> )</div><div class='description'><div class='short'>Create a new axis object ...</div><div class='long'><p>Create a new axis object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>chart</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-Toolbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-Toolbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-Toolbar' class='name expandable'>Toolbar</a>( <span class='pre'>Object chart</span> )</div><div class='description'><div class='short'>The toolbar object ...</div><div class='long'><p>The toolbar object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>chart</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-defaultFormatter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-defaultFormatter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-defaultFormatter' class='name expandable'>defaultFormatter</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>In case no user defined formatter is given, this will be used ...</div><div class='long'><p>In case no user defined formatter is given, this will be used</p>\n</div></div></div><div id='method-drawChartBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-drawChartBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-drawChartBox' class='name expandable'>drawChartBox</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Draw the borders and backgrounds for chart and plot area ...</div><div class='long'><p>Draw the borders and backgrounds for chart and plot area</p>\n</div></div></div><div id='method-initReflow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-initReflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-initReflow' class='name expandable'>initReflow</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Add the event handlers necessary for auto resizing ...</div><div class='long'><p>Add the event handlers necessary for auto resizing</p>\n</div></div></div><div id='method-initSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-initSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-initSeries' class='name expandable'>initSeries</a>( <span class='pre'>Object options</span> )</div><div class='description'><div class='short'>Initialize an individual series, called internally before render time ...</div><div class='long'><p>Initialize an individual series, called internally before render time</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-redraw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-redraw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-redraw' class='name expandable'>redraw</a>( <span class='pre'>Boolean|Object animation</span> )</div><div class='description'><div class='short'>Redraw legend, axes or series based on updated data ...</div><div class='long'><p>Redraw legend, axes or series based on updated data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>animation</span> : Boolean|Object<div class='sub-desc'><p>Whether to apply animation, and optionally animation configuration</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-render' class='name expandable'>render</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Render all graphics for the chart ...</div><div class='long'><p>Render all graphics for the chart</p>\n</div></div></div><div id='method-resetMargins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-resetMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-resetMargins' class='name expandable'>resetMargins</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Initial margins before auto size margins are applied ...</div><div class='long'><p>Initial margins before auto size margins are applied</p>\n</div></div></div><div id='method-setChartSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-setChartSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-setChartSize' class='name expandable'>setChartSize</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Set the public chart properties. ...</div><div class='long'><p>Set the public chart properties. This is done before and after the pre-render\nto determine margin sizes</p>\n</div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-setTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>Object titleOptions, Object subtitleOptions</span> )</div><div class='description'><div class='short'>Show the title and subtitle of the chart ...</div><div class='long'><p>Show the title and subtitle of the chart</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>titleOptions</span> : Object<div class='sub-desc'><p>{Object} New title options</p>\n</div></li><li><span class='pre'>subtitleOptions</span> : Object<div class='sub-desc'><p>{Object} New subtitle options</p>\n</div></li></ul></div></div></div><div id='method-zoom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Highcharts.Chart'>Highcharts.Chart</span><br/><a href='source/highcharts.sencha.html#Highcharts-Chart-method-zoom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Highcharts.Chart-method-zoom' class='name expandable'>zoom</a>( <span class='pre'>Object event</span> )</div><div class='description'><div class='short'>Zoom into a given portion of the chart given by axis coordinates ...</div><div class='long'><p>Zoom into a given portion of the chart given by axis coordinates</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});