import requests
import json
import pandas as pd

# Get user data
url = 'http://localhost:4000/graphql'
j = { 'query' : '{ users { gcID viewed { id } } }' }
r = requests.post(url=url, json=j)

user_data = json.loads(r.text)

# Get list of job ids
url = 'http://localhost:4000/graphql'
j = { 'query' : '{ jobs { id } }' }
r = requests.post(url=url, json=j)

job_ids = json.loads(r.text)


row_indeces = []
for prisma_node in user_data["data"]["users"]:
    row_indeces.append(prisma_node["gcID"])

columns = []

for prisma_node in job_ids["data"]["jobs"]:
    columns.append(prisma_node["id"])

df = pd.DataFrame(0, index=row_indeces, columns=columns)
df.index.name = 'user'

# Add in the has viewed values
for prisma_user_node in user_data["data"]["users"]:
    for prisma_job_node in prisma_user_node["viewed"]:
        df[prisma_job_node["id"]][prisma_user_node["gcID"]] = 1

df.to_csv("viewed_data.csv")