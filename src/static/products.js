const products = [
  {
    category: '電子音樂',
    content: '這是內容',
    description:
      '曾為《黑天鵝》、《全面啟動》等電影、電視劇製作配樂的知名作曲家Matt Dunkley，2016年發行了個人首張專輯，與出名的 Babelsberg 管絃樂隊合作錄製，一同創造豐富、如詩如畫且如電影般的壯闊奇樂。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1533387253.jpg',
    is_enabled: 1,
    num: 10,
    origin_price: 2000,
    price: 600,
    title: '《Six Cycles》',
    unit: '張'
  },
  {
    category: '電子音樂',
    content: '這是內容',
    description:
      '暨《Six Cycles》後Matt Dunkley的第二張個人專輯，延續前一張專輯，繼續和Babelsberg 管絃樂隊合作錄製。Matt Dunkley透過他的編曲和構成，去濃縮樂曲中巨量且多樣的情緒。收錄的11首曲目中，有安寧、荒涼和恐慌等情緒，而兩年間的巡迴旅行，不同的城市也帶給他不同的靈感。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1533903223.jpeg',
    is_enabled: 1,
    num: 10,
    origin_price: 30000,
    price: 600,
    title: '《Cycles 7-16》',
    unit: '張'
  },
  {
    category: '電子音樂',
    content: '這是內容',
    description:
      'Thomas William Hill是一名英國作曲家和錄音師，曾為許多影視作品創作配樂。《Asylum For Eve》源自粒線體夏娃(Mitochondrial Eve)的理論，以多層次的聲音質感連接起來的悲傷的鋼琴聲響和輕快的室內樂，他創作時特別挑選的樂器也讓作品質感獨樹一格。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1533385785.jpg',
    is_enabled: 1,
    num: 10,
    origin_price: 2000,
    price: 600,
    title: '《Asylum For Eve》',
    unit: '張'
  },
  {
    category: '西洋',
    content: '這是內容',
    description:
      '美國超級英雄電影，由漫威旗下亦正亦邪，在《蜘蛛人》漫畫中的反派角色「猛毒Venom」故事改編。由執導首部電影《屍樂園》贏得成功票房和好評的魯賓‧弗來舍（Ruben Fleischer）掌鏡。「猛毒」是一個有思想的外星有機生命體，侵略性強，需要與一個宿主結合才能生存，並且賦予強大的超能力量。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1489743026.jpeg',
    is_enabled: 1,
    num: 10,
    origin_price: 2000,
    price: 600,
    title: 'Venom 猛毒-電影原聲帶',
    unit: '張'
  },
  {
    category: '古典',
    content: '這是內容',
    description:
      '多芬在1820年到1822年創作的最後三首鋼琴奏鳴曲，不但個性大不相同，也被後世公認是最不容易掌握的作品之一。第三十號鋼琴奏鳴曲充滿了優美的抒情性，全曲洋溢著高雅夢幻般的寂靜氣氛，第三樂章可說是貝多芬晚年最甜美的作品之一。第三十一號鋼琴奏鳴曲有如一名聲音的哲學家，具備貝多芬晚年所特有的深沉情緒特質，就像是對過去的追憶與懷念。兩樂章的第三十二號鋼琴奏鳴曲則是個讓人驚嘆的句點。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1533735263.jpg',
    is_enabled: 1,
    num: 10,
    origin_price: 2000,
    price: 600,
    title: '貝多芬：三十到三十二號鋼琴奏鳴曲',
    unit: '張'
  },
  {
    category: '古典',
    content: '這是內容',
    description:
      '多芬在1820年到1822年創作的最後三首鋼琴奏鳴曲，不但個性大不相同，也被後世公認是最不容易掌握的作品之一。第三十號鋼琴奏鳴曲充滿了優美的抒情性，全曲洋溢著高雅夢幻般的寂靜氣氛，第三樂章可說是貝多芬晚年最甜美的作品之一。第三十一號鋼琴奏鳴曲有如一名聲音的哲學家，具備貝多芬晚年所特有的深沉情緒特質，就像是對過去的追憶與懷念。兩樂章的第三十二號鋼琴奏鳴曲則是個讓人驚嘆的句點。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1533805026.jpg',
    is_enabled: 1,
    num: 10,
    origin_price: 2000,
    price: 600,
    title: '貝多芬：三十到三十二號鋼琴奏鳴曲',
    unit: '張'
  },
  {
    category: '流行',
    content: '這是內容',
    description:
      '由Tim和 Rupert組成的電子音樂雙人組 Soft Error，兩人都有舞曲和DJ的經驗，也有電影配樂製作經驗。作為藝術生涯新起點的首張專輯，他們從70年代泡菜搖滾革新精神和BBC的音效工作室充滿未來感的音效汲取靈感。合成器、鍵盤和鼓的巧妙融合也帶給他們的音樂獨特的感染力。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1489743026.jpeg',
    is_enabled: 1,
    num: 10,
    origin_price: 2000,
    price: 600,
    title: '《Mechanism》',
    unit: '張'
  },
  {
    category: '流行',
    content: '這是內容',
    description:
      '多芬在1820年到1822年創作的最後三首鋼琴奏鳴曲，不但個性大不相同，也被後世公認是最不容易掌握的作品之一。第三十號鋼琴奏鳴曲充滿了優美的抒情性，全曲洋溢著高雅夢幻般的寂靜氣氛，第三樂章可說是貝多芬晚年最甜美的作品之一。第三十一號鋼琴奏鳴曲有如一名聲音的哲學家，具備貝多芬晚年所特有的深沉情緒特質，就像是對過去的追憶與懷念。兩樂章的第三十二號鋼琴奏鳴曲則是個讓人驚嘆的句點。',
    id: '1',
    image: 'http://shop.wwr.com.tw/images/record_db/covers/1533805026.jpg',
    is_enabled: 1,
    num: 10,
    origin_price: 2000,
    price: 600,
    title: '貝多芬：三十到三十二號鋼琴奏鳴曲',
    unit: '張'
  }
]

export default products
