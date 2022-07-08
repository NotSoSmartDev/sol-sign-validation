import { sign } from "tweetnacl"
import * as web3 from "@solana/web3.js"
import bs58 from "bs58"


async function handler(req, res) {
  const { message, signature, publicKey } = req.body

  const isSigned = sign.detached.verify(
    bs58.decode(message),
    bs58.decode(signature),
    (new web3.PublicKey(publicKey)).toBytes(),
  )

  res.status(200).json({ 'valid': isSigned })
}
