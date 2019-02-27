import pandas as pd

rating_matrix = pd.read_csv("viewed_data.csv")
rating_matrix = rating_matrix.set_index("user").transpose()
similarity_matrix = pd.read_csv("similarity_matrix.csv")
similarity_matrix = similarity_matrix.set_index("job")

def score(rating_matrix, similarity_matrix, user, item_i):
    numerator = sum([rating_matrix[user][item_j] * similarity_matrix[item_i][item_j] for item_j in similarity_matrix])
    denominator = sum([similarity_matrix[item_i][item_j] for item_j in similarity_matrix])
    if denominator == 0:
        return 0
    else:
        return numerator/denominator

all_user_scores = []

for user in rating_matrix.columns:
    scores = [user]

    for item in similarity_matrix.columns:
        scores.append(score(rating_matrix, similarity_matrix, user, item))
    
    all_user_scores.append(scores)

user_rec_columns = ["user"]

for item in similarity_matrix.columns:
    user_rec_columns.append(item)



user_recommendations = pd.DataFrame( all_user_scores, columns = user_rec_columns )
user_recommendations = user_recommendations.set_index("user")

user_recommendations.to_csv("user_recommendations.csv")