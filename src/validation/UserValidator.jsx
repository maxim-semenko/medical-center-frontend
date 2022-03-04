class UserValidator {

    // Firstname errors
    validateFirstname(firstname) {
        let error = "";
        if (!firstname || firstname === '') {
            error = 'Имя не может быть пустым!';
        } else if (firstname.length < 2) {
            error = 'Имя слишком короткое!';
        } else if (firstname.length > 50) {
            error = 'Имя слишком длинное!';
        }
        return error
    }

    // Lastname errors
    validateLastname(lastname) {
        let error = "";
        if (!lastname || lastname === '') {
            error = 'Фамилия не может быть пустой!';
        } else if (lastname.length < 2) {
            error = 'Фамилия слишком короткая!';
        } else if (lastname.length > 50) {
            error = 'Фамилия слишком длинная!';
        }
        return error
    }

    // Username errors
    validateUsername(username) {
        let error = "";
        if (!username || username === '') {
            error = 'Логин не может быть пустым!';
        } else if (username.length < 2) {
            error = 'Логин слишком короткий!';
        } else if (username.length > 50) {
            error = 'Логин слишком длинный!';
        }
        return error
    }

    // Email errors
    validateEmail(email) {
        let error = "";
        if (!email || email === '') {
            error = 'Почта не может быть пустой!';
        } else if (email.length < 2) {
            error = 'Почта слишком коротная!';
        } else if (email.length > 50) {
            error = 'Почта слишком длинная!';
        }
        return error
    }

    // Passport errors
    validatePassport(passport) {
        let error = "";
        if (!passport || passport === '') {
            error = 'Паспорт не может быть пустым!';
        } else if (passport.length !== 7) {
            error = 'Паспорт имеет неправильный формат!';
        }
        return error
    }

    // BloodType errors
    validateBloodType(bloodType) {
        let error = "";
        if (!bloodType || bloodType === '') {
            error = 'Группа крови не может быть пустой!';
        }
        return error
    }

    // BloodType errors
    validateAge(age) {
        let error = "";
        if (!age || age === '') {
            error = 'Возраст не может быть пустым!';
        } else if (age <= 0) {
            error = 'Возраст имеет неверный формат!';
        }
        return error
    }

    // Password errors
    validatePassword(password) {
        let error = "";
        if (!password || password === '') {
            error = 'Пароль не может быть пустым!';
        } else if (password.length < 4) {
            error = 'Пароль слишком короткий!';
        } else if (password.length > 150) {
            error = 'Пароль слишком длинный!';
        }
        return error
    }

    validateAllForSignUp(firstname, lastname, username, email, passport, bloodType, age, password) {
        let firstnameError = this.validateFirstname(firstname)
        let lastnameError = this.validateLastname(lastname)
        let usernameError = this.validateUsername(username)
        let emailError = this.validateEmail(email)
        let passportError = this.validatePassport(passport)
        let bloodTypeError = this.validateBloodType(bloodType)
        let ageError = this.validateAge(age)
        let passwordError = this.validatePassword(password)

        return {
            firstnameError,
            lastnameError,
            usernameError,
            emailError,
            passportError,
            bloodTypeError,
            ageError,
            passwordError
        }
    }

}

export default new UserValidator()