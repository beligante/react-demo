import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import HomePage from './HomePage';

describe('Home Page', () => {
    it('should render a main div with jumbotron class', () => {

        const wrapper = shallow(<HomePage/>);
        expect(wrapper.find('.jumbotron')).to.have.length(1);
        expect(wrapper.find('.jumbotron').text()).to.contains('Code Sample');
    });
});