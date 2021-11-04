// function sendEmail()
// {
//     var mailName = document.getElementById("name").value
//     var mailEmail = document.getElementById("email").value
//     var mailMessage = document.getElementById("message").value
//     var mailSubject = document.getElementById("subject").value

//     var x = document.forms["myform"]["name"]["email"]["message"]["subject"].value;

//     if (x == "") {
//         alert("Require input must be filled out");
//         return false;
//     }
//     else {
//         Email.send({
//             //Host: "smtp.gmail.com",
//             // Username: "Safalmahat5@gmail.com",
//             // Password: "ewvtxrezjxrzlzlm",
//             SecureToken: "2cf23611-371a-407f-8253-de4dfffcd06c",
//             From: "Safalmahat5@gmail.com",
//             To: 'Safalmahat5@gmail.com',
//             Subject: `${mailName} sent you a message`,
//             Body: `First Name: ${mailName} <br/> Email: ${mailEmail} <br/> Subject: ${mailSubject} <br/> Message: ${mailMessage}`
//         }).then(
//             message => alert("Mail Sent Successfully")
//         );
//     }
// }
