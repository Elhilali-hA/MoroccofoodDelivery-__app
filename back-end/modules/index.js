import jwt from 'jsonwebtoken';
import crypto from 'crypto';

class Tokenizer {
  generateAccessToken(id) {
    return jwt.sign(id, process.env.APP_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
  }

  generateRandomToken(lenght = 40) {
    return crypto.randomBytes(lenght).toString('hex');
  }

  generateHashedToken(resetToken) {
    return crypto.createHash('sha256').update(resetToken).digest('hex');
  }
}
export default new Tokenizer();
