function generateMines(M,N,mineCount,firstClickRow,firstClickCol){
    let list = []; 
    let sonList = [];
    let ae = 9; // 安全区数量
    if(firstClickRow > M || firstClickCol > N){
        alert('参数设置错误！');
        return;
    }
    for(let x = 0; x < N; x++){
        sonList.push('X');
    }
    for(let i = 0; i < M; i++){
        let newList = sonList.concat();
        list.push(newList);
    }
    let addObj = {
        top(){
            list[firstClickRow-2][firstClickCol-1] = 'O';
        },
        leftTop(){
            list[firstClickRow-2][firstClickCol-2] = 'O';
        },
        rightTop(){
            list[firstClickRow-2][firstClickCol] = 'O';
        },
        left(){
            list[firstClickRow-1][firstClickCol-2] = 'O';
        },
        right(){
            list[firstClickRow-1][firstClickCol] = 'O';
        },
        bottom(){
            list[firstClickRow][firstClickCol-1] = 'O';
        },
        leftBottom(){
            list[firstClickRow][firstClickCol-2] = 'O';
        },
        rightBottom(){
            list[firstClickRow][firstClickCol] = 'O';
        }
    }
    list[firstClickRow-1][firstClickCol-1] = 'O';
    // 判断各种极端情况
    if(firstClickRow === 1){
        ae = 6;
        addObj.bottom();
        addObj.right();
        addObj.rightBottom();
        if(firstClickCol !== 1){
            addObj.left();
            addObj.leftBottom();
        } else {
            ae = 4;
        }
        if(N !== firstClickCol){
            addObj.right();
            addObj.rightBottom();
        }    
    } else if(M === firstClickRow){
        addObj.top();
        addObj.right();
        addObj.rightTop();
        if(firstClickCol !== 1){
            addObj.left();
            addObj.leftTop();
        }
        if(N !== firstClickCol){
            addObj.right();
            addObj.rightTop();
        } else {
            ae = 4;
        }
    } else {
        addObj.bottom();
        addObj.top();
        if(firstClickCol !== 1){
            addObj.left();
            addObj.leftTop();
            addObj.leftBottom();
        } else {
            ae = 6;
        }
        if(N !== firstClickCol){
            addObj.right();
            addObj.rightBottom();
            addObj.rightTop();
        } else {
            ae = 6;
        }
    }
    function xQuery(){
        let newList = [].concat(...list);
        let x = newList.join('').replace(/O/g,'');
        return x.length;
    }
    function xFun(){
        if(M*N - ae <  mineCount){
            alert('为了保证安全区，雷的数量超出最大数');
            return;
        }
        if(xQuery() > mineCount){
            let row = Math.floor(Math.random()*M);
            let col = Math.floor(Math.random()*N);
            list[row][col] = 'O';
            xFun()
        }
    }
    xFun();
    return list;
};
console.log(generateMines(5,5,18,1,4))
