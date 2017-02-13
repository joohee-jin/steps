## 1. 소개
* **1.1 개발언어** : Node js
* **1.2 사용한 패키지** : Node, Mongo, Npm, Pm2 외 package.json 파일 참고
* **1.3 데이터베이스** : MongoDB
* **1.4 접근경로**
        step 2 >
        http://10.110.240.37:8081/step2 : output
        http://10.110.240.37:8081/users     : URL check
        step 4 >
        http://10.110.240.37:8081/festival  : output
        step 6 >
        10.110.241.148/festival : Web1 check
        10.110.243.28/festival  : Web2 check
        10.113.229.118/festival : LB check
        step 8 >
        10.113.229.118/festival/chart   : output

##2. 쉘 명령어
* **2.1 Build**
```
$ sh build.sh
```
*개발서버에서 빌드 명령어가 실행되면 git repository 기반으로 build폴더가 만들어지고 build안에는 웹 섭서버 구동을 위한 최소한의 파일들이 저장된다.*
								 
* **2.2 Test**
```
$ sh test.sh
```
*개발서버에서 테스트 명령어가 실행되면 빌드된 파일들을 웹에서 테스트 할 수 있도록 실행한다.*
					    
* **2.3 Deploy** 
```
$ sh deploy_steps.sh
*빌드와 테스트를 마친 build directory 를 서비스서버에 배포하고 웹 서버를 구동시킨다.*

##3.디렉토리 및 파일 설명
1. models
2. public
3. routes
4. shellscript
5. test
6. views
7. app.js
8. server.js
9. festival.csv
10. package.json
