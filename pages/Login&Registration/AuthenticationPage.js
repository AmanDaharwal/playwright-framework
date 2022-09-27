//Input
const inputUsername = "id=email"; // id locator
const inputPassword = "//*[@id='passwd']"; // xpath locator

//Button
const btnSignIn = "#SubmitLogin"; // css locator

//Text
const txtError = "//*[contains(@class,'alert')]//li";

class AuthenticationPage {

    constructor(page){
        this.page = page;
    }

    /**
     * Enter the username
     * @param {String} username 
     */
    async enterUserName(username)
    {
        await this.page.fill(inputUsername, username);
    }

    /**
     * Enter the password
     * @param {String} password 
     */
    async enterPassword(password)
    {
        await this.page.fill(inputPassword, password);
    }

    /**
     * Click on Sign In button
     */
    async clickSignIn(){
        await this.page.click(btnSignIn);
    }

    /**
     * Return the error text
     */
    async getErrorText(){
        return await this.page.innerText(txtError);
    }
}

module.exports = AuthenticationPage;