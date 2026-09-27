// Initial CMS content, generated from the pre-CMS sources (src/data/company.ts, NAV_GROUPS in
// src/data/servicePages.ts, messages/*.json Nav/Common/Insights, spec copy C-FOOTER) so the
// site renders exactly as before. Used only by the create-only seed (src/cms/seed/run.ts);
// kept as the backup/reference of those values. Localized values are { en, ru }.

export const SEED = {
  "siteSettings": {
    "contact": {
      "phoneDisplay": "+971 58 809 9223",
      "phoneE164": "+971588099223",
      "whatsappNumber": "971588099223",
      "email": "info@bellverogroup.com",
      "workingHours": {
        "en": "Monday–Friday, 9:00–18:00 (UAE time)",
        "ru": "Понедельник–пятница, 9:00–18:00, время ОАЭ"
      },
      "visitsLine": {
        "en": "Meetings at your property or another agreed location. Production visits by appointment.",
        "ru": "Встречи на вашем объекте или в другом согласованном месте. Посещение производства: по договорённости."
      }
    },
    "legal": {
      "entityName": null,
      "licenceNumber": null,
      "issuingAuthority": null,
      "activities": {
        "en": null,
        "ru": null
      },
      "registeredAddress": null
    },
    "privacy": {
      "contactEmail": null,
      "providers": {
        "en": null,
        "ru": null
      },
      "retention": {
        "en": null,
        "ru": null
      }
    }
  },
  "navigation": {
    "header": {
      "servicesLabel": {
        "en": "Services",
        "ru": "Услуги"
      },
      "serviceGroups": [
        {
          "label": {
            "en": "Interior & Landscape Design",
            "ru": "Дизайн интерьера и ландшафта"
          },
          "services": [
            "interior-design",
            "landscape-design"
          ]
        },
        {
          "label": {
            "en": "Villa & Apartment Renovation",
            "ru": "Ремонт вилл и квартир"
          },
          "services": [
            "villa-renovation",
            "apartment-renovation"
          ]
        },
        {
          "label": {
            "en": "Commercial Fit-Out",
            "ru": "Коммерческая отделка"
          },
          "services": [
            "commercial-fit-out"
          ]
        },
        {
          "label": {
            "en": "Bespoke Joinery & Furniture",
            "ru": "Столярные изделия и мебель"
          },
          "services": [
            "bespoke-joinery",
            "custom-kitchens",
            "wardrobes"
          ]
        }
      ],
      "specialistLabel": {
        "en": "Specialist Services",
        "ru": "Специализированные услуги"
      },
      "specialistServices": [
        "approvals",
        "mep-hvac",
        "materials-procurement"
      ],
      "allServicesLabel": {
        "en": "All Services",
        "ru": "Все услуги"
      },
      "links": [
        {
          "label": {
            "en": "Projects",
            "ru": "Проекты"
          },
          "route": "/projects"
        },
        {
          "label": {
            "en": "Our Process",
            "ru": "Как мы работаем"
          },
          "route": "/process"
        },
        {
          "label": {
            "en": "About",
            "ru": "О компании"
          },
          "route": "/about"
        },
        {
          "label": {
            "en": "Contact",
            "ru": "Контакты"
          },
          "route": "/contact"
        }
      ],
      "ctaLabel": {
        "en": "Discuss Your Project",
        "ru": "Обсудить проект"
      }
    },
    "footer": {
      "exploreHeading": {
        "en": "Explore",
        "ru": "Разделы"
      },
      "exploreLinks": [
        {
          "label": {
            "en": "Services",
            "ru": "Услуги"
          },
          "route": "/services"
        },
        {
          "label": {
            "en": "Projects",
            "ru": "Проекты"
          },
          "route": "/projects"
        },
        {
          "label": {
            "en": "Our Process",
            "ru": "Как мы работаем"
          },
          "route": "/process"
        },
        {
          "label": {
            "en": "Our Story",
            "ru": "О компании"
          },
          "route": "/about"
        },
        {
          "label": {
            "en": "Insights",
            "ru": "Статьи"
          },
          "route": "/insights"
        },
        {
          "label": {
            "en": "Contact",
            "ru": "Контакты"
          },
          "route": "/contact"
        }
      ]
    }
  }
} as const;
