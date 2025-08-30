import { Game, Players, Inventory, LeaderBoard, Teams, Damage, Ui, Properties, GameMode, Spawns, Timers, Chat, MapEditor } from 'pixel_combats/room';
import { Color } from 'pixel_combats/basic';
import * as lib from './library.js';


lib.configure();

Teams.Get("Blue").Timers.Get("time").RestartLoop(1);
Teams.Get("Blue").Timers.Get("ящ").RestartLoop(120);
Teams.Get("Blue").Timers.Get("грузы").Restart(900);

var props = Properties.GetContext();
const html_enable = "false";

const gm=GameMode.Parameters; 

switch (gm.GetString("GAME_MODE")) {
 case 'NOOBS':
  var GAME_MODE_TYPE="Очень Легко", GAME_MODE_COLOR="00FF00", start_kit=6, spawns_cost=200, farm_boost=8, GIVE=500, bank_give=10, cost_boost=0.75, badge_bst=5, bost=0;
 break;
 case 'VERY_EZ': 
  var GAME_MODE_TYPE="Очень Легко", GAME_MODE_COLOR="00FF00", start_kit=6, spawns_cost=200, farm_boost=8, GIVE=500, bank_give=10, cost_boost=0.75, badge_bst=5, bost=0.1;
 break;
 case 'EZ': 
  var GAME_MODE_TYPE="Легко", GAME_MODE_COLOR="2E8B57", start_kit=3, spawns_cost=400, farm_boost=4, GIVE=50, bank_give=5, cost_boost=1, badge_bst=4, bost=0.2;
 break;
 case 'MEDIUM': 
  var GAME_MODE_TYPE="Средне", GAME_MODE_COLOR="FFD700", start_kit=2, spawns_cost=800, farm_boost=2, GIVE=25, bank_give=1, cost_boost=1, badge_bst=3, bost=0.3;
 break;
 case 'CLASSIC': 
  var GAME_MODE_TYPE="Классика", GAME_MODE_COLOR="00FFFF", start_kit=1, spawns_cost=400, farm_boost=1, GIVE=70, bank_give=1, cost_boost=1, badge_bst=1, bost=0.5;
 break;
 case "evol":
  var GAME_MODE_TYPE="Эво<quad>ю<quad>ия", GAME_MODE_COLOR="FFA500", start_kit=0.3, spawns_cost=10000, farm_boost=0.1, GIVE=0, bank_give=0.1, cost_boost=2, badge_bst=0.5, bost=50;
 break;
 case 'HARD': 
  var GAME_MODE_TYPE="Тяжело", GAME_MODE_COLOR="D2691E", start_kit=1, spawns_cost=1600, farm_boost=1, GIVE=5, bank_give=1, cost_boost=1, badge_bst=1.5, bost=0.6;
 break;
 case 'UNREAL': 
  var GAME_MODE_TYPE="Невозможно", GAME_MODE_COLOR="808080", start_kit=0.5, spawns_cost=4000, farm_boost=0.5, GIVE=5, bank_give=1, cost_boost=2, badge_bst=0.5, bost=1;
 break;
 case 'HARDCORE': 
  var GAME_MODE_TYPE="Ультра Хардкор", GAME_MODE_COLOR="800000", start_kit=0.5, spawns_cost=10000, farm_boost=0.5, GIVE=0, bank_give=1, cost_boost=2, badge_bst=0.5, bost=1.3;
 break; 
 case "hard":
  var GAME_MODE_TYPE="<quad>Сложно<quad>", GAME_MODE_COLOR="8ADHSJ", start_kit=0.2, spawns_cost=4000, farm_boost=0.1, GIVE=1, bank_give=0.2, cost_boost=1.25, badge_bst=1, bost=4;
 break;
 case "cosmic":
  var GAME_MODE_TYPE="Космическая", GAME_MODE_COLOR="000000", start_kit=0.3, spawns_cost=5000, farm_boost=0.1, GIVE=50, bank_give=0.1, cost_boost=1.5, badge_bst=1, bost=4;
 break;
};
var ecd1 = Math.random()*60+60,
ecd2 = Math.random()*240+240,
ecd3 = Math.random()*300+300,
ecd4 = Math.random()*600+600,
ecd5 = Math.random()*1800+1800;

 switch(gm.GetString("CD")){
  case "VSH":
   var ev_cd1 = ecd1, ev_cd2 = ecd1, ev_cd3 = ecd1, ev_cd4 = ecd1, ev_cd5 = ecd1, ev_cd6 = ecd1, ev_cd7 = ecd1;
  break;
  case "SH":
   var ev_cd1 = ecd2, ev_cd2 = ecd2, ev_cd3 = ecd2, ev_cd4 = ecd2, ev_cd5 = ecd2, ev_cd6 = ecd2, ev_cd7 = ecd2;
  break;
  case "MD": 
   var ev_cd1 = ecd3, ev_cd2 = ecd3, ev_cd3 = ecd3, ev_cd4 = ecd3, ev_cd5 = ecd3, ev_cd6 = ecd3, ev_cd7 = ecd3;
  break;
  case "LG":  
   var ev_cd1 = ecd4, ev_cd2 = ecd4, ev_cd3 = ecd4, ev_cd4 = ecd4, ev_cd5 = ecd4, ev_cd6 = ecd4, ev_cd7 = ecd4;
  break;
  case "VLG":
   var ev_cd1 = ecd5, ev_cd2 = ecd5, ev_cd3 = ecd5, ev_cd4 = ecd5, ev_cd5 = ecd5, ev_cd6 = ecd5, ev_cd7 = ecd5;
  break;
 };

Teams.Get("Blue").Properties.Get("sec").Value=1;
Teams.Get("Blue").Properties.Get("mins").Value=0;
Teams.Get("Blue").Properties.Get("hour").Value=0;
Teams.Get("Blue").Properties.Get("Scores").Value=5000;
Teams.Get("Blue").Properties.Get("Spawns").Value=5;

const rand = Math.round(Math.random()*100000000);

