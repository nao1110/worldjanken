// script.js

const countries = [
    {
      name: "フランス",
      landmark: "エッフェル塔（パリ）",
      fact: "フランスでは1日に平均2.5時間を食事に使うと言われています。",
      image: "img/france.jpg"
    },
    {
      name: "イタリア",
      landmark: "コロッセオ（ローマ）",
      fact: "ピザはナポリ発祥。本場では“マルゲリータ”が定番！",
      image: "img/italy.jpg"
    },
    {
      name: "スペイン",
      landmark: "サグラダ・ファミリア（バルセロナ）",
      fact: "お昼寝「シエスタ」はスペインの伝統的な習慣。",
      image: "img/spain.jpg"
    },
    {
      name: "モロッコ",
      landmark: "シャウエン（青の街）",
      fact: "青い街シャウエンは“世界一美しい青の街”と呼ばれている。",
      image: "img/morocco.jpg"
    },
    {
      name: "エジプト",
      landmark: "ギザのピラミッド",
      fact: "ピラミッドの中は意外と暑くない！？",
      image: "img/egypt.jpg"
    },
    {
      name: "インド",
      landmark: "タージ・マハル",
      fact: "インドでは右手で食べるのがマナー。左手はNG。",
      image: "img/india.jpg"
    },
    {
      name: "タイ",
      landmark: "ワット・アルン（バンコク）",
      fact: "あいさつは「サワディーカー／クラップ」。性別で語尾が違う。",
      image: "img/thailand.jpg"
    },
    {
      name: "ベトナム",
      landmark: "ハロン湾",
      fact: "バイクの数がものすごく多く、横断歩道がスリル満点！",
      image: "img/vietnam.jpg"
    },
    {
      name: "アメリカ",
      landmark: "自由の女神（ニューヨーク）",
      fact: "アメリカの国立公園は全部で63カ所もある！",
      image: "img/usa.jpg"
    },
    {
      name: "日本",
      landmark: "富士山",
      fact: "おかえりなさい！旅の学びを忘れずにまた出発しよう♪",
      image: "img/japan.jpg"
    }
  ];
  
  let currentIndex = 0;
  
  function play(userChoice) {
    const choices = ['グー', 'チョキ', 'パー'];
    const naokoChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result = '';
    if (userChoice === naokoChoice) {
      result = `あいこ！（Naokoも${naokoChoice}）`;
    } else if (
      (userChoice === 'グー' && naokoChoice === 'チョキ') ||
      (userChoice === 'チョキ' && naokoChoice === 'パー') ||
      (userChoice === 'パー' && naokoChoice === 'グー')
    ) {
      result = `あなたの勝ち！（Naokoは${naokoChoice}）`;
      if (currentIndex < countries.length - 1) {
        currentIndex++;
      }
    } else {
      result = `Naokoの勝ち！（Naokoは${naokoChoice}）`;
    }
  
    document.getElementById("result").textContent = result;
  
    const country = countries[currentIndex];
    document.getElementById("country-name").textContent = `🌍 現在の国：${country.name}`;
    document.getElementById("landmark").textContent = `🏛️ 観光地：${country.landmark}`;
    document.getElementById("fact").textContent = `📖 豆知識：${country.fact}`;
    document.getElementById("country-image").src = country.image;
    document.body.style.backgroundImage = `url(${country.image})`;
  }
  
  // 初期表示
  window.onload = () => {
    const country = countries[currentIndex];
    document.getElementById("country-name").textContent = `🌍 現在の国：${country.name}`;
    document.getElementById("landmark").textContent = `🏛️ 観光地：${country.landmark}`;
    document.getElementById("fact").textContent = `📖 豆知識：${country.fact}`;
    document.getElementById("country-image").src = country.image;
    document.body.style.backgroundImage = `url(${country.image})`;
  };
  