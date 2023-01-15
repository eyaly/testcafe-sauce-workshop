 import {Selector  as $} from 'testcafe';

const inventoryList = $(".inventory_list");
const usernameInput = $('#user-name');
const passwordInput = $('#password');
const loginBtn = $('#login-button');

const getURL =  ClientFunction(() => window.location.href);

fixture ("Test login page")
    .page("https://www.saucedemo.com")
    .beforeEach(async t => {
        await t.resizeWindow(1400, 900);
      });
    
    test("should be able load the login page", async t => {
        await t.expect(usernameInput.exists).ok('Page should be inventory',{ timeout: 500 });
    } );
    
    test("should be able to login with a standard user", async t => {
        await t
            .typeText(usernameInput, "standard_user")
            .typeText(passwordInput, "secret_sauce")
            .click(loginBtn)

            // Verification - check element exists
            .expect(inventoryList.exists).ok('Page should be inventory',{ timeout: 500 });
    } );
 