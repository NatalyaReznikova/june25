// describe('Main Page', function ()  {
//     it('should Title main page is present and correct text', function () {
//      browser.url('https://stage.pasv.us/');
//      const titleProgressMonitor = $("//span[@id='site-name']");
//      const text = titleProgressMonitor.getText();//Progress Monitor
//      expect(text).toEqual('Progress Monitor');
//     });
//     it('should Title main page isclickable',function () {
//         const titleProgressMonitor = "//span[@id='site-name']";
//         const result = $(titleProgressMonitor).isClickable();//True False
//         expect(result).toEqual(true);
//     })
//     it('should verify that Login button is clicable',function () {
//         const loginBtn = $("//a[@qa='login-link']");
//         const result = loginBtn.isClickable();
//         expect(result).toEqual(true);
//
//     })
//     it('should verify that Login button',function () {
//         const loginBtn = $("//a[@qa='login-link']");
//         const textOfLoginBtn = loginBtn.getText();
//         expect(textOfLoginBtn).toEqual('Login');
//
//     })
//     it('should Title main page is present and correct text', function () {
//         const titleRegisterBtn = $("//a[@qa='register-link']");
//         const text = titleRegisterBtn.getText();//Register button
//         expect(text).toEqual('Register');
//     });
//     it('should verify that Register button is clicable',function () {
//         const loginBtn = $("//a[@qa='register-link']");
//         const result = loginBtn.isClickable();
//         expect(result).toEqual(true);
//
//     })
//     it('should description in the middle of the page correct', function () {
//         const titleCorrect = $("//div[@class='header-title']");
//         const text = titleCorrect.getText();//
//         expect(text).toEqual('System that considers individual features of each student');
//     });
//
// });


// describe('Register Page',() =>  {
//     it('should title is Amazon',function () {
//         browser.url('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%2F%3Fie%3DUTF8%26_encoding%3DUTF8%26from%3Dgp%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&')
//         const text = browser.getTitle();
//         expect(text).toEqual('Amazon Registration');
//     })
// it('should have Create Account text on the page',function () {
//     const createAccountText = $("//h1");
//     const actual = 'Create account';
//     const expected = createAccountText.getText();
//     expect(expected).toEqual(actual);
//
// })
//     it('should have Your name text on the page',function () {
//         const yourNameText = $('//label[@for="ap_customer_name"]');
//         const actual = 'Your name';
//         const expected = yourNameText.getText();
//         expect(expected).toEqual(actual);
//
//     })
//     it('should have Email text on the page',function () {
//         const emailText = $('//label[@for="ap_email"]');
//         const text = 'Email';
//         const expected = emailText.getText();
//         expect(expected).toEqual(text);
//
//     })
//     it('should input name in your name field',function () {
//         const yourNameInput = $('//input[@id="ap_customer_name"]');
//         yourNameInput.setValue('Natalya Reznikova');
//         browser.pause(3000)
//         const text = yourNameInput.getValue();
//         expect(text).toEqual('Natalya Reznikova');
//
//     })
//     it('should have Password text on the page',function () {
//         const passwordText = $('//label[@for="ap_password"]');
//         const actual = 'Password';
//         const expected = passwordText.getText();
//         expect(expected).toEqual(actual);
//
//     })
//     it('verify that we can input Email',function () {
//         const eMailInput = $('#ap_email');
//         eMailInput.setValue('natalyavasylyeva@yahoo.com');
//         browser.pause(3000);
//         const text = eMailInput.getValue();
//         expect(text).toEqual('natalyavasylyeva@yahoo.com');
//
//


//     })
// it('verify that password input is correct',function () {
//     const passwordInput = $('[for=ap_password]');
//     const text = passwordInput.getText();
//     expect(text).toEqual('Password');
//
// })
// })
describe('EDIT PROFILE', () => {
    before()
=>
    {
        browser.maximizeWindow();
        browser.url('https://stage.pasv.us/user/login');
        $('//input[@name="email"]').setValue('natalyavasylyeva@yahoo.com');
        $('//input[@name="password"]').setValue('Michelle2016');
        $('//button[@type="submit"]').click();
        $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').click();
        $('//button[@text()="Settings"]').click();
        browser.pause(2000)
    }
)
it('should', function () {
    browser.pause(2000)

})
})