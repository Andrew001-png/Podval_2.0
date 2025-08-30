import { Color } from 'pixel_combats/basic';
import * as room from 'pixel_combats/room';
import * as team from './team.js';

const gm=room.GameMode.Parameters; 
const props=room.Properties.GetContext();

switch (gm.GetString("GAME_MODE")) {
 case 'NOOBS': 
  var GAME_MODE_TYPE="Для Нубов", GAME_MODE_COLOR="0000FF", start_kit=10, spawns_cost=150, farm_boost=15, GIVE=50000, bank_give=50, cost_boost=0.2, badge_bst=0;
 break;
 case 'VERY_EZ': 
  var GAME_MODE_TYPE="Очень Легко", GAME_MODE_COLOR="00FF00", start_kit=6, spawns_cost=200, farm_boost=8, GIVE=500, bank_give=10, cost_boost=0.4, badge_bst=5;
 break;
 case 'EZ': 
  var GAME_MODE_TYPE="Легко", GAME_MODE_COLOR="2E8B57", start_kit=3, spawns_cost=400, farm_boost=4, GIVE=50, bank_give=5, cost_boost=0.8, badge_bst=4;
 break;
 case 'MEDIUM': 
  var GAME_MODE_TYPE="Средне", GAME_MODE_COLOR="FFD700", start_kit=2, spawns_cost=800, farm_boost=2, GIVE=25, bank_give=1, cost_boost=0.4, badge_bst=3;
 break;
 case 'CLASSIC': 
  var GAME_MODE_TYPE="Классика", GAME_MODE_COLOR="00FFFF", start_kit=1, spawns_cost=400, farm_boost=1, GIVE=70, bank_give=1, cost_boost=1, badge_bst=1;
 break;
 case "evol":
  var GAME_MODE_TYPE="Эво<quad>ю<quad>ия", GAME_MODE_COLOR="FFA500", start_kit=0.3, spawns_cost=10000, farm_boost=0.1, GIVE=0, bank_give=0.1, cost_boost=2.25, badge_bst=0.5;
 break;
 case 'HARD': 
  var GAME_MODE_TYPE="Тяжело", GAME_MODE_COLOR="D2691E", start_kit=1, spawns_cost=1600, farm_boost=1, GIVE=5, bank_give=1, cost_boost=1, badge_bst=1.5;
 break;
 case 'UNREAL':   
  var GAME_MODE_TYPE="Невозможно", GAME_MODE_COLOR="808080", start_kit=0.5, spawns_cost=4000, farm_boost=0.5, GIVE=5, bank_give=1, cost_boost=1.5, badge_bst=0.5;
 break;
 case 'HARDCORE': 
  var GAME_MODE_TYPE="Ультра Хардкор", GAME_MODE_COLOR="800000", start_kit=0.5, spawns_cost=10000, farm_boost=0.5, GIVE=0, bank_give=1, cost_boost=1.5, badge_bst=0.5;
 break; 
 case "hard":
  var GAME_MODE_TYPE="<quad>'Сложно'<quad>", GAME_MODE_COLOR="8ADHSJ", start_kit=0.2, spawns_cost=4000, farm_boost=0.1, GIVE=1, bank_give=0.2, cost_boost=2, badge_bst=1;
 break;
 case "cosmic":
  var GAME_MODE_TYPE="Космическая", GAME_MODE_COLOR="000000", start_kit=0.3, spawns_cost=5000, farm_boost=0.1, GIVE=50, bank_give=0.1, cost_boost=2.25, badge_bst=1;
 break;
};

 switch(gm.GetString("CD")){
  case "VSH":
   var ev_cd1 = Math.random()*60+60, ev_cd2 = Math.random()*60+60, ev_cd3 = Math.random()*60+60, ev_cd4 = Math.random()*60+60, ev_cd5 = Math.random()*60+60, ev_cd6 = Math.random()*60+60, ev_cd7 = Math.random()*60+60;
  break;
  case "SH":
   var ev_cd1 = Math.random()*240+240, ev_cd2 = Math.random()*240+240, ev_cd3 = Math.random()*240+240, ev_cd4 = Math.random()*240+240, ev_cd5 = Math.random()*240+240, ev_cd6 = Math.random()*240+240, ev_cd7 = Math.random()*240+240;
  break;
  case "MD": 
   var ev_cd1 = Math.random()*300+300, ev_cd2 = Math.random()*300+300, ev_cd3 = Math.random()*300+300, ev_cd4 = Math.random()*300+300, ev_cd5 = Math.random()*300+300, ev_cd6 = Math.random()*300+300, ev_cd7 = Math.random()*300+300;
  break;
  case "LG":  
   var ev_cd1 = Math.random()*600+600, ev_cd2 = Math.random()*600+600, ev_cd3 = Math.random()*600+600, ev_cd4 = Math.random()*600+600, ev_cd5 = Math.random()*600+600, ev_cd6 = Math.random()*600+600, ev_cd7 = Math.random()*600+600;
  break;
  case "VLG":
   var ev_cd1 = Math.random()*1800+1800, ev_cd2 = Math.random()*1800+1800, ev_cd3 = Math.random()*1800+1800, ev_cd4 = Math.random()*1800+1800, ev_cd5 = Math.random()*1800+1800, ev_cd6 = Math.random()*1800+1800, ev_cd7 = Math.random()*1800+1800;
  break;
 };

 const html_enable = "false";

function set_inventory() {
 const context = room.Inventory.GetContext();
 context.Main.Value = false;
 context.Secondary.Value = false;
 context.Melee.Value = false;
 context.Explosive.Value = false;
 context.Build.Value = false;
};

export function shop_class(p,clas){
   r.Get("class_type_start").Value = clas;
   cl = r.Get("class_type_start").Value;
   if(cl == "tank"){
      shopp(p,1,"Нож",600,"Scores",0,1, "basic");
      shopp(p,2,"Пест",1500,"Scores",0,1, "basic");
      shopp(p,3,"Основа",8000,"Scores",0,1, "basic");
      shopp(p,4,"Беск. Пест",6000,"Scores", 1,1,"basic");
      shopp(p,6,"Пропуски",400,"Scores",0,0, "basic");
      shopp(p,7,"Броня(+50хп)",19000, "Scores",0,0,"basic");
      shopp(p,8,"Броня(+5% сопр.)", 50000,"Scores",0,0,"basic");
      shopp(p,9,"Броня(+200макс.хп)",80000, "Scores",0,0,"basic");
      shopp(p,10,"×2 деньги с убийств",75000, "Scores",1,1,"basic");
      shopp(p,11,"×2 деньги с урона",59000, "Scores",1,1,"basic");
      shopp(p,12,"×3 деньги с урона", 80000,"Scores",2,1,"basic");
      shopp(p,13,"лвл фарма",78000, "Scores",0,1,"basic");
   }else if(cl == "farm"){




   }else if(cl == "kill"){




   }else{


   };
};

var START_KIT = {
 PROP: ["need","opit","build_count","good","bad","navik","new","bst1","bst2","farm_bst","водка","пиво","вода","сок","хлеб","колбаса","тушонка","бутер","суп","дедовская водка","farm_off","голод","badges","r_цыган_lvl","r_торгаш_lvl","prc_farm_bst","prc_kill_bst","prc_dmg_bst","prc_luck_bst"],
 AMOUNT: [3,0,30,1,0,1,"Начало[★]",1,1,1,1,2,5,3,2,3,5,2,0,0,1,50,0,1,1,1,1,1,1]
};

var Adm_props = ["Pipette", "FloodFill", "FillQuad", "RemoveQuad", "BalkLenChange", "FlyEnable", "SetSkyEnable", "GenMapEnable", "ChangeCameraPointsEnable", "QuadChangeEnable", "BuildModeEnable", "CollapseChangeEnable", "RenameMapEnable", "ChangeMapAuthorsEnable", "LoadMapEnable", "ChangeSpawnsEnable", "BuildRangeEnable", "FlyEnable"];

function start(p,scr,spw,skin,hp){
 var r=p.Properties;
 if(gm.GetBool("MELEE_BST") || GAME_MODE_TYPE=="Для Нубов") r.Get("melee").Value=1;
 if(GAME_MODE_TYPE!=="<quad>'Сложно'<quad>" && GAME_MODE_TYPE!=="Эво<quad>ю<quad>ия") p.Timers.Get("голод").RestartLoop(300);

 else p.Timers.Get("голод").RestartLoop(160);
 p.Timers.Get("p_hint").RestartLoop(3);

room.Ui.GetContext(room.Players.Get(p.id)).TeamProp2.Value={Team: "Blue",Prop: "p_hint"+p.id};

 p.Spawns.CustomSpawnPoints.Add(90,90,90,0);
 p.Ui.Hint.Value="Выберите себе тип игры!\n\nВыбор будет влиять на прохождение, магазин и итоговый статус";

 if(!r.Get("first_join").Value){
  r.Spawns.Value=spw*start_kit;
  r.Scores.Value=scr*start_kit;
  r.Get("skin").Value=skin;
  r.Get("hp").Value = (hp * props.Get("type_hp").Value);
  r.Get("hp").Value = (hp * props.Get("type_hp").Value);
  r.Get("maxhp").Value = (400 * props.Get("type_hp").Value);
  r.Get("maxhp").Value = (400 * props.Get("type_hp").Value);
  r.Get("fLvl").Value=1;
  

  START_KIT.PROP.forEach(function (prop, index) {
    p.Properties.Get(prop).Value = START_KIT.AMOUNT[index];
  });

  shk(p,"Бомж","#00FFFF");
  r.Get("подарок").Value=1;
  r.Get("подарок_необ").Value=0;
  r.Get("подарок_легенд").Value=0;
  r.Get("melee").Value = props.Get("type_guns").Value;
  r.Get("gun").Value = props.Get("type_guns").Value;
  
  r.Get("rid").Value=p.IdInRoom;

  if(gm.GetBool("hard_points")){
   if(r.Get("hp").Value>=400){
    props.Get("hard_points").Value++;
    r.Get("hard_points").Value++;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("hp").Value>=800){
    props.Get("hard_points").Value++;
    r.Get("hard_points").Value++;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("hp").Value>=1500){
    props.Get("hard_points").Value++;
    r.Get("hard_points").Value++;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("bst").Value){
    props.Get("hard_points").Value++;
    r.Get("hard_points").Value++;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("melee").Value){
    props.Get("hard_points").Value+=0.2;
    r.Get("hard_points").Value+=0.2;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("gun").Value){
    props.Get("hard_points").Value+=0.3;
    r.Get("hard_points").Value+=0.3;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("ex").Value){
    props.Get("hard_points").Value+=0.6;
    r.Get("hard_points").Value+=0.6;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("main").Value){
    props.Get("hard_points").Value+=0.5;
    r.Get("hard_points").Value+=0.5;
    r.Get("lich_voen").Value+=0.25;
   };
   if(r.Get("fly").Value){
    props.Get("hard_points").Value+=2;
    r.Get("hard_points").Value+=2;
    r.Get("lich_voen").Value+=0.25;
   };
  };
 }; 
};