Chat.OnMessage.Add(function(ms){
 try {
  var p_id = ms.Sender,  p=Players.GetByRoomId(p_id), r=p.Properties, txt=ms.Text.trim(), y = Teams.Get("Blue").Timers();

  if(txt=="/кмд") {
   p.PopUp("<b><color=orange>чат комманды:</a>\n<color=cyan><i>/кмд</i> - выводит список команд доступный для вас</a>\n<a><i>/инфо</i> - выводит информацию о вас аналогичную доскам</a>\n<color=cyan><i>/хелп</i> - выводит справочник о подвале</a>\n<a><i>/баланс</i> - выводит ваш баланс пропусков и монет</a>\n<color=cyan><i>/рюкзак</i> - открывает ваш рюкзак с едой и питьем</a>\n<a><i>/магаз</i> - открывает список товаров в магазине</a>\n<color=cyan><i>/голод</i> - открывает меню голода</a>\n<a><i>/спам</i> - скрывает/раскрывает спам уведомления о голоде</a>\n<color=cyan><i>/класс</i> - открывает меню выбора класса</a>\n<a><i>/крипта</i> - чтобы узнать текущий курс всех крипта-валют в режиме</a>\n<color=cyan><i>/банк</i> - чтобы увидеть банк крипто-валют</a>\n<a>/прем - показывает стоимость вашего прогресса в премиум-очках</a>\n<color=cyan>/крафт - открывает меню крафта</a>\n<a>/навык - меню прокачки навыков</a>\n<color=cyan>/задание - открывает список активных заданий</a>\n\n<color=orange>Помог с чат-командами</a> - <i><color=yellow>Твой Отчим</a></i></b>");

   p.PopUp("<b>Рп комманды:\n!выпить водку(!водка)\n!выпить пиво(!пиво)\n!выпить воду(!вода)\n!выпить молоко(!молоко)\n!выпить сок(!сок)\n!съесть хлеб(!хлеб)\n!съеть тушонку(!тушонка)\n!съесть колбасу(!колбаса)\n!съесть бутер(!бутер)\n!съесть суп(!суп)\n!выпить дедовскую водку(!дедовская водка)\n\nпомогал с коммандами - Твой Отчим\n\n<size=5>чтобы узнавать новости о подвале и не только, переходите в мой телеграмм канал https://t.me/TankChanelPc2</size></b>");
  };

  if(txt=="/задание"){
   let q1 = props.Get("quest_1").Value == true ? "\n/задание(1) - Убить 30 игроков \n<size=10>Награда: 30к монет</size>" : "",
   q2 = props.Get("quest_2").Value == true ? "\n/задание(2) - Убить 10 игроков \n<size=10>Награда: 5к монет</size>" : "", 
   q3 = props.Get("quest_3").Value == true ? "\n/задание(3) - Продать 10 ящиков \n<size=10>Награда: 5к монет</size>" : "",
   q4 = props.Get("quest_4").Value == true ? "\n/задание(4) - Убить 50 игроков \n<size=10>Награда: 10к монет</size>" : "",
   q5 = props.Get("quest_5").Value == true ? "\n/задание(5) - Продать 50 ящиков \n<size=10>Награда: 500 пропусков</size>" : "", 
   q6 = props.Get("quest_6").Value == true ? "\n/задание(6) - Умереть 5 раз \n<size=10>Награда: 1к монет</size>" : "";

   p.PopUp(`/задание(0) - отменить задание${q1}${q2}${q3}${q4}${q5}${q6}.`);
  };

  if(txt=="/тип мира"){
   lib.world_type(p);
  };

  if(txt=="/навык"){
   p.PopUp("<b>Навыки:\n/навык(марадер) - прокачивает навык марадера\n<size=10>Для прокачки лвла требуется убивать</size>\n/навык(бронебой) - прокачивает навык бронебоя\n<size=10>Для прокачки лвла требуется наносить урон Танкам</size>\n/навык(торгаш) - прокачивает навык торговца\n<size=10>Для прокачки лвла требуется продавать ящики</size>\n/навык(защитник) - прокачивает навык защитник\n<size=10>Для прокчки лвла требуется получать урон</size>\n/навык(цыган) - прокачивает навык цыгана\n<size=10>для прокачки лвла нужно фармить с фармов деньги</size></b>");
   let naviks = r.Get("naviks").Value ? r.Get("naviks").Value : "Пока нету."
   p.PopUp(`<b>Навыки 10 лвла: ${naviks}</b>`);
  };

  if(txt=="/крафт"){
   p.PopUp("<b>/крафт(хлеб,колбаса,хлеб) - Крафт бутерброда\n/крафт(тушонка,колбаса) - крафт тушоночного супа\n/крафт(водка,водка) - дедовская водка\n\n<size=8>В будущем будет добавлено больше крафтов!</size></b>");
  }

  if(txt=="/прем"){
   let prems = Math.round(r.Scores.Value*bost/500000000+r.Spawns.Value*bost/10000000+r.Get("hp").Value*bost/50000+r.Get("badges").Value*bost/2); 

   p.PopUp(`<b><color=yellow>Ваш прогресс оценивается в ${prems} премов\nВаш статус: ${r.Get("shek").Value}\n<size=5>Айди сервера:${rand}</size></a></b>`);
   p.Ui.Hint.Value = `ваш прогресс оценивается в ${prems} премов\nВаш статус: ${r.Get("shek").Value}\nАйди сервера ${rand}`;
  };

  if(txt=="/кмд2"&&r.Get("cmds2").Value){
   p.PopUp("<b>Особые чат-команды:\n/скин(0/1/2) - меняет ваш скин(0-обычный,1-зомби,2-зек)\n/зомби(да/нет) - включает/выключает режим зомби для вас)\n/спавн - возвращает вас на спавн\n/buy(1) - водка(120000)\n/buy(7) - тушонка(80000)</b>");
  };

  if(txt=="/кмд+"&&r.Get("cmds+").Value){
   p.PopUp("<b>чат-команды+:\n/тп(1/2/3/4) - телепортирует вас в указанную локацию, если у вас есть к ней ключ(1-паркур,2-шахты,3-магаз полу бога,4-спец магаз)\n/зомби(вкл/выкл) - включает/выключает режим зомби для вас</b>");
  };

 if(txt=="/тп(1)"&&r.Get("cmds+").Value){
  lib.tp(p,50,"шахта","shah",true,"key1");  
 } 
 if(txt=="/тп(2)"&&r.Get("cmds+").Value){
  lib.tp(p,80,"паркур","par",false,"key2"); 
 };
 if(txt=="/тп(4)"&&r.Get("cmds+").Value){
  lib.tp(p,110,"спец. магаз","mag",true,"key3");
 };
 if(txt=="/тп(3)"&&r.Get("cmds+").Value){
  lib.tp(p,140,"магаз полу бога","pol",true,"key4");
 };
 
 if(txt=="/вкл"&&r.Get("cmds+").Value){
  r.Get("rage").Value=1;
  p.PopUp("Вы зомби!");
  p.Ui.Hint.Value="Вы зомби!";
 };

 if(txt=="/выкл"&&r.Get("cmds+").Value){
  r.Get("rage").Value=0;
  p.PopUp("Вы излечились!");
  p.Ui.Hint.Value="вы излечились!";
  p.Timers.Get("rage").Stop();
 };

 if(txt=="/скин(0)"&&r.Get("cmds2").Value){
   p.PopUp("Вы изменили свой скин на Обычный");
   r.Get("skin").Value=0;
  };
 if(txt=="/скин(1)"&&r.Get("cmds2").Value){
   p.PopUp("Вы изменили свой скин на Зомби");
   r.Get("skin").Value=1;
  };
 if(txt=="/скин(2)"&&r.Get("cmds2").Value){
   p.PopUp("Вы изменили свой скин на Зек");
   r.Get("skin").Value=2;
  };
 if(txt=="/зомби(да)"&&r.Get("cmds2").Value){
   p.PopUp("Вы теперь зомби на 5 минут");
   r.Get("rage").Value=1;
   p.Timers.Get("rage").Restart(300);
   p.Spawns.Spawn();
  };
 if(txt=="/зомби(нет)"&&r.Get("cmds2").Value){
   p.PopUp("Вы теперь игрок.");
   r.Get("rage").Value=0;
   p.Timers.Get("rage").stop();
   p.Spawns.Spawn();
  };
 if(txt=="/спавн"&&r.Get("cmds2").Value){
   p.PopUp("Вы вернулись на спавн");
   p.Spawns.Spawn();
  };

  if(txt=="!выпить водку"||txt=="!водка"){
   if(r.Get("водка").Value){
    p.PopUp("вы выпили водку!(-5)");
    p.Ui.Hint.Value="вы выпили водку!(-5)";
    r.Immortality.Value=true;
    p.Timers.Get("imo").Restart(5);
    r.Get("голод").Value-=5;
    r.Get("водка").Value--;
   }else p.PopUp("у вас нету водки");
  };

  if(txt=="!выпить пиво"||txt=="!пиво"){
   if(r.Get("пиво").Value){
    p.PopUp("вы выпили пиво!(-2)");
    p.Ui.Hint.Value="вы выпили пиво!(-2)";
    r.Immortality.Value=true;
    p.Timers.Get("imo").Restart(2);
    r.Get("пиво").Value--;
    r.Get("голод").Value-=2;
   }else p.PopUp("у вас нету пива");
  };

  if(txt=="!выпить молоко"||txt=="!молоко"){
   if(r.Get("молоко").Value){
    p.PopUp("вы выпили молоко!(0)");
    p.Ui.Hint.Value="вы выпили молоко!(0)";
    r.Get("молоко").Value--;
    r.Get("rage").Value=0;
    p.Timers.Get("rage").Stop();
    p.Timers.Get("imo").Stop();
   }else p.PopUp("у вас нету молока");
  };

  if(txt=="!выпить сок"||txt=="!сок"){    
   if(r.Get("сок").Value){
    p.PopUp("вы выпили сок!(+1)");
    p.Ui.Hint.Value="вы выпили сок!(+1)";
    r.Get("сок").Value--;
    r.Get("голод").Value++;
   }else p.PopUp("у вас нету сока");
  };

  if(txt=="!выпить воду"||txt=="!вода"){    
   if(r.Get("вода").Value){
    p.PopUp("вы выпили воду!(+2)");
    p.Ui.Hint.Value="вы выпили воду!(+2)";
    r.Get("вода").Value--;
    r.Get("голод").Value+=2;
   }else p.PopUp("у вас нету воды");
  };

  if(txt=="!съесть хлеб"||txt=="!хлеб") {
   if(r.Get("хлеб").Value){
    r.Get("хлеб").Value--;
    p.PopUp("вы съели хлеб!(+5)");
    p.Ui.Hint.Value="вы съели хлеб!(+5)";
    r.Get("голод").Value+=5;
   }else p.PopUp("у вас нету хлеба");
  };

  if(txt=="!съесть колбасу"||txt=="!колбаса"){        
   if(r.Get("колбаса").Value){
    r.Get("колбаса").Value--;
    p.PopUp("вы съели колбасу!(+3)");
    p.Ui.Hint.Value="вы съели хлеб!(+3)";
    r.Get("голод").Value+=3;
   }else p.PopUp("у вас нету колбасы");
  };

  if(txt=="!съесть тушонку"||txt=="!тушонка"){    
   if(r.Get("тушонка").Value){
    r.Get("тушонка").Value--;
    p.PopUp("вы съели тушонку!(+8)");
    p.Ui.Hint.Value="вы съели тушонку!(+8)";
    r.Get("голод").Value+=8;
   }else p.PopUp("у вас нету тушонки");
  };

  if(txt=="!съесть бутер"||txt=="!бутер") {
   if(r.Get("бутер").Value){
    r.Get("бутер").Value--;
    p.PopUp("вы съели бутер!(+7)"); 
    p.Ui.Hint.Value="вы съели бутер!(+7)";
    r.Get("голод").Value+=7;
   }else p.PopUp("у вас нету бутера");
  };

  if(txt=="!съесть суп"||txt=="!суп"){    
   if(r.Get("суп").Value){
    r.Get("суп").Value--;
    p.PopUp("вы съели суп!(+14)");
    p.Ui.Hint.Value="вы съели суп!(+14)";
    r.Get("голод").Value+=14;
   }else p.PopUp("у вас нету супа");
  };

  if(txt=="!выпить дедовскую водку"||txt=="!дедовская водка") {
   if(r.Get("дедовская водка").Value){
    r.Get("дедовская водка").Value--;
    p.PopUp("вы выпили дедовскую водку!(-13)");
     p.Ui.Hint.Value="вы выпили дедовскую водку!(-13)";
    r.Immortality.Value=true;
    p.Timers.Get("imo").Restart(10);
    r.Get("голод").Value-13;
   }else p.PopUp("у вас нету дедовской водки");
  };

  if(txt=="/инфо") {
   lib.info(p);
  };

  if(txt=="/рюкзак") {
   p.PopUp(`<b>Ваш рюкзак:\nВодка:${r.Get("водка").Value}\nПиво:${r.Get("пиво").Value}\nВода:${r.Get("вода").Value}\nСок:${r.Get("сок").Value}\nХлеб:${r.Get("хлеб").Value}\nКолбаса:${r.Get("колбаса").Value}\nТушонка:${r.Get("тушонка").Value}\nБутер:${r.Get("бутер").Value}\nСуп:${r.Get("суп").Value}\nДедовская водка:${r.Get("дедовская водка").Value}</b>`);
   p.PopUp(`<b>Зелья:\nзелье(щита1):${r.Get("зелье_щита1").Value}(1LVL)\n/зелье(щита2):${r.Get("зелье_щита2").Value}(2LVL)\n/зелье(щита3):${r.Get("зелье_щита3").Value}(3LVL)\n/зелье(денег1): ${r.Get("зелье_денег1").Value}(1LVL)\n/зелье(денег2): ${r.Get("зелье_денег2").Value}(2LVL)</b>`);
  };
  
  if(txt=="/класс"){
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
   p.PopUp("<b><i>/класс(киллер)</i> Класс: <i>Убийца</i>\n\nПолучает больше денег с убийств и урона по игрокам, получает меньше денег с фармов чем обычные люди</b>");
   p.PopUp("<b><i>/класс(фармер)</i> Класс: <i>Фармила</i>\n\nПолучает больше денег с фармов, но меньше денег с убийств и урона чем обычные игроки</b>");
  };

  if(txt=="/голод"){
   p.PopUp(`<b>Ваш голод:${r.Get("голод").Value}%\n\n<i>Примечание: голод падает каждые 5 минут по 2%, чем меньше процента голода тем меньше вы будете зарабатывать с фармов</i></b>`);
   p.Ui.Hint.Value=`ваш голод: ${r.Get("голод").Value}%`;
  };

  if(txt=="/магаз"){
   p.PopUp("<b>Список товаров:\n<i>/buy(1)</i> - водка(120000)\n<i>/buy(2)</i> - пиво(12000)\n<i>/buy(3)</i> - вода(3000)\n<i>/buy(4)</i> - сок(4000)\n<i>/buy(5)</i> - молоко(6000)\n<i>/buy(6)</i> - хлеб(50000)\n<i>/buy(7)</i> - тушонка(80000)\n<i>/buy(8)</i> - колбаса(40000)</b>");
  };

  if(txt=="/крипта"){
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
   p.PopUp("<b><i>/крипта(bitcoin,buy/sell)</i> - Крипта: БитКоин, купить/продать, текущий курс: <color=yellow>"+p.Team.Properties.Get("well_b").Value+"</a>\n\n<i>/крипта(efir,buy/sell)</i> - Крипта: Эфир, купить/продать, текущий курс: <color=yellow>"+p.Team.Properties.Get("well_e").Value+"</a>\n\n<i>/крипта(dogcoin,buy/sell)</i> - Крипта: ДогКоин, купить/продать, текущий курс: <color=yellow>"+p.Team.Properties.Get("well_d").Value+"</a></b>");

   p.PopUp("<b>Ваш баланс крипты:\n<i>БитКоин: "+r.Get("bitcoin").Value+"\nЭфир: "+r.Get("efir").Value+"\nДогКоин: "+r.Get("dogcoin").Value+"</i></b>");
  };

  if(txt=="/банк"){
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
   p.PopUp("<b>Баланс крипто-банка:\nБитКоин: <color=yellow>"+p.Team.Properties.Get("bank_b").Value+"</a>\nЭфир: <color=yellow>"+p.Team.Properties.Get("bank_e").Value+"</a>\nДогКоин: <color=yellow>"+p.Team.Properties.Get("bank_d").Value+"</a>\n\n/банк(in/out,efir/dogcoin/bitcoin)\n<size=10>пример: /банк(in,bitcoin) - вложили в банк 1 биткоин</size></b>");

  };
  
  switch(txt){
   case "/задание(0)":
    if(r.Get("quest").Value){
     r.Get("quest_" + r.Get("quest").Value).Value=null;
     props.Get("quest_" + r.Get("quest").Value).Value=true;
     r.Get("quest").Value=null;     
     p.PopUp("Задание отменено.");
    }else p.PopUp("У вас нет активного задания.");
   break;
   case "/задание(1)":
    if(r.Get("quest").Value){
     if(props.Get("quest_1").Value){
      r.Get("quest_1").Value=true;
      props.Get("quest_1").Value=true;
      r.Get("quest").Value=1;     
      p.PopUp("Задание принято.");
     }else p.PopUp("Задания пока нет.");
    }else p.PopUp("У вас уже есть задание.");
   break;
   case "/задание(2)":
    if(r.Get("quest").Value){
     if(props.Get("quest_2").Value){
      r.Get("quest_2").Value=true;
      props.Get("quest_2").Value=true;
      r.Get("quest").Value=2;     
      p.PopUp("Задание принято.");
     }else p.PopUp("Задания пока нет.");
    }else p.PopUp("У вас уже есть задание.");
   break;
   case "/задание(3)":
    if(r.Get("quest").Value){
     if(props.Get("quest_3").Value){
      r.Get("quest_3").Value=true;
      props.Get("quest_3").Value=true;
      r.Get("quest").Value=3;     
      p.PopUp("Задание принято.");
     }else p.PopUp("Задания пока нет.");
    }else p.PopUp("У вас уже есть задание.");
   break;
   case "/задание(4)":
    if(r.Get("quest").Value){
     if(props.Get("quest_4").Value){
      r.Get("quest_4").Value=true;
      props.Get("quest_4").Value=true;
      r.Get("quest").Value=4;     
      p.PopUp("Задание принято.");
     }else p.PopUp("Задания пока нет.");
    }else p.PopUp("У вас уже есть задание.");
   break;
   case "/задание(5)":
    if(r.Get("quest").Value){
     if(props.Get("quest_5").Value){
      r.Get("quest_5").Value=true;
      props.Get("quest_5").Value=true;
      r.Get("quest").Value=5;     
      p.PopUp("Задание принято.");
     }else p.PopUp("Задания пока нет.");
    }else p.PopUp("У вас уже есть задание.");
   break;
   case "/задание(6)":
    if(r.Get("quest").Value){
     if(props.Get("quest_6").Value){
      r.Get("quest_6").Value=true;
      props.Get("quest_6").Value=true;
      r.Get("quest").Value=6;     
      p.PopUp("Задание принято.");
     }else p.PopUp("Задания пока нет.");
    }else p.PopUp("У вас уже есть задание.");
   break;
   case "/навык(марадер)":
    if(!r.Get("r_navik").Value){
     if(r.Get("r_марадер_lvl").Value<10){
     r.Get("r_navik").Value = "марадер";
     r.Get("r_" + r.Get("r_navik").Value).Value = 1;
     if(!r.Get("r_" + r.Get("navik").Value + "_lvl").Value){
      r.Get("r_" + r.Get("r_navik").Value+"_lvl").Value = 1;
     };
     r.Get("prog").Value=0;
     r.Get("r_need").Value = 30 * r.Get("r_" + r.Get("r_navik").Value + "_lvl").Value;
     p.PopUp("Вы теперь изучаете навык "+r.Get("r_navik").Value+".\nДля следущего лвла нужно убить еще "+r.Get("r_need").Value+" игроков.");
      p.Ui.Hint.Value=`вы теперь изучаете навык ${r.Get("r_navik").Value}`;
     }else{
      p.PopUp("Вы уже прокачали этот навык.");
      p.Ui.Hint.Value="вы уже прокачали этот навык.";
     };
    }else{
     p.PopUp("Нельзя прокачивать сразу два навыка.");
    p.Ui.Hint.Value="нельзя прокачивать сразу два навыка.";
    };
   break;
   case "/навык(бронебой)":
    if(!r.Get("r_navik").Value){
     if(r.Get("r_бронебой_lvl").Value<10){
     r.Get("r_navik").Value = "бронебой";
     r.Get("r_" + r.Get("r_navik").Value).Value = 1;
     if(!r.Get("r_" + r.Get("navik").Value + "_lvl").Value){
      r.Get("r_" + r.Get("r_navik").Value+"_lvl").Value = 1;
     };
     r.Get("prog").Value=0;
     r.Get("r_need").Value = 2000 * r.Get("r_" + r.Get("r_navik").Value + "_lvl").Value;
     p.PopUp("Вы теперь изучаете навык "+r.Get("r_navik").Value+".\nДля следующего лвла надо нанести еще "+r.Get("r_need").Value+" Урона");
     p.Ui.Hint.Value=`вы теперь изучаете навык ${r.Get("r_navik").Value}`;
     }else{
      p.PopUp("Вы уже прокачали этот навык.");
      p.Ui.Hint.Value="вы уже прокачали этот навык.";
     };
    }else{
     p.PopUp("Нельзя прокачивать сразу два навыка.");
    p.Ui.Hint.Value="нельзя прокачивать сразу два навыка.";
    };
   break;
   case "/навык(торгаш)":
    if(!r.Get("r_navik").Value){
     if(r.Get("r_торгаш_lvl").Value<10){
     r.Get("r_navik").Value = "торгаш"
     r.Get("r_" + r.Get("r_navik").Value).Value = 1;
     if(!r.Get("r_" + r.Get("navik").Value + "_lvl").Value){
      r.Get("r_" + r.Get("r_navik").Value+"_lvl").Value = 1;
     };
     r.Get("prog").Value=0;
     r.Get("r_need").Value = 15 * r.Get("r_" + r.Get("r_navik").Value + "_lvl").Value;
     p.PopUp("Вы теперь изучаете навык "+r.Get("r_navik").Value+".\nДля следующего лвла надо продать еще "+r.Get("r_need").Value+" ящиков");
     p.Ui.Hint.Value=`вы теперь изучаете навык ${r.Get("r_navik").Value}`;
     }else{
      p.PopUp("Вы уже прокачали этот навык.");
      p.Ui.Hint.Value="вы уже прокачали этот навык.";
     };
    }else{
     p.PopUp("Нельзя прокачивать сразу два навыка.");
    p.Ui.Hint.Value="нельзя прокачивать сразу два навыка.";
    };
   break;
   case "/навык(защитник)":
    if(!r.Get("r_navik").Value){
    if(r.Get("r_защитник_lvl").Value<10){
     r.Get("r_navik").Value = "защитник";
     r.Get("r_" + r.Get("r_navik").Value).Value = 1;
     if(!r.Get("r_" + r.Get("navik").Value + "_lvl").Value){
      r.Get("r_" + r.Get("r_navik").Value+"_lvl").Value = 1;
     };
     r.Get("prog").Value=0;
     r.Get("r_need").Value = 1000 * r.Get("r_" + r.Get("r_navik").Value + "_lvl").Value;
     p.PopUp("Вы теперь изучаете навык "+r.Get("r_navik").Value+".\nДля следующего лвла надо принять еще "+r.Get("r_need").Value+" Урона");
     p.Ui.Hint.Value=`вы теперь изучаете навык ${r.Get("r_navik").Value}`;
     }else{
      p.PopUp("Вы уже прокачали этот навык.");
      p.Ui.Hint.Value="вы уже прокачали этот навык.";
     };
    }else{
     p.PopUp("Нельзя прокачивать сразу два навыка.");
    p.Ui.Hint.Value="нельзя прокачивать сразу два навыка.";
    };
   break;
   case "/навык(цыган)":
    if(!r.Get("r_navik").Value){
     if(r.Get("r_цыган_lvl").Value<10){
     r.Get("r_navik").Value = "цыган";
     r.Get("r_" + r.Get("r_navik").Value).Value = 1;
     if(!r.Get("r_" + r.Get("navik").Value + "_lvl").Value){
      r.Get("r_" + r.Get("r_navik").Value+"_lvl").Value = 1;
     };
     r.Get("prog").Value=0;
     r.Get("r_need").Value = 20 * r.Get("r_" + r.Get("r_navik").Value + "_lvl").Value;
     p.PopUp("Вы теперь изучаете навык "+r.Get("r_navik").Value+".\nДля следующего лвла нужно фармить еще "+r.Get("r_need").Value+" раз");
     p.Ui.Hint.Value=`вы теперь изучаете навык ${r.Get("r_navik").Value}`;
     }else{
      p.PopUp("Вы уже прокачали этот навык.");
      p.Ui.Hint.Value="вы уже прокачали этот навык.";
     };
    }else{
     p.PopUp("Нельзя прокачивать сразу два навыка.");
    p.Ui.Hint.Value="нельзя прокачивать сразу два навыка.";
    };
   break;
   case "/крафт(хлеб,колбаса,хлеб)":
    if(r.Get("хлеб").Value>=2){ 
     if(r.Get("колбаса").Value){
      r.Get("бутер").Value++; 
      r.Get("колбаса").Value--;
      r.Get("хлеб").Value-=2;
     }else p.PopUp("недостаточно колбасы");
    }else p.PopUp("недостаточно хлеба");
   break;
   case "/крафт(тушонка,колбаса)":
    if(r.Get("тушонка").Value){ 
     if(r.Get("колбаса").Value){
      r.Get("суп").Value++; 
      r.Get("колбаса").Value--;
      r.Get("тушонка").Value--;
     }else p.PopUp("недостаточно колбасы");
    }else p.PopUp("недостаточно тушонки");
   break;
   case "/крафт(водка,водка)":
    if(r.Get("водка").Value>=2){ 
     r.Get("дедовская водка").Value++;
     r.Get("водка").Value-=2;
    }else p.PopUp("недостаточно водки");
   break;
   case "/buy(1)":
    if(r.Scores.Value>=120000){
     r.Scores.Value-=120000;
     r.Get("водка").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>");
   break;
   
   case "/buy(2)":
    if(r.Scores.Value>=12000){
     r.Scores.Value-=12000;
     r.Get("пиво").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>");
   break;

   case "/buy(3)":
    if(r.Scores.Value>=3000){
     r.Scores.Value-=3000;
     r.Get("вода").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>");
   break;

   case "/buy(4)":
    if(r.Scores.Value>=4000){
     r.Scores.Value-=4000;
     r.Get("сок").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>");
   break;

   case "/buy(4)":
    if(r.Scores.Value>=6000){
     r.Scores.Value-=6000;
     r.Get("молоко").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>");
   break;

   case "/buy(6)":
    if(r.Scores.Value>=50000){
     r.Scores.Value-=50000;
     r.Get("хлеб").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>");
   break;

   case "/buy(7)":
    if(r.Scores.Value>=80000){
     r.Scores.Value-=80000;
     r.Get("тушонка").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>");
   break;

   case "/buy(8)":
    if(r.Scores.Value>=40000){
     r.Scores.Value-=40000;
     r.Get("колбаса").Value++;
     p.PopUp("<color=lime><b>Куплено!</b></a>");
    }else p.PopUp("<color=red><b>Недостаточно денег!</b></a>"); 
   break;

   case "/крипта(bitcoin,buy)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Scores.Value>= p.Team.Properties.Get("well_b").Value){
     r.Get("bitcoin").Value++;
     r.Scores.Value-= p.Team.Properties.Get("well_b").Value;
     p.PopUp("<b>Вы купили БитКоин!</b>");
    }else p.PopUp(`<b>Вам нужно еще ${p.Team.Properties.Get("well_b").Value - r.Scores.Value} монет.</b>`);
   break;

   case "/крипта(bitcoin,sell)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Get("bitcoin").Value>=1){
     r.Scores.Value+= p.Team.Properties.Get("well_b").Value;
     r.Get("bitcoin").Value--;
     p.PopUp("<b>Вы продали БитКоин!</b>");
    }else p.PopUp("<b>У вас не хватает БитКоинов.</b>");
   break;

   case "/крипта(efir,buy)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Scores.Value>= p.Team.Properties.Get("well_e").Value){
     r.Get("efir").Value++;
     r.Scores.Value-= p.Team.Properties.Get("well_e").Value;
     p.PopUp("<b>Вы купили Эфир!</b>");
    }else p.PopUp(`<b>Вам нужно еще ${p.Team.Properties.Get("well_e").Value - r.Scores.Value} монет.</b>`);
   break;

   case "/крипта(efir,sell)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Get("efir").Value>=1){
     r.Scores.Value+= p.Team.Properties.Get("well_e").Value;
     r.Get("efir").Value--;
     p.PopUp("<b>Вы продали Эфир!</b>");
    }else p.PopUp("<b>У вас не хватает эфира.</b>");
   break;

   case "/крипта(dogcoin,buy)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Scores.Value>= p.Team.Properties.Get("well_d").Value){
     r.Get("dogcoin").Value++;
     r.Scores.Value-= p.Team.Properties.Get("well_d").Value;
     p.PopUp("<b>Вы купили ДогКоин!</b>");
    }else p.PopUp(`<b>Вам нужно еще ${p.Team.Properties.Get("dogcoin").Value - r.Scores.Value} монет</b>`);
   break;

   case "/крипта(dogcoin,sell)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Get("dogcoin").Value>=1){
     r.Scores.Value+= p.Team.Properties.Get("well_d").Value;
     r.Get("dogcoin").Value--;
     p.PopUp("<b>Вы продали ДогКоин!</b>");
    }else p.PopUp("<b>У вас не хватает ДогКоинов</b>");
   break;

   case "/банк(in,efir)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Get("efir").Value>=1){
     r.Get("efir").Value--;
     p.Team.Properties.Get("bank_e").Value++;
     p.PopUp("<b>Внесен Эфир в банк.</b>");
    }else p.PopUp("<b>Не Хватает Эфира.</b>");
   break;

   case "/банк(out,efir)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(p.Team.Properties.Get("bank_e").Value >= 1){
     r.Get("efir").Value++;
     p.Team.Properties.Get("bank_e").Value--;
     p.PopUp("<b>Эфир изъят из банка.</b>");
    }else p.PopUp("<b>Не хватает Эфира в банке.</b>");
   break;

   case "/банк(in,bitcoin)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Get("bitcoin").Value>=1){
     r.Get("bitcoin").Value--;
     p.Team.Properties.Get("bank_b").Value++;
     p.PopUp("<b>Внесен БитКоин в банк.</b>");
    }else p.PopUp("<b>Не хватает БитКоинов.</b>");
   break;

   case "/банк(out,bitcoin)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(p.Team.Properties.Get("bank_b").Value >= 1){
     r.Get("bitcoin").Value++;
     p.Team.Properties.Get("bank_b").Value--;
     p.PopUp("<b>БитКоин изъят из банка</b>");
    }else p.PopUp("<b>Не хватает БитКоинов</b>");
   break;

   case "/банк(in,dogcoin)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(r.Get("dogcoin").Value>=1){
     r.Get("dogcoin").Value--;
     p.Team.Properties.Get("bank_d").Value++;
     p.PopUp("<b>Внесен ДогКоин в банк</b>");
    }else p.PopUp("<b>Не хватает ДогКоинов</b>");
   break;

   case "/банк(out,efir)":
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
    if(p.Team.Properties.Get("bank_d").Value >= 1){
     r.Get("dogcoin").Value++;
     p.Team.Properties.Get("bank_d").Value--;
     p.PopUp("<b>ДогКоин изъят из банка</b>");
    }else p.PopUp("<b>Не хватает ДогКоинов</b>");
   break;
  };

  if(txt=="/баланс"){
   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"&&!r.Get("cmds2").Value) return;
   p.PopUp("<b>ваш баланс:\nмонеты:"+r.Scores.Value+"\nпропуски"+r.Spawns.Value+"</b>");
  };

  if(txt=="/хелп"){

   if(GAME_MODE_TYPE=="<quad>Сложно<quad>"){
p.PopUp("<b><color=red><quad>ВЫЖИВАЙ<quad></a></b>");
   } else lib.Help(p);

  };

  if(txt=="/спам"){
   if(!r.Get("hide_spam").Value){
    r.Get("hide_spam").Value=1;
    p.PopUp("<b>Спам скрыт</b>");
   }else{
    r.Get("hide_spam").Value=0;
    p.PopUp("<b>Спам раскрыт</b>");
   };
  };

  if(txt=="/подарок(обычный)"){
   r.Get("подарок").Value++;
   p.PopUp("<b>Вы получили <a>Обычный</a> подарок!</b>");  
  };
  if(txt=="/подарок(необычный)"){
   r.Get("подарок_необ").Value++;
   p.PopUp("<b>Вы получили <color=lime>Необычный</a> подарок!</b>");  
  };
  if(txt=="/подарок(легендарный)"){
   r.Get("подарок_легенд").Value++;
   p.PopUp("<b>Вы получили <color=yellow>Легендарный</a> подарок!</b>");  
  };

 if(r.Get("adm").Value){
  var y = Timers.GetContext();
  if(txt=="/инвиз(да)"){
   p.Ui.Hint.Value = Math.random();
   Teams.Get("Blue").Remove(p);
   p.Spawns.Spawn();
  };
  if(txt=="/инвиз(нет)"){
   p.Ui.Hint.Value = Math.random();
   Teams.Get("Blue").Add(p);
   p.Spawns.Spawn();
  };
  if(txt=="/ивент(0)"){
   props.Get("event").Value=0;
   props.Get("ev_hint").Value="Ивента нету.";
   props.Get("ev_farm").Value=1;
   props.Get("ev_dmg").Value=1;
   props.Get("ev_skid").Value=1;
   if(gm.GetBool("hard_points")){
    if(props.Get("ev_hp").Value){
     props.Get("hard_points").Value-=5;
    };
   };
   props.Get("ev_hp").Value=0;
Damage.GetContext().FriendlyFire.Value = true;
  Ui.GetContext().Hint.Reset();

var ecd1 = Math.random()*60+60,
ecd2 = Math.random()*240+240,
ecd3 = Math.random()*300+300,
ecd4 = Math.random()*600+600,
ecd5 = Math.random()*1800+1800;

 switch(gm.GetString("CD")){
  case "VSH":
   var ev_cd1 = ecd1, ev_cd2 = ecd1, ev_cd3 = ecd1, ev_cd4 = ecd1, ev_cd5 = ecd1, ev_cd6 = ecd1, ev_cd7 = ecd1;
  break;
  case "SH":
   var ev_cd1 = ecd2, ev_cd2 = ecd2, ev_cd3 = ecd2, ev_cd4 = ecd2, ev_cd5 = ecd2, ev_cd6 = ecd2, ev_cd7 = ecd2;
  break;
  case "MD": 
   var ev_cd1 = ecd3, ev_cd2 = ecd3, ev_cd3 = ecd3, ev_cd4 = ecd3, ev_cd5 = ecd3, ev_cd6 = ecd3, ev_cd7 = ecd3;
  break;
  case "LG":  
   var ev_cd1 = ecd4, ev_cd2 = ecd4, ev_cd3 = ecd4, ev_cd4 = ecd4, ev_cd5 = ecd4, ev_cd6 = ecd4, ev_cd7 = ecd4;
  break;
  case "VLG":
   var ev_cd1 = ecd5, ev_cd2 = ecd5, ev_cd3 = ecd5, ev_cd4 = ecd5, ev_cd5 = ecd5, ev_cd6 = ecd5, ev_cd7 = ecd5;
  break;
 };

if(gm.GetBool("event_m")) y.Get("ev_m").RestartLoop(ev_cd1);
if(gm.GetBool("event_d")) y.Get("ev_d").RestartLoop(ev_cd2);
if(gm.GetBool("event_s")) y.Get("ev_s").RestartLoop(ev_cd3);
if(gm.GetBool("event_p")) y.Get("ev_p").RestartLoop(ev_cd4);
if(gm.GetBool("event_n")) y.Get("ev_n").RestartLoop(ev_cd5);
if(gm.GetBool("event_o")) y.Get("ev_o").RestartLoop(ev_cd6);
if(gm.GetBool("event_i")) y.Get("ev_i").RestartLoop(ev_cd7);
  };
  if(txt=="/ивент(1)"){
    if(!props.Get("event").Value){
      lib.export_event_run("farm",2,"×2 деньги с фармов");
    }else p.Ui.Hint.Value = "ивент уже идет.";
  };
  if(txt=="/ивент(2)"){
    if(!props.Get("event").Value){
      lib.export_event_run("dmg",2,"×2 деньги с урона и убийств");
    }else p.Ui.Hint.Value = "ивент уже идет.";
  };
  if(txt=="/ивент(3)"){
    if(!props.Get("event").Value){
      lib.export_event_run("skid", 0.5,"Скидка"); 
    }else p.Ui.Hint.Value = "ивент уже идет.";
  };
  if(txt=="/ивент(4)"){
    if(!props.Get("event").Value){
      lib.export_event_run("farm", 0.25,"Неурожай");
    }else p.Ui.Hint.Value = "ивент уже идет.";
  };
  if(txt=="/ивент(5)"){
    if(!props.Get("event").Value){
      lib.export_event_run("peace",0,"Мирный режим");
    }else p.Ui.Hint.Value = "ивент уже идет.";
  };
  if(txt=="/ивент(6)"){
    if(!props.Get("event").Value){
      lib.export_event_run("hp",5, "Ополчение");
    }else p.Ui.Hint.Value = "ивент уже идет.";
  };
  if(txt=="/ивент(7)"){
    if(!props.Get("event").Value){
      lib.export_event_run("skid",2, "Инфляция");
    }else p.Ui.Hint.Value = "ивент уже идет.";
  };
  if(txt.startsWith("/груз")){
   y.Get("груз_ушел").Stop();     
   y.Get("грузы").Stop();
   y.Get("груз_скоро").Stop();
   y.Get("груз_прибыл").Stop();
   if(txt.endsWith("(1)")){
    lib.export_air(1,129,true);
   };

  };
 };
 } catch (e) {
  p.PopUp(e.name + "\n" +e.message);
 };
});

