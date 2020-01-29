


                //SHOPPING-CART

        //Variables
 const courses = document.getElementById('courses-list'),
        getCartContent = document.querySelector('#cart-content tbody'),
        shoppingCart = document.querySelector('#cart-content');
        clearAll = document.querySelector('#clear-cart');



        //Eventlisteners
function eventlisteners(){
                //get courses
        courses.addEventListener('click', addCourse);
        shoppingCart.addEventListener('click', deleteCartItem),
        clearAll.addEventListener('click', clearAllCart);

        document.addEventListener('DOMContentLoaded', printToCart);

}


        //Functions
                        eventlisteners();

function deleteCartItem(e){
                e.preventDefault();
        let course, courseId;

        if(e.target.classList.contains('remove')){
                        //delete/remove courses
                e.target.parentElement.parentElement.remove();
                course = e.target.parentElement.parentElement;
                courseId = course.querySelector('a').getAttribute('data-id');
        }
        // console.log(courseId);
        removeCourseFromLS(courseId);
}

        //remove course from local storage
function removeCourseFromLS(id){
        coursesLS = getCourseFromLocalStorage();
        coursesLS.forEach(function(courseLS, index){
                if(courseLS.id === id){
                        coursesLS.splice(index, 1);
                }
        });
        // console.log(coursesLS);
        localStorage.setItem('courses', JSON.stringify(coursesLS));
}
        //clear all cart content
function clearAllCart(e){
        // getCartContent.innerHTML = '';       or
        while(getCartContent.firstChild){
                getCartContent.removeChild(getCartContent.firstChild);
        }

        clearFromLocalStorage();
}

        //clear from storage
function clearFromLocalStorage(){
        localStorage.clear();
}

function addCourse(e){
                e.preventDefault();
                //use delegation to find the courses that was added
        if(e.target.classList.contains('add-to-cart')){

                        //get the course content/value
                const getCourse = e.target.parentElement.parentElement;

                //read course value
                getCourseInfo(getCourse)
        }
}

function getCourseInfo(getCourse){
        const courseInfo = {
                image: getCourse.querySelector('img').src,
                title: getCourse.querySelector('h4').textContent,
                price: getCourse.querySelector('.price span').textContent,
                id: getCourse.querySelector('a').getAttribute('data-id')
        }
        
        //add courses to cart
        addToCart(courseInfo);
        // console.log(courseInfo);
}

function addToCart(getCourse){
                //create table row for course
        const row = document.createElement('tr');
        // console.log(getCourse);
                row.innerHTML = `
                        <tr>
                                <td> <img href="#" src="${getCourse.image}" width=100px >
                                </td>
                                <td>${getCourse.title}</td>
                                <td>${getCourse.price}</td>
                                <td>
                                        <a href="#" class="remove" data-id="${getCourse.id}">X</a>
                                </td>
                        </tr>
                `;

        getCartContent.appendChild(row);
        // console.log(getCartContent);

        addCourseToLocalStorage(getCourse);
}


        //add to storage
function addCourseToLocalStorage(getCourse){
        let courses = getCourseFromLocalStorage();

                courses.push(getCourse);

        //add courses to storage
        localStorage.setItem('courses', JSON.stringify(courses))

        // console.log(courses);
}
                        

        // get from storage
function getCourseFromLocalStorage(){
        let courses;
                if(localStorage.getItem('courses') === null){
                        courses = [];
                }else{
                        courses = JSON.parse(localStorage.getItem('courses'));
                }
        return courses;
}

        // mentain selected items on reload
function printToCart(){
        let coursesLS = getCourseFromLocalStorage();
                        //loop through courses
                coursesLS.forEach(function(getCourse){
                        const row = document.createElement('tr');
                                row.innerHTML = `
                                <tr>
                                        <td> <img href="#" src="${getCourse.image}" width="100px" >
                                        </td>
                                        <td>${getCourse.title}</td>
                                        <td>${getCourse.price}</td>
                                        <td>
                                                <a href="#" class="remove" data-id="${getCourse.id}">X</a>
                                        </td>
                                </tr>
                                
                                `;
                getCartContent.appendChild(row);     
                })
}

