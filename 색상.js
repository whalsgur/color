var bgBox = box().append().size(400, 510).disableSelection().border(0);

var firstBox = box().appendTo(bgBox).size('100%').border(0).color('#FFFFF6').hide();
var abb1Box = box().appendTo(bgBox).size('100%').border(0).color('#F8FFFF').hide();
var abb2Box = box().appendTo(bgBox).size('100%').border(0).color('#EDFFE7').hide();
var abb3Box = box().appendTo(bgBox).size('100%').border(0).color('#FFEFEF').hide();


var intro = 2000;
var introBox = box().appendTo(bgBox).size('100%').border(0).show().timer(introTimer, 10);

var intro1 = box().appendTo(introBox).size('90%', 'auto').text('색상', 60, 'red').border(0).marginTop(150);
var introa = box().appendTo(introBox).size('90%', 'auto').text('color', 30, 'OrangeRed').border(0).marginTop(200);
var intro2 = box().appendTo(introBox).size('90%', 'auto').text('감별', 60, 'Gold').border(0).marginTop(150).hide();
var introb = box().appendTo(introBox).size('90%', 'auto').text('distinguish', 30, 'DarkOliveGreen').border(0).marginTop(200).hide();
var intro3 = box().appendTo(introBox).size('90%', 'auto').text('능력', 60, 'DeepSkyBlue').border(0).marginTop(150).hide();
var introc = box().appendTo(introBox).size('90%', 'auto').text('ability', 30, 'purple').border(0).marginTop(200).hide();
var intro4 = box().appendTo(introBox).size('90%', 'auto').text('테스트', 60, 'Sienna').border(0).marginTop(150).hide();
var introd = box().appendTo(introBox).size('90%', 'auto').text('test', 30, 'black').border(0).marginTop(200).hide();

var intro5 = box().appendTo(introBox).size('100%', 'auto').text('색상 감별 능력 테스트', 40).border(0).marginTop(200).hide();
var introe = box().appendTo(introBox).size('100%', 'auto').text('Color Distinguish Ability Test', 20).border(0).marginTop(100).hide();


box().appendTo(firstBox).size('auto').text('색상 감별 능력 테스트', 40).marginTop(20).padding('30 50').border(0);
box().appendTo(firstBox).size('40%', 'auto').text('색맹 검사', 20).margin(10).marginTop(60).padding('20 10').border(2, 'CornflowerBlue', 30).click(click1);
box().appendTo(firstBox).size('40%', 'auto').text('다른 색깔 찾기', 20).marginTop(60).padding('20 10').border(2, 'DarkOliveGreen', 30).click(click2);
box().appendTo(firstBox).size('80%', 'auto').text('관찰력 테스트', 20).margin(10).marginTop(40).padding('20 50').border(2, 'IndianRed', 30).click(click3);


box().appendTo(abb1Box).size('80%', 'auto').text('색맹 검사', 40, 'MediumBlue').marginTop(25).border(0);
box().appendTo(abb1Box).size('50%', '50%').image('광고!.PNG').border(5, 'lightBlue', 10).marginTop(30);
var aaa = box().appendTo(abb1Box).size('100%', 'auto').text('색맹 검사 해보기', 25).marginTop(25).click(startabb1).border(0).timer(timertimer, 500);
box().appendTo(abb1Box).size('10%').image('back').marginTop(5).marginLeft(290).border(0).click(clickBack);


box().appendTo(abb3Box).size('80%', 'auto').text('관찰력 테스트', 40, 'DarkRed').marginTop(25).border(0);
box().appendTo(abb3Box).size('50%', '50%').image('광고2.PNG').border(5, 'Tan', 10).marginTop(35);
var bbb = box().appendTo(abb3Box).size('80%', 'auto').text('관찰력 테스트 해보기', 25).marginTop(25).click(startabb2).border(0).timer(timertimer, 500);
box().appendTo(abb3Box).size('10%').image('back').marginTop(5).marginLeft(290).border(0).click(clickBack);


box().appendTo(abb2Box).size('80%', 'auto').text('다른 색깔 찾기', 40, 'SeaGreen').marginTop(25).border(0);
box().appendTo(abb2Box).size('50%', '50%').image('광고3.PNG').border(5, 'GreenYellow', 10).marginTop(35);
var ccc = box().appendTo(abb2Box).size('80%', 'auto').text('다른 색깔 찾기 해보기', 25).marginTop(25).click(startabb3).border(0).timer(timertimer, 500);
box().appendTo(abb2Box).size('10%').image('back').marginTop(5).marginLeft(290).border(0).click(clickBack);



function click1 () {
    firstBox.hide();
    abb1Box.show();
    abb2Box.hide();
    abb3Box.hide();
}

function click2 () {
    firstBox.hide();
    abb1Box.hide();
    abb2Box.show();
    abb3Box.hide();
}

function click3 () {
    firstBox.hide();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.show();
}

function clickBack () {
    firstBox.show();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
}

function startabb1 () {
    firstBox.hide();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
    bgBox1.show();
    bgBox2.hide();
    bgBox3.hide();
    startBox1.show();
}

function startabb2 () {
    firstBox.hide();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
    bgBox1.hide();
    bgBox2.show();
    bgBox3.hide();
    startBox2.show();
}

function startabb3 () {
    firstBox.hide();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
    bgBox1.hide();
    bgBox2.hide();
    bgBox3.show();
    startBox3.show();
}


function timertimer (bx) {
    if (bx == aaa) {
        
        if (aaa.textColor() == 'black') {
            aaa.textColor('Chocolate');
            return;
        }
        
        else if (aaa.textColor() == 'Chocolate') {
            aaa.textColor('black');
            return;
        }
        
    }
    
    if (bx == bbb) {
        
        if (bbb.textColor() == 'black') {
            bbb.textColor('Aqua');
            return;
        }
        
        else if (bbb.textColor() == 'Aqua') {
            bbb.textColor('black');
            return;
        }
        
    }
    
    if (bx == ccc) {
        
        if (ccc.textColor() == 'black') {
            ccc.textColor('DarkMagenta');
            return;
        }
        
        else if (ccc.textColor() == 'DarkMagenta') {
            ccc.textColor('black');
            return;
        }
        
    }
}


