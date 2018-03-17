
var trigger = document.querySelector('.trigger');

trigger.addEventListener('click', function() {
  if (trigger.classList.contains('trigger--show')) {
    trigger.classList.remove('trigger--show');
  } else {
    trigger.classList.add('trigger--show')
  };
});

var item = document.querySelector('.menu__item');
var item2 = document.querySelector('.menu__item2');
var item3 = document.querySelector('.menu__item3');
var item4 = document.querySelector('.menu__item4');
item.addEventListener('click', function() {
  if (trigger.classList.contains('trigger--show')) {
    trigger.classList.remove('trigger--show');
  } else {
    trigger.classList.add('trigger--show')
  };
});
item2.addEventListener('click', function() {
  if (trigger.classList.contains('trigger--show')) {
    trigger.classList.remove('trigger--show');
  } else {
    trigger.classList.add('trigger--show')
  };
});
item3.addEventListener('click', function() {
  if (trigger.classList.contains('trigger--show')) {
    trigger.classList.remove('trigger--show');
  } else {
    trigger.classList.add('trigger--show')
  };
});
item4.addEventListener('click', function() {
  if (trigger.classList.contains('trigger--show')) {
    trigger.classList.remove('trigger--show');
  } else {
    trigger.classList.add('trigger--show')
  };
});