// opgave 1 her
const amountInput = document.getElementById("amountInput");
const transactionType = document.getElementById("myTransaction");
const accountSaldoElement = document.getElementById("accountSaldo");

let saldo = 1000;

transactionType.addEventListener("change", function () {
   const amount = parseFloat(amountInput.value);

   switch (transactionType.value) {
      case "deposit":
         saldo += amount;
         break;
      case "withdraw":
         saldo -= amount;
         break;
      case "saldo":
         saldo == amount;
         break;
      default:
         alert("Ugyldig handling.");
         return;
   }

   // Opdater saldoen i DOM-elementet
   accountSaldoElement.textContent = `Saldo: ${saldo} DKK`;
});




/* opgave 2 her */
// Hent HTML-elementer ved hjælp af JavaScript
const inputElement = document.getElementById("InputTwo");
const answerButton = document.getElementById("answerButtonTwo");
const answerFeedbackElement = document.getElementById("answerFeedbackTwo");

// Tilføj en klikhåndterer til knappen
answerButton.addEventListener("click", function (e) {
   e.preventDefault();
   // Hent værdien fra inputfeltet og konverter til et heltal
   const userInput = parseInt(inputElement.value);

   // Definér vejrtypebeskrivelserne med en switch-case-struktur
   let weatherType = "Ukendt vejrtype";

   switch (userInput) {
      case 0:
         weatherType = "No precipitation at the station at the time of observation";
         break;
      case 1:
         weatherType = "Clouds generally dissolving or becoming less developed";
         break;
      case 2:
         weatherType = "State of sky on the whole unchanged";
         break;
      case 3:
         weatherType = "Clouds generally forming or developing";
         break;
      case 4:
         weatherType = "Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke or volcanic ashes";
         break;
      case 5:
         weatherType = "Haze";
         break;
      case 6:
         weatherType = "Widespread dust in suspension in the air, not raised by wind at or near the station at the time of observation";
         break;
      case 7:
         weatherType = "Dust or sand raised by wind at or near the station at the time of observation, but no well developed dust whirl(s) or sand whirl(s), and no duststorm or sandstorm seen";
         break;
      case 8:
         weatherType = "Well developed dust whirl(s) or sand whirl(s) seen at or near the station during the preceding hour or at the time ot observation, but no duststorm or sandstorm";
         break;
      case 9:
         weatherType = "Duststorm or sandstorm within sight at the time of observation, or at the station during the preceding hour";
         break;
      case 10:
         weatherType = "Mist";
         break;
      case 11:
         weatherType = "Patches";
         break;
      case 12:
         weatherType = "More or less continuous";
         break;
      case 13:
         weatherType = "Lightning visible, no thunder heard";
         break;
      case 14:
         weatherType = "Precipitation within sight, not reaching the ground or the surface of the sea";
         break;
      case 15:
         weatherType = "Precipitation within sight, reaching the ground or the surface of the sea, but distant, i.e. estimated to be more than 5 km from the station";
         break;
      case 16:
         weatherType = "Precipitation within sight, reaching the ground or the surface of the sea, near to, but not at the station";
         break;
      case 17:
         weatherType = "Thunderstorm, but no precipitation at the time of observation";
         break;
      case 18:
         weatherType = "Squalls";
         break;
      case 19:
         weatherType = "Funnel cloud(s)";
         break;
      case 20:
         weatherType = "Drizzle (not freezing) or snow grains";
         break;
      case 21:
         weatherType = "Rain (not freezing)";
         break;
      case 22:
         weatherType = "Snow";
         break;
      case 23:
         weatherType = "Rain and snow or ice pellets";
         break;
      case 24:
         weatherType = "Freezing drizzle or freezing rain";
         break;
      case 25:
         weatherType = "Shower(s) of rain";
         break;
      case 26:
         weatherType = "Shower(s) of snow, or of rain and snow";
         break;
      case 27:
         weatherType = "Shower(s) of hail*, or of rain and hail";
         break;
      case 28:
         weatherType = "Fog or ice fog";
         break;
      case 29:
         weatherType = "Thunderstorm (with or without precipitation)";
         break;
      case 30:
         weatherType = "Slight or moderate duststorm or sandstorm";
         break;
      case 31:
         weatherType = "Slight or moderate duststorm or sandstorm";
         break;
      case 32:
         weatherType = "Slight or moderate duststorm or sandstorm";
         break;
      case 33:
         weatherType = "Severe duststorm or sandstorm";
         break;
      case 34:
         weatherType = "Severe duststorm or sandstorm";
         break;
      case 35:
         weatherType = "Severe duststorm or sandstorm";
         break;
      case 36:
         weatherType = "Slight or moderate blowing snow";
         break;
      case 37:
         weatherType = "Heavy drifting snow";
         break;
      case 38:
         weatherType = "Slight or moderate blowing snow";
         break;
      case 39:
         weatherType = "Heavy drifting snow";
         break;
      case 40:
         weatherType = "Fog or ice fog at a distance at the time of observation, but not at the station during the preceding hour, the fog or ice fog extending to a level above that of the observer";
         break;
      case 41:
         weatherType = "Fog or ice fog in patches";
         break;
      case 42:
         weatherType = "Fog or ice fog, sky visible";
         break;
      case 43:
         weatherType = "Fog or ice fog, sky invisible";
         break;
      case 44:
         weatherType = "Fog or ice fog, sky visible";
         break;
      case 45:
         weatherType = "Fog or ice fog, sky invisible";
         break;
      case 46:
         weatherType = "Fog or ice fog, sky visible";
         break;
      case 47:
         weatherType = "Fog or ice fog, sky invisible";
         break;
      case 48:
         weatherType = "Fog, depositing rime, sky visible";
         break;
      case 49:
         weatherType = "Fog, depositing rime, sky invisible";
         break;
      case 50:
         weatherType = "Drizzle, not freezing, intermittent";
         break;
      case 51:
         weatherType = "Drizzle, not freezing, continuous";
         break;
      case 52:
         weatherType = "Drizzle, not freezing, intermittent";
         break;
      case 53:
         weatherType = "Drizzle, not freezing, continuous";
         break;
      case 54:
         weatherType = "Drizzle, not freezing, intermittent";
         break;
      case 55:
         weatherType = "Drizzle, not freezing, continuous";
         break;
      case 56:
         weatherType = "Drizzle, freezing, slight";
         break;
      case 57:
         weatherType = "Drizzle, freezing, moderate or heavy (dence)";
         break;
      case 58:
         weatherType = "Drizzle and rain, slight";
         break;
      case 59:
         weatherType = "Drizzle and rain, moderate or heavy";
         break;
      case 60:
         weatherType = "Rain, not freezing, intermittent";
         break;
      case 61:
         weatherType = "Rain, not freezing, continuous";
         break;
      case 62:
         weatherType = "Rain, not freezing, intermittent";
         break;
      case 63:
         weatherType = "Rain, not freezing, continuous";
         break;
      case 64:
         weatherType = "Rain, not freezing, intermittent";
         break;
      case 65:
         weatherType = "Rain, not freezing, continuous";
         break;
      case 66:
         weatherType = "Rain, freezing, slight";
         break;
      case 67:
         weatherType = "Rain, freezing, moderate or heavy (dence)";
         break;
      case 68:
         weatherType = "Rain or drizzle and snow, slight";
         break;
      case 69:
         weatherType = "Rain or drizzle and snow, moderate or heavy";
         break;
      case 70:
         weatherType = "Intermittent fall of snowflakes";
         break;
      case 71:
         weatherType = "Continuous fall of snowflakes";
         break;
      case 72:
         weatherType = "Intermittent fall of snowflakes";
         break;
      case 73:
         weatherType = "Continuous fall of snowflakes";
         break;
      case 74:
         weatherType = "Intermittent fall of snowflakes";
         break;
      case 75:
         weatherType = "Continuous fall of snowflakes";
         break;
      case 76:
         weatherType = "Diamond dust (with or without fog)";
         break;
      case 77:
         weatherType = "Snow grains (with or without fog)";
         break;
      case 78:
         weatherType = "Isolated star-like snow crystals (with or without fog)";
         break;
      case 79:
         weatherType = "Ice pellets";
         break;
      case 80:
         weatherType = "Rain shower(s), slight";
         break;
      case 81:
         weatherType = "Rain shower(s), moderate or heavy";
         break;
      case 82:
         weatherType = "Rain shower(s), violent";
         break;
      case 83:
         weatherType = "Shower(s) of rain and snow mixed, slight";
         break;
      case 84:
         weatherType = "Shower(s) of rain and snow mixed, moderate or heavy";
         break;
      case 85:
         weatherType = "Snow shower(s), slight";
         break;
      case 86:
         weatherType = "Snow shower(s), moderate or heavy";
         break;
      case 87:
         weatherType = "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed";
         break;
      case 88:
         weatherType = "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed";
         break;
      case 89:
         weatherType = "Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder";
         break;
      case 90:
         weatherType = "Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder";
         break;
      case 91:
         weatherType = "Slight rain at time of observation";
         break;
      case 92:
         weatherType = "Moderate or heavy rain at time of observation";
         break;
      case 93:
         weatherType = "Slight snow, or rain and snow mixed or hail at time of observation";
         break;
      case 94:
         weatherType = "Moderate or heavy snow, or rain and snow mixed or hail at time of observation";
         break;
      case 95:
         weatherType = "Thunderstorm, slight or moderate, without hail";
         break;
      case 96:
         weatherType = "Thunderstorm, slight or moderate, with hail";
         break;
      case 97:
         weatherType = "Thunderstorm, heavy, without hail but with rain and/or snow at time of observation";
         break;
      case 98:
         weatherType = "Thunderstorm combined with duststorm or sandstorm at time of observation";
         break;
      case 99:
         weatherType = "Thunderstorm, heavy, with hail at time of observation";
         break;
      default:
         weatherType = "Ukendt vejrtype";
         break;
   }

   // Vis vejrtypen i DOM-elementet
   answerFeedbackElement.textContent = `Vejrtype: ${weatherType}`;
});

