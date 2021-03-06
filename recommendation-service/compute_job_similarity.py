import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

rating_matrix = pd.read_csv("viewed_data.csv") # matrix of binary ratings 0 or 1 that stand for has_viewed and has_not_viewed
rating_matrix = rating_matrix.set_index("user")

similarity_matrix_rows = [[rating_matrix.columns[i]] for i in range(len(rating_matrix.columns))]

for i, job_i in enumerate(rating_matrix.columns):
    for j, job_j in enumerate(rating_matrix.columns):
        
        similarity_matrix_rows[i].append( cosine_similarity([rating_matrix[rating_matrix.columns[i]], rating_matrix[rating_matrix.columns[j]]])[0][1] )

similarity_matrix_columns = rating_matrix.columns
similarity_matrix_columns = similarity_matrix_columns.insert(0, "job")

similarity_matrix = pd.DataFrame( similarity_matrix_rows, columns = similarity_matrix_columns )

similarity_matrix = similarity_matrix.set_index(["job"])

similarity_matrix.to_csv("similarity_matrix.csv")