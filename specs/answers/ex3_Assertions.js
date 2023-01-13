 import {Selector  as $, ClientFunction} from 'testcafe';

const inventoryList = $(".inventory_list");
const usernameInput = $('#user-name');

const getURL =  ClientFunction(() => window.location.href);

fixture ("SauceDemo Fixture")
    .page("https://www.saucedemo.com");
    
    test("Login Test", async t => {
        await t
            .typeText(usernameInput, "standard_user")
            .typeText("#password", "secret_sauce")
            .click("#login-button")

            // Verification - check element exists
            .expect(inventoryList.exists).ok('Page should be inventory',{ timeout: 500 })

            // Verification - verify the URL is correct
            .expect(getURL()).contains("inventory");
    } );

    test("Login Check Username Test", async t => {
        const username = "standard_user";

        await t
            .expect(usernameInput.value).eql('', 'input is empty')
            .typeText(usernameInput, username)
            .expect(usernameInput.value).eql(username, 'input contains text ' + username);
    } );
 