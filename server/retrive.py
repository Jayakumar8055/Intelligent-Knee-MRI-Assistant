# from pymongo import MongoClient
# from gridfs import GridFS

# # Connect to MongoDB
# def retrieve_file(filename):
#     # Connect to MongoDB
#     with MongoClient('mongodb+srv://sathyasivam2004:Ng0cdhFjSIhlzAkt@cluster0.jkuqovx.mongodb.net') as client:
#         db = client['mri']
#         grid_fs = GridFS(db, collection='report')

#         # Retrieve a file from GridFS by its filename
#         file_cursor = grid_fs.find_one({'filename': filename})

#         if file_cursor is not None:
#             # Get the file content
#             file_content = file_cursor.read()

#             # Close the file cursor
#             file_cursor.close()

#             return file_content
#         else:
#             return None


from pymongo import MongoClient
from gridfs import GridFS

# Connect to MongoDB
def retrieve_file(filename):
    try:
        with MongoClient('mongodb+srv://sathyasivam2004:Ng0cdhFjSIhlzAkt@cluster0.jkuqovx.mongodb.net') as client:
            db = client['mri']
            grid_fs = GridFS(db, collection='report')

            # Retrieve a file from GridFS by its filename
            file_cursor = grid_fs.find_one({'filename': filename})
            if file_cursor is not None:
                # Get the file content
                file_content = file_cursor.read()
                return file_content


    #             # Do something with the file content (e.g., save it to a new file)
    #             with open('C:\\Users\\Sathya Sivam\\Downloads\\LT\\Output\\new222.pdf', 'wb') as downloaded_file:
    #                 downloaded_file.write(file_content)
            else:
                print("File not found in GridFS.")
    except Exception as e:
        print("An error occurred:", e)