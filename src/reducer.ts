const reducer = (state: { val: number; }, action: { type: any; }) => {
    switch (action.type) {
        case 'add': 
            return {val: state.val + 1};
        case 'sub': 
            return {val: state.val - 1}; 
        default: throw new Error('no case in reducer');
    } 
};

export default reducer;
