import {t} from 'testcafe';

export async function login(username,password) {
    await t
        .typeText("#user-name", username)
        .typeText("#password", password)
        .click("#login-button");
}