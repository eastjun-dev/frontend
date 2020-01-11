const setAttr = (el, attrName, value) => {
  const attr = document.createAttribute(attrName);
  attr.value = value;
  el.setAttributeNode(attr);
}

export const setAttrs = (el, attrs) => {
  for(const [k, v] of Object.entries(attrs)) {
    v && setAttr(el, k, v)
  }
}

const getCssText = (cssProps) => {
  const list = []
  for(const [k, v] of Object.entries(cssProps)) {
    list.push(`${k}: ${v};`)
  }
  return list.join(' ')
}

export const setStyle = (el, cssProps) => {
  el.style.cssText = getCssText(cssProps) 
}