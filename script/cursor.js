let mouse = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);


function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    cursorClick();
    // a_link.forEach(link => {
    //     link.addEventListener("mouseleave", () => {
    //         cursor.setAttribute('id',"cursor-grow");
    //     });
    //     link.addEventListener("mouseover", () => {
    //         cursor.removeAttribute('id', "cursor-grow");
    //     });
    // });
}

function cursorClick() {
    window.addEventListener("click", event => {
        mouse.setAttribute('id', 'cursor-click');
        setTimeout (function() {
            mouse.removeAttribute('id');
        }, 400);
    });
}