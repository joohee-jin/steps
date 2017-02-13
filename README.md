## 1. 소개
* **1.1 개발언어** : Node js
* **1.2 사용한 패키지** : Express, Ejs, Mongoose, Pm2,
* **1.3 데이터베이스** : MongoDB

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
