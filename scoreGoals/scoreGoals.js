$(document).ready(function(){

    let startPosLeft = $(".ball").css("left");
    let startPosBottom = $(".ball").css("bottom");
    var freezeKeeperPosition;
    var totalAttemps = 0;
    var totalGoals = 0;
    var totalMissed = 0;
    var totalSaved = 0;
    var defenderSaved = 0;

    $(".daniAlves").css({left:"200px", bottom: "200px"})
    $(".chiellini").css({left:"850px", bottom: "400px"})
    $(".ronaldo").css({left:"1200px", bottom: "200px"})
    $(".materazzi").css({left:"500px", bottom: "400px"})
    
    // function FootBallPlayer(left, right, bottom, top){
    //     this.left = left;
    //     this.right = right;
    //     this.bottom = bottom;
    //     this.top = top;
    // }

   
        
    var daniAlvesLeft = $(".daniAlves").css("left");
    var daniAlvesLeftNumber = parseInt(daniAlvesLeft.substring(0,daniAlvesLeft.indexOf("p")));
    var daniAlvesBottom = $(".daniAlves").css("bottom");
    var daniAlvesBottomNumber = parseInt(daniAlvesBottom.substring(0,daniAlvesBottom.indexOf("p")));
    var daniAlvesRight = daniAlvesLeftNumber + $(".daniAlves").width();
    var daniAlvesHeight = $(".daniAlves").css("height")
    var daniAlvesTop = daniAlvesBottomNumber + parseInt(daniAlvesHeight.substring(0,daniAlvesHeight.indexOf("p")));
    
    var chielliniLeft = $(".chiellini").css("left");
    var chielliniLeftNumber = parseInt(chielliniLeft.substring(0,chielliniLeft.indexOf("p")));
    var chielliniBottom = $(".chiellini").css("bottom");
    var chielliniBottomNumber = parseInt(chielliniBottom.substring(0,chielliniBottom.indexOf("p")));
    var chielliniRight = chielliniLeftNumber + $(".chiellini").width();
    var chielliniHeight = $(".chiellini").css("height")
    var chielliniTop = chielliniBottomNumber + parseInt(chielliniHeight.substring(0,chielliniHeight.indexOf("p")));
    
    var ronaldoLeft = $(".ronaldo").css("left");
    var ronaldoLeftNumber = parseInt(ronaldoLeft.substring(0,ronaldoLeft.indexOf("p")));
    var ronaldoBottom = $(".ronaldo").css("bottom");
    var ronaldoBottomNumber = parseInt(ronaldoBottom.substring(0,ronaldoBottom.indexOf("p")));
    var ronaldoRight = ronaldoLeftNumber + ($(".ronaldo").width());
    var ronaldoHeight = $(".ronaldo").css("height")
    var ronaldoTop = ronaldoBottomNumber + parseInt(ronaldoHeight.substring(0,ronaldoHeight.indexOf("p")));
    
    var materazziLeft = $(".materazzi").css("left");
    var materazziLeftNumber = parseInt(materazziLeft.substring(0,materazziLeft.indexOf("p")));
    var materazziBottom = $(".materazzi").css("bottom");
    var materazziBottomNumber = parseInt(materazziBottom.substring(0,materazziBottom.indexOf("p")));
    var materazziRight = materazziLeftNumber + $(".materazzi").width();
    var materazziHeight = $(".materazzi").css("height")
    var materazziTop = materazziBottomNumber + parseInt(materazziHeight.substring(0,materazziHeight.indexOf("p")));;

    var ballLeft = $(".ball").css("left");
    var ballLeftNumber = parseInt(ballLeft.substring(0,ballLeft.indexOf("p")));
    var ballBottom = $(".ball").css("bottom");
    var ballBottomNumber = parseInt(ballBottom.substring(0,ballBottom.indexOf("p")))
    var ballRight = ballLeftNumber + $(".ball").width();
    var ballHeight = $(".ball").css("height")
    var ballTop = ballBottomNumber + parseInt(ballHeight.substring(0,ballHeight.indexOf("p")));

            // var daniAlves = new FootBallPlayer( daniAlvesLeft, daniAlvesRight, daniAlvesBottom , daniAlvesTop)

    function checkCollision(footballPlayerLeft, footballPlayerRight, footballPlayerBottom , footballPlayerTop){
        if(ballRight < footballPlayerLeft || footballPlayerRight > ballLeftNumber || ballTop < footballPlayerBottom || ballBottomNumber > footballPlayerTop){
            $(".defenderWin").show(1000).delay(1000).hide(500);
            debugger
            totalAttemps += 1;
            $("#total-attempt").html(totalAttemps);
            totalMissed += 1;
            $("#defender-saves").html(defenderSaved);
            setTimeout();
        }
    }
    

    $(".start-game").click(function(){
        var x = document.getElementById("myAudio");
        function playAudio(){
            x.play();
        }
        $(".start-game").hide();
        playAudio();

        $(".daniAlves").animate({left:"800px", bottom: "300px"}, 2000)
        $(".chiellini").animate({left:"600px", bottom: "200px"}, 2000)
        $(".ronaldo").animate({left:"50%", bottom: "0px"}, 2000)
        $(".materazzi").animate({left:"700px", bottom: "400px"}, 2000)


        var currentGoalMinPosition = $(".football-goal").css("left");
        var currentGoalMinPositionNumber = parseInt(currentGoalMinPosition.substring(0,currentGoalMinPosition.indexOf("p")));
        var currentGoalMaxPosition = currentGoalMinPositionNumber + $(".football-goal").width();
        var keeperWidth = $(".keeper").width();
        var ballWidth = $(".ball").width();
        
        var max = currentGoalMaxPosition - keeperWidth;
        var min = currentGoalMinPositionNumber;
        
        function getRandomArbitrary() {
            let randomKeeperPosition = Math.random() * (max - min) + min;
            $(".keeper").animate({left: randomKeeperPosition + 20 + "px"})
            
            if(randomKeeperPosition < 50){
                $(".keeperLeft").show();
                $(".keeper").hide();
                $(".keeperRight").hide();
            } 
            else if(randomKeeperPosition > 205){
                $(".keeperRight").show();
                $(".keeper").hide();
                $(".keeperLeft").hide();
            }
            else{
                $(".keeper").show();
                $(".keeperLeft").hide();
                $(".keeperRight").hide();
            }
        }
        function randomPositionDefender() {
            let randomPlayerPosition = Math.random() * (maxPlayerPosition - minPlayerPosition) + minPlayerPosition;
            $(".chiellini").animate({left: randomPlayerPosition + "px"})
            $(".materazzi").animate({left: randomPlayerPosition + "px"})
        }

        
        freezeKeeperPosition = setInterval(getRandomArbitrary,2000)

        function keeperPostionShooting() {
            clearInterval(freezeKeeperPosition);
        }
        
        

        var currentLeftPositionNumber;
        var currentBottomPositionNumber;

        $(window).keydown(function(event){
            event.preventDefault();
            
            let currentLeftPosition = $(".ball").css("left");
            let currentBottomPosition = $(".ball").css("bottom");
            
            $(".daniAlves").animate({left: currentLeftPosition + "30px", bottom: currentBottomPosition},150)
            $(".chiellini").animate({left: currentLeftPosition + "30px", bottom: currentBottomPosition}, 150)
            $(".ronaldo").animate({left: currentLeftPosition , bottom: currentBottomPosition}, 400)
            $(".materazzi").animate({left: currentLeftPosition , bottom: currentBottomPosition + "30px"}, 150)
            
            checkCollision();

             currentLeftPositionNumber = parseInt(currentLeftPosition.substring(0, currentLeftPosition.indexOf("p")));
             currentBottomPositionNumber = parseInt(currentBottomPosition.substring(0, currentBottomPosition.indexOf("p")));
            
                if (event.key === "ArrowRight"){
                    if(currentLeftPositionNumber <= 1410){
                    $(".ball").css({left: currentLeftPositionNumber + 20 + "px"});
                }}

                if (event.key === "ArrowLeft"){
                    if(currentLeftPositionNumber >= 30){
                    $(".ball").css({left: currentLeftPositionNumber - 20 + "px"});
                }}

                if (event.key === "ArrowUp"){
                    if (currentBottomPositionNumber <= 340){
                        if (currentBottomPositionNumber === 340){
                            $(".ball").animate({bottom: 650 + "px"}, function() {
                                goal(currentLeftPositionNumber)
                            });
                            keeperPostionShooting();
                        }
                        else{
                            $(".ball").css({bottom: currentBottomPositionNumber + 20 + "px"});
                        }
                }}
                if (event.key === "ArrowDown"){
                    if(currentBottomPositionNumber >= 0){
                    $(".ball").css({bottom: currentBottomPositionNumber - 20 + "px"});
                    }
                }
               
     
        })
        // var totalAttemps = 0;
        // var totalGoals = 0;
        // var totalMissed = 0;
        // var totalSaved = 0;

        function goal(leftPostx){
           
            var positionKeeper = $(".keeper").css("left");
            var ballPosition = $(".ball").css("left");
            var positionKeeperNumber = parseInt(positionKeeper.substring(0,positionKeeper.indexOf("p"))) + 580;
            var ballPositionNumber = parseInt(ballPosition.substring(0,ballPosition.indexOf("p")));

            if (leftPostx >= 600 && leftPostx <= 840){
      
                if((ballPositionNumber + ballWidth) < positionKeeperNumber || ballPositionNumber > (positionKeeperNumber + keeperWidth)){
                $(".goal-reaction").show(1000).delay(1000).hide(500);
                totalAttemps += 1;
                $("#total-attempt").html(totalAttemps);
                totalGoals += 1;
                $("#total-goals").html(totalGoals);
                }
                if(!((ballPositionNumber + ballWidth) < positionKeeperNumber || ballPositionNumber > (positionKeeperNumber + keeperWidth))){
                    $(".goal-saved").show(1000).delay(1000).hide(500);
                    totalAttemps += 1;
                    $("#total-attempt").html(totalAttemps);
                    totalSaved += 1;
                    $("#total-saved").html(totalSaved);
                }
            }
            else{
                $(".goal-missed").show(1000).delay(1000).hide(500);
                totalAttemps += 1;
                $("#total-attempt").html(totalAttemps);
                totalMissed += 1;
                $("#total-missed").html(totalMissed);
            }
            setTimeout(()=>{
                $(".ball").css({bottom: startPosBottom, left:startPosLeft})
                freezeKeeperPosition = setInterval(getRandomArbitrary, 300)
                randomPositionDefender(1000);
                
            },1000)
        }
        
        $(window).keyup( function() {
            if (event.key === " "){
                $(".ball").animate({bottom: 650 + "px"}, function(){
                    goal(currentLeftPositionNumber);
                    keeperPostionShooting();
                });
            }
          
        })

    })
    
    

    // function shootBall(){
    //     setTimeout(()=>{
    //         $(".ball").css({bottom: startPosBottom, left:startPosLeft})
    //         freezeKeeperPosition = setInterval(getRandomArbitrary, 1000)
    //         randomPositionDefender(1000);
            
    //     },1500)
    // }
});