var objectPrototype = Object.prototype;
$.extend($,{
    isArray : function(value)
    {
        return objectPrototype.toString.apply(value) === '[object Array]';
    },
    isString : function(value)
    {
        return typeof value === 'string';
    },
    /**
     */
    isEmpty : function(value)
    {
        return (value === null) || (value === undefined) || ((core.isArray(value) && !value.length));
    },
    isFunction: function(value) {
        return objectPrototype.toString.apply(value) === '[object Function]';
    },
    isObject: function(value) {
        return !!value && !value.tagName && objectPrototype.toString.call(value) === '[object Object]';
    },
    /**
     */
    packing : function(elems)
    {
        if(elems instanceof $)
        {
            return elems;
        }
        else if($.isArray(elems) || elems.nodeType)
        {
            return $(elems);
        }
        else if($.isString(elems))
        {
            if(elems.indexOf('#')>=0 || elems.indexOf('.')>0)
            {
                return $(elems);
            }
            else
            {
                return $('#'+elems);
            }
        }
        else
        {
            return $([]);
        }
    },
    /**
     */
    nameSpace : function()
    {
        var a = arguments,
            o = null,
            globalObj,
            i = 1,
            j,
            d,
            arg;
        if(window[arguments[0]])
        {
            globalObj = window[arguments[0]];
        }
        else
        {
            window[arguments[0]] = {};
        }
        for(;i<a.length;i++)
        {
            o   = window[arguments[0]];
            arg = arguments[i];
            if(arg.indexOf('.'))
            {
                d = arg.split('.');
                for(j=0;j<d.length;j++)
                {
                    o[d[j]] = o[d[j]] || {};
                    o       = o[d[j]];
                }
            }
            else
            {
                o[arg] = o[arg] || {};
            }
        }
        return;
    }
});
$.extend($, {
    getApi : function(options,action){
        var requestData = {};
        var baseurl = 'http://interface.hczc.com/';
        //var baseurl = 'http://61.129.41.146:7080/hczlinterface/';
        $.extend(requestData,options);
        requestData = JSON.stringify(requestData);
        $.ajax({
            url:baseurl+action+'.action?Req='+requestData,
            dataType:'jsonp',
            success:function()
			{
			
			},
			complete:function()
			{
			
			}
        });
    }

});