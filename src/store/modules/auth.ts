import { LocalStorageService } from "@/apis/local-strorage";
import { AUTH_REQUEST } from "../actions/auth";

const state = {
  token: LocalStorageService.getUserToken(),
  status: ''
}

const getters = {
  isAuthenticated: (state: Auth) => !!state.token,
  authStatus: (state: Auth) => state.status
}

const actions = {
  [AUTH_REQUEST]: (commit: callback, dispatch: callback, user: any): Promise<any> => new Promise((resolve, reject) => {
    console.log('--- commit', commit);
    // commit(AUTH_REQUEST);
    resolve({});
  })
}

interface Auth {
  token: string;
  status: string
}

type callback = (status: string, token?: string) => void;

export default {
  state,
  getters,
  actions
}

