function pageLoad(parent) {
    const navBar = document.createElement('div');
    const uoList = document.createElement('ul');
    navBar.classList.add('navigation')
    
    const navLinkTexts = ['Home', 'Menu', 'Contact'];
    navLinkTexts.forEach((text, i) => {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.href = 'https://www.google.com/';
        link.innerText = text;
        li.appendChild(link);
        uoList.appendChild(li);
    })
    
    navBar.appendChild(uoList);
    parent.appendChild(navBar);
}

export {pageLoad};