msngr.extend((function () {
	return {
		interfaces: {
			router: {
				send: function (message) {
					msngr.utils.ThrowNotImplementedException();
				},
				receive: function (message, callback, context) {
					msngr.utils.ThrowNotImplementedException();
				},
				remove: function (identifier) {
					msngr.utils.ThrowNotImplementedException();
				}
			}
		}
	};
}()));