Ui.GetContext().TeamProp1.Value={
 Team:"Blue",
 Prop:"hint1"
};

Properties.OnTeamProperty.Add(lib.tprop);

Properties.OnPlayerProperty.Add(lib.pprop);

Damage.OnKill.Add(lib.kill);

Damage.OnDamage.Add(lib.dmg);

Spawns.GetContext().OnSpawn.Add(lib.spw);

Timers.OnTeamTimer.Add(lib.ttmr);

Timers.OnPlayerTimer.Add(lib.tmr);

Teams.OnRequestJoinTeam.Add(lib.join);

Players.OnPlayerConnected.Add(lib.load_all);

if(html_enable == "true"){
 LeaderBoard.PlayerLeaderBoardValues=[
  {
   Value:"rang",
   ShortDisplayName:"<b>Р</b>анг"
  },
  {
   Value:"shek",
   ShortDisplayName:"<b>С</b>татус"
  },
  {
   Value:"kd",
   ShortDisplayName:"<b>KD</b>"
  },
  {
   Value:"Spawns",
   ShortDisplayName:"<b>П</b>ропуски"
  },
  {
   Value:"Scores",
   ShortDisplayName:"<b>М</b>онеты"
  }
 ];
}else{
 LeaderBoard.PlayerLeaderBoardValues=[
  {
   Value:"shek",
   ShortDisplayName:"Статус"
  },
  {
   Value:"kd",
   ShortDisplayName:"KD"
  },
  {
   Value:"Spawns",
   ShortDisplayName:"Пропуски"
  },
  {
   Value:"Scores",
   ShortDisplayName:"Монеты"
  }
 ];
};


