import json
import pandas as pd
from pymongo import MongoClient
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from tensorflow.keras.models import load_model
database_name='weather_db'
mongo_uri="mongodb+srv://aayuk279:qwerty123@cluster0.9vjeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
collection_name='current_weather_data'
def fetchDataFromDb():
    client=MongoClient(mongo_uri)
    try:
        db=client[database_name]
        collection=db[collection_name]

        data=list(collection.find())
        #now we will convert the data present as list of dictionaries and convert it into dataframe 
        df=pd.json_normalize(data)
        df['rain(in_mm)']=0
        #print(df)
        columns_to_drop=['_id', 'weather', 'base', 'visibility', 'dt', 'timezone', 'id', 'name',
       'cod', 'coord.lon', 'coord.lat',  'main.feels_like',
        'main.pressure', 'main.sea_level', 'main.grnd_level',
       'wind.gust', 'clouds.all', 'sys.type', 'sys.id', 'sys.country',
       'sys.sunrise', 'sys.sunset']
        new_df=df.drop(columns=columns_to_drop)
        print("updated dataframe")
        print(new_df)
    except Exception as e:
        print("Error fetching data",e)
        return None
    finally:
        client.close()



if __name__=="__main__":
    fetchDataFromDb()


    