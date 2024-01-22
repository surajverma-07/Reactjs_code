
// function customRender(reactElement,root1){
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     root1.appendChild(domElement)
// }

// const reactElement = {
//      type: 'a',
//      props:{
//         href:'https://google.com',
//         target:'_blank'
//      },
//      children: 'click me to visit google'
// }
// const root1 = document.getElementById("root")
// // const root1 = document.querySelector('#root')

// // #customRender(fromwhere to inject,where inject  )
// customRender(reactElement,root1)

//   something mordern

function customRender (reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.word;
    for (const prop in reactElement.probs) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.probs[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type:'a',
    probs:{
        href:'https://linkdin.com',
        target:'_blank',
        color1:'black'
    },
    word:" visit Linkdin (only for professionals )"
}
const mainContainer = document.querySelector('#root')
 customRender(reactElement,mainContainer)