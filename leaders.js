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
  name: 'Josephine Baker',
  image: 'images/jbaker.jpg',
  category: 'ARTS',
  community: 'LGBTQIA',
  community2: 'BIPOC',
  link: 'https://www.them.us/story/josephine-baker-activism-history',
  slug: 'josephine-baker'
},
{
  name: 'Michael Dillon',
  image: 'images/mdillon.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'LGBTQIA',
  community2: '',
  link: 'https://en.wikipedia.org/wiki/Michael_Dillon',
  slug: 'michael-dillon'
},
{
  name: 'Ifti Nasim',
  image: 'images/inasim.jpg',
  category: 'ARTS',
  community: 'LGBTQIA',
  community2: 'AAPI',
  link: 'http://chicagolgbthalloffame.org/nasim-ifti/',
  slug: 'ifti-nasim'
},
{
  name: 'Simon Nkoli',
  image: 'images/snkoli.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'LGBTQIA',
  community2: 'BIPOC',
  link: 'https://legacyprojectchicago.org/person/simon-tseko-nkoli',
  slug: 'simon-nkoli'
},
{
  name: 'Nancy C??rdenas',
  image: 'images/ncardenas.jpg',
  category: 'ARTS',
  community: 'LGBTQIA',
  community2: 'FEMALE',
  link: 'https://www.makingqueerhistory.com/articles/2020/4/29/nancy-crdenas-part-i',
  slug: 'nancy-cardenas'
},
{
  name: 'Abraham Nemeth',
  image: 'images/anemeth.jpg',
  category: 'MATH',
  community: 'DISABLED',
  community2: '',
  link: 'https://sites.aph.org/hall/inductees/nemeth/',
  slug: 'andrew-nemeth'
},
{
  name: 'Wanda D??az Merced',
  image: 'images/wmerced.jpg',
  category: 'SCIENCE',
  community: 'DISABLED',
  community2: 'FEMALE',
  link: 'https://royalsociety.org/topics-policy/diversity-in-science/scientists-with-disabilities/wanda-diaz-merced/',
  slug: 'wanda-diaz-merced'
},
{
  name: 'Richard Mankin',
  image: 'images/rmankin.jpg',
  category: 'SCIENCE',
  community: 'DISABLED',
  community2: '',
  link: 'https://www.sciencebuddies.org/blog/stem-for-everyone-richard-mankin',
  slug: 'richard-mankin'
},
{
  name: 'Bernard Morin',
  image: 'images/bmorin.jpg',
  category: 'MATH',
  community: 'DISABLED',
  community2: '',
  link: 'https://en.wikipedia.org/wiki/Bernard_Morin',
  slug: 'bernard-morin'
},
{
  name: 'Nyle DiMarco',
  image: 'images/ndimarco.jpg',
  category: 'ARTS',
  community: 'LGTBQIA',
  community2: 'DISABLED',
  link: 'https://www.instagram.com/nyledimarco/',
  slug: 'nyle-dimarco'
},
{
  name: 'Dr. Caroline Solomon',
  image: 'images/csolomon.jpg',
  category: 'SCIENCE',
  community: 'DISABLED',
  community2: 'FEMALE',
  link: 'https://my.gallaudet.edu/caroline-solomon',
  slug: 'caroline-solomon'
},
{
  name: 'Dr. Marie M. Daly',
  image: 'images/mdaly.jpg',
  category: 'SCIENCE',
  community: 'BIPOC',
  community2: 'FEMALE',
  link: 'https://www.acs.org/content/acs/en/education/whatischemistry/african-americans-in-sciences/marie-maynard-daly.html',
  slug: 'marie-daly'
},{
  name: 'Dr. Temple Grandin',
  image: 'images/tgrandin.jpg',
  category: 'SCIENCE',
  community: 'NEURODIVERGENT',
  community2: 'FEMALE',
  link: 'https://www.templegrandin.com/',
  slug: 'temple-grandin'
},{
  name: 'Rosa May Billinghurst',
  image: 'images/rbillinghurst.jpg',
  category: 'SOCIAL JUSTICE',
  community: 'DISABLED',
  community2: 'FEMALE',
  link: 'https://www.nytimes.com/2020/10/30/obituaries/rosa-may-billinghurst-overlooked.html',
  slug: 'rosa-may-billinghurst'
},{
  name: 'Farida Bedwei',
  image: 'images/fbedwei.jpg',
  category: 'ENGINEERING',
  community: 'BIPOC',
  community2: 'DISABLED',
  link: 'https://en.wikipedia.org/wiki/Farida_Bedwei',
  slug: 'farida-bedwei'
},{
  name: 'Mahlia Amatina',
  image: 'images/mamatina.jpg',
  category: 'ARTS',
  community: 'NEURODIVERGENT',
  community2: 'FEMALE',
  link: 'https://the-dots.com/users/mahlia-amatina-571875',
  slug: 'mahlia-amatina'
},
{
  name: 'Florence Welch',
  image: 'images/fwelch.jpg',
  category: 'ARTS',
  community: 'NEURODIVERGENT',
  community2: 'FEMALE',
  link: 'https://florenceandthemachine.net/',
  slug: 'florence-welch'
},{
  name: 'Ursula Burns',
  image: 'images/uburns.jpg',
  category: 'ENGINEERING',
  community: 'BIPOC',
  community2: 'FEMALE',
  link: 'https://www.forbes.com/profile/ursula-burns/?sh=434ae8b240a0',
  slug: 'Ursula Burns'
},{
  name: 'Maya Lin',
  image: 'images/mlin.jpg',
  category: 'ARTS',
  community: 'AAPI',
  community2: 'FEMALE',
  link: 'https://www.mayalinstudio.com/',
  slug: 'maya-lin'
},
{
  name: 'John Forbes Nash',
  image: 'images/jnash.jpg',
  category: 'MATH',
  community: 'NEURODIVERGENT',
  community2: '',
  link: 'https://www.mayalinstudio.com/',
  slug: 'john-nash'
},
{
  name: 'Mae Jemison',
  image: 'images/mjemison.jpg',
  category: 'ENGINEERING',
  community: 'BIOPC',
  community2: 'FEMALE',
  link: 'https://www.womenshistory.org/education-resources/biographies/mae-jemison',
  slug: 'mae-jemison'
},
]