export function export_start(p, scr, spw, skin, hp){
 start(p,scr,spw,skin,hp);
};

export function load_all(p){
room.Teams.Get("Blue").Properties.Get("Scores").Value+=1000*bank_give;
room.Teams.Get("Blue").Properties.Get("Spawns").Value+=5*bank_give;
};

export function save_all(p){
 if(gm.GetBool("hard_points") && props.Get("hard_points").Value<=0){
  props.Get("hard_points").Value -= p.Properties.Get("hard_points").Value;
 };
};

function admin(p,enable){
 var bld=p.Build;
 Adm_props.forEach(function(ind){
  p.Build[ind].Value = true;
 });
 p.Properties.Get("adm").Value=1;
};

export function export_admin(p,enable){
 admin(p,enable);
};

function shk(p,shek,crl){
 var r=p.Properties;
 if(!r.Get(shek).Value){
  if(html_enable == "true"){
   r.Get("shek").Value=`<color=${crl}>${shek}</a>`;
  }else{
   r.Get("shek").Value=`${shek}`;
  };
  r.Get(shek).Value=1;
  p.PopUp(`<b>______________\n\nВы получили статус <i>${shek}</i>!\n______________</b>`);
 };
};

export function pprop(c,v){
 var p=c.Player, r=p.Properties, i=p.Inventory;

 switch(v.Name){
  case "melee":
   i.Melee.Value=true;
   r.Get("bat").Value++;
  break;
  case "main":
   i.Main.Value=true;
   r.Get("bat").Value++;
  break;
  case "gun":
   i.Secondary.Value=true;
   r.Get("bat").Value++;
  break;
  case "ex":
   i.Explosive.Value=true;
   r.Get("bat").Value++;
  break;

  case "bat":
   if(v.Value===4) badge(p,"К бою готов","a",10000,5);
    if(!gm.GetBool("SHIELD_BST")) r.Get("cd_bst").Value=1;
    else r.Get("cd_bst").Value=2;

     if(v.Value===0) r.Get("cd").Value=9 * r.Get("cd_bst").Value;
     if(v.Value===1) r.Get("cd").Value=7 * r.Get("cd_bst").Value;
     if(v.Value===2) r.Get("cd").Value=5 * r.Get("cd_bst").Value;
     if(v.Value===3) r.Get("cd").Value=3 * r.Get("cd_bst").Value;
     if(v.Value===4) r.Get("cd").Value=1 * r.Get("cd_bst").Value;
  break;

  case "badges":
   if(v.Value>=27){
    if(GAME_MODE_TYPE=="Невозможно")
badge(p,"Невозможное испытание!","e",100000000,10000000);
    else if(GAME_MODE_TYPE=="Ультра Хардкор") badge(p,"Настоящее испытание!","e",1000000,1000000);
    else badge(p,"Достойное Испытание!","d",1000000,0);
   };
  break;

  case "bst":
   i.MainInfinity.Value=true;
   i.SecondaryInfinity.Value=true;
   i.ExplosiveInfinity.Value=true;
  break; 
 };

 if(v.Name=="Build") i.Build.Value=true;

 if(v.Name=="a"){
  if(v.Value===4){
   if(r.Get("killer").Value){
    shk(p,"Обычный","#ADFF2F");
    r.Get("killer_bst").Value=15;

   } else if(r.Get("farmer").Value){
    shk(p,"Фармер","#ADFF2F");
    r.Get("farmer_bst").Value=3;

   } else if(r.Get("tanker").Value){
    shk(p,"Обычный","#ADFF2F");
    r.Get("maxhp").Value+=100;
    r.Get("hp").Value+=100;

   }else{
    r.Get("maxhp").Value=500;
    shk(p,"Обычный","#ADFF2F");
   };
   r.Get("b").Value=1;
   props.Get("hard_points").Value+=0.5;
   r.Get("hard_points").Value+=0.5;
  };

  if(v.Value===6){
   if(r.Get("killer").Value){
    shk(p,"Норм","#008080");
    r.Get("killer_bst").Value=20;

   } else if(r.Get("farmer").Value){
    shk(p,"Фармер","#008080");
    r.Get("farmer_bst").Value=5;

   } else if(r.Get("tanker").Value){
    shk(p,"Танк","#008080");
    r.Get("maxhp").Value+=300;
    r.Get("hp").Value+=300;

   }else{
    r.Get("maxhp").Value=1000;
    shk(p,"Норм","#008080");
   };
   r.Get("b").Value=2;
   props.Get("hard_points").Value+=1.5;
   r.Get("hard_points").Value+=1.5;
  };

  if(v.Value===11){
   if(r.Get("killer").Value){
    shk(p,"Убийца","#7FFFD4");
    r.Get("killer_bst").Value=30;

   } else if(r.Get("farmer").Value){
    shk(p,"Мега Фармер","#7FFFD4");
    r.Get("farmer_bst").Value=7;

   } else if(r.Get("tanker").Value){
    shk(p,"Танк","#7FFFD4");
    r.Get("maxhp").Value+=500;
    r.Get("hp").Value+=500;

   }else{
    shk(p,"Мега Норм","#7FFFD4");
   };
   r.Get("b").Value=3;
   props.Get("hard_points").Value+=1;
   r.Get("hard_points").Value+=1;
  };

  if(v.Value===15){
   if(r.Get("killer").Value){
    shk(p,"Супер Убийца","#87CEFA");
    r.Get("killer_bst").Value=35;

   } else if(r.Get("farmer").Value){
    shk(p,"Супер Фармер","#87CEFA");
    r.Get("farmer_bst").Value=9;

   } else if(r.Get("tanker").Value){
    shk(p,"Терминатор","#87CEFA");
    r.Get("maxhp").Value+=600;
    r.Get("hp").Value+=600;

   }else{
    r.Get("maxhp").Value=1500;
    shk(p,"Богатый","#87CEFA");
   };
   r.Get("b").Value=4;
   props.Get("hard_points").Value+=1;
   r.Get("hard_points").Value+=1;
  };

  if(v.Value===19){
   if(r.Get("killer").Value){
    shk(p,"Картель","#00008B");
    r.Get("killer_bst").Value=45;

   } else if(r.Get("farmer").Value){
    shk(p,"Глав. Фармер","#00008B");
    r.Get("farmer_bst").Value=11;

   } else if(r.Get("tanker").Value){
    shk(p,"Терминатор","#00008B");
    r.Get("maxhp").Value+=700;
    r.Get("hp").Value+=700;

   }else{
    r.Get("maxhp").Value=2000;
    shk(p,"Чел","#00008B");
   };
   r.Get("b").Value=5;
   props.Get("hard_points").Value+=1.5;
   r.Get("hard_points").Value+=1.5;
  };

  if(v.Value===22){
     if(r.Get("killer").Value){
    shk(p,"Маньяк","#ADFF2F");
    r.Get("killer_bst").Value=50;

   } else if(r.Get("farmer").Value){
    shk(p,"Глав. Фармер","#ADFF2F");
    r.Get("farmer_bst").Value=13;

   } else if(r.Get("tanker").Value){
    shk(p,"Стена","#ADFF2F");
    r.Get("maxhp").Value+=800;
    r.Get("hp").Value+=800;

   }else{
    r.Get("maxhp").Value=2500;
    shk(p,"Мега Чел","#ADFF2F");
   };
   r.Get("b").Value=6;
   props.Get("hard_points").Value+=3;
   r.Get("hard_points").Value+=3;
  };

  if(v.Value===26){
   if(r.Get("killer").Value){
    shk(p,"Полу Бог","#00FA9A");
    r.Get("killer_bst").Value=60;

   } else if(r.Get("farmer").Value){
    shk(p,"Полу Бог","#00FA9A");
    r.Get("farmer_bst").Value=15;

   } else if(r.Get("tanker").Value){
    shk(p,"Полу Бог","#00FA9A");
    r.Get("maxhp").Value+=900;
    r.Get("hp").Value+=900;

   }else{
    shk(p,"Полу Бог","#00FA9A");
   };
   badge(p,"Конец?","b",1000000,10000);
   r.Get("b").Value=7;
   props.Get("hard_points").Value+=4;
   r.Get("hard_points").Value+=4;
  };

  if(v.Value===30){
   if(r.Get("bad").Value > r.Get("good").Value){
    if(r.Get("killer").Value){
     shk(p,"Грех Убийства","#800000");
     r.Get("killer_bst").Value=70;
     badge(p,"Грех Убийств!","d",0,0);

    } else if(r.Get("farmer").Value){
     shk(p,"Грех Жадности","#7FFFD4");
     r.Get("farmer_bst").Value=20;
     badge(p,"Грех Жадности!","d",0,0);

    } else if(r.Get("tanker").Value){
     shk(p,"Грех Гордыни","#778899");
     r.Get("maxhp").Value+=1000;
     r.Get("hp").Value+=1000;
     badge(p,"Грех Гордыни!","d",0,0);

    }else{
     shk(p,"Неизвестный Грех","cyan");
     badge(p,"Неизвестный Грех.","b",0,0);
    };
   }else{
    if(r.Get("killer").Value){
     shk(p,"Ангел Смерти","#800000");
     r.Get("killer_bst").Value=70;
     badge(p,"Ангел Смерти!","d",0,0);

    } else if(r.Get("farmer").Value){
     shk(p,"Ангел Фармы","#7FFFD4");
     r.Get("farmer_bst").Value=20;
     badge(p,"Ангел Фермы!","d",0,0);

    } else if(r.Get("tanker").Value){
     shk(p,"Страж Ангел","#778899");
     r.Get("maxhp").Value+=1000;
     r.Get("hp").Value+=1000;
     badge(p,"Страж Ангел!","d",0,0);

    }else{
     shk(p,"Неизвестный Ангел","cyan");
     badge(p,"Неизвестный Ангел.","b",0,0);
    };
    r.Get("skin").Value=2;
    props.Get("hard_points").Value+=5;
    r.Get("hard_points").Value+=5;
   };
badge(p,"Это Конец, так ведь?","b",5000000,1000);
   if(GAME_MODE_TYPE=="Классика")
badge(p,"Классическое прохождение","b",10000000,5000);
   if(GAME_MODE_TYPE=="Невозможно")
badge(p,"Невозможное прохождение!","d",500000000,15000);
   if(GAME_MODE_TYPE=="Ультра Хардкор") badge(p,"Это наконец закончилось!","e",500000000,500000);
   props.Get("hard_points").Value++;
  };
 };
 if(v.Name=="Scores" && v.Value>=2000000000) badge(p,"Богач","b",0,5000);

 if(v.Name=="build") i.Build.Value=true;
 if(v.Name=="bst_build") i.BuildInfinity.Value=true;
 if(v.Name=="red_build") p.Build.BlocksSet.Value=BuildBlocksSet.Red;

 if(v.Name=="hp"){ 
 p.contextedProperties.MaxHp.Value=v.Value;

  if(v.Value>=10000) badge(p,"Броннированный", "c",5000000,1000);
  if(v.Value>=50000) badge(p,"Почти Бессмертный","d",850000000,10000);
  if(v.Value>=100000) badge(p,"Воистину Бессмертный!","e",900000000,5000000);
  }

 if(v.Name=="maxhp"){
  if(r.Get("maxhp").Value>=5000){
   r.Get("maxhp").Value=5000;
  };
 };

 if(v.Name=="opit" && v.Value>=r.Get("need").Value){
  if(r.Get("navik").Value>=10) return;
  r.Get("opit").Value=0;
  r.Get("navik").Value++;
  r.Get("need").Value++;
  p.PopUp(`Вы прокачали навык аккуратности!\nВаш текущий лвл навыка: ${r.Get("navik").Value}\nДля прокачки навыка нужно добыть ${r.Get("need").Value} руд!`);
 };
 r.Get("kd").Value=`${r.Kills.Value}/${r.Deaths.Value}`;

 if(v.Name=="Kills"){
  if(v.Value>=1){
   badge(p,"Первая кровь","a",10000,5);
  };
  if(v.Value>=50){
   badge(p,"Берсерк","b",50000,50);
  };
  if(v.Value>=150){
   badge(p,"Настоящий Хаос","c",500000,500);
  };
  if(v.Value>=350){
   badge(p,"Холокост","d",100000000,1000);
  };
 };

 if(v.Name=="good"){
  if(v.Value===(r.Get("bad").Value+20)) badge(p,"Очень Хороший","a",100,100);

  if(v.Value===(r.Get("bad").Value+40)) badge(p,"Полицейский","b",200,500);

  if(v.Value===(r.Get("bad").Value+100)) badge(p,"Борец с преступностью","c",300,1000);

  if(v.Value===(r.Get("bad").Value+200)) badge(p,"Герой","d",400,1500);
 };

 if(v.Name=="bad"){
  if(v.Value===(r.Get("good").Value+10)) badge(p,"Очень Плохой","a",100,100);

  if(v.Value===(r.Get("good").Value+20)) badge(p,"Бандит","b",200,500);

  if(v.Value===(r.Get("good").Value+50)) badge(p,"Мафия","c",300,1000);

  if(v.Value===(r.Get("good").Value+100)) badge(p,"АнтиГерой","d",400,1500);
 };

 if(r.Get("good").Value>r.Get("bad").Value) r.Get("karma").Value="<color=lime>Хорошая</a>";
 else r.Get("karma").Value="<color=red>Плохая</a>";
 if(html_enable == "true"){
  if(r.Get("good").Value>r.Get("bad").Value){
   r.Get("karm").Value="(<color=lime>■</a>)";
  }else{
   r.Get("karm").Value="(<color=red>■</a>)";
  };
 }else{
  if(r.Get("good").Value>r.Get("bad").Value){
   r.Get("karm").Value="Good";
  }else{
   r.Get("karm").Value="Bad";
  };
 };

 if(v.Name=="rage"){
  if(v.Value){
   p.contextedProperties.inventoryType.Value= 1;
   p.contextedProperties.SkinType.Value=1;
   if(r.Get("first_zombie").Value) p.contextedProperties.MaxHp.Value=750;
   else p.contextedProperties.MaxHp.Value=500;
  }else{
   p.contextedProperties.inventoryType.Value= 0;
   p.contextedProperties.SkinType.Value = r.Get("skin").Value;
   p.contextedProperties.MaxHp.Value = r.Get("hp").Value;
  };
 };

 if(gm.GetBool("голод")){
  if(v.Name=="голод"){
   if(v.Value<=0){
    if(GAME_MODE_TYPE!=="<quad>'Сложно'<quad>" || GAME_MODE_TYPE=="Эво<quad>ю<quad>ия"){
    if(!r.Get("hide_spam").Value) p.PopUp("ваш голод на нуле! эффективность дохода уменьшена до 25%");
     r.Get("farm_off").Value=0.25;
     v.Value=0;
    }else{
     p.PopUp("Вы <color=red>Умерли</a> от голода.");
     p.Spawns.Despawn();
     p.Spawns.Enable = false;
    };
   };

   if(v.Value<=30&&v.Value>0){
    if(!r.Get("hide_spam").Value) p.PopUp("вы экстремально голодны! эффективность дохода уменьшена до 50%");
    r.Get("farm_off").Value=0.5;
   };

   if(v.Value<40&&v.Value>30){
    if(!r.Get("hide_spam").Value) p.PopUp("вы голодны! эффективность дохода уменьшена до 75%");
    r.Get("farm_off").Value=0.75;
   };

   if(v.Value>=40&&v.Value<80){
    r.Get("farm_off").Value=1;
   };

   if(v.Value>=80){
    r.Get("farm_off").Value=1.25;
    if(!r.Get("hide_spam").Value) p.PopUp("вы полны энергией! эффективность дохода увеличена до 125%");
   };

   if(v.Value>=100){
    r.Get("farm_off").Value=1.5;
    if(!r.Get("hide_spam").Value) p.PopUp("голод 100%! эффективность дохода увеличена до 150%");
    v.Value=100;
   };
  };
 };

 if(r.Get("bitcoin").Value>=1) p.Timers.Get("crypto_b").RestartLoop(120); 
 else p.Timers.Get("crypto_b").Stop();

 if(r.Get("efir").Value>=1) p.Timers.Get("crypto_e").RestartLoop(120); 
 else p.Timers.Get("crypto_e").Stop();

 if(r.Get("dogcoin").Value>=1) p.Timers.Get("crypto_d").RestartLoop(120); 
 else p.Timers.Get("crypto_d").Stop();

 if(v.Name=="build_count") p.contextedProperties.StartBlocksCount.Value=v.Value;

 if(v.Name=="build") p.Build.BuildModeEnable.Value=true;

 if(v.Name=="balk") p.Build.BalkLenChange.Value=true;

 if(v.Name=="bst_build") i.BuildInfinity.Value=true;

 if(v.Name=="fly") p.Build.FlyEnable.Value=true;

 if(v.Name=="skin") p.contextedProperties.SkinType.Value=v.Value;

 if(v.Name=="remove") p.Build.RemoveQuad.Value=true;

 if(v.Name=="zalivka") p.Build.FloodFill.Value=true;

 if(v.Name=="zone") p.Build.BalkLenChange.Value=true;

 if(r.Get("подарок_легенд").Value>=1){
room.AreaViewService.GetContext(p).Get("подарок").Color = new Color(30,15,0,0);
 }else if(r.Get("подарок_необ").Value>=1){
room.AreaViewService.GetContext(p).Get("подарок").Color = new Color(0,1,0,0);
 }else if(r.Get("подарок").Value>=1){
room.AreaViewService.GetContext(p).Get("подарок").Color = new Color(0,0,1,0);
 }else{
room.AreaViewService.GetContext(p).Get("подарок").Color = new Color(0,0,0,0);
 };
}

