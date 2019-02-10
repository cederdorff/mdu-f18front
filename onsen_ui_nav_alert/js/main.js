let createAlertDialog = function() {
  let dialog = document.getElementById('my-alert-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('alert-dialog.html', {
        append: true
      })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

let hideAlertDialog = function() {
  document
    .getElementById('my-alert-dialog')
    .hide();
};

let notify = function() {
  ons.notification.alert('This dialog was created with ons.notification');
};