function introTimer () {
    
    if (intro1.isVisible()) {
        intro1.hide();
        introa.hide();
        intro2.show();
        introb.show();
        return;
    }
    
    else if (intro2.isVisible()) {
        intro2.hide();
        introb.hide();
        intro3.show();
        introc.show();
        return;
    }
    
    else if (intro3.isVisible()) {
        intro3.hide();
        introc.hide();
        intro4.show();
        introd.show();
        return;
    }
    
    
    else if (intro4.isVisible()) {
        intro4.hide();
        introd.hide();
        
        if (intro == 2000) {
            intro = 1500;
            introBox.clearTimer();
            intro1.show();
            introa.show();
            introBox.timer(introTimer, 1500);
            return;
        }
        
        else if (intro == 1500) {
            intro = 1000;
            introBox.clearTimer();
            intro1.show();
            introa.show();
            introBox.timer(introTimer, 1000);
            return;
        }
        
        else if (intro == 1000) {
            intro = 500;
            introBox.clearTimer();
            intro1.show();
            introa.show();
            introBox.timer(introTimer, 500);
            return;
        }
        
        else if (intro == 500) {
            intro = 250;
            introBox.clearTimer();
            intro1.show();
            introa.show();
            introBox.timer(introTimer, 250);
            return;
        }
        
        else if (intro == 250) {
            intro = 100;
            introBox.clearTimer();
            intro1.show();
            introa.show();
            introBox.timer(introTimer, 100);
            return;
        }
        
        else if (intro == 100) {
            intro = 50;
            introBox.clearTimer();
            intro1.show();
            introa.show();
            introBox.timer(introTimer, 50);
            return;
        }
        
        else if (intro == 50) {
            intro = 10;
            introBox.clearTimer();
            intro1.show();
            introa.show();
            introBox.timer(introTimer, 10);
            return;
        }
        
        else if (intro == 10) {
            timertimertimer();
        }
    
        
    }
    
}


function timertimertimer () {
    
    intro4.hide();
    introd.hide();
    intro5.fadeIn(3000);
    introe.fadeIn(3000);
    setTimeout(timer4, 4000);
    
}

function timer4 () {
    introBox.hide();
    firstBox.show();
    introBox.clearTimer();
}



































var test = [
    {
        image:'1.PNG',
        answer:15,
        q:[15, 45, 16, 46],//x
    },
    {
        image:'2.PNG',
        answer:5,
        q:[5, 3, 6, '없음']
    },
    {
        image:'3.PNG',
        answer:75,
        q:[75, 16, 76, '없음']
    },
    {
        image:'4.PNG',
        answer:8,
        q:[8, 5, 6, '없음']
    },
    {
        image:'5.PNG',
        answer:48,
        q:[48, 13, 43, '없음']
    },
    {
        image:'6.PNG',
        answer:7,
        q:[7, 1, 2, '없음']
    },
    {
        image:'7.PNG',
        answer:'없음',
        q:[5, 3, 6, '없음']
    },
    {
        image:'8.PNG',
        answer:66,
        q:[66, 88, 86, '없음']
    },
    {
        image:'r.PNG',
        answer:16,
        q:[16, '없음', 18, 26]
    },
    {
        image:'ㄴ.PNG',
        answer:5,
        q:[5, '없음', 6, 3]
    },
    {
        image:'ㄷ.PNG',
        answer:15,
        q:[15, 17, '없음', 16]
    },
    {
        image:'ㄹ.PNG',
        answer:6,
        q:[6, 5, '없음', 8]
    },
    {
        image:'ㅁ.PNG',
        answer:97,
        q:[97, '없음', 87, 91]
    },
    {
        image:'ㅂ.PNG',
        answer:8,
        q:[8, 3, '없음', 6]
    },
    {
        image:'ㅅ.PNG',
        answer:26,
        q:[26, 6, 2, '없음']
    },
    {
        image:'ㅇ.PNG',
        answer:74,
        q:[74, 21, '없음', 24]
    },
    {
        image:'9.PNG',
        answer:6,
        q:[6, '없음', 8, 9]
    },
    {
        image:'10.PNG',
        answer:73,
        q:[73, '없음', 72, 13]
    },
    {
        image:'12.PNG',
        answer:29,
        q:[29, '없음', 39, 28]
    },
    {
        image:'13.PNG',
        answer:15,
        q:[15, '없음', 16, 25]
    },
    
    {
        image:'ㅈ.bmp',
        answer:9,
        q:[9, 6, 8, 0]
    },
    
    {
        image:'ㅋ.bmp',
        answer:52,
        q:[52, 5, 2, 62]
    },
    
    {
        image:'ㅌ.bmp',
        answer:'없음',
        q:['없음', 5, 3, 2]
    }
    
    // {
    //     image:'.bmp',
    //     answer:,
    //     q:[, , , ]
    // }
];

// alert(test.length);
test.shuffle();

var check = [];//정답 오답 여부 배열
var nnn = 0;//문제 번호
var eye = 0;

var bgBox1 = box().appendTo(bgBox).size(400, 510).border(0).disableSelection().hide();//전체 상자
var startBox1 = box().appendTo(bgBox1).size('100%').border(0).color('#FAFFFF');//시작 화면 담는 박스
var testBox1 = box().appendTo(bgBox1).size('100%').border(0).hide();//테스트 화면 담는 박스
var endBox1 = box().appendTo(bgBox1).size('100%').border(0).hide();

box().appendTo(startBox1).size(30).image('home.png').moveRight(180).border(0).click(clickHome1);
box().appendTo(startBox1).size('100%', 'auto').text('색맹 검사', 50, 'MediumBlue').marginTop(0).border(0);//시작화면에 이름
var eyeBox1 = box().appendTo(startBox1).size('40%').image('눈2.png').marginTop(45).border(0).click(clickEye);//눈 사진
box().appendTo(startBox1).size('90%', 'auto').text('시작', 60).marginTop(30).border(0).click(startClick1);//시작 버튼


