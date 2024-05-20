// i18n.js
import 'intl-pluralrules'

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Определение языков и переводов
const resources = {
  en: {
    translation: {
      welcome: 'Welcome!',
      welcome_1: 'Welcome to S7 Energy!',
      welcome_1_1: 'We are happy to provide energy to your car!',
      welcome_2: 'Eco-friendly sustainability and comfort for every driver',
      welcome_3: 'Only fast charging for your car.',
      welcome_3_1: 'Move around without long waits',
      welcome_4: 'Plan long trips with confidence',
      skip: 'Skip',
      next: 'Next',
      registration: 'Registration',
      log_in: 'Log in',
      open_app: 'Open the application',
      hello: "Hello!",
      phone_number: "Phone number",
      badPhoneInputText: "Incorrect number format has been entered",
      phone_number_sing_in: "Enter the phone number to receive the confirmation code",
      map: 'Map',
      stations: 'Stations',
      favourites: 'Favourites',
      profile: 'Profile',
    },
  },
  ru: {
    translation: {
      welcome: 'Добро пожаловать!',
      welcome_1: 'Добро пожаловать в S7 Energy!',
      welcome_1_1: 'Мы рады обеспечить энергией Вашей авто!',
      welcome_2: 'Экологичная устойчивость и комфорт для каждого водителя',
      welcome_3: 'Только быстрая зарядка для вашего автомобиля.',
      welcome_3_1: 'Передвигайтесь без долгих ожиданий',
      welcome_4: 'Планируйте длительные поездки с уверенностью',
      skip: 'Пропустить',
      next: 'Далее',
      registration: 'Регистрация',
      log_in: 'Войти',
      open_app: 'Открыть приложение',
      hello: "Здравствуйте!",
      phone_number: "Номер телефона",
      badPhoneInputText: "Введен некоректный формат номера",
      phone_number_sing_in: "Введите номер телефона для получения кода подтверждения",
      map: 'Карта',
      stations: 'Станции',
      favourites: 'Избранные',
      profile: 'Профиль',
    },
  },
  uz: {
    translation: {
      welcome: 'Xush kelibsiz!',
      welcome_1: 'S7 Energy-ga xush kelibsiz!',
      welcome_1_1: "Biz sizning mashinangizni energiya bilan ta'minlashdan mamnunmiz!",
      welcome_2: 'Har bir haydovchi uchun barqaror barqarorlik va qulaylik',
      welcome_3: 'Avtomobilingiz uchun faqat tez zaryadlash.',
      welcome_3_1: 'Uzoq kutmasdan harakatlaning',
      welcome_4: 'Ishonch bilan uzoq sayohatlarni rejalashtiring',
      skip: "O'tkazib",
      next: "Keyingi",
      registration: "Ro'yxatdan o'tish",
      log_in: "Kirish",
      open_app: "Ilovani oching",
      hello: "Salom alekum!",
      phone_number: "Telefon raqami",
      badPhoneInputText: "Noto'g'ri raqam formati kiritildi",
      phone_number_sing_in: "Tasdiqlash kodini olish uchun telefon raqamini kiriting",
      map: 'Xarita',
      stations: 'Stantsiyalar',
      favourites: 'Sevimlilar',
      profile: 'Profil',
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // начальный язык
    fallbackLng: 'en', // язык по умолчанию
    interpolation: {
      escapeValue: false, // не требуется экранирование для React Native
    },
  });

export default i18next;
