import React from 'react';
import { shallow, mount } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {

  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('should initialize the props', () => {
    const cohort = CohortData[0];
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    expect(wrapper.props().cohort).toEqual(cohort);
  });

  test('should display cohort code in h3', () => {
    const cohort = CohortData[0];
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    expect(wrapper.find('h3').text()).toBe(cohort.cohortCode);
  });

  test('should always render same html', () => {
    const cohort = CohortData[0];
    const wrapper = shallow(<CohortDetails cohort={cohort} />);
    expect(wrapper).toMatchSnapshot();
  });

});
