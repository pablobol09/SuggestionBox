app.controller('SuggestionController', ['$scope', '$routeParams', 
	 'suggestions', function($scope, $routeParams,
		suggestions) {
		$scope.night = suggestions.nights[$routeParams.id];
		$scope.addComment = function() {

		if(!$scope.body || $scope.body === "") {
        return;
        }

		$scope.night.comments.push({

      
         	body: $scope.body,
         	upvotes: 0,
         	
           });


		//after submit, clear input
        $scope.body = '';
        

	    };


	    $scope.upVote = function(comment) {
		comment.upvotes += 1;
		};

		


}]);