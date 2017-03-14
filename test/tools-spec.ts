"use strict";

import { ToolsController } from '../src/controllers/tools.server.controller';
import * as chai from 'chai';
import * as sinon from 'sinon';

const assert = chai.assert;

describe('Tools', () => {
    describe('#normalizePort()', () => {
        it('should normalize a given port', () => {
            assert(ToolsController.normalizePort('8899') == 8899,'Port should be normalized ok');
        });

        /*
        let spy = sinon.spy(console, 'log');

        var writer = new Writer();
        writer.write('I am being tested!');

        assert(spy.calledWith('I am being tested!'));

        spy.restore();
        */
    });
});
