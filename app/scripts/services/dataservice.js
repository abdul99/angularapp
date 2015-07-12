(function(angular){

angular.module('countryApp').factory('dataservice', dataservice);

dataservice.$inject = ['$http'];
 
   

	    
function dataservice($http, logger) {
      return {
          getAvengers: getAvengers
      };


		  function getAvengers() {
          return $http.get('countries.json')
              .then(getAvengersComplete)
              .catch(getAvengersFailed);

          function getAvengersComplete(response) {
              return response.data;
          }

          function getAvengersFailed(error) {
              logger.error('XHR Failed for getAvengers.' + error.data);
          }
      }


   }
  

  }(angular));