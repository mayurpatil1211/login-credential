// controller.js
angular
.module('app').controller('loginCtrl', function($scope, $http, $window) {
	var checkToken = localStorage.getItem('token');
	if(checkToken){
		$window.location = '#!/dashboard';
	}
	else{
	//$cookies.put("test", "mayur");
    $scope.doLogin = function(){
	$scope.email = $scope.email;	
	$scope.password = $scope.password;
	$http.post('http://23.253.107.65/api/v2/user/session', {email:$scope.email, password:$scope.password})
	.then(function(res){
		console.log(res)
		localStorage.setItem('token', res.data.session_token);
		$window.location = '#!/dashboard';
	})
	.catch(function(err){
		console.log(err);
		var div = document.getElementById('errmsg');

div.innerHTML = div.innerHTML + err.data.error.message;
	})
}
}
});



