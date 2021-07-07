const mocha = require("mocha");
const chai = require("chai");
const mongoose = require("mongoose");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const restaurantController = require("../../controllers/restaurantController");

const expect = chai.expect;
chai.use(sinonChai);

// describe("", () => {
//     it("", () => {

//     })
// });
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

describe("restaurantController", () => {
  describe("findAll", () => {
    it("should return the models if found", async () => {
      const mockFindAll = {
        find: function () {
          return this;
        },
        sort: function () {
          return Promise.resolve("success");
        },
      };

      mongoose.Model.find = mockFindAll.find;
      mongoose.Model.sort = mockFindAll.sort;
      await restaurantController.findAll(req, res);
      expect(res.json).to.have.been.calledWith("success");
    });
    it("should return an error message if an error occurs", async () => {
      const mockFindAll = {
        find: function () {
          return this;
        },
        sort: function () {
          return Promise.reject("error message");
        },
      };

      mongoose.Model.find = mockFindAll.find;
      mongoose.Model.sort = mockFindAll.sort;
      await restaurantController.findAll(req, res);
      await console.log("---");
      expect(res.status).to.have.been.calledWith(422);
      expect(statusJsonSpy).to.have.been.calledWith("error message");
    });
  });
  describe("findById", () => {
    it("Should return a model if found", async () => {
      //Arrange, Act, Assert
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.resolve("new model"));
      await restaurantController.findById(req, res);
      expect(res.json).to.have.been.calledWith("new model");
    });
    it("Should return an error message if an error occurs", async () => {
      mongoose.Model.findById = sandbox
        .stub()
        .returns(Promise.reject("error message"));
      await restaurantController.findById(req, res);
      await console.log("----");
      expect(res.status).to.have.been.calledWith(422);
      expect(statusJsonSpy).to.have.been.calledWith("error message");
    });
  });
  describe("create", () => {
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
      await console.log("----");
      expect(res.status).to.have.been.calledWith(422);
      expect(statusJsonSpy).to.have.been.calledWith("error message");
    });
    describe("update", () => {
      it("should return the updated model", () => {});
      it("should return an error message if an error occurs", async () => {});
    });
  });
  describe("remove", () => {
    const dbRemove = sinon.spy();
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
  });
  xit("should return an error message if an error occurs", async () => {
    mongoose.Model.findById = sandbox
      .stub()
      .returns(Promise.reject("error message"));

    await restaurantController.remove(req, res);
    await console.log("----");
    expect(res.status).to.have.been.calledWith(422);
    expect(statusJsonSpy).to.have.been.calledWith("error message");
  });
});
