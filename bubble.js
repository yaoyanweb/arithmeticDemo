function swap(arr, j, k) {
    let a = arr[j];
    arr[j] = arr[k];
    arr[k] = a;
    return arr;
}
let flag = false;
// 冒泡排序
Array.prototype.bubble = function () {
    let _this = this;
    for (let i = 0; i < _this.length - 1; i++) {
        for (let j = 0; j < _this.length - 1 - i; j++) {
            if (_this[j] > _this[j + 1]) {
                flag = true;
                swap(_this, j, j + 1);
            }
        }
        if(!flag) break;
        // 这一步是为了还原
        flag = false;
    };
    return _this;
}

console.log([1, 9, 10, 2, 3, 8, 5].bubble())