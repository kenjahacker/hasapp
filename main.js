function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    // Получаем элементы кнопки и иконки
    var button = document.getElementById("fullscreenButton");
    var icon = button.querySelector(".fullscreen-icon");

    // Переключаем класс иконки и меняем её состояние
    if (icon.classList.contains("fa-expand")) {
        icon.classList.remove("fa-expand");
        icon.classList.add("fa-compress");
    } else {
        icon.classList.remove("fa-compress");
        icon.classList.add("fa-expand");
    }

    // Переключаем класс иконки и меняем её состояние
    if (icon.classList.contains("fa-expand")) {
        icon.classList.remove("fa-expand");
        icon.classList.add("fa-compress");
    } else {
        icon.classList.remove("fa-compress");
        icon.classList.add("fa-expand");
    }

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}