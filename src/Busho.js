import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export default class Busho extends Component {
    render() {

        // Storeの内容を取得
        const labelName = this.props.label
        const listItem = this.props.options.map(
            (e) => {
                return <MenuItem value={e.id}>{e.id} - {e.name}</MenuItem>
            }
        )
        // console.log(this.props)
        // console.log(labelName)
        // console.log(listItem)

        // メッセージボックス表示
        const showMessageHandler = (e) => {
            const msg = 
                "ラベルの値: " + this.props.label + "\n" +
                "選択肢の値：" + JSON.stringify(this.props.options) + "\n" +
                "選択中の値：" + this.props.value
            window.alert(msg)
        }

        return (
            <div>
                <div>
                    <InputLabel shrink id="busho-label">{labelName}</InputLabel>
                    <Select labelId="busho-label" value={this.props.value} onChange={e => this.props.changeBusho(e)}>
                        {listItem}
                    </Select>
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={() => this.props.changeLabel()}>ラベル変更</Button>&nbsp;
                    <Button variant="contained" color="primary" onClick={() => this.props.createOptions()}>選択肢生成</Button>&nbsp;
                    <Button variant="contained" color="primary" onClick={() => this.props.initOptions()}>選択肢初期化</Button>&nbsp;
                    <Button variant="contained" color="primary" onClick={showMessageHandler}>値表示</Button>&nbsp;
                </div>
            </div>
        )
    }
}
