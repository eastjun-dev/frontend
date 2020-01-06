import { pageName } from "../utils/constants.js";

let page = pageName.MYINFO;

export const getPage = () => {
  return page;
};

export const setPage = val => {
  page = val;
};

class Data {
  constructor() {
    this.name = "Lee";
    this.tel = "010-0000-0000";
    this.email = "email@email.com";
    this.password = "123456";
    this.introduce = "자기소개";
    this.family = [];
  }
}

let data = new Data();

export const getData = () => {
  return data;
};

export const setData = val => {
  data = val;
};

let familyNum = data.family.length;

export const getFamilyNum = () => {
  return familyNum;
};

export const setFamilyNum = val => {
  familyNum = val;
};
