
var trigger = document.querySelector('.trigger');

trigger.addEventListener('click', function() {
  if (trigger.classList.contains('trigger--show')) {
    trigger.classList.remove('trigger--show');
  } else {
    trigger.classList.add('trigger--show')
  };
});

