
// let element;

//  element = document.body;
//  element = document.head;
//  element = document.all[100];
//  element = document.all;
//  element = document.URL
//  element = document.domain;
//  element = document.contentType;

//  //links
//  element = document.links;
//  element = document.links[3];
//  element = document.links[3].className;
//  element = document.links[3].classList[4];

//  //forms
//  element = document.forms;
//  element = document.forms[0];
//  element = document.forms[0].id;
//  element = document.forms[0].classList;
//  element = document.forms[0].className;
//  element = document.forms[0].action;
//  element = document.forms[0].method;

//  //images
//  element = document.images;
// //  element = document.images
//  let images = document.images;
//  imagesArray = Array.from(images);
//  imagesArray.forEach(function(images){
//     console.log(images);
//     console.log(images.src);
//  });

// //  let images = document.images;
// //  imagesArray = Array.from(images);


// //  console.log(imagesArray);
// // console.log(imagesArray[22].className);
// // console.log(imagesArray[22].classList);
// // console.log(imagesArray[22].src);

// //
//  //script
//  element = document.scripts;
//  element = document.scripts[0].getAttribute('src');

// console.log(element)


            //DOM function and styling

    // console.log( document.getElementById('heading'));

      //  or

    // let heading = document.getElementById('heading');

    // heading.style.background = '#444';
    // heading.style.color = '#ffff';
    // heading.style.padding = '10px';
    // heading.style.backgroundColor = 'purple';
    // // heading.style.backgroundImage = 'url(/img/course3.jpg)';
    // // heading.style.marginTop = 'px';
    // heading.textContent = 'Just Test';
    // heading.innerText = 'Another Test';

    // console.log(heading);

    // const learn = document.querySelector('#learn');
    // learn.style.color = '#444';
    // learn.style.backgroundColor = '#ffff';
    // // learn.style.backgroundImage = 'url(/img/course3.jpg)';
    // learn.textContent = 'New Today';
    // // learn.style.padding = '10px';
    // // learn.style.paddingLeft = '20px';
    // console.log(learn);

    //Select by className

    // const hero = document.querySelector('.hero-content');
    // // hero.style.backgroundImage = 'url(/img/course3.jpg)';
    // hero.style.backgroundColor = 'red';
    // // hero.style.padding = '40px';
    // console.log(hero);

    //Replacing text content
    // const tagline = document.querySelector('.tagline');

    //     const newText = tagline.textContent.replace('$15', '#19');
    //         tagline.textContent = newText;

    // const newCourse = tagline.textContent.replace('any course', 'every courses');
    //     tagline.textContent = newCourse;

    // const newOffer = tagline.textContent.replace('Special Offer', 'Important Offers');
    //     tagline.textContent = newOffer;

    // console.log(tagline);

    //Queryselector support css syntax
// let card;
//     card = document.querySelector('.card');
//     card = document.querySelector('.card img');
// let cardInfo
// cardInfo = document.querySelector('.info-card');
// // cardInfo = document.querySelector('.info-card h4');
// // cardInfo = document.querySelector('h4')
//       const info = cardInfo.textContent.replace('HTML5, CSS3, JavaScript for beginners', 'CSS5');
//       cardInfo.textContent = info;

//     console.log(cardInfo);

//Query selector support nth-child,first-child and last-child
//     let links;

//     // links = document.querySelector('#primary a ');
//     // links = document.querySelector('#primary a:first-child ');
//     // links = document.querySelector('#primary a:last-child ');
//     links = document.querySelector('#primary a:nth-child(2)');      

//       const anotherLink = links.textContent.replace('Become an Instructor', 'Become a Tutor')
//       links.textContent = anotherLink

//     console.log(links);

//  let ner;   
//  ner = document.querySelector('#primary a:nth-child(3)');

//     const newLink = ner.textContent.replace('Mobile Applications', 'Android App')
//     ner.textContent = newLink

