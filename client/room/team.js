import { Color } from 'pixel_combats/basic';
import { Teams, GameMode } from 'pixel_combats/room';

const gm=GameMode.Parameters;
 switch (gm.GetString("GAME_MODE")) {
  case 'NOOBS':
   var GAME_MODE_TYPE="Для Нубов", GAME_MODE_COLOR="0000FF";
  break;
  case 'VERY_EZ': 
   var GAME_MODE_TYPE="Очень Легко", GAME_MODE_COLOR="00FF00";
  break;
  case 'EZ': 
   var GAME_MODE_TYPE="Легко", GAME_MODE_COLOR="2E8B57";
  break;
  case 'MEDIUM': 
   var GAME_MODE_TYPE="Средне", GAME_MODE_COLOR="FFD700";
  break;
  case 'CLASSIC': 
   var GAME_MODE_TYPE="Классика", GAME_MODE_COLOR="00FFFF";
  break;
  case "evol":
   var GAME_MODE_TYPE="Эво#ю#ия", GAME_MODE_COLOR="FFA500";
  break;
  case 'HARD': 
   var GAME_MODE_TYPE="Тяжело", GAME_MODE_COLOR="D2691E";
  break;
  case 'UNREAL': 
   var GAME_MODE_TYPE="Невозможно", GAME_MODE_COLOR="808080";
  break;
  case 'HARDCORE': 
   var GAME_MODE_TYPE="Ультра Хардкор", GAME_MODE_COLOR="800000";
  break;
  case "hard":
   var GAME_MODE_TYPE="<quad>'Сложно'<quad>", GAME_MODE_COLOR="8";
  break;
  case "cosmic":
   var GAME_MODE_TYPE="Космическая", GAME_MODE_COLOR="000000";
  break;  
 };

 var html_enable = "false", ver = "5.0", cosmo_c = new Color(0,0,0,0), evol_c = new Color(1,165,0,0), basic_c = new Color(0,0,1,0)

export function create_team() {
 if(html_enable == "true"){
  if(GAME_MODE_TYPE=="Космическая"){
   Teams.Add("Blue", `<b><i><size=25>Космические Люди</size>\n<size=15>${ver} |<color=#${GAME_MODE_COLOR}> ${GAME_MODE_TYPE}</a></size></i></b>`, cosmo_c);
  }else if(GAME_MODE_TYPE=="Эво<quad>ю<quad>ия"){
   Teams.Add("Blue", `<b><i><size=25>Эво<quad>ю<quad>ионные Люди</size>\n<size=15>${ver} |<color=#${GAME_MODE_COLOR}> ${GAME_MODE_TYPE}</a></size></i></b>`, evol_c);
  }else{
   Teams.Add("Blue", `<b><i><size=25>Подвальные Люди</size>\n<size=15>${ver} |<color=#${GAME_MODE_COLOR}> ${GAME_MODE_TYPE}</a></size></i></b>`, basic_c);
  };
 }else{

if(GAME_MODE_TYPE=="Космическая"){
   Teams.Add("Blue", `Космические Люди\n${ver} |${GAME_MODE_TYPE}`, cosmo_c);
  }else if(GAME_MODE_TYPE=="Эво<quad>ю<quad>ия"){
   Teams.Add("Blue", `Эво#ю#ионные Л#ди\n${ver} |${GAME_MODE_TYPE}`, evol_c);
  }else{
   Teams.Add("Blue", `Подвальные Люди\n${ver} | ${GAME_MODE_TYPE}`, basic_c); 
  };
 };
 return Teams.Get("Blue");
};
