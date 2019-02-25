import tornado.ioloop
import tornado.web
import tornado.websocket
import pandas as pd
import json

class EchoWebSocket(tornado.websocket.WebSocketHandler):
    
    def __init__(self, application, request, **kwargs):
        super(tornado.websocket.WebSocketHandler, self).__init__(application, request, **kwargs)
        self.ws_connection = None
        self.close_code = None
        self.close_reason = None
        self.stream = None
        self._on_close_called = False

        self.similarity_matrix = pd.read_csv("similarity_matrix.csv")
        self.similarity_matrix = self.similarity_matrix.set_index("artist")

    def check_origin(self, origin):
        return True

    def open(self):
        print("WebSocket opened")

    def on_message(self, message):

        if message in self.similarity_matrix:
            print(u"Getting similar artists for: " + message)
            prediction = self.similarity_matrix.loc[message].nlargest(25)
            print(prediction)
            self.write_message(prediction.to_json())
        else:
            self.write_message("error: artist not in dataset")

    def on_close(self):
        print("WebSocket closed")

def make_app():
    return tornado.web.Application([
        (r"/", EchoWebSocket),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()