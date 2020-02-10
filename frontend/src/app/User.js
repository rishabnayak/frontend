import cookie from "react-cookies";
class User {
    constructor() {
        this._token = cookie.load("token", { path: "/" });
        this._email = cookie.load("email", { path: "/" });
        this._valid_until = Date.parse(cookie.load("valid_until", { path: "/" }));
        if (this._token && this._email && this._valid_until && this._valid_until > Date.now()) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    }
    _login(email, token, valid_until) {
        cookie.save("token", token);
        cookie.save("email", email);
        cookie.save("valid_until", valid_until);
        this.isLoggedIn = true;
        this._token = token;
        this._email = email;
        this._valid_until = Date.parse(valid_until);
    }
    Logout() {
        cookie.remove("token");
        cookie.remove("email");
        cookie.remove("valid_until");
        cookie.remove("magic");
        this._token = null;
        this._email = null;
        this._valid_until = null;
        this.isLoggedIn = false;
    }
}
export default User;