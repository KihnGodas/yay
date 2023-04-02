// Chứa html qua từng trang web
const components = {};

components.navbar = `<h1>Hello World</h1>`;
components.login = `   <div class="register-container">
<div class="aside-right">
    <div class="header">
        <h3>MindX Chat</h1>
    </div>
    <form id="register-form">
        
        <div class="input-wrapper">
            <input type="email" placeholder="Email..." name="email">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" placeholder="Password..." name="password">
            <div class="error" id="password-error"></div>
        </div>
        

        <div class="form-action">
            <span class="cursor" id="redirect-to-login">Already have an account?</span>
            <button class="btn" type="submit">Login</button>
        </div>
    </form>
</div>
</div>`;
components.register=`  <div class="register-container">
<div class="aside-right">
    <div class="header">
        <h3>MindX Chat</h1>
    </div>
    <form id="register-form">
        <div class="input-name-wrapper">
            <div class="input-wrapper">
                <input type="text" placeholder="First name..." name="firstName">
                <div class="error" id="first-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Last name..." name="lastName">
                <div class="error" id="last-name-error"></div>
            </div>
        </div>
        <div class="input-wrapper">
            <input type="email" placeholder="Email..." name="email">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" placeholder="Password..." name="password">
            <div class="error" id="password-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" placeholder="Confirm password..." name="confirmPassword">
            <div class="error" id="confirm-password-error"></div>
        </div>

        <div class="form-action">
            <span class="cursor" id="redirect-to-login">Already have an account? Login</span>
            <button class="btn" type="submit">Register</button>
        </div>
    </form>
</div>
</div>`;