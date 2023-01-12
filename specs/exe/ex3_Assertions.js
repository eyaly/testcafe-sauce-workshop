import {Selector  as $, ClientFunction} from 'testcafe';

// 1. Add selector
const inventoryList = $(".inventory_list");

// 2. Add client function for getting the URL
const getURL =  ClientFunction(() => window.location.href);

fixture ("SauceDemo Fixture")
    .page("https://www.saucedemo.com");
    
    test("Login Test", async t => {
        await t
            .typeText("#user-name", "standard_user")
            .typeText("#password", "secret_sauce")
            .click("#login-button")

            // 3. Add assertion if the element exists

            // 4. Add assertion if the URL contains inventory

    } );

    test("Login Check Username Test", async t => {
        const username = "standard_user";
        const usernameInput = $('#user-name');

        await t

        // 5. Add assertion that the username field is empty 

            .typeText(usernameInput, username)
        // 6. Add assertion that the username field is with the expected value (username) 

    } );

    // 7. Run the fixture file: testcafe chrome specs/exe/ex3_Assertions.js
 