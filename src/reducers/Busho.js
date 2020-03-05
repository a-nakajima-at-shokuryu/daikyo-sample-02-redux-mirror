// reducer
// Storeの持つ状態とActionが送ってきた手続きを組み合わせて新しい状態を返す

// 初期値を設定
const initialState = {
    label: '部署',
    value: '',
    options: [
        { id: '40', name: '営業所Ｃ', }, 
        { id: '50', name: '営業所Ｄ', }, 
        { id: '60', name: '営業所Ｅ', }, 
    ],
}

// Reducerを定義
export default function BushoReducer(state = initialState, action) {
    // typeによって分岐する
    switch (action.type) {
        case 'CHANGE_LABEL':
            // ラベルを変更する（payloadの値を結合）
            return {...state, label: state.label + action.payload}
        case 'CREATE_OPTIONS':
            // 配列を生成（payloadの値で生成＆valueをクリアする）
            return {...state, options: action.payload, value: ''}
        case 'CHANGE_BUSHO':
            // 部署を変更する（payloadの値をvalueにセット）
            return {...state, value: action.payload}
        default:
            // 初期値を返す
            return state
    }
}
