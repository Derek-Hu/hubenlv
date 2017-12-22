import {ROUTE_PATH, MARKDOWN, MENU_HASH, NumberOfKnowledge} from '__Source/const';

var menus = [{
  key: 'template-download',
  title: '表格下载',
  url: `/${ROUTE_PATH.merterials}/template-download`
},{
  key: 'utilities',
  title: '常用工具',
  url: `/${ROUTE_PATH.merterials}/utilities`
},{
  key: 'knowledge',
  title: '借贷知识',
  url: `/${ROUTE_PATH.merterials}/knowledge/all`
}]

// Generate Sub Category Menus
const _menusMapping = Object.assign({}, MENU_HASH.meterial);

MARKDOWN.knowledge.reduce((mapping, item) => {
  if(item.category){
    mapping[item.category.trim()] =item._type_hash;
  }
  return mapping;
}, _menusMapping);

Object.keys(_menusMapping).forEach(key => {
  menus.push({
    key: _menusMapping[key],
    title: key,
    subMenus: true,
    url: `/${ROUTE_PATH.merterials}/knowledge/${_menusMapping[key]}`
  })
})

const templates = require.context('../../../public/downloads/templates', true).keys().map(item => {
  const name = item.replace(/^\.\//, '');
  return {
    // eslint-disable-next-line
    title: name.replace(/\.[^\.]*$/, ''),
    name: name
  }
});

var _types = {};

menus.forEach(item => {
  _types[item.key] = item.title;
})

var utilities = [{
  url: 'http://www.cmbchina.com/CmbWebPubInfo/InterestRate.aspx?chnl=ckrate',
  title: '人民币存款利率表'
},{
  url: 'http://www.cmbchina.com/CmbWebPubInfo/Cal_Saving_Per.aspx?chnl=ckjsq',
  title: '活期储蓄计算器'
},{
  url: 'http://www.cmbchina.com/CmbWebPubInfo/Cal_Loan_Per.aspx?chnl=dkjsq',
  title: '个人贷款计算器'
},{
  url: 'http://finance.sina.com.cn/calc/tax_pers_income.html',
  title: '个人所得税计算器'
},{
  url: 'http://finance.sina.com.cn/calc/money_time_opt_deposit.html',
  title: '定活两便计算器'
}];

var _articles = MARKDOWN.knowledge;

class MerterialService {
  static getMenus(){
    return new Promise(function (resolve, reject){
      resolve(menus);
    });
  }

  static getUtilities(){
    return new Promise(function (resolve, reject){
      resolve(utilities);
    });
  }

  static getTemplates(){
    return new Promise(function (resolve, reject){
      resolve(templates);
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
      article.url = `/${ROUTE_PATH.merterials}/knowledge/${type}/${article.id}`;
    });
    return new Promise(function (resolve, reject){
      resolve(list);
    });
  }
  static getHotKnowledge(number){
    if(!number){
      number = NumberOfKnowledge;
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
          url: `/${ROUTE_PATH.merterials}/knowledge/${item._type_hash}/${item.id}`
        }
      }));
    });
  }
  static getArticle(id){
    return new Promise(function (resolve, reject){
      resolve(_articles.find(article => article.id === id));
    });
  }

}
export {MerterialService};