box().appendTo(testBox1).size('auto').text('보이는 숫자를 선택해 주세요', 20).border(0).marginTop(15);
var imgBox1 = box().appendTo(testBox1).size(300).border(2).marginTop(15);//검사 사진 박스
var nowBox1 = box().appendTo(testBox1).size('auto').textSize(20).border(0).block().margin('auto');//현재 진행 번호 담는 박스
var qBox1 = box().appendTo(testBox1).size('100%', 'auto').border(0).marginTop(5);//보기들 담는 박스
var qBox2 = box().appendTo(testBox1).size('100%', 'auto').border(0).marginTop(3);//보기들 담는 박스

var resultBox1 = box().appendTo(endBox1).size('80%', 'auto').textSize(25).marginTop(30).border(0);//결과
var resultBox2 = box().appendTo(endBox1).size('80%', 'auto').textSize(25).marginTop(0).border(0);//결과
var endBox22 = box().appendTo(endBox1).size('100%', 'auto').border(0);//결과 담기는 박스 clear를 해야 돼서 만듬
box().appendTo(endBox1).size('40%', 'auto').text('다시하기', 30).block().margin('auto').marginTop(30).border(3, 'black', 20)
.click(reStart1);//다시 시작하기 박스




function clickHome1 () {
    bgBox1.hide();
    bgBox2.hide();
    bgBox3.hide();
    startBox1.hide();
    startBox2.hide();
    startBox3.hide();
    testBox1.hide();
    testBox2.hide();
    testBox3.hide();
    endBox1.hide();
    endBox2.hide();
    endBox3.hide();
    firstBox.show();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
}

function startClick1 () { //시작 버튼 클릭 시 
    startBox1.hide();
    endBox1.hide();
    makeTest1();
    testBox1.show();
}

function clickEye () {
    
    if (eye == 0) {
        eyeBox1.image('눈1.jpg');
        eye = 1;
        return;
    }
    
    else if (eye == 1) {
        eyeBox1.image('눈2.png');
        eye = 0;
        return;
    }
}

function makeTest1 () {//문제 만들기 사진, 보기 나오게함

    if (nnn >= 10) {//끝나면 종료함수 호출
        finish1();
        return;
    } 
    
    var now1 = test[nnn];//현재 문제의 JSON 불러오기
    
    
    nowBox1.text(nnn+1  + '/' + 10);//현재 문제의 수 표시
    imgBox1.image(now1.image);//사진
    now1.q.shuffle();//보기 랜덤 섞기
    
    qBox1.clear();//보기 담는 박스 청소
    qBox2.clear();//보기 담는 박스 청소


    for (var i=0; i<2; i++) {
        box().appendTo(qBox1).size('40%', 'auto').text(now1.q[i], 30).padding('0 10').margin('5 15').click(okClick);//보기 2개 만들기
    }
    
    for (var i=2; i<4; i++) {
        box().appendTo(qBox2).size('40%', 'auto').text(now1.q[i], 30).padding('0 10').margin('5 15').click(okClick);//보기 2개 만들기
    }
      
}

function okClick (bx) {//ok 클릭시 다음
    
    if (test[nnn].answer == bx.text()) {
        check.push('O');//정답이면 O를 정답 배열에
    }
    
    else {
        check.push('X');//오답이면 정답배열에 X
    }
    
    nnn++;//다음거 
    makeTest1();//다른 문제 만들기

}

function finish1 () {//끜났을 때
    
    startBox1.hide();
    testBox1.hide();
    endBox1.show();
    checkResult();
    
    for(var i=0; i<5; i++) {//1~5
        box().appendTo(endBox22).size('17%', 'auto').text(i+1, 30).padding(3).border(2, 'black', 5).marginTop(30);
    }
    
    
    
    for(var i=0; i<5; i++) { //1~5 O,X
        
        if(check[i] == 'O') {//O
            box().appendTo(endBox22).size('17%', 'auto').text(check[i], 30, 'blue').padding(3).border(2, 'black', 5);
        }
        
        
        else {//X
            box().appendTo(endBox22).size('17%', 'auto').text(check[i], 30, 'red').padding(3).border(2, 'black', 5);
        }
    }
    
    
    
    for(var i=5; i<10; i++) {//6~10
        box().appendTo(endBox22).size('17%', 'auto').text(i+1, 30).padding(3).border(2, 'black', 5).marginTop(20);
    }
    
    
    
    for(var i=5; i<10; i++) {//6~10 O,X
        
        if(check[i] == 'O') {//o
            box().appendTo(endBox22).size('17%', 'auto').text(check[i], 30, 'blue').padding(3).border(2, 'black', 5);
        }
        
        
        else {//X
            box().appendTo(endBox22).size('17%', 'auto').text(check[i], 30, 'red').padding(3).border(2, 'black', 5);
        }     
    }
    
    
}


function checkResult () {
    
    var result = 0;
    
    for (var i=0; i<check.length; i++) {
        
        if (check[i] == 'O') {
            result++;
        }
        
        else  {
            
        }

    }
    
    if (result <=0) {
        resultBox1.text('다 틀렸어요...');
        resultBox2.text('일부러 그런건가요...')
    }
    
    else if (result>0 && result<=3) {
        resultBox1.text('당신은 심각한 색맹입니다.')
        resultBox2.text('그동안 어찌 사셨나요...')
    }
    
    else if (result>3 && result<5) {
        resultBox1.text('당신은 색맹입니다.');
        resultBox2.text('지금 당장 병원에 가보세요');
    }
    
    else if (result >=5 && result<10) {
        resultBox1.text('색맹이 약간 의심 됩니다.');
        resultBox2.text('증상이 계속되면 병원에 가보세요');
    }
    
    else if (result>=10) {
        resultBox1.text('축하합니다!');
        resultBox2.text('당신은 색맹이 아닙니다.');
    }
    
    else if (result > 10) {
        alert('오류가 감지되어 시작화면으로 돌아갑니다.');
        reStart1();
    }
}



