import pandas as pd

rating_matrix = pd.read_csv("lastfm.csv")
rating_matrix = rating_matrix.set_index("user").transpose()
similarity_matrix = pd.read_csv("similarity_matrix_lastfm.csv")
similarity_matrix = similarity_matrix.set_index("artist")

def score(rating_matrix, similarity_matrix, user, item_i):
    numerator = sum([rating_matrix[user][item_j] * similarity_matrix[item_i][item_j] for item_j in similarity_matrix])
    denominator = sum([similarity_matrix[item_i][item_j] for item_j in similarity_matrix])
    return numerator/denominator

scores = []
for item in similarity_matrix.columns:
    scores.append(score(rating_matrix, similarity_matrix, 5985, item))


user_5985_recommendations = pd.DataFrame( [scores], columns = similarity_matrix.columns )

user_5985_recommendations.transpose().nlargest(25, 0).to_csv("user_5985_recommendations.csv")