var userInput;
var userName;
userInput = 5;
userInput = "Hassan";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Error', 500);
