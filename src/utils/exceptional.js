msngr.extend((function () {
	return {
		utils: {
			ThrowNotImplementedException: function () {
				throw "Method is not implemented";
			},
			ThrowRequiredParameterMissingOrUndefinedException: function (params) {
				if (msngr.utils.isArray(params)) {
					throw params.join(",") + " are required parameters and must not be missing or undefined";
				} else {
					throw params + " is a required parameter and must not be missing or undefined";
				}
			},
			ThrowMismatchedInterfaceException: function (interface) {
				throw "The implementation does not match the " + (interface || "unknown") + " interface";
			},
			ThrowInvalidMessage: function () {
				throw "The message is not valid";
			},
			ThrowEventNotFoundException: function () {
				throw "The event is not found to be unregistered"
			}
		}
	};
}()));