export function parcour(p,type,give,hint){
 var r = p.Properties;
 r.Get("prc_"+type+"_bst").Value += give;
 p.Ui.Hint.Value = "вы получили буст "+hint+"\nТекущий буст: +"+(r.Get("prc_"+type+"_bst").Value*100)+"%";
 p.Spawns.Spawn();
};

export function Next(p,name){
 if(name=="след") next(p,"page1",shop,cost);
 if(name=="след2") next(p,"page2",spez_shop,spez_cost);
 if(name=="след3") next(p,"page3",polu_shop,polu_cost);
 if(name=="след4") next(p,"page4",bog_shop,bog_cost);
};

export function Prev(p,name){
 if(name=="пред") prev(p,"page1",shop,cost);
 if(name=="пред2") prev(p,"page2",spez_shop,spez_cost);
 if(name=="пред3") prev(p,"page3",polu_shop,polu_cost);
 if(name=="пред4") prev(p,"page4",bog_shop,bog_cost);
};

export function prev(p,prop,type,type2){
 var page=p.Properties.Get(prop);
 page.Value--;
 if(page.Value<1) page.Value=type.length;
 if(type[page.Value-1]!==undefined) p.Ui.Hint.Value=`${page.Value}: ${type[page.Value-1]}\nцена: ${(type2[page.Value-1]*cost_boost*props.Get("ev_skid").Value)}\nчтобы купить войдите в желтую зону`;

};

export function next(p,prop,type,type2){
 var page=p.Properties.Get(prop);
page.Value++;
 if(page.Value>type.length) page.Value=1;
 if(type[page.Value-1]!==undefined) p.Ui.Hint.Value=`${page.Value}: ${type[page.Value-1]}\nцена: ${(type2[page.Value-1]*cost_boost*props.Get("ev_skid").Value)}\nчтобы купить войдите в желтую зону`;
};

export function apply_room_options() {
 const gameModeParameters = room.GameMode.Parameters;
 room.Damage.GetContext().DamageOut.Value = true;
 room.Damage.GetContext().FriendlyFire.Value = true;
 room.BreackGraph.OnlyPlayerBlocksDmg = true;
 room.BreackGraph.WeakBlocks = false;
 props.Get("ev_farm").Value=1;
 props.Get("ev_dmg").Value=1;
 props.Get("ev_skid").Value=1;
 props.Get("ev_hint").Value="Ивента нету.";
 room.Teams.Get("Blue").Properties.Get("bank_b").Value=0;
 room.Teams.Get("Blue").Properties.Get("bank_e").Value=0;

 room.Teams.Get("Blue").Properties.Get("bank_d").Value=0;
};

const w_types = ["Классический", "Преступный", "Фарм", "Войны", "Инфляция"];

