import numpy as np
import pandas as pd
from datetime import datetime
import random

num_of_products = 1000

products = []

for id in range(num_of_products):
    # create timestamp(timestamp removed due to errors occurring in db)
    #date = datetime.utcnow()
    #timestamp = date.strftime("%Y-%m-%d %H:%M:%S")
    
    # create unit_id
    unit_id = id + 1
    
    # create product names
    product_list = ["beef", "chicken", "fish", "lamb", "berry", "apple", "bananna", "kiwi", "strawberry", "broccoli", "salad", "cola", "pepsi", "cheese", "yogurt"] 
    product_name = np.random.choice(product_list)

    #popularity of product
    popularity = np.random.choice(["high", "medium", "low"])

    #price 
    price = np.random.randint(10)

    #durability
    durability = np.random.choice(["high", "medium", "low"])

    # create days left until expiration
    daysuntilexpiration = np.random.randint(365)

    #barcode number created randomly
    barcode = np.random.randint(1000,9999)

    products.append([unit_id, product_name, popularity, price, durability, daysuntilexpiration, barcode])

products_df = pd.DataFrame(products, columns = ["unit_id", "product_name", "popularity", "price", "durability", "daysuntilexpiration", "barcode"])

pd.pandas.set_option('display.max_columns', None)

print(products_df)

products_df.to_csv('product_list.csv', index=False)