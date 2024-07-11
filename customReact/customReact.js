function customRender(element,container){
  const domElement=document.createElement(element.type);
  domElement.innerHTML=element.children;
  Object.keys(element.props).forEach((property)=>{
    domElement.setAttribute(property,element.props[property]);
  });
  container.appendChild(domElement);
}

const reactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'Click me'
}

const mainContainer=document.querySelector('#root');
customRender(reactElement,mainContainer);
console.log(reactElement.props);