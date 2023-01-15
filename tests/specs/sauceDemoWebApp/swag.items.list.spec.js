import {Selector  as $} from 'testcafe';
import {login} from '../../helpers/helperFuncs';

const swagItems = $('.inventory_item');
const inventoryDetails = $('.inventory_details');
const swagTitle = $('.inventory_details_name');

fixture ("Test swag items list page")
    .page("https://www.saucedemo.com")
    .beforeEach(async t => {
        await login("standard_user","secret_sauce");
      });
    
    test("should validate that all products are present", async t => {
      await t.expect(swagItems.count).eql(6);
    } );

    test("should validate that the details of a product can be opened", async t => {
      const product = 'Sauce Labs Backpack';

      await t.click(swagItems.withText(product).find('.inventory_item_name'));

      await t.expect(inventoryDetails.exists).ok();
      await t.expect(swagTitle.innerText).eql(product);
    } );
 