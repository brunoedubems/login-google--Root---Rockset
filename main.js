    function handleCredentialResponse(response) {
        const data = jwt_decode(response.credential)
        fullName.textContent = data.name; 
        sub.textContent = data.sub
        given_name.textContent = data.given_name
        family_name.textContent = data.family_name
        email.textContent = data.email
        verifiedEmail.textContent = data.verifiedEmail
        picture.setAttribute("src", data.picture)

    }

    window.onload = function () {

        google.accounts.id.initialize({
            client_id: "843959055248-gp5cpsve3b1v849u2b3ngbgoacsmkk3m.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"), {
                theme: "filled_black",
                size: "large",
                type: "standard",
                shape: "pill",
                text: "$ {button.text}",
                locale: "pt-BR",
                logo_alignment: "left"
            }
        );
        google.accounts.id.prompt();
    }
