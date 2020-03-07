import axios from '../framework/axios'

class LoginApi {
  url = '/api/public/login'

  public async login(loginId: string, password: string) {
    await axios.post(this.url, { loguinId: loginId, password: password })
  }
}

export default new LoginApi()
