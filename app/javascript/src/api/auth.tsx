import axios from 'axios'

import { UserAuthorized } from '../type'

const check_authorized = async (url: string) => {

  try {
    const res = await axios
      .create({ withCredentials: true })
      .get<UserAuthorized>(url)

    return res;
  } catch (err) {
    throw new Error(err.status)
  }
};

export default check_authorized