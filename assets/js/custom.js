'use strict'

// 解決 Vue Instance 完成編譯前顯示變數的問題
Vue.config.debug = true
Vue.config.devtools = true

// 引入語言包
Vue.use(VueI18n)

var messages = {
  tw: {
    // 首頁
    inner: {
      h1: '配音員李文瀚的聲創／教學世界',
      p: '希望作品能影響人，並帶來正面、積極意義與盼望的一個人。',
      copyright: '網站版權 © 2020 配音員李文瀚的聲創／教學世界',
    },
    navs: {
      item1: '簡介',
      link1: '#about',
      item2: '資歷',
      link2: '#resume',
      item3: '作品',
      link3: '#work',
      item4: '留言',
      link4: '#message',
      item5: '聯絡',
      link5: '#contact',
    },
    // 簡介
    about: {
      p1:
        '文瀚大學唸的是大傳（主修電子、公關）與戲劇（主修編劇、導演）。曾是兢兢業業小記者，也曾是爆肝攝影記者；曾演過舞台劇，也曾嘗試不是人幹的導演；曾是電台DJ主播，也曾玩配音、玩到全國第三；曾是全校主播大賽雙料冠軍，也曾獲選全國大專優秀青年；喜愛影像與聲音創作，攝影與廣播類，也都曾全國前三。',
      p2:
        '活到現在，許多戲劇性的曾經、成為文瀚人生的養分，大體言之，文瀚只是汲汲營營於生活、且平凡不過的庸俗人，不過熱情與態度，可能是文瀚與一般人、還稍稍有些不同的地方。',
      small: '了解更多',
      a: '文瀚的台灣配音維基',
      blockquote: '將一切榮耀，歸給主。',
    },
    // 資歷
    resume: {
      resume1: '學業資歷',
      resume2: '得獎資歷',
      resume3: '主持資歷',
      resume4: '演出資歷',
      resume5: '教學資歷',
      resume6: '演講／受訪資歷',
      resume7: '配音資歷',
    },
    // 資歷 類別
    resume2list: {
      list1: '播音類',
      list2: '攝影類',
      list3: '企劃類',
    },
    // 學業資歷
    resume1: {
      li1:
        '台北廣告工程商業同業公會92（2004／06／19）、93（2005／05／28）、94（2006／05／27）、95（2007／06／08）學年度會員子女獎學金。',
      li2: '96年度救國團全國大專優秀青年獎學金（2007／03／28）。',
      li3:
        '私立中國文化大學95學年度「張其昀先生紀念獎學金─特殊才藝傑出表現」（95學年度第二學期）。',
      li4: '國泰金融集團2007客戶子女獎學金（2007／06）。',
    },
    // 得獎資歷
    resume2: {
      li1: '96學年度救國團全國大專優秀青年（2007／03／28）。',
      // 播音類
      li2:
        '國立交通大學數位創意中心「尋找校園聲優達人」競賽─聲優銅賞獎（2005／11／25）。',
      li3:
        '第二屆台灣大專院校「貳零紀念」影音聯展─廣播作品類貳獎（2006／04／30）。',
      li4: '第四屆華岡電視新聞台主播大賽─第一名（2006／05／15）。',
      li5: '第九屆華岡電台主播大賽─國語組第一名（2006／05／19）。',
      li6:
        '第十五屆時報廣告金犢獎─廣播廣告類入圍×1＆技術類文案對白項初審評審團優選獎×1（2006／05）。',
      li7: '第一屆「TVBS大學新聞獎」─紀錄報導類入圍×1（2006／11／12）。',
      li8: '第四屆國立中正大學「新傳獎」─最佳外校廣播獎（2007／04／26）。',
      li9:
        '第三屆台灣大專院校「貳零紀念」影音聯展─廣播作品類廣播廣告入圍×1（2007／04／28）。',
      // 攝影類
      li10: '「2003文化大學攝影比賽」─傳統組第二名＆入選×3（2003／12／25）。',
      li11:
        '救國團台北市工青二隊北青攝影聯誼會「象山少女人像」攝影比賽二月份觀摩月賽─入選×4（2004／03／10）。',
      li12:
        '第二屆台灣大專院校「貳零紀念」影音聯展─數位攝影類（單張作品）參獎＆入圍×2（2006／04／30）。',
      li13:
        '第三屆「聚焦東吳─東吳的變與不變」攝影比賽─第一季季冠軍＆決賽銅牌獎＆佳作×2（2006／06）。',
      li14:
        '「2006國家地理國際攝影大賽」台灣區選拔賽─自然世界類佳作×1（2006／06）。',
      li15:
        '2006聯合勸募「同學你嘛幫幫忙─創意愛心 請你秀SHOW」徵案比賽─攝影類第三名（2006／08／17）。',
      li16:
        '第三屆台灣大專院校「貳零紀念」影音聯展─數位攝影類（單張作品）入圍×1（2007／04／28）。',
      // 企劃類
      li17:
        '私立中國文化大學94學年度「華岡要更好」校園創意大賽─活動企劃組優等獎（2005／12／20）。',
    },
    // 主持資歷
    resume3: {
      li1:
        '國立教育廣播電臺─單元節目「校園DJ SHOW─寰宇啟示錄」製作、主持（2005／05〜08）。',
      li2:
        '私立中國文化大學新聞系華岡實習廣播電台─單元節目「自在有樂町」製作、主持（94〜95學年度）。',
      li3: '私立中國文化大學新聞系華岡實習廣播電台─主播（95學年度第一學期）。',
      li4:
        'GOLD FM聯播網台北健康電台─節目部助理新聞編播（2009／05～2010／05）。',
      li5: '張樂「2012『愛，時光旅程』攝影展」發表會─主持（2012／02／10）。',
      li6:
        '「2014桐舟共渡─龍潭鄉歸鄉文化季」桃園縣縣長盃龍舟競賽─實況轉播（2014／05／31～06／02）。',
    },
    // 演出資歷
    resume4: {
      li1: '大可樂果劇團2004年度公演「長白山上」─飾獨眼龍（2004／12／14）。',
      li2:
        '第十七屆台北國際書展新天鵝堡（德國桌上遊戲）有限公司促銷戲《空中花園》、《亞美利哥》導演（2009／02／07）。',
    },
    // 教學資歷
    resume5: {
      li1:
        '國立臺灣科學教育館96年暑期「繪聲魔法─科學廣播營」助教（2007／08／06～08）。',
      li2:
        '偶像藝人呂金象之聲音訓練（2016／03／20～2017／03／20，2017／04／20～2018／04／20）。',
      li3:
        '社團法人中華影視造型文化創意協會106下半年度「播音訓練及活動主持實務班」之播音課座講師（2017／11／04）。',
      li4:
        '臺北市北投社區大學「播音、配音世界好好玩」課程講師（2018／09／01～2019／08／31）。',
      li5:
        '社團法人中華美容造型設計教育學會107上年度產業人才投資方案「婚禮＆活動主持訓練班─口語訓練課程」講師（2018／09／20）。',
      li6:
        '社團法人中華影視造型文化創意協會107下半年度「婚禮主持訓練班第2期」─口語訓練講師（2019／01／26）。',
      li7:
        '社團法人中華美容造型設計教育學會108下年度產業人才投資方案「婚顧＆活動主持訓練實務班」─口語訓練課程講師（2019／11／10）。',
      li8:
        '幸福故事館婚禮顧問公司婚禮主持進階班「第一堂課婚禮主持人的基本功─把話說好」之授課講師（2019／12／21）。',
    },
    // 演講／受訪資歷
    resume6: {
      li1:
        '私立淡江大學大傳系企業導師請益─「聲優的心事誰人知」（2013／10／09）。',
      li2:
        '私立輔仁大學影傳系、大傳系聲音訓練專題演講─「配音工作甘苦談─你不知道的職場潛規則」（2015／06／05）。',
      li3:
        '私立佛光大學傳播系大一課程「國語正音與口語表達」之學生專訪（2015／12／12）。',
      li4:
        'News 98電台現場節目「愛你22小時」（王文華主持）之受邀來賓（2015／12／14）。',
      li5:
        '私立淡江大學105年度教育部獎勵大學教學卓越計畫／綜合型大學排名專題演講─「配音兩三事」（2016／11／21）。',
    },
    // 配音資歷
    resume7: {
      li1:
        '目前主要配音範疇，含括廣告、簡介、節目／單元旁白、紀錄片、電視／電影預告、（兒童）有聲書、典禮報序、戲劇類…等。',
    },
    // 作品
    work: {
      group1: '商業廣告類',
      group2: '工商簡介類',
    },
    work1list: {
      work1: '活力促銷類',
      work2: '沈穩質感類',
      work3: '知性旁白類',
      work4: '專業肯定類',
      work5: '角色扮演類',
    },
    // 商業廣告類
    // 活力促銷類
    work1: {
      title1: '「派偉俊《我的時代》MV聯合首播預告」20秒C.F.',
      audio1:
        './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-「派偉俊《我的時代》MV聯合首播預告」20秒C.F..mp3',
      title2: '「夢工廠動畫特展」20秒C.F.─從草圖到銀幕',
      audio2:
        './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-「夢工廠動畫特展」20秒C.F.─從草圖到銀幕.mp3',
      title3: '「藥妝店希森立康開幕」15秒R.D.（男聲部分）',
      audio3:
        './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-「藥妝店希森立康開幕」15秒R.D.（男聲部分）.mp3',
      title4: '電影「屏息」15秒C.F.',
      audio4:
        './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-電影「屏息」15秒C.F..mp3',
    },
    // 沈穩質感類
    work2: {
      title1: '電影「惡之教典」15秒C.F.─普遍級版',
      audio1:
        './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-電影「惡之教典」15秒C.F.─普遍級版.mp3',
      title2: '2015「第29屆吳舜文新聞獎」入圍V.C.R.─中國大陸新聞報導獎',
      audio2:
        './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-2015「第29屆吳舜文新聞獎」入圍V.C.R.─中國大陸新聞報導獎.mp3',
      title3: '「Electrolux吸塵器」15秒C.F.（主述部分）',
      audio3:
        './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-「Electrolux吸塵器」15秒C.F.（主述部分）.mp3',
      title4: 'BMW Mission 3城市選拔賽',
      audio4:
        './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-BMW Mission 3城市選拔賽.mp3',
      title5: '「工研院：響應無車日綠色行動─地球感恩篇」30秒R.D.（男聲部分）',
      audio5:
        './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-「工研院：響應無車日綠色行動─地球感恩篇」30秒R.D.（男聲部分）.mp3',
    },
    // 知性旁白類
    work3: {
      title1: '「Discovery頻道節目『守護大自然』」30秒promo',
      audio1:
        './mp3/03/中文配音（台灣）-男-李文瀚demo-知性旁白類-「Discovery頻道節目『守護大自然』」30秒promo.mp3',
      title2: '「斯斯咳嗽膠囊」10秒C.F.─咳嗽篇',
      audio2:
        './mp3/03/中文配音（台灣）-男-李文瀚demo-知性旁白類-「斯斯咳嗽膠囊」10秒C.F.─咳嗽篇.mp3',
      title3:
        '華視綜藝節目「十點名人堂」單元「名人故事館」─蕭煌奇篇（旁白部分）',
      audio3:
        './mp3/03/中文配音（台灣）-男-李文瀚demo-知性旁白類-華視綜藝節目「十點名人堂」單元「名人故事館」─蕭煌奇篇（旁白部分）.mp3',
    },
    // 專業肯定類
    work4: {
      title1: 'Honda 30秒C.F.─預想篇',
      audio1:
        './mp3/04/中文配音（台灣）-男-李文瀚demo-專業肯定類-Honda 30秒C.F.─預想篇.mp3',
      title2: '「LAKING」20秒R.D.─玩褲篇',
      audio2:
        './mp3/04/中文配音（台灣）-男-李文瀚demo-專業肯定類-「LAKING」20秒R.D.─玩褲篇.mp3',
    },
    // 角色扮演類
    work5: {
      title1:
        '金管會：保險宣導片─天有不測風雲篇（動畫部分）（飾村長、阿明、阿華、村民A、村民B、村民C）',
      audio1:
        './mp3/05/中文配音（台灣）-男-李文瀚demo-角色扮演類-金管會：保險宣導片─天有不測風雲篇（動畫部分）（飾村長、阿明、阿華、村民A、村民B、村民C）.mp3',
      title2: '動畫「賽爾號戰神聯盟」（飾雷伊）',
      audio2:
        './mp3/05/中文配音（台灣）-男-李文瀚demo-角色扮演類-動畫「賽爾號戰神聯盟」（飾雷伊）.mp3',
      title3: '新北愛潔牙特殊需求者潔牙教學影片（飾牙齒男精靈）',
      audio3:
        './mp3/05/中文配音（台灣）-男-李文瀚demo-角色扮演類-新北愛潔牙特殊需求者潔牙教學影片（飾牙齒男精靈）.mp3',
    },
    // 工商簡介類
    group2: {
      title1: '「2013台灣福峰國際製酒─壹嘉緣版」簡介片',
      audio1:
        './mp3/06/中文配音（台灣）-男-李文瀚demo-沉穩質感類-「2013台灣福峰國際製酒─壹嘉緣版」簡介片.mp3',
    },
    // 聯絡
    contact: {
      p: '如果您有任何關於聲音領域的需求，歡迎與我聯絡、一起聊聊！',
      line: 'LINE：liwenhan.213',
      wechat: 'WeChat：liwenhan_213',
      phone: 'Cell Phone：',
      tel: '+886-922-145-947',
      mail: 'liwenhan.213＠gmail.com',
    },
    // 留言
    message: {
      name: '* 姓名',
      nameplaceholder: '請輸入姓名',
      tel: '* 手機',
      telplaceholder: '0912345678',
      email: '* E-mail',
      emailplaceholder: 'xx@xxx.com',
      message: '* 留言內容',
    },
  },
  cn: {
    // 首頁
    inner: {
      h1: '配音员李文瀚的声创／教学世界',
      p: '希望作品能影响人，并带来正面、积极意义与盼望的一个人。',
      copyright: '网站版权 © 2020 配音员李文瀚的声创／教学世界',
    },
    navs: {
      item1: '个人简介',
      link1: '#about',
      item2: '经历＆资历',
      link2: '#resume',
      item3: '优秀作品',
      link3: '#work',
      item4: '在线留言',
      link4: '#message',
      item5: '联系方式',
      link5: '#contact',
    },
    // 簡介
    about: {
      p1:
        '文瀚大学念的是大众传播专业（主修电子、公关）与戏剧专业（主修编剧、导演）。曾是兢兢业业小记者，也曾是爆肝摄影记者；曾演过舞台剧，也曾尝试不是人干的导演；曾是电台DJ主播，也曾在配音选拔赛，得到全国第三；曾是全校主播大赛双冠军，也曾获选全国大专优秀青年；喜爱影像与声音创作，摄影与广播类，也都曾全国前三。',
      p2:
        '活到现在，许多戏剧性的经历成为文瀚人生的养分，总体而言，文瀚只是汲汲营营于生活、且平凡不过的庸俗人，不过热情与态度，可能是文瀚与一般人，还稍稍有些不同的地方。',
      small: '了解更多',
      a: '“文瀚的台湾配音维基”网站',
      blockquote: '基督教名言：将一切荣耀，归给主。',
    },
    // 資歷
    resume: {
      resume1: '学业资历',
      resume2: '得奖资历',
      resume3: '主持资历',
      resume4: '演出资历',
      resume5: '教学资历',
      resume6: '演讲／受访资历',
      resume7: '配音资历',
    },
    // 資歷 類別
    resume2list: {
      list1: '播音类',
      list2: '摄影类',
      list3: '企划类',
    },
    // 學業資歷
    resume1: {
      li1:
        '台北广告工程商业同业公会2003年度（2004／06／19）、2004年度（2005／05／28）、2005年度（2006／05／27）、2006年度（2007／06／08）年度会员子女奖学金。',
      li2: '2007年度救国团全国大专优秀青年奖学金（2007／03／28）。',
      li3:
        '私立中国文化大学2006年度“张其昀先生纪念奖学金─特殊才艺杰出表现”（2006年度第二学期）。',
      li4: '国泰金融集团2007客户子女奖学金（2007／06）。',
    },
    // 得獎資歷
    resume2: {
      li1: '2007年度救国团全国大专优秀青年（2007／03／28）。',
      // 播音類
      li2:
        '国立交通大学数位创意中心“寻找校园声优达人”竞赛─声优铜奖（2005／11／25）。',
      li3:
        '第二届台湾大专院校“贰零纪念”影音联展─广播作品类贰奖（2006／04／30）。',
      li4: '第四届华冈电视新闻台主播大赛─第一名（2006／05／15）。',
      li5: '第九届华冈电台主播大赛─国语组第一名（2006／05／19）。',
      li6:
        '第十五届时报广告金犊奖─广播广告类入围×1＆技术类文案对白项初审评审团优秀奖×1（2006／05）。',
      li7: '第一届“TVBS大学新闻奖”─纪实报道类入围×1（2006／11／12）。',
      li8: '第四届国立中正大学“新传奖”─最佳外校广播奖（2007／04／26）。',
      li9:
        '第三届台湾大专院校“贰零纪念”影音联展─广播作品类广播广告入围×1（2007／04／28）。',
      // 攝影類
      li10: '“2003文化大学摄影比赛”─传统组第二名＆入选×3（2003／12／25）。',
      li11:
        '救国团台北市工青二队北青摄影联谊会“象山少女人像”摄影比赛二月份观摩月赛─入选×4（2004／03／10）。',
      li12:
        '第二届台湾大专院校“贰零纪念”影音联展─数位摄影类（单张作品）三等奖＆入围×2（2006／04／30）。',
      li13:
        '第三届“聚焦东吴─东吴的变与不变”摄影比赛─第一季季冠军＆决赛铜奖＆佳作×2（2006／06）。',
      li14:
        '“2006国家地理国际摄影大赛”台湾区选拔赛─自然世界类佳作×1（2006／06）。',
      li15:
        '2006联合劝募“同学你嘛帮帮忙─创意爱心 请你秀SHOW”征集比赛─摄影类第三名（2006／08／17）。',
      li16:
        '第三届台湾大专院校“贰零纪念”影音联展─数位摄影类（单张作品）入围×1（2007／04／28）。',
      // 企劃類
      li17:
        '私立中国文化大学2005年度“华冈要更好”校园创意大赛─活动企划组优等奖（2005／12／20）。',
    },
    // 主持資歷
    resume3: {
      li1:
        '国立教育广播电台─单元节目“校园DJ SHOW─寰宇启示录”制作、主持（2005／05〜08）。',
      li2:
        '私立中国文化大学新闻专业华冈实习广播电台─单元节目“自在有乐町”制作、主持（2005〜2006年度）。',
      li3:
        '私立中国文化大学新闻专业华冈实习广播电台─主播（2006年度第一学期）。',
      li4:
        'GOLD FM联播网台北健康电台─节目部助理新闻编播（2009／05～2010／05）。',
      li5: '张乐“2012‘爱，时光旅程’摄影展”发表会─主持（2012／02／10）。',
      li6:
        '2014桐舟共渡─龙潭乡归乡文化季”桃园县县长杯龙舟竞赛─实况转播（2014／05／31～06／02）。',
    },
    // 演出資歷
    resume4: {
      li1: '大可乐果剧团2004年度公演“长白山上”─饰独眼龙（2004／12／14）。',
      li2:
        '第十七届台北国际书展新天鹅堡（德国桌上游戏）有限公司促销戏《空中花园》、《亚美利哥》导演（2009／02／07）。',
    },
    // 教學資歷
    resume5: {
      li1:
        '国立台湾科学教育馆2007年暑期“绘声魔法─科学广播营”助教（2007／08／06～08）。',
      li2:
        '偶像艺人吕金象之声音训练老师（2016／03／20～2017／03／20，2017／04／20～2018／04／20）。',
      li3:
        '社团法人中华影视造型文化创意协会2017年下半年度“播音训练及活动主持实务班”之播音课座讲师（2017／11／04）。',
      li4:
        '台北市北投社区大学“播音、配音世界好好玩”课程讲师（2018／09／01～2019／08／31）。',
      li5:
        '社团法人中华美容造型设计教育学会2018年上年度产业人才投资方案“婚礼＆活动主持训练班─口语训练课程”讲师（2018／09／20）。',
      li6:
        '社团法人中华影视造型文化创意协会2018年下半年度“婚礼主持训练班第2期”─口语训练讲师（2019／01／26）。',
      li7:
        '社团法人中华美容造型设计教育学会2019年下年度产业人才投资方案“婚礼顾问＆活动主持训练实务班”─口语训练课程讲师（2019／11／10）。',
      li8:
        '幸福故事馆婚礼顾问公司婚礼主持进阶班“第一堂课婚礼主持人的基本功─把话说好”之授课讲师（2019／12／21）。',
    },
    // 演講／受訪資歷
    resume6: {
      li1:
        '私立淡江大学大众传播专业企业导师请益─“声优的心事谁人知”（2013／10／09）。',
      li2:
        '私立辅仁大学影像传播专业、大众传播专业声音训练专题演讲─“配音工作甘苦谈─你不知道的职场潜规则”（2015／06／05）。',
      li3:
        '私立佛光大学传播专业大一课程“国语正音与口语表达”之学生专访（2015／12／12）。',
      li4:
        'News 98电台现场节目“爱你22小时”（王文华主持）之受邀来宾（2015／12／14）。',
      li5:
        '私立淡江大学2016年度台湾教育部奖励大学教学卓越计划／综合型大学排名专题演讲─”配音两三事”（2016／11／21）。',
    },
    // 配音資歷
    resume7: {
      li1:
        '目前主要配音范畴，包括广告、简介、节目／单元旁白、纪录片、电视／电影预告、（儿童）有声书、典礼会序、戏剧类…等。',
    },
    // 作品
    work: {
      group1: '商业广告类',
      group2: '工商简介类',
    },
    work1list: {
      work1: '活力促销类',
      work2: '沉稳质感类',
      work3: '知性旁白类',
      work4: '专业肯定类',
      work5: '角色扮演类',
    },
    // 商業廣告類
    // 活力促銷類
    work1: {
      title1: '“派伟俊《我的时代》MV联合首播预告”20秒C.F.',
      audio1:
        './mp3/01/中文配音（台湾）-男-李文瀚demo-活力促销类-“派伟俊《我的时代》MV联合首播预告”20秒C.F..mp3',
      title2: '“梦工厂动画特展”20秒C.F.─从草图到银幕',
      audio2:
        './mp3/01/中文配音（台湾）-男-李文瀚demo-活力促销类-“梦工厂动画特展”20秒C.F.─从草图到银幕.mp3',
      title3: '“药妆店希森立康开幕”15秒R.D.（男声部分）',
      audio3:
        './mp3/01/中文配音（台湾）-男-李文瀚demo-活力促销类-“药妆店希森立康开幕”15秒R.D.（男声部分）.mp3',
      title4: '电影“屏息”15秒C.F.',
      audio4:
        './mp3/01/中文配音（台湾）-男-李文瀚demo-活力促销类-电影“屏息”15秒C.F..mp3',
    },
    // 沈穩質感類
    work2: {
      title1: '电影“恶之教典”15秒C.F.─普遍级版',
      audio1:
        './mp3/02/中文配音（台湾）-男-李文瀚demo-沉稳质感类-电影“恶之教典”15秒C.F.─普遍级版.mp3',
      title2: '2015“第29届吴舜文新闻奖”入围V.C.R.─中国大陆新闻报导奖',
      audio2:
        './mp3/02/中文配音（台湾）-男-李文瀚demo-沉稳质感类-2015“第29届吴舜文新闻奖”入围V.C.R.─中国大陆新闻报导奖.mp3',
      title3: '“Electrolux吸尘器”15秒C.F.（主述部分）',
      audio3:
        './mp3/02/中文配音（台湾）-男-李文瀚demo-沉稳质感类-“Electrolux吸尘器”15秒C.F.（主述部分）.mp3',
      title4: 'BMW Mission 3城市选拔赛',
      audio4:
        './mp3/02/中文配音（台湾）-男-李文瀚demo-沉稳质感类-BMW Mission 3城市选拔赛.mp3',
      title5: '“台湾工研院：响应无车日绿色行动─地球感恩篇”30秒R.D.（男声部分）',
      audio5:
        './mp3/02/中文配音（台湾）-男-李文瀚demo-沉稳质感类-“台湾工研院：响应无车日绿色行动─地球感恩篇”30秒R.D.（男声部分）.mp3',
    },
    // 知性旁白類
    work3: {
      title1: '“Discovery频道节目‘守护大自然’”30秒promo',
      audio1:
        './mp3/03/中文配音（台湾）-男-李文瀚demo-知性旁白类-“Discovery频道节目‘守护大自然’”30秒promo.mp3',
      title2: '“斯斯咳嗽胶囊”10秒C.F.─咳嗽篇',
      audio2:
        './mp3/03/中文配音（台湾）-男-李文瀚demo-知性旁白类-“斯斯咳嗽胶囊”10秒C.F.─咳嗽篇.mp3',
      title3: '华视综艺节目“十点名人堂”单元“名人故事馆”─萧煌奇篇（旁白部分）',
      audio3:
        './mp3/03/中文配音（台湾）-男-李文瀚demo-知性旁白类-华视综艺节目“十点名人堂”单元“名人故事馆”─萧煌奇篇（旁白部分）.mp3',
    },
    // 專業肯定類
    work4: {
      title1: 'Honda 30秒C.F.─预想篇',
      audio1:
        './mp3/04/中文配音（台湾）-男-李文瀚demo-专业肯定类-Honda 30秒C.F.─预想篇.mp3',
      title2: '“LAKING”20秒R.D.─玩裤篇',
      audio2:
        './mp3/04/中文配音（台湾）-男-李文瀚demo-专业肯定类-“LAKING”20秒R.D.─玩裤篇.mp3',
    },
    // 角色扮演類
    work5: {
      title1:
        '金管会：保险倡导片─天有不测风云篇（动画部分）（饰村长、阿明、阿华、村民A、村民B、村民C）',
      audio1:
        './mp3/05/中文配音（台湾）-男-李文瀚demo-角色扮演类-金管会：保险倡导片─天有不测风云篇（动画部分）（饰村长、阿明、阿华、村民A、村民B、村民C）.mp3',
      title2: '动画“赛尔号战神联盟”（饰雷伊）',
      audio2:
        './mp3/05/中文配音（台湾）-男-李文瀚demo-角色扮演类-动画“赛尔号战神联盟”（饰雷伊）.mp3',
      title3: '新北爱洁牙特殊需求者洁牙教学影片（饰牙齿男精灵）',
      audio3:
        './mp3/05/中文配音（台湾）-男-李文瀚demo-角色扮演类-新北爱洁牙特殊需求者洁牙教学影片（饰牙齿男精灵）.mp3',
    },
    // 工商簡介類
    group2: {
      title1: '“2013台湾福峰国际制酒─壹嘉缘版”简介片',
      audio1:
        './mp3/06/中文配音（台湾）-男-李文瀚demo-沉稳质感类-“2013台湾福峰国际制酒─壹嘉缘版”简介片.mp3',
    },
    // 聯絡
    contact: {
      p: '如果您有任何关于声音领域的需求，欢迎与我联络、一起聊聊！',
      line: 'LINE：liwenhan.213',
      wechat: '微信号：liwenhan_213',
      phone: '手机号码（台湾）：',
      tel: '+886-922-145-947',
      mail: 'liwenhan.213＠gmail.com',
    },
    // 留言
    message: {
      name: '* 姓名',
      nameplaceholder: '请输入姓名',
      tel: '* 手机',
      telplaceholder: '0912345678',
      email: '* E-mail',
      emailplaceholder: 'xx@xxx.com',
      message: '* 留言內容',
    },
  },
}