//     console.log(ner);

// let cards;
//     cards = document.getElementsByClassName('card')
//         cards[1].style.color = 'red';
//         cards[0].style.color = 'purple';
//     // const newCard = cards[0].textContent.replace('HTML5', 'HTM9');
//     // cards[0].textContent = newCard;
//     // console.log(cards);

    //using both QuerySelector and GetElement
// let links;
//     links = document.querySelector('#primary').getElementsByClassName('link');
//         links[1].style.color = 'pink';
//         links[1].textContent = 'Tutor';

//         links[2].style.color = 'purple';
//         links[2].style.backgroundColor = 'yellow';
//     console.log(links);

// let links;
//     links = document.querySelector('#secondary').getElementsByClassName('link');

//     links[1].style.color = 'pink';
//     links[1].textContent = 'Tutor';

//     links[0].style.color = 'green';
// console.log(links);

//by TAgName

// let images;
//     images = document.getElementsByTagName('img');
//     console.log(images);
//     console.log(images[2].src);

    //convert HTML collection into an Array
// let images;
//     images = document.getElementsByTagName('img');
//         imagesArray = Array.from(images);

//         imagesArray.forEach(function(image){
//         console.log(image);
//         });
//         console.log(imagesArray);

        //QuerySelectorAll...............
// let links;
    // oddList = document.querySelectorAll('#primary a:nth-child(odd)');

    // oddList.forEach(function(lk){
    //     lk.style.color = 'red';
    //     lk.style.background = 'black';
    //     const n1 = lk.textContent.replace('For Business', 'My Business');
    //     lk.textContent = n1
    //     const n3 = lk.textContent.replace('Mobile Applications', 'Android App');
    //     lk.textContent = n3
    //     const n5 = lk.textContent.replace('Help', 'Support');
    //     lk.textContent = n5
    //     console.log(lk);
    // })
    // evenList = document.querySelectorAll('#primary a:nth-child(even)');
    //     evenListArray = Array.from(evenList);
    //     evenListArray.forEach(function(evenls){
    //         evenls.style.color = 'purple';
    //         evenls.style.background = 'orange';
    //         console.log(evenls);
    //     })
    // console.log(evenList);


// let cards;
//     courses = document.querySelectorAll('.card h4')
//         courses.forEach(function(course){
//             console.log(course)
//         });
// console.log(courses);

// let addToCarts;
//     addToCarts = document.querySelectorAll('.add-to-cart');
//     addToCartsArray = Array.from(addToCarts);
//     addToCartsArray.forEach(function(button){
//         button.textContent = 'Something New';
//         console.log(button);
//     })
    // console.log(addToCarts);

// let prices;
    // prices = document.querySelectorAll('.price span');
    //     pricesArray = Array.from(prices);
    //     pricesArray.forEach(function(newPrice){
    //     newPrice.textContent = '#300'
    //         console.log(newPrice);
    //     });
        
        // prices = document.querySelectorAll('.price span');
        //     pricesArray = Array.from(prices);
        //     pricesArray.forEach(function(newPrice){
        //     // newPrice.textContent = '$900'
        //         console.log(newPrice);
        //     });
    // console.log(prices);

    //TRAVERSING
// var navigation;

//     navigation = document.querySelector('#primary');
// let element;
//     navigation.children[0].textContent = 'New Link';
//     navigation.children[0].style.color = 'green';
//     element = navigation.children[0];
//     element = navigation.childNodes[1].textContent = 'Business';
//     element = navigation.childNodes[1].style.color = 'red';
//     element = navigation.children[0].nodeName;
//     element = navigation.children[0].nodeType;
//     element = navigation.children[0].nodeValue;
//     element = navigation.children[0].children;

//     // 1 = Element
//     // 2 = Attributes
//     // 3 = Text Nodes
//     // 8 = Comments
//     // 9 = document
//     // 10 = doctype

