export default `
div.chat
    section.chat__contact
        div.chat__contact-link
            a(href='../profile/profile.pug').chat__contact-text Профиль
                 i(class="fa-solid fa-arrow-right").chat__contact-img
        div.chat__search
            input(placeholder='Поиск').chat__input
        ul.chat__contact-list
            li(data-child="contact")
    section.chat__messages
        section.chat__header
            div.chat__nicknames
                i(class="fa-solid fa-circle fa-2xl")
                p.chat__nicknames_text Вадим
            button
        ul.chat__message-list
            li(data-child="message")
            li(data-child="imageMessage")
        form.chat__input-message
            div.chat__list-input
                button(title='Прикрепить документ').chat__input_button
                    i(class="fa-solid fa-paperclip fa-2xl")
                input(data-child="textMessage").chat__input.chat__input_text-left
                button(title='Отправить сообщение').chat__input_button.chat__input_push
                    i(class="fa-solid fa-arrow-right fa-2xl")
`;
