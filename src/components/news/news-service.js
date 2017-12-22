import {ROUTE_PATH, MARKDOWN, MENU_HASH, NumberOfTopNews, NumberOfCarouselNews} from '__Source/const';

var _menus = [{
  key: 'hot-news',
  title: '中心要闻',
  url: '/news/all'
}]

// Generate Sub Category Menus
const _menusMapping = Object.assign({}, MENU_HASH.news);

MARKDOWN.news.reduce((mapping, item) => {
  if(item.category){
    mapping[item.category.trim()] =item._type_hash;
  }
  return mapping;
}, _menusMapping);

Object.keys(_menusMapping).forEach(key => {
  _menus.push({
    key: _menusMapping[key],
    title: key,
    url: `/${ROUTE_PATH.news}/${_menusMapping[key]}`
  })
})

var _types = {};

_menus.forEach(item => {
  _types[item.key] = item.title;
})

var _articles = MARKDOWN.news;

class NewsService {
  static getMenus(){
    return new Promise(function (resolve, reject){
      resolve(_menus);
    });
  }

  static getCarouselNews(number){
    if(!number){
      number = NumberOfCarouselNews;
    }
    return new Promise(function (resolve, reject){
      let results;
      if(_articles.length <= number){
        results = _articles;
      }else{
        results = _articles.slice(0, number);
      }
      resolve(results.map(item => {
        return {
          title: item.title,
          url: `/${ROUTE_PATH.news}/all/${item.id}`,
          bannerImage: `/carousel/${item.id}.jpg`,
          date: item.metas.date,
          contentUrl: item.contentUrl
        }
      }));
    });
  }

  static getTopNews(number){
    if(!number){
      number = NumberOfTopNews;
    }
    return new Promise(function (resolve, reject){
      let results;
      if(_articles.length <= number){
        results = _articles;
      }else{
        results = _articles.slice(0, number);
      }
      resolve(results.map(item => {
        return {
          title: item.title,
          category: item.category,
          url: `/${ROUTE_PATH.news}/${item._type_hash}/${item.id}`,
          date: item.metas.date
        }
      }));
    });
  }

  static getAllArticle(type){
    let list;
    if(!type || type==='all'){
      list = _articles;
    }else {
      list = _articles.filter(article => article._type_hash === type);
    }

    list.forEach(article => {
     article.url = `/${ROUTE_PATH.news}/${type}/${article.id}`;
   });

   return new Promise(function (resolve, reject){
     resolve(list);
   });
  }

  static getArticle(id){
    return new Promise(function (resolve, reject){
      resolve(_articles.find(article => article.id === id));
    });
  }

}
export {NewsService};
