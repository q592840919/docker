echo "uploading to pre: root@47.95.215.144";
v_time=`date "+%Y-%m-%d %H:%M:%S"`;
echo $v_time
git status
git add -A
git commit -m "$v_time"
git push origin master