var inData = [{
  id: 'in-001',
  username: '叶**',
  phone: '136****2942',
  location: '沙河口区',
  amount: 5,
  rate: '1.65%',
  duration: 12
},{
  id: 'in-002',
  username: '许*',
  phone: '186****7119',
  location: '中山区',
  amount: 20,
  rate: '1.30%',
  duration: 6
},{
  id: 'in-003',
  username: '黄**',
  phone: '173****6011',
  location: '高新区',
  amount: 48,
  rate: '1.10%',
  duration: 3
},{
  id: 'in-004',
  username: '廖*',
  phone: '185****4516',
  location: '高新区',
  amount: 12,
  rate: '1.50%',
  duration: 9
}];

var outData = [{
  id: 'out-001',
  username: '李**',
  phone: '150****5616',
  location: '沙河口区',
  amount: 200,
  rate: '1%',
  duration: 12
},{
  id: 'out-002',
  username: '陈*',
  phone: '159****3531',
  location: '中山区',
  amount: 3,
  rate: '0.80%',
  duration: 6
},{
  id: 'out-003',
  username: '马**',
  phone: '176****2925',
  location: '高新区',
  amount: 10,
  rate: '0.60%',
  duration: 3
},{
  id: 'out-004',
  username: '张**',
  phone: '135****9880',
  location: '高新区',
  amount: 5,
  rate: '0.95%',
  duration: 9
}];

class BorrowService {
  static getBorrowIn(){
    return new Promise(function (resolve, reject){
      resolve(inData);
    });
  }
  static getBorrowOut(){
    return new Promise(function (resolve, reject){
      resolve(outData);
    });
  }
}
export {BorrowService};
