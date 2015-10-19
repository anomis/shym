/*
    JQDesktop
    =========

    JQDesktop jQuery plugin

    Copyright (C) 2013  ilyes kooli

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, version 3.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/gpl.html>
 */

(function(b,g,a){function c(){f=g[l](function(){d.each(function(){var a=b(this),d=a.width(),c=a.height(),e=b.data(this,j);if(d!==e.w||c!==e.h)a.trigger(h,[e.w=d,e.h=c])});c()},e[i])}var d=b([]),e=b.resize=b.extend(b.resize,{}),f,l="setTimeout",h="resize",j=h+"-special-event",i="delay";e[i]=250;e.throttleWindow=!0;b.event.special[h]={setup:function(){if(!e.throttleWindow&&this[l])return!1;var a=b(this);d=d.add(a);b.data(this,j,{w:a.width(),h:a.height()});1===d.length&&c()},teardown:function(){if(!e.throttleWindow&& this[l])return!1;var a=b(this);d=d.not(a);a.removeData(j);d.length||clearTimeout(f)},add:function(d){function c(d,e,g){var l=b(this),h=b.data(this,j);h.w=e!==a?e:l.width();h.h=g!==a?g:l.height();f.apply(this,arguments)}if(!e.throttleWindow&&this[l])return!1;var f;if(b.isFunction(d))return f=d,c;f=d.handler;d.handler=c}}})(jQuery,this);(function(b){b.jqDesktop={version:"1.0"};var g={_init:function(a){0==b("head#desktopcss").length&&b("head").append('<style type="text/css"> .jqdesktop-window-titlebar-buttons button{width:24px;height:22px;}\n .jqdesktop-taskbar-container{cursor:default;margin-right:2px;max-width:250px;}\n .jqdesktop-taskbar-container,.jqdesktop-taskbar-icon,.jqdesktop-taskbar-label{float:left}\n .jqdesktop-taskbar-label{padding-left: 8px;padding-right: 4px;padding-top: 5px;}\n .jqdesktop-icon-container{position: relative;padding: 10px;padding-top: 10px;float:left;}\n .jqdesktop-icon-shadow{width:100%; height:100%;border-radius: 8px 8px 8px 8px;padding:4px;}\n .jqdesktop-icon{margin-top: -105%;cursor: default;width:100%;height:100%;padding:2px;}\n .jqdesktop-icon-image{width:100%;margin-left: 0%;}\n .jqdesktop-icon-label{margin-top: 5px;text-align: center;background: none;border: none;width:120%;margin-left: -10%; color:#FFF;}\n .jqdesktop-icon-selected{border: #ffffff solid thin;}\n </style>'); var c=b.extend({},b.jqDesktop.defaults,a);return this.each(function(){var a=b(this);if(!a.data("jqDesktopDesktop")){var e=b('<div class="jqdesktop-taskbar north ui-widget-content" style="height:'+c.taskBarHeight+'px">taskbar</div>').jqTaskBar({desktop:a});e.sortable({revert:!0});var f=b('<div class="jqdesktop-content center ui-widget-content"></div>').css(c.contentCss),g=b('<div class="jqdesktop-statusbar south ui-widget-content" style="height:'+c.statusBarHeight+'px">statusbar</div>');a.html("").append(e).append(f).append(g); a.data("jqDesktopDesktop",{taskBar:e,content:f,statusBar:g,settings:c,_windows:[]});a.addClass("ui-widget-content");a.jqLayout()}})},addWindow:function(a){if(!a)throw"jqDesktop.addWindow() requires valid jqWindow instance";this.each(function(){var c=b(this);a.each(function(){var a=b(this);if(!a.data("jqDesktopWindow"))throw"jqDesktop.addWindow() requires valid jqWindow instance";var e=c.data("jqDesktopDesktop");if(!(-1<b.inArray(a,e._windows))){e._windows.push(a);b(e.content).append(a);var f=a.data("jqDesktopWindow").settings; f.showInTaskBar&&e.taskBar.jqTaskBar("addWindow",a);b.extend(!0,a.data("jqDesktopWindow"),{desktop:c});c.jqDesktop("activateWindow",a);b(e.content).append(b.jqIcon({window:a,label:f.title,icon:f.icon,width:e.settings.iconWidth,height:e.settings.iconHeight}));a.trigger("windowAdded")}})})},activateWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("activateWindow",a)})})},minimizeWindow:function(a){this.each(function(){var c= b(this);a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("minimizeWindow",a)})})},unminimizeWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("unminimizeWindow",a)})})},maximizeWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("maximizeWindow",a)})})},restoreWindow:function(a){this.each(function(){var c=b(this); a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("restoreWindow",a)})})},closeWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("closeWindow",a)})})},hideWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("hideWindow",a)})})},disposeWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this); c.data("jqDesktopDesktop").taskBar.jqTaskBar("disposeWindow",a)})})},showWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this);c.data("jqDesktopDesktop").taskBar.jqTaskBar("showWindow",a)})})}};b.fn.jqDesktop=function(a){return g[a]?g[a].apply(this,Array.prototype.slice.call(arguments,1)):g._init.apply(this,arguments)};b.jqDesktop.defaults={taskBarHeight:30,statusBarHeight:30,showTaskBar:!0,contentCss:{},iconWidth:100,iconHeight:100}})(jQuery);(function(b){b.jqIcon={version:"1.0"};var g={init:function(a){var a=b.extend({},b.jqIcon.defaults,a),c=b('<div class="jqdesktop-icon-container" id="jqicon-'+a.window.attr("id")+'" style="outline:none;width:'+a.width+"px; height:"+a.height+'px;" tabindex="'+ ++b.jqIcon.tabIndex+'"></div>').data("jqDesktopIcon",a),d=b('<div class="jqdesktop-icon-shadow"></div>'),e=b('<div class="jqdesktop-icon"></div>'),f=b('<div class="jqdesktop-icon-image"><img src="'+a.icon+'" width="100%" /></div>'),g=b('<div class="jqdesktop-icon-label ui-widget-header">'+ a.label+"</div>");c.append(d).append(e.append(f).append(g));c.draggable({containment:"parent",snap:!0,opacity:0.8,grid:[a.width+20,a.height+20],stack:".jqdesktop-icon-container"});c.bind("mousedown",function(){b(this).focus()});c.bind("dblclick",function(){var a=b(this).data("jqDesktopIcon").window;a.data("jqDesktopWindow").status.minimized?a.jqWindow("unminimize"):a.jqWindow("show")});c.bind("focus",function(){b(this).parent().find(".jqdesktop-icon-shadow").css("opacity",0.2).css("border","none"); b(this).find(".jqdesktop-icon-shadow").css("opacity",0.4).css("border","solid white thin")});c.bind("keyup",function(a){switch(a.keyCode){case 13:b(this).trigger("dblclick");break;case 37:case 38:b('.jqdesktop-icon-container[tabindex="'+(b(this).prop("tabindex")-1)+'"]').focus();break;case 39:case 40:b('.jqdesktop-icon-container[tabindex="'+(b(this).prop("tabindex")+1)+'"]').focus()}});return c}};b.jqIcon=function(a){return g[a]?g[a].apply(this,Array.prototype.slice.call(arguments,1)):g.init.apply(this, arguments)};b.jqIcon.defaults={label:"New Icon",icon:"",width:100,height:100,jqWindow:null};b.jqIcon.tabIndex=0})(jQuery);(function(b){b.jqLayout={version:"1.0"};var g={init:function(a){return this.each(function(){var c=b(this);if(!c.data("jqLayout")){var d=b.extend({},b.jqLayout.defaults,a);c.data("jqLayout",{settings:d});"BORDERLAYOUT"==d.layout.toUpperCase()&&(c.jqLayout("borderLayout"),c.bind("resize",function(){c.jqLayout("borderLayout")}))}})},borderLayout:function(){return this.each(function(){var a=b(this),c=a.data("jqLayout").settings;a.children().css("position","absolute");var d=a.children(".north"),e=a.children(".center"), f=a.children(".east"),g=a.children(".west"),h=a.children(".south");if(0==e.length)throw"At least a center panel should be available to use border Layout";d.data("layoutHeight",b.jqLayout.OriginalHeight(d));h.data("layoutHeight",b.jqLayout.OriginalHeight(h));f.data("layoutWidth",b.jqLayout.OriginalWidth(f));g.data("layoutWidth",b.jqLayout.OriginalWidth(g));var j=a.height(),a=a.width(),i=0,o=0,k=0,m=0,n=0;d.length&&(i=0<d.data("layoutHeight")?d.data("layoutHeight"):0.01*parseInt(c.northHeight)*j);h.length&& (o=0<h.data("layoutHeight")?h.data("layoutHeight"):0.01*parseInt(c.southHeight)*j);f.length&&(m=0<f.data("layoutWidth")?f.data("layoutWidth"):0.01*parseInt(c.eastWidth)*a);g.length&&(n=0<g.data("layoutWidth")?g.data("layoutWidth"):0.01*parseInt(c.westWidth)*a);k=j-o-i;d.css({top:0,left:0,width:a,height:i});e.css({top:i+c.vgap,left:n+c.hgap,width:a-n-m-2*c.hgap,height:k-2*c.vgap});h.css({top:i+k,left:0,width:a,height:o});g.css({top:i+c.vgap,left:0,width:n,height:k-2*c.vgap});f.css({top:i+c.vgap,left:a- m,width:m,height:k-2*c.vgap})})},disable:function(){return this.each(function(){b(this).unbind("resize")})},enable:function(){return this.each(function(){b(this).jqLayout("borderLayout");b(this).bind("resize",function(){b(this).jqLayout("borderLayout")})})}};b.fn.jqLayout=function(a){return g[a]?g[a].apply(this,Array.prototype.slice.call(arguments,1)):g.init.apply(this,arguments)};b.jqLayout.defaults={layout:"BorderLayout",northHeight:"10%",southHeight:"10%",eastWidth:"20%",westWidth:"20%",hgap:1, vgap:1};b.jqLayout.OriginalHeight=function(a){var c=0;if(0<a.children().length){var d=b("<div></div>");d.append(a.children());c=a.height();a.append(d.children())}else d=a.html(),a.html(""),c=a.height(),a.html(d);return c};b.jqLayout.OriginalWidth=function(a){var c=0;if(0<a.children().length){var d=b("<div></div>");d.append(a.children());c=a.width();a.append(d.children())}else d=a.html(),a.html(""),c=a.width(),a.html(d);return c}})(jQuery);(function(b){b.jqTaskBar={version:"1.0"};var g={init:function(a){return this.each(function(){var c=b(this);c.data("jqDesktopTaskbar")||(c.html(""),c.data("jqDesktopTaskBar",b.extend({},a,{settings:{_windows:[]}})))})},addWindow:function(a){return this.each(function(){var c=b(this);a.each(function(){var a=b(this);if(!(-1<b.inArray(a,c.data("jqDesktopTaskBar").settings._windows))){c.data("jqDesktopTaskBar").settings._windows.push(a);var e=a.data("jqDesktopWindow").settings,a=b('<div class="jqdesktop-taskbar-container ui-widget-header" id="jqtaskbar-'+ e.id+'" style="display:none"></div>').data("jqWindow",a).jqTaskBar(),f=b('<div class="jqdesktop-taskbar-icon" style="width:'+b.jqTaskBar.settings.iconWidth+"px;height:"+b.jqTaskBar.settings.iconHeight+'px"><img src="'+e.icon+'" width="100%" height="100%"/></div>'),e=b('<div class="jqdesktop-taskbar-label">'+e.title+"</div>");c.append(a.append(f,e));a.jqTaskBar("_events");c.jqTaskBar("_repaint")}})})},_repaint:function(){},_events:function(){this.each(function(){var a=b(this);a.hover(function(){b(this).addClass("ui-state-hover")}, function(){b(this).removeClass("ui-state-hover")});a.click(function(){var c=b(this).data("jqWindow"),d=c.data("jqDesktopWindow").status;3;d.active?d.minimized?a.parent().jqTaskBar("unminimizeWindow",c):a.parent().jqTaskBar("minimizeWindow",c):d.minimized?a.parent().jqTaskBar("unminimizeWindow",c):a.parent().jqTaskBar("activateWindow",c)})})},getForegroundWindow:function(){var a=b(this).data("jqDesktopTaskBar").desktop,c=0,d=null;b.map(a.find(".jqdesktop-window-container:visible"),function(a){var f= parseInt(b(a).css("z-index"))||0;f>c&&(c=f,d=b(a))});return d},activateWindow:function(a){this.each(function(){b(this).find(".jqdesktop-taskbar-container").removeClass("ui-state-active");a&&a.each(function(){var a=b(this),d=a.data("jqDesktopWindow");b("#jqtaskbar-"+d.settings.id).addClass("ui-state-active");if(!d.status.active){a.css("z-index",++b.jqWindow.status.zIndex);var d=d.desktop.data("jqDesktopDesktop")._windows,e;for(e in d)b.extend(!0,d[e].data("jqDesktopWindow"),{status:{active:!1}}),d[e].find(".jqdesktop-window-titlebar").removeClass("ui-state-focus"); b.extend(!0,a.data("jqDesktopWindow"),{status:{active:!0}});a.find(".jqdesktop-window-titlebar").addClass("ui-state-focus");a.trigger("windowActivated")}})})},minimizeWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this),e=a.data("jqDesktopWindow").settings,f=b("#jqtaskbar-"+e.id);b.extend(!0,a.data("jqDesktopWindow"),{status:{positionMinimize:{top:a.position().top,left:a.position().left,width:a.width(),height:a.height()},minimized:!0}});e.animated?(a.jqLayout("disable"), a.animate({top:f.position().top,left:f.position().left,width:f.width(),height:f.height()},{duration:e.animationSpeed,step:function(){a.jqLayout("borderLayout")},complete:function(){a.hide();a.jqLayout("enable");c.jqTaskBar("activateWindow",c.jqTaskBar("getForegroundWindow"))}})):(a.hide(),c.jqTaskBar("activateWindow",c.jqTaskBar("getForegroundWindow")))})})},unminimizeWindow:function(a){this.each(function(){var c=b(this);a.each(function(){var a=b(this),e=a.data("jqDesktopWindow"),f=e.settings;b.extend(!0, a.data("jqDesktopWindow"),{status:{minimized:!1}});e=e.status.positionMinimize;f.animated?(a.jqLayout("disable"),a.show(),a.animate(e,{duration:f.animationSpeed,step:function(){a.jqLayout("borderLayout")},complete:function(){a.show();a.jqLayout("enable")}})):(a.css(e),a.show());c.jqTaskBar("activateWindow",a)})})},maximizeWindow:function(a){this.each(function(){a.each(function(){var a=b(this),d=a.data("jqDesktopWindow"),e=d.desktop.data("jqDesktopDesktop").content;b.extend(!0,a.data("jqDesktopWindow"), {status:{positionMaximize:{top:a.position().top,left:a.position().left,width:a.width(),height:a.height()},maximized:!0}});e={top:0,left:0,width:e.innerWidth()-1,height:e.innerHeight()-1};d.settings.animated?(a.jqLayout("disable"),a.animate(e,{duration:d.settings.animationSpeed,step:function(){a.jqLayout("borderLayout")},complete:function(){a.jqLayout("enable");a.draggable("destroy");a.resizable("destroy")}})):a.css(e).trigger("resize")})})},restoreWindow:function(a){this.each(function(){var c=b(this); a.each(function(){var a=b(this),e=a.data("jqDesktopWindow"),f=e.settings;b.extend(!0,a.data("jqDesktopWindow"),{status:{maximized:!1}});e=e.status.positionMaximize;f.animated?(a.jqLayout("disable"),a.show(),a.animate(e,{duration:f.animationSpeed,step:function(){a.jqLayout("borderLayout")},complete:function(){a.show();a.jqLayout("enable");a.jqWindow("_repaint")}})):a.css(e).trigger("resize");c.jqTaskBar("activateWindow",a)})})},closeWindow:function(a){this.each(function(){b(this);a.each(function(){var a= b(this),d=a.data("jqDesktopWindow").settings,d=b.jqWindow[d.defaultCloseOperation]||2;a.trigger("windowclosing");d!=b.jqWindow.DO_NOTHING_ON_CLOSE&&(d==b.jqWindow.HIDE_ON_CLOSE&&a.jqWindow("hide"),d==b.jqWindow.DISPOSE_ON_CLOSE&&a.jqWindow("dispose"))})})},hideWindow:function(a){this.each(function(){b(this);a.each(function(){b("#jqtaskbar-"+b(this).attr("id")).hide()})})},disposeWindow:function(a){this.each(function(){a.each(function(){b("#jqtaskbar-"+b(this).attr("id")).remove()})})},showWindow:function(a){this.each(function(){b(this); a.each(function(){b("#jqtaskbar-"+b(this).attr("id")).show()})})}};b.fn.jqTaskBar=function(a){return g[a]?g[a].apply(this,Array.prototype.slice.call(arguments,1)):g.init.apply(this,arguments)};b.jqTaskBar.settings={iconWidth:24,iconHeight:24}})(jQuery);(function(b){b.jqWindow={version:"1.0"};var g={_init:function(a){return this.map(function(){var c=b(this),d=b.extend({},b.jqWindow.defaults,a);if(c.data("jqDesktopWindow"))return c;var e="jqwindow-"+b.now();d.id=e;""==d.title&&""!=c.prop("title")&&(d.title=c.attr("title"));var e=b('<div class="jqdesktop-window-container ui-widget-content" id="'+e+'" style="display:none"></div>').css({position:"absolute"}),f=b('<div class="jqdesktop-window-content center" style="overflow:hidden"></div>'),g=b('<div class="jqdesktop-window-titlebar ui-widget-header north" style="height:24px"></div>').css({cursor:"move"}), h=b('<div class="jqdesktop-window-titlebar-icon" style="width:24px; float:left"><img width="100%" height="100%" src="'+d.icon+'"/></div>'),j=b('<div class="jqdesktop-window-titlebar-label" style="float:left; padding-top:6px; padding-left:6px"></div>'),i=b('<div class="jqdesktop-window-titlebar-buttons" style="float:right"></div>'),o=b('<button class="jqdesktop-window-titlebar-button-close"></button>').button({icons:{primary:"ui-icon-closethick"},text:!1}),k=b('<button class="jqdesktop-window-titlebar-button-maximize"></button>').button({icons:{primary:"ui-icon-extlink"}, text:!1}),m=b('<button class="jqdesktop-window-titlebar-button-restore"></button>').button({icons:{primary:"ui-icon-newwin"},text:!1}),n=b('<button class="jqdesktop-window-titlebar-button-minimize"></button>').button({icons:{primary:"ui-icon-minusthick"},text:!1});e.append(g.append(h,j,i.append(n,k,m,o))).append(f);e.css({width:d.width+"px",height:d.height+"px"});e.data("jqDesktopWindow",{components:{windowContainer:e,windowContent:f,windowTitleBar:g,titleBarIcon:h,titleBarLabel:j,titleBarButtonsContainer:i, buttonClose:o,buttonMaximize:k,buttonRestore:m,buttonMinimize:n},settings:d,status:{opened:!1}});b(this).replaceWith(e);f.append(c);e.jqLayout();e.jqWindow("_repaint");e.jqWindow("_events");return e})},_repaint:function(){this.each(function(){var a=b(this).data("jqDesktopWindow"),c=a.status,d=a.components,e=d.windowContainer,f=d.windowTitleBar,a=a.settings;d.titleBarLabel.text(a.title);d.titleBarButtonsContainer.find("button").hide();a.closable&&d.buttonClose.show();a.maximizable&&d.buttonMaximize.show(); a.minimizable&&d.buttonMinimize.show();c.maximized&&(d.buttonRestore.show(),d.buttonMaximize.hide());a.movable&&e.draggable({handle:f,stack:".jqdesktop-window-container",opacity:0.9,containment:"parent"});c=d.titleBarIcon.outerWidth()+d.titleBarLabel.outerWidth()+d.titleBarButtonsContainer.outerWidth()+3;a.resizable&&e.resizable({containment:"parent",minHeight:100,minWidth:c})})},_events:function(){this.each(function(){var a=b(this),c=a.data("jqDesktopWindow"),d=c.components,e=d.windowContainer;e.bind("dragstop", function(){b.jqWindow.status.zIndex=b(this).css("z-index")});e.bind("mousedown",function(){c.desktop.jqDesktop("activateWindow",b(this))});d.buttonClose.click(function(){a.jqWindow("close")});d.buttonMinimize.click(function(){a.jqWindow("minimize")});d.buttonMaximize.click(function(){a.jqWindow("maximize");d.buttonMaximize.hide();d.buttonRestore.show()});d.windowTitleBar.bind("dblclick",function(){d.buttonMaximize.is(":visible")?d.buttonMaximize.click():d.buttonRestore.is(":visible")&&d.buttonRestore.click()}); d.buttonRestore.click(function(){a.jqWindow("restore");d.buttonRestore.hide();d.buttonMaximize.show()});e.bind("windowActivated",function(){a.jqWindow("_repaint")});e.bind("windowAdded",function(){c.settings.maximized&&d.buttonMaximize.click();c.status.opened||c.settings.visible&&a.jqWindow("show")})})},minimize:function(){this.each(function(){var a=b(this),c=a.data("jqDesktopWindow");c.desktop&&c.desktop.jqDesktop("minimizeWindow",a)})},unminimize:function(){this.each(function(){var a=b(this),c= a.data("jqDesktopWindow");c.desktop&&c.desktop.jqDesktop("unminimizeWindow",a)})},maximize:function(){this.each(function(){var a=b(this),c=a.data("jqDesktopWindow");c.desktop&&c.desktop.jqDesktop("maximizeWindow",a)})},restore:function(){this.each(function(){var a=b(this),c=a.data("jqDesktopWindow");c.desktop&&c.desktop.jqDesktop("restoreWindow",a)})},close:function(){this.each(function(){var a=b(this),c=a.data("jqDesktopWindow");c.desktop&&c.desktop.jqDesktop("closeWindow",a)})},hide:function(){this.each(function(){var a= b(this),c=a.data("jqDesktopWindow");c.desktop&&c.desktop.jqDesktop("hideWindow",a);a.hide()})},show:function(){this.each(function(){var a=b(this),c=a.data("jqDesktopWindow");if(c&&(c.desktop&&(c.desktop.jqDesktop("showWindow",a),c.desktop.jqDesktop("activateWindow",a)),a.show().jqWindow("activateWindow"),!c.status.opened))b.extend(!0,a.data("jqDesktopWindow"),{status:{opened:!0}}),a.trigger("windowFirstOpen")})},dispose:function(){this.each(function(){var a=b(this),c=a.data("jqDesktopWindow");c.desktop&& c.desktop.jqDesktop("disposeWindow",a);a.remove()})},setContent:function(a){this.each(function(){b(this).data("jqDesktopWindow").components.windowContent.html("").append(a)})}};b.fn.jqWindow=function(a){return g[a]?g[a].apply(this,Array.prototype.slice.call(arguments,1)):g._init.apply(this,arguments)};b.jqWindow=function(a){return b("<div></div>").jqWindow(a)[0]};b.jqWindow.defaults={width:600,height:300,title:"",icon:"",position:"center",visible:!1,showInTaskBar:!0,showDesktopIcon:!0,movable:!0, resizable:!0,maximizable:!0,minimizable:!0,closable:!0,defaultCloseOperation:"HIDE_ON_CLOSE",animated:!0,animationSpeed:150,maximized:!1};b.jqWindow.status={zIndex:1};b.jqWindow.DO_NOTHING_ON_CLOSE=1;b.jqWindow.HIDE_ON_CLOSE=2;b.jqWindow.DISPOSE_ON_CLOSE=3})(jQuery);