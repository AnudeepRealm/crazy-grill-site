import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Hello: "Welcome",
        FIRST_SLIDE: {
          SLOGAN: "Tasty and Creative",
          TITLE: "Discover",
          SUB_TITLE: "Best of food"
        },
        SECOND_SLIDE: {
          SLOGAN: "Traditional and Authentical",
          TITLE: "Spanish",
          SUB_TITLE: "Flavors"
        },
        THIRD_SLIDE: {
          SLOGAN: "Inspiration and Innovation",
          TITLE: "Events",
          SUB_TITLE: "Special ambience"
        },
        OUR_MENU: "Our Menu",
        OUR_EVENTS: "Our Events",
        EVENTS_OBJ: {
          EVENT_SECTION_TITLE: "UPCOMING EVENTS",
          EVENT_0: {
            description: "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
          },
          EVENT_1: {
            description: "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
          }
        },
        EVENTS: "EVENTS",
        UPCOMING_EVENTS: "Upcoming Events",
        EVENT_TITLE_DESC_FIRST: "Feel the rhythm of the endless night, Come and join us!",
        GALLERY: "GALLERY",
        LATEST_PICTURES: "Latest Pictures",
        GALLERY_TITLE_DESC_FIRST: "We tell our story with pictures",
        NO_EVENT_AVAILABLE: "There are no upcoming events at this time.",
        SPECIALITIES: "Specialities",
        MENU: "Menu",
        HOME_MENU_FIRST_DESCRIPTION: "We offer you a variety of delicious and authentic specialities.",
        HOME_MENU_SECOND_DESCRIPTION: "Choose what suits you best.",
        EVENT_FIRST_DESCRIPTION: "We bring one of the famous singers to Crazy Grill Restaurant.",
        EVENT_SECOND_DESCRIPTION: "Stay tuned for the upcoming events.",
        MENU_HERO_FIRST_DESCRIPTION: "We believe in diversity and that's why Crazy Grill",
        MENU_HERO_SECOND_DESCRIPTION: "offers you a variety of savory dishes.",
        CONTACT_US: "Contact Us",
        WRITE_US: "Write Us",
        NAME: "Name",
        PHONE_NUMBER: "Phone number",
        EMAIL_ADDRESS: "Email address",
        MESSAGE: "Message",
        SEND_MESSAGE: "Send message",
        HEADER: {
          HOME: "Home",
          MENU: "Menu",
          EVENTS: "Events",
          CONTACT: "Contact",
          ENGLISH: "En",
          HINDI: "Hi",
          TELUGU: "Te"
        },
        CONTACT_SUCCESS_MESSAGE: "Your message has been sent successfully!",
        CONTACT_ERROR_MESSAGE: "An error has occured. Please try again!",
        CONTACT_FIRST_DESCRIPTION: "Use the form below to get in touch with us.",
        CONTACT_SECOND_DESCRIPTION: "We are available online at anytime.",
        FIND_LOCATION_TEXT: "Find our our location",
        HERE: "here",
        DIRECTIONS: "Directions",
        WORKING_HOURS: "Work Hours",
        WORKING_HOURS_TEXT: "Everyday of the week from 12h00 to 23h00.",
        REACH_OUT: "Reach out",
        CALL_US: "Call us",
        EMAIL_US: "Email us",
        MADE_BY: "Made by",
        COPYRIGHT: "Copyright",
        CONTACT_HERO_FIRST_DESCRIPTION: "If you have any inquiries, this is the right",
        CONTACT_HERO_SECOND_DESCRIPTION: "place to get in touch with us.",
        LOCATION: "Location",
        FIND_US: "Find Us",
        CONTACT_MAP_FIRST_DESCRIPTION: "Our location is easy to find, as you can",
        CONTACT_MAP_SECOND_DESCRIPTION: "find your way to Crazy Grill via the map below."
      }
    },
    hi: {
      translation: {
        Hello: "नमस्ते",
        FIRST_SLIDE: {
          SLOGAN: "स्वादिष्ट और रचनात्मक",
          TITLE: "खोजें",
          SUB_TITLE: "सर्वश्रेष्ठ भोजन"
        },
        SECOND_SLIDE: {
          SLOGAN: "पारंपरिक और प्रामाणिक",
          TITLE: "स्पेनिश",
          SUB_TITLE: "स्वाद"
        },
        THIRD_SLIDE: {
          SLOGAN: "प्रेरणा और नवीनता",
          TITLE: "आयोजन",
          SUB_TITLE: "विशेष माहौल"
        },
        OUR_MENU: "हमारा मेनू",
        OUR_EVENTS: "हमारे आयोजन",
        EVENTS_OBJ: {
          EVENT_SECTION_TITLE: "आगामी आयोजन",
          EVENT_0: {
            description: "यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है"
          },
          EVENT_1: {
            description: "यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है यह कुछ विवरण है"
          }
        },
        EVENTS: "आयोजन",
        UPCOMING_EVENTS: "आगामी आयोजन",
        EVENT_TITLE_DESC_FIRST: "अनंत रात की लय महसूस करें, आएं और हमारे साथ शामिल हों!",
        GALLERY: "गेलरी",
        LATEST_PICTURES: "नवीनतम तस्वीरें",
        GALLERY_TITLE_DESC_FIRST: "हम अपनी कहानी तस्वीरों से कहते हैं",
        NO_EVENT_AVAILABLE: "इस समय कोई आगामी कार्यक्रम नहीं हैं।",
        SPECIALITIES: "विशेषताएँ",
        MENU: "मेनू",
        HOME_MENU_FIRST_DESCRIPTION: "हम आपको विभिन्न प्रकार की स्वादिष्ट और प्रामाणिक विशेषताएँ प्रदान करते हैं।",
        HOME_MENU_SECOND_DESCRIPTION: "जो आपके लिए सबसे अच्छा हो उसे चुनें।",
        EVENT_FIRST_DESCRIPTION: "हम क्रेजी ग्रिल रेस्तरां में प्रसिद्ध गायकों में से एक को लाते हैं।",
        EVENT_SECOND_DESCRIPTION: "आगामी कार्यक्रमों के लिए बने रहें।",
        MENU_HERO_FIRST_DESCRIPTION: "हम विविधता में विश्वास करते हैं और इसीलिए क्रेजी ग्रिल",
        MENU_HERO_SECOND_DESCRIPTION: "आपको विभिन्न प्रकार के स्वादिष्ट व्यंजन प्रदान करता है।",
        CONTACT_US: "हमसे संपर्क करें",
        WRITE_US: "हमें लिखें",
        NAME: "नाम",
        PHONE_NUMBER: "फ़ोन नंबर",
        EMAIL_ADDRESS: "ईमेल पता",
        MESSAGE: "संदेश",
        SEND_MESSAGE: "संदेश भेजें",
        HEADER: {
          HOME: "होम",
          MENU: "मेनू",
          EVENTS: "आयोजन",
          CONTACT: "संपर्क",
          ENGLISH: "En",
          HINDI: "हिं",
          TELUGU: "ते"
        },
        CONTACT_SUCCESS_MESSAGE: "आपका संदेश सफलतापूर्वक भेज दिया गया है!",
        CONTACT_ERROR_MESSAGE: "एक त्रुटि हुई है। कृपया पुनः प्रयास करें!",
        CONTACT_FIRST_DESCRIPTION: "हमसे संपर्क करने के लिए नीचे दिए गए फॉर्म का उपयोग करें।",
        CONTACT_SECOND_DESCRIPTION: "हम किसी भी समय ऑनलाइन उपलब्ध हैं।",
        FIND_LOCATION_TEXT: "हमारा स्थान खोजें",
        HERE: "यहाँ",
        DIRECTIONS: "दिशा-निर्देश",
        WORKING_HOURS: "काम के घंटे",
        WORKING_HOURS_TEXT: "सप्ताह के हर दिन 12:00 से 23:00 बजे तक।",
        REACH_OUT: "संपर्क करें",
        CALL_US: "हमें कॉल करें",
        EMAIL_US: "हमें ईमेल करें",
        MADE_BY: "द्वारा बनाया गया",
        COPYRIGHT: "कॉपीराइट",
        CONTACT_HERO_FIRST_DESCRIPTION: "यदि आपके कोई प्रश्न हैं, तो यह सही जगह है",
        CONTACT_HERO_SECOND_DESCRIPTION: "हमसे संपर्क करने के लिए।",
        LOCATION: "स्थान",
        FIND_US: "हमें खोजें",
        CONTACT_MAP_FIRST_DESCRIPTION: "हमारा स्थान खोजना आसान है, जैसा कि आप कर सकते हैं",
        CONTACT_MAP_SECOND_DESCRIPTION: "नीचे दिए गए मानचित्र के माध्यम से क्रेजी ग्रिल का रास्ता खोजें।"
      }
    },
    te: {
      translation: {
        Hello: "నమస్కారం",
        FIRST_SLIDE: {
          SLOGAN: "రుచికరమైన మరియు సృజనాత్మకమైన",
          TITLE: "కనుగొనండి",
          SUB_TITLE: "ఉత్తమ ఆహారం"
        },
        SECOND_SLIDE: {
          SLOGAN: "సాంప్రదాయ మరియు ప్రామాణికమైన",
          TITLE: "స్పానిష్",
          SUB_TITLE: "రుచులు"
        },
        THIRD_SLIDE: {
          SLOGAN: "ప్రేరణ మరియు ఆవిష్కరణ",
          TITLE: "కార్యక్రమాలు",
          SUB_TITLE: "ప్రత్యేక వాతావరణం"
        },
        OUR_MENU: "మా మెనూ",
        OUR_EVENTS: "మా కార్యక్రమాలు",
        EVENTS_OBJ: {
          EVENT_SECTION_TITLE: "రాబోయే కార్యక్రమాలు",
          EVENT_0: {
            description: "ఇది కొంత వివరణ ఇది కొంత వివరణ ఇది కొంత వివరణ ఇది కొంత వివరణ ఇది కొంత వివరణ"
          },
          EVENT_1: {
            description: "ఇది కొంత వివరణ ఇది కొంత వివరణ ఇది కొంత వివరణ ఇది కొంత వివరణ ఇది కొంత వివరణ"
          }
        },
        EVENTS: "కార్యక్రమాలు",
        UPCOMING_EVENTS: "రాబోయే కార్యక్రమాలు",
        EVENT_TITLE_DESC_FIRST: "అంతం లేని రాత్రి లయను అనుభవించండి, వచ్చి మాతో చేరండి!",
        GALLERY: "గ్యాలరీ",
        LATEST_PICTURES: "తాజా చిత్రాలు",
        GALLERY_TITLE_DESC_FIRST: "మేము మా కథను చిత్రాలతో చెబుతాము",
        NO_EVENT_AVAILABLE: "ప్రస్తుతం రాబోయే కార్యక్రమాలు ఏవీ లేవు.",
        SPECIALITIES: "ప్రత్యేకతలు",
        MENU: "మెనూ",
        HOME_MENU_FIRST_DESCRIPTION: "మేము మీకు వివిధ రకాల రుచికరమైన మరియు ప్రామాణికమైన ప్రత్యేకతలను అందిస్తున్నాము.",
        HOME_MENU_SECOND_DESCRIPTION: "మీకు ఏది ఉత్తమంగా సరిపోతుందో ఎంచుకోండి.",
        EVENT_FIRST_DESCRIPTION: "మేము ప్రసిద్ధ గాయకులలో ఒకరిని క్రేజీ గ్రిల్ రెస్టారెంట్‌కు తీసుకువస్తాము.",
        EVENT_SECOND_DESCRIPTION: "రాబోయే కార్యక్రమాల కోసం వేచి ఉండండి.",
        MENU_HERO_FIRST_DESCRIPTION: "మేము వైవిధ్యంలో విశ్వసిస్తాము మరియు అందుకే క్రేజీ గ్రిల్",
        MENU_HERO_SECOND_DESCRIPTION: "మీకు వివిధ రకాల రుచికరమైన వంటకాలను అందిస్తుంది.",
        CONTACT_US: "మమ్మల్ని సంప్రదించండి",
        WRITE_US: "మాకు వ్రాయండి",
        NAME: "పేరు",
        PHONE_NUMBER: "ఫోన్ నంబర్",
        EMAIL_ADDRESS: "ఈమెయిలు చిరునామా",
        MESSAGE: "సందేశం",
        SEND_MESSAGE: "సందేశం పంపండి",
        HEADER: {
          HOME: "హోమ్",
          MENU: "మెనూ",
          EVENTS: "కార్యక్రమాలు",
          CONTACT: "సంప్రదించండి",
          ENGLISH: "En",
          HINDI: "हिं",
          TELUGU: "తే"
        },
        CONTACT_SUCCESS_MESSAGE: "మీ సందేశం విజయవంతంగా పంపబడింది!",
        CONTACT_ERROR_MESSAGE: "ఒక లోపం సంభవించింది। దయచేసి మళ్ళీ ప్రయత్నించండి!",
        CONTACT_FIRST_DESCRIPTION: "మమ్మల్ని సంప్రదించడానికి దిగువ ఫారమ్‌ను ఉపయోగించండి.",
        CONTACT_SECOND_DESCRIPTION: "మేము ఎప్పుడైనా ఆన్‌లైన్‌లో అందుబాటులో ఉంటాము.",
        FIND_LOCATION_TEXT: "మా స్థానాన్ని కనుగొనండి",
        HERE: "ఇక్కడ",
        DIRECTIONS: "దిశలు",
        WORKING_HOURS: "పని గంటలు",
        WORKING_HOURS_TEXT: "వారంలోని ప్రతి రోజు 12:00 నుండి 23:00 వరకు.",
        REACH_OUT: "సంప్రదించండి",
        CALL_US: "మాకు కాల్ చేయండి",
        EMAIL_US: "మాకు ఇమెయిల్ చేయండి",
        MADE_BY: "తయారు చేసినవారు",
        COPYRIGHT: "కాపీరైట్",
        CONTACT_HERO_FIRST_DESCRIPTION: "మీకు ఏవైనా విచారణలు ఉంటే, ఇది సరైనది",
        CONTACT_HERO_SECOND_DESCRIPTION: "మమ్మల్ని సంప్రదించడానికి స్థలం.",
        LOCATION: "స్థానం",
        FIND_US: "మమ్మల్ని కనుగొనండి",
        CONTACT_MAP_FIRST_DESCRIPTION: "మా స్థానం సులభంగా కనుగొనవచ్చు, మీరు చేయగలిగినట్లుగా",
        CONTACT_MAP_SECOND_DESCRIPTION: "దిగువ మ్యాప్ ద్వారా క్రేజీ గ్రిల్‌కు మీ మార్గాన్ని కనుగొనండి."
      }
    }
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
