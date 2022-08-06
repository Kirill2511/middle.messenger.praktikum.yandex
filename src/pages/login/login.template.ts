export default `
section.login
    h1.login__title='Вход'
    form.form
        label.form__label(for='login') Логин
            input.form__input(
                type='text'
                name='login'
                id='login'
                value='ivanivanov'
            )
        label.form__label(for='password') Пароль
            input.form__input(
                type='password'
                name='password'
                id='password'
                value='123456789'
            )
        a(data-child="submitButton")
    a(data-child="registrationButton") 
`;
