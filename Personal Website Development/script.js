document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('message-form');
    var messageList = document.getElementById('message-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nameInput = document.getElementById('name-input');
        var messageInput = document.getElementById('message-input');

        var name = nameInput.value;
        var message = messageInput.value;

        if (name && message) {
            var messageItem = document.createElement('p');
            messageItem.textContent = name + ': ' + message;
            messageList.appendChild(messageItem);

            nameInput.value = '';
            messageInput.value = '';
        }
    });
});
