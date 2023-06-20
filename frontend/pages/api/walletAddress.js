import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 3000;
dotenv.config();

app.use(cors());
app.use(express.json());

const CRYPTO_API_KEY = process.env.CRYPTO_API_KEY;

export default async function handler(req, res) {
    try {
    // const address = req.params.wallet;
    const response = await axios
      .post(
        `https://rest.cryptoapis.io/wallet-as-a-service/wallets/64764298dd225800072d91b0/ethereum/goerli/addresses`,
        {
          data: {
            item: {
              label: "wallet address",
            },
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": "33b2d073b8a2828c996e1aabdc694680bec64a2b",
          },
        }
      )
      .then((result) => {
        res.send(result.data.data.item);
      });
  } catch (e) {
    console.log(`something went wrong ${e}`);
    return res.status(400).json();
  }
};

app.listen(port, () => {
  console.log("Listening For API calls");
});