export function configure(){
 room.Ui.GetContext().Hint.Value = "ЗАГРУЗКА...";
 room.BreackGraph.BreackAll = false; 

 room.Spawns.GetContext().RespawnTime.Value = 10;
 team.create_team()
 set_inventory();
 apply_room_options();
 room.Build.GetContext().BlocksSet.Value = room.BuildBlocksSet.Blue;

 if(!gm.GetBool("server_official")){
  if(gm.GetBool("world_types")){
   props.Get("world_type").Value = w_types[Math.round(Math.random() * 4)];
  }else{
   props.Get("world_type").Value = "Классический";
  };
 }else{
  props.Get("world_type").Value = "Оффициально";
 };
 
 if(props.Get("world_type").Value == "Классический"){
  var type_farm=1, type_cost=1, type_guns=false, type_kill=1, type_dmg=1, type_hp=1;
 }else if(props.Get("world_type").Value == "Преступный"){
  var type_farm=0.5, type_cost=1, type_guns=true, type_kill=5, type_dmg=3, type_hp=1;
 }else if(props.Get("world_type").Value == "Фарм"){
  var type_farm=3, type_cost=1, type_guns=false, type_kill=0.25, type_dmg=0.25, type_hp=1;
 }else if(props.Get("world_type").Value == "Войны"){
  var type_farm=1, type_cost=1, type_guns=true, type_kill=5, type_dmg=1, type_hp=2;
 }else if(props.Get("world_type").Value == "Инфляция"){
  var type_farm=0.75, type_cost=1.25, type_guns=false, type_kill=0.75, type_dmg=0.5, type_hp=1;
 }else if(props.Get("world_type").Value == "Оффициально"){
  var type_farm=1, type_cost=1, type_guns=false, type_kill=1, type_dmg=1, type_hp=1;
 };

 props.Get("type_guns").Value = type_guns;
 props.Get("type_hp").Value = type_hp;
 props.Get("type_farm").Value = type_farm;
 props.Get("type_kill").Value = type_kill;
 props.Get("type_dmg").Value = type_dmg;
 props.Get("type_cost").Value = type_cost;

 switch(gm.GetString("HP")){
  case "0HP":
   
   props.Get("hard_points").Value=0;
  break;
  case "1HP":
   
   props.Get("hard_points").Value=1;
  break;
  case "2HP":
   
   props.Get("hard_points").Value=2;
  break;
  case "3HP":
   
   props.Get("hard_points").Value=3;
  break;
  case "4HP":
   
   props.Get("hard_points").Value=4;
  break;
  case "5HP":
   
   props.Get("hard_points").Value=5;
  break;
  case "random":
   
   props.Get("hard_points").Value = Math.round(Math.random() * 5);
  break;
 };

reset_ev();

room.Teams.Get("Blue").Timers.Get("quest").RestartLoop(120);

};

function reset_ev(){
if(gm.GetBool("event_m")) room.Teams.Get("Blue").Timers.Get("ev_m").RestartLoop(ev_cd1);
if(gm.GetBool("event_d")) room.Teams.Get("Blue").Timers.Get("ev_d").RestartLoop(ev_cd2);
if(gm.GetBool("event_s")) room.Teams.Get("Blue").Timers.Get("ev_s").RestartLoop(ev_cd3);
if(gm.GetBool("event_p")) room.Teams.Get("Blue").Timers.Get("ev_p").RestartLoop(ev_cd4);
if(gm.GetBool("event_n")) room.Teams.Get("Blue").Timers.Get("ev_n").RestartLoop(ev_cd5);
if(gm.GetBool("event_o")) room.Teams.Get("Blue").Timers.Get("ev_o").RestartLoop(ev_cd6);
if(gm.GetBool("event_i")) room.Teams.Get("Blue").Timers.Get("ev_i").RestartLoop(ev_cd7);
};

export function export_reset_ev(){
 reset_ev();
};

var Crates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], Cases = ["_1","_2","_3","_4"];

export function ttmr(t){
 var r=t.Team.Properties, y=room.Teams.Get("Blue").Timers, v = room.AreaViewService.GetContext(), ta = room.AreaService;
 if(t.id==="time") {
  r.Get("sec").Value++;
  if(props.Get("hard_points").Value<0){ 
   props.Get("hard_points").Value=0;
  };
room.MapEditor.SetBlock(ta.Get("spawn_clear"), 0);

  if(r.Get("sec").Value>=60){
   r.Get("mins").Value++;
   r.Get("sec").Value=0;
   r.Get("well_e").Value=Math.round(Math.random() * 200000000);
   r.Get("well_b").Value=Math.round(Math.random() * 400000000);
   r.Get("well_d").Value=Math.round(Math.random() * 100000000);
  }; 
  if(r.Get("mins").Value>=60){
   r.Get("hour").Value++;
   r.Get("mins").Value=0;
  };  
 };
 if(t.id==="ящ"){
   Crates.forEach(function(ind){
     r.Get("ящик"+ind).Value = 0;
     r.Get("ящикящик"+ind).Value = 0;
   });
 };
 if(t.id==="грузы"){
   v.Get("кейс_хинт").Enable = true;
   props.Get("груз_скоро").Value=1; 
   y.Get("груз_прибыл").Restart(20);
   r.Get("груз_какой").Value = Math.round(Math.random()*4+1);
 };
 if(t.id==="груз_прибыл"){
   v.Get("кейс_хинт").Enable = false;
   props.Get("грузы_хинт").Value=1;
   props.Get("груз_скоро").Value=0; 
   y.Get("груз_ушел").Restart(90);
   switch(r.Get("груз_какой").Value){
     case 1:
      air_support(1,129,true,1);
     break;
     case 2:
      air_support(2,129,true,1);
     break;
     case 3:
      air_support(3,129,true,1);
     break;
     case 4:
      air_support(4,129,true,1);
     break;
     case 5:
      air_support(5,129,true,1);
     break;
   };
 };
 if(t.id==="груз_ушел"){
   switch(r.Get("груз_какой").Value){
     case 1:
      air_support(1,0,false,0);
     break;
     case 2:
      air_support(2,0,false,0);
     break;
     case 3:
      air_support(3,0,false,0);
     break;
     case 4:
      air_support(4,0,false,0);
     break;
     case 5:
      air_support(5,0,false,0);
     break;
   };
   v.Get("кейс_хинт").Enable = false;
   Cases.forEach(function(ind){
     props.Get("груз_открыт_"+ind).Value = 0;
   });
   props.Get("грузы_хинт").Value=1;
   y.Get("грузы").Restart(600);
 };

 if(t.id=="ev_m"){
   event_run("farm",2,"×2 деньги с фармов");
 };
 if(t.id=="ev_d"){
   event_run("dmg",2,"×2 деньги с урона и убийств");
 };
 if(t.id=="ev_s"){
   event_run("skid",0.5,"Скидка");
 };
 if(t.id=="ev_n"){
   event_run("farm",0.25,"Неурожай");
 };
 if(t.id=="ev_p"){
   event_run("peace",0,"Мирный режим");
 };
 if(t.id=="ev_o"){
   event_run("hp",5,"Ополчение");
 };
 if(t.id=="ev_i"){
   event_run("skid",2,"Инфляция");
 };
 if(t.id=="ev_stop"){
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
room.Damage.GetContext().FriendlyFire.Value = true;
  room.Ui.GetContext().Hint.Reset();

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
  reset_ev();
 };

 if(t.id=="quest"){
  room.Properties.GetContext().Get(`quest_${Math.round(Math.random()*4+1)}`).Value = true;
 };
};

function air_support(type, block, enab, amount){
 var v = room.AreaViewService.GetContext(), ta = room.AreaService;
room.MapEditor.SetBlock(ta.Get("кейс"+type+"_да"), block);
 v.Get("кейс"+type).Enable=enab;
 Cases.forEach(function(ind){
   props.Get("груз_открыт_кейс" + type + ind).Value = amount;
 });
};

function event_stop(){
  var y=room.Teams.Get("Blue").Timers;
  y.Get("ev_m").Stop();
  y.Get("ev_d").Stop();
  y.Get("ev_s").Stop();
  y.Get("ev_p").Stop(); 
  y.Get("ev_n").Stop();
  y.Get("ev_o").Stop();
  y.Get("ev_i").Stop();
};

function event_run(type,amount,hint){
  var y=room.Teams.Get("Blue").Timers;
  if(!props.Get("event").Value){
    props.Get("event").Value=1;   
    event_stop();
    props.Get("ev_hint").Value=hint;
    props.Get("current_type").Value = type;
    var cur = props.Get("current_type");
    if(!cur.Value == "zombie"){
      if(cur.Value == "hp"){
        props.Get("hard_points").Value = amount;
      }else if(cur.Value == "peace"){
      room.Damage.GetContext().FriendlyFire.Value = false;
      }else{
        props.Get("ev_"+cur.Value).Value = amount;
      };
      y.Get("ev_stop").Restart(120);
    }else{
      y.Get("ev_stop").Restart(1200);
      var e = room.Players.GetEnumerator();
      while(e.MoveNext()){
        var p=e.Current, r=p.Properties;
        p.Ui.Hint.Value="Защищайтесь от зомби!";
        if(r.Get("hp").Value!=200 && !r.Get("rage").Value){
          p.contextedProperties.MaxHp.Value = 200;
          p.Spawns.Spawn();
        };
      };
    };
  };
};

export function export_event_run(type, amount, hint){
  event_run(type,amount,hint);
};

export function tprop(c,v){
 var r=c.Team.Properties;
 let ev_h = gm.GetBool("event_m") || gm.GetBool("event_d") || gm.GetBool("event_s") || gm.GetBool("event_o") || gm.GetBool("event_n") || gm.GetBool("event_p") || gm.GetBool("event_i") ? `\nEVENT:<color=red>${props.Get("ev_hint").Value}</a>`:"";

 if(props.Get("hard_points").Value >=0 && props.Get("hard_points").Value<5){
  var color = "lime";
 }else if(props.Get("hard_points").Value >=5 && props.Get("hard_points").Value<15){
  var color = "yellow";
 }else if(props.Get("hard_points").Value >=15 && props.Get("hard_points").Value<28){
  var color = "orange";
 }else if(props.Get("hard_points").Value >=28 && props.Get("hard_points").Value<35){
  var color = "red";
 }else{
  var color = "black";
 };

 if(gm.GetBool("hard_points")){
  var hps = `Сила ополчения: ${props.Get("hard_points").Value}`;
 }else{
  var hps = "";
 };
 
 if(GAME_MODE_TYPE!=="Космическая"){
  r.Get("hint1").Value=`<color=#${GAME_MODE_COLOR}><b>Игроки: ${room.Players.Count}/${room.Players.MaxCount}\n Игровое время: ${r.Get("hour").Value}/${r.Get("mins").Value}/${r.Get("sec").Value}${ev_h}</b></a>`;

  r.Get("hint2").Value=`<b><color=#${GAME_MODE_COLOR}>В банке\nМонет: ${r.Get("Scores").Value}\nПропусков: ${r.Get("Spawns").Value}</a>\n<color=${color}>${hps}</a></b>`;
 }else{
  r.Get("hint1").Value=`<b>Игроки: ${room.Players.Count}/${room.Players.MaxCount}\n Игровое время: ${r.Get("hour").Value}/${r.Get("mins").Value}/${r.Get("sec").Value}${ev_h}</b>`;

  r.Get("hint2").Value=`<b>В банке\nМонет: ${r.Get("Scores").Value}\nПропусков: ${r.Get("Spawns").Value}\n<color=${color}>${hps}</a></b>`;
 };
};


