const qs = (selector, target = document) => target.querySelector(selector)

const qsAll = (selector, target = document) => target.querySelectorAll(selector)



export {
  qs,
  qsAll
}