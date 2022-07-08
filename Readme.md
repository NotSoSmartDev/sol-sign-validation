Vercel function that allow you to validate sign message from solana wallet. 

Available on https://sol-sign-validation.vercel.app/api/

```
curl -X POST https://sol-sign-validation.vercel.app/api/ -H 'Content-Type: application/json' -d '{"message": "message", "signature": "signature", "publicKey": "publicKey"}'
```
