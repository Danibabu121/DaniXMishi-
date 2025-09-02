const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl =["میری جان چپیڑیں کھاؤ گی - 🥹❤️" ,"ThArKii LaRkiAn ReQ BhEj SaKti HeN (-🌚🦥💔" ,"بوتـــــھی دیکـــــو اســـــکی اور بـــــاتیـــــں سنـــــو 🤦‍♀️🙎‍♀️🤭🤧" ,"Tum mere dil me ayse aty ho jese Gurde me phatrii<<🥺💗" ,"ہم سے بہتر ملے تو رکنا مت دفعہ ہو جانا 🙂 🖐🏿" ,"ہتھوڑی 🔨 مل گئی ہے جس نے منہ پے ڈمپل  بنوانا ہے رابطہ کرے🐼🤭" ,"Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔" ,"Brtan Dho Diye Chai Bhi Bnadi Ab Amii Bolrhi Hen Bottlen Bhi Bhr Do 😕🥹" ,"Shkl insani, soch iblees Hnji apki hi ha" ,"Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA.🙂💔" ,"Hn bol hrammi a gaii yaad" ,"M❍aziz sarif ...🐻       i Love You..🙂♥" ,"-Bilkul  سیاہ larkiyan bhi Chlein gi dOn't worry Come ib🙃" ,"تم تــو شــکل ســے ہـــی انــکل لگــتے ہــو،😐" ,"AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐" ,"Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂" ,"Salyy tujhe koi janu nai kehtaa to idhar a ke bot bot krna LG Jata" ,"TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" ,"Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye" ,"Block Your ‘’ gf ‘’ And Purpose me 🙂💔" ,"کوئی  اپنا جانو ادھار دے دو 🙆😌 کپڑے استری کراں کے واپس کردونگا😒🤣😁😉*" ,"Hn bol bot ki Jan IB a ak secret btaoo 😂" ,"اپـــنـــے پـــتیـــلے جیـــســـے مـــنہ ســـے مـــیرا نـــام مـــت لــــیا کــــرو🙂" ,"میــــــرے نال ویا کــــــر لو 😊💔" ,"😘oye shaper bola kya hai msala 🙂" ,"Th0dii sii Shadii h0 jatii t0 awcha Rehta 🙂" ,"😈✨آ تجــᷭھے خـــراب کــــروں💋🤤*" ,"🤣آپ میرے ساتھ پھنس جاو🤣 نہ🤣آپ میرے نکھرے ایسے اٹھانا جیسے چرسی ساہیکل اٹھاتا ھے 🤣" ,"زندہ رہ رہ کر بور نہیں  ہوتے تم لوگ😑" ,"bht bura hu na mai? bhen dedo apnii🙂" ,"SOo JaO WarNa Mera Muqa par Jaye Ga🙈🤣" ,"Tum tu mujhe shkal sy Ghareeb lgti ho🙊" ,"Tum itne Tharki Q ho Jawn🤨" ,"Mujhe lgta hai Ma Single hi Maron gi🥺" ,"Babu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂" ,"tum ko meri ittu 🤏 C bhi yad nhi ati🥹" ,"Astaghfirullah Habibi tum kitne tharki ho" ,"❖•━━━━━━━━━━━━━━━━•❖🥺Jan nahi kehna to men naraz ho jana ay", " لوگ کہتے محبت روح سے❖•━━━━━━━━━━━━━━━━•❖ کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️ ", "❖•━━━━━━━━━━━━━━━━•❖𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂",  "❖•━━━━━━━━━━━━━━━━•❖chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "❖•━━━━━━━━━━━━━━━━•❖Block Your ‘’ gf ‘’ And Purpose me 🙂💔", "tuje to kali larki bhi left nahi krwati ☹️", "❖•━━━━━━━━━━━━━━━━•❖Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia 😂", "❖•━━━━━━━━━━━━━━━━•❖Mujhy to line m biryani nahi milti janu Kya mily gi 😒", "چکر آ رہا ہے اجازت ہو تو آپکے دل میں گر جاؤں 🙂🎻", "❖•━━━━━━━━━━━━━━━━•❖Bas ek bar marriage ho jaye love m khud kr lu ga 🙈", " مجھے میٹھے کریلے گرم قلفی ابلی ہوئی چاکلیٹ سپائیسی آسیکریم اور تیز پتی والی کوک بہت پسند ہے 😎🥴", "❖•━━━━━━━━━━━━━━━━•❖ uff Yar tumri ya red lipstick Kon kharb krta hai 😘🥰😛", "*_اب ہــم دور بیــٹھ کــر تــیری اوقــات دیکــھیں گــے_* 🤍🙂", "بھـــــاڑ مـــــیں جـــــاؤ ڈارلینـــــگ🙂🖐", "شــــــــٹ آپ ڈارلنــــــگ🤭🖐🏻", "کمبـٌختـــ اَبُ تــُو ہـَـر بـَات دِل کــُو لگـــ جَاتـِـئ ہئــے -💔🙂", "تُو بــــہت حــــرام مــــوت مــــرنا 🙂", "ہے تمنا ہمیں تمہیں اپنی پرفائل کا چکر لگوائیں 🙂❤️!!", "سٹیل دے ڈونگے ورگا منہ اے تیرا 💔🙂", "مـــــــــطلبــــــــی ہـــــــو یــــــار🙂💔", "کنــــــــــــــــنے مــــــــنہوس ہــــــــو 🙂:-//", "اک بـــــار جــــــــانو بول دو شــــریکیوں کو جـــــلانا ہے 🥲", "❖•━━━━━━━━━━━━━━━━•❖Sary Rishtydaron ky number delete krdiye🔪Ab Safe feel krha hu🙂🥹", "❖•━━━━━━━━━━━━━━━━•❖LUX Khane se Dmag teez hota-//-^)) 🙂", " K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂", "  ســـــــٹیــل دی قــولــی ورگــا منـــــہ اے تـــــــیرا 😾🙌",  "زہـــؔـرکــــھّــــانــــےســــے رؘنــــگ گـــؔـورا ہـــؔـوتــــا ہــــے!🤗🤭❣️😘", "❖•━━━━━━━━━━━━━━━━•❖𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "❖•━━━━━━━━━━━━━━━━•❖Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "❖•━━━━━━━━━━━━━━━━•❖𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒",  "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔♥️",  "❖•━━━━━━━━━━━━━━━━•❖<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Lips kissing is not Romance It's sharing Bacteria>>>🙂", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "Waiting 💘for Shadi'w ky baad wali Halal Chummian 🫦🫶🥹",  "Imagine I am your Ex 🥲say whatever you want to say", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓",  "Agar Larky Payare hote to Real DP lagataw - :) 💔🤌", "Time Pass ky liye 1 Female Chat partner Chahye 🙂❤️‍🩹🫶", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo",  "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔",  "💚🦋 Iʈɴɪ⃪͡  𝗰ᴜ⃪⃨ʈə  D𝐩 𝐦ʈ  Ɩ𝐠ɑɣɑ kɽ𝐨͢ kɪ⃪͡ssɪ⃪͡ 💋 ᴡ⃪⃨ɪ⃪͡ssɪ⃪͡ kɑɽɴə kɑ ɖɪ⃪͡Ɩ kɑɽʈɑ нɑɪ⃪͡ 😗😗",  "❤- App kı Photo To Bahut cutƏ hıı'-😍- ☆'Koıı Ətna Bhıı CutƏ Hota hƏ💋🙊👈🏻", "tuje to kali larki bhi left nahi krwati ☹️", "Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia 😂", "Mujhy to line m biryani nahi milti janu Kya mily gi 😒", "چکر آ رہا ہے اجازت ہو تو آپکے دل میں گر جاؤں 🙂🎻", "Bas ek bar marriage ho jaye love m khud kr lu ga 🙈", " مجھے میٹھے کریلے گرم قلفی ابلی ہوئی چاکلیٹ سپائیسی آسیکریم اور تیز پتی والی کوک بہت پسند ہے 😎🥴", " uff Yar tumri ya red lipstick Kon kharb krta hai 😘🥰😛", "➪😘oye shaper bola kya hai msala 🙂",  "Koi 70 Rupee dy do Mera Pas 20 Han Sting Peeni Hai🥺", "Na Pakistan me rehny k pese hain na niklny k🤝🏽🙂💔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺",  "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں",  "*😈✨آ تجــᷭھے خـــراب کــــروں💋🤤*",  "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", " جہاں پیاری لڑکیاں وہاں میں 🙂❤️🥀 " , "بھای جان گروپ میں گندی باتیں نهیں گریں🤧😳 " , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂🤣" , "دل بڑا ہونا چاہیے🙌😒منہ تو کھوتے کا v بڑا ہوتا ہے🤝🙂" , "بہت کر چکے منتیں تیری اب میں تمہیں اغوا کرو گا😒😂" , "ہے تمنا ہمیں تمہیں اپنا بنائیں🙊" , "کہتے ہیں زندگی سب کچھ سکھا دیتی ہے😾تے فیر مینوں انگلش کیوں نہیں سکھاندی🤧😒" , "چکن 🐔 کڑاہی جیسے خواب🧐ساگ 🌿 جیسی زندگی 😑🤐" ,  "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝" , "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊" , "میــــــرے نال ویا کــــــر لو 😊💔" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "𝐊𝐚𝐬𝐇 𝐇𝐚𝐦 𝐁 𝐊𝐢𝐬𝐢 𝐊𝐚𝐲 𝐂𝐫𝐮𝐬𝐇 𝐇𝐨𝐭𝐘 .🙂👑♥", "Ary yrr MaZak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow 1 PaPpi Idher d0o 1 PaPpi idher 😘" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Dekh lena 1 din mazak mazak may he sbsy handsome lrki pata longa🧐🙂", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara NH Hun is lya koi dost NH h 🙃🌚", "Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂", "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂",  "شــــــٹ اپــــ ہــــــوا بـــــــاز شــــــــــاپــــر 🙂💔",  "kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE 😗💚", "Allah kray tmhari shadi py Nadra ka photographer aye🙂🕺", "Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄", "Salyy tujhe koi janu nai kehtaa to idhar a ke bot bot krna LG Jata", "Hn bol janu a gaii yaad", "Teri janu kisi or sath busy to idhar mou mRNA a gyaa", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂",  "🤣آپ میرے ساتھ پھنس جاو🤣 نہ🤣آپ میرے نکھرے ایسے اٹھانا جیسے چرسی ساہیکل اٹھاتا ھے 🤣", "muaziz sarif aapka muhh relation ke liye naa kafi he shukriya🙂🤝", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂",  "Hn bol janeman a gaii yaad",  "حـــکومـــت ســـے'تـــسدیــک شـــدا'حــرامــی 🙂", "Hn bol bot ki Jan IB a ak secret btaoo 😂", "AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸", "BuHt GrEeB huN 'JiSki JiTNi ToFeeQ Hai utNi 'ChuMiyA' DeTi JaYe😔🥲", "ThArKii LaRkiAn ReQ BhEj SaKti HeN (-🌚🦥💔", "Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)", "🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻", "⚠️*•❤🙂 Awj hum hai - kal HumhaRy بچـــــــــے  hOngy agAr Tum maaN jaO 🙂🌼", "-Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂", "SuNo Me OwnEr ki trf se Ek ZoR DaR ChuMi De RaHa HoN JaHa DiL KaRe Le LeNa (-😗🌚", "M❍aziz sarif ...🐻       i Love You..🙂♥", "Ya Allah MuJ PaR KiSi MaaLL DaR ANti Ka DiL A JaYe 🤌😞♥️", "Pyaar محـــــــــبـــت Sab دھــــــــوکہ Haiiw 😒😂مجـھـــــــے  pta لــــــــــــو abi bhiiw مـــــــوکـــا  haiiw😹🙊💋", "Dolut shorhat kya mein krni  jb tum khud he ameer hoo 😐🌚", "Pt jaOgii tw rishta du ga nai patogi tw chammat du ga 😹😐💔", "Tum mere dil me ayse aty ho jese Gurde me phatrii<<🥺💗", "_آو بھاگ کر شادی کر لیتے ہیں✨️😍😋🥺", "-Bilkul  سیاہ larkiyan bhi Chlein gi dOn't worry Come ib🙃", "Tery mast mast doo neen Kinni sohni hai teri nikki peen🌚🤌", "haiy ma sadky jawa teri masoom shaqal py 😂 chabal insan", "Bot nah bol oye ! Janu bol mjhy aur janu sy piyar sy bat kerty hai , rat ko kahan thy nazar nahi ay hawali py 😂", "Shaqal Sy masoom lgty ho 😂 btao kahi Ap ka ghar doup main to nahi", "kash tum single hoty to maza hi koch aur tha pagal insane 😂", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "haiy babu ny boliya hai shaid purpose kerna hai mjhy bolo bolo babu 😘", "Ary ghreeb awam roti banana ky liya athy main Pani ko istamal kerty ho 😂", "Ary chabli nah mar joh kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "Hy Ma Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Ja 😂", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jaan kia hail hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "ma ap ki ami ko btaou ga ap Facebook use kerty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 😂" ,  "esy nah dakho piyar ho jay ga 😂" , "Teri pic dakhna sy phly shukhr hai ma anda hu 😂" , "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata ha Hai😂", " لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️ ", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂",  "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "Block Your ‘’ gf ‘’ And Purpose me 🙂💔", "tuje to kali larki bhi left nahi krwati ☹️", "Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia 😂", "Mujhy to line m biryani nahi milti janu Kya mily gi 😒", "چکر آ رہا ہے اجازت ہو تو آپکے دل میں گر جاؤں 🙂🎻", "Bas ek bar marriage ho jaye love m khud kr lu ga 🙈", " مجھے میٹھے کریلے گرم قلفی ابلی ہوئی چاکلیٹ سپائیسی آسیکریم اور تیز پتی والی کوک بہت پسند ہے 😎🥴", " uff Yar tumri ya red lipstick Kon kharb krta hai 😘🥰😛", "*_اب ہــم دور بیــٹھ کــر تــیری اوقــات دیکــھیں گــے_* 🤍🙂", "بھـــــاڑ مـــــیں جـــــاؤ ڈارلینـــــگ🙂🖐", "شــــــــٹ آپ ڈارلنــــــگ🤭🖐🏻", "کمبـٌختـــ اَبُ تــُو ہـَـر بـَات دِل کــُو لگـــ جَاتـِـئ ہئــے -💔🙂", "تُو بــــہت حــــرام مــــوت مــــرنا 🙂", "ہے تمنا ہمیں تمہیں اپنی پرفائل کا چکر لگوائیں 🙂❤️!!", "سٹیل دے ڈونگے ورگا منہ اے تیرا 💔🙂", "مـــــــــطلبــــــــی ہـــــــو یــــــار🙂💔", "کنــــــــــــــــنے مــــــــنہوس ہــــــــو 🙂:-//", "اک بـــــار جــــــــانو بول دو شــــریکیوں کو جـــــلانا ہے 🥲", "Sary Rishtydaron ky number delete krdiye🔪Ab Safe feel krha hu🙂🥹", "LUX Khane se Dmag teez hota-//-^)) 🙂", " K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂", "  ســـــــٹیــل دی قــولــی ورگــا منـــــہ اے تـــــــیرا 😾🙌",  "زہـــؔـرکــــھّــــانــــےســــے رؘنــــگ گـــؔـورا ہـــؔـوتــــا ہــــے!🤗🤭❣️😘", "𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒",  "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔♥️",  "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Lips kissing is not Romance It's sharing Bacteria>>>🙂", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "Waiting 💘for Shadi'w ky baad wali Halal Chummian 🫦🫶🥹",  "Imagine I am your Ex 🥲say whatever you want to say", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓",  "Agar Payarw hota to Real DP lagataw - :) 💔🤌", "Time Pass ky liye 1 Female Chat partner Chahye 🙂❤️‍🩹🫶", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo",  "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔",  "💚🦋 Iʈɴɪ⃪͡  𝗰ᴜ⃪⃨ʈə  D𝐩 𝐦ʈ  Ɩ𝐠ɑɣɑ kɽ𝐨͢ kɪ⃪͡ssɪ⃪͡ 💋 ᴡ⃪⃨ɪ⃪͡ssɪ⃪͡ kɑɽɴə kɑ ɖɪ⃪͡Ɩ kɑɽʈɑ нɑɪ⃪͡ 😗😗",  "❤- App kı Photo To Bahut cutƏ hıı'-😍- ☆'Koıı Ətna Bhıı CutƏ Hota hƏ💋🙊👈🏻", "tuje to kali larki bhi left nahi krwati ☹️", "Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia 😂", "Mujhy to line m biryani nahi milti janu Kya mily gi 😒", "چکر آ رہا ہے اجازت ہو تو آپکے دل میں گر جاؤں 🙂🎻", "Bas ek bar marriage ho jaye love m khud kr lu ga 🙈", " مجھے میٹھے کریلے گرم قلفی ابلی ہوئی چاکلیٹ سپائیسی آسیکریم اور تیز پتی والی کوک بہت پسند ہے 😎🥴", " uff Yar tumri ya red lipstick Kon kharb krta hai 😘🥰😛", "➪😘oye shaper bola kya hai msala 🙂",  "Koi 70 Rupee dy do Mera Pas 20 Han Sting Peeni Hai🥺", "Na Pakistan me rehny k pese hain na niklny k🤝🏽🙂💔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺",  "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں",  "*😈✨آ تجــᷭھے خـــراب کــــروں💋🤤*",  "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", " جہاں پیاری لڑکیاں وہاں میں 🙂❤️🥀 " , "بھای جان گروپ میں گندی باتیں نهیں گریں🤧😳 " , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂🤣" , "دل بڑا ہونا چاہیے🙌😒منہ تو کھوتے کا v بڑا ہوتا ہے🤝🙂" , "بہت کر چکے منتیں تیری اب میں تمہیں اغوا کرو گا😒😂" , "ہے تمنا ہمیں تمہیں اپنا بنائیں🙊" , "کہتے ہیں زندگی سب کچھ سکھا دیتی ہے😾تے فیر مینوں انگلش کیوں نہیں سکھاندی🤧😒" , "چکن 🐔 کڑاہی جیسے خواب🧐ساگ 🌿 جیسی زندگی 😑🤐" ,  "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝" , "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊" , "میــــــرے نال ویا کــــــر لو 😊💔" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "𝐊𝐚𝐬𝐇 𝐇𝐚𝐦 𝐁 𝐊𝐢𝐬𝐢 𝐊𝐚𝐲 𝐂𝐫𝐮𝐬𝐇 𝐇𝐨𝐭𝐘 .🙂👑♥", "Ary yrr MaZak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow 1 PaPpi Idher d0o 1 PaPpi idher 😘" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Dekh lena 1 din mazak mazak may he sbsy handsome lrki pata longa🧐🙂", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara NH Hun is lya koi dost NH h 🙃🌚", "Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂", "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂",  "شــــــٹ اپــــ ہــــــوا بـــــــاز شــــــــــاپــــر 🙂💔",  "kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE 😗💚", "Allah kray tmhari shadi py Nadra ka photographer aye🙂🕺", "Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄", "Salyy tujhe koi janu nai kehtaa to idhar a ke bot bot krna LG Jata", "Hn bol hrammi a gaii yaad", "Teri janu kisi or sath busy to idhar mou mRNA a gyaa", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂",  "🤣آپ میرے ساتھ پھنس جاو🤣 نہ🤣آپ میرے نکھرے ایسے اٹھانا جیسے چرسی ساہیکل اٹھاتا ھے 🤣", "muaziz sarif aapka muhh relation ke liye naa kafi he shukriya🙂🤝", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂",  "Hn bol hrammi a gaii yaad",  "حـــکومـــت ســـے'تـــسدیــک شـــدا'حــرامــی 🙂", "Hn bol bot ki Jan IB a ak secret btaoo 😂", "AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸", "BuHt GrEeB huN 'JiSki JiTNi ToFeeQ Hai utNi 'ChuMiyA' DeTi JaYe😔🥲", "ThArKii LaRkiAn ReQ BhEj SaKti HeN (-🌚🦥💔", "Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)", "🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻", "⚠️*•❤🙂 Awj hum hai - kal HumhaRy بچـــــــــے  hOngy agAr Tum maaN jaO 🙂🌼", "-Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂", "SuNo Me OwnEr ki trf se Ek ZoR DaR ChuMi De RaHa HoN JaHa DiL KaRe Le LeNa (-😗🌚", "M❍aziz sarif ...🐻       i Love You..🙂♥", "Ya Allah MuJ PaR KiSi MaaLL DaR ANti Ka DiL A JaYe 🤌😞♥️", "Pyaar محـــــــــبـــت Sab دھــــــــوکہ Haiiw 😒😂مجـھـــــــے  pta لــــــــــــو abi bhiiw مـــــــوکـــا  haiiw😹🙊💋", "Dolut shorhat kya mein krni  jb tum khud he ameer hoo 😐🌚", "Pt jaOgii tw rishta du ga nai patogi tw chammat du ga 😹😐💔", "Tum mere dil me ayse aty ho jese Gurde me phatrii<<🥺💗", "_آو بھاگ کر شادی کر لیتے ہیں✨️😍😋🥺", "-Bilkul  سیاہ larkiyan bhi Chlein gi dOn't worry Come ib🙃", "Tery mast mast doo neen Kinni sohni hai teri nikki peen🌚🤌", "haiy ma sadky jawa teri masoom shaqal py 😂 chabal insan", "Bot nah bol oye ! Janu bol mjhy aur janu sy piyar sy bat kerty hai , rat ko kahan thy nazar nahi ay hawali py 😂", "Shaqal Sy masoom lgty ho 😂 btao kahi Ap ka ghar doup main to nahi", "kash tum single hoty to maza hi koch aur tha pagal insane 😂", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "haiy babu ny boliya hai shaid purpose kerna hai mjhy bolo bolo babu 😘", "Ary ghreeb awam roti banana ky liya athy main Pani ko istamal kerty ho 😂", "Ary chabli nah mar joh kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "Hy Ma Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Ja 😂", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jaan kia hail hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "ma ap ki ami ko btaou ga ap Facebook use kerty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 😂" ,  "esy nah dakho piyar ho jay ga 😂" , "Teri pic dakhna sy phly shukhr hai ma anda hu 😂" , "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata hai 😂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("ChaL NiKaL 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };

   
   if ((event.body.toLowerCase() == "Lanati bot") || (event.body.toLowerCase() == "lanati bot")) {
     return api.sendMessage("Aby Chuuu Tu LanTi Le KaB0ol kRr 🖐️🐾👣", threadID);
   };
  
   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("♥️𝐃𝐀𝐍𝐈𝐒𝐇 ꭗ 𝐌𝐈𝐒𝐇𝐈♥️ Is my Owner.. Btao kya bat hai 🤔🙄😒 bolo", threadID);
   };
