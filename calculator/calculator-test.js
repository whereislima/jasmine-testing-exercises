
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years:15,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toEqual('739.69');

});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1000,
    years:1,
    rate: 4
  }
  expect(calculateMonthlyPayment(values)).toEqual('85.15'); 
});



it("should handle high rates", function() {
  const values = {
    amount: 100000,
    years:15,
    rate: 49
  }
  expect(calculateMonthlyPayment(values)).toEqual('4086.37');
});

