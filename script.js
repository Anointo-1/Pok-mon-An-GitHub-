    //Main Arrays:
    let pokeDex = [
     {id: undefined, seen: undefined, caught: undefined}
    ]
    let bag = [
     [
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'pokeball', quantity: 3 },
      { id: 'potion', quantity: 1 }
     ],
     [
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
      { id: 'potion', quantity: 1 },
     ]
    ];
    let pokemon = [ ];
    let pc = [
    {items: [ 
    { }
    ]},
    {pokemon: [ 
    { }
    ]}
    ];
     let player = {
      name: "none",
      gender: "none",
      id: "none",
      money: 1500,
      stars: undefined,
      gym: undefined
     }
     for (let i = 0; i < bag[0].length; i++) {
     document.getElementById("bagScrollZone").innerHTML += "<p>" + bag[0][i].id + " ×" + bag[0][i].quantity + "</p>";
     }
     //middle of screen is x: 6, y: 6 for player
     let playerChar = document.getElementById("player");
     let backChar = document.getElementById("mainDivEl");
     let curRoom = "none";
     let x = -1000;
     let xB = 0;
     let yB = 0;
     let y = 0;
     let direction = "up";
     let realX = 0;
     let realY = 0;
     let movement = "fixed";
     let upBut = document.getElementById("upBut");
     let downBut = document.getElementById("downBut");
     let leftBut = document.getElementById("leftBut");
     let rightBut = document.getElementById("rightBut");
     let upOn = false;
     let downOn = false;
     let leftOn = false;
     let rightOn = false;
     let upVal = 0;
     let downVal = 0;
     let leftVal = 0;
     let rightVal = 0;
     
     function getWorldPos() {
  if (movement === "fixed") {
    return { wx: x, wy: y };
  } else {
    // Corrected: Logical Position = (Player's Screen X) - (Background Offset X)
    // This removes the "bottom right" shift.
    return { 
      wx: x - xB, 
      wy: y - yB 
    };
  }
}
function updateRooms() {
 if (curRoom === "room1A") {
 	     document.getElementById("mainDivEl") .innerHTML = " ";
     	 createRoom1A();
  } else if (curRoom === "room1B") {
  	    document.getElementById("mainDivEl") .innerHTML = " ";
     	 createRoom1B();
  } else {
  	document.getElementById("mainDivEl") .innerHTML = " ";
  }
  if (document.getElementById("mainDivEl") .innerHTML === " ") {
  	console.log("current room is Null");
  }
  console.log("room changed");
 }
 function roomCol() {
 	if (curRoom === "room1A") {
 	 room1A();
     }
     if (curRoom === "room1B") {
 	 room1B();
     }
 }
 
     function updatePlayer() {
      playerChar.style.left = x * 25 + "px";
      playerChar.style.top = y * 25 + "px";
     }
     function updateBackG() {
      document.getElementById("mainDivEl") .style.left = xB * 25 + "px";
      document.getElementById("mainDivEl") .style.top = yB * 25 + "px";
     }
     function mainLoop() {
     	
     	requestAnimationFrame(mainLoop);
     }
     function animate() {
     	if (movement === "fixed") {
  realX += (x - realX) * 0.2;
  realY += (y - realY) * 0.2;

  playerChar.style.left = realX * 25 + "px";
  playerChar.style.top = realY * 25 + "px";

  requestAnimationFrame(animate);
  } else if (movement === "free") {
  	realX += (xB - realX) * 0.2;
  realY += (yB - realY) * 0.2;

  backChar.style.left = realX * 25 + "px";
  backChar.style.top = realY * 25 + "px";

  requestAnimationFrame(animate);
  }
}
animate();
//=================================
     function animateMov() {
     	if (upOn) {
     	 if (document.getElementById("upBut") .disabled === false) {
     	 if (upVal >= 10) {
     	  if (movement === "fixed") {
     	 updatePlayer();
     	  y--;
           direction = "up";
           roomCol();
     	  upVal = 0;
           } else if (movement === "free") {
           	updateBackG();
           	yB++;
           console.log(xB + ", " + yB);
               direction = "up";
               roomCol();
               upVal = 0;
           }
          }
          upVal++;
          }
         }
         if (downOn) {
          if (document.getElementById("downBut") .disabled === false) {
     	 if (downVal >= 10) {
     	  if (movement === "fixed") {
     	  updatePlayer();
     	  y++;
           direction = "down";
           roomCol();
     	  downVal = 0;
           } else if (movement === "free") {
           	updateBackG();
           	yB--;
           console.log(xB + ", " + yB);
               direction = "down";
               roomCol();
     	      downVal = 0;
           }
          }
          downVal++;
          }
         }
         if (rightOn) {
          if (document.getElementById("rightBut") .disabled === false) {
     	 if (rightVal >= 10) {
     	  if (movement === "fixed") {
     	  updatePlayer();
     	  x++;
           direction = "right";
           roomCol();
     	  rightVal = 0;
           } else if (movement === "free") {
           	updateBackG();
           	xB--;
           console.log(xB + ", " + yB);
               direction = "right";
               roomCol();
     	      rightVal = 0;
           }
          }
          rightVal++;
          }
         }
         if (leftOn) {
          if (document.getElementById("leftBut") .disabled === false) {
     	 if (leftVal >= 10) {
     	  if (movement === "fixed") {
     	  updatePlayer();
     	  x--;
           direction = "left";
           roomCol();
     	  leftVal = 0;
           } else if (movement === "free") {
           	updateBackG();
           	xB++;
           console.log(xB + ", " + yB);
               direction = "left";
               roomCol();
     	      leftVal = 0;
           }
          }
          leftVal++;
          }
         }
     	requestAnimationFrame(animateMov);
     }
     animateMov();