function rangs(p){
  var r = p.Properties;
  if(p.id=="BF9ADAE3A25D0699"||p.id=="31206529CAE4C78F"||p.id=="2C21DCBB715CA1AA"||p.id=="956ABCCCD26A2474"||p.id=="AA857F85B79C39AA"||p.id=="76E342993F96B017"||p.id=="AA857F85B79C39AA"||p.id=="E7A0652989F17932"){
   lib.export_start(p, 5000, 100, 2, 400);
   r.Get("first_join").Value=1;
   r.Get("melee").Value=1;
   r.Get("gun").Value=1;
   r.Get("cmds2").Value=1;
   r.Get("cmds+").Value=1;
   r.Get("adm").Value=1;
   p.PopUp("<b>/кмд2 для особых чат-команд\n кмд+ для чат-команд+</b>");
  };

 if(p.id=="CD8BA5F2ABD9BBDA"||p.id=="99A25FA624FE5342"||p.id=="1DC1820D08403129"||p.id=="C1B5B19FC19AC747"||p.id=="8972D9E2F6573D5F"||p.id=="11192596DE4401EA"||p.id=="EA673076CF669F1"){   
  lib.export_start(p, 200000000, 50000000, 0, 100);
  r.Get("first_join").Value=1;
  lib.export_admin(p,true);
  r.Get("cmds2").Value=1;
  r.Get("cmds+").Value=1;
  p.PopUp("<b>/кмд2 для особых чат-команд\n/кмд+ для чат-команд+</b>");
 };

 lib.export_start(p,1500,5,0,100);
 r.Get("first_join").Value=1;
 p.Damage.DamageIn.Value=true;
};

