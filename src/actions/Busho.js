// ActionCreator
// Containerのdispatchで呼ばれる
// Reducerに渡すtypeを返す

// ラベルを変更する
export function changeLabel() {
    return {
        type: 'CHANGE_LABEL',
        payload: '＊'
    }
}

// 選択肢を生成する
export function createOptions() {
    return {
        type: 'CREATE_OPTIONS',
        payload: [
            { id: '40', name: '営業所Ｃ', }, 
            { id: '50', name: '営業所Ｄ', }, 
            { id: '60', name: '営業所Ｅ', },           
        ]
    }
}

// 選択肢を初期化する
export function initOptions() {
    return {
        type: 'CREATE_OPTIONS',
        payload: []
    }
}

// 部署を変更する
export function changeBusho(e) {
    return {
        type: 'CHANGE_BUSHO',
        payload: e.target.value
    }
}