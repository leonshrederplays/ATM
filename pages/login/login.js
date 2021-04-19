$(function() {
    var passwordInput = document.getElementById('loginPassword');

    let array = ['*'];
    console.log("Hello World");

    async function changePlaceHolder() {
        passwordInput.placeholder = array.join(" ");
        array.push("*");
        return Promise.resolve()
    }

    setTimeout(() => {
        changePlaceHolder().then(
            setTimeout(() => changePlaceHolder().then(
                setTimeout(() => changePlaceHolder().then(
                    setTimeout(() => changePlaceHolder().then(() => {
                        console.log("Pin inserted");
                        window.setTimeout(function(){

                            // Move to a new location or you can do something else
                            window.location.href = "../accounts/accounts.html";
                    
                        }, 800);
                    }), 350)
                ), 250)
            ), 500)
        )
    }, 1000);
    
});
