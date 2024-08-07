document.addEventListener('DOMContentLoaded', () => {
    // Check storage if they have already deleted the notification
    // if (sessionStorage.getItem('notification') != 'deleted') {
    //     showNotification();
    // }

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
        const menu = document.getElementById('navbar-menu');
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        });
    });
    
    // (document.querySelectorAll('.message-header .delete') || []).forEach(($delete) => {
    //     // get the notification element
    //     const $notification = $delete.parentNode;
    //     console.log($notification.parentElement)
    
    //     // add a click event to the delete button
    //     $delete.addEventListener('click', () => {
    //         console.log('clicked');
    //         $notification.parentElement.remove($notification);
    //         sessionStorage.setItem('notification', 'deleted');
    //     });
    // });
});

// function showNotification() {
//     var notification = `
//     <div class="notificaion message is-info">
//         <div class="message-header">
//             <p>Thanks for your interest!</p>
//             <button class="delete"></button>
//         </div>
//         <div class="message-body">
//         Howdy! Thanks for visiting, I am currently looking for new opporunties. If you would like to help me with my next adventure, please connect with me on <a href="https://www.linkedin.com/in/eren-erisgen/">LinkedIn</a>
//         </div>
//     </div>
// `;
//     document.getElementById('notification').innerHTML = notification;
// }

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const heroImages = document.querySelectorAll('.hero-img');
    heroImages.forEach(function(hero) {
      hero.style.filter = `brightness(${1 - scrollPos/500})`;
      const offsetY = scrollPos * .2;
      hero.style.backgroundPositionY = `calc(50% + ${offsetY}px)`
    });
});


