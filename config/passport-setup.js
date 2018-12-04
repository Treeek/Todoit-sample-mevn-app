const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");
const User = require("../models/user");

passport.use(new LocalStrategy({ usernameField: "email" },
	(username, password, done) => {
		User.findOne({ email: username }, function (err, user) {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			if (user.password != password) { return done(null, false); }
			return done(null, user);
		});
	}
));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	db.collections.users.findById(id, function (err, user) {
		if (err) { return done(err); }
		done(null, user);
	});
});

module.exports = passport;