export function kill(p,k){
 var pr=p.Properties, kr=k.Properties, ik=k.Inventory;
 if(p!=k){
  kr.Get("mest").Value=p.id;
  if(k.id == pr.Get("mest").Value){
   pr.Get("mest").Value=null;
   p.Ui.Hint.Value="месть!";
   pr.Scores.Value+=100000 * pr.Get("fLvl").Value * pr.Get("killer_bst").Value * props.Get("ev_dmg").Value * props.Get("type_kill").Value * pr.Get("prc_kill_bst").Value;
  };

  if(pr.Get("r_navik").Value=="марадер"){
   pr.Get("prog").Value++;
   p.Ui.Hint.Value=`прогресс навыка:\n${pr.Get("prog").Value}/${pr.Get("r_need").Value}\n${pr.Get("r_марадер_lvl").Value}`;
   if(pr.Get("prog").Value >= pr.Get("r_need").Value){
    pr.Get("prog").Value=0;
    pr.Get("r_марадер_lvl").Value++;
    pr.Get("r_need").Value = 30 * pr.Get("r_марадер_lvl").Value;
    p.Ui.Hint.Value += `лвл повышен!`;
    if(pr.Get("r_марадер_lvl").Value>=10){
     pr.Get("prog").Value=null;
     pr.Get("r_need").Value=null;
     pr.Get("r_navik").Value=null;
     pr.Get("naviks").Value += ", марадер";
     badge(p,"Марадер","b",40000,2500);
     p.PopUp("Навык прокачен до 10 лвла.");
    };
   };
  };
  
  if(pr.Get("r_марадер_lvl").Value){
   pr.Get("chance").Value=Math.random()*100;
   if(pr.Get("chance").Value <= pr.Get("r_марадер_lvl").Value){
    pr.Scores.Value+=kr.Scores.Value*0.10;
    kr.Scores.Value-=kr.Scores.Value*0.10;
   };
  };

  if(pr.Get("marauder").Value){
   pr.Get("chance").Value=Math.random()*100;
   if(pr.Get("chance").Value<=50){
    pr.Scores.Value+=kr.Scores.Value*0.10;
    kr.Scores.Value-=kr.Scores.Value*0.10;
   };
  };

  if(pr.Get("multi").Value){
   pr.Get("chance").Value=Math.random()*100;
   if(pr.Get("chance").Value<=20){
    pr.Scores.Value+=kr.Scores.Value*0.05;
    kr.Scores.Value-=kr.Scores.Value*0.05;
   };
  };

  pr.Get("kill_streak").Value++;
  pr.Get("lich_voen").Value+=0.5;
  if(!pr.Get("rage").Value){
   pr.Scores.Value += 500 + kr.Get("hp").Value * pr.Get("kill_streak").Value * pr.Get("bst2").Value * pr.Get("killer_bst").Value * props.Get("ev_dmg").Value * props.Get("type_kill").Value * pr.Get("prc_kill_bst").Value
  }else{
pr.Scores.Value += 500000 + kr.Get("hp").Value * pr.Get("kill_streak").Value * type_kill;
  };
  k.Ui.Hint.Value=`вас убил ${p.NickName}!`;
  p.Ui.Hint.Value=`килл стрик: ${pr.Get("kill_streak").Value}!`;

  if(kr.Get("good").Value > kr.Get("bad").Value) pr.Get("bad").Value++;
  else pr.Get("good").Value++;

  if(pr.Get("rage").Value){
   kr.Get("vaccine").Value--;
   k.Ui.Hint.Value=`вы вылечились с помощью вакцины!\n(${r.Get("vaccine").Value}/3`;
   p.Ui.Hint.Value="целовек вылечился с помощью вакцины зомби!";
   if(kr.Get("vaccine").Value>=1) return;
   k.Ui.Hint.Value="вы заражены! заражайте других! (вы вылечитесь через 5 минут!)";
   kr.Get("rage").Value=1;
   k.Timers.Get("rage").Restart(300);
  };
  if(kr.Get("rage").Value){
   if(pr.Get("vaccine").Value){
    kr.Get("rage").Value=0;
    k.Timers.Get("rage").Stop();
    k.Ui.Hint.Value="вас вылечили с помощью вакцины зомби!";
    p.Ui.Hint.Value=`вы вылечили зомби с помощью вакцины!\n${r.Get("vaccine").Value}/3`;
   };
  };

 }else k.Ui.Hint.Value="самоубийство!";

  if(!kr.Get("Build").Value) ik.Build.Value=false;
  else ik.Build.Value=true;
  if(!kr.Get("main").Value) ik.Main.Value=false;
  else ik.Main.Value=true;
  if(!kr.Get("gun").Value) ik.Secondary.Value=false;
  else ik.Secondary.Value=true; 
  if(!kr.Get("rage").Value){
   if(!kr.Get("ex").Value) ik.Explosive.Value=false;
   else ik.Explosive.Value=true;
   if(!kr.Get("melee").Value) ik.Melee.Value=false;
   else ik.Melee.Value=true;
  }else{
   ik.Explosive.Value=true;
   ik.Melee.Value=true;
  };
 kr.Deaths.Value++;
 kr.Get("lich_voen").Value+=0.25;

 k.Timers.Get("spawn").Restart(9);
 kr.Get("kill_streak").Value=0;

 if(GAME_MODE_TYPE=="Ультра Хардкор" && kr.Deaths.Value>=10 || GAME_MODE_TYPE=="Эво<quad>ю<quad>ия" && kr.Deaths.Value>=10){
  k.Spawns.Despawn();
  k.Spawns.Enable=false;
  k.Ui.Hint.Value="ваши жизни кончились!";
 };
 if(gm.GetBool("hard_points")){
  if(props.Get("hard_points").Value>=1){
   ik.Melee.Value=true;
   ik.Secondary.Value=true;
  };
  if(props.Get("hard_points").Value>=3.5){
   ik.Main.Value=true;
  };
  if(props.Get("hard_points").Value>=5){
   if(kr.Get("hp").Value<120){
    k.contextedProperties.MaxHp.Value=120;
   };
  };
  if(props.Get("hard_points").Value>=9){
   if(kr.Get("hp").Value<160){
    k.contextedProperties.MaxHp.Value=160;
   };
  };
  if(props.Get("hard_points").Value>=12.5){
   if(kr.Get("hp").Value<200){
    k.contextedProperties.MaxHp.Value=200;
   };
  };
  if(props.Get("hard_points").Value>=16){
   if(kr.Get("hp").Value<260){
    k.contextedProperties.MaxHp.Value=260;
   };
  };
  if(props.Get("hard_points").Value>=18){
   ik.SecondaryInfinity.Value=true;
   ik.MainInfinity.Value=true;
  };
  if(props.Get("hard_points").Value>=20){
   if(kr.Get("hp").Value<350){
    k.contextedProperties.MaxHp.Value=350;
   };
  };
  if(props.Get("hard_points").Value>=21){
   ik.Explosive.Value=true;
  };
  if(props.Get("hard_points").Value>=31.5){
   if(kr.Get("hp").Value<500){
    k.contextedProperties.MaxHp.Value=500;
   };
  };
  if(props.Get("hard_points").Value>=35){
   ik.Explosive.Infinity.Value=true;
  };
 };
};

export function spw(p){
 var r=p.Properties;
 p.Timers.Get("imo").Restart(r.Get("cd").Value);
 r.Immortality.Value=true;
 p.Timers.Get("spawn").Stop();

 if(r.Get("rage").Value){
  p.inventory.Melee.Value=true;
  p.inventory.Explosive.Value=true;
 };
};

export function tmr(t){
 var p=t.Player, r=p.Properties, i=p.Inventory;
 if(t.id==="imo") r.Immortality.Value=false;
 if(t.id==="spawn") p.Spawns.Spawn();
 if(t.id==="rage"){
  if(r.Get("first_zombie").Value) return;
  r.Get("rage").Value=0;
  p.Ui.Hint.Value="вы излечились!";
  p.Spawns.CustomSpawnPoints.Clear();
  p.Spawns.Spawn();  
 };
 if(t.id==="mine"){
  r.Get("random").Value=Math.random()*100;
  if(r.Get("random").Value <r.Get("mine_navik").Value){
   r.Get("sale1").Value=r.Get("mine1").Value;
   r.Get("sale2").Value=r.Get("mine2").Value;
   p.Ui.Hint.Value=`вы добыли ${r.Get("mine2").Value}`;
  }else p.Ui.Hint.Value="Не удалось добыть! попробуйте еще раз!";
 };
 if(t.id=="голод") r.Get("голод").Value-=2;
 if(t.id=="crypto_b") {
  r.Get("bitcoin").Value+=0.25;
 };
 if(t.id=="crypto_e") {
  r.Get("efir").Value+=0.75;
 };
 if(t.id=="crypto_d") {
  r.Get("bitcoin").Value+=0.5;
 };
 if(t.id=="p_hint") {
  r.Get("hint_type").Value++;
  if(r.Get("hint_type").Value>8) r.Get("hint_type").Value=1;

 switch(r.Get("hint_type").Value){
  case 1: room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>Ваш баланс:\nМ: ${r.Scores.Value}\nП: ${r.Spawns.Value}</a>`;
  break;
  case 2:
   room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>Ваше хп:\n${r.Get("hp").Value} / ${r.Get("maxhp").Value}</a>`;
  break;
  case 3:
   room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>Фарм лвл:${r.Get("fLvl").Value}\nСтатус: ${r.Get("shek").Value}</a>`;
  break;
  case 4:
   room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>Общий банк:\nМ: ${p.Team.Properties.Get("Scores").Value}\nП: ${p.Team.Properties.Get("Spawns").Value}</a>`;
  break;
  case 5:
   room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>KD:\nK: ${r.Kills.Value}\D: ${r.Deaths.Value}\n(${r.Kills.Value/r.Deaths.Value})</a>`;
  break;
  case 6:
   room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>Ваша карма: ${r.Get("karma").Value}\n(${r.Get("good").Value}/${r.Get("bad").Value})</a>`;
  break;
  case 7:
 room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>Ваш рюкзак:\nВодка:${r.Get("водка").Value} | Пиво:${r.Get("пиво").Value} | Вода:${r.Get("вода").Value} | Хлеб:${r.Get("хлеб").Value} | Колбаса:${r.Get("кообаса").Value} | Тушёнка:${r.Get("тушонка").Value} | Бутер:${r.Get("бутер").Value} | Дед. Водка:${r.Get("дедовская водка").Value}</a>`;
  break;
  case 8:
  if(!gm.GetBool("hard_points")) return;
 room.Teams.Get("Blue").Properties.Get("p_hint" + p.id).Value = `<color=#${GAME_MODE_COLOR}>Сила Ополчения:${props.Get("hard_points").Value}</a>`;
  break;
  };
 };
};

