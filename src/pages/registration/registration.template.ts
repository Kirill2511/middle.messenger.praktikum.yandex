export default `
section.registration
    h1.registration__title='Регистрация'
    form.form
        label.form__label(for='email') Почта
            input.form__input(data-child="emailField")
        label.form__label(for='login') Логин
            input.form__input(data-child="chatNameField")
        label.form__label(for='firstName') Имя
            input.form__input(data-child="firstNameField")
        label.form__label(for='secondName') Фамилия
            input.form__input(data-child="lastNameField")
        label.form__label(for='tel') Телефон
            input.form__input(data-child="phoneField")
        label.form__label(for='password') Пароль
            input.form__input(data-child="passwordField")
        button(data-child="submitButton")
    div.registration__login
        button(data-child="loginButton")
`;
