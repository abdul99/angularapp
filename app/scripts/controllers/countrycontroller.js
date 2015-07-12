(function(angular){
  

  angular
    .module('countryApp')
    .controller('CountryController', CountryController);



 CountryController.$inject = ['dataservice'];

function CountryController(dataservice) { 

    var vm = this;
    vm.countries = [];
	vm.getCountry =  getCountries();

	  
	

	function getCountries(){

              dataservice.getAvengers().then(function(data){
			
		             
	          	vm.countries = data;
			  })


	                    }

                     
                                   }



}(angular));