lib.cArea({
 name: "spawn_clear",
 view: false,
 color: new Color(0,0,0,0);
});

lib.cArea({
 name: "класс-танк",
 view: true,
 color: new Color(0,0,1,0),
 enter: function(p,a){
  var r=p.Properties;
  p.Ui.Hint.Value="вы правда хотите выбрать класс-танк? тогда зайдите в зону повторно!";
  r.Get("switch_class_farm").Value=0;
  r.Get("switch_class_kill").Value=0;
  r.Get("switch_class_basic").Value=0;
  if(r.Get("switch_class_tank").Value){
   r.Get("switch_class_tank").Value=0;
   r.Get("class").Value = "<b><color=gray><i>Tank</i></a></b>";
   r.Get("farmer_bst").Value=0.5;
   r.Get("killer_bst").Value=0.25;
   r.Get("tanker").Value=1;
   rangs(p);
   r.Get("hp").Value=200;
   p.Spawns.SpawnPointsGroups.Add(1);
   p.Spawns.CustomSpawnPoints.Clear();
   p.Spawns.Spawn();
   p.Ui.Hint.Value="что дает этот класс?\nДает больше хп и имеет сопротивление урону, также в магазине можно купить до 5к хп, но из оружия есть автомат(не беск), пест(беск) и нож, также получает меньше денег с урона, убийств и фармов";
  };
  r.Get("switch_class_tank").Value++;
 };
});

