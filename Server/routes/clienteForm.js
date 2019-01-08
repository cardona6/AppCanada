let express = require('express');
let router = express.Router();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;


let Cliente = require('../models/cliente');

// Register
router.get('/clienteForm', function (req, res) {
	res.render('clienteForm');
});
// Login
router.get('/login', function (req, res) {
	res.render('login');
});


// Register User
router.post('/clienteForm', function (req, res) {
            let apellidos= req.body.apellidos;
            let edad= req.body.edad;
            let pais= req.body.pais;
            let name = req.body.name;
	        let email = req.body.email;
            let username = req.body.username;
	        let password = req.body.password;
            let password2 = req.body.password2;
            
       // Validation
        req.checkBody('apellidos', 'apellidos is required').notEmpty();
        req.checkBody('edad', 'edad is required').notEmpty();
        req.checkBody('pais', 'pais is required').notEmpty();
        req.checkBody('name', 'Name is required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    
    if (errors) {
		res.render('clienteForm', {
			errors: errors
		});
	}
	else {
		//checking for email and username are already taken
		User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
        User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
					res.render('clienteForm', {
						user: user,
						mail: mail
					});
				}
				else {
					var newUser = new User({
                        apellidos: apellidos,
                        edad: edad,
                        pais: pais,
						name: name,
						email: email,
						username: username,
						password: password
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('/clienteForm/login');
				}
			});
		});
	}
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown user' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/clienteForm/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/clienteForm/login');
});



module.exports = router;
