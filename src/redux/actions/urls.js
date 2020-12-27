export const ROOT =
  process.env.NODE_ENV === 'production'
    ? 'https://bank.karsooghmehregan.ir/api/'
    : 'https://bank.karsooghmehregan.ir/api/'

export const LOGIN = ROOT.concat('signin/');
export const CREATE_ACCOUNT = ROOT.concat('signup/');
export const LOGOUT = ROOT.concat('signout/');

export const GET_PROBLEM = ROOT.concat('question/');
export const SUBMIT_PROBLEM = ROOT.concat('question/');

export const GET_COMMENT = ROOT.concat('comment/');
export const SUBMIT_COMMENT = ROOT.concat('comment/');

export const GET_PROPERTY = ROOT.concat('tag/');
export const GET_SUBTAGS = ROOT.concat('subtag/');
export const GET_EVENTS = ROOT.concat('event/');
export const GET_SOURCES = ROOT.concat('source/');

export const GET_ACCOUNT_BY_USERNAME = ROOT.concat('accountByUsername/');
export const GET_PROBLEMS_LIST = ROOT.concat('qfilter/');
export const GET_USER_DATA = ROOT.concat('account/');
