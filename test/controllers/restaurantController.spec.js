const chai = require("chai");
const mongoose = require("mongoose");

const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);
const expect = chai.expect;

const restaurantController = require("../../controllers/restaurantController");

describe("restaurantController", function () {
  describe("findById", function () {
    let sandbox;
    const jsonSpy = sinon.spy();
    const statusJsonSpy = sinon.spy();

    const req = {
      params: {
        id: 1,
      },
    };

    const res = {
      json: jsonSpy,
      status: sinon.stub().returns({ json: statusJsonSpy }),
    };

    this.beforeAll(function () {
      sandbox = require("sinon").createSandbox();
    });
    this.afterEach(function () {
      sinon.restore();
      sandbox.restore();
    });
    it("should res.json the found model if successful", async function () {
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.resolve("resolve"));

      await restaurantController.findById(req, res);
      expect(jsonSpy).to.have.been.calledWith("resolve");
    });
    it("should res.json the found model if successful", async function () {
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.reject("reject"));

      await restaurantController.findById(req, res);
      await console.log("This makes the test work.");
      expect(statusJsonSpy).to.have.been.calledWith("reject");
    });
  });
});
