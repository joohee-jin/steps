#!/usr/bin/env bash

ssh irteamsu@10.110.241.148 'rm -rf ~/deploy_steps'
ssh irteamsu@10.110.241.148 'sudo npm install pm2 -g'

echo "-------------------------------------------Deploy the directory, build"
echo "-------------------------------------------to Web Service Server 1"
rsync -av -e ssh ~/steps/build irteamsu@10.110.241.148:/home1/irteamsu
ssh irteamsu@10.110.241.148 'cd ~'
ssh irteamsu@10.110.241.148 'mv build deploy_steps'

echo "-------------------------------------------to Web Service Server 2"
rsync -av -e ssh ~/steps/build irteamsu@10.110.243.28:/home1/irteamsu
ssh irteamsu@10.110.243.28 'cd ~'
ssh irteamsu@10.110.243.28 'mv build deploy_steps'

echo "-------------------------------------------Restart Service Server"
ssh irteamsu@10.110.241.148 'sudo NODE_ENV=distribution pm2 restart server'
ssh irteamsu@10.110.243.28 'sudo NODE_ENV=distribution pm2 restart server'

echo "-------------------------------------------Deploy the data to DB Server"
rsync -av -e ssh ~/steps/festival.csv irteamsu@10.110.243.32:/home1/irteamsu
ssh irteamsu@10.110.243.32 'cd ~ '
ssh irteamsu@10.110.243.32 'pwd'
ssh irteamsu@10.110.243.32 'mongoimport --db test --collection festivals --type csv --headerline --file ./festival.csv --upsert --upsertFields=행사명,장소'
ssh irteamsu@10.110.243.32 'rm festival.csv'

#echo "-------------------------------------------delete the directory of build"
#rm -rf ~/steps/build
echo "-------------------------------------------End of Deploy"
