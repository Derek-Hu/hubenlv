import {MARKDOWN} from '__Source/const';
const partners= [{
    type: '融资中介机构',
    key: 'intermediary-org',
    parterns: []
}, {
    type: '配套机构',
    key: 'aid-org',
    parterns: []
}];

const _mapping = {};
partners.forEach((p, index) => {
  _mapping[p.type] = index;
});

MARKDOWN.partners.forEach(p => {
  p.category.split('|').map(name => name.trim()).forEach(category => {
    partners[_mapping[category]].parterns.push({
      category: category,
      id: p.contentUrl.replace(/\.js$/, ''),
      logo: p.metas && p.metas.logo,
      logo_hover: p.metas && p.metas.logo_hover,
      order: p.metas && p.metas.order,
    });
  });
})

partners.forEach((p, index) => {
  p.parterns.sort((a,b) => {
    return a.order - b.order;
  })
});


class PartnerService {
    static getPartners() {
        return partners;
    }

    static getCategories(key){
      if(!key){
        return partners;
      }
      return partners.filter(item => item.key === key);
    }

    static getItem(category, id){
      const list = partners.find(item => item.key === category);
      if(list && list.parterns){
        return list.parterns.find(item => item.id === id)
      }
      return null;
    }
}

export {PartnerService};
