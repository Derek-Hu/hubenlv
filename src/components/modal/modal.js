import React from 'react';
import {Modal} from 'antd';
import '__Source/components/modal/modal.less';

export class ReactModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({
            visible: true
        })
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        const {visible} = this.state;
        return (
            <Modal visible={visible}
                   footer={null}
                   onOk={this.openModal}
                   onCancel={this.closeModal}
                   wrapClassName={'myModalClass'}
                   width="900px"
                   height="600px"
            >
                <img src={this.props.image} className="chart" alt=""/>
            </Modal>
        )
    }
}