//=================================
     let vol;
     let chat;
     let chat1 = 0;
     let scaleX = 140;
     let scaleY = 210;
     let op3 = 0;
     let screen = "none";
     let subScreen = "none";
     let startValue = 0;
     let bagSelVal = 0;
     let curStarOp = "none";
     let playIdOn = false;
     let bagOn = false;
     let startMenOn = false;
     //
     let proN1;
     let pron1;
     let proNN1;
     let proN2;
     let pron2;
     let proNN2;
     let nn1;
     let nN1;
     let nNN1;
     //
     function gender() {
      if (player.gender === "boy") {
       document.getElementById("playerDraw") .src = "Player-draw.jpg";
       proN1 = "He";
       pron1 = "he";
       proNN1 = "HE";
       proN2 = "Him";
       pron2 = "him";
       proNN2 = "HIM";
       nn1 = "boy";
       nN1 = "Boy";
       nNN1 = "BOY";
      } else if (player.gender === "girl") {
        document.getElementById("playerDraw") .src = "Player2-draw.jpg";
        proN1 = "She";
        pron1 = "she";
        proNN1 = "SHE";
        proN2 = "Her";
        pron2 = "her";
        proNN2 = "HER";
        nn1 = "girl";
        nN1 = "Girl";
        nNN1 = "GIRL";
      } else if (player.gender === "none") {
       document.getElementById("playerDraw") .src = "images/Player-draw.jpg";
       proN1 = "The kid";
       pron1 = "the kid";
       proNN1 = "THE KID";
       proN2 = "The kid's";
       pron2 = "the kid's";
       proNN2 = "THE KID'S";
       nn1 = "kid";
       nN1 = "Kid";
       nNN1 = "KID";
      }
     }
     let playerAni1;
     let playerAni2;
     function ani2() {
      playerAni2 = setInterval(function () {
      scaleX -= 1;
      scaleY -= 1;
      
      document.getElementById("playerDraw") .style.width = scaleX + "px";
      document.getElementById("playerDraw") .style.height = scaleY + "px";
        if (scaleX <= 0) {
         clearInterval(playerAni2);
         setTimeout (function () {
          x = 3;
          y = 4;
          updatePlayer();
          createRoom1A();
          curRoom = "room1A";
          document.getElementById("pokemonTheme") .pause();
          chat = "guide";
          document.getElementById("chat-box") .style.opacity = 1 + " ";
          document.getElementById("chatBox") .innerHTML = "what... was that?";
          document.getElementById("aBut") .disabled = false;
          document.getElementById("bBut") .disabled = false;
          document.getElementById("start") .disabled = true;
          subScreen = "startMenu";
          
          document.getElementById("name") .innerHTML = player.name;
          document.getElementById("numId") .innerHTML = player.id;
          document.getElementById("cash") .innerHTML = player.money;
          chat1 = 0;
         } , 3000)
         };
        } ,100)
     }
     function ani1() {
      playerAni1 = setInterval(function () {
      op3 += 0.1;
      document.getElementById("playerDraw") .style.opacity = op3 + "";
        if (op3 >= 1) {
         clearInterval(playerAni1);
         
         setTimeout(function () {
          ani2();
         } , 3000)
         
         };
        } ,100)
     }
     function startScreen() {
      document.getElementById("nameScreen") .style.top = 0 + "px";
      screen = "name1";
     }
     let choosenValue = 0;
     let choosenValue2;
     let choosenName = " ";
     let op1 = 0;
     let op2 = 1;
     let interval3;
     function interval4() {
      interval3 = setInterval(function () {
      op2 -= 0.1;
      document.getElementById("professorMangrove") .style.opacity = op2 + "";
        if (op2 <= 0) {
         clearInterval(interval3);
         
          setTimeout(function () {
           
           ani1();
          }, 3000)
 
         };
        } ,100)
       }
            
     let interval1 = setInterval(function () {
     op1 += 0.01;
     document.getElementById("mandoDraw") .style.opacity = op1 + "";
      if (op1 >= 1) {
       clearInterval(interval1);
       interval2();
      }
     }, 100);
     function interval2() {
      let interval1 = setInterval(function () {
      op1 -= 0.1;
      document.getElementById("mandoDraw") .style.opacity = op1 + "";
        if (op1 <= 0) {
         clearInterval(interval1);
         document.getElementById("mandoDraw") .style.top = -1000 + "px";
         startScreen();
       }
      }, 100);
     }
     

   function addItem(itemName, amount, addToFront) {
    // 1. Try to find if the item is already there
    let existingItem = bag.find(function(item) {
      return item.id === itemName;
   });

   // 2. If it exists, just increase the number
   if (existingItem) {
     existingItem.quantity += amount;
   } 
  // 3. If it's new, create the object and choose where it goes
   else {
    let newItem = { id: itemName, quantity: amount };
    
    if (addToFront) {
      bag.unshift(newItem); // Adds to the start
    } else {
      bag.push(newItem);    // Adds to the end
    }
  }
}
/*
// Example usage:
addItem('pokeball', 1);        // Adds 1 to the existing stack
addItem('revive', 1, true);    // Adds a brand new item to the very front */
//==============================