if ((event.body.toLowerCase() == "Ganda bot") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("Tu Ganda tera pura khandan ganda😈", threadID);
   };

   if ((event.body.toLowerCase() == "Mishi") || (event.body.toLowerCase() == "amyy")) {
     return api.sendMessage("Mishi Mishi Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "Nice") || (event.body.toLowerCase() == "nice")) {
     return api.sendMessage("Me Hn hi itni achi sab log meri tareef karty hen 🙈🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Acha") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("Hanji or sunao Kya kar rhy ho aj kal", threadID);
   };

   if ((event.body.toLowerCase() == "Welcome") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("thankx Bhai❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Kuta") || (event.body.toLowerCase() == "kuti")) {
     return api.sendMessage("arry  to kutta lanti hain gali na dia kr meko😠 ", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "tu nikal")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
   };

if ((event.body.toLowerCase() == "Bat suno") || (event.body.toLowerCase() == "bat suno")) {
     return api.sendMessage("️BeheN Khulay Nhi HeN MuaF KaRi 🙏", threadID);
   };
   
   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("Ak Ankh Na mar chabal insaan warna dusri phor dn ga👊😕", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("JanU MuskRatY RahO asY 💞😘 ", threadID);
   };
   
   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Lgta ha Aj BrusH KiYa Hai😝", threadID);
   };
   
   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Han Han dekhe huye Hn Tere dant Parre marr😒🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "tharki") || (event.body.toLowerCase() == "Tharki bot")) {
     return api.sendMessage("Tu TharKi Tra Bap TharKi TeRa DaDa TharKi 🤬🤗", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("HansNy Ki Bhi Tameez Hoti Hai BehaYa😔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("😢 HosLa Rakho Dost 😢 Baat krnY K liye Mil jaY Ga Koi Na kOi😔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("Haye itni khushi Gf mil gai kya💋😜", threadID);
   };
   
   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("Bsh krdo Ziada Mar lii tharkia😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("Pehle  Brush Karke aa ajeeb si smail aa ri hai", threadID);
   };
   
   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("️️HaYee ma Sadky ummmmmmmaah 💋", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("awwww MY LovE UmmaH💙🙈", threadID);
   };
   
   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };
   
   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Yah ToTay Jesi Zuban Mt DiKha 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("0oo0o TeRa HaPpy BirthDay", threadID);
   };
   
   
   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("Oye Dadu Moh Seeda Kar Chwal Insan !!🔪?", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("Q Mood Khrb kR rahY hO BabY🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("️Are Are Meri JaaN Roote NOi Hai🥺🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "Lol")) {
     return api.sendMessage("Khud k0 kya legend samjhte ho 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand land mat kr yha brna niche fek dunga🙂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("HaYe Mas0om", threadID);
   };
   
   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️Teko kYa huwa ab😒🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ChaL Ja NaHa kRr Aa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("Aby Muu Band kRr Marcher Gus JayGa Muu Main 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "chumma") || (event.body.toLowerCase() == "chuma ")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deta🙈", threadID);
   };
   
   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("️Mere Samne apni Gandi zaban na nikala Kr😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Ye GanDi NiYat Sy Zuban Na DiKha 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy Ankhe KhoL 0or ZuBan Ander kRr WRna KaT DunGa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muu Na BaNa 😂 CarT0on 🤣", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SasTa Nasha KRr LiYa LagTa Hai 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("Wah Bhens Chor Phle GalTi kRo Phr Maskeen Sa Muu BaNa L0o😒😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("Tumhe to Rona bhi ni ata aao Me dekhati hu 😭😭😭😭😭😭😭😭😭 👈Asy roty Hn Chapri", threadID);
   };
   
   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("️Seedha Krle is Gandi C Shakl ko😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("Ab B0oL Na 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("Ab Tri Awaz Ai Na T0o Me Alfi Sy Band Krunga 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️Kya soch rahe ho etna , sochne ke liye dimag bhi hona chiye , wo hai kya apke pas🤨 🤔", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("️Kis ko Chup Krwa Rahe Ho Tharki insan,🤐😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("Han ab tumhe neend ai hogi Alsee ki Ulad😒🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("PhLe NaHa kRr Aa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("️KYa HuWa 😱 SheSha DeKh LiYa KYa 😳", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Aaise na dekh Ankhy Nikal k Gotiya khelo GI😑", threadID);
   };
   
   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Tu HaT Main DekhTa Hun 🧐🧐🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("Tri Toffee LaLi KiSi Ny J0o Asa Muu BaNa LiYa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("KYa Hai Auper 🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("Ye BuLL Jesa MuU Na BaNa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rhi Thi🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘 😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rhi Thi🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘 😘😘😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("Aww Ta Huwa BaBe", threadID);
   };
   
      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹️", threadID);
   };
   
      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("Ta HuWa My Love 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("awww 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("ChaL Hat Mre SaMny Mt ITra TeRa Muu Le KRr 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("Ohooo👊😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };
   
   
      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };
   
      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("Dur Fty Muh🖐️", threadID);
   };
   
      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("Aby Aesy Na Dekh 😕", threadID);
   };
   
      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("Aby Muu Band kRr Marcher Gus JayGa Muu Main 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("Bhoot Dekh liya🤣", threadID);
   };
   
      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("O Teri 😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("Abe Bhens Chor KYa ho GYa 😳😳😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("Tre Sar Me BumB Kis Ny PhoRa 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("Asa Muu Na BaNa 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };
   
      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("ChaL HaT NoTanGi 😫😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("Asa KYa DeKh LiYa 😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "hayee") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aww BaBe  SarDi Lag Rhi T0o MeRe PaSs Ajao 🙈😜", threadID);
   };
   
      if ((event.body.toLowerCase() == "queen Kon ha") || (event.body.toLowerCase() == "Queen kon ha")) {
     return api.sendMessage("Queen Bot ki Jan Ha😘😍", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Aaaaa Tho0oo", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Are Ja Na MeKo Be BeMar KRrna KYa 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "gando") || (event.body.toLowerCase() == "Gando")) {
     return api.sendMessage("Teri Ma Ki chut bsdke🤬👊", threadID);
   };
   
      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("️Ye Attitude apNy pas RakHa kr mujh sy apna ni Sambhlta 😏", threadID);
   };
   
      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Anek WaLa Jin 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "dafa ho") || (event.body.toLowerCase() == "Dafa ho")) {
     return api.sendMessage("Tu dafa ho salya", threadID);
   };
   
      if ((event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "Thanks")) {
     return api.sendMessage("Group MeN Any K Lie Ap Ki WaDi MehrbaNi", threadID);
   };
   
      if ((event.body.toLowerCase() == "lanati") || (event.body.toLowerCase() == "Lanati")) {
     return api.sendMessage("Same to you Chup Kr K Bay🙄", threadID);
   };
   
      if ((event.body.toLowerCase() == "mc") || (event.body.toLowerCase() == "Mc")) {
     return api.sendMessage("Tu chutiya chor maderchod kutti ka bacha", threadID);
   };
   
      if ((event.body.toLowerCase() == "shoni") || (event.body.toLowerCase() == "Shoni")) {
     return api.sendMessage("G bolo Meri Jan", threadID);
   };
   
      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };
   
      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };
   
      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };
   
         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
   };
   
      if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "No need")) {
     return api.sendMessage("SaDky❤️", threadID);
   };
   
      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
     return api.sendMessage("Bund Me LeLe ApNi Bhens Chor 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "👊") || (event.body.toLowerCase() == "👊")) {
     return api.sendMessage("MaR MaR KhoPri Tor KameeNe Ki 😕😈", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sch Me Bander He Hai 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "Chutiya") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Tu Hai ChuTiya 🙂 Main T0o BoT Hun Naw🥺😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "Mar ja")) {
     return api.sendMessage("Tu Mar Ja Bsdke😈", threadID);
   };
  
   if ((event.body.toLowerCase() == "Ok") || (event.body.toLowerCase() == "ok")) {
     return api.sendMessage("KYa Ok🙄 Haan", threadID);
   };

   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "Harami")) {
     return api.sendMessage("️Tu Harami ha me to bot hn😐😛", threadID);
   };

   if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("Han Ji 🙄 Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
   };

   if ((event.body.toLowerCase() == "Ganda bot") || (event.body.toLowerCase() == "Kuta bot")) {
     return api.sendMessage("️Tu ganda tera pura khandan Ganda 😒😐", threadID);
   };

   if ((event.body.toLowerCase() == "Bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID);
   };

   if ((event.body.toLowerCase() == "tharki") || (event.body.toLowerCase() == "Tharki")) {
     return api.sendMessage("Agli Br Tharki Bola Naw Tu Muh toor Du ga Bsdk 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "Fty muh") || (event.body.toLowerCase() == "dur fty muh")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `⭐💫${name}💫⭐, \n ♥️𝐃𝐀𝐍𝐈𝐒𝐇 ꭗ 𝐌𝐈𝐒𝐇𝐈♥️    ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }


