export default `
section.profile-page
    a(href='../chat/chat.pug' title='Назад на страницу чата').profile-back
        i(class="fa-solid fa-angle-left fa-2xl").profile__img
    div.profile-content
        div.profile__avatar
            span(title='Аватар').profile__eclipse
                i(class="fa-regular fa-user fa-2xl").profile__img.profile__img_center
            p.profile__name Иван
        form(class="settings-general-form")
            div.profile__form
                label.profile__label(for='email') Почта
                    input.profile__input(data-child="emailField")
                label.profile__label(for='login') Логин
                    input.profile__input(data-child="loginNameField")
                label.profile__label(for='firstName') Имя
                    input.profile__input(data-child="firstNameField")
                label.profile__label(for='secondName') Фамилия
                    input.profile__input(data-child="lastNameField")
                label.profile__label(for='display_name') Имя в чате
                    input.profile__input(data-child="chatNameField")
                label.profile__label(for='tel') Телефон
                    input.profile__input(data-child="phoneField")

                div.profile__buttons
                     button(data-child="submitButton") Изменить данные
                     button(data-child="submitPasswordButton") Изменить пароль
                     button(data-child="exitButton") Выйти
`;
