from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

print("DB URI:", MONGO_URI)
print("DB NAME:", DB_NAME)

client = MongoClient(MONGO_URI)
db = client[DB_NAME]

contact_collection = db["contact_msg"]
