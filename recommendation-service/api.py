import tornado.ioloop
import tornado.web
import pandas as pd

class UserCollaborativeHandler(tornado.web.RequestHandler):

    def __init__(self, *request, **kwargs):
        super(UserCollaborativeHandler,self).__init__(request[0], request[1])
        self.user_recommendations = pd.read_csv("user_recommendations.csv").set_index("user").transpose()

    def get(self, user):
        self.write( {"recommendations": self.user_recommendations[int(user)].to_json()} )

class JobCollaborativeHandler(tornado.web.RequestHandler):

    def __init__(self, *request, **kwargs):
        super(UserCollaborativeHandler,self).__init__(request[0], request[1])
        self.similarity_matrix = pd.read_csv("similarity_matrix.csv").set_index("job")

    def get(self, job_id):
        self.write( {"recommendations": self.similarity_matrix.loc[job_id].nlargest(25)} )

def make_app():
    return tornado.web.Application([
        (r"/(?P<user>\w+)", UserCollaborativeHandler),
        (r"/(?P<job_id>\w+)", JobCollaborativeHandler)
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()