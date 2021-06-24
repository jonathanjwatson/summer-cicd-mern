const mocha = require("mocha");
const chai = require("chai");
const mongoose = require("mongoose");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const resturantController = require("../../controllers/restaurantController");

const expect = chai.expect;
chai.use(sinonChai);

// describe("", () => {
//     it("", () => {

//     })
// });

describe("resturantController", () => {
  describe("findById", () => {
    const sandbox = sinon.createSandbox();
    afterEach(function () {
      sinon.restore();
      sandbox.restore();
    });
    const statusJsonSpy = sinon.spy();
    const req = { params: { id: 1 } };
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ json: statusJsonSpy }),
    };
    it("Should return a model if found", async () => {
      //Arrange, Act, Assert

      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.resolve("banana"));

      await resturantController.findById(req, res);

      expect(res.json).to.have.been.calledWith("banana");
    });
    it("Should return an error message if an error occurs", async () => {
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.reject("error message"));

      await resturantController.findById(req, res);
      await console.log("----");
      expect(res.status).to.have.been.calledWith(422);
      expect(statusJsonSpy).to.have.been.calledWith("error message");
    });
  });
});
