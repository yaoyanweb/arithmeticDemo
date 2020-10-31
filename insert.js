// Array.prototype.insert = function(){
//     let _this = this,
//         handle = [];
//     handle.push(_this[0]);
//     for(let i = 1; i < _this.length; i++){
//         let A = _this[i];
//         for(let j = handle.length; j >= 0; j--){
//             let B = handle[j]; 
//             if(A > B){
//                 handle.splice(j+1,0,A);
//                 break;
//             }
//             if(j === 0){
//                 handle.unshift(A);
//             }
//         }
//     };
//     return handle;
// }

// console.log([1, 9, 10, 2, 3, 8, 5].insert())
// function  fn(num,type){
// 	let reg = /^[0,1]$/g;
// 	if(reg.test(num.toString())){
// 		return true;
// 	}
// 	if(num.toString().length === 1&& type == undefined && num !== 1){
// 		return false;
//     }
    
// 	let numList = [...(num.toString())];
// 	if(numList.length === 1){
		
// 		return fn(numList[0]*numList[0])
// 	}else {
// 		let _num = 0;
// 		for(let i=0;i<numList.length;i++){
// 			_num += numList[i]*numList[i];
//         }
//         console.log(_num);
// 		return fn(_num);
// 	}
// }
// console.log(fn(11,true))

// Array.prototype.myflat = function(num){
//     let list = this;
//     if(num === Infinity){
//       return  list.toString().split(',').map(item => item*1);
//     }
//     for(let i = 0; i<num; i++){
//         list = [].concat(...list); 
//     };
//     return list;
// }
// let a = [1,2,3,[4,5,[6,7,[8,9]]]]
// console.log(a.myflat(0));

function fn(num){
    let dep = [1,1];
    for(let i = 2; i <= num; i++){
        dep[i] = dep[i-1] + dep[i-2]
    };
    return dep[num];
}
// console.log(fn(3));
var lengthOfLongestSubstring = function(s) {
    let temp = s.split('');
    let arr = [];
    let maxLength = 0;
    for (let i = 0; i < temp.length; i++) {
        let idx = arr.indexOf(temp[i]);
        arr.push(temp[i]);
        if (idx === -1) {
            maxLength = maxLength < arr.length ? arr.length : maxLength;
        } else {
            arr = arr.slice(idx + 1);
        }
    }
    return maxLength;
};
// console.log(lengthOfLongestSubstring('pweeeasd'));

function fun(num){
    let resultList = [];
    let list = [];
    let start = 1;
    function fn(i){
        let j;
        if(start > parseInt(num/2)){
            return;
        }
        if(list.length === 0){
            list.push(i);
            fn(i+1)
        };
        if(list.length != 0){
            j = list.reduce((r,x)=>r+x);
        };
        if(j < num){
            list.push(i);
            fn(i+1)
        }else if(j === num){
            resultList.push([...list]);
        };
        start++;
        list.length = 0;
        fn(start);
    }
    fn(1)
    return resultList;
}

// console.log(fun(100));

var q = '1000000000.34'.split('.');
let num = parseInt(q[0].length / 3);
let q1 = [...q[0]];
for(let i = 0; i < num; i++){
    q1.splice((i+1)*3,0,',')
}
let money = q1.join('')+'.'+q[1]
console.log(money)