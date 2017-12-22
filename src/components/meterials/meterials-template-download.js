import React from 'react'
import { Button } from 'antd';
import {MerterialService} from '__Source/components/meterials/meterials-service';
import '__Source/components/meterials/meterials.less';

export class MerterialTemplateDownload extends React.Component {

  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    MerterialService.getTemplates().then((data) => {
      this.setState({
        data: data
      })
    });
  }

  render() {
    return <div className="merterial-template-download"><table>
      <tbody>
        {
          this.state.data && this.state.data.map((item, index) => <tr key={index}>
            <td>{item.title}</td>
            <td className="download"><a href={`/downloads/templates/${item.name}`}><Button className="theme">点击下载</Button></a></td>
          </tr>)
        }
      </tbody>
    </table></div>
    ;
  }
}