function reStart1 () {//다시 시작하기 눌렀을 떼
    
    nnn = 0;//문제번호를 처음으로
    test.shuffle();//테스트 섞기
    endBox22.clear();//결과 지우기
    check = [];//정답 여부 배열 지우기
    endBox1.hide();//결과 박스 숨기기
    testBox1.hide();//테스트 박스 나타내기
    startBox1.show();
    
}










































var test2 = [
    
    {
        image:'2a.bmp',
        object:'양',
        answer: [58, 137, 35, 35]
    },
    
    {
        image:'3a.bmp',
        object:'곰',
        answer:[146, 259, 40, 70]
    },
    
    {
        image:'4a.PNG',
        object:'달걀',
        answer:[45, 278, 28, 30]
    },
    
    {
        image:'9a.bmp',
        object:'네잎클로버',
        answer:[300, 68, 25, 25]
    },
    
    {
        image:'10a.bmp',
        object:'판다',
        answer:[277, 215, 40, 40]
    },
    
    {
        image:'11a.PNG',
        object:'발레리나',
        answer:[51, 291, 40, 80]
    },
    
    {
        image:'13a.bmp',
        object:'강아지',
        answer:[218, 173, 55, 55]
    },
    
    {
        image:'14a.bmp',
        object:'강아지',
        answer:[236, 246, 43, 105]
    },
    
    {
        image:'15a.bmp',
        object:'판다',
        answer:[270, 136, 37, 80]
    },
    
    {
        image:'16a.PNG',
        object:'판다',
        answer:[149, 320, 45, 45]
    },
    
    {
        image:'18a.bmp',
        object:'판다',
        answer:[318, 198, 35, 50]
    },
    
    {
        image:'20a.bmp',
        object:'판다',
        answer:[315, 135, 25, 28]
    },
    
    {
        image:'21a.bmp',
        object:'화난 라이언',
        answer:[293, 258, 25, 75]
    },
    
    {
        image:'22a.bmp',
        object:'방귀 뀌는 어피치',
        answer:[341, 236, 30, 60]
    },
    
    {
        image:'25a.bmp',
        object:'무언가 다른 카카오 프렌즈',
        answer:[216, 270, 40, 70]
    },
    
    {
        image:'26a.PNG',
        object:['다르게 생긴 호랑이'],
        answer:[68, 363, 40, 50]
    },
    
    {
        image:'27a.PNG',
        object:['다르게 생긴 스파이더 맨'],
        answer:[261, 64, 45, 60]
    },
    
    {
        image:'28a.bmp',
        object:['K'],
        answer:[190, 186, 20, 20]
    },
    
    {
        image:'29a.bmp',
        object:['스페이드♠'],
        answer:[56, 241, 30, 30]
    },
    
    {
        image:'30a.bmp',
        object:['애플 로고'],
        answer:[170, 191, 40, 40]
    },
    
    {
        image:'32a.PNG',
        object:['왼손'],
        answer:[332, 233, 40, 40]
    },
    
    {
        image:'33a.bmp',
        object:['스폰지밥'],
        answer:[301, 121, 35, 35]
    },
    
    {
        image:'34a.PNG',
        object:['고양이'],
        answer:[293, 276, 50, 50]
    },
    
    {
        image:'35a.bmp',
        object:['다른 국기'],
        answer:[262, 227, 40, 40]
    },
    
    {
        image:'37a.bmp',
        object:['크기가 다른 다이아몬드'],
        answer:[109, 193, 30, 30]
    },
    
    {
        image:'38a.bmp',
        object:['다르게 생긴 펭귄'],
        answer:[276, 176, 40, 50]
    },
    
    {
        image:'39a.bmp',
        object:['판다'],
        answer:[33, 260, 45, 55]
    },
    
    {
        image:'42a.PNG',
        object:['피카츄'],
        answer:[282, 259, 30, 40]
    },
    
    {
        image:'43a.PNG',
        object:['회색점'],
        answer:[102, 301, 20, 20]
    },
    
    {
        image:'44a.bmp',
        object:['다른 것'],
        answer:[246, 287, 45, 45]
    },
    
    {
        image:'45a.bmp',
        object:['다른 것'],
        answer:[270, 152, 40, 40]
    }
    

    
    // {
    //     image:'.bmp',
    //     object:[''],
    //     answer:''
    // },
    
];


// alert(test.length);
test2.shuffle();

var aerr = [3, 5, 10, 15, 20, 25, 30]; //문제 개수 선택 항목

var howmany = 1; // 선택한문제개수
var eye2 = 0;

// var imgBox = box().append().size(windowWidth()-50).click(qwerqtqwet);
// var textBox = box().append().size('100%', '20%').textSize(20);
// var nnn = 0;

// function lasdjfl () {
//     var now = test[nnn];
//     imgBox.image(now.image);
//     textBox.text(now.object);
// }

// lasdjfl();

// function qwerqtqwet () {
//     nnn++;
//     lasdjfl();
// }



// for (var i=0; i<test.length; i++) {
//     box().append().size('25%').image(test[i].image);
//     box().append().size('auto').text(test[i].object);
// }
var bgBox2 = box().appendTo(bgBox).size(400, 510).border(0).disableSelection().hide();//전체 박스

var startBox2 = box().appendTo(bgBox2).size('100%').border(0).color('#FFFDFF').show();//시작화면 박스
var testBox2 = box().appendTo(bgBox2).size('100%').border(0).hide();//테스트 화면 담는 박스
var endBox2 = box().appendTo(bgBox2).size('100%').border(0).hide();//끝났을 때
var nnn2 = 0;//현재 진행 횟수
var ppp = 5;//목숨




box().appendTo(startBox2).size(30).image('home.png').moveRight(180).border(0).click(clickHome2);
box().appendTo(startBox2).size('100%', 'auto').text('관찰력 테스트', 40, 'DarkRed').border(0);//시작화면에 앱 이름
var eyeBox2 = box().appendTo(startBox2).size('37%').image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJFS_ALkXzi_Fw_Kl5LmQMnW5NQdFmr5RSvVICJretobsvnYQ')//시작화면 눈 사진
.marginTop(20).border(0).click(clickEye);//눈 사진