export function dmg(p,d,dmg){
 var pr=p.Properties, dr=d.Properties;
 if(p!=d && GAME_MODE_TYPE!=="<quad>'Сложно'<quad>"){
  pr.Scores.Value += Math.round(dmg) * pr.Get("bst1").Value * pr.Get("killer_bst").Value * props.Get("ev_dmg").Value * props.Get("type_dmg").Value * pr.Get("prc_dmg_bst").Value;
 };
 if(pr.Get("r_navik").Value=="бронебой"){
  if(dr.Get("tanker").Value){
   pr.Get("prog").Value += Math.round(dmg)*0.5;
   p.Ui.Hint.Value=`прогресс навыка:\n${pr.Get("prog").Value}/${pr.Get("r_need").Value}\n${pr.Get("r_бронебой_lvl").Value}`;
   if(pr.Get("r_need").Value >= pr.Get("prog").Value){
    pr.Get("r_бронебой_lvl").Value++;
    p.Ui.Hint.Value+="Лвл повышен!";
    pr.Get("r_need").Value=2000 * pr.Get("r_бронебой_lvl").Value;
    pr.Get("prog").Value = 0;
    if(pr.Get("r_бронебой_lvl").Value >= 10){
     pr.Get("prog").Value=null;
     pr.Get("r_need").Value=null;
     pr.Get("r_navik").Value=null;
     pr.Get("naviks").Value += ", бронебой";
     badge(p,"Бронебой","b",40000,2000);
     p.PopUp("Навык прокачен до 10 лвла.");
    };
   };
  };
 };
 if(dr.Get("r_navik").Value=="защитник"){
  dr.Get("prog").Value += Math.round(dmg)*0.5;
  d.Ui.Hint.Value=`прогресс навыка:\n${dr.Get("prog").Value}/${dr.Get("r_need").Value}\n${dr.Get("r_защитник_lvl").Value}`;
  if(dr.Get("r_need").Value >= dr.Get("prog").Value){
   dr.Get("r_защитник_lvl").Value++;
   dr.Get("r_need").Value=1000 * dr.Get("r_защитник_lvl").Value;
   dr.Get("prog").Value = 0;
   d.Ui.Hint.Value+="Лвл повышен!";
   if(dr.Get("r_защитник_lvl").Value >= 10){
    dr.Get("prog").Value=null;
    dr.Get("r_need").Value=null;
    dr.Get("r_navik").Value=null;
    dr.Get("naviks").Value+=", защитник";
    badge(d,"Защитник","b",40000,2000);
    d.PopUp("Навык прокачен до 10 лвла.");
   };
  };
 }; 

  if(dr.Get("r_защитник_lvl").Value){
   dr.Get("chance").Value=Math.round()*100;
   if(dr.Get("chance").Value <= (r.Get("r_защитник_lvl").Value -= r.Get("r_бронебой_lvl").Value * 0.5)){
    dr.Immortality.Value=true;
    d.Timers.Get("imo").Restart(1);
   };
  
  if(dr.Get("tanker").Value){
   dr.Get("chance").Value=Math.random()*100;
   if(dr.Get("chance").Value<=20 ){
    dr.Immortality.Value=true;
    d.Timers.Get("imo").Restart(1);
   };
  };
  if(dr.Get("multi").Value){
   dr.Get("chance").Value=Math.random()*100;
   if(dr.Get("chance").Value<=7){
     dr.Immortality.Value=true;
   d.Timers.Get("imo").Restart(1);
   };
  };
 };
};

export function info(p){
 var r=p.Properties;

 let ev_farm = gm.GetBool("event_m") ? "<color=lime>ON</a>" : "<color=red>OFF</a>", ev_dmg = gm.GetBool("event_d") ? "<color=lime>ON</a>" : "<color=red>OFF</a>", ev_skid = gm.GetBool("event_s") ? "<color=lime>ON</a>" : "<color=red>OFF</a>";



 p.PopUp(`<b>Информация о вас:\nНик:${p.NickName} | Айди: ${p.Id}\nЛвл фарма: ${r.Get("fLvl").Value}/9\nМ: ${r.Scores.Value} | П: ${r.Spawns.Value}\nKD: ${r.Get("kd").Value}\nКарма: ${r.Get("karma").Value} (${r.Get("good").Value}/${r.Get("bad").Value})\nРанг: ${r.Get("rang").Value} | Статус: ${r.Get("shek").Value}\nФарм буст: ${r.Get("farm_bst").Value}\n Навык добычи: ${r.Get("navik").Value}(${r.Get("opit").Value}/${r.Get("need").Value}) \nКласс: ${r.Get("class").Value}\nХП: ${r.Get("hp").Value}/${r.Get("maxhp").Value}\nДостижения:${r.Get("new").Value} (${r.Get("badges").Value}/27)\nПодарки: <a>${r.Get("подарок").Value}</a>/<color=lime>${r.Get("подарок_необ").Value}</a>/<color=yellow>${r.Get("подарок_легенд").Value}</a></b>`);

 p.PopUp(`<b>Настройки сервера:\nСложность: <color=#${GAME_MODE_COLOR}>${GAME_MODE_TYPE}</a>\nБустеры:\nСК:${start_kit}|ФБ:${farm_boost}\nСтоимость пропусков:${spawns_cost}\nБуст стоимости товаров:${cost_boost}\nБуст банка: ${bank_give}\nБуст достижений: ${badge_bst}\nСобытия: ×2 фарм:${ev_farm}\n×2 урон:${ev_dmg}\n50% скидка:${ev_skid}\nЗоны: Нож: <color=yellow>${gm.GetBool("melee")}</a>\nОснова: <color=yellow>${gm.GetBool("main")}</a>\nПест: <color=yellow>${gm.GetBool("gun")}</a>\nГрены: <color=yellow>${gm.GetBool("ex")}</a>\nБлоки: <color=yellow>${gm.GetBool("block")}</a>\nБуст нож: <color=yellow>${gm.GetBool("MELEE_BST")}</a>\nБуст щит: <color=yellow>${gm.GetBool("SHIELD_BST")}</a></b>`);
};

export function world_type(p){
 p.PopUp(`Тип мира: ${props.Get("world_type").Value}`);
 p.Ui.Hint.Value=`Тип мира: ${props.Get("world_type").Value}`;


};

export function Help(p){
 var r=p.Properties;
 p.PopUp("<b>Здравствуйте, если вам интересно как играть в данный режим 'Подвал 2.0', то прошу прочитать следующие страницы для более легкого понятия что и где надо/можно делать.</b>");

 p.PopUp("<b>Этот режим - <color=red>Анархия</a>, а это значит что любой может вас убить просто ради удовольствия или денег.\nГлавная цель - дойти до статуса 'Новый бог', но если вы выберите любой класс то этот статус может поменятся.\nПоговорим о классах, эти классы как сказанно выше могут изменять ход развития и давать различные бонусы для более легкого прохождения, всего есть 5 классов: Киллер, Фармер, Танк, Марадер и Мульти, все их характеристики вы можете узнать при помощи команды <i>/класс</i>.</b>");

 p.PopUp(`<b><i>Путь развития</i>.\nКак было сказанно на прошлой странице, путь развития зависит от класса но цель у всех путей одна - статус 'Бог', чтобы достичь данного статуса вам помогут фарм зоны - розовые прозрачные текстуры, но, не все фарм зоны могут вам давать деньги, это зависит от вашего <i>Фарм ЛВЛа</i>, данный Фарм ЛВЛ приобретается в магазине за приличные деньги в ${78000*cost_boost} монет. принцип работ фарм зон достаточно прост для понятия, вам нужны пропуски чтобы получать больше денег, а пропуски стоят ${spawns_cost*cost_boost} монет.</b>`);

 p.PopUp("<b><i>Способы заработка</i>.\nПомимо фарм зон есть еще и <i><color=red>Убийства</a></i>, <i><color=orange>Ящики</a></i>, и <i><color=grey>Урон</a></i>, это способы заработка доступные на раннем этапе развития, дальше могут появится <i><color=brown>Шахта</a></i>, <i><color=cyan>Паркур</a></i>, и <i><color=lime>Крипта</a></i>, но о них позже.\nУбийства дают 500 монет × на ваш Килл Стрик(зарабатывается посредством убийств, обнуляется при смерти).\nУрон - дает столько монет, сколько вы нанесли урона противнику, еще можно увеличить благодаря классу 'Киллер', и буста на Урон.\nЯщики - дает 10000 монет, можно увеличить с помощью Фарм ЛВЛа, ящики появляются каждые 5 минут.</b>");

 p.PopUp("<b><i>Способы заработка №2</i>.\nКак было сказано ранее помимо фарм зон, убийств, ящиков и урона, есть еще Шахта, Паркур и Крипта и дают они уже гараздо больше монет.\n<i>Шахта</i> - если вы любите шахтерство то это для вас, но нужны кирки и они не дешевые, а порой кирка не окупает свою стоимость.\n<i>Паркур</i> - любите проходить паркур за награду? паркур ваш выбор! дает приличное кол-во монет но на этапе Полу Бога это копейки.\n<i>Крипта</i> - можно купить крипту по дешевке а потом продать ее гараздо дороже. в общих чертах о способах заработка обо всем рассказано.</b>");

 p.PopUp("<b>Давайте теперь поговорим о магазах, всего есть 2 типа магов, это электронный и обычный.\n<i>Электронный Магаз</i> - там можно купить еду для восполнения голода, но еда там стоит иногда дороже чем автомат.\n<i>Обычный Магаз</i> - там где можно купить всякое барахло для прокачки статуса и тд, точное местоположение этих магазов показать не могу, но обычно они находятся возле точек появления, в городе и в деревне.</b>");

 p.PopUp("<b></b>");
};
 


