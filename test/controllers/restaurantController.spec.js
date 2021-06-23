const chai = require("chai");
const mongoose = require("mongoose");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const restaurantController = require("../../controllers/restaurantController");

const expect = chai.expect;
chai.use(sinonChai);

describe("restaurantController", () => {
  describe("findById", () => {
    const sandbox = sinon.createSandbox();
    afterEach(function () {
      sinon.restore();
      sandbox.restore();
    });

    const req = {
      params: {
        id: 1,
      },
    };

    const statusJsonSpy = sinon.spy();

    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ json: statusJsonSpy }),
    };

    it("should return a model if found", async () => {
      // Arrange
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.resolve("banana"));
      // Act
      await restaurantController.findById(req, res);
      // Assert
      // Is res.json called and passed the string from the Promise.resolve above.
      expect(res.json).to.have.been.calledWith("banana");
    });
    it("should return an error message if an error occurs", async () => {
      // Arrange
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.reject("error message"));

      // Act
      await restaurantController.findById(req, res);
      await console.log("---");
      // Assert
      expect(res.status).to.have.been.calledWith(404);
      expect(statusJsonSpy).to.have.been.calledWith("error message");
    });
  });
});
