#!/usr/bin/env bash
ssh irteamsu@10.110.241.148 'cd ~'

ssh irteamsu@10.110.241.148 'rm -rf ~/deploy'
if [ "$?" -eq "0" ]
then
    ssh irteamsu@10.110.241.148 'sudo npm install pm2 -g'
    echo "-------------------------------------------send the directory build"
    rsync -av -e ssh ~/steps/build irteamsu@10.110.241.148:/home1/irteamsu

    echo "-------------------------------------------restart server"
    ssh irteamsu@10.110.241.148 'sudo NODE_ENV=distribution pm2 restart server'

    echo "-------------------------------------------send the data"
    rsync -av -e ssh ~/steps/festival.csv irteamsu@10.110.243.32:/home1/irteamsu
    ssh irteamsu@10.110.243.32 'cd ~'
    ssh irteamsu@10.110.243.32 'mongoimport --db test --collection festivals --type csv --headerline --file ./festival.csv'
    ssh irteamsu@10.110.243.32 'rm festival.csv'

    echo "-------------------------------------------end of deploy"

else
    echo "-------------------------------------------Error, confirm invalid address please"
fi

cd ~/steps
rm -rf build
echo "-------------------------------------------end of deploy"


#배포완료후 개발 컴의 build 디렉토리 꼭 삭제하기!