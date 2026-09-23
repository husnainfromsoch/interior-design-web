import { getServices } from "@/data/services";

export type TopicSlug = "approvals" | "costs" | "materials" | "joinery" | "design" | "process";

export type Topic = {
  slug: TopicSlug;
  name: { en: string; ru: string };
};

export const TOPICS: Topic[] = [
  { slug: "approvals", name: { en: "Approvals & Permits", ru: "Согласования и разрешения" } },
  { slug: "costs", name: { en: "Costs & Budgeting", ru: "Стоимость и бюджет" } },
  { slug: "materials", name: { en: "Materials & Finishes", ru: "Материалы и отделка" } },
  { slug: "joinery", name: { en: "Bespoke Joinery", ru: "Мебель на заказ" } },
  { slug: "design", name: { en: "Design Ideas", ru: "Идеи дизайна" } },
  { slug: "process", name: { en: "Process & Planning", ru: "Процесс и планирование" } },
];

export function topicName(slug: TopicSlug, locale: string) {
  const topic = TOPICS.find((t) => t.slug === slug);
  return topic ? (locale === "ru" ? topic.name.ru : topic.name.en) : slug;
}

export const AUTHOR = {
  name: "Sayyed Osaf",
  role: { en: "Co-Founder & Chief Engineer", ru: "Сооснователь и главный инженер" },
  bio: {
    en: "Sayyed Osaf leads the technical direction of Bellvero Group. Before co-founding the family business, he held chief engineer positions with UAE contracting companies on large residential, commercial and public buildings in Dubai and Abu Dhabi. He reviews every Insights article for technical accuracy.",
    ru: "Sayyed Osaf руководит техническим направлением Bellvero Group. До основания семейного бизнеса он занимал должность главного инженера в подрядных компаниях ОАЭ на крупных жилых, коммерческих и общественных объектах Дубая и Абу-Даби. Он проверяет каждую статью раздела на техническую точность.",
  },
  photo: null as string | null,
  profileLink: "/about#leadership",
};

export type ArticleLocaleContent = {
  title: string;
  seoTitle: string;
  metaDescription: string;
  standfirst: string;
  excerpt: string;
  keyPoints: string[];
  /** Lightweight markdown subset: ## H2, ### H3, > quote, "Callout — Important:" paragraphs, - bullets, 1. numbered lists, **bold** */
  body: string;
  faq?: { q: string; a: string }[];
};

export type Article = {
  id: string;
  slug: string;
  topic: TopicSlug;
  regulatory: boolean;
  publishedAt: string;
  lastReviewedAt: string;
  featured?: boolean;
  cover: string;
  relatedServiceSlugs: string[];
  relatedArticleIds: string[];
  en: ArticleLocaleContent;
  ru: ArticleLocaleContent;
};

