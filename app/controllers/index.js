if (Ti.Platform.osname == "android") {
    function openBlueWindow(e) {
        var bluewindow = Alloy.createController('bluewin').getView();
        $.Indexwin.openWindow(bluewindow);
    }
    $.Indexwin.open();

} else {
    function openBlueWindow(e) {
        var bluewindow = Alloy.createController('bluewin').getView();
        $.Navwin.openWindow(bluewindow);
    }
    $.Navwin.open();
}
