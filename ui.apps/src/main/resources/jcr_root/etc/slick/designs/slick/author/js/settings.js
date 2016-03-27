[].forEach.call(document.querySelectorAll('.cache-form'), function (element) {
  element.addEventListener('submit', function(event) {

    event.preventDefault();
    var formAction = element.action;
    var formData = new FormData(element);
        
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var msg = JSON.parse(xhr.responseText);
            sendMessage(msg);
        }
    };
    // Open the request to the token endpoint and send the GET
    xhr.open("POST", formAction, true);
    xhr.send(formData);

  }, false);
});

// HBS Messaging

function sendMessage(msg) {
	
	var messageCount = document.querySelectorAll('#messages > .message').length;
	console.log(messageCount);
	
	// Count how many messages are currently being displayed
	var messageId = 'message-' + document.querySelectorAll('#messages > .message').length;
	
	// Set the Message ID
	msg.messageId = messageId;
	
	// Grab the inline template
	var messageTemplate = document.getElementById('message').innerHTML;

	// Compile the template
	var compiledTemplate = Handlebars.compile(messageTemplate);

	// Render the data into the template (as a string!?)
	var message = compiledTemplate(msg);
	
	// 
	document.getElementById('messages').insertAdjacentHTML('beforeend', message);
	
	var currentMessage = document.getElementById(messageId);
	
	killMessage(currentMessage);
	
}

function killMessage(message) {
	
	var timing = 4000;
	// Remove the class to fade back out.
	setTimeout(function() {
		message.classList.remove("show");
	 }, timing);
	// Remove the message from the DOM.
	setTimeout(function() {
		message.remove();
	 }, timing + 125);
}