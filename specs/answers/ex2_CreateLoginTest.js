
fixture ("SauceDemo Fixture")
    .page("https://www.saucedemo.com");
    
    test("Login Test", async t => {
        await t
            .setTestSpeed(0.5)
            .typeText("#user-name", "standard_user")
            .typeText("#password", "secret_sauce")
            .click("#login-button");
    } );
 