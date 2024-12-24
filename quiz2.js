const circle = document.querySelector(".circle"); 
const blocks = document.querySelectorAll(".block");
 let positionX = 0; let positionY = 0;
 document.addEventListener("keydown", moveCircle);
 
 function moveCircle(e) { switch (e.key){ case "ArrowLeft": positionX -= 5; break; case "ArrowRight": positionX += 5; break; case "ArrowUp": positionY -= 5; break; case "ArrowDown": positionY += 5; break; }
 
 circle.style.left = positionX + "px"; circle.style.top = positionY + "px"; blocks.forEach((block) => { if (checkCollision(circle, block)) { block.style.display = "none"; } }); } function checkCollision(element1, element2) { const rect1 = element1.getBoundingClientRect(); const rect2 = element2.getBoundingClientRect(); return ( rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top ); }
