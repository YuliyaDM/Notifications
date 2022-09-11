const notificationButton = document.getElementById("getNotification");
const notificationTitle = "You got the notification";
const notificationBody = "Hi, there!";
const notificationIcon = "data:image/jpeg;base64,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"

function CreateNotification(permissionTitle, permissionBody, permissionIcon){
    const notification = new Notification(permissionTitle, {
        body: permissionBody,
        icon: permissionIcon
    });

    notification.onclose = function(){
        CreateNotification(notificationTitle, notificationBody, notificationIcon);
    }
}

notificationButton.onclick = () => {
    CreateNotification(notificationTitle, notificationBody, notificationIcon);
};

function requestPermission() {
    return new Promise((resolve, reject) => {
        const permissionResult = Notification.requestPermission(function(result) {
            resolve(result);
        });
        if (permissionResult) permissionResult.then(resolve, reject);
    })
    .then((permissionResult) => {
        const errorPermission = 'Error! Something bad happened to permission.';
        if (permissionResult !== 'granted') throw new Error(errorPermission);
    });
}

requestPermission();
