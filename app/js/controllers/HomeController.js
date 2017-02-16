app.controller('HomeController', ['$scope', 
	'suggestions', function($scope, suggestions) {
$scope.nights = suggestions.nights;
$scope.addSuggestion = function() {
 
//if input empty, don't submit
if(!$scope.title || $scope.title === "") {
return;
}
 
//push suggestion posts in suggestions.js`
$scope.nights.push({
title: $scope.title,
upvotes: 0,
comments: [],
id: $scope.nights.length,

});
 
//after submit, clear input
$scope.title = '';
};

$scope.upVote = function(night) {
		night.upvotes += 1;
};

}]);
