var data = {
  totalCount: 14453,
  totalAmount: 50.09,
  countThisWeek: 41,
  amountThisWeek: 71978.13,
  inCountThisWeek: 21,
  outCountThisWeek: 11,
  avgRate: 16
};

class BeianService {
  static getData(){
    return new Promise(function (resolve, reject){
      resolve(data);
    });
  }
}
export {BeianService};
