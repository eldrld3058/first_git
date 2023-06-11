const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.use(cookieParser()); 

app.get('/cookies',(req,res)=>{

   //res.setHeader('set-cookie','brand=kim');
   const today = new Date();
   today.setDate(today.getDate()+10);
   res.cookie('brand',{
     name: 'eldrld3058',
     id : 'eldrld3058',
     expires : today.toUTCString(),
     //HttpOnly,
     //Secure 
     authorized:true
     
   })
   res.sendFile(path.join(__dirname,'views','cookies.html'));
})
app.get('/delCookies',(req,res)=>{
res.clearCookie('brand');
res.redirect('/showCookies');
// front : location.href = '/showCookies'; 같은것
})
app.get('/showCookies',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
})

//윈도우 탐색기에서 .git 숨은 파일을 지우고 처음부터 다시
app.listen(PORT,()=>{
console.log('server starting', PORT);
})

//git init
//git add cookie-app.js
//git add
//git commit -m "자세한 설명"
//git log; 커밋 정보 확인
//local 내 컴퓨터에서만 형상관리
//git-hub, git-lab, git-butkit : remote computer
//폴더 : 브랜치, 리파지토리

//git push -u origin main
// git config --list : 환경설정 확인
// Esc > :qw 여러페이지 문서 편집기 빠져 나오기

//토큰 발급
//팝업창이 하나 뜨고 토큰을 입력하면 됨
//push 한 후 
