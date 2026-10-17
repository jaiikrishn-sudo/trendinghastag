/* ============================================================
   HASHTAGS FILE - edit all hashtags here manually
   ------------------------------------------------------------
   Every category has 4 groups. One group looks like this:
   G("Group name", "tags for all platforms", "extra Instagram tags", "extra Facebook tags", "extra YouTube tags"),
   - Separate tags with a space. Do not type the # sign.
   - Do not remove the commas (,) or the quotes (" ").
   - New category: copy a whole category block, then change its id and name.
   ============================================================ */
const G=(t,a,i,f,y)=>({t,all:a.split(" "),ig:i.split(" "),fb:f.split(" "),yt:y.split(" ")});

const CATS=[
{id:"trending",name:"\u{1F525} Trending",groups:[
 G("Viral Now","viral trending fyp explore explorepage viralvideo trend foryou","viralreels trendingreels","viralpost trendingnow","viralshorts trendingshorts"),
 G("Reels & Shorts","reels shorts shortvideo contentcreator viralcontent creators videooftheday","reelsindia instareels","facebookreels fbreels","youtubeshorts shortsvideo"),
 G("India Trending","india indian desi trendingindia viralindia bharat incredibleindia","indiareels desivibes","indiapost indiancommunity","indiatrending indianyoutuber"),
 G("Hindi & Hinglish","hindi hinglish hindiquotes hindimemes apnaindia desicontent hindivideo","hindireels hinglishreels","hindipost hindistatus","hindishorts hindivlog")]},
{id:"nature",name:"Nature",groups:[
 G("Landscapes","landscape mountains hills valley sunrise sunset skyline horizon","landscapephotography earthpix","naturelovers beautifulnature","naturevideo scenicview"),
 G("Wildlife","wildlife animals birds wildlifephotography birdwatching jungle safari","wildlifereels birdsofinstagram","animallovers wildlifelovers","wildlifevideo animalvideos"),
 G("Flowers & Plants","flowers garden plants flowerlovers botanical greenery gardening","flowerreels plantsofinstagram","gardenlovers floweroftheday","gardeningtips plantcare"),
 G("Water & Sky","ocean sea beach river waterfall clouds rain","beachreels monsoonvibes","seaside rainydays","oceanwaves relaxingnature")]},
{id:"travel",name:"Travel",groups:[
 G("Destinations","travel wanderlust explore tourism destination vacation trip","travelreels incredibleindia","travelcommunity holiday","travelvlog travelindia"),
 G("Adventure","adventure trekking hiking roadtrip camping backpacking mountains","adventurereels hikingvibes","adventurelovers campinglife","trekvlog adventurevlog"),
 G("Hotels & Stays","hotel resort staycation homestay luxurytravel hostel traveltips","hotelreels resortlife","hotelstay travelstay","hotelreview roomtour"),
 G("India Trips","incredibleindia kashmir ladakh himachal goa rajasthan","kashmirdiaries exploreindia","indiatravel visitindia","kashmirvlog indiatravelvlog")]},
{id:"fitness",name:"Fitness",groups:[
 G("Gym","gym gymlife workout fitness bodybuilding training gymmotivation","gymreels gymrat","gymtime fitnesscommunity","gymshorts workoutroutine"),
 G("Weight Loss","weightloss fatloss healthylifestyle diet transformation healthyfood fitnessjourney","weightlossjourney beforeandafter","weightlosstips healthtips","weightlossdiet fatlosstips"),
 G("Yoga & Home Workout","yoga homeworkout stretching meditation mobility wellness mindfulness","yogareels yogaeveryday","yogalovers wellnessjourney","yogaforbeginners homeworkoutvideo"),
 G("Running & Cardio","running cardio runner marathon cycling hiit sports","runningreels runnersofinstagram","runningcommunity morningrun","runningtips cardioworkout")]},
{id:"food",name:"Food",groups:[
 G("Street Food","streetfood chaat momos pavbhaji samosa foodstall chai","streetfoodreels desistreetfood","streetfoodlovers foodstreet","streetfoodindia streetfoodvlog"),
 G("Recipes","recipe cooking homemade easyrecipes dinner lunch breakfast","recipereels cookingreels","recipesharing cookingathome","recipevideo cookingtutorial"),
 G("Sweets & Desserts","dessert sweets cake chocolate icecream bakery baking","dessertreels bakingreels","dessertlovers cakeideas","dessertrecipe cakerecipe"),
 G("Restaurants & Cafes","foodie restaurant foodblogger foodreview cafe dining foodlover","foodiesofinstagram cafereels","restaurantreview localeats","foodreview restaurantvlog")]},
{id:"fashion",name:"Fashion",groups:[
 G("Men's Fashion","menswear mensfashion mensstyle gentlemen menstyle streetwear sneakers","mensfashionreels ootdmen","mensclothing fashionformen","menswearstyling mensoutfit"),
 G("Women's Fashion","womensfashion womenstyle ootd outfitinspo fashionista dress lookoftheday","fashionreels outfitoftheday","womenfashion newarrivals","outfitideas fashionhaul"),
 G("Ethnic Wear","ethnicwear saree kurti lehenga indianwear traditional weddingwear","sareelove ethnicreels","indianfashion festivewear","sareedrapingtutorial ethnicwearhaul"),
 G("Styling Tips","style fashiontips stylingtips lookbook trendy streetstyle fashionblogger","grwm styleinspo","fashiontrends styletips","stylingtips lookbook")]},
{id:"tech",name:"Tech",groups:[
 G("Coding","coding programming developer webdevelopment code python javascript","codinglife programmerlife","techcommunity developers","codingtutorial learnprogramming"),
 G("AI","ai artificialintelligence chatgpt aitools machinelearning automation futuretech","aireels aitools","technews aiupdates","aitutorial aitoolsreview"),
 G("Gadgets","gadgets smartphone tech techreview unboxing android laptop","techreels gadgetreels","technews gadgetlovers","techreview unboxingvideo"),
 G("Startups & Apps","startup innovation software saas appdevelopment digitalindia technology","startuplife techstartup","startupindia innovationnews","startupstory appdevelopmentvideo")]},
{id:"gaming",name:"Gaming",groups:[
 G("Mobile Games","mobilegaming bgmi freefire codm mobilegamer androidgaming pubg","bgmireels freefirereels","bgmiindia gamingfamily","bgmilive freefirelive"),
 G("PC & Console","pcgaming playstation xbox gamingsetup gta5 valorant esports","gamingsetup pcsetup","gamingcommunity gamernation","gtav valorantgameplay"),
 G("Streaming","streamer livestream twitch gamingcommunity gamingchannel youtubegaming letsplay","gamerlife livegaming","gamingpage livestreamgaming","gaminglive gamingchannelindia"),
 G("Gaming Fun","gamer gaming gamingmemes funnygaming gamingclips gameplay clutch","gamingmemes gamerreels","funnygaming gamingvideos","gamingshorts funnymoments")]},
{id:"music",name:"Music",groups:[
 G("Bollywood Songs","bollywoodsongs hindisongs arijitsingh romanticsongs newsong trendingsong musiclover","songreels hindisongreels","hindisong songlyrics","lyricvideo hindisongsvideo"),
 G("Punjabi & Hip-hop","punjabisongs hiphop rap desihiphop punjabimusic newrap rapper","punjabireels desihiphopreels","punjabimusic rapmusic","punjabisong rapvideo"),
 G("Singing & Covers","singer singing coversong vocals acoustic guitar singersofinstagram","singingreels coverreels","singerlife livesinging","songcover singingvideo"),
 G("Lofi & Chill","lofi chill relaxingmusic slowedreverb musicplaylist instrumental sleepmusic","slowedreverbreels lofivibes","chillmusic musicvibes","lofimusic lofihiphop")]},
{id:"comedy",name:"Comedy & Memes",groups:[
 G("Memes","memes meme funnymemes desimemes memepage relatable dankmemes","memereels indianmemes","memesdaily funnymeme","memecompilation memeshorts"),
 G("Comedy Skits","comedy skit funnyvideos standupcomedy comedian humor entertainment","comedyreels skitreels","funnyvideos comedyvideos","comedyshorts standup"),
 G("Pranks & Roasts","prank roast funny trolling reaction vines fun","prankreels roastreels","prankvideos laughoutloud","prankvideo roastvideo"),
 G("Viral & Trending","viral trending fyp funnyreels lol jokes relatable","viralreels explorepage","viralvideos trendingnow","viralvideo trendingshorts")]},
{id:"education",name:"Education",groups:[
 G("Exam Prep","exam examprep boardexams upsc neet jee ssc","studymotivation studygram","competitiveexams studygroup","examtips examstrategy"),
 G("Study Tips","study studytips studymotivation learning students notes productivity","studywithme studyreels","studygroup educationpage","studyvlog studyhacks"),
 G("Careers & Jobs","careers jobs govtjobs sarkarijob jobsearch resume interview","careerguidance jobalert","jobsupdate govtjobsindia","sarkarijobs interviewtips"),
 G("Skills","skills learning english communication languagelearning onlinelearning upskilling","englishspeaking learnenglish","learnskills onlinecourse","spokenenglish learnenglishfree")]},
{id:"business",name:"Business",groups:[
 G("Startup & Entrepreneur","entrepreneur startup business businessowner founder startuplife smallbusiness","entrepreneurlife businessreels","businesspage smallbusinessowner","startupindia businessstory"),
 G("Marketing","marketing digitalmarketing branding socialmedia seo contentmarketing advertising","marketingtips socialmediatips","digitalmarketing brandawareness","marketingstrategy seotips"),
 G("Money & Investing","money finance investing savemoney stockmarket wealth financialfreedom","moneytips investingtips","financetips personalfinance","stockmarketindia investingforbeginners"),
 G("Online Earning","freelancing sidehustle workfromhome earnmoneyonline passiveincome onlinebusiness ecommerce","sidehustleideas workfromhomejobs","onlineearning homebusiness","makemoneyonline freelancingtips")]},
{id:"bollywood",name:"Bollywood",groups:[
 G("Movies","bollywood movies film cinema hindifilms newmovie boxoffice","moviereels filmreels","moviereview filmnews","movietrailer filmreview"),
 G("Celebrities","celebrity bollywoodactress bollywoodactor stars shahrukhkhan salmankhan aliabhatt","bollywoodreels celebritystyle","bollywoodgossip celebritynews","bollywoodnews celebrityinterview"),
 G("Songs & Dance","bollywoodsongs bollywooddance dance dancer choreography songs trending","dancereels bollywooddancereels","dancevideo bollywooddancer","dancecover bollywooddancevideo"),
 G("OTT & Web Series","webseries ott netflix primevideo hotstar series bingewatch","seriesreels ottreels","webseriesreview ottupdates","webseriesreview ottnews")]},
{id:"cricket",name:"Cricket",groups:[
 G("IPL","ipl iplcricket csk rcb mi kkr iplauction","iplreels iplmemes","iplupdates iplfever","iplhighlights iplshorts"),
 G("Team India","teamindia indiancricket bcci viratkohli rohitsharma msdhoni indvspak","teamindiareels cricketreels","cricketupdates indiancricketteam","cricketshorts matchhighlights"),
 G("Live & News","cricket livecricket cricketnews t20 odi testcricket cricketfans","cricketnewsupdate cricketlover","livecricketscore cricketfever","cricketlive cricketnewsindia"),
 G("Cricket Fun","cricketmemes gullycricket cricketlife cricketlover cricketvideo cricketlove cricketfun","cricketmemesreels cricketreelsindia","cricketcommunity cricketfeverindia","cricketfunny cricketshortsfun")]},
{id:"photography",name:"Photography",groups:[
 G("Portrait","portrait portraitphotography model photoshoot headshot candid people","portraitmood portraitreels","photoshootideas photographers","portraittips photoshoottips"),
 G("Mobile Photography","mobilephotography shotoniphone shotonandroid phonephotography iphonephotography mobilephoto camera","mobilephotographyreels shotonmobile","photooftheday picoftheday","mobilephotographytips cameratricks"),
 G("Street & Travel","streetphotography travelphotography cityscape architecture urban documentary candidshot","streetreels travelclicks","photographylovers streetclicks","streetphotographyvlog travelphotographytips"),
 G("Editing","lightroom photoediting presets photoshop editing colorgrading vsco","lightroompresets editingreels","photoeditingtips presetslink","lightroomtutorial photoeditingtutorial")]},
{id:"motivation",name:"Motivation",groups:[
 G("Success","success motivation successquotes goals mindset ambition winner","motivationreels dailymotivation","successmindset inspirationalquotes","successstory motivationalvideo"),
 G("Discipline","discipline consistency hardwork focus grind selfimprovement habits","disciplinereels hardworkpays","hardworkpayoff positivevibes","disciplineandhabits selfimprovementvideo"),
 G("Quotes","quotes lifequotes thoughtoftheday positivequotes quoteoftheday inspirationalquotes wisdom","quotesreels motivationalquotes","quotesdaily lifequotesdaily","quotesvideo motivationalquotesvideo"),
 G("Self Growth","selflove selfcare personaldevelopment mindfulness positivity growthmindset healing","selfgrowth selfloveclub","positivethinking goodvibes","lifelessons selfhelp")]},
{id:"cars",name:"Cars & Bikes",groups:[
 G("Cars","cars carlovers supercars luxurycars carsofinstagram carspotting carlife","carreels carspottingindia","carcommunity carloversindia","carreview carvlog"),
 G("Bikes","bikes bikelife motorcycle superbikes royalenfield bikers ride","bikereels bikerlife","bikersofindia bikecommunity","bikereview bikevlog"),
 G("Modified","modified modifiedcars modifiedbikes customcars carmodification tuning carculture","modifiedreels carmods","modifiedlovers carmodified","modifiedcarvideo carshorts"),
 G("Car Care","carwash cardetailing ceramiccoating detailing carcare cleaning autocare","detailingreels carwashreels","carcaretips carwashing","carwashvideo detailingvideo")]},
{id:"beauty",name:"Beauty",groups:[
 G("Makeup","makeup makeupartist makeuplook makeuptutorial glam lipstick bridalmakeup","makeupreels grwm","makeuplovers makeuplooks","makeuptutorialvideo makeupvideo"),
 G("Skincare","skincare skincareroutine glowingskin selfcare facecare acne skintips","skincarereels glowup","skincaretips beautytips","skincareroutinevideo homeremedies"),
 G("Hair","hair haircare hairstyle hairgoals longhair hairtutorial haircolor","hairreels hairstylereels","hairstyles haircaretips","hairstyletutorial haircarevideo"),
 G("Nails & Mehndi","nails nailart nailsofinstagram mehndi mehndidesign henna manicure","nailreels mehndireels","nailartideas mehndidesigns","nailarttutorial mehndidesignvideo")]},
{id:"festival",name:"Festival",groups:[
 G("Diwali","diwali happydiwali deepavali festivaloflights diya rangoli crackers","diwalireels diwalivibes","diwaliwishes diwalicelebration","diwalivlog diwalidecoration"),
 G("Holi & Eid","holi happyholi eid eidmubarak festival colors celebration","holireels eidreels","holiwishes eidwishes","holivlog eidvlog"),
 G("Navratri & Dussehra","navratri garba dandiya durgapuja dussehra ganeshchaturthi festivalvibes","garbareels navratrireels","navratriwishes jaimatadi","garbavideo durgapujavlog"),
 G("Christmas & New Year","christmas merrychristmas newyear happynewyear newyearparty winter celebration","christmasreels newyearreels","newyearwishes christmasdecor","newyearshorts christmasvlog")]},
{id:"pets",name:"Pets",groups:[
 G("Dogs","dogs dog doglovers puppy dogsofinstagram dogtraining goldenretriever","dogreels puppylove","doglife dogfamily","dogvideos dogtrainingtips"),
 G("Cats","cats cat catlovers kitten catsofinstagram catlife meow","catreels kittenlove","catfamily catpage","catvideos funnycats"),
 G("Pet Care","petcare pets petlover petfood vet petadoption petsupplies","petsofinstagram petreels","petcommunity petcaretips","petcarevideo pettips"),
 G("Cute & Funny","cute funnyanimals animallovers adorable funnypets cuteanimals petlife","cutereels petmemes","cutepets funnyanimalvideos","funnyanimalshorts cutepetvideos")]},
{id:"wedding",name:"Wedding",groups:[
 G("Bridal","bride bridal bridalmakeup bridallook weddingoutfit lehenga bridetobe","bridalreels bridalsquad","bridalfashion indianbride","bridalmakeuptutorial bridallookbook"),
 G("Wedding Photography","weddingphotography weddingphotographer candidphotography weddingday weddingphotos shaadi weddingmoments","weddingreels weddingsutra","weddingphotographers weddingalbum","weddingvideo weddingcinematography"),
 G("Decor & Venue","weddingdecor weddingplanner weddingvenue mandapdecor floraldecor weddingplanning destinationwedding","decorreels weddinginspiration","weddingideas weddingplanners","weddingdecoration weddingplanningtips"),
 G("Pre-wedding & Couples","prewedding couplegoals engagement savethedate couple romance haldi","preweddingreels couplereels","coupleshoot preweddingshoot","preweddingvideo engagementvideo")]}
];