export function join(p,t){ 
 var r=p.Properties;
 t.Add(p); 
 p.PopUp("<b>Чтобы ознакомится в чат-командами напишите <i>/кмд</i>\nЧтобы ознакомится с режимом напишите <i>/хелп</i></b>");
  if(p.id=="BF9ADAE3A25D0699"||p.id=="31206529CAE4C78F"||p.id=="2C21DCBB715CA1AA"||p.id=="956ABCCCD26A2474"||p.id=="AA857F85B79C39AA"||p.id=="76E342993F96B017"||p.id=="AA857F85B79C39AA"||p.id=="E7A0652989F17932"){
   start(p, 5000, 100, 2, 400);
   r.Get("melee").Value=1;
   r.Get("gun").Value=1;
   r.Get("cmds2").Value=1;
   r.Get("cmds+").Value=1;
   r.Get("adm").Value=1;
   p.PopUp("<b>/кмд2 для особых чат-команд\n кмд+ для чат-команд+</b>");
  };

 if(p.id=="CD8BA5F2ABD9BBDA"||p.id=="99A25FA624FE5342"||p.id=="1DC1820D08403129"||p.id=="C1B5B19FC19AC747"||p.id=="8972D9E2F6573D5F"||p.id=="11192596DE4401EA"||p.id=="EA673076CF669F1"){   
  start(p, 200000000, 50000000, 0, 100);
  admin(p,true);
  r.Get("cmds2").Value=1;
  r.Get("cmds+").Value=1;
  p.PopUp("<b>/кмд2 для особых чат-команд\n/кмд+ для чат-команд+</b>");
 };

 start(p,1500,5,0,100);
 p.Damage.DamageIn.Value=false;
 p.Spawns.Spawn();
 p.Spawns.Spawn();
};

export function mine(p,give,name,ned,hint){
 var r=p.Properties;
 p.Ui.Hint.Value="у вас полный рюкзак!";
 if(r.Get("sale1").Value) return;
 p.Ui.Hint.Value=`вам нужно купить ${hint} чтобы добыть ${name}`;
 if(r.Get("pick").Value<ned) return;
 p.Ui.Hint.Value=`вы добываете ${name}...`;
 r.Get("mine1").Value=give;
 r.Get("mine2").Value=name;
 p.Timers.Get("mine").Restart(5);
};

export function farm(p,need,giving){
 var r=p.Properties;
 if(!r.Get("rage").Value){
  if(r.Get("fLvl").Value>=need){
   r.Get("give").Value=(giving * r.Spawns.Value * farm_boost * r.Get("farm_bst").Value * r.Get("farm_off").Value * r.Get("farmer_bst").Value * 0.5 * props.Get("ev_farm").Value * r.Get("r_цыган_lvl").Value * props.Get("type_farm").Value);
   r.Get("lich_farm").Value+=0.1;

   r.Scores.Value+=r.Get("give").Value;
   p.Ui.Hint.Value=`вы получаете ${r.Get("give").Value}(×${r.Get("farm_bst").Value}) монет!\nчтобы получать больше надо больше пропусков(${r.Spawns.Value}) ${need}Лвл!`;
   if(r.Get("r_navik").Value=="цыган"){
    r.Get("prog").Value++;
    p.Ui.Hint.Value += `\nпрогресс навыка:\n${r.Get("prog").Value}/${r.Get("r_need").Value}\n${r.Get("r_цыган_lvl").Value}`;
    if(r.Get("prog").Value >= r.Get("r_need").Value){
     r.Get("prog").Value=0;
     r.Get("r_цыган_lvl").Value++;
     p.Ui.Hint.Value+="лвл повышен.";
     r.Get("r_need").Value = 20 * r.Get("r_цыган_lvl").Value;
     if(r.Get("r_цыган_lvl").Value>=10){
      r.Get("prog").Value=null;
      r.Get("r_need").Value=null;
      r.Get("r_navik").Value=null;
      r.Get("naviks").Value += ", цыган";
      badge(p,"Цыган","b",4000,1500);
      p.PopUp("Навык прокачен до 10 лвла.");
     };
    };
   };
  }else p.Ui.Hint.Value=`нужен ${need} лвл фарма чтобы получать деньги отсюда!`;
 }else p.Ui.Hint.Vslue="вы не можете фармить так как вы зомби";
};

export function inv(p,type){
 var i=p.Inventory;
 if(GAME_MODE_TYPE!=="<quad>'Сложно'<quad>"){
  p.Ui.Hint.Value=`вы подобрали ${type}`;
  switch(type){
   case "нож": return i.Melee.Value=true;
   case "основу":
    i.Main.Value=true;
    i.Restore(1);
   break;
   case "пест":
    i.Secondary.Value=true;
    i.Restore(2);
   break;
   case "грены":
    i.Explosive.Value=true;
    i.Restore(4);
   break;
   case "блоки":
    i.Build.Value=true;
    i.Restore(5);
   break;
  };
 }else p.Ui.Hint.Value="здесь ничего нет.";
};

export function give_area(p){
 if(GIVE>=1){
  p.Ui.Hint.Value=`ты получил ${GIVE}!`;
  p.Properties.Scores.Value+=GIVE;
 } else p.Ui.Hint.Value="фарм отключен!";
};

function badge(p,name,typ,scor,spaw){

 var color=typ=="a" ? "32CD32" : typ=="b" ? "FFD700" : typ=="c" ? "FFA07A" : typ=="d" ? "8A2BE2" : "A9A9A9", r=p.Properties;

 if(r.Get(name).Value) return;

 if(GAME_MODE_TYPE!=="<quad>'Сложно'<quad>"){
  p.PopUp(`<b>получено достижение '<color=#${color}>${name}</a>'\n\nНаграда: ${scor*badge_bst} монет и ${spaw*badge_bst} пропусков</b>`);

  r.Get("badges").Value++;
  r.Get(name).Value=1;

  r.Get("new").Value+=`, ${name}<color=#${color}>[★](${scor*badge_bst}/${spaw*badge_bst})</a>`;

  r.Scores.Value+=scor*badge_bst;
  r.Spawns.Value+=spaw*badge_bst;
 }else{
  p.PopUp(`<b>'Испытание ${name} завершено. награда: нет.'</b>`);

  r.Get("badges").Value++;
  r.Get(name).Value=1;

  r.Get("new").Value+=`, ${name}<color=#${color}>[★](${scor*badge_bst}/${spaw*badge_bst})</a>`;
 };
};

export function cArea(params) {
 let t = room.AreaPlayerTriggerService.Get(params.name), v = room.AreaViewService.GetContext().Get(params.name);
 v.Tags = [params.name];
 t.Tags = [params.name];
 v.Color = params.color;
 v.Enable = params.view;
 t.Enable = params.trigger || true;
 if(params.enter)t.OnEnter.Add(params.enter);
 t.OnExit.Add(exit);
 return { Trigger: t, View: t };
};

function exit(p) {
 p.Ui.Hint.Value="";
 p.Timers.Get("farm").Stop();
};

export function tp(p,y,hint,prop,enable,ned){
 var r=p.Properties, s=p.Spawns.CustomSpawnPoints;

 p.Ui.Hint.Value=`нужно купить ключ для локации: ${hint}!`;
 if(!r.Get(ned).Value) return;
 if(!r.Get(prop).Value){
  
  s.Clear();
  s.Add(50,y,50,1);
  p.Spawns.Spawn();
  p.Ui.Hint.Value=`< ${hint} >`;
  r.Get(prop).Value=1;
  p.Damage.FriendlyFire.Value=enable;
 }else{

  r.Get(prop).Value=0;   
  s.Clear();
  p.Spawns.Spawn();
  p.Ui.Hint.Value=`< возвращение >`;
  p.Damage.FriendlyFire.Value=true;
 };
};

function shopp(p, page, shop, cost, type, need, plus, type_shop){
   var r=p.Properties;
   r.Get("shop_page"+page).Value = page;
   r.Get("shop_cost"+page).Value = cost;
   r.Get("shop_need"+page).Value = need;
   r.Get("shop_type"+page).Value = type;
   r.Get("shop_plus"+page).Value = plus;
   r.Gwt("shop_shop"+page).Value = type_shop;

   var typ = type == "Scores" ? "монет" : "пропусков"
   var pls = plus == "true" ? "Нужен для продвижения" : "Не нужен для продвижения";
   var player_first_rang = r.Get("killer").Value ? "Обычный" : r.Get("farmer").Value ? "Фармер" : r.Get("tanker").Value ? "Обычный" :"Обычный";
   var player_second_rang = r.Get("killer").Value ? "Норм" : r.Get("farmer").Value ? "Фармер" : r.Get("tanker").Value ? "Танк" : "Норм";
   var player_third_rang = r.Get("killer").Value ? "Убийца" : r.Get("farmer").Value ? "Мега Фармер" : r.Get("tanker").Value ? "Танк" : "Мега Норм";
   var player_fourth_rang = r.Get("killer").Value ? "Супер Убийца" : r.Get("farmer").Value ? "Супер Фармер" : r.Get("tanker").Value ? "Терминатор" : "Богатый";
   var player_fifth_rang = r.Get("killer").Value ? "Картель" : r.Get("farmer").Value ? "Глав. Фармер" : r.Get("tanker").Value ? "Терминатор" : "чел";
   var player_sixth_rang = r.Get("killer").Value ? "Маньяк" : r.Get("farmer").Value ? "Глав. Фармер" : r.Get("tanker").Value ? "Стена" : "Мега Чел";
   var player_eigth_rang = r.Get("killer").Value ? "Полу Бог" : r.Get("farmer").Value ? "Полу Бог" : r.Get("tanker").Value ? "Полу Бог" : "Полу Бог";

   var rng = need == 0 ? "Никакой" : need == 1 ? player_first_rang : need == 2 ? player_second_rang : need == 3 ? player_third_rang : need == 4 ? player_fourth_rang : need == 5 ? player_fifth_rang : need == 6 ? player_sixth_rang : player_eigth_rang;
   
   r.Get("shop_hint"+page).Value = `${page}: ${shop}, стоимость: ${cost}${type}\nНеобходимый ранг: ${rng}(${need})\n${pls}`;
};

