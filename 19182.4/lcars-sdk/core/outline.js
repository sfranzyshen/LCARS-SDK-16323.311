var lcars =     
	colors:
        pool:
            blue:
            green:
            purple:
            orange:
            red:
            grey:
        primary:
        secondary:
        tertiary:
        custom:

var LCARS = 	
	active:
	element:
	setting:
		altLabel:function(object, sValue)
		attr:function(object, oValue)
		class:function(object, oValue)
		children:function(object, value)
        color:function(object, sValue)
		colors:function(object, aValue)
		direction:function(object, sValue)
		disabled:function(object, bValue)
		fade:function(object, bValue)
		flex:function(object, sValue)
		flexc:function(object, sValue)
		hidden:function(object, bValue)
		href:function(object, sValue)
		html:function(object, sValue)
		inputValue:function(object, sValue)
		label:function(object, sValue)
		name:function(object, sValue)
		group:function(object, sValue)
		noEvent:function(object, bValue)
		noTransition:function(object, bValue)
		password:function(object, bValue)
		readOnly:function(object, bValue)
		reverse:function(object, bValue)
        size:function(object, sValue)
		src:function(object, sValue)
        state:function(object, sValue)
        style:function(object, oValue)
        text:function(object, sValue)
        toggle:function(object, bValue)
        toggleGroup:function(object, sValue)
        version:function(object, sValue)
		arrive:function(object, fValue)
		leave:function(object, fValue)
        event:function(object, oValue)
        receiver:function(object, oValue)						
        delete:function(object, oValue)						
        click:function(object, value)
        mouseenter:function(object, value)
        mouseleave:function(object, value)
        mousedown:function(object, value)
        mouseup:function(object, value)
        mousemove:function(object, value)
        mouseout:function(object, value)
        mouseover:function(object, value)
        hover:function(object, value)
        tapstart:function(object, value)
        tapend:function(object, value)
        tap:function(object, value)
        singletap:function(object, value)
        doubletap:function(object, value)
        taphold:function(object, value)
        swipe:function(object, value)
        swipeup:function(object, value)
        swiperight:function(object, value)
        swipedown:function(object, value)
        swipeleft:function(object, value)
        swipeend:function(object, value)
        scrollstart:function(object, value)
        scrollend:function(object, value)
        orientationchange:function(object, value)
        tap2:function(object, value)
        taphold2:function(object, value)
    
	helper:
        toggleGroups:
        aRandColor: function(array)
        aRandColorGroup:function(array, iLength)
        viewportScale: function(object, oArgs)
        viewportZoom:function(object, oArgs)
		toggleCheck:function(dom, fValue)
	
	create:function(oDef)
	
	delete:function(object)

$.fn.objectSet = function(setting, value)