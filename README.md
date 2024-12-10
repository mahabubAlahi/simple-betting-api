- `Custom Betting Odds API`
  - It is a simple Node.js application built using the Express framework. The API serves predefined betting odds for football matches and allows users to query match odds and check if a specific bet has the highest odds.
    - Features
       - Endpoint to retrieve betting odds for specific matches.
    - API endpoint for Getting Match Odds
       - URL: `/api/odd`
       - Method: GET
       - Query Parameters:
         - opponent1 (required): Name of the first opponent.
         - opponent2 (required): Name of the second opponent.
         - bet_against (required): The specific bet to check for the highest odds.
       - Description: Fetches the betting odds for a specific match and checks if the specified bet has the highest odds.
       - Response:
         - Success:
            ```JS
            {
                "execStatus": true,
                "msg": "Successfully get the odds!",
                "data": {
                    "match": {
                        "PORTUGAL": 3.5,
                        "SWITZERLAND": 2.0,
                        "DRAW": 2.2
                    },
                    "result": true
                }
            }
            ```
    - Deployed in AWS EC2:- `http://3.84.150.52:3009`