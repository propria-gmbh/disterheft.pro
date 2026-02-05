export const languages = ["ru", "de", "en"];
export const defaultLanguage = "ru";

export const sharedLinks = {
  form: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing",
  license: "https://drive.google.com/file/d/1-JVI5qmZRAJuBzoN7MifXP865GenurZW/view?usp=sharing",
  instagram: "https://www.instagram.com/anna_pro_fit/",
  heroReference: "https://www.koerperform.at/personal-fitness-training/"
};

export const content = {
  ru: {
    lang: "ru",
    brand: "Anna Disterheft",
    nav: [
      { label: "Обо мне", href: "#about" },
      { label: "Тренировки", href: "#training" },
      { label: "Контакт", href: "#contact" },
      { label: "Отзывы", href: "#reviews" }
    ],
    hero: {
      titleParts: [
        { text: "Твой персональный тренер, готовый подарить тебе здоровье и энергию" }
      ],
      buttonLabel: "Контакт",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    about: {
      heading: "Анна Дистергефт",
      leadParts: [
        { text: "Твой " },
        { text: "лицензированный", href: "https://drive.google.com/file/d/1-JVI5qmZRAJuBzoN7MifXP865GenurZW/view?usp=sharing" },
        { text: " фитнес-тренер в Берлине." }
      ]
    },
    stats: [
      { value: "18", lines: ["лет опыта"] },
      { value: "70+", lines: ["довольных клиентов"] },
      { value: "100+", lines: ["видов", "тренировок"] }
    ],
    training: {
      heading: "Тренировки со мной это:",
      cards: [
        {
          title: "Гибкий формат",
          lines: ["🏋️‍♂️ Оффлайн в Берлине", "💻 Онлайн из любой точки планеты", "⏱️ В удобное для Вас время"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg 1x, https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg 2x",
            alt: "spache-auswaehlen.jpg"
          }
        },
        {
          title: "Удобный для тебя язык",
          lines: ["🇷🇺 Русский", "🇺🇸 Английский", "🇩🇪 Немецкий"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg 1x, https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg 2x",
            alt: "umfassender-ansatz.jpg"
          }
        },
        {
          title: "Комплексный подход",
          lines: ["Регулярные консультации по питанию и методам восстановления сил после тренировок"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg 1x, https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg 2x",
            alt: "personal-coaching.jpg"
          }
        }
      ],
      buttonLabel: "Хочу бесплатную консультацию",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    audience: {
      heading: "Кто со мной тренируется?",
      items: [
        {
          title: "Новички в спорте",
          text: "Если вы только начинаете свой путь в мире спорта, не переживайте — моя программа подходит для тех, кто хочет сделать спорт привычкой."
        },
        {
          title: "Мужчины и женщины",
          text: "Мои тренировки подходят и мужчинам, и женщинам, которые хотят выглядеть красиво, иметь стройное тело, оставаться в тонусе и обладать энергией на весь день."
        },
        {
          title: "Беременные и молодые мамы",
          text: "Для будущих мам и молодых мам, которые стремятся вернуться в форму после беременности. У меня есть специализированные тренировки, способствующие здоровью и активности."
        },
        {
          title: "Пожилые люди",
          text: "Если вы хотите оставаться здоровыми и энергичными ещё долгие годы, мои тренировки помогут вам укрепить ваше тело и поддерживать мобильность."
        },
        {
          title: "Подготовка к соревнованиям",
          text: "Марафон, дистанции 10 км или соревнования по бодибилдингу, я помогу вам подготовиться и достичь высоких результатов."
        },
        {
          title: "Восстановление после травм",
          text: "Для тех, кто восстанавливается после травм, будь то травмы колена, плеча или другие, я помогу вам восстановить здоровье и вернуться к активному образу жизни."
        }
      ]
    },
    process: {
      heading: "Как это работает?",
      steps: [
        {
          number: "01",
          title: "Анкета",
          text: "Перед началом наших тренировок прошу вас уделить всего 5 минут на заполнение нашей анкеты. Знание вашего уровня подготовки, ваших целей и особенностей вашего здоровья позволяет мне создать для вас индивидуальную программу тренировок, которая будет максимально эффективной и безопасной."
        },
        {
          number: "02",
          title: "Бесплатная консультация",
          text: "Далее, я отвечу вам в течение одного дня и мы назначим бесплатную консультацию. В течение 30 минут у нас будет возможность обсудить ваше здоровье и опыт тренировок, цели и предпочтения. Я подробно расскажу как я работаю и мы узнаем друг друга лучше."
        },
        {
          number: "03",
          title: "Начинаем тренироваться",
          text: "Мы приступаем к тренировкам 1 на 1 в Берлине или онлайн из любого удобного для вас места!"
        }
      ],
      buttonLabel: "Заполнить анкету",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    highlight: {
      text: "Клиенты, выбирающие персонального тренера, посещают тренировки регулярнее и достигают результатов в 4 раза быстрее, чем при самостоятельных занятиях!",
      image: {
        src: "https://static.wixstatic.com/media/defabc_04c67d22aa104474b5483347143ecaf8~mv2.jpg/v1/fill/w_327,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/defabc_04c67d22aa104474b5483347143ecaf8~mv2.jpg",
        alt: "DSCF7250.JPG"
      }
    },
    testimonial: {
      quote: "“Начала тренироваться с Аней онлайн, чтобы подтянуть тело, повысить выносливость и полюбить спорт. За счет разнообразных упражнений и чуткого отношения Ани, я незаметно привыкла к нагрузкам и с удовольствием подключалась к тренировкам. Очень благодарна за внимательность и терпеливость! И конечно за профессионализм.”",
      author: "– Катя"
    },
    cta: {
      text: "Я готовa помочь тебе на пути к лучшей версии себя. Давай начнем этот захватывающий путь вместе!"
    },
    footer: {
      copyright: "©2023 by Anna Disterheft. All rights reserved."
    }
  },
  de: {
    lang: "de",
    brand: "Anna Disterheft",
    nav: [
      { label: "Обо мне", href: "#about" },
      { label: "Тренировки", href: "#training" },
      { label: "Контакт", href: "#contact" },
      { label: "Отзывы", href: "#reviews" },
      { label: "Новая страница", href: "/de/datenschutzerklaerung" }
    ],
    hero: {
      titleParts: [
        { text: "Ihre persönliche Fitness Trainerin", href: "https://www.koerperform.at/personal-fitness-training/" },
        { text: ", der Ihnen Gesundheit und Energie schenkt" }
      ],
      buttonLabel: "Kontakt",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    about: {
      heading: "Anna Disterheft",
      leadParts: [
        { text: "Ihr " },
        { text: "lizenzierte", href: "https://drive.google.com/file/d/1-JVI5qmZRAJuBzoN7MifXP865GenurZW/view?usp=sharing" },
        { text: " Fitnesstrainerin in Berlin." }
      ]
    },
    stats: [
      { value: "18", lines: ["langjährige Erfahrung"] },
      { value: "70+", lines: ["zufriedene Kunden"] },
      { value: "100+", lines: ["Spezies", "Ausbildung"] }
    ],
    training: {
      heading: "Training bei mir ist:",
      cards: [
        {
          title: "Flexibles Format",
          lines: ["Offline in Berlin", "Online von überall auf der Welt", "Zu einem für Sie passenden Zeitpunkt"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg 1x, https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg 2x",
            alt: "spache-auswaehlen.jpg"
          }
        },
        {
          title: "Für Sie passende Sprache",
          lines: ["Russisch", "Englisch", "Deutsch"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg 1x, https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg 2x",
            alt: "umfassender-ansatz.jpg"
          }
        },
        {
          title: "Ein ganzheitlicher Ansatz",
          lines: ["Regelmäßige Beratungen zu Ernährung und Methoden zur Wiederherstellung der Kraft nach dem Training"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg 1x, https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg 2x",
            alt: "personal-coaching.jpg"
          }
        }
      ],
      buttonLabel: "Kostenlose Beratung",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    audience: {
      heading: "Wer trainiert mit mir?",
      items: [
        {
          title: "Neu im Sport",
          text: "Wenn Sie gerade erst Ihre Reise in die Welt des Sports beginnen, machen Sie sich keine Sorgen – mein Programm ist für diejenigen geeignet, die Sport zur Gewohnheit machen möchten."
        },
        {
          title: "Männer und Frauen",
          text: "Meine Workouts eignen sich sowohl für Männer als auch für Frauen, die schön aussehen, einen schlanken Körper haben, fit bleiben und den ganzen Tag über Energie haben möchten."
        },
        {
          title: "Schwangere und nue Mütter",
          text: "Für werdende Mütter und frischgebackene Mütter, die nach der Schwangerschaft wieder in Form kommen möchten. Ich habe spezielle Workouts, die Gesundheit und Aktivität fördern."
        },
        {
          title: "Ältere Menschen",
          text: "Wenn Sie über Jahre hinweg gesund und voller Energie bleiben möchten, helfen Ihnen meine Workouts dabei, Ihren Körper zu stärken und Ihre Beweglichkeit zu erhalten."
        },
        {
          title: "Vorbereitung auf Wettkämpfe",
          text: "Marathon, 10 km oder Bodybuilding-Wettkampf, ich helfe Ihnen bei der Vorbereitung und beim Erreichen hoher Ergebnisse."
        },
        {
          title: "Erholung von Verletzungen",
          text: "Allen, die sich von einer Verletzung erholen, egal ob Knie-, Schulter- oder andere Verletzungen, helfe ich Ihnen, wieder gesund zu werden und zu einem aktiven Lebensstil zurückzukehren."
        }
      ]
    },
    process: {
      heading: "Wie es funktioniert?",
      steps: [
        {
          number: "01",
          title: "Fragebogen",
          text: "Vor Beginn unserer Schulung bitte ich Sie, sich nur 5 Minuten Zeit zu nehmen, um unseren Fragebogen auszufüllen. Die Kenntnis Ihres Trainingsstandes, Ihrer Ziele und Ihrer Gesundheit ermöglicht es mir, für Sie ein individuelles Trainingsprogramm zu erstellen, das möglichst effektiv und sicher ist."
        },
        {
          number: "02",
          title: "Kostenlose Beratung",
          text: "Anschließend werde ich Ihnen innerhalb eines Tages antworten und wir vereinbaren einen kostenlosen Beratungstermin. 30 Minuten lang haben wir die Möglichkeit, Ihre Gesundheits- und Trainingserfahrungen, Ziele und Vorlieben zu besprechen. Ich erzähle Dir ausführlich meine Arbeitsweise und wir lernen uns besser kennen."
        },
        {
          number: "03",
          title: "Beginnen wir mit dem Training",
          text: "Wir beginnen mit dem Training 1 zu 1 in Berlin oder online an jedem für Sie passenden Ort!"
        }
      ],
      buttonLabel: "Formular ausfüllen",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    highlight: {
      text: "Kunden, die sich für einen Personal Trainer entscheiden, besuchen das Training regelmäßiger und erzielen viermal schneller Ergebnisse als mit einem unabhängigen Training!",
      image: {
        src: "https://static.wixstatic.com/media/defabc_04c67d22aa104474b5483347143ecaf8~mv2.jpg/v1/fill/w_327,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/defabc_04c67d22aa104474b5483347143ecaf8~mv2.jpg",
        alt: "DSCF7250.JPG"
      }
    },
    testimonial: {
      quote: "„Ich habe das Training mit Anja online begonnen, um meinen Körper zu straffen, meine Ausdauer zu verbessern und mich in den Sport zu verlieben. Dank der Vielfalt der Übungen und Anjas einfühlsamer Art habe ich mich unbemerkt an die Übungen gewöhnt und bin gerne zum Training gekommen. Ich bin sehr dankbar für ihre Aufmerksamkeit und Geduld! Und natürlich auch für ihre Kompetenz.“",
      author: "- Kate"
    },
    cta: {
      text: "Ich bin bereit, Ihnen auf Ihrem Weg zu einer besseren Version Ihrer selbst zu helfen. Lasst uns gemeinsam diese spannende Reise beginnen!"
    },
    footer: {
      copyright: "©2023 von Anna Disterheft. Alle Rechte vorbehalten."
    }
  },
  en: {
    lang: "en",
    brand: "Anna Disterheft",
    nav: [
      { label: "Обо мне", href: "#about" },
      { label: "Тренировки", href: "#training" },
      { label: "Контакт", href: "#contact" },
      { label: "Отзывы", href: "#reviews" },
      { label: "Новая страница", href: "/en/datenschutzerklaerung" }
    ],
    hero: {
      titleParts: [
        { text: "Your dedicated fitness coach, prepared to empower you with vitality and well-being" }
      ],
      buttonLabel: "Contact",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    about: {
      heading: "Anna Disterheft",
      leadParts: [
        { text: "Your " },
        { text: "licensed", href: "https://drive.google.com/file/d/1-JVI5qmZRAJuBzoN7MifXP865GenurZW/view?usp=sharing" },
        { text: " fitness trainer in Berlin." }
      ]
    },
    stats: [
      { value: "18", lines: ["years of experience"] },
      { value: "70+", lines: ["satisfied clients"] },
      { value: "100+", lines: ["types of workouts"] }
    ],
    training: {
      heading: "Personal coaching is:",
      cards: [
        {
          title: "Flexible format",
          lines: ["Offline in Berlin", "Online from anywhere in the world", "Schedule that works for you"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg 1x, https://static.wixstatic.com/media/defabc_aadb37148e10496b9a6ac5630f9ef918~mv2.jpg/v1/crop/x_0,y_2163,w_3947,h_3453/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-04.jpg 2x",
            alt: "spache-auswaehlen.jpg"
          }
        },
        {
          title: "Choose your language",
          lines: ["Russian", "English", "German"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg 1x, https://static.wixstatic.com/media/defabc_c4af1e429353455f802d8f078ec26ad3~mv2.jpg/v1/crop/x_0,y_1221,w_3891,h_3405/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-03.jpg 2x",
            alt: "umfassender-ansatz.jpg"
          }
        },
        {
          title: "A holistic approach",
          lines: ["Regular consultations on nutrition and recovery methods after workouts"],
          image: {
            src: "https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg",
            srcSet: "https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg 1x, https://static.wixstatic.com/media/defabc_a692d56885f541afa4b42a9948ab5f91~mv2.jpg/v1/crop/x_0,y_2234,w_4016,h_3514/fill/w_960,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/-02.jpg 2x",
            alt: "personal-coaching.jpg"
          }
        }
      ],
      buttonLabel: "Book free consultation",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    audience: {
      heading: "Who trains with me?",
      items: [
        {
          title: "Beginners",
          text: "If you are just starting your journey in the world of sports, do not worry - my program is suitable for those who want to make sports a habit."
        },
        {
          title: "Men and women",
          text: "My workouts are suitable for both men and women who want to look beautiful, have a slim body, stay toned and have energy throughout the day."
        },
        {
          title: "Pregnant women and new mothers",
          text: "For future moms and new moms who want to get back in shape after pregnancy. Specialized postpartum workouts that promote health and activity."
        },
        {
          title: "Older people",
          text: "If you want to stay healthy and energetic for years to come, my workouts will help you strengthen your body and maintain mobility."
        },
        {
          title: "Competition preparation",
          text: "А marathon, a 10 km run or a bodybuilding competition, I will help you prepare and achieve high results."
        },
        {
          title: "Recovery after injuries",
          text: "For those recovering from injury, whether knee, shoulder or other, I will help you regain your health and return to an active lifestyle."
        }
      ]
    },
    process: {
      heading: "How it works?",
      steps: [
        {
          number: "01",
          title: "Apply",
          text: "Before working together I ask you to take just 5 minutes to fill out a questionnaire. Knowing your level of training, your goals and health allows me to create an individual training program for you that will be as effective and safe as possible."
        },
        {
          number: "02",
          title: "Free consultation",
          text: "I will answer you within one day and we will schedule a free consultation. We'll jump on a 30 minute call to discuss your health and training experience, goals and preferences. I will tell you in detail how I work and we will get to know each other better."
        },
        {
          number: "03",
          title: "Get started",
          text: "We start 1 on 1 fitness coaching in Berlin or online from any location convenient for you!"
        }
      ],
      buttonLabel: "Apply now",
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSdc71MfTtpIHvpWLOjKJGsoa4pkXJMQI5XrZHR0YmpK1DS5Ig/viewform?usp=sharing"
    },
    highlight: {
      text: "Clients who choose a personal trainer work out more regularly and achieve results 4 times faster than those without a trainer!",
      image: {
        src: "https://static.wixstatic.com/media/defabc_04c67d22aa104474b5483347143ecaf8~mv2.jpg/v1/fill/w_327,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/defabc_04c67d22aa104474b5483347143ecaf8~mv2.jpg",
        alt: "DSCF7250.JPG"
      }
    },
    testimonial: {
      quote: "“I started training online with Anya to tone my body, improve my endurance, and learn to love sports. Thanks to the varied exercises and Anya's sensitive approach, I gradually got used to the workouts without even noticing and eagerly joined the training sessions. I am very grateful for her attentiveness and patience! And, of course, for her professionalism.”",
      author: "- Kate"
    },
    cta: {
      text: "Together, we can achieve your fitness goals and create a healthier, stronger, and happier you."
    },
    footer: {
      copyright: "©2023 by Anna Disterheft. All rights reserved."
    }
  }
};
