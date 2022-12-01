const assert = require("chai").assert;
const app = require('../app')

describe ('App', function(){
    it ('app should show clock, date, weather and greeting,', function() {
        assert.equal(app(), "hello");
    } )
})