describe('testing service',function () {

 var dataserviceMock;
 var httpBackend;
 
     beforeEach(module('countryApp'));


   beforeEach(inject(function(dataservice,$httpBackend) {
	   
	      dataserviceMock =   dataservice;
		  httpBackend = $httpBackend;
	   
	 
				   
 
	     
	   
   } ));
   
  
   
   
   it('should load data',function(){
	   
	   var returnData = { excited: true };
	   var result;
	    httpBackend.whenGET("countries.json").respond(returnData);
		   
		     
	  
       dataserviceMock.getAvengers().then(function(data){
		   
		   
		     result = data;
		   
		    
		   
		   
	   });
	   
	   httpBackend.flush();
	   
	   
	   expect(result).toEqual({ excited: false});
	   
   });
















});