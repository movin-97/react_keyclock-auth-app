import Keycloak from "keycloak-js";


const keycloak = new Keycloak({
  url: "http://localhost:8080/auth/",
  realm: "sample",
  clientId: "sampclient",

  // url: "https://keycloak.redi2.com:8443/auth/",

  // realm: "BillFin-Dev",

  // clientId: "reference-service",
});

export default keycloak;
