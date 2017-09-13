import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('app');
    })
  });

  it('navbar-brand should be spot-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('spot-network@0.0.1');
  });

  
    it('ParkingSpot component should be loadable',() => {
      page.navigateTo('/ParkingSpot');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ParkingSpot');
    });

    it('ParkingSpot table should have 6 columns',() => {
      page.navigateTo('/ParkingSpot');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  

});
