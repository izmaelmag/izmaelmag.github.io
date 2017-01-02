// (function() {
//     const aim_h = document.querySelector(".aim .h");
//     const aim_v = document.querySelector(".aim .v");
//     const aim_c = document.querySelector(".aim .c");

//     window.addEventListener("mousemove", (e) => {
//         let x = e.clientX;
//         let y = e.clientY;
        
//         window.requestAnimationFrame(() => {
//             TweenMax.to(aim_h, 0.4, {y: y});
//             TweenMax.to(aim_v, 0.4, {x: x});
//             TweenMax.to(aim_c, 0.2, {x: x, y: y});
//         });
//     });
// })();