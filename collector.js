async function pluginsArray() {
    var pluginArrVar = [];
    try {
        for (var n = 0; n < navigator.plugins.length && n < 30; n++) pluginArrVar.push(navigator.plugins[n].name)
    } catch (pluginArrVar) {}
    return pluginArrVar
}

function _PX400() {
    var Gl = window.performance && performance.timing,
        $l = "fetch",
        Kl = "toJSON"
        Ql = "createElement";
    var t = window[$l],
        n = t ? (t + "").length : 0;
    return n += Gl && Gl[Kl] ? (Gl[Kl] + "").length : 0, n += document && document[Ql] ? (document[Ql] + "").length : 0
}

var pxCollect = {
    "PX59": navigator.userAgent,
    "PX64": navigator.appVersion,
    "PX65": navigator.appName,
    "PX66": navigator.appCodeName,
    "PX69": navigator.productSub,
    "PX85": navigator.plugins,
    "PX91": window.screen && window.screen.width,
    "PX92": window.screen && window.screen.height,
    "PX93": `${window.screen && window.screen.width || -1}X${window.screen && window.screen.height}`,
    "PX94": await pluginsArray(),
    "PX154": (new Date).getTimezoneOffset(),
    "PX169": navigator.mimeTypes && navigator.mimeTypes.length,
    "PX170": navigator.plugins.length,
    "PX185": window.innerHeight,
    "PX186": window.innerWidth,
    "PX229": window.screen && +screen.colorDepth,
    "PX230": screen && +screen.pixelDepth,
    "PX231": window.outerHeight,
    "PX232": window.outerWidth,
    "PX237": navigator.maxTouchPoints,
    "PX269": window.screen && window.screen.availWidth,
    "PX270": window.screen && window.screen.availHeight,
    "PX400": _PX400()
}

console.log(pxCollect);
