
fixture ("SauceDemo Fixture")
    .page("https://www.saucedemo.com");
    
    test("Login Test", async t => {
        await t
        .wait(2000);
    } );
 