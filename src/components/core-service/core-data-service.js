var _menus = [{
  key: 'intermediary-org',
  title: '融资中介机构',
  url: '/core-service/intermediary-org'
},{
  key: 'aid-org',
  title: '配套机构',
  url: '/core-service/aid-org'
}]

var _map = {};

_menus.forEach(item => {
  _map[item.key] = item;
})

class CoreDataService {
  static getMenus(){
    return _menus;
  }

  static getItem(key){
    return _map[key];
  }

  static existsCategory(key){
    return (key in _map);
  }
}
export {CoreDataService};
