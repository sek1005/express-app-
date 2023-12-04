const request = require("supertest");
const app = require("../app");
describe("GET/api/movies",()=> {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies"); /** Code your test here */
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200); 
    });
});
describe("GET/api/movies/:id",()=>{
    it("should return a movie",async()=>{
        const response = await request(app).get("/api/movies/1");
        expect(response.body.id).toEqual(1);
        expect(response.status).toEqual(200);
        expect(response.headers["content-type"]).toMatch(/json/);
    })
    
})
describe("GET/api/movies/:id",()=>{
    it("should return a movie",async()=>{
        const response = await request(app).get("/api/movies/0");
        expect(response.status).toEqual(404);
    })
    
})