//     console.log(element);


            //Traversing from PARENT TO CHILDREN

// const courses_list = document.querySelector('#courses-list');
// let element;
//     element = courses_list.children[1].children[0].children[0].lastElementChild;
//     element = courses_list.children[1].children[0].children[0].firstElementChild;
//     element = courses_list.children[1].children[0].children[0].childElementCount;
//     element = courses_list.children[1].children[1].children[0].children[1].lastElementChild;

//     console.log(element)


        //TRAVERSING FROM CHILDREN TO PARENT
// const cartBtn = document.querySelector('.add-to-cart')

// let element;

// element = cartBtn
// element = cartBtn.parentElement.parentElement.childElementCount;
// element = cartBtn.parentElement.parentElement.firstElementChild;
// element = cartBtn.parentElement.parentElement.lastElementChild;

// console.log(element);

    //Sibling
// const cartBtn = document.querySelector('.add-to-cart')

// let element;

// element = cartBtn.parentNode;
// // element = cartBtn.previousSibling;
// element = cartBtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

// console.log(element);
// console.log(cartBtn.parentElement);

        //NEXT element Sibling
// const cartBtn = document.querySelector('.add-to-cart')


// const courseName = cartBtn.parentElement.querySelector('h4');

// let element;

//     element = courseName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling;

//     console.log(element);



        //ADDING HTML ELEMENTS USING JAVASCRIPT
// const newLink = document.createElement('a');
//     //set href
//     // newLink.setAttribute('href', '#')  or
//     newLink.href = '#';
//     // set className
//     newLink.className = 'link';
//     // set style
//     newLink.style.color = 'red';
//     //set id
//     newLink.id = 'new';
//     //input link text
//     newLink.appendChild( document.createTextNode('My Links'));
//     //add to current HTML
//     document.querySelector('#primary').appendChild(newLink);

// console.log(newLink);


// const newDiv = document.createElement('div');
//     newDiv.className = 'row';

//     const newdiv2 =  newDiv.appendChild(document.createElement('div'));
//         newdiv2.className = 'four columns';

//     const newDiv3 = newdiv2.appendChild(document.createElement('div'));
//         newDiv3.className = 'card';

//     const newImg = newDiv3.appendChild(document.createElement('img'));
//         newImg.src = 'img/course1.jpg';
//         newImg.className = 'course-image u-full-width';

//     const newDiv4 = newDiv3.appendChild(document.createElement('div'));
//         newDiv4.className = 'info-card';

//     const ht = newDiv4.appendChild(document.createElement('h4'));
//         ht.appendChild(document.createTextNode('HTML6, CSS7, Javascript'));
        
//     const pra = newDiv4.appendChild(document.createElement('p'));
//         pra.appendChild(document.createTextNode('famousb'));

//     const newImgs = newDiv4.appendChild(document.createElement('img'));
//         newImgs.src = 'img/stars.png';

//     const newPr = newDiv4.appendChild(document.createElement('p'));
//         newPr.appendChild(document.createTextNode('$300'));

//     const newSpan = newPr.appendChild(document.createElement('span'));
//         newSpan.className = 'u-pull-right';
//         newSpan.appendChild(document.createTextNode('$19'));

//     const mylinkBtn = newDiv4.appendChild(document.createElement('a'));
//         mylinkBtn.className = 'u-full-width button-primary button input add-to-cart';
//         mylinkBtn.href = '#';
//         mylinkBtn.data_id = '1';
//         mylinkBtn.appendChild(document.createTextNode('Add to Cart'));

//         document.querySelector('#courses-list').appendChild(newDiv);

// console.log(newDiv);


        //REPLACING HTML
// const newHeading = document.createElement('h2');
//     //add class
//     // newHeading.classList.add('heading');
//     newHeading.className = 'heading';
//     newHeading.id = 'heading';
//     newHeading.appendChild(document.createTextNode('Offline Courses'));

