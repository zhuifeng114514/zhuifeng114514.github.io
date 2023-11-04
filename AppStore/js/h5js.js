var timeTstr='2020/07/24';
var dateT = [];
var banben = '3.1.9';
function parseTime(d) {
    const newDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
    return newDate;
}

function getNextDay(b, i) {
    //console.log(i);
    var timeT1 = new Date(timeTstr);
    var date1 = new Date(b);
    var date2 = new Date(parseTime(timeT1));
    dateT.push(Number(Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24))));/*不用考虑闰年否*/
    var day = new Date().getTime();
    var cha = day - (dateT[i] * (1000 * 60 * 60 * 24));
    var now = new Date(cha);
    var yy = now.getFullYear();
    var mm = now.getMonth() + 1;
    var dd = now.getDate();
    if(yy =='NaN'){
	arr[i].time = 2021 + '-' + 2 + '-' + 8;
    }else {
        arr[i].time = yy + '-' + mm + '-' + dd;
    }
    return arr[i].time;
}
var arr = [
    {p1: "沉默诠释一切へ",h21: "强推蝶变的课程，老师知识点讲解的很细致而且还可以倍速听哦",score:"5",time:"2020/7/24"},
    {p1: "深渊的那支花",h21: "蝶变可以查看报考咨询了，利用碎片化时间阅读，能掌握一点是一点",score:"4",time:"2020/7/24"},
    {p1: "窗边的小豆豆",h21: "这是一个可以学习和放松的平台，感谢蝶变为我提供记录学习的机会",score:"5",time:"2020/7/24"},
    {p1: "偷得浮生",h21: "天天打卡，自信心满满，未来还要和蝶变一起学习，一起进步哦",score:"5",time:"2020/7/24"},
    {p1: "大师兄",h21: "更新后的版本，增加了很多功能，很心水，我要一点点探索喽",score:"4",time:"2020/7/24"},
    {p1: "呃呃呃",h21: "蝶变的课程很优质，老师讲的很细，而且一堂课时间不长，随时随地想听就听",score:"4",time:"2020/7/24"},
    {p1: "二杰",h21: "超爱蝶变的课，我一般是课堂上听一遍，回家倍速听一遍，加强记忆哦",score:"5",time:"2020/7/24"},
    {p1: "长安望星河",h21: "学不进去时，全靠蝶变的课程了，听了就比不听强",score:"5",time:"2020/7/24"},
    {p1: "嗯.哆啦呀.",h21: "这里的资料真题真的很多，有用的我都打印钉在了一起，使用起来很方便",score:"5",time:"2020/7/24"},
    {p1: "多肉谷谷_",h21: "超爱专注学习这个功能，看着达成任务的时间，真的动力满满啊",score:"4",time:"2020/7/24"},
    {p1: "晨光",h21: "蝶变有了热搜榜单，每天刷一刷，掌握最新的高考实时热点",score:"5",time:"2020/7/24"},
    {p1: "Don't be cry",h21: "蝶变见证了我学习上的进步，现在高三，未来要和蝶变一起努力，做更好的自己",score:"4",time:"2020/7/24"},
    {p1: "咚咚",h21: "蝶变倒计时日历做的很精简，很好看，还有励志语录，每一天都有收获啊",score:"5",time:"2020/7/24"},
    {p1: "Dog thing",h21: "超爱蝶变的课程，一轮复习、二轮复习等标记的清清楚楚，学起来很有目标",score:"4",time:"2020/7/23"},
    {p1: "不想取名字了",h21: "感谢蝶变的陪伴，为我提供动力，支撑我整个高三学习生活",score:"5",time:"2020/7/23"},
    {p1: "叮当鸭",h21: "学累时，看看广场上的留言，瞬间信息倍增，感谢蝶变对我的推动",score:"4",time:"2020/7/23"},
    {p1: "-提拉米苏-",h21: "很好的学习软件，主要的是广告少，这一点很可",score:"5",time:"2020/7/23"},
    {p1: "大大雨",h21: "闺蜜推荐的，现在我俩都在使用，要一起进步，未来可期",score:"4",time:"2020/7/23"},
    {p1: "迪卡尔曲线",h21: "可以社交的学习软件，交流难题，彼此打气，真的很好",score:"5",time:"2020/7/23"},
    {p1: "等你很久了",h21: "听课、做题、看资料，应有尽有，蝶变真的是个宝藏软件",score:"5",time:"2020/7/23"},
    {p1: "茶禅一味",h21: "学累的时候，看看别人发的帖子，收获正能量，学习又有动力了",score:"5",time:"2020/7/23"},
    {p1: "等不见天亮等时光",h21: "自从使用了这个软件，养成了很多好习惯，未来一年我要继续努力，化茧成蝶",score:"5",time:"2020/7/23"},
    {p1: "超爱水果",h21: "打卡、学习、交流于一体，真的超喜欢这种适合高中生的万能软件，有了蝶变，别的我就都不用下载了",score:"5",time:"2020/7/23"},
    {p1: "道法自然",h21: "这个软件的学习资料和课程真的很多，很适合高三党学习，强推",score:"4",time:"2020/7/23"},
    {p1: "云纹梦纷蝶",h21: "除了课程，还可以查找真题，真的太棒了",score:"5",time:"2020/7/23"},
    {p1: "重新回去",h21: "蝶变的课程都是分科目展示的，查找观看起来很方便，很喜欢",score:"5",time:"2020/7/23"},
    {p1: "陈庄旺",h21: "推荐这个软件，我们可以在广场自由的表达学习上的想法，很赞",score:"5",time:"2020/7/23"},
    {p1: "陈小鱼",h21: "喜欢这个软件，喜欢用它来记录高三的学习生活",score:"4",time:"2020/7/23"},
    {p1: "晨曦若风",h21: "感谢蝶变的陪伴，感谢广场小伙伴的留言，让我更有学习的动力",score:"5",time:"2020/7/23"},
    {p1: "断桥会  伊人毁",h21: "真的是良心APP，看到很多人每天和自己一起打卡，陪伴的感觉太棒了，推荐给大家。",score:"5",time:"2020/7/23"},
    {p1: "沉潜刚克",h21: "我是蝶变的老用户了，这次更新之后，页面更美观了，期待有更多的功能。",score:"5",time:"2020/7/22"},
    {p1: "闪耀旳白梦",h21: "在这里找资料可太方便了，输入关键字，一下子就搜到了，搜资料还得是蝶变高考。",score:"4",time:"2020/7/22"},
    {p1: "橙七",h21: "真的特别好，在这里找到了很多志同道合的小伙伴，大家一起学习，感觉更有动力了呢。",score:"5",time:"2020/7/22"},
    {p1: "程程子",h21: "软件挺好用的啊，每一个功能都是我们高三党需要的，我身边的同学都在用。",score:"5",time:"2020/7/22"},
    {p1: "榇啊桭",h21: "挺好用的，感觉评分给低了，这么多的课程可以看，不香吗？",score:"5",time:"2020/7/22"},
    {p1: "超人不会飞",h21: "在这找到了最近几年的高考真题，很方便，最关键的没广告，这点我喜欢",score:"5",time:"2020/7/22"},
    {p1: "对方正在输入......",h21: "在线寻找每天一起打卡的小伙伴，互相监督啊",score:"5",time:"2020/7/22"},
    {p1: "长梦未央",h21: "必须五颗星，更新了版本之后还送了我VIP，我得好好利用这个机会",score:"5",time:"2020/7/22"},
    {p1: "长空",h21: "有人说用着用着就闪退了，那是你手机卡好不好？不要怪蝶变高考",score:"5",time:"2020/7/22"},
    {p1: "长歌",h21: "我觉得可以啊，十分良心。可以看老师的讲解视频，我主要是看数学的，哪节不会看哪节，so easy",score:"4",time:"2020/7/22"},
    {p1: "Change°",h21: "感谢所有老师的辛勤付出，每天打开直接看到高考的新消息，太方便了。",score:"5",time:"2020/7/22"},
    {p1: "长不高啦",h21: "某搜索引擎的广告实在太多了，半天找不到我想要的。幸好发现了蝶变高考，想要的资料一搜就搜到了",score:"5",time:"2020/7/22"},
    {p1: "哆啦A梦打过小怪兽i",h21: "蝶变电台已经成了我的睡前必听，有和我一起听的友友吗？",score:"4",time:"2020/7/22"},
    {p1: "茶茶",h21: "对比了几个学习类的APP，最终还是选择留下了蝶变高考，有跟我一样的吗？",score:"5",time:"2020/7/22"},
    {p1: "Casually",h21: "每天打卡，记录学习进度已成习惯，真的看到了自己的进步，我会继续加油的！",score:"5",time:"2020/7/22"},
    {p1: "carpe diem",h21: "一直在用蝶变的习题教辅，最近才发现这里可以下载真题试卷，感谢蝶变高考。",score:"4",time:"2020/7/22"},
    {p1: "草木大叔",h21: "哇哇哇，这个软件真是超级nice，里面有好多老师的课，而且讲的都非常棒。",score:"5",time:"2020/7/22"},
    {p1: "残阳似柔影ヽ",h21: "很好很好的一个学习软件，可以听课，可以下载资料，可以和小伙伴一起打卡，共同进步，棒棒棒！",score:"5",time:"2020/7/22"},
    {p1: "灿烂而热烈",h21: "五星好评哈这个软件对于高中生来说，特别实用，里面的老师也都很专业，顺便纠正了我的普通话。",score:"5",time:"2020/7/22"},
    {p1: "苍景流年",h21: "同学推荐的APP，他已经是会员了，我再用几天，可能也会办一个吧。",score:"5",time:"2020/7/22"},
    {p1: "不许人间见白头",h21: "备战2022年高考的朋友们可以放心下载这个APP，你会有收获的",score:"5",time:"2020/7/22"},
    {p1: "不太乖",h21: "很棒的平台，能学习也能社交，感谢在这里遇到的每一个人",score:"4",time:"2020/7/22"},
    {p1: "不进年级前五十不改名",h21: "找资料，找真题，能听课，真学习神器，不会像其他软件只想搜答案，这个很强调自觉学习，爱了爱了",score:"5",time:"2020/7/22"},
    {p1: "不期而遇",h21: "很好的软件，还没有广告，每天体验沉浸式学习，我喜欢",score:"5",time:"2020/7/21"},
    {p1: "不过六级不改名",h21: "真是个宝藏软件，很可惜没有早点下载",score:"5",time:"2020/7/21"},
    {p1: "不过九级不改名",h21: "支持下，还没有下载的赶紧下，最近好像有送免费会员的活动，我已经领到了",score:"4",time:"2020/7/21"},
    {p1: "不凡shy",h21: "赞一个，被室友强行拉新注册的，本来不以为然，最后的结果……我是会员了",score:"5",time:"2020/7/21"},
    {p1: "布丁布丁",h21: "我相信不止我一个被数学和物理困扰，这个APP真是帮了我大忙了，强烈推荐下载",score:"5",time:"2020/7/21"},
    {p1: "不爱吃胡萝卜的小白兔",h21: "刚上高一，感觉蝶变高考会在我的手机里待3年，功能真是太全面了",score:"5",time:"2020/7/21"},
    {p1: "待我发光亮瞎你",h21: "这个新版本真是太棒了，资料非常全，让我这种懒癌晚期的高三党看到了希望的曙光！",score:"5",time:"2020/7/21"},
    {p1: "波哥说的对i",h21: "查资料超级方便的软件，知识点真题答案都能很方便找到，针不戳",score:"4",time:"2020/7/21"},
    {p1: "bobo",h21: "这个软件怎么说呢，就是我需要对它进行一个评价，那在开始之前呢，我需要进行一个点评，关于蝶变高考好不好用这件事呢，仁者见仁智者见智，大多数人认为它是适合高中生的学习软件，好了今天的测评就到这里",score:"5",time:"2020/7/21"},
    {p1: "磁爆魔王特斯拉",h21: "直接五星拉满，课程很有用，学校跟不上回家直接查缺补漏。",score:"5",time:"2020/7/21"},
    {p1: "blingbling",h21: "这么神仙的软件我之前不知道，简直是一大损失！",score:"5",time:"2020/7/21"},
    {p1: "冰宝儿丶",h21: "之前历年真题我还去淘宝买，我真傻，真的，直接在这搜它不香么。",score:"5",time:"2020/7/21"},
    {p1: "别靠近我",h21: "这是一个好评通用模板，小仙女只有在软件用的开心的情况下，才会做出这个好评！！！",score:"5",time:"2020/7/20"},
    {p1: "别问，问就是在搞学习",h21: "课程不错资料全",score:"5",time:"2020/7/20"},
    {p1: "大耳朵图图",h21: "老师推荐下载的，用了一下真的不错，资料很全，知识点和真题都能搜到",score:"5",time:"2020/7/20"},
    {p1: "单骑救你",h21: "里面的新闻资讯真的对高中生帮助很大，我多了解到了好多种升学方式，现在开始就要准备了！",score:"5",time:"2020/7/20"},
    {p1: "崩呲崩呲",h21: "真的有用！超爱蝶变高考的电台，超治愈！！！",score:"4",time:"2020/7/20"},
    {p1: "被遗忘的时光",h21: "怎么说呢，是个不错的学习软件，但现在版面有点乱看起来眼花，资料好是好，但请注意一下你们软件内容的风格好的不啦",score:"5",time:"2020/7/20"},
    {p1: "北城以北",h21: "找了这么久，这个软件最适合高中生学习用",score:"5",time:"2020/7/20"},
    {p1: "池雨婉熙",h21: "高考倒计时和番茄时钟都超级喜欢，能督促我学习",score:"5",time:"2020/7/19"},
    {p1: "吃皮卡丘的汪酱.",h21: "最后我还是没忍住下回来了，改版之后界面没以前好看了，但是的确功能实用了不少，很有用",score:"5",time:"2020/7/19"},
    {p1: "八千里路",h21: "搜索功能很强大，基本需要的资料都能找到。",score:"5",time:"2020/7/19"},
    {p1: "_半颗星辰",h21: "我想问一下我可以不可以在上面发文章啊，就像百度文库似的，我也想分享一些我自己的学习方法",score:"4",time:"2020/7/19"},
    {p1: "半半小姐",h21: "一如既往的喜欢！从电台版本下载的，这是我用的第三年，谢谢你们！",score:"5",time:"2020/7/19"},
    {p1: "白衣少年",h21: "同学为了拿推荐奖励vip拉我下载的，但是说实话用起来真不错，资料很多还有励志电台，喜欢里面的小故事",score:"4",time:"2020/7/19"},
];
var starImg = 'img/fen1.png';
var leng = Math.ceil(arr.length / 5); // 页数
var sle = 1;

