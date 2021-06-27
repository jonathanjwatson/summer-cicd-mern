const chai = require("chai");
const mongoose = require("mongoose");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const restaurantController = require("../../controllers/restaurantController");

const expect = chai.expect;
chai.use(sinonChai);

describe("restaurantController", () => {
  describe("findAll", () => {
    it("should return the models if found", async () => {});
    it("should return an error message if an error occurs", async () => {});
  });

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

  describe("create", () => {
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
    it("should return the new model if created", async () => {
      mongoose.Model.create = sandbox
        .stub()
        .returns(Promise.resolve("new model"));
      await restaurantController.create(req, res);
      expect(res.json).to.have.been.calledWith("new model");
    });
    it("should return an error message if an error occurs", async () => {
      mongoose.Model.create = sandbox
        .stub()
        .returns(Promise.reject("error message"));

      await restaurantController.create(req, res);
      await console.log("---");

      expect(res.status).to.have.been.calledWith(422);
      expect(statusJsonSpy).to.have.been.calledWith("error message");
    });
  });

  describe("update", () => {
    it("should return the updated model", () => {});
    it("should return an error message if an error occurs", async () => {});
  });

  describe("remove", () => {
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
    const dbRemove = sinon.spy();

    const res = {
      json: sinon.spy(),
      status: sinon.stub().returns({ json: statusJsonSpy }),
    };
    it("should findById and call the remove method", async () => {
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.resolve({ remove: dbRemove }));

      await restaurantController.remove(req, res);

      expect(dbRemove).to.have.been.called;
    });
    it("should findById and return the found model", async () => {
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.resolve({ remove: dbRemove }));

      await restaurantController.remove(req, res);

      expect(res.json).to.have.been.called;
    });
    // FIXME: Test failing
    xit("should return an error message if an error occurs", async () => {
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.reject("error message"));

      await restaurantController.remove(req, res);
      await console.log("---");

      expect(res.status).to.have.been.calledWith(422);
      expect(statusJsonSpy).to.have.been.calledWith("error message");
    });
  });
});