box().appendTo(startBox2).size('90%', 'auto').text('시작', 60).border(0).click(startClick2);//시작 버튼




box().appendTo(startBox2).size('90%', 'auto').text('문제 개수', 20).align('left').border(0).marginTop(10);//'문제 개수' 글자 박스 
var howBox = box().appendTo(startBox2).size('30%', 'auto').text(1, 30).align('left').padding('0 3 0 20').marginTop(15);//문재개수 나오는 박스 전체
var updownBox2 = box().appendTo(howBox).size('40%', '100%').float('right');//올리고 내리기 박스 담는 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-up').click(clickUp);// 숫자 올리기 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-down').click(clickDown);// 숫자 내리기 박스

var howmanyBox = box().appendTo(startBox2).size('50%', 'auto').border(0).marginTop(0);//문제 개수 선택 담는 박스
for (var y=0; y<aerr.length; y++) {
    box().appendTo(howmanyBox).size('20%', 'auto').text(aerr[y], 20, 'fireBrick').margin(5).click(clickhowmany);//문제 수 선택 항목
}










var hpBox2 = box().appendTo(testBox2).size('95%', '10%');//목숨담는 박스
var imgBox2 = box().appendTo(testBox2).size(350).border(2).marginTop(10).click(checkAnswer);//검사 사진 박스
box().appendTo(testBox2).size('80%', 'auto').text('찾아야 할것 :', 20).align('left').marginTop(14).border(0);//찾아야 할것 글자
var objectBox = box().appendTo(testBox2).size('70%', 'auto').textSize(20).align('left').marginTop(10).border(0);//찾아야 할것 알려주는 박
box().appendTo(testBox2).size('10%').image('back').marginTop(0).marginLeft(0).border(0).click(clickBack2);//관찰력 테스트 시작화면으로








var finishBox = box().appendTo(endBox2).size('90%', 'auto').textSize(35).border(0).marginTop(40);//끝났을 때 훌륭해요 or 다시해보세요

box().appendTo(endBox2).size(160, 200).image('광고!.PNG').margin('30 5 0 0');
box().appendTo(endBox2).size(160, 200).image('광고3.PNG').margin('30 0 0 5');

box().appendTo(endBox2).size('40%', 'auto').text('색맹 검사 해보기', 15, 'green').margin('3 5').border(0).click(loadabb1);
box().appendTo(endBox2).size('40%', 'auto').text('다른 색깔 찾기 하기', 15, 'orange').margin('3 5').border(0).click(loadabb3);

box().appendTo(endBox2).size('auto').text('홈으로', 25).padding(8).marginTop(40).padding('10 20').border(1, 'black', 15).click(clickend2);//끝화면에서 홈으로





function clickBack2 () {
    startBox2.show();
    testBox2.hide();
    endBox2.hide();
    nnn2 = 0;
    test2.shuffle();
    ppp = 5;
}


function onTimer2 () {//글자 깜박이게 하기
    
    if (paoerier.textColor() == 'red')
        paoerier.textColor('black');
    
    else {
        paoerier.textColor('red');
    }
    
}



function clickHome2 () {
    bgBox1.hide();
    bgBox2.hide();
    bgBox3.hide();
    startBox1.hide();
    startBox2.hide();
    startBox3.hide();
    testBox1.hide();
    testBox2.hide();
    testBox3.hide();
    endBox1.hide();
    endBox2.hide();
    endBox3.hide();
    firstBox.show();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
}



function startClick2 () {//시작 눌렀을 때

    
    if (howmany !=0) {//선택 했을 떄 진행
        test2.shuffle();
        nnn2 = 0
        startBox2.hide();
        testBox2.show();
        maketest2();
    }
    
    else {
        alert('문제 개수를 선택해 주세요');//선택 안 했으면 메세지
        return;
    }
}

function clickEye () {//눈 사진 클릭 했을 떄 (중요하지 않음
    
    if (eye2 == 0) {//눈이 뜨고 있을 때
        eyeBox2.image('https://media.istockphoto.com/vectors/false-simple-eyelash-vector-icon-black-eyelash-illustration-on-white-vector-id833711222');
        eye2 = 1;
        return;
    }
    
    else if (eye2 == 1) {//눈 이 감고 있을 때 
        eyeBox2.image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJFS_ALkXzi_Fw_Kl5LmQMnW5NQdFmr5RSvVICJretobsvnYQ');
        eye2 = 0;
        return;
    }
}

function clickhowmany (bx) {//문제 개수 눌렀을 때
    
    // var array = howmanyBox.children();

    // for(var i=0; i<array.length; i++) {//일단 색깔을 모두 하얗게 
    //     array[i].color('white');
    // }
    
    bx.blink('SpringGreen', 200);//그리고 선택한것 색깔 바꾸기
    howBox.text(bx.text());
    howmany = bx.text();//문제 개수 저장
}


function maketest2 () {//문제 만들기
    
    if (nnn2 >= howmany) {//선택한 문제 수 만큼 풀었으면 끝내기
        finish2();
    }
    
    if(findBox('answer')) {//이전 문제 정답박스 있으면 지우기
        findBox('answer').remove();
    }
    
    var now = test2[nnn2];//현재 문제의 JSON 불러오기
    imgBox2.image(now.image);//사진 띄우기
    objectBox.text(now.object);//찾아야 할것 띄우기
    makeAnswer();//정답 박스 만들기
    makeHP2();//목숨 만들기
}


function makeHP2 () {//목숨만들기
    hpBox2.clear();//일단 없애기
    
    if (ppp <= 0) {//목숨이 없으면 끝내기
        finish22();
    }
    
    for (var i=0; i<ppp; i++) {//목숨 만들기
        box().appendTo(hpBox2).size(40).image('/assets/599_하트.png').border(0).margin('0 10').marginTop(3);
    }
}


function makeAnswer () {//정답 만들기
    var now = test2[nnn2].answer;//현재 문제의 정답 배열
    
    var answerBox = box().appendTo(imgBox2).size(now[2], now[3]).moveTo(testBox2.left() + now[0] , testBox2.top() + now[1]).border(0).click(checkAnswer).id('answer');//정답 박스의 크기 위치 만들기
}


