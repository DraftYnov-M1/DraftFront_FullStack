// Back end : 
    - Créer le resolver Login 
    - Checker si user exist avec l'email reçu
    - Checker si password is valid
    - Génerer token et le returner

// Front
    - Page login et ou register 
    - Sur les deux pages, consommer les resolvers login & register 
    - Retourner le token
    - Set le token dans les cookies côté server
        -> Utiliser la couche API de next JS
            - app => api => auth/register/route.js => set cookies 
            - Server actions (en options)
            - Dans le middleware : utiliser un resolver graphql Getme pour vérifier si le token est valide et récupérer les infos du client