//         //old h1 heading
//     const oldHeading = document.querySelector('#heading');

//         //calling parent element
//     const myParent = document.querySelector('#courses-list');

//     //replacing the old heading
//     myParent.replaceChild(newHeading, oldHeading);

// console.log(newHeading);


        //REMOVE ITEMS FROM HTML

// const links = document.querySelectorAll('.link');
//     // links[2].remove();
// console.log(links);

// const navigation = document.querySelector('#primary')

// const allLinks = document.querySelectorAll('#primary .link');

//     navigation.removeChild(allLinks[4]);
//     navigation.removeChild(allLinks[0]);
//     navigation.removeChild(allLinks[3]);
//     navigation.removeChild(allLinks[2]);
//     navigation.removeChild(allLinks[1]);

// console.log(allLinks);
// console.log(navigation);



// const navigation1 = document.querySelector('#secondary')

// const allLinks1 = document.querySelectorAll('#secondary .link');

//     navigation1.removeChild(allLinks1[0]);
//     navigation1.removeChild(allLinks1[1]);
//     navigation1.removeChild(allLinks1[2]);
    
// console.log(allLinks1);
// console.log(navigation1);


            //classes, ids and attributs.........
// const link = document.querySelector('.link');
//  let element;
//     element = link;
//     element = link.classList;
//     element = link.className;
//     element = link.classList[0];
//     element = link.classList.add('Our-class'); //add only
//     element = link.className = 'Our'; //replace and add

//     //ids
//     element = link.id = 'my-id';
//     element = link.removeAttribute('id');
//     element = link.removeAttribute('class');
//     element = link.getAttribute('class');
//     element = link.getAttribute('id');
//     element = link.getAttribute('href');
//     element = link.setAttribute('href', 'http://yahoo.com');
//     element = link.setAttribute('data-id', '1');
//     element = link.setAttribute('data-target', '_blank');
//     element = link.removeAttribute('data-id');
//     element = link.removeAttribute('data-target');
//     element = link.removeAttribute('href');

// console.log(element);

 
                //EVENTLISTENER
// document.querySelector('#clear-cart').addEventListener('click', function(){
//         console.log('you just clicked me');
// })

// const clearCart = document.getElementById('clear-cart');

//         clearCart.addEventListener('click', clearCartBtn);

// function clearCartBtn(){
//         console.log('Clear Me');
// }

// const clearCartBtn = document.querySelector('.button');
//         clearCartBtn.addEventListener('click', function(){
//                 console.log('Yes it works');
//         })

// const clearCart = document.getElementById('clear-cart');
//         clearCart.addEventListener('click', clearCartBtn);

//         function clearCartBtn(e){
//                 let element;
//                         element = e;
//                         element = e.target;
//                         element = e.target.className;
//                         element = e.target.id;
//                         element = e.target.innerText;
//                         element = e.target.innerText = 2 + 2;
//                         element = e.target.innerText = 'clear';

//                 console.log(element);
//         }

                //MOUSE EVENT
// const heading = document.querySelector('#heading');
// const links = document.querySelector('nav');
// const clearCartBtn = document.querySelector('#clear-cart');

// console.log(heading);
// console.log(links);
// console.log(clearCartBtn);
                //SINGLE CLICK
        // clearCartBtn.addEventListener('click', printEvent);
                //DOUBLE CLICK
        // clearCartBtn.addEventListener('dblclick', printEvent);
        //MOUSEENTER
        // clearCartBtn.addEventListener('mouseenter', printEvent);
        //MOUSELEAVE
        // clearCartBtn.addEventListener('mouseleave', printEvent);
        //MOUSEUP
        // clearCartBtn.addEventListener('mouseup', printEvent);
        //MOUSEDOWN
        // clearCartBtn.addEventListener('mousedown', printEvent);
        //MOUSEOUT
        // clearCartBtn.addEventListener('mouseout', printEvent);
        //MOUSEOVER
        // clearCartBtn.addEventListener('mouseover', printEvent);
        // MOUSEMOVE
