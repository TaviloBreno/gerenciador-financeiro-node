const supertest = require("supertest");

// Use HTTP em vez de HTTPS
const request = supertest("http://localhost:3001");

test("Deve responder na porta 3001", async () => {
  return request.get("/").then((response) => {
    expect(response.status).toBe(200);
  });
});