export const ARTICLES: Article[] = [
  {
    id: "INS-001",
    slug: "villa-renovation-approvals-dubai",
    topic: "approvals",
    regulatory: true,
    publishedAt: "2026-09-22",
    lastReviewedAt: "2026-09-22",
    featured: true,
    cover: "/visuals/PHOTO-2025-04-15-12-21-17(1).jpg",
    relatedServiceSlugs: ["approvals-noc-permits", "renovation-fit-out-dubai"],
    relatedArticleIds: ["INS-002", "INS-003"],
    en: {
      title: "Villa Renovation Approvals in Dubai: How the Route Is Decided",
      seoTitle: "Villa Renovation Approvals in Dubai | Bellvero Group",
      metaDescription:
        "Who approves a villa renovation in Dubai depends on where the villa is, not on the work. How the route is set, what usually needs a permit and what to prepare.",
      standfirst:
        "Before a villa renovation is designed, one question has to be answered: who approves it. This guide explains why the answer depends on the location of the villa, which works usually need approval, and what to prepare before the first conversation.",
      excerpt: "Who approves a villa renovation depends on where the villa is. How the route is decided and why it comes before design.",
      keyPoints: [
        "In Dubai, the location of the villa decides which authority issues the permit, which drawing format is accepted and whether a community NOC comes first.",
        "Layout changes, structural work, extensions, external changes and changes to services usually require approval. Finishes alone usually do not.",
        "A community or building management may require notification even where no authority permit applies.",
        "The route should be confirmed before design work begins, because approval requirements shape the design itself.",
        "No one can honestly guarantee an approval by a fixed date.",
      ],
      body: `## Approval in Dubai is not one process

Owners often ask us a simple question: "Do I need a permit for my renovation?" The honest first answer is another question: where is the villa?

In Dubai, approval is not a single procedure that every property follows. Which authority issues the permit, which drawing format it accepts, and whether a community No Objection Certificate (NOC) is needed first are decided mainly by the location of the property. The type of work matters too, but it comes second. Two identical renovations in two different communities can follow two different routes.

That is why identifying the correct route is the first thing we do on any villa project, and we do it before design work begins.

## The route depends on where the villa is

In practice, most villa and apartment projects in Dubai and Abu Dhabi fall into one of four situations.

- **Independent villa on Dubai mainland.** What usually comes first: no master-developer layer. Who issues the permit: Dubai Municipality, through the Build in Dubai platform.
- **Villa in a master community.** What usually comes first: the community's own NOC, reviewed against its design guidelines. Who issues the permit: the authority with jurisdiction over that community.
- **Apartment or office in a building.** What usually comes first: building management approval. Who issues the permit: the authority responsible for that zone; in some Dubai zones this is not the municipality.
- **Property in Abu Dhabi.** What usually comes first: a different emirate and a different system. Who issues the permit: the responsible department, through the TAMM portal.

The second row is where most villa owners are. In a master community, the developer or community management has its own guidelines for what a villa may look like from the outside, and sometimes for how works must be carried out. Their NOC is usually the first step, and the authority permit follows.

This table is a map, not a ruling. The exact route for a specific villa is confirmed by checking the community, the plot and the proposed works together.

## Why this is settled before the design, not after

It is tempting to design first and "sort out the permits" later. On a villa, that order is expensive.

Approval requirements shape the design itself. External changes, structural openings, extensions, a new pool, changes to electrical, water or air-conditioning loads: each carries its own requirement. In a master community, the external appearance is also reviewed against guidelines written specifically for that community. A design developed without these constraints in mind is often redrawn later, and redrawing costs time on a project that has already started.

Drawing format matters as much as content. Authorities do not share a single submission format, and a set prepared for one authority can be rejected by another without its content being assessed. Establishing the route first is what prevents this.

> The cheapest moment to meet an approval requirement is before the first line of the design is drawn. — Sayyed Osaf

## What usually requires approval

The following is a general guide. It is based on how requirements are commonly applied, not on your property, and it is always checked case by case.

**Usually requires approval:**

- removing or adding walls and changing the layout
- any work that affects the structure
- extensions and additions to the built-up area
- changes to the external appearance, including windows, cladding and roof elements
- pools, canopies and permanent outdoor structures
- relocating drainage and water points
- changes to electrical load or distribution
- modifying air-conditioning ducting and equipment

**Usually does not, but is still checked:**

- painting
- replacing floor and wall finishes
- replacing sanitary fixtures without relocating services
- furniture and non-structural false ceilings

Callout — Important: Even where no authority permit applies, the community or building management may still require notification before works start, and may set rules on working hours, access and site protection. Check this before the first contractor arrives.

## What we do on the approvals side

When a client asks us to handle approvals, the work follows the same four steps on every project:

1. **Review the proposed works and confirm the applicable route** for that specific property.
2. **Prepare the required drawings** in the format the authority accepts.
3. **Coordinate the submissions** and respond to comments.
4. **Track the status** and keep the client informed.

Approvals are coordinated by our engineering lead. Our service fee, authority charges and any deposits are always shown as separate items in the proposal, so the client can see which costs are ours and which are not.

What we do not do is promise a date. Decisions and review periods depend on the approving parties and on how complete the application is. A contractor who guarantees an approval date is promising something that is not in their control.

## What to prepare before the first conversation

You do not need a complete document pack to start. For a first discussion, it helps to have:

1. The location of the property, including the community name if it is in one.
2. Any plans you have: original drawings from the developer, previous renovation drawings, or even a clear floor plan.
3. A description of the changes you are considering, in your own words.
4. Any approvals already obtained for earlier works.

After reviewing the case, we confirm which further documents are needed. We never ask for ownership documents through a public website form.

## The practical takeaway

If you are planning a villa renovation in Dubai, start by confirming the approval route for your property, then design within it. It is a short step at the beginning that avoids redrawing and delays later. If you are unsure which route applies to your villa, we can check it with you before any design work begins.`,
      faq: [
        { q: "Can I order approvals without a renovation?", a: "Yes. Drawings and approval support can be commissioned separately." },
        { q: "Are authority fees included in your price?", a: "Our service fee, authority charges and any deposits are identified separately in the proposal." },
        { q: "Can you guarantee approval by a fixed date?", a: "No. Decisions and review periods depend on the approving parties and on the completeness and scope of the application." },
        { q: "Can you continue an application someone else started?", a: "We can review its current status and advise what is required before confirming our involvement." },
      ],
    },
    ru: {
      title: "Согласование ремонта виллы в Дубае: как определяется маршрут",
      seoTitle: "Согласование ремонта виллы в Дубае | Bellvero Group",
      metaDescription:
        "Кто согласует ремонт виллы в Дубае, зависит от её расположения, а не от вида работ. Как определяется маршрут, что обычно требует разрешения и что подготовить.",
      standfirst:
        "Прежде чем проектировать ремонт виллы, нужно ответить на один вопрос: кто его согласует. Разбираем, почему ответ зависит от расположения виллы, какие работы обычно требуют разрешения и что подготовить к первому разговору.",
      excerpt: "Кто согласует ремонт виллы, зависит от того, где она находится. Как определяется маршрут и почему это решается до дизайна.",
      keyPoints: [
        "В Дубае расположение виллы определяет, какой орган выдаёт разрешение, в каком формате принимаются чертежи и нужен ли сначала NOC сообщества.",
        "Изменение планировки, работы с конструкциями, пристройки, изменения фасада и инженерных систем обычно требуют согласования. Только отделка — обычно нет.",
        "Управляющая компания сообщества или здания может требовать уведомления даже там, где разрешение органа не нужно.",
        "Маршрут нужно подтвердить до начала проектирования: требования согласований влияют на сам дизайн.",
        "Никто не может честно гарантировать получение разрешения к определённой дате.",
      ],
      body: `## Согласование в Дубае — это не одна процедура

Владельцы вилл часто задают нам простой вопрос: «Нужно ли разрешение на мой ремонт?» Честный первый ответ — встречный вопрос: где находится вилла?

В Дубае согласование — не единая процедура для всех объектов. Какой орган выдаёт разрешение, в каком формате он принимает чертежи и нужен ли сначала NOC (No Objection Certificate) от сообщества, определяется прежде всего расположением объекта. Вид работ тоже важен, но он вторичен. Два одинаковых ремонта в двух разных сообществах могут идти по двум разным маршрутам.

Поэтому определение правильного маршрута — первое, что мы делаем на любом проекте виллы, и делаем это до начала проектирования.

## Маршрут зависит от того, где находится вилла

На практике большинство проектов вилл и квартир в Дубае и Абу-Даби относятся к одной из четырёх ситуаций.

- **Отдельная вилла на материковой части Дубая.** Что обычно идёт первым: слоя управляющей компании нет. Кто выдаёт разрешение: муниципалитет Дубая через платформу Build in Dubai.
- **Вилла в мастер-сообществе.** Что обычно идёт первым: NOC сообщества, который проверяется по его дизайн-регламенту. Кто выдаёт разрешение: орган, в чьей юрисдикции находится сообщество.
- **Квартира или офис в здании.** Что обычно идёт первым: согласование управляющей компании здания. Кто выдаёт разрешение: орган, отвечающий за эту зону; в отдельных зонах Дубая это не муниципалитет.
- **Объект в Абу-Даби.** Что обычно идёт первым: другой эмират и другая система. Кто выдаёт разрешение: профильный департамент через портал TAMM.

Большинство владельцев вилл находятся во второй строке. В мастер-сообществе у девелопера или управляющей компании есть собственный регламент того, как вилла может выглядеть снаружи, а иногда и того, как должны вестись работы. Их NOC обычно становится первым шагом, а разрешение органа следует за ним.

Эта таблица — карта, а не заключение. Точный маршрут для конкретной виллы подтверждается проверкой сообщества, участка и планируемых работ вместе.

## Почему это решается до дизайна, а не после

Хочется сначала сделать дизайн, а «разрешения решить потом». Для виллы такой порядок обходится дорого.

Требования согласований влияют на сам дизайн. Изменения фасада, проёмы в конструкциях, пристройки, новый бассейн, изменение нагрузок на электрику, водоснабжение или кондиционирование — у каждого пункта свои требования. В мастер-сообществе внешний вид дополнительно проверяется по регламенту, написанному именно для этого сообщества. Дизайн, разработанный без учёта этих ограничений, часто приходится переделывать, а переделка стоит времени на уже начатом проекте.

Формат чертежей важен не меньше содержания. У разных органов разные требования к подаче, и комплект, подготовленный для одного, может быть отклонён другим без рассмотрения по существу. Именно поэтому маршрут определяется первым.

> Дешевле всего выполнить требование согласования до того, как проведена первая линия проекта. — Sayyed Osaf

## Какие работы обычно требуют согласования

Ниже — общий ориентир. Он основан на том, как требования обычно применяются, а не на вашем объекте, и всегда проверяется в каждом конкретном случае.

**Обычно требуют согласования:**

- снос и возведение стен, изменение планировки
- любые работы, затрагивающие конструкции
- пристройки и увеличение застроенной площади
- изменение внешнего вида, включая окна, облицовку и элементы кровли
- бассейны, навесы и постоянные наружные конструкции
- перенос точек водоснабжения и канализации
- изменение электрической нагрузки и распределения
- изменение воздуховодов и оборудования кондиционирования

**Обычно не требуют, но проверяются:**

- покраска
- замена напольных и настенных покрытий
- замена сантехнических приборов без переноса коммуникаций
- мебель и неконструктивные подвесные потолки

Врезка «Важно»: даже там, где разрешение органа не нужно, управляющая компания сообщества или здания может требовать уведомления до начала работ и устанавливать правила по времени работ, доступу и защите территории. Уточните это до приезда первой бригады.

## Что мы делаем по согласованиям

Когда клиент поручает нам согласования, работа на каждом проекте идёт в четыре шага:

1. **Изучаем планируемые работы и подтверждаем применимый маршрут** для конкретного объекта.
2. **Готовим необходимые чертежи** в формате, который принимает орган.
3. **Подаём документы** и отрабатываем замечания.
4. **Отслеживаем статус** и информируем клиента.

Согласования координирует руководитель нашего инженерного направления. Стоимость наших услуг, сборы органов и возможные депозиты всегда указываются в предложении отдельными строками, чтобы клиент видел, какие расходы наши, а какие нет.

Чего мы не делаем — не обещаем дату. Решение и сроки рассмотрения зависят от согласующих сторон и от полноты заявки. Подрядчик, который гарантирует дату получения разрешения, обещает то, что от него не зависит.

## Что подготовить к первому разговору

Полный пакет документов для начала не нужен. Для первого обсуждения полезно иметь:

1. Местоположение объекта, включая название сообщества, если вилла в нём находится.
2. Имеющиеся планы: исходные чертежи девелопера, чертежи прошлых ремонтов или хотя бы понятный план этажа.
3. Описание изменений, которые вы рассматриваете, своими словами.
4. Разрешения, уже полученные на прежние работы.

После изучения задачи мы уточняем, какие ещё документы понадобятся. Документы о праве собственности через форму на сайте мы не запрашиваем.

## Практический вывод

Если вы планируете ремонт виллы в Дубае, начните с подтверждения маршрута согласований для вашего объекта и проектируйте уже в его рамках. Это короткий шаг в начале, который избавляет от переделок и задержек потом. Если вы не уверены, какой маршрут применим к вашей вилле, мы можем проверить это вместе с вами до начала проектирования.`,
      faq: [
        { q: "Можно заказать согласования без ремонта?", a: "Да. Подготовку документации и сопровождение согласований можно заказать отдельно." },
        { q: "Сборы органов входят в вашу цену?", a: "Стоимость наших услуг, сборы и возможные депозиты указываются в предложении отдельно." },
        { q: "Гарантируете получение разрешения к определённой дате?", a: "Нет. Решение и сроки рассмотрения зависят от согласующих сторон, полноты и содержания заявки." },
        { q: "Можете продолжить заявку, начатую другим подрядчиком?", a: "Изучим её текущий статус и определим необходимые действия до подтверждения участия." },
      ],
    },
  },
  {
    id: "INS-002",
    slug: "villa-renovation-cost-drivers",
    topic: "costs",
    regulatory: false,
    publishedAt: "2026-09-22",
    lastReviewedAt: "2026-09-22",
    cover: "/visuals/PHOTO-2025-04-15-12-21-17(1).jpg",
    relatedServiceSlugs: ["renovation-fit-out-dubai", "interior-design"],
    relatedArticleIds: ["INS-001", "INS-003"],
    en: {
      title: "What Drives the Cost of a Villa Renovation",
      seoTitle: "What Drives Villa Renovation Cost | Bellvero Group",
      metaDescription:
        "Why quotations for the same villa can differ so much: scope, hidden works, specification, joinery and approvals, and how to get a quotation you can compare.",
      standfirst:
        "Two quotations for the same villa can be far apart, and neither is necessarily wrong. This article explains what actually moves the cost of a renovation, which parts you never see after handover, and how to get a quotation that can be compared line by line.",
      excerpt: "Scope, hidden works, specification level, joinery and approvals: what really moves the cost of a villa renovation.",
      keyPoints: [
        "The cost of a renovation is set mostly by scope and specification, not by floor area alone.",
        "Works hidden after handover (waterproofing, services, substrates) decide much of the cost and all of the durability.",
        "A complete design and specification before the quotation is the most reliable way to keep the budget stable.",
        "Quotations can only be compared when they describe the same scope, the same specification and the same exclusions.",
        "Additional work should be quoted and approved before it starts.",
      ],
      body: `## Why "how much per square metre?" is the wrong first question

It is the question almost everyone asks first, and it is understandable: a single number feels like control. The difficulty is that a renovation is not bought by the square metre. It is bought by scope and specification. The same 400 m² villa can be refreshed with new paint and finishes, or opened up, re-plumbed, rewired and fitted with new joinery throughout. Both are "renovations", and the difference between them is far larger than any difference in contractors' rates.

So instead of a rate, this article looks at what actually moves the cost, in the order in which it usually matters.

## 1. What is touched: scope

The largest single factor is how deeply the works go into the building.

- **Surface works**: painting, new floor and wall finishes, replacing fixtures in their existing positions.
- **Layout works**: moving or removing walls, new openings, relocating a kitchen or bathroom.
- **Services works**: new electrical distribution, relocated drainage and water points, new or modified air-conditioning.
- **Envelope and outdoor works**: windows, façade elements, pools, canopies, landscape.

Each step down this list usually brings the next with it. Moving a bathroom means moving drainage; moving a kitchen means new electrical circuits and extraction. It also changes the approvals picture, which we cover in our guide to villa renovation approvals.

## 2. The work you do not see

After handover, a client sees stone, oak and plaster. What they do not see is often what the budget was spent on.

- **Waterproofing** in bathrooms, balconies and terraces.
- **Substrates**: levelling screeds, wall preparation, ceiling structures.
- **Services** inside walls and ceilings: cabling, pipework, ducting.
- **Protection** of the parts of the house that are not being renovated.

This is also where quotations differ most quietly. One quotation may include a full waterproofing system with tests, another a single coat. On paper they are both "waterproofing". Three years later, they are not the same bathroom.

> The part of a renovation that nobody photographs is the part that decides how long everything else lasts. — Sayyed Osaf

## 3. Specification level

The same layout can be specified at very different levels. A kitchen wall can be finished in paint or in stone; a floor in porcelain or in limestone; a door in a standard leaf or a full-height concealed one. Hardware, sanitaryware, lighting and glass follow the same logic.

Specification is where the client has the most control, and where a design pays for itself: when every finish is chosen and written down before the quotation, the price describes what will actually be installed, instead of an allowance that is revised later.

## 4. Bespoke joinery

Kitchens, wardrobes, vanities and built-in storage are often a large part of a villa renovation. Their cost depends on:

- the construction and board materials
- the fronts: veneer, lacquer or solid timber
- the hardware: hinges, runners, lift systems
- the worktops and any stone or glass elements
- the complexity of installation

Because we manufacture cabinetry in our own production, joinery is quoted from the approved drawings and after technical measurement, not from a catalogue estimate.

## 5. Design and documentation

A renovation without complete drawings is priced on assumptions, and assumptions are where budgets move. The design is not an extra cost on top of the renovation; it is what turns the renovation into a defined price.

Our design fees are published: **Full Interior Design from AED 250/m² excluding VAT (AED 262.50/m² including VAT)**, and **Interior Design & Procurement from AED 310/m² excluding VAT (AED 325.50/m² including VAT)**, which adds material and furniture sourcing, supplier coordination and order tracking. What is included in each package is set out on our interior design page.

## 6. Approvals and site conditions

Approval requirements, community rules on working hours and access, whether the family is living in the house during works, and how materials reach the site all affect the programme, and therefore the cost. These items are identified during the site visit and written into the scope, rather than discovered later.

## How to get a quotation you can compare

Two quotations can only be compared when they describe the same thing. Before comparing prices, check that each one:

1. Lists the **scope** room by room, not as one lump sum.
2. States the **specification** of finishes, fixtures and joinery, or clearly marks allowances.
3. Lists **exclusions**: what is not included, such as authority fees, furniture or appliances.
4. Explains **how additional work is handled**. With us, additional works are quoted and approved before they start.
5. Sets out the **payment schedule**. Ours is agreed before work begins and recorded in the contract: it sets out the initial payment, the payments that follow and the conditions for each. Manufacturing and material purchases may be scheduled as separate payments.
6. States the **warranty**. Ours is 36 months for renovation workmanship and 48 months for our bespoke cabinetry, each from documented handover of the relevant works.

Callout — Important: A lower quotation that leaves out waterproofing detail, services or protection is not cheaper; it is describing a different project.

## The practical takeaway

Decide the scope first, fix the specification second, and ask for a price third. If you already have a design, a contractor can price it precisely; if you do not, a design is the most direct way to a budget that holds. Either way, the first site visit is where the cost drivers of your particular villa become clear.`,
    },
    ru: {
      title: "Из чего складывается стоимость ремонта виллы",
      seoTitle: "Стоимость ремонта виллы | Bellvero Group",
      metaDescription:
        "Почему сметы на одну и ту же виллу так отличаются: объём работ, скрытые работы, уровень отделки, мебель и согласования, и как получить сравнимую смету.",
      standfirst:
        "Две сметы на одну и ту же виллу могут сильно различаться, и ни одна не обязательно ошибочна. Разбираем, что на самом деле влияет на стоимость ремонта, какие работы не видны после сдачи и как получить смету, которую можно сравнить построчно.",
      excerpt: "Объём работ, скрытые работы, уровень отделки, мебель и согласования: что на самом деле определяет стоимость ремонта виллы.",
      keyPoints: [
        "Стоимость ремонта определяется прежде всего составом работ и уровнем отделки, а не только площадью.",
        "Работы, скрытые после сдачи (гидроизоляция, коммуникации, основания), определяют значительную часть стоимости и всю долговечность.",
        "Полный дизайн-проект и спецификация до расчёта сметы — самый надёжный способ удержать бюджет.",
        "Сметы можно сравнивать, только если в них одинаковый состав работ, одинаковая спецификация и одинаковые исключения.",
        "Дополнительные работы должны рассчитываться и согласовываться до их начала.",
      ],
      body: `## Почему «сколько стоит квадратный метр?» — не тот первый вопрос

Этот вопрос почти все задают первым, и это понятно: одна цифра создаёт ощущение контроля. Сложность в том, что ремонт покупается не квадратными метрами, а составом работ и уровнем отделки. Одну и ту же виллу площадью 400 м² можно освежить покраской и новой отделкой, а можно полностью перепланировать, заменить сантехнику, электрику и поставить новую мебель по всему дому. Оба варианта — «ремонт», и разница между ними намного больше любой разницы в расценках подрядчиков.

Поэтому вместо расценки разберём, что на самом деле влияет на стоимость, в том порядке, в котором это обычно важно.

## 1. Что затрагивается: состав работ

Самый большой фактор — насколько глубоко работы заходят в здание.

- **Отделочные работы**: покраска, новые покрытия пола и стен, замена приборов на прежних местах.
- **Перепланировка**: перенос и снос стен, новые проёмы, перенос кухни или ванной.
- **Инженерные системы**: новая разводка электрики, перенос канализации и точек водоснабжения, новое или изменённое кондиционирование.
- **Фасад и участок**: окна, элементы фасада, бассейн, навесы, ландшафт.

Каждый шаг вниз по этому списку обычно тянет за собой следующий. Перенос ванной означает перенос канализации; перенос кухни — новые электрические линии и вытяжку. Меняется и картина согласований, о которой мы пишем в статье о согласовании ремонта виллы.

## 2. Работы, которых не видно

После сдачи клиент видит камень, дуб и штукатурку. Чего он не видит — так это того, на что часто ушла значительная часть бюджета.

- **Гидроизоляция** в ванных, на балконах и террасах.
- **Основания**: стяжки, подготовка стен, конструкции потолков.
- **Коммуникации** в стенах и потолках: кабели, трубы, воздуховоды.
- **Защита** тех частей дома, которые не ремонтируются.

Именно здесь сметы различаются незаметнее всего. В одной смете может быть полная система гидроизоляции с испытаниями, в другой — один слой. На бумаге и то и другое — «гидроизоляция». Через три года это уже разные ванные.

> Та часть ремонта, которую никто не фотографирует, определяет, сколько прослужит всё остальное. — Sayyed Osaf

## 3. Уровень отделки

Одну и ту же планировку можно выполнить на очень разном уровне. Стену кухни можно покрасить или отделать камнем; пол — керамогранитом или известняком; дверь — стандартным полотном или скрытой дверью в потолок. Фурнитура, сантехника, освещение и стекло подчиняются той же логике.

Уровень отделки — это то, что клиент контролирует больше всего, и то, где дизайн-проект окупает себя: если каждая отделка выбрана и записана до расчёта сметы, цена описывает то, что действительно будет установлено, а не условную сумму, которую потом пересматривают.

## 4. Мебель на заказ

Кухни, шкафы, тумбы в ванных и встроенные системы хранения часто составляют большую часть ремонта виллы. Их стоимость зависит от:

- конструкции и материала корпусов
- фасадов: шпон, эмаль или массив
- фурнитуры: петли, направляющие, подъёмные механизмы
- столешниц и элементов из камня или стекла
- сложности монтажа

Поскольку корпусную мебель мы изготавливаем на собственном производстве, её стоимость рассчитывается по утверждённым чертежам и после технического замера, а не по каталожной оценке.

## 5. Дизайн и документация

Ремонт без полного комплекта чертежей считается на допущениях, а именно на допущениях бюджет и «плывёт». Дизайн-проект — не дополнительная трата сверх ремонта, а то, что превращает ремонт в определённую цену.

Наши цены на дизайн опубликованы: **Полный дизайн-проект — от 250 AED/м² без VAT (262.50 AED/м² с VAT)** и **Дизайн и комплектация — от 310 AED/м² без VAT (325.50 AED/м² с VAT)**, куда дополнительно входят подбор материалов и мебели, работа с поставщиками и отслеживание заказов. Что входит в каждый пакет, указано на странице дизайна интерьера.

## 6. Согласования и условия объекта

Требования согласований, правила сообщества по времени работ и доступу, живёт ли семья в доме во время ремонта, как материалы попадают на объект — всё это влияет на график, а значит, и на стоимость. Эти пункты выявляются на выезде и записываются в состав работ, а не обнаруживаются потом.

## Как получить смету, которую можно сравнить

Две сметы можно сравнивать, только если они описывают одно и то же. Прежде чем сравнивать цены, проверьте, что каждая из них:

1. Раскрывает **состав работ** по помещениям, а не одной суммой.
2. Указывает **спецификацию** отделки, приборов и мебели или явно помечает условные суммы.
3. Перечисляет **исключения**: что не входит, например сборы органов, мебель или техника.
4. Объясняет, **как оформляются дополнительные работы**. У нас дополнительные работы рассчитываются и согласовываются до начала.
5. Описывает **график оплаты**. Наш график согласовывается до начала работ и фиксируется в договоре: в нём указываются аванс, последующие платежи и условия их внесения. Для изготовления мебели и закупки материалов могут предусматриваться отдельные платежи.
6. Указывает **гарантию**. У нас — 36 месяцев на ремонтные работы и 48 месяцев на нашу корпусную мебель, в каждом случае с документально оформленной передачи соответствующих работ.

Врезка «Важно»: смета, в которой меньше деталей по гидроизоляции, коммуникациям или защите, не дешевле — она описывает другой проект.

## Практический вывод

Сначала определите состав работ, затем зафиксируйте уровень отделки и только потом запрашивайте цену. Если у вас уже есть дизайн-проект, подрядчик может точно его посчитать; если нет — дизайн-проект самый прямой путь к бюджету, который не будет меняться. В любом случае именно на первом выезде становится понятно, что определяет стоимость ремонта вашей виллы.`,
    },
  },
  {
    id: "INS-003",
    slug: "build-from-your-own-design",
    topic: "process",
    regulatory: false,
    publishedAt: "2026-09-22",
    lastReviewedAt: "2026-09-22",
    cover: "/visuals/PHOTO-2025-04-15-12-21-17(1).jpg",
    relatedServiceSlugs: ["renovation-fit-out-dubai", "interior-design"],
    relatedArticleIds: ["INS-001", "INS-002"],
    en: {
      title: "Building From Your Own Design: How We Take Over the Project",
      seoTitle: "Renovation From Your Own Design | Bellvero Group",
      metaDescription:
        "Already have a designer's drawings? What we review first, how the scope is agreed, how we work with your designer and how joinery is made from their drawings.",
      standfirst:
        "Many owners come to us with a design already finished by their own designer. This article explains what happens next: what we check in the drawings, how the implementation scope is agreed, how we work alongside your designer, and how bespoke joinery is made from their drawings.",
      excerpt: "You have a design. What we review first, how the scope is agreed and how we work with your designer.",
      keyPoints: [
        "You can bring your own designer's project: we review your drawings and existing approvals, agree the implementation scope and coordinate the works.",
        "The first step is a technical review of the drawings against the property and the approvals, before any price is given.",
        "Gaps in the drawings are listed openly and resolved before works, not improvised on site.",
        "Roles are agreed at the start: the design stays your designer's; delivery is ours.",
        "Bespoke joinery can be manufactured from your designer's drawings after technical measurement and approved manufacturing drawings.",
      ],
      body: `## You already have a design. What now?

Some clients come to us at the very beginning, with a property and an idea. Many others arrive later: they have already worked with an interior designer, the drawings are finished, and sometimes the approvals are in hand. What they need is a team to build it.

This is one of the routes we offer from the start, not an exception. We review your drawings and existing approvals, agree the implementation scope and coordinate the works. The design remains your designer's. Our job is to deliver it faithfully and to raise, early and in writing, anything that would stop it being delivered well.

## What we review first

Before we give a price, we review the documents. A design that looks complete in presentation images can still be incomplete as a set of instructions for a site. We check four things.

**1. Completeness of the drawings.** Is there a full set of layout, ceiling, electrical, plumbing and elevation drawings, with sections where they matter? Are the joinery items drawn in enough detail to manufacture? Are finishes specified, or only shown in renders?

**2. The drawings against the property.** Drawings are compared with the actual site. Dimensions, existing services, ceiling voids, structural elements and levels are checked during a site visit. Differences are normal; what matters is finding them before works start.

**3. Engineering coordination.** Does the air-conditioning fit in the ceiling that has been drawn? Do the lighting and power positions match the furniture? Is there access for maintenance? This is where interiors most often clash with services, and where a technical review saves the most rework.

**4. Existing approvals.** If approvals have been obtained, we check that the approved drawings match the design we are asked to build. If they have not, we confirm which route applies, as explained in our guide to villa renovation approvals.

> A good design deserves to be built as drawn. The way to do that is to find the questions before the site does. — Sayyed Osaf

## When the drawings have gaps

Almost every design set has some. A detail left open, a finish marked "to be confirmed", a joinery item shown only in elevation. None of this is a problem if it is found early.

After the review we send a written list of the points that need an answer: what is missing, what conflicts, and what we recommend. Each point is resolved in one of three ways: your designer completes it, you decide it with us, or it is excluded from the scope until it is decided. Nothing is improvised on site without the client's approval.

Callout — Important: If a detail is not drawn, it is not priced. Asking for a quotation before the gaps are closed usually means asking for a quotation that will change.

## How the scope is agreed

Once the drawings are reviewed, we agree the implementation scope with you in writing. It lists the works room by room, the specification that applies to each, what is excluded, and who is responsible for what. This document is the basis of the quotation and, later, of the contract.

Additional work that arises during the project is quoted and approved before it starts. The payment schedule is agreed before work begins and recorded in the contract.

## Working with your designer

The relationship works best when roles are clear from the first day.

- **Your designer** owns the design intent: finishes, proportions, the look of the space. Design changes come from the designer or from you, never from the site.
- **We** own delivery: site works, procurement where agreed, manufacturing, programme, quality and safety on site.
- **Your project manager** is the single point of contact for progress, and shares photos, videos and written updates in a dedicated project group. Your designer can be included in that group if you wish.

When a question comes up on site, it is recorded, sent to the person who owns the answer, and the decision is written down before the work continues.

## Joinery from your designer's drawings

Bespoke furniture is often the most detailed part of a designer's project, and the part where the gap between a drawing and a finished item is largest. Because we have our own production for cabinetry, glass and stone work, we can manufacture joinery directly from your designer's drawings. The process is:

1. **Review** of the joinery drawings and specifications.
2. **Technical measurement** on site, after the agreement is signed, once walls and ceilings are ready for it.
3. **Manufacturing drawings** prepared by us from the designer's drawings and the measurements, showing construction, hardware and dimensions.
4. **Approval** of the manufacturing drawings by you, and by your designer if you wish.
5. **Manufacturing and installation**, followed by inspection at handover.

Our bespoke cabinetry carries a 48-month warranty from documented handover of the relevant items.

## What to send us

For a first review, it helps to share:

1. The design drawings you have, in PDF (and DWG if available).
2. The specification or finish schedule, if there is one.
3. Any approvals already obtained, with the approved drawings.
4. The location of the property and your intended timing.
5. Your designer's contact, if you would like us to speak with them directly.

## The practical takeaway

A finished design is a strong starting point. The step that protects it is a technical review before pricing: it turns a beautiful set of drawings into a buildable, priced scope, and it keeps the design your designer intended. If you have a design and are looking for a team to build it, send us the drawings and we will start with the review.`,
    },
    ru: {
      title: "Реализация вашего готового дизайна: как мы принимаем проект",
      seoTitle: "Ремонт по вашему дизайн-проекту | Bellvero Group",
      metaDescription:
        "Уже есть дизайн-проект? Что мы проверяем в первую очередь, как согласуется состав работ, как мы работаем с вашим дизайнером и как делаем мебель по его чертежам.",
      standfirst:
        "Многие владельцы приходят к нам с готовым проектом от своего дизайнера. Рассказываем, что происходит дальше: что мы проверяем в чертежах, как согласуется состав реализации, как мы работаем вместе с вашим дизайнером и как изготавливаем мебель по его чертежам.",
      excerpt: "У вас есть дизайн-проект. Что мы проверяем первым, как согласуется состав работ и как мы работаем с вашим дизайнером.",
      keyPoints: [
        "Можно прийти с проектом своего дизайнера: мы изучаем чертежи и имеющиеся разрешения, согласовываем состав реализации и организуем работы.",
        "Первый шаг — техническая проверка чертежей на соответствие объекту и разрешениям, до расчёта стоимости.",
        "Пробелы в чертежах перечисляются открыто и закрываются до начала работ, а не решаются на объекте на ходу.",
        "Роли распределяются в начале: дизайн остаётся за вашим дизайнером, реализация — за нами.",
        "Мебель на заказ можно изготовить по чертежам вашего дизайнера после технического замера и утверждения производственных чертежей.",
      ],
      body: `## У вас уже есть дизайн-проект. Что дальше?

Одни клиенты приходят к нам в самом начале — с объектом и идеей. Многие другие приходят позже: они уже поработали с дизайнером интерьера, чертежи готовы, а иногда уже получены и разрешения. Им нужна команда, которая всё это реализует.

Это один из маршрутов, которые мы предлагаем изначально, а не исключение. Мы изучаем чертежи и имеющиеся разрешения, согласовываем состав реализации и организуем работы. Дизайн остаётся за вашим дизайнером. Наша задача — точно его реализовать и заранее, письменно, поднять всё, что может этому помешать.

## Что мы проверяем в первую очередь

Прежде чем называть цену, мы изучаем документы. Проект, который выглядит законченным на визуализациях, может оказаться неполным как инструкция для объекта. Мы проверяем четыре вещи.

**1. Полнота чертежей.** Есть ли полный комплект: планировка, потолки, электрика, сантехника, развёртки стен и разрезы там, где они нужны? Достаточно ли детально прорисована мебель, чтобы её изготовить? Указана ли отделка в спецификации или она есть только на визуализациях?

**2. Соответствие чертежей объекту.** Чертежи сверяются с реальным объектом. Размеры, существующие коммуникации, запотолочное пространство, конструкции и уровни проверяются на выезде. Расхождения — это нормально; важно найти их до начала работ.

**3. Увязка инженерных систем.** Помещается ли кондиционирование в нарисованный потолок? Совпадают ли точки освещения и розетки с мебелью? Есть ли доступ для обслуживания? Именно здесь интерьер чаще всего конфликтует с инженерией, и именно здесь техническая проверка экономит больше всего переделок.

**4. Имеющиеся разрешения.** Если разрешения получены, мы проверяем, что согласованные чертежи совпадают с проектом, который нас просят реализовать. Если нет — подтверждаем применимый маршрут, как описано в статье о согласовании ремонта виллы.

> Хороший дизайн заслуживает того, чтобы его построили так, как он нарисован. Для этого вопросы нужно найти раньше, чем их найдёт объект. — Sayyed Osaf

## Если в чертежах есть пробелы

Они есть почти в каждом комплекте. Незакрытый узел, отделка с пометкой «уточнить», мебель, показанная только на развёртке. Всё это не проблема, если найдено вовремя.

После проверки мы отправляем письменный список вопросов: чего не хватает, что противоречит друг другу и что мы рекомендуем. Каждый пункт закрывается одним из трёх способов: его дорабатывает ваш дизайнер, вы решаете его вместе с нами или он исключается из состава работ до принятия решения. Ничего не решается на объекте на ходу без согласия клиента.

Врезка «Важно»: если узел не прорисован, он не посчитан. Запросить смету до закрытия пробелов обычно означает получить смету, которая изменится.

## Как согласуется состав работ

После проверки чертежей мы письменно согласуем с вами состав реализации. В нём перечислены работы по помещениям, спецификация для каждого из них, исключения и зоны ответственности. Этот документ становится основой сметы, а затем и договора.

Дополнительные работы, возникшие в ходе проекта, рассчитываются и согласовываются до их начала. График оплаты согласовывается до начала работ и фиксируется в договоре.

## Как мы работаем с вашим дизайнером

Всё работает лучше всего, когда роли понятны с первого дня.

- **Ваш дизайнер** отвечает за дизайнерский замысел: отделку, пропорции, облик пространства. Изменения в дизайн вносит дизайнер или вы, но никогда не объект.
- **Мы** отвечаем за реализацию: работы на объекте, комплектацию в согласованном объёме, производство, график, качество и безопасность на объекте.
- **Ваш проджект-менеджер** — единое контактное лицо по ходу работ. Он присылает фото, видео и письменные отчёты в отдельную группу проекта. По вашему желанию в неё можно добавить и дизайнера.

Когда на объекте возникает вопрос, он фиксируется, передаётся тому, кто отвечает за ответ, и решение записывается до продолжения работ.

## Мебель по чертежам вашего дизайнера

Мебель на заказ часто самая детальная часть дизайн-проекта — и та, где разрыв между чертежом и готовым изделием больше всего. Поскольку у нас собственное производство корпусной мебели, изделий из стекла и камня, мы можем изготовить мебель напрямую по чертежам вашего дизайнера. Порядок такой:

1. **Изучение** чертежей и спецификаций мебели.
2. **Технический замер** на объекте после подписания договора, когда стены и потолки к нему готовы.
3. **Производственные чертежи**, которые мы готовим по чертежам дизайнера и замерам, с конструкцией, фурнитурой и размерами.
4. **Утверждение** производственных чертежей вами и, по вашему желанию, вашим дизайнером.
5. **Изготовление и монтаж**, затем проверка при передаче.

На нашу корпусную мебель действует гарантия 48 месяцев с документально оформленной передачи соответствующих изделий.

## Что нам прислать

Для первой проверки полезно передать:

1. Имеющиеся чертежи проекта в PDF (и DWG, если есть).
2. Спецификацию или ведомость отделки, если она есть.
3. Уже полученные разрешения вместе с согласованными чертежами.
4. Местоположение объекта и планируемые сроки.
5. Контакт вашего дизайнера, если вы хотите, чтобы мы общались с ним напрямую.

## Практический вывод

Готовый дизайн-проект — сильная отправная точка. Защищает его техническая проверка до расчёта стоимости: она превращает красивый комплект чертежей в реализуемый и посчитанный состав работ и сохраняет тот замысел, который заложил ваш дизайнер. Если у вас есть проект и вы ищете команду для его реализации, пришлите нам чертежи — мы начнём с проверки.`,
    },
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByTopic(topic?: TopicSlug) {
  return topic ? ARTICLES.filter((a) => a.topic === topic) : ARTICLES;
}

export function getFeaturedArticle() {
  return ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
}

export function getRelatedArticles(article: Article, limit = 3) {
  const explicit = article.relatedArticleIds
    .map((id) => ARTICLES.find((a) => a.id === id))
    .filter((a): a is Article => Boolean(a));

  if (explicit.length >= limit) return explicit.slice(0, limit);

  const fallback = ARTICLES.filter(
    (a) => a.id !== article.id && a.topic === article.topic && !explicit.includes(a)
  );
  const rest = ARTICLES.filter(
    (a) => a.id !== article.id && !explicit.includes(a) && !fallback.includes(a)
  );

  return [...explicit, ...fallback, ...rest].slice(0, limit);
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getRelatedServices(article: Article, locale: string) {
  const services = getServices(locale);
  return article.relatedServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
}
