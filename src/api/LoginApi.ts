import axios from '../framework/axios'
import csrfApi from '../api/CsrfApi'
class LoginApi {
  url = '/api/public/login'

  public async login(userId: string, password: string) {
    const header = await csrfApi.header()
    await axios.post(this.url, { userId: userId, password: password }, header)
  }
}

export default new LoginApi()
