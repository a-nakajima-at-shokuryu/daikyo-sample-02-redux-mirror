// Container
// Componentが見た目用のコンポーネントに対しContainerは機能用のコンポーネント

import { connect } from 'react-redux'

// Action
import * as actions from '../actions/Busho'

// Component
import Busho from '../Busho'

// mapStateToProps
// 名前の通りstateをpropsに変換するもの
// stateの中から必要なstateを取り出してReactコンポーネントに渡すことが出来る
// 全てを渡す場合はstateをそのままreturnする
// 一部を渡す場合はkey-valueでreturnする
const mapStateToProps = state => {
    return state
}

// mapDispatchToProps
// こちらも名前の通りdispatch関数をpropsとして渡すことでReactコンポーネント側でdispatchを使えるようにする
// component側で使うようにプロパティの形にして渡す必要がある
// この時dispatchに使いたいactionCreatorを引数に渡す
const mapDispatchToProps = dispatch => {
    return {
        changeLabel: () => { dispatch(actions.changeLabel()) },
        createOptions: () => { dispatch(actions.createOptions()) },
        initOptions: () => { dispatch(actions.initOptions()) },
        changeBusho: e => { dispatch(actions.changeBusho(e)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Busho)

