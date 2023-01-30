import { hashSync } from "bcrypt";

class PasswordHash {
  static toHash = async (password) => {
    const hash = hashSync(password, 10);
    return hash;
  };
}

export default PasswordHash;
