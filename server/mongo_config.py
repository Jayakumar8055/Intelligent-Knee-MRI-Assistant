from flask_pymongo import PyMongo

mongo = PyMongo()

def initialize_mongo(app):
    app.config['MONGO_URI'] = 'mongodb+srv://sathyasivam2004:Ng0cdhFjSIhlzAkt@cluster0.jkuqovx.mongodb.net/mri'
    mongo.init_app(app)

    try:
        with app.app_context():
            mongo.db.command("ping")
        print("MongoDb connection successful")
        return mongo
    except Exception as e:
        print(f"Error connecting to MongoDb: {e}")
        return None