lib.cArea({
 name: "класс-фармер",
 view: true,
 color: new Color(0,1,0,0),
 enter: function(p,a){
  var r=p.Properties;
  p.Ui.Hint.Value="вы правда хотите выбрать класс-фармер? тогда зайдите в зону повторно!";
  r.Get("switch_class_tank").Value=0;
  r.Get("switch_class_kill").Value=0;
  r.Get("switch_class_basic").Value=0;
  if(r.Get("switch_class_farm").Value){
   r.Get("switch_class_farm").Value=0;
   r.Get("class").Value = "<b><color=lime><i>Farmer</i></a></b>";
   r.Get("killer_bst").Value=0.25;
   r.Get("farmer_bst").Value=5;
   r.Get("farmer").Value=1;
   rangs(p);
   p.Spawns.SpawnPointsGroups.Add(1);
   p.Spawns.CustomSpawnPoints.Clear();
   p.Spawns.Spawn();
   p.Ui.Hint.Value="что дает этот класс?\nДает больше денег с фармов и имеет скидку на получение бустеров на фарм-зоны, может купить: нож и пест(не беск), также может купить только 1к хп, также получает меньше денег с урона и убийств";
  };
  r.Get("switch_class_farm").Value++;
 };
});

lib.cArea({
 name: "класс-киллер",
 view: true,
 color: new Color(1,0,0,0),
 enter: function(p,a){
  var r=p.Properties;
  p.Ui.Hint.Value="вы правда хотите выбрать класс-киллер? тогда зайдите в зону повторно!";
  r.Get("switch_class_tank").Value=0;
  r.Get("switch_class_farm").Value=0;
  r.Get("switch_class_basic").Value=0;
  if(r.Get("switch_class_kill").Value){
   r.Get("switch_class_kill").Value=0;
   r.Get("class").Value="<b><color=red><i>Killer</i></a></b>";
   r.Get("killer_bst").Value=15;
   r.Get("farmer_bst").Value=0.25;
   r.Get("killer").Value=1;
   rangs(p);
   p.Spawns.SpawnPointsGroups.Add(1);
   p.Spawns.CustomSpawnPoints.Clear();
   p.Spawns.Spawn();
   p.Ui.Hint.Value="что дает этот класс?\nДает больше денег с убийств и урона и имеет скидку на получение бустеров на деньги с убийств и урона, может купить: нож и пест(беск), основа(беск), также может купить только 2.5к хп, также получает меньше денег с фармов";
  };
  r.Get("switch_class_kill").Value++;
 };
});

lib.cArea({
 name: "обычный",
 view: true,
 color: new Color(30,15,0,0),
 enter: function(p,a){
  var r=p.Properties;
  p.Ui.Hint.Value="вы правда хотите выбрать обычный тип? тогда зайдите в зону повторно!";
  r.Get("switch_class_tank").Value=0;
  r.Get("switch_class_farm").Value=0;
  r.Get("switch_class_kill").Value=0;
  if(r.Get("switch_class_basic").Value){
   r.Get("switch_class_basic").Value=0;
   r.Get("class").Value="<b><color=white><i>Basic</i></a></b>";
   r.Get("killer_bst").Value=1;
   r.Get("farmer_bst").Value=1;
   rangs(p);
   p.Spawns.SpawnPointsGroups.Add(1);
   p.Spawns.CustomSpawnPoints.Clear();
   p.Spawns.Spawn();
   p.Ui.Hint.Value="что дает этот тип?\nу данного типа нету никаких необычных способностей и тд, просто сбалансированный геймплей";
  };
  r.Get("switch_class_basic").Value++;
 };
});

if(gm.GetBool("hard_points")){

lib.cArea({
 name: "пожерт1",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  var r=p.Properties;
  if(r.Get("donate_type").Value == "Scores"){
   if(r.Scores.Value >= r.Get("donate_amount_Scores").Value){
    props.Get("hard_points").Value += Math.round(r.Get("donate_amount_Scores").Value/5000000);
    r.Scores.Value -= r.Get("donate_amount_Scores").Value;
    p.Ui.Hint.Value = `Вы пожертвовали ${r.Get("donate_amount_Scores").Value} монет, и повысили Силу Ополчена на ${Math.round(r.Get("donate_amount_Scores").Value/5000000)}`;
   }else p.Ui.Hint.Value="Недостаточно денег!";
  }else if(r.Get("donate_type").Value == "Spawns"){
   if(r.Spawns.Value >= r.Get("donate_amount_Spawns").Value){
    props.Get("hard_points").Value += Math.round(r.Get("donate_amount_Spawns").Value/90000);
    r.Spawns.Value -= r.Get("donate_amount_Spawns").Value;
    p.Ui.Hint.Value = `Вы пожертвовали ${r.Get("donate_amount_Spawns").Value} пропусков, и повысили Силу Ополчена на ${Math.round(r.Get("donate_amount_Spawns").Value/90000)}`;
   }else p.Ui.Hint.Value="недостаточно пропусков!";
  }else{
   p.Ui.Hint.Value = "Сумма и валюта для пожертвования не выбраны.";
  };
 };
});

lib.cArea({
 name: "пожерт2",
 view: true,
 color: new Color(0, 1, 1, 0),
 enter: function(p,a){
    var r=p.Properties;
    if(r.Get("donate_type").Value=="Spawns"){
      r.Get("donate_type").Value="Scores";
      p.Ui.Hint.Value="валюта для пожертвования: Монеты";
    }else{
      r.Get("donate_type").Value = "Spawns";
      p.Ui.Hint.Value="валюта для пожертвования: Пропуски";
    };
  };
});

