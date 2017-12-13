const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const should = chai.should();


const {
    Finance
} = require('../models/Finance');
const {
    app,
    runServer,
    closeServer
} = require('../server');
const {
    TEST_DATABASE_URL
} = require('../config');

chai.use(chaiHttp);


function seedFinanceData() {
    console.info('seeding finance data');
    const seedData = [];

    for (let i = 1; i <= 10; i++) {
        seedData.push(generateFinanceData());
    }
    // this will return a promise
    return Finance.insertMany(seedData);
}

function generateFinanceData() {
    return {
        date: faker.date(),
        category: faker.Lorem.words(),
        cost: faker.Helpers.randomNumber(),
        notes: faker.Lorem.sentence()
    }
}

function tearDownDb() {
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
}

describe('Finance API resource', function () {

    before(function () {
        return runServer(TEST_DATABASE_URL);
    });

    beforeEach(function () {
        return seedFinanceData();
    });

    afterEach(function () {
        return tearDownDb();
    });

    after(function () {
        return closeServer();
    })
});

describe('index page', function () {
    it('exists', function (done) {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
    });
});


describe('GET endpoint', function () {
    it('should retrieve all finance data', function () {
        let res;
        return chai.request(app)
            .get('/finances')
            .then(function (_res) {
            res = _res;
            res.should.have.status(200);
            res.body.finances.should.have.length.of.at.least(1);
            return Finances.count();
        })
            .then(function (count) {
            res.body.finances.should.have.length.of(count);
        });
    });

    it('should retrieve finance by id', function () {
        return Finances
            .findOne()
            .then(function (finance) {
            financeID = finance.id;

            return chai.request(app)
                .get('/finances/financeID')
                .then(function (res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.finances.should.have.length.of.at.least(1);
            });
        });
    });
});

describe('POST endpoint', function () {
    it('should post a new finance', function () {
        const newFinance = generateFinanceData();

        return chai.request(app)
            .post('finances/new')
            .send(newFinance)
            .then(function (res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.include.keys('id', 'date', 'category', 'cost', 'notes');
            res.body.date.should.equal(newFinance.date);
            res.body.id.should.not.be.null;
            res.body.category.should.equal(newFinance.category);
            res.body.cost.should.equal(newFinance.cost);
            res.body.notes.should.equal(newFinance.notes;
            return Finance.findById(res.body.id);
        })
            .then(function (finance) {
            finance.date.should.equal(newFinance.date);
            finance.category.should.equal(newFinance.category);
            finance.cost.should.equal(newFinance.cost);
            finance.notes.should.equal(newFinance.notes);
        });
    });
});

describe('PUT endpoint', function () {
    it('should update finance', function () {
        const updateData = {
            date: '09 / 25 / 2017',
            catgory: 'Other'
        };

        return Finance
            .findOne()
            .then(function (finance) {
            updateData.id = finance.id;

            return chai.request(app)
                .put(`/fincnes/${finance.id}`)
                .send(updateData)
        })
            .then(function (res) {
            res.should.have.status(204);

            return Finance.findById(updateData.id);
        })
            .then(function (finance) {
            finance.date.should.equal(updateData.date);
            finance.category.should.equal(updateData.date);
        });
    });
});

describe('DELETE endpoint', function () {
    it('should delete a finance by id', function () {
        let finance;

        return Finance
            .findOne()
            .then(function (_finance) {
            finance = _finance;
            return chai.request(app)
                .delete(`/finances/${finance.id}`);
        })
            .then(function (res) {
            res.should.have.status(204);
            return Finance.findById(finance.id);
        })
            .then(function (_finance) {
            should.not.exist(_finance);
        });
    });
});