//         heading.addEventListener('mousemove', printEvent);

// function printEvent(e){

//         console.log(`Event That Occur is called: ${e.type}`)
// }
        
                //FORM and SEARCH RESULT
// const searchForm = document.getElementById('search');
// const searchInput = document.getElementById('search-course');

                //form submit
        // searchForm.addEventListener('submit', printEvent);
        //input keyup
        // searchInput.addEventListener('keyup', printEvent);
        //input keydown
        // searchInput.addEventListener('keydown', printEvent);
        //input keypress
        // searchInput.addEventListener('keypress', printEvent);
        //input blur
        // searchInput.addEventListener('blur', printEvent);
        //input focus
        // searchInput.addEventListener('focus', printEvent);
        //input cut
        // searchInput.addEventListener('cut', printEvent);
        //input copy
        // searchInput.addEventListener('copy', printEvent);
        //input paste
        // searchInput.addEventListener('paste', printEvent);
        //input 
//         searchInput.addEventListener('input', printEvent);

// function printEvent(e){
//         // e.preventDefault();
//         // if(searchInput.value == 0){
//         //         alert("input something pls")
//         // }
//                 //search input result
//         console.log(searchInput.value);

//         console.log(`Type: ${e.type}`);
// }

        //EVENT BUBBLING
        //variables
// const card = document.querySelector('.card'),
//       cardInfo = document.querySelector('.info-card'),
//       addToCart = document.querySelector('.add-to-cart');

// //       console.log(card);
// //       console.log(cardInfo);
// //       console.log(addToCart);

//                 //eventlisteners
// card.addEventListener('click', function(e){
//         console.log('You click the card');
//         e.stopPropagation();
// });

// cardInfo.addEventListener('click', function(e){
//         console.log('You click the card info');
//         e.stopPropagation();
// });

// addToCart.addEventListener('click', function(e){
//         console.log('You click the add-to-cart');
//         e.stopPropagation();
// });


                // DELEGATION
// document.body.addEventListener('click', removeFromCarts);

// function removeFromCarts(e){
//         // console.log(e.target);
//         // console.log(e.target.classList);
//         // console.log(e.target.className);
//         if(e.target.classList.contains('remove')){
//                 console.log('Yes oooo');
//         }else{
//                 console.log('No');
//         }
// }

                //REMOVE FROM CARTS
// const shoppingCart = document.getElementById('shopping-cart');
//         shoppingCart.addEventListener('click', removeFromCarts);

// function removeFromCarts(e){
//         // console.log(e.target.classList);
//         if(e.target.classList.contains('remove')){
//                 e.target.parentElement.parentElement.remove();
//         }
// }

// const coursesList = document.getElementById('courses-list');
//         coursesList.addEventListener('click', addToCarts);

// function addToCarts(e){
//         if(e.target.classList.contains('add-to-cart')){
//                 e.target.setItem();
//                 // console.log('Course Added');
//         // const shoppingCart = document.getElementById('shopping-cart');
//         //         e.target.shoppingCart.add();
//         }
// }

                //LOCAL STORAGE
 //add to local storage
//  localStorage.setItem('name1', 'Famousb');
//  localStorage.setItem('name2', 'nowww');

 //add to session storage
//  sessionStorage.setItem('name', 'Bolaji');

//remove from storage
// localStorage.removeItem('name');

//clear from storage
// localStorage.clear();

//read from storage
// const name = localStorage.getItem('name');

//read from session storage
// const name = sessionStorage.getItem('name');

// console.log(name);

//multiple items into storage
// const localStorageContents = localStorage.getItem('names');

// let names;

// if(localStorageContents === null){
//         names = [];
// }else{
//         names = JSON.parse(localStorageContents)
// }

// names.push('best');

// localStorage.setItem('names', JSON.stringify(names));

// console.log(names);