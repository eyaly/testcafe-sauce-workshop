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

    // Execute the tests
    // 1. View a list of all available browsers 
    // testcafe --list-browsers
    // 2. Execute on saome of the browsers
    // testcafe chrome, firefox specs/workshop/exe/ex4_TestExecution.js
    // 3. Run Tests in Parallel
    // testcafe -c 2 chrome  specs/workshop/exe/ex4_TestExecution.js
    // 4. Run on Remore devices - Generate QR Code and browser link 
    //  to be used by real devices or emulators and simulators
    // testcafe remote specs/workshop/exe/ex4_TestExecution.js --qr-code
 