const shop=[
 //0
 "холодное оружие",
 "осн. оружие",
 "пест",
 "взрывчатка",
 "беск патроны",
 //5
 "×2 деньги за урон",
 "×3 деньги за урон",
 "×2 деньги за убийство",
 "улучшение брони(+20хп)",
 "пропуск",
 //10
 "лвл фарма",
 "ключ в шахту",
 "ключ на паркур",
 "ключ в спец магаз",
 "ключ в магаз полу бога",
 //15
 "каменая кирка",
 "железная кирка",
 "стальная кирка",
 "бур",
 "вакцина зомби"
],
cost=[
 //0
 600,
 15000,
 9000,
 25000,
 74000,
 //5
 96000,
 75000,
 59000,
 59000,
 spawns_cost,
 //10
 78000,
 70000,
 50000,
 100000,
 9800000,
 //15
 400000,
 750000,
 1450000,
 4570000,
 10000
],
max=[
 //0
 1,
 1,
 1,
 1,
 1,
 //5
 1,
 1,
 1,
 1,
 1,
 //10
 6,
 1,
 1,
 1,
 1,
 //15
 1,
 1,
 1,
 1,
 1
],
ned=[
 //0
 0,
 0,
 0,
 0,
 1,
 //5
 1,
 2,
 2,
 0,
 0,
 //10
 0,
 2,
 1,
 4,
 5,
 //15
 1,
 1,
 1,
 1,
 0
],
ned_stat=[
 //0
 "",
 "",
 "",
 "",
 "обычный",
 //5
 "обычный",
 "норм",
 "норм",
 "",
 "",
 //10
 "",
 "норм",
 "обычный",
 "богатый",
 "чел",
 //15
 "норм",
 "норм",
 "норм",
 "норм",
 ""
],
spez_shop=[
 //0
 "шахта дает больше денег",
 "паркур дает больше денег",
 "блоки",
 "беск блоки",
 "фарм дает больше монет",
 //5
 "10 пропусков",
 "100 пропусков",
 "1000 пропусков",
 "10000 пропусков",
 "100000 пропусков"
 //10
],
spez_cost=[
 //0
 965000,
 559000,
 860000,
 3450000,
 895000000,
 //5
 spawns_cost*9,
 spawns_cost*80,
 spawns_cost*700,
 spawns_cost*6000,
 spawns_cost*50000
 //10
],
polu_shop=[
 //0
 "дальность",
 "балка",
 "+100 к макс. хп",
 "полет",
 "8 лвл фарма"
 //5
],
polu_cost=[
 //0
 98000000,
 150000000,
 995000000,
 980000000,
 7900000
 //5
],
bog_shop=[
 //0
 "заливка",
 "+200хп",
 "создание/удаление зон",
 "удаление квадов",
 "Зелье зомби(5мин)",
 //5
 "заполнить хп",
 "9 лвл фарма"
],
bog_cost=[
 //0
 690000,
 350000,
 720000,
 890000,
 130000,
 //5
 550000,
 110000
];

export function buy(p){
 if(props.Get("current_type").Value == "zombie") return;
 var r=p.Properties, page=r.Get("page1"), rp=r.Get(shop[page.Value-1]), a=r.Get("a");
 if(r.Get("rage").Value) return;
 p.Ui.Hint.Value=`недостаточно средств!\nНужен статус ${ned_stat[page.Value-1]}!`;
 if(r.Get("b").Value<ned[page.Value-1]) return;

 p.Ui.Hint.Value="уже куплено!";
 if(rp.Value>=max[page.Value-1]) return;

 p.Ui.Hint.Value="не достаточно денег!";
 if(r.Scores.Value < (cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value * props.Get("type_cost").Value)) return;

 r.Scores.Value -= (cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value * props.Get("type_cost").Value);
 p.Ui.Hint.Value="куплено!";

 switch(page.Value){
  case 1: 
   r.Get("melee").Value=1; 
   rp.Value=1; 
   a.Value++; 
  break;
  case 2:
   r.Get("main").Value=1; 
   rp.Value=1; 
   a.Value++;
  break;
  case 3: 
   r.Get("gun").Value=1; 
   rp.Value=1; 
   a.Value++;
  break;
  case 4: 
   r.Get("ex").Value=1; 
   rp.Value=1; 
   a.Value++; 
  break;
  case 5: 
   r.Get("bst").Value=1; 
   rp.Value=1;
   a.Value++; 
  break;
  case 6:
   r.Get("bst1").Value+=1; 
   rp.Value=1; 
   a.Value++;
  break;
  case 7:
   r.Get("bst1").Value+=1; 
   rp.Value=1; 
   a.Value++;
  break;
  case 8:
   r.Get("bst2").Value+=1; 
   rp.Value=1; 
   a.Value++;
  break;
  case 9: 
   p.Ui.Hint.Value="макс хп!";
   if(r.Get("hp").Value >= r.Get("maxhp").Value) return;
   r.Get("hp").Value+=20; 
p.Ui.Hint.Value=`у вас ${r.Get("hp").Value}/${r.Get("maxhp").Value} хп!`; 
  break;
  case 10: return r.Spawns.Value++;
  case 11: 
   r.Get("fLvl").Value++; 
   rp.Value++;
   a.Value++; 
   p.Ui.Hint.Value=`${r.Get("fLvl").Value}/7`; 
  break;
  case 12:
   r.Get("key1").Value=1; 
   rp.Value=1; 
   a.Value++; break;
  case 13:
   r.Get("key2").Value=1; 
   rp.Value=1; 
   a.Value++;
  break;
  case 14:
   r.Get("key3").Value=1; 
   rp.Value=1;
   a.Value++;
  break;
  case 15:
   r.Get("key4").Value=1;
   rp.Value=1;
   a.Value++;
  break;
  case 16:
   if(r.Get("pick").Value) return;
   r.Get("pick").Value=1;
  break;
  case 17: 
   if(r.Get("pick").Value>1) return;
   r.Get("pick").Value=2;
  break;
  case 18:
   if(r.Get("pick").Value>2) return;
   r.Get("pick").Value=3;
  break;
  case 19:
   if(r.Get("pick").Value>3) return;
   r.Get("pick").Value=4;
  break;
  case 20:
   if(gm.GetBool("set_zombie") && gm.GetBool("event_z")){
    if(r.Get("vaccine").Value<3){
     r.Get("vaccine").Value++;
     p.Ui.Hint.Value=`+вакцина!\n${r.Get("vaccine").Value}/3`;
    }else p.Ui.Hint.Value = "максимум вакцин!";
   }else p.Ui.Hint.Value="данный товар невозможно купить.";
  break;
 };
};

export function spez_buy(p){
 var r=p.Properties, page=r.Get("page2"), rp=r.Get(spez_shop[page.Value-1]), a=r.Get("a");
if(r.Get("rage").Value) return;
p.Ui.Hint.Value="недостаточно денег!";
 if(r.Scores.Value < (spez_cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value)) return;

 p.Ui.Hint.Value="уже есть!";
 if(rp.Value) return;

 r.Scores.Value-=(spez_cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value);
 p.Ui.Hint.Value="куплено!";
 switch (page.Value){
  case 1:
   r.Get("bst_mine").Value=1;
   a.Value++;
   rp.Value=1;
  break;
  case 2:
   r.Get("bst_prk").Value=1;
   a.Value++;
   rp.Value=1;
  break;
  case 3: 
   r.Get("Build").Value=1;
   a.Value++;
   rp.Value=1;
  break;
  case 4:
   r.Get("bst_build").Value=1;
   a.Value++;
   rp.Value=1;
  break;
  case 5:
   if(r.Spawns.Value>=(50000*r.Get("farm_bst").Value)) r.Get("farm_bst").Value+=0.25;
   else p.Ui.Hint.Value=`вам не хватает ${(50000*r.Get("farm_bst").Valud)-r.Spawns.Value} пропусков!`;
  break;
  case 6: return r.Spawns.Value+=10;
  case 7: return r.Spawns.Value+=100;
  case 8: return r.Spawns.Value+=1000;
  case 9: return r.Spawns.Value+=10000;
  case 10: return r.Spawns.Value+=100000;
 };
};

export function polu_bog_buy(p){
if(props.Get("current_type").Value == "zombie") return;
 var r=p.Properties, page=r.Get("page3"), rp=r.Get(polu_shop[page.Value-1]), a=r.Get("a");
 
 p.Ui.Hint.Value="вам нужен статус мега чел для покупки!";
 if(r.Get("b").Value<6) return;

 p.Ui.Hint.Value="недостаточно денег!";
 if(r.Scores.Value < (polu_cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value * props.Get("type_cost").Value)) return;

 p.Ui.Hint.Value="уже есть!";
 if(rp.Value) return;

 r.Scores.Value-=(polu_cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value * props.Get("type_cost").Value);
 p.Ui.Hint.Value="куплено!";
 switch (page.Value){
  case 1: 
   r.Get("build").Value=1; 
   a.Value++; 
   rp.Value=1;
  break;
  case 2:
   r.Get("balk").Value=1; 
   a.Value++; 
   rp.Value=1;
  break;
  case 3:
   r.Get("maxhp").Value+=100;
  break;
  case 4:
   r.Get("fly").Value=1; 
   a.Value++; 
   rp.Value=1;
   if(gm.GetBool("hard_points")){
    r.Get("hard_points").Value+=1.5;
    props.Get("hard_points").Value+=1.5;
   };
  break
  case 5:
   r.Get("fLvl").Value=8; 
   a.Value++; 
   rp.Value=1;
  break;
 };
};

export function bog(p){
if(props.Get("current_type").Value == "zombie") return;
 var r=p.Properties, page=r.Get("page4"), rp=r.Get(bog_shop[page.Value-1]), a=r.Get("a");
 if(r.Get("rage").Value) return;
 p.Ui.Hint.Value="вам нужен статус полу бог для покупки!";
 if(r.Get("b").Value<7) return;

 p.Ui.Hint.Value="недостаточно пропусков!";
 if(r.Spawns.Value < (bog_cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value * props.Get("type_cost").Value)) return;

 p.Ui.Hint.Value="уже есть!";
 if(rp.Value) return;

 r.Spawns.Value-=(bog_cost[page.Value-1] * cost_boost * props.Get("ev_skid").Value * props.Get("type_cost").Value);
 p.Ui.Hint.Value="куплено!";

 switch (page.Value){
  case 1: 
   r.Get("zalivka").Value=1; 
   a.Value++; 
   rp.Value=1;
  break;
  case 2:
   r.Get("maxhp").Value+=200;
  break; 
  case 3:
   r.Get("zone").Value=1;
   a.Value++;
   rp.Value=1;
  break;
  case 4:   
   r.Get("remove").Value=1;
   a.Value++;
   rp.Value=1;
  break;
  case 5:
   if(gm.GetBool("set_zombie")){
    if(gm.GetBool("event_z")){
     p.Ui.Hint.Value="данный товар пока-что невозможно купить.";
     if(props.Get("event").Value) return;
     r.Get("first_zombie").Value=1;
     r.Get("rage").Value=1;
     p.Timers.Get("rage").Restart(900); 
     event_run("zombie",0,"ЗОМБИ ИНФЕКЦИЯ");
     p.Spawns.CustomSpawnPoints.Clear();
     p.Spawns.Spawn();
    }else{
     r.Get("rage").Value=1;
     p.Timers.Get("rage").Restart(300); 
    };
   }else p.Ui.Hint.Value="данный товар невозможно купить";
  break;
  case 6:
   r.Get("hp").Value=r.Get("maxhp").Value;
  break
  case 7:
   r.Get("fLvl").Value=9; 
   a.Value++; 
   rp.Value=1;
  break;
 };
};
