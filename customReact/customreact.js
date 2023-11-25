function customRender(reactElement, container) {
    // TODO explore DOM from Hitesh


    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('traget', reactElement.props.traget)
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern

    for (const prop in reactElement.props) {
        if (prop == 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        traget: '_blank'
    },
    childern: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)