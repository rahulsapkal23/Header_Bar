var win = Ti.UI.iOS.createNavigationWindow({
    window: Ti.UI.createWindow({
        title: "Modal Window"
    })



});

win.open({
    modal: true,
    modalTransitionStyle: Ti.UI.iOS.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
    modalStyle: Ti.UI.iOS.MODAL_PRESENTATION_FORMSHEET
});