function checkAnswer (bx) {//정답이라 생각되는걸 눌렀을 때
    if (bx == imgBox2) {//잘못 누르면 목숨 깎기
        ppp -- ;
        makeHP2();
    }
    
    if (bx.id() == 'answer') {//맞는걸 눌렀을 때
        nnn2++;
        findBox('answer').border(3, 'red', 50).timerOnce(maketest2, 2000);//2초동안 정답을 보여주고 다음문제 만들기
    }
}

function finish2 () {//끝났을 때
    startBox2.hide();
    testBox2.hide();
    endBox2.show();
    finishBox.text('훌륭해요~~!');
}

function finish22 () {
    startBox2.hide();
    testBox2.hide();
    endBox2.show();
    finishBox.text('저런... 다시해보세요');
}

// function clickend1 () {
    
//     nnn = 0;
//     ppp = 5;
//     test.shuffle();
//     startBox.hide();
//     endBox.hide();
//     testBox.show();
//     maketest();
// }

function clickend2 () {//홈으로 눌렀을 때
    
    nnn = 0;
    ppp = 5;
    test2.shuffle();
    testBox2.hide();
    endBox2.hide();
    
    // var array = howmanyBox.children();

    // for(var i=0; i<array.length; i++) {
    //     array[i].color('white');
    // }
    howmany = 1;
    howBox.text(howmany);
    startBox2.show();
}

function clickUp (bx) {//올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    
    if (howmany == test.length) {//최대가 되면 return
        return;
    }
    
    howmany++;//개수 늘리기
    howBox.text(howmany);//늘린 개수를 글자로 보여주기
    howmany = howBox.text();
    
}

function clickDown (bx) {//내리기 눌렀을 때
    
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if (howmany <= 1) {// 0일때 내리기 누르면 return
        return;
    }
    
    howmany--;
    howBox.text(howmany);//늘린 개수를 글자로 보여주기
    howmany = howBox.text();
}



function loadabb1 () {//광고(색맹검사)
    bgBox1.show();
    bgBox2.hide();
    bgBox3.hide();
    startBox1.show();
    startBox2.hide();
    startBox3.hide();
    testBox1.hide();
    testBox2.hide();
    testBox3.hide();
    endBox1.hide();
    endBox2.hide();
    endBox3.hide();
    firstBox.hide();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
    min2 = min;
    sec2 = sec
    ppp = 5;
    hp = 5;
    nnn = 0;
    nnn2 = 0;
    test.shuffle();//테스트 섞기
    test2.shuffle();
    endBox22.clear();//결과 지우기
    check = [];//정답 여부 배열 지우기
}

function loadabb2 () {//광고(관찰력)
    bgBox1.hide();
    bgBox2.show();
    bgBox3.hide();
    startBox1.hide();
    startBox2.show();
    startBox3.hide();
    testBox1.hide();
    testBox2.hide();
    testBox3.hide();
    endBox1.hide();
    endBox2.hide();
    endBox3.hide();
    firstBox.hide();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
    min2 = min;
    sec2 = sec
    ppp = 5;
    hp = 5;
    nnn = 0;
    nnn2 = 0;
    test.shuffle();//테스트 섞기
    test2.shuffle();
    endBox22.clear();//결과 지우기
    check = [];//정답 여부 배열 지우기
}


function loadabb3 () { //광고(다른 색깔)
    bgBox1.hide();
    bgBox2.hide();
    bgBox3.show();
    startBox1.hide();
    startBox2.hide();
    startBox3.show();
    testBox1.hide();
    testBox2.hide();
    testBox3.hide();
    endBox1.hide();
    endBox2.hide();
    endBox3.hide();
    firstBox.hide();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
    min2 = min;
    sec2 = sec
    ppp = 5;
    hp = 5;
    nnn = 0;
    nnn2 = 0;
    test.shuffle();//테스트 섞기
    test2.shuffle();
    endBox22.clear();//결과 지우기
    check = [];//정답 여부 배열 지우기
}







































var colors = [['#FFA6FF', '#FFB2F5'], ['#FFB2F5', '#FFA6FF'], ['#997000', '#A57600'], ['#AA730A', '#997000'], ['#00D8FF', '#00D0F5'], 
              ['#00D0F5', '#00D8FF'], ['#A6A6A6', '#ADADAD'], ['#FFE400', '#FFDE05'], ['#FFDE05', '#FFE400'], ['#ABF200', '#B1F700'], 
              ['#B1F700', '#ABF200'], ['#5F00FF', '#4C00FF'], ['#4C00FF', '#5F00FF'], ['#FFE08C', '#FAE296'], ['#FAE296', '#FFE08C'],
              ['#D1B2FF', '#D3AAFF'], ['#D3AAFF', '#D1B2FF'], ['#980000', '#AA1414'], ['#AA1414', '#980000'], ['#E4F7BA', '#EBF7BA'],
              ['#EBF7BA', '#E4F7BA'], ['#D9E5FF', '#DEE5FF'], ['#DEE5FF', '#D9E5FF'], ['#212121', '#2D2D2D'], ['#2D2D2D', '#212121'], 
              ['#22741C', '#146414'], ['#146414', '#22741C'], ['#FAED7D', '#F5EB78'], ['#F5EB78', '#FAED7D']];
              
var harr = 3;//난이도 (harr × harr)
var min = 1;//분
var sec = 0;//초
var now;
var many = 0;

var min2;
var sec2;
//×
var hp = 5;

var bgBox3 = box().appendTo(bgBox).size(400, 510).border(0).disableSelection().hide();//전체 박쇼

var startBox3 = box().appendTo(bgBox3).size('100%').color('#F5FFF5').border(0).show();//시작화면 전체 박스 (제목, 시작 버튼, 난이도 선택, 시간 선택)
var testBox3 = box().appendTo(bgBox3).size('100%').border(0).hide();//게임 화면 전체 박스
var endBox3 = box().appendTo(bgBox3).size('100%').border(0).hide();//끝났을 때 전체 박스