function getStarImg(score) {
    var starImgPath = "<img src=\"img/icon_star.png\">";
    var imgQty = 5;
    switch (score) {
        case "5":
            imgQty = 5;
            break;
        case "4":
            imgQty = 4;
            break;
        case "3":
            imgQty = 3;
            break;
        case "2":
            imgQty = 2;
            break;
        case "1":
            imgQty = 1;
            break;
        default:
            imgQty = 5;
            break;
    }
    for (var i = 1; i < imgQty; i++) {
        starImgPath += "<img src=\"img/icon_star.png\">";
    }
    return starImgPath;
}
for (var i = 0; i < arr.length; i++) {
    starImg = getStarImg(arr[i].score);
    if (i < 5) {
        if (arr[i].h21.length >= 63) {
            var may = [" <div class=\"zhen1a\">\n" +
                "                    <p>" + arr[i].p1 + "</p>\n" +
                "                    <h2>" + arr[i].h21 + "</h2>\n" +
                "                 <div onclick=\"unfold('zhen1a-'," + i + ")\" style='display: flex;' class=\"unfold\">\n" +
                "                     <img src=\"img/icon_more_red@2x.png\">\n" +
                "                     <span>查看全部</span>\n" +
                "                 </div>\n" +
                "                    <div class=\"banerb\">\n" +
                "                    <div class=\"five_x1\">\n" +
                starImg+
                "                    </div>\n" +
                "                        <div class=\"xianT\">\n" +
                "                            <div class=\"ben\">\n" +
                "                                版本：<i>" + banben + "</i>\n" +
                "                            </div>\n" +
                "                            <div class=\"ben\">\n" +
                "                                <span>" + getNextDay(arr[i].time, i) + " </span>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>"];
        } else {
            var may = [" <div class=\"zhen1a\">\n" +
                "                    <p>" + arr[i].p1 + "</p>\n" +
                "                    <h2>" + arr[i].h21 + "</h2>\n" +
                "                 <div onclick=\"unfold('zhen1a-'," + i + ")\" style='display: none;' class=\"unfold\">\n" +
                "                     <img src=\"img/icon_more_red@2x.png\">\n" +
                "                     <span>查看全部</span>\n" +
                "                 </div>\n" +
                "                    <div class=\"banerb\">\n" +
                "                    <div class=\"five_x1\">\n" +
                starImg +
                "                    </div>\n" +
                "                        <div class=\"xianT\">\n" +
                "                            <div class=\"ben\">\n" +
                "                                版本：<i>" + banben + "</i>\n" +
                "                            </div>\n" +
                "                            <div class=\"ben\">\n" +
                "                                <span>" + getNextDay(arr[i].time, i) + " </span>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>"];
        }
        $("#ping1").append(may);
    }
    if (arr.length > 5) {
        $("#pinmglTa").html("<img src=\"img/icon_more_black@2x.png\">查看更多");
    } else {
        $("#pinmglTa").html("我是有底线的");
        $('#pinmglTa').attr('id', 'myDivId_new');
    }
}

