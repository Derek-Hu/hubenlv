const ROUTE_PATH = {
  login: 'login',
  register: 'register',
  aboutUs: 'about-us',
  merterials: 'merterials',
  coreService: 'core-service',
  news: 'news',
  business: 'business',
  home: 'home'
};

const FOLDER_PATH = {
  donwload: 'downloads/templates'
}

const NumberOfKnowledge = 12;

const NumberOfTopNews = 6;

const NumberOfCarouselNews = 3;

const DetailNotExistsTxt = '内容不存在!';

const MARKDOWN = process.env.MARKDOWN;

const MENU_HASH = process.env.MENU_HASH;

export {ROUTE_PATH, FOLDER_PATH, MARKDOWN,MENU_HASH, NumberOfKnowledge, NumberOfTopNews, NumberOfCarouselNews, DetailNotExistsTxt}