box().appendTo(startBox3).size(30).image('home.png').moveRight(180).border(0).click(clickHome3);
box().appendTo(startBox3).size('100%', 'auto').text('다른 색깔 찾기', 35, 'SeaGreen').marginTop(0).border(0);//제목
box().appendTo(startBox3).size('90%', 80).image("arrow_forward").border(0).marginTop(30).click(start);//시작 버튼



box().appendTo(startBox3).size('90%', 'auto').text('난이도 선택', 20, 'black').border(0).marginTop(40);//난이도 선택 글씨

var hardBox = box().appendTo(startBox3).size('20%', 'auto').text('3×3', 20).margin(10).marginTop(14).padding('8 0').border(1, 'black');//난이도 글자 나오는 박스

var updownBox3 = box().appendTo(startBox3).size('10%', 'auto').margin(10).marginTop(15);//난이두 올리고 내리기 박스 담는 박스
box().appendTo(updownBox3).size('100%', '45%').icon('chevron-up').margin(0).click(clickUp1);// 난이도 올리기 박스
box().appendTo(updownBox3).size('100%', '45%').icon('chevron-down').margin(0).click(clickDown1);// 난이도 내리기 박스

var a = box().appendTo(startBox3).size('10%', 'auto').color('lightBlue').text('3×3', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(3).click(clickHard);//3×3
var b = box().appendTo(startBox3).size('10%', 'auto').text('5×5', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(5).click(clickHard);//5×5
var c = box().appendTo(startBox3).size('10%', 'auto').text('10×10', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(10).click(clickHard);//10×10
var d = box().appendTo(startBox3).size('10%', 'auto').text('15×15', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(15).click(clickHard);//15×15


box().appendTo(startBox3).size('90%', 'auto').text('시간 선택', 20, 'black').border(0).marginTop(20).marginBottom(10);//시간 선택 글자 박스


var minBox = box().appendTo(startBox3).size('15%', 'auto').text(1, 20).margin(1).marginTop(4).padding('8 0').border(1, 'black');//분 나오는 글자 박스
var updownBox2 = box().appendTo(startBox3).size('10%', 'auto').marginTop(5);//분 올리고 내리기 박스 담는 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-up').margin(0).click(clickUp2);// 부 올리기 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-down').margin(0).click(clickDown2);// 분 내리기 박스
box().appendTo(startBox3).size(30).text('분').textSize(30).marginTop(5).border(0).disableSelection().marginRight(15).marginLeft(10);//분 글자(필요×)


var secBox = box().appendTo(startBox3).size('15%', 'auto').text(0, 20).margin(1).marginLeft(15).marginTop(4).padding('8 0').border(1, 'black');//초 나오는 글자 박스
var updownBox2 = box().appendTo(startBox3).size('10%', 'auto').margin(0).marginTop(5);// 초 올리고 내리기 박스 담는 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-up').margin(0).click(clickUp3);// 초 올리기 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-down').margin(0).click(clickDown3);// 초 내리기 박스
box().appendTo(startBox3).size(30).text('초').textSize(30).marginTop(5).border(0).marginLeft(10);//초 글자(필요×)

var e = box().appendTo(startBox3).size('25%', 'auto').text('2분 30초', 20).margin(5).marginTop(10).click(clickTime);//2분 30초
var f = box().appendTo(startBox3).size('25%', 'auto').text('3분 30초', 20).margin(5).marginTop(10).click(clickTime);//3분 30초
var g = box().appendTo(startBox3).size('25%', 'auto').text('4분 30초', 20).margin(5).marginTop(10).click(clickTime);//4분 30초








var hpBox = box().appendTo(testBox3).size('58%', '10%');//목숨 담는 박스의
var timeBox = box().appendTo(testBox3).size('38%', '10%').textSize(34);//시간 나오는 박스
var imgBox3 = box().appendTo(testBox3).size(382).border(1).marginTop(10);//테스트 나오는 박스
box().appendTo(testBox3).size('auto').text('정답 개수:  ', 20).marginTop(15).border(0);//정답개수 글자
var manyBox = box().appendTo(testBox3).size('20%', 'auto').text(many + '개', 20).marginTop(15).marginRight(80).border(0);//정답 개수
box().appendTo(testBox3).size(40).image('back').marginRight(20).marginTop(15).border(0).click(restart3);
box().appendTo(testBox3).size('auto').text('pass', 20, 'blue').marginTop(15).border(1, 'black', 25).padding(5).click(pass);//pass







box().appendTo(endBox3).size('80%', 'auto').text('끝', 55).marginTop(20).border(0);
box().appendTo(endBox3).size('40%', 'auto').text('맞춘 개수:', 25).marginTop(20).border(0);
var resultBox = box().appendTo(endBox3).size('40%', 'auto').text(many + '개', 25).align('left').moveRight(30).marginTop(20).border(0);

box().appendTo(endBox3).size(160, 200).image('광고!.PNG').margin('20 5 0 0');
box().appendTo(endBox3).size(160, 200).image('광고2.PNG').margin('20 0 0 5');

box().appendTo(endBox3).size('40%', 'auto').text('색맹 검사 해보기', 15, 'green').margin('0 5').border(0).click(loadabb1);
box().appendTo(endBox3).size('40%', 'auto').text('관찰력 테스트 하기', 15, 'orange').margin('0 5').border(0).click(loadabb2);

box().appendTo(endBox3).size('auto').text('다시 하기', 30).marginTop(30).padding('5 10').moveRight(100).border(2, 'black', 25).click(restart3);



function clickHome3 () {
    bgBox1.hide();
    bgBox2.hide();
    bgBox3.hide();
    startBox1.hide();
    startBox2.hide();
    startBox3.hide();
    testBox1.hide();
    testBox2.hide();
    testBox3.hide();
    endBox1.hide();
    endBox2.hide();
    endBox3.hide();
    firstBox.show();
    abb1Box.hide();
    abb2Box.hide();
    abb3Box.hide();
}

function start () {//시작 눌렀을 때
    startBox3.hide();
    endBox3.hide();
    testBox3.show();
    timeBox.text('');
    timeBox.timer(onTimer3, 1000);
    min2 = min;
    sec2 = sec;
    hp = 5;
    many = 0;
    makeTest3();
}

function makeHP3 () {//목숨 만들기
    hpBox.clear();
    for (var i=0; i<hp; i++) {
        box().appendTo(hpBox).size(30).image('하트.png').margin('0 5').marginTop(8).border(0);
    }
}

function makeTest3 () {//문제 만들기

    imgBox3.clear();
    var answer = random(harr*harr);//랜덤으로 색깔 고르기
    var colo = random(colors.length);
    now = colors[colo];
    var Size = eval(380/harr);
    
    for(var i=0; i<harr*harr; i++) {//만들기
        
        if (i == answer) {//다른것
            box().appendTo(imgBox3).size(Size).color(now[1]).border(1, 'white').click(checkAnswer3);
        }
        
        else if (i != answer) {//나머지
            box().appendTo(imgBox3).size(Size).color(now[0]).border(1, 'white').click(checkAnswer3);
        }
    }
    makeHP3();
}


function checkAnswer3 (bx) {
    
    if (bx.color() == now[1]) {
        many++;
        manyBox.text(many + '개');
        makeTest3();
    }
    
    else if (bx.color() == now[0]) {
        hp--;
        if (hp<=0) {
            finish();
        }
        
        makeHP3();
    }
}



function onTimer3 () {//시간 가기
    
    if (sec2 <= 0) {//0초가 됐을 때
        
        if (min2 ==0) {//시간이 다 되면
            finish();
            return;
        }
        
        min2--;
        sec2 = 60;
    }
    
    
    sec2--;
    
    if (sec2 < 10) {
        timeBox.text(min2 + ':' + 0 + sec2);
    }
    
    else if (sec2 >=10) {
        timeBox.text(min2 + ':' + sec2);
    }
}

function pass (bx) {
    bx.blink('pink', 1000);
    makeTest3();
}

function finish () {//킅났을 때
    startBox3.hide();
    testBox3.hide();
    endBox3.show();
    resultBox.text(many + '개');
}


function restart3 () {
    timeBox.clearTimer();
    startBox3.show();
    testBox3.hide();
    endBox3.hide();
}


function clickUp1 (bx) {//난이도 올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    a.color('white');//일단 모두 색깔 하얗게
    b.color('white');
    c.color('white');
    d.color('white');
    
    if(harr >=15) {//20×20 초과하면 return
        return;
    }
    
    harr++;//난이도 올리기
    
    if (harr == 3) {//옆에 같은게 있으면 옆 박스 색깔 바꾸기
        a.color('lightBlue');
    }
    
    else if (harr == 5) {
        b.color('lightBlue');
    }
    
    else if (harr == 10) {
        c.color('lightBlue');
    }
    
    else if (harr == 15) {
        d.color('lightBlue');
    }
    
    hardBox.text(harr + '×' + harr);//글자 나타내기
}

function clickDown1 (bx) {//난이도 내리기 눌렀을 때
    
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if(harr <=3) {//3×3 미만이면 return
        return;
    }
    
    harr--;//난이도 내리기
    
    a.color('white');//일단 모두 하얗게
    b.color('white');
    c.color('white');
    d.color('white');
    
    if (harr == 3) {//겹치는 것 있으면 색깔 바꾸기
        a.color('lightBlue');
    }
    
    else if (harr == 5) {
        b.color('lightBlue');
    }
    
    else if (harr == 10) {
        c.color('lightBlue');
    }
    
    else if (harr == 15) {
        d.color('lightBlue');
    }
    
    hardBox.text(harr + '×' + harr);//글자로 나타내기
}

function clickHard (bx) {//옆에 난이도 선택했을 때
    a.color('white');//일단 모두 하얗게
    b.color('white');
    c.color('white');
    d.color('white');
    bx.color('lightBlue');//클릭 한 박스 색깔 바꾸기
    
    harr = bx.id();//난이도를 클릭한 박스의 id 로
    hardBox.text(harr + '×' + harr);//글자로 나타내기
}

function clickUp2 (bx) {//분 올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    
    if (min >= 5) {//5분 초과이면 return
        return;
    }
    
    min++;//분 올리기
    minBox.text(min);//글자로 나타내기
    
    e.color('white');//밑에 거 모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//만약 밑에랑 같은게 있으면 색깔 바꾸기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
    
}

function clickDown2 (bx) {//분 내리기 눌렀을 때
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if (min <= 1) {//1분 미만이면 return;
        return;
    }
    
    min--;//분 내리기
    minBox.text(min);//글자로 나타내기
    
    e.color('white');//모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//만약 밑에랑 겹치면 색깔 바꾸기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
}

function clickUp3 (bx) {//초 올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    
    if (sec >= 59) {//60초가 되면 0초로 바꾸기
        sec = -1;
    }
    
    sec++;//초 올리기
    secBox.text(sec);//글자로 나타내기
    
    e.color('white');//밑에거 모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//밑에랑 겹치는 게 있으면 색깔 바꿔주기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
}

function clickDown3 (bx) {//초 내리기 눌렀을 때
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if (sec <=0) {//0초가 되면 59초로 바꿔지게
        sec = 60;
    }
    
    sec--;//초 내리기
    secBox.text(sec);//글자로 나타내기
    
    e.color('white');//밑에거 모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//밑에랑 겹치면 색깔 바꿔주기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
}

function clickTime (bx) {//밑에 눌렀을때
    
    e.color('white');//모두 하얗게
    f.color('white');
    g.color('white');
    bx.color('PaleGreen');//선택한것 색깔 바꾸기
    
    if(bx.text() == '2분 30초') {//2분 30초 눌렀을때
        min = 2;
        sec = 30;
        minBox.text(min);
        secBox.text(sec);
    }
    
    else if(bx.text() == '3분 30초') {//3분 30초 눌렀을때
        min = 3;
        sec = 30;
        minBox.text(min);
        secBox.text(sec);
    }
    
    else if(bx.text() == '4분 30초') {//4분 30초 눌렀을때
        min = 4;
        sec = 30;
        minBox.text(min);
        secBox.text(sec);
    }
}