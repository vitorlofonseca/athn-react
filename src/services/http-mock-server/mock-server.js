import { createServer, Response } from "miragejs";

const registerMockServer = () => {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.post("/api/login", (schema, request) => {
        const body = JSON.parse(request.requestBody);

        if (!body.username || !body.password) {
          return new Response(
            400,
            {},
            { error: "You need pass username and password fields" }
          );
        }

        if (body.username !== "vitorlofonseca" || body.password !== "123") {
          return new Response(401, {}, { error: "Unauthorized" });
        }

        return new Response(200, {}, {});
      });
    },
  });
};

export { registerMockServer };
