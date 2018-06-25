echo "push this change";
v_time=`date "+%Y-%m-%d %H:%M:%S"`;
echo $v_time
git status
git add -A
git commit -m "$v_time"
git push origin master
echo "success push git!"
if ${1:-false}
then
echo "success push!"
ssh root@47.95.215.144 "sh /shells/happygo/happygo-server.sh"
fi