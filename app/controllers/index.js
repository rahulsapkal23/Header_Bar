/*var win = Ti.UI.iOS.createNavigationWindow({
    window: Ti.UI.createWindow({
        title: "Modal Window"
    })


    })
});

win.open({
    modal: true,
    modalTransitionStyle: Ti.UI.iOS.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
    modalStyle: Ti.UI.iOS.MODAL_PRESENTATION_FORMSHEET
});*/
var currentdate = new Date()
var date = new Date();
$.date.text = "currentdate :" + currentdate;
date.setMinutes(date.getMinutes() + 20);
var diiference = date.getMinutes() - new Date().getMinutes();

$.min.text = "add 20 :" + date;
$.min20.text = "diiference :" + diiference;
$.sec.text = "sec" + $.min20.text;
$.win.open();
