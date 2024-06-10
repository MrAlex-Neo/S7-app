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
      confirm: 'Confirm',
      registration: 'Registration',
      log_in: 'Log in',
      open_app: 'Open the application',
      hello: "Hello!",
      phone_number: "Phone number",
      badPhoneInputText: "Incorrect number format has been entered",
      badTextInputText: 'You must enter at least three characters',
      phone_number_sing_in: "Enter the phone number to receive the confirmation code",
      map: 'Map',
      stations: 'Stations',
      favourites: 'Favourites',
      profile: 'Profile',
      resendCode: 'Resend the code via',
      resendCodeBtn: 'Resend the confirmation code',
      regCheckBox1: 'By clicking "next", I accept the terms',
      regCheckBox2: 'user agreement',
      enterTheCode: 'Enter the code',
      wrongCode: 'An incorrect confirmation code has been entered',
      checkCode: 'A confirmation code will be sent to the number ',
      checkCode1: '',
      registration: 'Registration',
      name: 'Name',
      surname: 'Surname',
      searchText: 'Search for charging stations',
      busy: 'Busy',
      free: 'Free',
      history: 'History',
      settings: 'Settings',
      FAQ: 'FAQ',
      help: 'Help',
      purse: 'Adding money to your wallet',
      pursebtn: 'Top up your wallet',
      personal_data: 'Personal Information',
      change_lang: 'Change the language',
      exit: 'Exit',
      cancel: 'Cancel',
      save: 'Save',
      contactUs: 'Contact us',
      spend: "Spend",
      received: "Refill",
      kw: 'kW',
      sum: 'sum',
      min: 'min',
      transaction_time: 'Transaction time',
      paid: 'Paid for',
      tariff: 'Tariff',
      charging_time: 'Charging time',
      route: 'Route',
      start: 'Start'
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
      confirm: 'Подтвердить',
      registration: 'Регистрация',
      log_in: 'Войти',
      open_app: 'Открыть приложение',
      hello: "Здравствуйте!",
      phone_number: "Номер телефона",
      badPhoneInputText: "Введен некоректный формат номера",
      badTextInputText: 'Необходимо ввести минимум три символа',
      phone_number_sing_in: "Введите номер телефона для получения кода подтверждения",
      map: 'Карта',
      stations: 'Станции',
      favourites: 'Избранные',
      profile: 'Профиль',
      resendCode: 'Повторно отправить код через',
      resendCodeBtn: 'Отправить повторно код подтверждения',
      regCheckBox1: 'Нажимая «далее», я принимаю условия',
      regCheckBox2: 'пользовательского соглашения',
      enterTheCode: 'Введите код',
      wrongCode: 'Введен неправильный код подтверждения',
      checkCode: 'На номер',
      checkCode1: 'будет отправлен код',
      registration: 'Регистрация',
      name: 'Имя',
      surname: 'Фамилия',
      searchText: 'Поиск зарядных станций',
      busy: 'Занят',
      free: 'Свободен',
      history: 'История',
      settings: 'Настройки',
      FAQ: 'FAQ',
      help: 'Помощь',
      purse: 'Пополнение кошелька',
      pursebtn: 'Пополнить кошелек',
      personal_data: 'Личная информация',
      change_lang: 'Изменить язык',
      exit: 'Выйти',
      cancel: 'Отменить',
      save: 'Сохранить',
      contactUs: 'Связаться с нами',
      spend: "Списано",
      received: "Пополнение",
      kw: 'кВт',
      sum: 'сум',
      min: 'мин',
      transaction_time: 'Время транзакции',
      paid: 'Оплачено',
      tariff: 'Тариф',
      charging_time: 'Время зарядки',
      route: 'Маршрут',
      start: 'Начать'
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
      confirm: 'Tasdiqlash',
      registration: "Ro'yxatdan o'tish",
      log_in: "Kirish",
      open_app: "Ilovani oching",
      hello: "Salom alekum!",
      phone_number: "Telefon raqami",
      badPhoneInputText: "Noto'g'ri raqam formati kiritildi",
      badTextInputText: 'Siz kamida uchta belgini kiritishingiz kerak',
      phone_number_sing_in: "Tasdiqlash kodini olish uchun telefon raqamini kiriting",
      map: 'Xarita',
      stations: 'Stantsiyalar',
      favourites: 'Sevimlilar',
      profile: 'Profil',
      resendCode: 'Kodni qayta yuboring',
      resendCodeBtn: 'Tasdiqlash kodini qayta yuboring',
      regCheckBox1: '"Keyingi" tugmasini bosish orqali men shartlarni qabul qilaman',
      regCheckBox2: 'foydalanuvchi shartnomasi',
      enterTheCode: 'Kodni kiriting',
      wrongCode: "Noto'g'ri tasdiqlash kodi kiritildi",
      checkCode: 'Tasdiqlash kodi',
      checkCode1: 'raqamiga yuboriladi',
      registration: "Ro'yxatdan o'tish",
      name: 'Ism',
      surname: 'Familiyasi',
      searchText: 'Zaryadlash stantsiyalarini qidirish',
      busy: 'Band',
      free: 'Ozod',
      history: 'Tarix',
      settings: 'Sozlamalar',
      FAQ: 'FAQ',
      help: 'Yordam',
      purse: "Hamyonni to'ldirish",
      pursebtn: "Hamyonni to'ldiring",
      personal_data: "Shaxsiy ma'lumotlar",
      change_lang: "Tilni o'zgartirish",
      exit: 'Chiqish',
      cancel: 'Bekor qilish',
      save: 'Saqlash',
      contactUs: "Biz bilan bog'laning",
      spend: "Sarflangan",
      received: "To'ldirish",
      kw: 'kVt',
      sum: "so'm",
      min: 'min',
      transaction_time: 'Tranzaksiya vaqti',
      paid: "To'langan",
      tariff: 'Tarif',
      charging_time: 'Zaryadlash vaqti',
      route: "Yo'nalish",
      start: 'Boshlang'
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
