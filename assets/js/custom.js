'use strict'

var mv = new Vue({
  el: '#app',
  data: {
    form_name: {
      value: '',
      helper: '', //錯誤訊息文字
      sytle: '', //錯誤訊息樣式
      pass: false //控制是否可以送出,
    },
    form_email: {
      value: '',
      helper: '',
      sytle: '',
      pass: false
    },
    form_tel: {
      value: '',
      helper: '',
      sytle: '',
      pass: false
    },
    form_message: {
      value: '',
      helper: '',
      sytle: '',
      pass: false
    },
    inner: {
      h1: {
        tw: '配音員李文瀚的聲創／教學世界',
        cn: '配音员李文瀚的声创／教学世界'
      },
      p: {
        tw: '希望作品能影響人，並帶來正面、積極意義與盼望的一個人。',
        cn: '希望作品能影响人，并带来正面、积极意义与盼望的一个人。'
      }
    },
    navs: [
      { item: '簡介', link: '#about' },
      { item: '資歷', link: '#resume' },
      { item: '作品', link: '#work' },
      { item: '留言', link: '#message' },
      { item: '聯絡', link: '#contact' }
    ],
    audios1: [
      {
        title: '「派偉俊《我的時代》MV聯合首播預告」20秒C.F.',
        mp3:
          './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-「派偉俊《我的時代》MV聯合首播預告」20秒C.F..mp3'
      },
      {
        title: '「夢工廠動畫特展」20秒C.F.─從草圖到銀幕',
        mp3:
          './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-「夢工廠動畫特展」20秒C.F.─從草圖到銀幕.mp3'
      },
      {
        title: '「藥妝店希森立康開幕」15秒R.D.（男聲部分）',
        mp3:
          './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-「藥妝店希森立康開幕」15秒R.D.（男聲部分）.mp3'
      },
      {
        title: '電影「屏息」15秒C.F.',
        mp3:
          './mp3/01/中文配音（台灣）-男-李文瀚demo-活力促銷類-電影「屏息」15秒C.F..mp3'
      }
    ],
    audios2: [
      {
        title: '電影「惡之教典」15秒C.F.─普遍級版',
        mp3:
          './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-電影「惡之教典」15秒C.F.─普遍級版.mp3'
      },
      {
        title: '2015「第29屆吳舜文新聞獎」入圍V.C.R.─中國大陸新聞報導獎',
        mp3:
          './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-2015「第29屆吳舜文新聞獎」入圍V.C.R.─中國大陸新聞報導獎.mp3'
      },
      {
        title: '「Electrolux吸塵器」15秒C.F.（主述部分）',
        mp3:
          './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-「Electrolux吸塵器」15秒C.F.（主述部分）.mp3'
      },
      {
        title: 'BMW Mission 3城市選拔賽',
        mp3:
          './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-BMW Mission 3城市選拔賽.mp3'
      },
      {
        title: '「工研院：響應無車日綠色行動─地球感恩篇」30秒R.D.（男聲部分）',
        mp3:
          './mp3/02/中文配音（台灣）-男-李文瀚demo-沉穩質感類-「工研院：響應無車日綠色行動─地球感恩篇」30秒R.D.（男聲部分）.mp3'
      }
    ],
    audios3: [
      {
        title: '「Discovery頻道節目『守護大自然』」30秒promo',
        mp3:
          './mp3/03/中文配音（台灣）-男-李文瀚demo-知性旁白類-「Discovery頻道節目『守護大自然』」30秒promo.mp3'
      },
      {
        title: '「斯斯咳嗽膠囊」10秒C.F.─咳嗽篇',
        mp3:
          './mp3/03/中文配音（台灣）-男-李文瀚demo-知性旁白類-「斯斯咳嗽膠囊」10秒C.F.─咳嗽篇.mp3'
      },
      {
        title:
          '華視綜藝節目「十點名人堂」單元「名人故事館」─蕭煌奇篇（旁白部分）',
        mp3:
          './mp3/03/中文配音（台灣）-男-李文瀚demo-知性旁白類-華視綜藝節目「十點名人堂」單元「名人故事館」─蕭煌奇篇（旁白部分）.mp3'
      }
    ],
    audios4: [
      {
        title: 'Honda 30秒C.F.─預想篇',
        mp3:
          './mp3/04/中文配音（台灣）-男-李文瀚demo-專業肯定類-Honda 30秒C.F.─預想篇.mp3'
      },
      {
        title: '「LAKING」20秒R.D.─玩褲篇',
        mp3:
          './mp3/04/中文配音（台灣）-男-李文瀚demo-專業肯定類-「LAKING」20秒R.D.─玩褲篇.mp3'
      }
    ],
    audios5: [
      {
        title:
          '金管會：保險宣導片─天有不測風雲篇（動畫部分）（飾村長、阿明、阿華、村民A、村民B、村民C）',
        mp3:
          './mp3/05/中文配音（台灣）-男-李文瀚demo-角色扮演類-金管會：保險宣導片─天有不測風雲篇（動畫部分）（飾村長、阿明、阿華、村民A、村民B、村民C）.mp3'
      },
      {
        title: '新北愛潔牙特殊需求者潔牙教學影片（飾牙齒男精靈）',
        mp3:
          './mp3/05/中文配音（台灣）-男-李文瀚demo-角色扮演類-新北愛潔牙特殊需求者潔牙教學影片（飾牙齒男精靈）.mp3'
      }
    ],
    audios6: [
      {
        title: '「2013台灣福峰國際製酒─壹嘉緣版」簡介片',
        mp3:
          './mp3/06/中文配音（台灣）-男-李文瀚demo-沉穩質感類-「2013台灣福峰國際製酒─壹嘉緣版」簡介片.mp3'
      }
    ]
  },
  methods: {
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
            'entry.1693786573': _this.form_message.value
          },
          type: 'POST',
          url:
            'https://docs.google.com/forms/d/e/1FAIpQLSdo5UIhhQ0r1hIWGp1wuACkG7wsKDTTz2aLykiWJCY7MGtgAg/formResponse',
          contentType: 'application/json',
          dataType: 'jsonp',
          complete: function complete() {
            alert('留言送出成功！我將盡快與您聯絡，感謝耐心等待。')
            success()
          }
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
          .done(function(res) {
            // console.log('done 表單已送出')
          })
          .fail(function() {
            // console.log('fail 表單送出失敗')
          })
      }
    }
  },
  mounted: function mounted() {
    $(function() {
      // 控制 plaay 及 pause
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
        element.onplay = function(e) {
          allPause(players, index)
        }
      }

      for (var index = 0; index < players.length; index++) {
        _loop(index)
      }
    })
  }
})
