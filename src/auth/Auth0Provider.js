import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = "";
    const clientId = "";

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            {children}{" "}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;