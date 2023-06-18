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

app.get("/walletAddress/:wallet", async (req, res) => {
  try {
    const address = req.params.wallet;
    const response = await axios
      .post(
        `https://rest.cryptoapis.io/wallet-as-a-service/wallets/${address}/ethereum/goerli/addresses`,
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
            "X-API-Key": CRYPTO_API_KEY,
          },
        }
      )
      .then((result) => {
        res.send(result.data.data.item.address);
      });
  } catch (e) {
    console.log(`something went wrong ${e}`);
    return res.status(400).json();
  }
});

app.listen(port, () => {
  console.log("Listening For API calls");
});
