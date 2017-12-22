import React from 'react'
import {MerterialService} from '__Source/components/meterials/meterials-service';
import '__Source/components/meterials/meterials.less';

export class MerterialUtilities extends React.Component {

  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    MerterialService.getUtilities().then((data) => {
      this.setState({
        data: data
      })
    });
  }

  render() {
    return <div className="merterial-utilities"><table>
      <tbody>
        {
          this.state.data && this.state.data.map((item, index) => <tr key={index}>
            <td><a href={item.url} target="_blank"><span>{item.title}</span></a></td>
          </tr>)
        }
      </tbody>
    </table></div>
    ;
  }
}
