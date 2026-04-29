
//============================================================
//============================================================
//Room 1//
//============================================================
//============================================================

//==============================
//Room 1A
//==============================

function createRoom1A()  {
  let count1 = 1;
  let count2 = 2;

  while ((count1 < 14) && (count2 < 12)) {
    setPosition("obj" + count1 + "A", 1, count2, {
      bgColor: "#333333",
      borderRight: "2px solid black",
      zIndex: 5
    });
    count1++;
    count2++;
  }

  count2 = 2;
  while ((count1 < 22) && (count2 < 24)) {
    setPosition("obj" + count1 + "A", count2, 12, {
      bgColor: "#333333",
      borderTop: "2px solid black",
      zIndex: 5
    });
    count1++;
    count2++;
  }

  count2 = 2;
  while ((count1 < 32)  && (count2 < 32)) {
    setPosition("obj" + count1 + "A", 13, count2, {
      bgColor: "#333333",
      borderLeft: "2px solid black",
      zIndex: 5
    });
    count1++;
    count2++;
  }

  count2 = 2;
  while ((count1 < 43) && (count2 < 20)) {
    setPosition("obj" + count1 + "A", count2, 1, {
      bgColor: "#333333",
      borderBottom: "2px solid black",
      zIndex: 5
    });
    count1++;
    count2++;
  }

  setPosition("obj44A", 1, 1, {
    bgColor: "#333333",
    zIndex: 4
  });

  setPosition("obj45A", 13, 1, {
    bgColor: "#333333",
    borderLeft: "solid 2px #333333",
    borderTop: "solid 2px #333333",
    zIndex: 4
  });

  setPosition("obj46A", 13, 12, {
    bgColor: "#333333",
    borderLeft: "solid 2px #333333",
    borderBottom: "solid 2px #333333",
    zIndex: 4
  });

  setPosition("obj47A", 1, 12, {
    bgColor: "#333333",
    borderLeft: "solid 2px #333333",
    borderBottom: "solid 2px #333333",
    zIndex: 4
  });

  setPosition("obj48A", 3, 3, {
    bgColor: "#000000",
    border: "solid 3px #333333",
    borderBottom: "solid 2px #333333",
    zIndex: 3
  });

  setPosition("obj49A", 3, 2, {
    bgColor: "#222222",
    border: "solid 3px #222222",
    borderBottom: "solid 2px #333333",
    zIndex: 3
  });
  //rug:
  setPosition("obj50A", 5, 5, {
    background: "linear-gradient(to bottom, brown, #F16666)",
    width: "100px",
    height: "100px",
    borderTop: "solid 4px black",
    borderBottom: "solid 4px black",
    zIndex: 3
  });
  //stairs:
  setPosition("obj51A", 11, 2, {
    background: "linear-gradient(to bottom, #000000, #FFFFFF)",
    border: "solid 2px #222222",
    width: "50",
    zIndex: 3
  });
  //rug2ndhalf:
  setPosition("obj52A", 6, 6, {
    background: "red",
    border: "solid 2px #000000",
    height: "25px",
    width: "50px",
    borderRadius: "25px 25px 0 0",
    zIndex: 3
  });
  
  setPosition("obj53A", 6, 7, {
    background: "white",
    border: "solid 2px #000000",
    height: "25px",
    width: "50px",
    borderRadius: "0 0 25px 25px",
    zIndex: 3
  });
  
  setPosition("obj54A", 6.75, 6.7, {
    background: "cyan",
    rotate: "45deg",
    height: "12.5",
    width: "12.5",
    border: "solid 2px #000000",
    zIndex: 3
  });
  //floor:
  setPosition("obj55A", 2, 2, {
    background: "grey",
    border: "solid 2px black",
    height: "250px",
    width: "275px",
    zIndex: 2
  });
  //bed:
  setPosition("obj56A", 11.8, 9.5, {
    background: "white",
    borderTop: "solid 2px black",
    borderRight: "solid 2px black",
    borderLeft: "solid 2px black",
    zIndex: 4
  });
  
  setPosition("obj57A", 11.8, 10.5, {
    background: "red",
    borderRight: "solid 2px black",
    borderBottom: "solid 2px black",
    borderLeft: "solid 2px black",
    zIndex: 4
  });
  
  setPosition("obj58A", 11.8, 11.5, {
    background: "#550000",
    height: "10",
    border: "solid 2px black",
    zIndex: 4
  });
 }
 function room1A() {
   setHitboxe(3, 3, 3, 4, "up");
   setHitboxe(3, 3, 2, 3, "right");
   setHitboxe(3, 2, 2, 2, "right");
   setHitboxe(3, 3, 4, 3, "left");
   setHitboxe(3, 2, 4, 2, "left");
   
   setHitboxe(12, 11, 11, 11, "right");
   setHitboxe(12, 10, 11, 10, "right");
   setHitboxe(12, 10, 12, 9,  "down");
   
   setHitboxe(11, 2, 11, 2, false, function () {
    y = 3;
    updatePlayer();
    updateBackG();
    curRoom = "room1B";
    movement = "free";
    updateRooms();
    });
    setHitboxe(12, 2, 12, 2, false, function () {
    y = 3;
    updatePlayer();
    updateBackG();
    curRoom = "room1B";
    movement = "free";
    updateRooms();
    });
   let X1 = 2;
   let Y1 = 2;
   while (Y1 < 12) {
    setHitboxe(1, Y1, 2, Y1, "left");
    Y1++;
   }
   Y1 = 2;
   while (Y1 < 12) {
    setHitboxe(13, Y1, 12, Y1, "right");
    Y1++;
   }
   while (X1 < 13) {
    setHitboxe(X1, 1, X1, 2, "up");
    X1++;
   }
   X1 = 2;
   while (X1 < 13) {
    setHitboxe(X1,12, X1, 11, "down");
    X1++;
   }
  }
  