function setHitboxe(targetX, targetY, resetX, resetY, reqDir, action) {
  let pos = getWorldPos();

  if (pos.wx === targetX && pos.wy === targetY) {
    if (!reqDir || direction === reqDir) {
      if (movement === "fixed") {
        x = resetX;
        y = resetY;
        updatePlayer();
      } else {
        // Corrected: Place the background so that the current 
        // screen position (x, y) aligns with the reset world tile.
        xB = x - resetX;
        yB = y - resetY;
        updateBackG();
      }
      
      if (action) {
        action();
      }
    }
  }
}

function setPosition(id, xpos, ypos, props = {}) {
  let mainDiv = document.getElementById("mainDivEl");
  mainDiv.innerHTML += `<div class="object" id="${id}"></div>`;

  let obj = document.getElementById(id);
  
  obj.style.position = "absolute";
  obj.style.top = ypos * 25 + "px";
  obj.style.left = xpos * 25 + "px";
  
  // New: Rotation (e.g., props.rotate = "45deg")
  if (props.rotate) obj.style.transform = `rotate(${props.rotate})`;

  // Existing properties
  if (props.zIndex) obj.style.zIndex = props.zIndex;
  if (props.border) obj.style.border = props.border;
  if (props.borderLeft) obj.style.borderLeft = props.borderLeft;
  if (props.borderRight) obj.style.borderRight = props.borderRight;
  if (props.borderBottom) obj.style.borderBottom = props.borderBottom;
  if (props.borderTop) obj.style.borderTop = props.borderTop;
  if (props.borderRadius) obj.style.borderRadius = props.borderRadius;
  if (props.bgColor) obj.style.backgroundColor = props.bgColor;
  if (props.background) obj.style.background = props.background;
  
  obj.style.width = props.width || "25px";
  obj.style.height = props.height || "25px";
}
/*
setPosition("wall-1", 5, 2, {
  bgColor: "red",
  borderRadius: "5px"
});
setPosition("water-zone", 10, 5, {
  background: "linear-gradient(to bottom, #0000ff, #00ffff)",
  border: "2px solid white",
  width: "50px",
  height: "50px"
});
setPosition("ledge", 3, 8, {
  borderBottom: "4px solid brown",
  bgColor: "#8B4513"
}); 
setPosition("bridge-1", 5, 5, {
  bgColor: "gray",
  zIndex: 10, 
  width: "75px"
});
setPosition("carpet-1", 5, 5, {
  bgColor: "darkred",
  zIndex: -5 
});
setPosition("diamond-wall", 4, 4, {
  bgColor: "gold",
  rotate: "45deg", // Rotates the whole square
  border: "2px solid black"
});
*/
     function chatBoxShow(text, chatName) {
      chat = chatName;
      document.getElementById("chatBox") .innerHTML = text;
      document.getElementById("chat-box") .style.opacity = 1 + " ";
      document.getElementById("upBut") .disabled = true;
      document.getElementById("downBut") .disabled = true;
      document.getElementById("leftBut") .disabled = true;
      document.getElementById("rightBut") .disabled = true;
      document.getElementById("start") .disabled = true;
     }
     function chatBoxRev() {
      
      document.getElementById("chat-box") .style.opacity = 0 + " ";
      document.getElementById("upBut") .disabled = false;
      document.getElementById("downBut") .disabled = false;
      document.getElementById("leftBut") .disabled = false;
      document.getElementById("rightBut") .disabled = false;
      document.getElementById("start") .disabled = false;
     }
     
     //======
     function select() {
      if (bagOn) {
       startMenOn = false;
       if (bagSelVal === 0) {
        document.getElementById("bagItems") .style.color = "cyan";
        document.getElementById("bagKeyItems") .style.color = "black";
        document.getElementById("bagScrollZone") .innerHTML = " ";
        for (let i = 0; i < bag[0].length; i++) {
         document.getElementById("bagScrollZone") .innerHTML += "<p>" + bag[0][i].id + " ×" + bag[0][i].quantity + "</p>";
        }
       }
       if (bagSelVal === 1) {
        document.getElementById("bagItems") .style.color = "black";
        document.getElementById("bagKeyItems") .style.color = "cyan";
        document.getElementById("bagScrollZone") .innerHTML = " ";
        for (let i = 0; i < bag[1].length; i++) {
         document.getElementById("bagScrollZone") .innerHTML += "<p>" + bag[1][i].id + " ×" + bag[1][i].quantity + "</p>";
        }
        bagSelVal = -1;
       }
       bagSelVal++;
      }
      if (bagOn || playIdOn) {
    return; // Stop here and don't move the menu cursor
  }
      if (startMenOn) {
       if (startValue === 0) {
        document.getElementById("pDex") .style.color = "cyan";
        document.getElementById("poke") .style.color = "black";
        document.getElementById("bag") .style.color = "black";
        document.getElementById("playId") .style.color = "black";
        document.getElementById("save") .style.color = "black";
        document.getElementById("exit") .style.color = "black";
        curStarOp = "pDex";
       }
       if (startValue === 1) {
        document.getElementById("pDex") .style.color = "black";
        document.getElementById("poke") .style.color = "cyan";
        document.getElementById("bag") .style.color = "black";
        document.getElementById("playId") .style.color = "black";
        document.getElementById("save") .style.color = "black";
        document.getElementById("exit") .style.color = "black";
        curStarOp = "poke";
       }
       if (startValue === 2) {
        document.getElementById("pDex") .style.color = "black";
        document.getElementById("poke") .style.color = "black";
        document.getElementById("bag") .style.color = "cyan";
        document.getElementById("playId") .style.color = "black";
        document.getElementById("save") .style.color = "black";
        document.getElementById("exit") .style.color = "black";
        curStarOp = "bag";
       }
       if (startValue === 3) {
        document.getElementById("pDex") .style.color = "black";
        document.getElementById("poke") .style.color = "black";
        document.getElementById("bag") .style.color = "black";
        document.getElementById("playId") .style.color = "cyan";
        document.getElementById("save") .style.color = "black";
        document.getElementById("exit") .style.color = "black";
        curStarOp = "playId";
       }
       if (startValue === 4) {
        document.getElementById("pDex") .style.color = "black";
        document.getElementById("poke") .style.color = "black";
        document.getElementById("bag") .style.color = "black";
        document.getElementById("playId") .style.color = "black";
        document.getElementById("save") .style.color = "cyan";
        document.getElementById("exit") .style.color = "black";
        curStarOp = "save";
       }
       if (startValue === 5) {
        document.getElementById("pDex") .style.color = "black";
        document.getElementById("poke") .style.color = "black";
        document.getElementById("bag") .style.color = "black";
        document.getElementById("playId") .style.color = "black";
        document.getElementById("save") .style.color = "black";
        document.getElementById("exit") .style.color = "cyan";
        curStarOp = "exit";
        startValue = -1;
       }
       startValue++;
      }
     }
     function start() {
      if (subScreen === "startMenu") {
       document.getElementById("startMenu") .style.opacity = 1 + " ";
       document.getElementById("upBut") .disabled = true;
       document.getElementById("downBut") .disabled = true;
       document.getElementById("leftBut") .disabled = true;
       document.getElementById("rightBut") .disabled = true;
       startMenOn = true;
       subScreen = "null2";
       chat = "null";
      } else if (subScreen === "null2") {
       document.getElementById("startMenu") .style.opacity = 0 + " ";
       document.getElementById("upBut") .disabled = false;
       document.getElementById("downBut") .disabled = false;
       document.getElementById("leftBut") .disabled = false;
       document.getElementById("rightBut") .disabled = false;
       startValue = 0;
       subScreen = "startMenu"; 
       startMenOn = false;
       curStarOp = "none";
       chat = "none";
      }
      if (screen === "intro") {}
      if (screen === "name2") {
       if (document.getElementById("nameInput") .value === " ") {
        choosenValue = Math.floor(Math.random() * 2);
        console.log(choosenValue);
         if (choosenValue >= 1) {
          choosenName = "Anointo";
         } else {
           choosenName = "Amazo";
          }
        document.getElementById("nameInput") .value = choosenName;
       }
       player.name = document.getElementById("nameInput") .value;
       player.id = Math.floor(Math.random() * 1000000);
       player.gender = document.getElementById("genderSelect") .value;
        if (player.gender === "rand") {
         choosenValue2 = Math.floor(Math.random() * 2);
         console.log(choosenValue2);
          if (choosenValue2 >= 1) {
           player.gender = "boy";
          } else {
           player.gender = "girl";
           }
        }
       document.getElementById("nameScreen2") .style.top = -1000 + "px"; 
       screen = "intro";
       document.getElementById("professorMangrove") .style.top = 20 + "px";
       document.getElementById("chat-box") .style.opacity = 1 + "";
       chat = "professor";
       console.log(player.id);
       console.log(player.name);
       console.log(player.gender);
      }
      if (screen === "name1") {
       document.getElementById("nameScreen") .style.top = -1000 + "px";
       document.getElementById("nameScreen2") .style.top = 0 + "px";
       document.getElementById("pokemonTheme") .play();
       screen = "name2";
      }
      }
      let chatBox1;
      let chatBox2;
      
      
      function A() {
       gender();
       chatBox1 = [
        "Your " + player.name + ". i see,<br> your a " + nn1 + ", it's nice to meet you!",
        "I'm a Pokémon professor! I study Pokémon! Your " + player.name + "-",
        "A 12 year old " + nn1 + ", who just moved to the Mandonor reigon!",
        "You currently live in Malet town, A small, peaceful town... but that peace...",
        "It is just a few seconds away from being broken, that's when YOU come in!",
        "I heard " + nn1 + "s like you strive for adventure!",
        player.name + "! the balance of world peace...",
        "No... the fate of the World we all know is in your hands!<br>Come visit me in my lab-",
        "So the beautiful world of Pokémon CONTINUES!"
        ];
        chatBox2 = [
         "................................",
         "well.... better go to the lab...",
         "*press the 'A' button to interact with almost anything*",
         "*press the 'B' button to decline/cancel almost anything*",
         "*press the 'D-pad' to move*",
         "*press 'select' to select options*",
         "*press 'start' to bring out the start Menu*",
         "*" + player.name + ", better go down stairs!*",
        ]
        if (curStarOp === "bag") {
         document.getElementById("bagCon") .style.display = "block";
         document.getElementById("start") .disabled = true;
         bagOn = true;
        }
        if (curStarOp === "playId") {
         document.getElementById("playerCard") .style.opacity = 1 + " ";
         document.getElementById("start") .disabled = true;
         playIdOn = true;
        }
        setHitboxe(11, 11, 11, 11, "right", function () {
         if (chat === "none") {
          chatBoxShow("looks cozy! maybe a little nap.... zzzz....", "bed1");
         } else if (chat === "bed1") {
        chatBoxRev();
        chat = "none";
        }
        });
        setHitboxe(11, 10, 11, 10, "right", function () {
         if (chat === "none") {
          chatBoxShow("looks cozy! maybe a little nap.... zzzz....", "bed1");
         } else if (chat === "bed1") {
        chatBoxRev();
        chat = "none";
        }
        });
        setHitboxe(12, 9, 12, 9, "down", function () {
         if (chat === "none") {
          chatBoxShow("looks cozy! maybe a little nap.... zzzz....", "bed1");
         } else if (chat === "bed1") {
        chatBoxRev();
        chat = "none";
        }
        });
        setHitboxe(3, 4, 3, 4, "up", function () {
         if (chat === "none") {
          chatBoxShow("it's a tv", "TV1");
         } else if (chat === "TV1") {
        chatBoxRev();
        chat = "none";
        }
       });
        if (chat === "guide") {
         document.getElementById("chatBox") .innerHTML = chatBox2[chat1];
          if (chat1 <= 7) {
           chat1++;
          } else {
           document.getElementById("chat-box") .style.opacity = 0 + "";
           document.getElementById("upBut") .disabled = false;
           document.getElementById("downBut") .disabled = false;
           document.getElementById("rightBut") .disabled = false;
           document.getElementById("leftBut") .disabled = false;
           document.getElementById("start") .disabled = false;
           chat = "none";
           document.getElementById("startTown") .play();
          }
        }
        if (chat === "professor") {
         document.getElementById("chatBox") .innerHTML = chatBox1[chat1];
          if (chat1 <= 8) {
           chat1++;
          } else {
           document.getElementById("chat-box") .style.opacity = 0 + "";
           interval4();
           document.getElementById("upBut") .disabled = true;
           document.getElementById("downBut") .disabled = true;
           document.getElementById("leftBut") .disabled = true;
           document.getElementById("rightBut") .disabled = true;
           document.getElementById("aBut") .disabled = true;
           document.getElementById("bBut") .disabled = true;
          }
        }
      }
      
      function B() {
       if (bagOn) {
        document.getElementById("bagCon") .style.display = "none";
        document.getElementById("start") .disabled = false;
        bagOn = false;
        document.getElementById("bag").style.color = "black";
        startValue = 0;
        curStarOp = "pDex";
        document.getElementById("pDex").style.color = "cyan";
       }
       if (playIdOn) {
        document.getElementById("playerCard") .style.opacity = 0 + " ";
        document.getElementById("start") .disabled = false;
        playIdOn = false;
        document.getElementById("playId").style.color = "black";
        startValue = 0;
        curStarOp = "pDex";
        document.getElementById("pDex").style.color = "cyan";
       }
      }
      /*
      function left() {
       x -= 1;
       direction = "left";
       console.log(x + ", " + y);
       updatePlayer();
       room1A();
      }
      */
      leftBut.addEventListener("touchstart", function () {
      	leftOn = true;
          rightOn = false;
          upOn = false;
          downOn = false;
      });
      leftBut.addEventListener("touchend", function () {
      	leftOn = false;
          rightOn = false;
          upOn = false;
          downOn = false;
      });
      /*
      function right() {
       x += 1;
       direction = "right";
       console.log(x + ", " + y);
       updatePlayer();
       room1A();
      }
      */
      rightBut.addEventListener("touchstart", function () {
      	leftOn = false;
          rightOn = true;
          upOn = false;
          downOn = false;
      });
      rightBut.addEventListener("touchend", function () {
      	leftOn = false;
          rightOn = false;
          upOn = false;
          downOn = false;
      });
      /*
      function up() {
       y -= 1;
       direction = "up";
       console.log(x + ", " + y);
       updatePlayer();
       room1A();
      }
      */
      upBut.addEventListener("touchstart", function () {
      	leftOn = false;
          rightOn = false;
          upOn = true;
          downOn = false;
      });
      upBut.addEventListener("touchend", function () {
      	leftOn = false;
          rightOn = false;
          upOn = false;
          downOn = false;
      });
      /*
      function down() {
       y += 1;
       direction = "down";
       console.log(x + ", " + y);
       updatePlayer();
       room1A();
      }
      */
      downBut.addEventListener("touchstart", function () {
      	leftOn = false;
          rightOn = false;
          upOn = false;
          downOn = true;
      });
      downBut.addEventListener("touchend", function () {
      	leftOn = false;
          rightOn = false;
          upOn = false;
          downOn = false;
      });
      updatePlayer();
      