var donate_amounts_scor = [5e6, 1e7, 15e6, 2e7, 25e6, 3e7, 35e6];
var donate_amounts_spaw = [9e4, 18e4, 27e4, 36e4, 45e4, 54e4, 63e4];

lib.cArea({
 name: "пожерт3",
 view: true,
 color: new Color(0, 1, 0, 0),
 enter: function(p,a){
    var r=p.Properties, typ=r.Get("donate_amount");
    if(r.Get("donate_type").Value=="Scores"){
      typ.Value++;
      if(typ.Value >= donate_amounts_scor.length) typ.Value=1;
      r.Get("donate_amount_Scores").Value = donate_amounts_scor[typ.Value-1];
      p.Ui.Hint.Value=`Сумма пожертвования: ${donate_amounts_scor[typ.Value-1]}(${Math.round(donate_amounts_scor[typ.Value-1]/5000000)}) монет.`;
    }else{
      typ.Value++;
      if(typ.Value >= donate_amounts_spaw.length) typ.Value=1;
      r.Get("donate_amount_Spawns").Value = donate_amounts_spaw[typ.Value-1];
      p.Ui.Hint.Value=`Сумма пожертвования: ${donate_amounts_spaw[typ.Value-1]}(${Math.round(donate_amounts_spaw[typ.Value-1]/90000)}) пропусков.`;
    };
  };
});

};

lib.cArea({
 name: "кейс1_да",
 view: false,
 color: new Color(0, 0, 0, 0);
});

lib.cArea({
 name: "кейс2_да",
 view: false,
 color: new Color(0, 0, 0, 0);
});

lib.cArea({
 name: "кейс3_да",
 view: false,
 color: new Color(0, 0, 0, 0);
});

lib.cArea({
 name: "кейс4_да",
 view: false,
 color: new Color(0, 0, 0, 0);
});

lib.cArea({
 name: "кейс5_да",
 view: false,
 color: new Color(0, 0, 0, 0);
});

lib.cArea({
 name: "кейс_хинт",
 view: false,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  if(props.Get("груз_скоро").Value){
   p.Ui.Hint.Value="Это знак того, что возможно сюда скоро приземлится груз с припасами.";
  };
 };
});

lib.cArea({
  name: "кейс1",
  view: false,
  color: new Color(0, 1, 0, 0),
  enter: function(p,a){
    case_zones(p,a);
  };
});

lib.cArea({
  name: "кейс2",
  view: false,
  color: new Color(0, 1, 0, 0),
  enter: function(p,a){
    case_zones(p,a);
  };
});

lib.cArea({
  name: "кейс3",
  view: false,
  color: new Color(0, 1, 0, 0),
  enter: function(p,a){
    case_zones(p,a);
  };
});

lib.cArea({
  name: "кейс4",
  view: false,
  color: new Color(0, 1, 0, 0),
  enter: function(p,a){
    case_zones(p,a);
  };
});

lib.cArea({
  name: "кейс5",
  view: false,
  color: new Color(0, 1, 0, 0),
  enter: function(p,a){
    case_zones(p,a);
  };
});

function case_zones(p,a){
  var r=p.Properties;    
  if(props.Get("груз_открыт_"+a.name).Value > 0){
    props.Get("груз_открыт_"+a.Name).Value--;
    var kace = r.Get("kace_chance");
    kace.Value = Math.random() * 100;
    if(kace.Value < 20){
      case_chance(p, 50000, "basic", "Scores", "50000 монет!");
    }else if(kace.Value >= 20 && kace.Value < 50){
      case_chance(p, 20000, "basic", "Scores", "20000 монет!");
    }else if(kace.Value >= 50 && kace.Value < 70){
      case_chance(p, 100000, "basic", "Scores", "100000 монет!");
    }else if(kace.Value >= 70 && kace.Value < 95){
      case_chance(p, 5000000, "basic", "Scores", "5000000 Монет!");
    }else if(kace.Value >= 90){
      case_chance(p, 0, "basic", "", "Ничего");
    }else{

    };
  }else if(props.Get("грузы_хинт").Value) p.Ui.Hint.Value = "Груз пустой.";
};

function case_chance(p, amount, mode, type, hint){
  r.Get("_case_chance").Value=mode;
  mod=r.Get("_case_chance").Value;

  if(mod=="poison"){
    r.Get("poisons_amount").Value += amount;
    r.Get(type).Value++;
    p.Timers.Get("poisons").RestartLoop(30);
    p.Ui.Hint.Value=`вам выпало зелье: ${hint}`;
  }else if(mod=="basic"){
    r.Get(type).Value += amount;
    p.Ui.Hint.Value=`вам выпало: ${hint}`;
  };
};

lib.cArea({
 name: "ящик",
 view: true,
 color: new Color(0, 1, 0, 0),
 enter: function(p,a){
  var r=p.Properties;
  p.Ui.Hint.Value="ожидайте следующего появления ящика!";
  if(p.Team.Properties.Get(`ящик${a.Name}`).Value) return;
  p.Ui.Hint.Value="у вас уже есть ящик!";
  if(r.Get("ящ").Value) return;
  r.Get("ящ").Value=1;
  p.Team.Properties.Get(`ящик${a.Name}`).Value=1;
  p.Ui.Hint.Value="ящик собран!";
 };
});

lib.cArea({
 name: "надпись",
 view: true,
 color: new Color(1, 1, 1, 0),
 enter: function(p,a){
  p.Ui.Hint.Value = `${a.Name}`;
 };
});

var rnd_scr_cr = [500, 1000, 1500, 3000, 5000, 7500, 10000, 15000, 30000, 35000, 40000, 50000], rnd_spw_cr = [10,15,30,50,60,70,90,100,120,125,130,150];

lib.cArea({
 name: "пр2",
 view: true,
 color: new Color(0, 1, 0, 0),
 enter: function(p){
  var r=p.Properties;
  if(r.Get("ящ").Value){
   r.Get("ящ").Value=0;
   p.Ui.Hint.Value="вы продали ящик!";
   r.Get("%_crate").Value=Math.random()*100;
   r.Get("rand_crate").Value = Math.round(Math.random()*10)+1 * r.Get("prc_luck_bst").Value;
   if(r.Get("%_crate").Value<80){
    r.Scores.Value += rnd_scr_cr[r.Get("rand_crate").Value] * r.Get("fLvl").Value * r.Get("r_торгаш_lvl").Value;
    p.Ui.Hint.Value += "Вы получили монеты: "+rnd_scr_cr[r.Get("rand_crate").Value] * r.Get("fLvl").Value * r.Get("r_торгаш_lvl").Value;
   }else if(r.Get("%_crate").Value>=80){
    r.Spawns.Value += rnd_spw_cr[r.Get("rand_crate").Value];
    p.Ui.Hint.Value += "Вы получили пропуски: "+rnd_spw_cr[r.Get("rand_crate").Value];
   };
   if(r.Get("r_navik").Value=="торгаш"){
    r.Get("prog").Value++;
    p.Ui.Hint.Value+=`\nпрогресс навыка:\n${r.Get("prog").Value}/${r.Get("r_need").Value}\n${r.Get("r_торгаш_lvl").Value}`;
    if(r.Get("prog").Value >= r.Get("r_need").Value){
     r.Get("prog").Value=0;
     r.Get("r_торгаш_lvl").Value++;
     r.Get("r_need").Value = 15 * r.Get("r_торгаш_lvl").Value;
     p.Ui.Hint.Value+="лвл повышен.";
     if(r.Get("r_торгаш_lvl").Value>=10){
      r.Get("navik").Value=null;
      r.Get("prog").Value=null;
      r.Get("r_need").Value=null;
      r.Get("naviks").Value+=", торгаш";
      badge(p,"Торгаш","b",40000,1500);
      p.PopUp("Навык прокачен до 10 лвла.");
     };
    };
   };
  } else p.Ui.Hint.Value="у вас нету ящика!";
 };
});

lib.cArea({
 name: "руда",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  switch(a.Name){
   case "булыжник":
    lib.mine(p,50000,"камень",0,"leaf");
   break;
   case "железо":   
    lib.mine(p,1500000,"железо",1,"acorn");   
   break;
   case "золото": 
    lib.mine(p,4000000,"золото",2,"eye"); 
   break;
   case "алмаз": 
    lib.mine(p,85000000,"алмаз",3,"skull"); 
   break;
   case "медь": 
    lib.mine(p,85000000,"медь",1,"slime"); 
   break;
   case "кристалл": 
    lib.mine(p,3700000,"кристалл",4, "powder");
   break;
  };
 };
});

lib.cArea({
 name: "булыжник",
 view: true,
 color: new Color(128,128,128,0),
 enter: function(p,a){
  var r=p.Propeties, q = props.Get("булыжник_"+a.Name);
  if(q.Value){
   if(r.Get("pick").Value>=0){
    q.Value--;
    r.Get("булыжник_bag").Value++;
    r.Get("")
   }else p.Ui.Hint.Value="у вас недостаточно хороша кирка!";
  }else p.Ui.Hint.Value="Этот булыжник уже собран";
 };
});