var i18n = new VueI18n({
  locale: 'tw',
  // fallbackLocale: 'tw',
  messages: messages,
})

var mv = new Vue({
  el: '#app',
  i18n: i18n, // 把i18n 掛載到vue上
  created: function created() {
    var vm = this
    this.$i18n.locale = 'tw' //Set the locale here
  },
  data: {
    form_name: {
      value: '',
      helper: '', //錯誤訊息文字
      sytle: '', //錯誤訊息樣式
      pass: false, //控制是否可以送出,
    },
    form_email: {
      value: '',
      helper: '',
      sytle: '',
      pass: false,
    },
    form_tel: {
      value: '',
      helper: '',
      sytle: '',
      pass: false,
    },
    form_message: {
      value: '',
      helper: '',
      sytle: '',
      pass: false,
    },
    language: '繁體中文',
    languageChange: true,
  },
  methods: {
    // 切換簡體
    changeTW: function changeTW() {
      var vm = this
      this.$i18n.locale = 'tw'
      this.language = '繁體中文'
    },
    // 切換繁體
    changeCN: function changeCN() {
      var vm = this
      this.$i18n.locale = 'cn'
      this.language = '简体中文'
    },
    // 表單驗證
    submitForm: function submitForm() {
      // 驗證姓名
      if (this.form_name.value.length <= 1) {
        alert('姓名欄位必填，至少2個字。')
        document.getElementById('name').focus()
        return false
      } else if (this.form_name.value === '王小明') {
        alert('姓名欄位不正確，請確認。')
        document.getElementById('name').focus()
        return false
      } else {
        this.form_name.helper = ''
        this.form_name.style = ''
        this.form_name.pass = true
      }

      // 驗證手機 手機輸入不足10碼
      if (this.form_tel.value <= 1) {
        alert('手機欄位必填。')
        document.getElementById('tel').focus()
        return false
      } else {
        this.form_tel.helper = ''
        this.form_tel.style = ''
        this.form_tel.pass = true
      }

      // 驗證email
      if (this.form_email.value <= 1) {
        alert('E-mail欄位必填。')
        document.getElementById('email').focus()
        return false
      } else {
        var _rex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        if (this.form_email.value.search(_rex) === -1) {
          alert('E-mail格式不正確，請確認。')
          this.form_email.style = 'wrong'
          document.getElementById('email').focus()
          return false
        } else {
          this.form_email.helper = ''
          this.form_email.style = ''
          this.form_email.pass = true
        }
      }

      // 驗證姓名
      if (this.form_message.value.length <= 9) {
        alert('留言內容欄位必填，至少10個字。')
        this.form_message.style = 'wrong'
        document.getElementById('message').focus()
        return false
      } else {
        this.form_message.helper = ''
        this.form_message.style = ''
        this.form_message.pass = true
      }

      // 送表單 每個欄位驗證為true後，送出表單
      if (
        this.form_name.pass &&
        this.form_tel.pass &&
        this.form_email.pass &&
        this.form_message.pass
      ) {
        // ajax data
        var _this = this // 指vue
        var settings = {
          data: {
            'entry.147171768': _this.form_name.value,
            'entry.1425847448': _this.form_tel.value,
            'entry.1672053199': _this.form_email.value,
            'entry.1693786573': _this.form_message.value,
          },
          type: 'POST',
          url:
            'https://docs.google.com/forms/d/e/1FAIpQLSdo5UIhhQ0r1hIWGp1wuACkG7wsKDTTz2aLykiWJCY7MGtgAg/formResponse',
          contentType: 'application/json',
          dataType: 'jsonp',
          complete: function complete() {
            alert('留言送出成功！我將盡快與您聯絡，感謝耐心等待。')
            success()
          },
          // 成功後呼叫 function
        }
        var success = function success() {
          _this.form_name.value = ''
          _this.form_tel.value = ''
          _this.form_email.value = ''
          _this.form_message.value = ''
        }

        // ajax post
        $.ajax(settings)
          .done(function (res) {
            // console.log('done 表單已送出')
          })
          .fail(function () {
            // console.log('fail 表單送出失敗')
          })
      }
    },
  },
  mounted: function mounted() {
    // 切換作品時控制 plaay 及 pause 原始寫法
    $(function () {
      var players = document.getElementsByTagName('audio')
      function allPause(players, ind) {
        for (var index = 0; index < players.length; index++) {
          var element = players[index]
          if (index !== ind) {
            element.pause()
          }
        }
      }
      var _loop = function _loop(index) {
        var element = players[index]
        element.onplay = function (e) {
          allPause(players, index)
        }
      }
      for (var index = 0; index < players.length; index++) {
        _loop(index)
      }
    })
  },
}).$mount('#app')
