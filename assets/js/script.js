document.addEventListener('DOMContentLoaded', function () {
    var accordionTriggers = document.querySelectorAll('.acordeon');

    accordionTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            trigger.classList.toggle('open');
        });
    });
});
