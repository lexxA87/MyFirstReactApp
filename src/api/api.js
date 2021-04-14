import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "95c08121-9712-4774-a056-c120fe348997",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => {
        return responce.data;
      });
  },
};

export const followAPI = {
  follow(id) {
    return instance.delete(`follow/${id}`).then((responce) => {
      return responce.data;
    });
  },
  unfollow(id) {
    return instance.post(`follow/${id}`).then((responce) => {
      return responce.data;
    });
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const profileAPI = {
  myProfile(id) {
    return instance.get(`profile/${id}`).then((responce) => {
      return responce.data;
    });
  },
  getUserStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};
