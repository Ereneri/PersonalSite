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
    
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        // get the notification element
        const $notification = $delete.parentNode;
    
        // add a click event to the delete button
        $delete.addEventListener('click', () => {
            sessionStorage.setItem('notification', 'deleted');
            $notification.style.animationPlayState = 'running';
            $notification.addEventListener('animationend', () => {
                $notification.parentNode.remove($notification);
            });
        });
    });
});

// function showNotification() {
//     var notification = `    <div class="is-rounded">
//     <div class="notification is-warning noti">
//         <button class="delete"></button>
//         Thank you for your interest in my portfolio! I am currently looking for an internship or co-op opportunity, more info on my <a href="https://www.linkedin.com/in/eren-erisgen/">LinkedIn</a>.
//     </div>
// </div>
// `;
//     document.getElementById('notification').innerHTML = notification;
// }