//==============================
//Room 1B
//==============================

  function createRoom1B() {
    //floor:
    setPosition("obj1B", 4, 2, {
    bgColor: "grey",
    width: "200px",
    height: "225px",
    zIndex: 3
  });
  //walls:
  setPosition("obj2B", 4, 1, {
    bgColor: "#333333",
    borderBottom: "2px solid black",
    width: "200px",
    zIndex: 4
  });
  setPosition("obj3B", 12, 2, {
    bgColor: "#333333",
    borderLeft: "2px solid black",
    height: "225px",
    zIndex: 4
  });
  setPosition("obj4B", 4, 11, {
    bgColor: "#333333",
    borderTop: "2px solid black",
    width: "200px",
    zIndex: 4
  });
  //stairs:
  setPosition("obj10B", 10, 2, {
    background: "linear-gradient(to bottom, #000000, #FFFFFF)",
    border: "solid 2px #222222",
    width: "50px",
    zIndex: 3
  });
  //conerWalls:
  setPosition("obj11B", 12, 1, {
    bgColor: "#333333",
    border: "2px solid #333333",
    borderRight: "0",
    zIndex: 3
  });
  setPosition("obj12B", 12, 11, {
    bgColor: "#333333",
    border: "2px solid #333333",
    borderRight: "0",
    borderBottom: "0",
    zIndex: 3
  });
  }
  function room1B() {
    setHitboxe(10, 2, 10, 2, false, function () {
    y = 3;
    xB = 0;
    yB = 0;
    updatePlayer();
    updateBackG();
    curRoom = "room1A";
    movement = "fixed";
    updateRooms();
    });
    setHitboxe(11, 2, 11, 2, false, function () {
    y = 3;
    xB = 0;
    yB = 0;
    updatePlayer();
    updateBackG();
    curRoom = "room1A";
    movement = "fixed";
    updateRooms();
    });
  }