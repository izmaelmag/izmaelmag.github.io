// (function() {
//     const aim_h = document.querySelector(".aim .h");
//     const aim_v = document.querySelector(".aim .v");
//     // const aim_c = document.querySelector(".aim .c");

//     window.addEventListener("mousemove", (e) => {
//         let x = e.clientX;
//         let y = e.clientY;
        
//         window.requestAnimationFrame(() => {
//             aim_h.style.transform = `translateY(${y}px)`;
//             aim_v.style.transform = `translateX(${x}px)`;

//             aim_h.style.webkitTransform = `translateY(${y}px)`;
//             aim_v.style.webkitTransform = `translateX(${x}px)`;
//             // TweenMax.to(aim_h, 0.1, {y: y});
//             // TweenMax.to(aim_v, 0.1, {x: x});
//             // TweenMax.to(aim_c, 0.3, {x: x, y: y});
//         });
//     });
// })();