from pymongo import MongoClient

client = MongoClient("mongodb+srv://sathyasivam2004:Ng0cdhFjSIhlzAkt@cluster0.jkuqovx.mongodb.net/")
db = client['mri']
collection = db['abha']
data = [
    {
        "userName": "****",  #change the missing value appropriately 
        "userEmail": "****",
        "userMobile": "****",
        "abhaNumber": "43927693740933",
        "dateOfBirth": "****",
        "place": "****",
        "gender": "male",
        "patientId": "1001",    
    },
    {
        "userName": "****",
        "userEmail": "****",
        "userMobile": "****",
        "abhaNumber": "88479208638590",
        "dateOfBirth": "****",
        "place": "****",
        "gender": "male",
        "patientId": "1002",    
    },
    {
        "userName": "****",
        "userEmail": "****",
        "userMobile": "****",
        "abhaNumber": "35659037557937",
        "dateOfBirth": "****",
        "place": "****",
        "gender": "male",
        "patientId": "1003",    
    },
    {
        "userName": "****",
        "userEmail": "****",
        "userMobile": "****",
        "abhaNumber": "88302810856382",
        "dateOfBirth": "****",
        "place": "****",
        "gender": "male",
        "patientId": "1004",    
    },
]


collection.insert_many(data)