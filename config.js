module.exports = {
    // HTTP port
    port: process.env.PORT || 3000,
    
    // Production Authy API key
    authyApiKey: "sq9FIs4DjHmupVZMibfo4Uz6LTk7WiSz",

    // MongoDB connection string - MONGO_URL is for local dev,
    // MONGOLAB_URI is for the MongoLab add-on for Heroku deployment
    mongoUrl: process.env.MONGOLAB_URI || process.env.MONGO_URL,
     "db":{
		"mongo":{ "host":"localhost", "port":"27107", "name":"savethehacker", "username":"savethehacker", "password":"hackathon123"}
	}
};