$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0,700,75,35,"black");
createPlatform(200,600,100,20,"black");
createPlatform(250,600,200,20,"red");
createPlatform(300,575,100,20);
createPlatform(150,450,59,17,"red");
createPlatform(325,396,8,40, "black");
createPlatform(500,305,100,20,"");
createPlatform(750, 500, 85, 15);
createPlatform(350, 275, 90, 10);
createPlatform(915, 310, 100, 20);
createPlatform(920, 700, 100 , 20);
createPlatform(1120, 600, 100, 10);
createPlatform(1300, 475, 100, 15, "red");
createPlatform(1250, 330, 50, 10, "black");

    // TODO 3 - Create Collectables
createCollectable("steve", 250, 500, 0.9, 0.9);
createCollectable("steve", 350, 150, 0, 0);
createCollectable("steve", 920, 650, 0, 0);
createCollectable("steve", 1150, 550, 0, 0);

    
    // TODO 4 - Create Cannons
createCannon("bottom", 600, 650);
createCannon("right", 690, 1000);
createCannon("left", 150, 1250);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
