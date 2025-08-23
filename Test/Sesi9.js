const { Builder, By, until, WebDriver, Options } = require('selenium-webdriver');
const LoginPage = require('../Pages/LoginPage.js');
const FilterZtoA = require('../Pages/FilterZtoA.js');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('WEB Automation Fundamental', function () {
    let driver;

    it("Login sukses dan dapat menampilkan Dashboard", async function () {
        let options = new chrome.Options()
        options.addArguments('--incognito')
        driver = await new Builder().forBrowser('chrome').build()

        await driver.get('https://www.saucedemo.com/')
        let inputUsername = await driver.findElement(LoginPage.inputUsername)
        let inputPassword = await driver.findElement(LoginPage.inputPassword)
        let buttonLogin = await driver.findElement(LoginPage.buttonLogin)
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()

        // Assertion
        let textAppLogo = await driver.findElement(By.className('app_logo'));
        let logoText = await textAppLogo.getText();
        assert.strictEqual(logoText,'Swag Labs')

        await driver.sleep(10000)

        await driver.quit()
    })

    before('Filter dari Z to A', async function () {
        let options = new chrome.Options()
        options.addArguments('--incognito')
        driver = await new Builder().forBrowser('chrome').build()

        await driver.get('https://www.saucedemo.com/')
        let inputUsername = await driver.findElement(LoginPage.inputUsername)
        let inputPassword = await driver.findElement(LoginPage.inputPassword)
        let buttonLogin = await driver.findElement(LoginPage.buttonLogin)
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()

        let filterDropdown = await driver.findElement(FilterZtoA.dropdownZtoA);

        await filterDropdown.findElement(By.xpath("//option[text()='Name (Z to A)']")).click();

        // Assertion
        let textAppLogo = await driver.findElement();
        let logoText = await textAppLogo.getText();
        assert.strictEqual(logoText,'Swag Labs')

        await driver.sleep(10000)
        
        await driver.quit()
    })
})