class UserValidator {

    // Firstname errors
    validateFirstname(firstname) {
        let error = "";
        if (!firstname || firstname === '') {
            error = 'firstname cannot be empty!';
        } else if (firstname.length < 2) {
            error = 'firstname is too short!';
        } else if (firstname.length > 25) {
            error = 'firstname is too long!';
        }
        return error
    }

    // Lastname errors
    validateLastname(lastname) {
        let error = "";
        if (!lastname || lastname === '') {
            error = 'lastname cannot be empty!';
        } else if (lastname.length < 2) {
            error = 'lastname is too short!';
        } else if (lastname.length > 25) {
            error = 'lastname is too long!';
        }
        return error
    }

    // Username errors
    validateUsername(username) {
        let error = "";
        if (!username || username === '') {
            error = 'Логин не должен быть пустым!';
        } else if (username.length < 2) {
            error = 'Логин слишком короткий!';
        } else if (username.length > 25) {
            error = 'Логин слишком длинный!';
        }
        return error
    }

    // Email errors
    validateEmail(email) {
        let error = "";
        if (!email || email === '') {
            error = 'email cannot be empty!';
        } else if (email.length < 2) {
            error = 'email is too short!';
        } else if (email.length > 25) {
            error = 'email is too long!';
        }
        return error
    }

    // Password errors
    validatePassword(password) {
        let error = "";
        if (!password || password === '') {
            error = 'Пароль не должен быть пустым!';
        } else if (password.length < 4) {
            error = 'Пароль слишком короткий!';
        } else if (password.length > 255) {
            error = 'Пароль слишком длинный!';
        }
        return error
    }

    validateAllWithoutPassword(firstname, lastname, username, email) {
        let firstnameError = this.validateFirstname(firstname)
        let lastnameError = this.validateLastname(lastname)
        let usernameError = this.validateUsername(username)
        let emailError = this.validateEmail(email)

        return {
            firstnameError,
            lastnameError,
            usernameError,
            emailError
        }
    }

    validateAllForSignUp(firstname, lastname, username, email, password) {
        let firstnameError = this.validateFirstname(firstname)
        let lastnameError = this.validateLastname(lastname)
        let usernameError = this.validateUsername(username)
        let emailError = this.validateEmail(email)
        let passwordError = this.validatePassword(password)

        return {
            firstnameError,
            lastnameError,
            usernameError,
            emailError,
            passwordError
        }
    }

}

export default new UserValidator()