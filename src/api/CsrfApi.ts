import axios from '../framework/axios'
import Csrf from '../interfaces/Csrf'

class CsrfApi {
  private url = '/api/public/csrf'

  public async header(): Promise<{}> {
    const csrfToken = await this.csrf()
    const header = {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        [csrfToken.headerName]: csrfToken.token
      }
    }
    return header
  }

  private async csrf(): Promise<Csrf> {
    const result = await axios.get(this.url)
    return result.data
  }
}

export default new CsrfApi()
