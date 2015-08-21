angular.module('starter.controllers', ['ionic'])



.controller('welcomeCtrl', function($scope,$state,$window,$timeout,$ionicModal) {

			console.log("welcomeCtrl");
			localStorage.clear();

})
.controller('gamesCtrl', function($scope,$state,$window,$timeout,$ionicModal) {
				
				
				 console.log("game controller");

			 				
		 		var rcount = localStorage.getItem('rcount');
				localStorage.getItem('rcount',rcount);
				console.log(rcount);
				$scope.right=rcount;
				$scope.rightarr=[];
				$scope.rightarr.push(rcount);
				console.log($scope.rightarr);
				var wcount = localStorage.getItem('wcount');
				localStorage.getItem('wcount',wcount);
				console.log(wcount);
				$scope.wrong=wcount;

				var num = Number($scope.right);
				console.log(num);	

				var num1 = Number($scope.wrong);
				console.log(num1);	

				var stop=[];

				stop.push(num,num1);
				console.log(stop);
					stop1=stop[0]+stop[1];
					console.log(stop1);
					if(stop1==10)
					{
						$state.go('games1');
					}	
						

			 function shuffle(o){ 
   				for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    		return o;
			};	

						
		 			var wcounter=1;
		 			var rcounter=1;
		 			
	 				$scope.val1=Math.floor((Math.random() * 10) + 1);
	 				$scope.val2=Math.floor((Math.random() * 10) + 1);
	 				var summation=$scope.val1+$scope.val2;
	 					console.log(summation);
	 				var img="img/img.jpg";
					var img1="img/img1.jpg";
				 	var img3="img/img3.jpg";
				 	var img4="img/img4.jpg";

				 	$scope.right;	

	 				$scope.imgarr = [];
					$scope.imgarr1 = [];	
					$scope.answer = [];
					 

					for (var i = 0; i <$scope.val1; i++) {
					$scope.imgarr.push("img/object"+i+".png");
					};

					for (var i = 0; i <$scope.val2; i++) {
					$scope.imgarr1.push("img/object"+i+".png");
					};

					console.log($scope.imgarr);
					console.log($scope.imgarr1);

					$scope.answer.push(summation,summation+7,summation-3,summation+4);
					
					shuffle($scope.answer);
					console.log(shuffle($scope.answer));	


						console.log($scope.answer[0]);

					$ionicModal.fromTemplateUrl('templates/display.html', {
					    scope: $scope
					  }).then(function(modal) {
					    animation: 'slide-in-up'
					    $scope.modal = modal;
					  });

					  	$scope.values;
				      var arrright= 'img/hface.png';
				      var arrwrong='img/sface.png';


	 				$scope.button1=function(ans)
	 				{
	 						 
	 						console.log(ans);
	 					if(summation==ans)
	 					{	 $scope.values=arrright;
	 						console.log("success");
	 							
	 						if(rcount==null || rcount==undefined || rcount==0)
	 						{
	 							localStorage.setItem('rcount',rcounter);
	 							console.log(rcount);
	 						}
	 						else{

	 							rcount=parseInt(rcount)+1;
	 							localStorage.setItem('rcount',rcount);
	 							console.log(rcount);
	 						}

	 							setTimeout(function() {
	 								$window.location.reload(true);	

	 							}, 1000);
	  										
 									$scope.modal.show();
 					}		
	 					else
	 					{
	 						console.log("fail");
	 						$scope.values=arrwrong;
	 						$scope.modal.show();
	 						if(wcount==null || wcount==undefined || wcount==0)
	 						{
	 							localStorage.setItem('wcount',wcounter);
	 							console.log(wcount);
	 						}
	 						else{

	 							wcount=parseInt(wcount)+1;
	 							localStorage.setItem('wcount',wcount);
	 							console.log(wcount);
	 							
	 						}
	 						
	  						
	  						setTimeout(function() {
	 								$window.location.reload(true);	

	 							}, 1000);

	 					}

	 					
	 				}

		// For game end page


			$scope.back=function()

				{
					localStorage.clear();					
					$state.go('games');
					$window.location.reload(true);
				}
					if (stop[0]>=stop[1])
					 {
							$scope.face=arrright;
								console.log("happy");
					}
							else{
							$scope.face=arrwrong;	
							console.log("sad");				
								}
						$scope.score=stop[0]-stop[1];			

})


.controller('games1Ctrl', function($scope,$state,$window) {
			console.log("games1controller");

			$scope.back=function()

				{
					localStorage.clear();					
					$state.go('games');
					$window.location.reload(true);
				}
})












				