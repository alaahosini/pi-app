function login() {
Pi.authenticate(['username'], function(auth) {
alert('Welcome ' + auth.user.username);
}, function(error) {
console.error(error);
});
}


function pay() {
Pi.createPayment({
amount: 1,
memo: "Test Payment",
metadata: { productId: "001" }
}, {
onReadyForServerApproval: function(paymentId) {
console.log(paymentId);
},
onReadyForServerCompletion: function(paymentId, txid) {
console.log(txid);
},
onCancel: function(paymentId) {
console.log('Cancelled');
},
onError: function(error) {
console.error(error);
}
});
}
