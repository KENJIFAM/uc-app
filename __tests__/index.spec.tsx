import React from 'react';
import { mount } from 'enzyme';
import LoginPage from '../pages/login';

describe('Pages', () => {
  describe('Login', () => {
    const wrap =  mount (<LoginPage/>);

    it('should render without throwing an error', () => {
      expect(wrap.find('.welcome').text()).toBe('Welcome back, log in to your workspaces');
    });

    it('should render login form', () => {
      expect(wrap.find('.login-form').length).toBe(1);
    });

    it('should render 2 form fields', () => {
      expect(wrap.find('.field').length).toBe(2);
    });
  });
});