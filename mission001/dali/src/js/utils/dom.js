const qs = (selector, target = document) => target.querySelector(selector)

const qsAll = (selector, target = document) => target.querySelectorAll(selector)

const getClosetLI = (target) => target.closest('li');


export {
  qs,
  qsAll,
  getClosetLI
}
