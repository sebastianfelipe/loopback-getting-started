module.exports = function(Review) {

	Review.beforeRemote('create', function(context, user, next) {
		console.log("Reviewer: create");
		console.log(context.args.data);
		context.args.data.date = Date.now();
		context.args.data.publisherId = context.req.accessToken.userId;
		next();
	});
	
};