try {
    $("#pinmglTa").click(function () {
        sle++;
        if (leng < sle) { // 最后一页
            $("#pinmglTa").html("我是有底线的");
            $('#pinmglTa').attr('id', 'myDivId_new');
        } else {
            for (var i = sle * 5 - 5; i < sle * 5; i++) {
                starImg = getStarImg(arr[i].score);
                if (arr[i].h21.length >= 63) {
                    var may = [" <div class=\"zhen1a\">\n" +
                        "                    <p>" + arr[i].p1 + "</p>\n" +
                        "                    <h2>" + arr[i].h21 + "</h2>\n" +
                        "                 <div onclick=\"unfold('zhen1a-'," + i + ")\" style='display: flex;' class=\"unfold\">\n" +
                        "                     <img src=\"img/icon_more_red@2x.png\">\n" +
                        "                     <span>查看全部</span>\n" +
                        "                 </div>\n" +
                        "                    <div class=\"banerb\">\n" +
                        "                    <div class=\"five_x1\">\n" +
                        starImg +
                        "                    </div>\n" +
                        "                        <div class=\"xianT\">\n" +
                        "                            <div class=\"ben\">\n" +
                        "                                版本：<i>" + banben + "</i>\n" +
                        "                            </div>\n" +
                        "                            <div class=\"ben\">\n" +
                        "                                <span>" + getNextDay(arr[i].time, i) + " </span>\n" +
                        "                            </div>\n" +
                        "                        </div>\n" +
                        "                    </div>\n" +
                        "                </div>"];
                } else {
                    var may = [" <div class=\"zhen1a\">\n" +
                        "                    <p>" + arr[i].p1 + "</p>\n" +
                        "                    <h2>" + arr[i].h21 + "</h2>\n" +
                        "                 <div onclick=\"unfold('zhen1a-'," + i + ")\" style='display: none;' class=\"unfold\">\n" +
                        "                     <img src=\"img/icon_more_red@2x.png\">\n" +
                        "                     <span>查看全部</span>\n" +
                        "                 </div>\n" +
                        "                    <div class=\"banerb\">\n" +
                        "                    <div class=\"five_x1\">\n" +
                        starImg +
                        "                    </div>\n" +
                        "                        <div class=\"xianT\">\n" +
                        "                            <div class=\"ben\">\n" +
                        "                                版本：<i>" + banben + "</i>\n" +
                        "                            </div>\n" +
                        "                            <div class=\"ben\">\n" +
                        "                                <span>" + getNextDay(arr[i].time, i) + " </span>\n" +
                        "                            </div>\n" +
                        "                        </div>\n" +
                        "                    </div>\n" +
                        "                </div>"];

                }
                $("#ping1").append(may);
            }
            $("#pinmglTa").html("<img src=\"img/icon_more_black@2x.png\">查看更多");
        }
    });
} catch (e) {

}

try {
    function unfold(Dom, index) {
        var l = Dom + index;
        var Do = event.target;
        Do.parentNode.remove();
        $("#" + l + "").css({ "display": "flex" });
    }
} catch (e) {
    console.log(e);
}

var params = getQueryObject();
if(params.cid) {
    _initClipboardText();
    $(".xiazai,.introduce").on("click", function() {
        var clipboard = new ClipboardJS('.xiazai,.introduce');
        clipboard.on('success', function(e) {});
        clipboard.on('error', function(e) {});
    })
}
function _initClipboardText(){
    // #db={"a":"CCED1AM4n7KB"}&&a=1#
    var clipboardText = "";
    clipboardText += "#db=" + JSON.stringify({ a: params.cid }) + "&&a=1#";
    $(".xiazai").attr("data-clipboard-text", clipboardText)
    $(".introduce").attr("data-clipboard-text", clipboardText)
}
// url转object
function getQueryObject(url) {
    url = url || window.location.href;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function(rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}
