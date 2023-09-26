# Jewellery_Store
REACT JS APPLICATION Built a small web API using Node.js that accesses a MongoDB
database and returns JSON objects which can be consumed by any requesting service (i.e. web
application, mobile app, etc.)

MongoDB:
---------
1. Outside of MongoDB created a folder called Images. Placed 20 images into this folder as you proceed throughout this part of the project.
2. Created a database called ProductCatalog
3. Created a collection called products
4. Inserted 20 products into the collection.

API
----
implementing a basic API endpoint that will beconsumed by any client. This REST API will handle GET requests to allow our app to retrieve the
data we are interested in.This API endpoint can then be consumed by any client (i.e. website, mobile app) in order to
access specific data the application is interested in.

Requirements:
-------------
. HTTP Method &emsp;                               |      PATH          &emsp;        |    Description

1.GET          &emsp;        &emsp;           |    /Products       &emsp;    &emsp;  &emsp;&emsp; &emsp;&emsp; &emsp;|      Return a JSON objectcontaining all the productsin the database

2.GET        &emsp;        &emsp;                 /Products/identifiers     &emsp;   &emsp; &emsp;Return a JSON objectcontaining the IDs of all the products in the database

3.GET        &emsp;       &emsp;                  /Products/{id}         &emsp;  &emsp;&emsp;&emsp; &emsp;  &emsp;   Return a JSON object containing all the Product’s details in the MongoDB

4.GET        &emsp;      &emsp;                   /Products/{id}/{field}     &emsp;  &emsp;  &emsp;  Return a JSON object thespecified {field} info from the Product’s details in the MongoDB

5.GET         &emsp;&emsp;                      /Products/images/{filename}   &emsp;      Given the filename of the image for a product return its static image

6.PUT &emsp;&emsp;/Products/{id}&emsp;&emsp;&emsp;&emsp; Based on the providedidentifier, REPLACE thecorresponding object inthe MongoDB collection.

7.DELETE &emsp;&emsp;/Products/{id} &emsp;&emsp;&emsp;&emsp;Based on the provided identifier, DELETE the corresponding object in the MongoDB collection.

8.PATCH &emsp;&emsp;/Products/{id}/{field}&emsp;&emsp;&emsp;&emsp; Based on the provided identifier, UPDATE the corresponding object’s FIELD in the MongoDB collection.

9.GET&emsp;&emsp; /Products/Page/{skip}/{limit}&emsp;&emsp;&emsp;&emsp; Return a specified number of products after skipping the first skip items
