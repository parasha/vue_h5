
export default function assign(props = {}, obj){
  props = props || {};
  return Object.assign(props, obj)
}