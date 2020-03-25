//Selecting the DOM elemenst in feature section
let menu = document.querySelector('.menu');
let menuListItem = document.querySelector('.menu li');
let menuImg = document.querySelector('.bookmark-image__img');
let menuHeading = document.querySelector('h2.bookmark__heading');
let menuDescription = document.querySelector('h2.bookmark__Description');

//Selecting the DOM elemenst in Q/A section
const tabButton = document.querySelectorAll('.tab__one');
const tabContent = document.getElementsByClassName('tab__content');


//Add event listeners of some DOM elements
menu.addEventListener('click', (event) => { 
    if(event.target.classList.contains('item1')) {
        menuImg.src = "images/illustration-features-tab-1.svg";
        menuListItem.children[0].classList.add('red-border-bottom');
        menuHeading.textContent = 'Bookmark in one click';
        menuDescription.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
        
    } else if (event.target.classList.contains('item2')) {
        menuImg.src = "images/illustration-features-tab-2.svg";
        menuImg.style.height = '30vw';
        menuListItem.children[0].classList.remove('red-border-bottom');
        menuListItem.children[1].classList.add('red-border-bottom');
        menuHeading.textContent = 'Intelligent search';
        menuDescription.textContent = 'Our powerful search feature will help you find a saved sites in no time at all. No need to trawl throught all of your bookmarks.';

    } else if (event.target.classList.contains('item3')) {
        menuImg.src = "images/illustration-features-tab-3.svg";
        menuImg.style.height = '28vw';
        menuListItem.children[0].classList.remove('red-border-bottom');
        menuListItem.children[2].classList.add('red-border-bottom');
        menuHeading.textContent = 'Share your bookmark';
        menuDescription.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
    }
});

for (let i = 0; i < tabContent.length; i++) {
    const button = tabButton[i];
    const div = tabContent[i];
    button.addEventListener('click', () => {
        button.classList.toggle('is-clicked');
        div.classList.toggle('open');

        
    });
    
}