lib.cArea({
 name: "пр",
 view: true,
 color: new Color(0, 1, 0, 0),
 enter: function(p,a){
  var r=p.Properties;
  p.Ui.Hint.Value="у вас нету руд!";
  if(!r.Get("sale1").Value) return;
  r.Scores.Value+=r.Get("sale1").Value * (r.Get("bst_mine").Value+1);
  r.Get("sale1").Value=0;
  r.Get("mine1").Value=0;
  p.Ui.Hint.Value=`вы продали ${r.Get("sale2").Value}`;
 };
});

lib.cArea({
 name: "тп",
 view: true,
 color: new Color(0, 0, 0, 0),
 enter: function(p,a){
  switch(a.Name){
   case "шахта":
    lib.tp(p,50,"шахта","shah",true,"key1");   
   break;
   case "паркур":    
    lib.tp(p,80,"паркур","par",false,"key2"); 
   break;
   case "магаз":
    lib.tp(p,110,"спец. магаз","mag",true,"key3");
   break;
   case "полу магаз": 
    lib.tp(p,140,"магаз полу бога","pol",true,"key4");
   break;
  };
 };
});

lib.cArea({
 name: "п1",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  switch(a.Name){
   case "паркур1_1":
    lib.parcour(p,"farm",0.25,"фарм");
   break;
   case "паркур1_2":
    lib.parcour(p,"farm",0.75,"фарм");
   break;
   case "паркур1_3":
    lib.parcour(p,"farm",1.25,"фарм");
   break;
   case "паркур1_4":
    lib.parcour(p,"farm",1.75,"фарм");
   break;
   case "паркур1_5":
    lib.parcour(p,"farm",2.5,"фарм");
   break;
  };
 };
});

lib.cArea({
 name: "п2",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  switch(a.Name){
   case "паркур2_1":
    lib.parcour(p,"kill",5,"убийства");
   break;
   case "паркур2_2":
    lib.parcour(p,"kill",7,"убийства");
   break;
   case "паркур2_3":
    lib.parcour(p,"kill",10,"убийства");
   break;
   case "паркур2_4":
    lib.parcour(p,"kill",15,"убийства");
   break;
   case "паркур2_5":
    lib.parcour(p,"kill",20,"убийства");
   break;
  };
 };
});

lib.cArea({
 name: "п3",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  switch(a.Name){
   case "паркур3_1":
    lib.parcour(p,"dmg",3,"урон");
   break;
   case "паркур3_2":
    lib.parcour(p,"dmg",7,"урон");
   break;
   case "паркур3_3":
    lib.parcour(p,"dmg",15,"урон");
   break;
   case "паркур3_4":
    lib.parcour(p,"dmg",20,"урон");
   break;
   case "паркур3_5":
    lib.parcour(p,"dmg",28,"урон");
   break;
  };
 };
});

lib.cArea({
 name: "п4",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  switch(a.Name){
   case "паркур4_1":
    lib.parcour(p,"luck",1,"удача");
   break;
   case "паркур4_2":
    lib.parcour(p,"luck",2,"удача");
   break;
   case "паркур4_3":
    lib.parcour(p,"luck",4,"удача");
   break;
   case "паркур4_4":
    lib.parcour(p,"luck",6,"удача");
   break;
   case "паркур4_5":
    lib.parcour(p,"luck",9,"удача");
   break;
  };
 };
});

lib.cArea({
 name: "п5",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  lib.parcour(p,2000000);
 };
});

lib.cArea({
 name: "шоп",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  lib.buy(p);
 };
});

lib.cArea({
 name: "шоп2",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  lib.spez_buy(p);
 };
});

lib.cArea({
 name: "шоп3",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  lib.polu_bog_buy(p);
 };
});

lib.cArea({
 name: "шоп4",
 view: true,
 color: new Color(30, 15, 0, 0),
 enter: function(p,a){
  lib.bog(p);
 };
});


lib.cArea({
 name: "след",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Next(p,"след");
 };
});

lib.cArea({
 name: "пред",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Prev(p,"пред");
 };
});

lib.cArea({
 name: "след2",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Next(p,"след2");
 };
});

lib.cArea({
 name: "пред2" 
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Prev(p,"пред2");
 };
});

lib.cArea({
 name: "след3",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Next(p,"след3");
 };
});

lib.cArea({
 name: "пред3",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Prev(p,"пред3");
 };
});

lib.cArea({
 name: "след4",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Next(p,"след4");
 };
});

lib.cArea({
 name: "пред4",
 view: true,
 color: new Color(1, 0, 0, 0),
 enter: function(p,a){
  lib.Prev(p,"пред4");
 };
});

lib.cArea({
 name: "банк1",
 view: true,
 color: new Color(0, 1, 1, 0),
 enter: function(p,a){
  var r=p.Properties;
  r.Get("mode").Value = r.Get("mode").Value=="Spawns" ? "Scores" : "Spawns";

  r.Get("ty0").Value = r.Get("mode").Value=="Spawns" ? "Пропуски" : "Монеты";

  p.Ui.Hint.Value=`Режим:${r.Get("ty0").Value}`;
 };
});

lib.cArea({
 name: "банк2",
 view: true,
 color: new Color(1, 1, 0, 0),
 enter: function(p,a){
  var r=p.Properties,tr=p.Team.Properties;
  if(r.Get("mode").Value=="Scores"){
   if(r.Scores.Value>=500){
    tr.Get("Scores").Value+=500;
    r.Scores.Value-=500;
    p.Ui.Hint.Value=`вы внесли 500 монет в банк!`;
   } 
   else p.Ui.Hint.Value=`не хватает ${500-r.Scores.Value} монет!`;
  } 
  else
  {
   if(r.Spawns.Value){
    tr.Get("Spawns").Value++;
    r.Spawns.Value--;
    p.Ui.Hint.Value=`вы внесли 1 пропуск в банк!`;
   } 
   else p.Ui.Hint.Value=`не хватает пропусков!`;
  };
 };
});

lib.cArea({
 name: "банк3",
 view: true,
 color: new Color(0, 1, 0, 0),
 enter: function(p,a){
  var r=p.Properties,tr=p.Team.Properties;
  if(r.Get("mode").Value=="Scores"){
   if(tr.Get("Scores").Value>=500){
    tr.Get("Scores").Value-=500;
    r.Scores.Value+=500;
    p.Ui.Hint.Value=`вы изъяли 500 монет из банка!`;
   } 
   else p.Ui.Hint.Value=`не хватает монет в банке!`;
  } 
  else
  {
   if(tr.Get("Spawns").Value>=1){
    tr.Get("Spawns").Value--;
    r.Spawns.Value++;
    p.Ui.Hint.Value=`вы изъяли 1 пропуск из банка!`;
   } 
   else p.Ui.Hint.Value=`не хватает пропусков в банке!`;
  };
 };
});

lib.cArea({
 name: "дост", 
 view: true,
 color: new Color(1, 1, 1, 0),
 enter: function(p,a){ 
  lib.info(p);
 };
});

lib.cArea({
 name: "give",
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){
  lib.give_area(p);
 };
});

lib.cArea({
 name: "фарм1", 
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,1,5);
 };
});

lib.cArea({
 name: "фарм2",
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,2,10);
 };
});

lib.cArea({
 name: "фарм3", 
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,3,25);
 };
});

lib.cArea({
 name: "фарм4",
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,4,40);
 };
});

lib.cArea({
 name: "фарм5", 
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,5,55);
 };
});

lib.cArea({
 name: "фарм6",
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,6,60);
 };
});

lib.cArea({
 name: "фарм7", 
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,7,75);
 };
});

lib.cArea({
 name: "фарм8",
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,8,80);
 };
});

lib.cArea({
 name: "фарм9",
 view: true,
 color: new Color(255, 0, 255, 0),
 enter: function(p,a){ 
  lib.farm(p,9,150);
 };
});

if(GameMode.Parameters.GetBool("block")){
 lib.cArea({
  name: "блоки", 
  view: true,
  color: new Color(0, 0, 1, 0),
  enter: function(p,a){ 
   lib.inv(p,"блоки");
  };
 });
};

if(GameMode.Parameters.GetBool("melee")){
 lib.cArea({
  name: "нож", 
  view: true,
  color: new Color(0, 0, 1, 0),
  enter: function(p,a){ 
   lib.inv(p,"нож");
  };
 });
};

if(GameMode.Parameters.GetBool("gun")){
 lib.cArea({
  name: "пест", 
  view: true,
  color: new Color(0, 0, 1, 0),
  enter: function(p,a){ 
   lib.inv(p,"пест");
  };
 });
};

if(GameMode.Parameters.GetBool("main")){
 lib.cArea({
  name: "основа", 
  view: true,
  color: new Color(0, 0, 1, 0),
  enter: function(p,a){ 
   lib.inv(p,"основу");
  };
 });
};

if(GameMode.Parameters.GetBool("ex")){
 lib.cArea({
  name: "грены",
  view: true,
  color: new Color(255, 255, 0, 0),
  enter: function(p,a){ 
   lib.inv(p,"грены");
  };
 });
};
