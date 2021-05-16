const leaders = [{
  name: 'Katherine Johnson',
  image: 'images/kjohnson.jpg',
  category: 'MATH',
  community: 'BIPOC',
  community2: '',
  link: 'https://www.nasa.gov/content/katherine-johnson-biography',
  slug: 'katherine-johnson'
}, {
  name: 'Alan Turing',
  image: 'images/aturing.jpg',
  category: 'ENGINEERING',
  community: 'LGBTQIA',
  community2: '',
  link: 'https://en.wikipedia.org/wiki/Alan_Turing',
  slug: 'alan-turing'
},{
  name: 'Ada Lovelace',
  image: 'images/alovelace.jpg',
  category: 'ENGINEERING',
  community: 'FEMALE',
  community2: '',
  link: 'https://www.computerhistory.org/babbage/adalovelace/',
  slug: 'ada-lovelace'
}
,{
  name: 'Stephen Hawking',
  image: 'images/shawking.jpg',
  category: 'SCIENCE',
  community: 'DISABLED',
  community2: '',
  link: 'https://www.frontiersofknowledgeawards-fbbva.es/galardonados/stephen-hawking-2/',
  slug: 'stephen-hawking'
},
{
  name: 'Florence Price',
  image: 'images/fprice.jpg',
  category: 'ARTS',
  community: 'BIPOC',
  community2: '',
  link: 'https://www.classicfm.com/discover-music/florence-price/',
  slug: 'florence-price'
},
{
  name: 'Dolores Huerta',
  image: 'images/dhuerta.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'BIPOC',
  community2: 'FEMALE',
  link: 'https://doloreshuerta.org/dolores-huerta/',
  slug: 'dolors-huerta'
},
{
  name: 'Nicole Cardoza',
  image: 'images/ncardozajpg.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'BIPOC',
  community2: 'FEMALE',
  link: 'https://www.nicoleacardoza.com/',
  slug: 'nicole-cardoza'
},
{
  name: 'Brittany Packnett Cunningham',
  image: 'images/bpacknettcunningham.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'BIPOC',
  community2: 'FEMALE',
  link: 'https://brittanypacknett.com/',
  slug: 'brittany-cunningham'
},
{
  name: 'Rachel Cargle',
  image: 'images/rcargle.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'BIPOC', 
  community2: 'FEMALE',
  link: 'https://rachel-cargle.com/',
  slug: 'rachel-cargle'
},
{
  name: 'Ceyenne Doroshow',
  image: 'images/cdoroshow.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'BIPOC', 
  community2: 'LGBTQIA',
  link: 'https://www.gq.com/story/ceyenne-doroshow-glits-founder-profile',
  slug: 'ceyenne-doroshow'
},
{
  name: 'Cathy Park Hong',
  image: 'images/cdoroshow.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'AAPI',
  community2: 'FEMALE',
  link: 'http://www.cathyparkhong.com/',
  slug: 'cathy-park-hong'
},
{
  name: 'Jonny Sun',
  image: 'images/jsun.jpg',
  category: 'ARTS',
  community: 'AAPI',
  community2: 'LGBTQIA',
  link: 'https://jonnysun.com/',
  slug: 'jonny-sun'
},
{
  name: 'Amanda Gorman',
  image: 'images/agorman.jpg',
  category: 'ARTS',
  community: 'BIPOC',
  community2: 'FEMALE',
  link: 'https://www.theamandagorman.com/',
  slug: 'amanda-gorman'
},
{
  name: 'Mimi Zhu',
  image: 'images/mzhu.jpg',
  category: 'ARTS',
  community: 'AAPI',
  community2: 'LGBTQIA',
  link: 'https://www.instagram.com/mimizhuxiyuan/',
  slug: 'mimi-zhu'
},
{
  name: 'Darien Sutton',
  image: 'images/dsutton.jpg',
  category: 'SCIENCE',
  community: 'BIPOC',
  community2: '',
  link: 'https://twitter.com/DoctorDarienMD',
  slug: 'darien-sutton'
},
{
  name: 'Bayard Rustin',
  image: 'images/brustin.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'BIPOC',
  community2: 'LGBTQIA',
  link: 'https://www.historyisgaypodcast.com/notes/tag/Bayard+Rustin',
  slug: 'bayard-rustin'
},{
  name: 'Laverne Cox',
  image: 'images/lcox.jpg',
  category: 'ARTS',
  community: 'BIPOC',
  community2: 'LGBTQIA',
  link: 'https://lavernecox.com/',
  slug: 'laverne-cox'
},{
  name: 'Mindy Kaling',
  image: 'images/mkaling.jpg',
  category: 'ARTS',
  community: 'AAPI',
  community2: 'FEMALE',
  link: 'https://www.instagram.com/mindykaling/?hl=en',
  slug: 'mindy-kaling'
},{
  name: 'Kehinde Wiley',
  image: 'images/kwiley.jpg',
  category: 'ARTS',
  community: 'BIPOC',
  community2: 'LGBTQIA',
  link: 'https://kehindewiley.com/',
  slug: 'kehinde-wiley'
},{
  name: 'Kim Petras',
  image: 'images/kpetras.jpg',
  category: 'ARTS',
  community: 'LGBTQIA',
  community2: 'FEMALE',
  link: 'https://www.instagram.com/kimpetras/?hl=en',
  slug: 'kim-petras'
},{
  name: 'Alice Ball',
  image: 'images/aball.jpg',
  category: 'SCIENCE',
  community: 'BIPOC',
  community2: 'FEMALE',
  link: 'https://www.biography.com/scientist/alice-ball',
  slug: 'alice-ball'
},{
  name: 'Ai-Jen Poon',
  image: 'images/apoon.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'AAPI',
  community2: 'FEMALE',
  link: 'https://www.domesticworkers.org/ai-jen-poo',
  slug: 'ai-jen-poon'
},{
  name: 'Ajay Bhatt',
  image: 'images/abhatt.jpg',
  category: 'TECHNOLOGY',
  community: 'AAPI',
  community2: '',
  link: 'https://www.yourtechstory.com/2020/05/04/ajay-bhatt-the-mastermind-behind-invention-of-usb/',
  slug: 'ajay-bhatt'
},{
  name: 'Yuri Kochiyama',
  image: 'images/ykochiyama.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'AAPI',
  community2: 'FEMALE',
  link: 'https://www.zinnedproject.org/news/tdih/yuri-kochiyama-was-born/',
  slug: 'yuri-kochiyama'
},{
  name: 'Eric Yuan',
  image: 'images/eyuan.jpg',
  category: 'TECHNOLOGY',
  community: 'AAPI',
  community2: '',
  link: 'https://www.carnegie.org/awards/honoree/eric-yuan/',
  slug: 'eric-yuan'
},{
  name: 'Sudha Chandran',
  image: 'images/schandran.jpg',
  category: 'ARTS',
  community: 'AAPI',
  community2: 'DISABLED',
  link: 'https://www.rollingwithoutlimits.com/view-post/Meet-Sudha-Chandran-A-World-famous-dancer-performer-actress-and-celebrity-who-overcame-dis',
  slug: 'sudha-chandran'
},
{
  name: 'David Blunkett',
  image: 'images/dblunkett.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'DISABLED',
  community2: '',
  link: 'https://en.wikipedia.org/wiki/David_Blunkett',
  slug: 'david-blunkett'
},{
  name: 'Frida Kahlo',
  image: 'images/fkahlo.jpg',
  category: 'ARTS',
  community: 'DISABLED',
  community2: 'FEMALE',
  link: 'https://www.fridakahlo.org/',
  slug: 'frida-kahlo'
},
{
  name: 'Ryan O\'Connell',
  image: 'images/roconnell.jpg',
  category: 'ARTS',
  community: 'DISABLED',
  community2: 'LGBTQIA',
  link: 'https://www.out.com/print/2021/2/08/ryan-oconnells-mission-raise-queer-disabled-stories-has-only-begun',
  slug: 'ryan-oconnell'
},
{
  name: '',
  image: 'images/*.jpg',
  category: '',
  community: '',
  community2: '',
  link: '',
  slug: ''
},
{
  name: '',
  image: 'images/*.jpg',
  category: '',
  community: '',
  community2: '',
  link: '',
  slug: ''
},
]