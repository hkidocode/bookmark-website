// Selecting the bookmark sections and set up the content based on the target button
const buttonSection = document.querySelectorAll('.menu__item');
const contentSection = document.querySelectorAll('.bookmark-section');

//Add event listeners to bookmark buttons
for (let i = 0; i < contentSection.length; i++) {
    const button = buttonSection[i];
    const section = contentSection[i];
    button.addEventListener('click', () => {

        for (let i = 0; i < 3; i++) {
            buttonSection[i].classList.remove('button--active');
            contentSection[i].classList.remove('bookmark-section--active');
            
        }
    button.classList.add('button--active');
    section.classList.add('bookmark-section--active');

    });
}

// //Selecting the DOM elements in Q/A section
const tabButton = document.querySelectorAll('.tab__one');
const tabContent = document.getElementsByClassName('tab__content');


//Add event listeners to Q/A buttons
for (let i = 0; i < tabContent.length; i++) {
    const button = tabButton[i];
    const div = tabContent[i];
    button.addEventListener('click', () => {
        button.classList.toggle('is-clicked');
        div.classList.toggle('open');

        
    });
    
}
