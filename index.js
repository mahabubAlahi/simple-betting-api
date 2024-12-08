const express = require('express')
const app = express()
const cors = require("cors");
const port = 3009

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sportsOdds = [
    {
        "NETHERLAND": 3.3,
        "USA": 3.0,
        "DRAW": 3.2
    },
    {
        "ARGENTINA": 3.6,
        "AUSTRALIA": 2.0,
        "DRAW": 1.6
    },
    {
        "JAPAN": 1.5,
        "CROATIA": 3.0,
        "DRAW": 3.2
    },
    {
        "BRAZIL": 3.5,
        "KOREA": 2.0,
        "DRAW": 2.2
    },
    {
        "ENGLAND": 3.3,
        "SENEGAL": 0.5,
        "DRAW": 1.2
    },
    {
        "FRANCE": 3.6,
        "POLAND": 2.0,
        "DRAW": 1.6
    },
    {
        "MOROCCO": 1.5,
        "SPAIN": 3.0,
        "DRAW": 3.2
    },
    {
        "PORTUGAL": 3.5,
        "SWITZERLAND": 2.0,
        "DRAW": 2.2
    },
]

app.get('/', (req, res) => {
    res.status(200).send({
        execStatus: true,
        msg: "Successfully get the health route!"
    });
});

app.get('/api/odd', async (req, res) => {
  const opponent1 = req.query.opponent1;
  const opponent2 = req.query.opponent2;
  const betAgainst = req.query.bet_against;

  try{
    if(!opponent1){
        res.status(400).send({
            execStatus: false,
            msg: "Query Param `opponent1` required!"
        });
    }
    if(!opponent2){
        res.status(400).send({
            execStatus: false,
            msg: "Query Param `opponent2` required!"
        });
    }
    if(!betAgainst){
        res.status(400).send({
            execStatus: false,
            msg: "Query Param `betAgainst` required!"
        });
    }
    //Finding the match odd of the given opponents
    const match = sportsOdds.find(obj => obj.hasOwnProperty(opponent1) && obj.hasOwnProperty(opponent2));
    
    if(!match){
        res.status(404).send({
            execStatus: false,
            msg: "No match found!"
        });
    }

    // Check if `betAgainst` has the highest odd
    const result = match[betAgainst] === Math.max(...Object.values(match));

    res.status(200).send({
        execStatus: true,
        msg: "Successfully get the odds!",
        data: { 
            match,
            result
        }
    });
  }catch(err){
    console.error(err);
    res.status(400).send({
        execStatus: true,
        msg: "Getting the odds failed!"
    });
  }
})

app.listen(port, () => {
  console.log(`Betting app listening on port ${port}`)
})