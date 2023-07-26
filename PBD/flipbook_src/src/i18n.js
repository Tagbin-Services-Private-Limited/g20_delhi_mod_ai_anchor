import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about_g20: "About G20",
          overview: "Overview",
          g20_members: "G20 Members",
          previous_summits: "Previous Summits",
          logo_theme: "Logo & Theme",
          ndsummit: "New Delhi Summit",

          g20_india2023: "G20 India 2023",
          explore_india: "Explore India",
          view_next: "View Next",
          pages: [
            {
              id: 1,
              page_topic: "About G20",
              main_head: "Overview",
              main_paratext:
                "The Group of Twenty (G20) is the premier forum for international economic cooperation. It plays an important role in shaping and strengthening global architecture and governance on all major international economic issues. \n India holds the Presidency of the G20 from 1 December 2022 to 30 November 2023",

              sub_topic1: "Elevation to Leader’s Level",
              sub_paratext1:
                "The G20 was upgraded to the level of Heads of State/Government in the wake of the global economic and financial crisis of 2007, and, in 2009, was designated the “premier forum for international economic cooperation”. The G20 Summit is held annually, under the leadership of a rotating Presidency. The G20 initially focused largely on broad macroeconomic issues, but it has since expanded its agenda to inter-alia include trade, climate change, sustainable development, health, agriculture, energy, environment, climate change, and anti-corruption.",
              sub_topic2: "Inception of G20",
              sub_paratext2:
                "The G20 was founded in 1999 after the Asian financial crisis as a forum for the Finance Ministers and Central Bank Governors to discuss global economic and financial issues.",
            },
            {
              id: 2,
              page_topic: "About G20",
              main_head: "G20 Members",
              main_paratext:
                "The Group of Twenty (G20) comprises 19 countries (Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Republic of Korea, Mexico, Russia, Saudi Arabia, South Africa, Türkiye, United Kingdom and United States) and the European Union. The G20 members represent around 85% of the global GDP, over 75% of the global trade, and about two-thirds of the world population.",
              img_total: "",
              g20member: "G20 Members",
              img_country: "./assets/map.png",
              guest_country: "Guest Countries",
              img_guestCountry: "./assets/guestmap.png",
            },
            {
              id: 3,
              page_topic: "About G20",
              main_head: "Previous Summits",
              gallery: "Gallery",
              summit_info_btn: "Summit Information",
              year_summit: [
                {
                  id: 1,
                  year: "2022",
                  logo: "./assets/logo/2022.png",
                  total_img: "2",
                  images: [
                    {
                      pic: "./assets/year_summits/2022/1.jpg",
                      caption:
                        "External Affairs Minister Dr. S. Jaishankar at the Foreign Ministers Meeting in Indonesia",
                    },
                    {
                      pic: "./assets/year_summits/2022/2.jpg",
                      caption:
                        "Union Finance Minister Smt Nirmala Sitharaman at the 2nd Finance Ministers and Central Bank Governors Meeting in Bali, Indonesia",
                    },
                  ],

                  summit_head:
                    "G20 Summit in Bali, Indonesia, 15 - 16 November 2022",
                  summit_info:
                    "The 17th G20 Heads of State and Government Summit took place on 15-16 November 2022 in Bali. The Summit was the pinnacle of the G20 process and intense work was carried out within the Ministerial Meetings, Working Groups, and Engagement Groups throughout the year.",
                },
                {
                  id: 2,
                  year: "2021",
                  logo: "./assets/logo/2021.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2021/1.jpg",
                      caption:
                        "G20 leaders at the traditional visit of the Trevi Fountain to throw the coin of good return to the city of Rome, Italy",
                    },
                    {
                      pic: "./assets/year_summits/2021/2.jpg",
                      caption:
                        "PM Modi participates in Build Back Better for the World (B3W)",
                    },
                    {
                      pic: "./assets/year_summits/2021/3.jpg",
                      caption:
                        "PM participates in the Summit on Global Supply Chain Resilience, on the side-lines of G20",
                    },
                  ],

                  summit_head: "G20 Summit in Rome, Italy, 30-31 October 2021",
                  summit_info:
                    "The G20 Summit under Italian Presidency was held in Rome on 30-31 October 2021, with the participation of its members, six invited countries (Spain, The Netherlands, Singapore, Democratic Republic of Congo, Rwanda and Brunei, NEPAD and ASEAN) and nine representatives of international organizations. Under the motto “People, Planet, Prosperity” the Leaders’ Summit discussed in three main sessions the macroeconomic global development connected with the health crisis; solutions for environmental and climate challenges; the need to develop sustainable development at a global scale. Two side events were dedicated to financial inclusion of SME (with a focus on female-led business) and to public-private partnership in the fight against climate change. The Summit has adopted a Leaders’ Declaration which enshrines important progress in international taxation, special drawing rights, the creation of a health-finance task force, but also on the global supply and access to vaccines, especially in support of more vulnerable countries, and the common objective of the G20 countries to tackle climate change. Other important outcomes of the Italian Presidency were the formal acceptance of the Matera Declaration on food safety, the shared goal of planting a trillion trees globally by 2030. By committing to implement the “Roadmap Towards and Beyond the Brisbane Goal” the G20 Summit expressed its support for female empowerment. Finally, the Leaders have recognized culture as a G20 issue and adopted innovative tools in the fight against corruption.",
                },
                {
                  id: 3,
                  year: "2020",
                  logo: "./assets/logo/2020.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2020/1.jpg",
                      caption:
                        "Group photo of the G20 leaders projected on the walls of the UNESCO World Heritage Site At-Turaif District in Ad-Diriyah outside Riyadh, Saudi Arabia.",
                    },
                  ],

                  summit_head:
                    "G20 Summit in Riyadh, Saudi Arabia, 21-22 November 2020 ",
                  summit_info:
                    "A virtual G20 summit was hosted by the Kingdom of Saudi Arabia in Riyadh on 21-22 November 2020. The G20 leaders expressed their commitment for coordinating global action, solidarity, and multilateral cooperation, safeguarding the planet, and shaping new frontiers. The G20 leaders further committed to work together to overcome the COVID-19 pandemic restore growth, build a more inclusive, sustainable and resilient future. The G20 leaders were determined to support the most vulnerable and fragile countries, notably in Africa, in their fight against the pandemic. The leaders of G20 also focused on Employment for millions of workers who continue to face job and income loss especially for women and youth. It also focused on active social protection for all, including those in the informal economy.",
                },
                {
                  id: 4,
                  year: "2019",
                  logo: "./assets/logo/2019.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2019/1.jpg",
                      caption:
                        "G20 Leaders at a Special Event on Women Empowerment during G20 Summit 2019 in Osaka, Japan on June 29, 2019",
                    },
                    {
                      pic: "./assets/year_summits/2019/2.jpg",
                      caption:
                        "Group Photo of Heads of G20 Summit 2019 Member States in Osaka, Japan on June 28, 2019",
                    },

                    {
                      pic: "./assets/year_summits/2019/3.jpg",
                      caption:
                        "Prime Minister makes an intervention on Digital Economy and Artificial Intelligence at Session II of G20 Summit 2019 in Osaka, Japan on June 28, 2019",
                    },
                  ],

                  summit_head: "G20 Summit in Osaka, Japan, 28-29 June 2019",
                  summit_info:
                    "The G20 Summit, which Japan hosted for the first time in Osaka in 2019, included G20 members, 8 invited countries, and representatives from 9 international organizations, and was historically the largest Summit ever held in Japan. Leaders of the major countries gathered to identify a common ground, and to jointly grapple with major issues related to world economy. \n Amidst worldwide uneasiness and dissatisfaction stemming from changes accompanying globalization, Japan took leadership as the Presidency, ensuring that the G20 expressed strong message to the world via G20 Osaka Leaders' Declaration, which includes various areas such as leading global economic growth through promoting free trade and innovation, and addressing inequalities, as well as contributing to resolving environmental and global challenges.",
                },
                {
                  id: 5,
                  year: "2018",
                  logo: "./assets/logo/2018.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2018/1.jpg",
                      caption:
                        "Group Photo of G20 Members at Plenary Session of G20 Summit in Buenos Aires on November 30, 2018",
                    },
                    {
                      pic: "./assets/year_summits/2018/2.jpg",
                      caption:
                        "Prime Minister addresses RIC Informal Summit on the margins of G20 Summit in Buenos Aires on November 30, 2018",
                    },

                    {
                      pic: "./assets/year_summits/2018/3.jpg",
                      caption:
                        "Prime Minister meets António Guterres, UN Secretary General on the sidelines of the G20 Summit in Buenos Aires on November 29, 2018",
                    },
                  ],
                  summit_head:
                    "G20 Summit in Buenos Aires, Argentina,30 November-1 December 2018",
                  summit_info:
                    "Argentina took over the Presidency of the Group of Twenty (G20) on December 1, 2017, which lasted until December 1, 2018 when the Leaders' Summit in the City of Buenos Aires concluded. The fact of having been chosen to chair the most relevant forum for global economic governance was of great importance since Argentina hosted the first G20 Summit held in South America. This Forum provides the opportunity to demonstrate the Government's commitment to international cooperation, multilateralism and global governance, as well as to identify the main global challenges. Argentina has proven its capacity to lead the meeting and find consensus on sensitive issues such as international trade, excess steel capacity, as well as the role of the Paris agreement in the area of ​​climate change, and the way in which the 2030 Agenda should be addressed. \n Within the framework of the motto “Building consensus for equitable and sustainable development”, these issues were strategic in the G20 2018 and defined three priorities that permeated the entire agenda of the Argentine presidency: “the future of work”, “infrastructure for development”, and “a sustainable food future”. The G20 agenda had people as its central axis. Likewise, the gender perspective was another issue that Argentina promoted and was strategic and transversal in the various working groups of the forum. \n Throughout the year, there were more than 60 meetings held that included ten meetings of ministers. Meetings were held in the city of Buenos Aires, and in the provinces of Neuquén, Buenos Aires, Mendoza, Misiones, Santa Fe, Jujuy, Salta, Tucumán and Tierra del Fuego. As a result there were ministerial declarations on Finance, Employment, Education (whose working group was created for the first time in the history of the G20 and at the initiative of Argentina), Digital Economy, Agriculture, Health, Trade and Energy. \n Argentina worked at all times in the G20 with the intention of promoting the perspective of developing countries and with the aim of giving the meeting a broader and more inclusive vision. \n The work of the Argentine Presidency of the G20 fostered different instances for dialogue between the members, seeking to highlight the agreements reached within the framework of the working groups, and the result of this exercise has been reflected in a substantive Leaders' Communiqué, even in sensitive issues on the international agenda such as trade and climate change. In this way, Argentina was able to identify the coincidences instead of continuing to deepen antagonistic positions, as happened in other fora held throughout that year. The member States acknowledged that it was time to start rebuilding common positions, even when they may seem less ambitious than agreements reached in the past that are not in force today.",
                },
                {
                  id: 6,
                  year: "2017",
                  logo: "./assets/logo/2017.png",
                  total_img: "4",
                  images: [
                    {
                      pic: "./assets/year_summits/2017/1.jpg",
                      caption:
                        "Family photograph of Leaders’ of G20 Nations, at Hamburg, Germany on July 7, 2017",
                    },
                    {
                      pic: "./assets/year_summits/2017/2.jpg",
                      caption:
                        "Prime Minister at the G-20 Leaders’ Retreat Meeting, at Hamburg, Germany",
                    },

                    {
                      pic: "./assets/year_summits/2017/3.jpg",
                      caption:
                        "Prime Minister at the informal meeting of leaders of the BRICS countries, on the side-lines of the 12th G20 Summit, at Hamburg, Germany on July 7, 2017",
                    },
                    {
                      pic: "./assets/year_summits/2017/4.jpg",
                      caption:
                        "Prime Minister comes out of the venue after the conclusion of the 12th G20 Summit, in Hamburg, Germany on July 8, 2017",
                    },
                  ],
                  summit_head: "G20 Summit in Hamburg, Germany, 7- 8 July 2017",
                  summit_info:
                    "Under the motto “Shaping an Interconnected World”, the G20 in Hamburg (2017) prioritized and paved the way for tangible multilateral cooperation on key issues that remain critically relevant today. The G20 demonstrated notable prescience on pandemic preparedness and AMR, and established the G20 Africa Partnership including the Compact with Africa, focused on sustainable investment and opportunities. \n The G20 in Hamburg saw adoption of further new initiatives, such as the G20 Hamburg Climate and Energy Action Plan for Growth for Paris Agreement implementation, and the Hamburg Update, to implement the 2030 Agenda for Sustainable Development. \n Further, the G20 reaffirmed multilateral rules-based trading system, including renewed commitment to sustainable supply chains and addressing excess capacities; reinforced counter-terrorism capabilities via the Financial Action Task Force; made concrete steps towards achieving gender equality through women’s empowerment (including initiatives like #eSkills4Girls and Women Entrepreneurs Finance Initiative, designed to help women in developing countries to grow their own businesses), and highlighted the need to address the underlying causes of displacement, and the needs of refugees and migrants.",
                },
                {
                  id: 7,
                  year: "2016",
                  logo: "./assets/logo/2016.jpeg",
                  total_img: "2",
                  images: [
                    {
                      pic: "./assets/year_summits/2016/1.jpg",
                      caption:
                        "G20 Hangzhou Summit Family Photo. World leaders gathered in Hangzhou for the 11th G20 Leaders’ Summit from September 4 to 5, 2016",
                    },
                    {
                      pic: "./assets/year_summits/2016/2.jpg",
                      caption:
                        "Prime Minister attending the BRICS leaders’ meeting, on the sidelines of G20 Summit 2016, in Hangzhou, China on September 4, 2016",
                    },
                  ],
                  summit_head:
                    "G20 Summit in Hangzhou China, 4-5 September 2016",
                  summit_info:
                    "On September 4-5, 2016, the 11th G20 Summit was held in Hangzhou, China. The theme was 'Toward an Innovative, Invigorated, Interconnected and Inclusive World Economy.' The participants held extensive discussions on four key agenda items - breaking a new path for growth, more effective and efficient global economic and financial governance, robust international trade and investment, and inclusive and interconnected development. \n Coinciding with a crucial juncture for world economic growth and transformation of the G20, the Hangzhou Summit invited high expectations from all sides. It ended with the adoption of the G20 Leaders' Communique Hangzhou Summit and 28 outcome documents. The outcomes reflected a spirit of working together to meet challenges, and charted the course for the world economy. The endorsement of such pragmatic action plans as the G20 Action Plan on the 2030 Agenda for Sustainable Development and the G20 Strategy for Global Trade Growth reflected a commitment to common development. \n The Hangzhou Summit conveyed this message to the international community: The G20 serves not only its members but also the wider world, especially developing countries and their people. This showed China's unique perspective as the host of the summit.",
                },
                {
                  id: 8,
                  year: "2015",
                  logo: "./assets/logo/2015.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2015/1.jpg",
                      caption: "2015 Turkey",
                    },
                    {
                      pic: "./assets/year_summits/2015/2.jpg",
                      caption:
                        "G20 leaders pose for a family photo during the G20 Turkey Leaders’ Summit on November 15, 2015 in Antalya, Turkey",
                    },

                    {
                      pic: "./assets/year_summits/2015/3.jpg",
                      caption:
                        "Prime Minister Narendra Modi, German Chancellor Angela Merkel and European Commission President Jean-Claude Juncker attend the Working Session-1 on the 'Inclusive Growth: Global Economy Growth Strategies, Employment and Investment Strategies'",
                    },
                  ],
                  summit_head:
                    "G20 Summit in Antalya. Türkiye, 15-16 November 2015",
                  summit_info:
                    "Türkiye was G20 Chair in 2015 and hosted Leaders’ Summit in Antalya on 15-16 November 2015. Turkish G20 Presidency aimed to focus on developing more inclusive global growth, enhancing investments, and effectively implementing previous commitments. Therefore, Türkiye defined its G20 Presidency priorities with three I’s, namely “Inclusiveness, Investment, and Implementation”. \n Leaders' Summit joined by representatives from 26 countries and seven international organizations with 13.000 participants, started with President Erdoğan's welcoming ceremony of the head of the delegations and family photo. President Erdoğan delivered a speech at the opening of the Summit. \n On the first day of the Summit, Leaders attended the working lunch on “Development and Climate Change”, session titled “Inclusive Growth: Global Economy, Growth Strategies, Employment and Investment Strategies” and the working dinner on “Global Challenges: Terrorism and Refugee Crisis”. \n Leaders discussed financial regulations, international tax, anti-corruption and IMF reform in the session titled 'Enhancing Resilience'. Trade and energy topped the agenda of the working lunch where the final communiqué of the Summit and Antalya Action Plan were adopted.",
                },
                {
                  id: 9,
                  year: "2014",
                  logo: "./assets/logo/2014.png",
                  total_img: "4",
                  images: [
                    {
                      pic: "./assets/year_summits/2014/1.jpg",
                      caption:
                        "Leaders from the G20 Summit pose for the family photo at their meeting in Brisbane",
                    },
                    {
                      pic: "./assets/year_summits/2014/2.jpg",
                      caption:
                        "Prime Minister arrives for the G20 Summit in Brisbane, Australia",
                    },

                    {
                      pic: "./assets/year_summits/2014/3.jpg",
                      caption:
                        "Prime Minister at the First Plenary Session of the G20 Summit in Brisbane, Australia on November 15, 2014",
                    },
                    {
                      pic: "./assets/year_summits/2014/4.jpg",
                      caption:
                        "Prime Minister Narendra Modi signs the official G20 Leaders' Summit Group Photograph",
                    },
                  ],
                  summit_head:
                    "G20 Summit in Brisbane, Australia,15-16 November 2014",
                  summit_info:
                    "Australia’s 2014 G20 Summit was held in Brisbane, 15-16 November. The Summit delivered outcomes across the agenda’s three themes of growth and jobs, economic resilience and strengthening global institutions. \n Leaders at the Brisbane Summit discussed key global economic challenges and strategies for economic growth. The G20 committed to lifting G20 GDP by more than 2 per cent over 5 years. It also agreed to boost growth and create quality jobs as set out in the Brisbane Action Plan and associated growth strategies. \n Leaders agreed to increase investment in infrastructure through the creation of a Global Infrastructure Hub; improve energy collaboration and strengthen energy markets through the G20 Principles on Energy Collaboration; and reduce the gap between male and female workforce participation rates by 25 per cent by 2025 through the Brisbane Goal. Leaders also agreed reforms to strengthen financial regulation and combat tax avoidance. The Summit resulted in a Leaders’ Communique, Brisbane Action Plan and a standalone statement on Ebola.",
                },
                {
                  id: 10,
                  year: "2013",
                  logo: "./assets/logo/2013.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2013/1.jpg",
                      caption:
                        "Prime Minister at the Leader's First working session in the G-20 summit held at St. Petersburg in Russia on September 5, 2013",
                    },
                  ],
                  summit_head:
                    "G20 Summit Saint Petersburg, Russia, 5–6 September 2013",
                  summit_info:
                    "The G-20 Summit in St. Petersburg was the eighth meeting of the leaders of the G20 countries, which was held in Russia, in St. Petersburg on September 5-6, 2013. \n The main topics proposed for the consideration of the summit were: \n Implementation of the Framework Agreement for Sustainable, Strong and Balanced Growth; \n Providing employment; \n Reforming the international monetary and financial system; \n Reform of financial regulation and supervision; \n Sustainable development of global energy markets; \n Promoting international development; \n Strengthening multilateral trade; \n Anti-corruption. \n As for the objectives of the Russian G20 Presidency, it decided not to introduce any new items to the agenda but rather concentrate on the traditional track in support of a sustainable, inclusive and balanced growth and job creation around the world. To meet this strategic goal, Russia planned to concentrate common efforts on the three following priorities aimed at starting the new global economic growth cycle, that include boosting growth through quality jobs and investment, through trust and transparency in the markets, through effective and efficient regulation. In addition to the traditional G20 agenda two new financial topics were added – financing for investment and government borrowing and public debt sustainability. Russia concentrated on coordinating policy measures that could be taken to stimulate the expansion and developing of long-term investment sources of growth, as well as discussing the future of sovereign borrowings within the context of the national commitments to a set of agreed international rules. \n In order to ensure the continuity and implementation of the earlier commitments Russia focused to work with partners to advance traditional vital issues on the G20 agenda, such as the state of the global economy, implementation of the Framework Agreement for Strong, Sustainable and Balanced Growth, facilitation of job creation, reform of the currency and financial regulation and supervision systems, including the reform of the IMF formula and quotas, as well as maintaining stability in global energy markets, stepping up international development, strengthening multilateral trade and countering corruption.",
                },
                {
                  id: 11,
                  year: "2012",
                  logo: "./assets/logo/2012.png",
                  total_img: "2",
                  images: [
                    {
                      pic: "./assets/year_summits/2012/1.jpg",
                      caption:
                        "Prime Minister in a group photo with the G-20 leaders, at Los Cabos, Mexico on June 18, 2012",
                    },
                    {
                      pic: "./assets/year_summits/2012/2.jpg",
                      caption:
                        "Prime Minister at the first Plenary Session of the G-20 Summit, at Los Cabos, Mexico",
                    },
                  ],
                  summit_head: "G20 Summit Los Cabos, México, 18-19 June 2012 ",
                  summit_info:
                    "Mexico assumed the Presidency of the G20 in 2012 with the aim of achieving a more effective global economic governance system, considering the interests and priorities of emerging and developing countries. \n The priorities of the Mexican presidency were the economic stabilization and structural reforms for growth and employment; strengthening financial systems and promoting financial inclusion to boost economic growth; improve the international financial architecture in an interconnected global economy; reinforce food security and mitigate the volatility of the price of raw material; promote sustainable development, green growth and the fight against climate change",
                },
                {
                  id: 12,
                  year: "2011",
                  logo: "./assets/logo/2011.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2011/1.jpg",
                      caption:
                        "Family photo of the G20 Summit, Cannes, 3 November 2011",
                    },
                  ],
                  summit_head:
                    "G20 Summit in Cannes, France, 3-4 November 2011",
                  summit_info:
                    "The G20 Leaders’ Summit was held from 3-4 November 2011 in Cannes, France. \n Following were the steps taken and progress made: \n Commodity market transparency: In a move to curb excess volatility in commodity prices, the G20 has made strong commitments in Cannes to increase transparency on the physical -- energy and agricultural -- and financial commodity markets.\n Investing in infrastructure in developing countries: The G20 supports the recommendations made by the High-Level Panel made up of experts of the private sector chaired by Mr. Tidjane Thiam and the development banks to build human resources and capacity in developing countries etc. \n Innovative financing for development and the climate: In Cannes, the G20 has, for the first time, mobilized in support of innovative financing for development and climate change.\n Banking regulation: The G20 agreed on a renewed framework of rules applicable to banks in response to the difficulties encountered by the banking sector since 2007. \n Protecting against the instability of agricultural prices: Price volatility poses significant problems to developing countries, penalizing consumers when prices increase and producers when they fall, and creating uncertainty which is unfavourable to investment decisions, to increasing production and productivity, and ultimately to agricultural development. \n Fighting corruption: The G20 has made major progress in the fight against corruption since the Seoul Summit in November 2010. Individual and collective progress by the G20 countries should be credited to the French Presidency of the G20. In addition, the G20 countries have begun work in areas including the recovery of assets, the fight against money laundering, whistleblower protection, the functioning and the independence of anti-corruption agencies, public sector transparency and international cooperation. \n Market regulation: In Cannes, the G20 solemnly committed to complete this major reform of the financial sector and to align national arrangements to prevent risks of regulatory arbitrage. The G20 also decided to launch new focuses to bring national arrangements into line concerning 1) rules on financial guarantee requirements applicable to non-centrally cleared derivatives and 2) harmonization of central databases and procedures for regulator data access.\n  Trade: The G20 members have renewed their pledge not to introduce new measures restricting trade before 2013 and to withdraw all protectionist measures which have already been implemented. The WTO is tasked, alongside the OECD and the UNCTAD, to review the situation every six months for the G20. This decision will help prevent conflict between States at a time when cooperation is absolutely vital. \n Enhancing the IMF's response capacity and surveillance: In the framework of reforming the international monetary system, the G20 has decided to enhance the IMF's capacity to respond to and prevent crises and improve surveillance of its members and the world economy. \n Agriculture: France has put agriculture and food security at the heart of the G20 priorities. The President of the Republic asked Bruno Le Maire to bring together the G20 Agriculture Ministers with the major international organizations with responsibility for food security, including the Food and Agriculture Organization of the United Nations (FAO) for the first time. The G20 adopted an 'Action Plan on Food Price Volatility and Agriculture'. It provides ambitious, tangible and immediate solutions to meet the world agriculture and food challenge. \n Social regulation of globalization: In 2011, the French Presidency of the G20 added the social dimension of globalization to the G20 agenda. The President of the French Republic asked Xavier Bertrand to arrange a meeting between the G20 Labour and Employment Ministers in Paris on 26 and 27 September. In Cannes, the Heads of State acknowledged that it is essential for the social dimension to become a long-term addition to the G20 agenda. \n Emergency humanitarian food reserves: The G20 Action Plan on food price volatility and agriculture, adopted on 23 June 2011, mandated the World Food Programme (WFP) and other competent international organizations, such as the United Nations and the World Bank, to perform a feasibility study on the implementation of such a system in Africa, alongside existing national food reserves. A feasibility study has been conducted with African regional organizations. \n Reform of the International monetary system: The G20 has adopted a reference framework to better manage capital flows: It recognizes that measures to manage or monitor capital flows can be legitimate, as they complement sound macroeconomic policies and can be put into action when capital flows are particularly high and volatile. \n Tax havens and non-cooperative jurisdictions: The G20 in Cannes has fully reviewed these processes. This is an extremely tricky exercise as it calls for a collective judgment on certain extremely reluctant countries.\n Action plan for growth and jobs: Heightened tensions and significant downside risks for the global economy prompted the G20 to take decisive actions to restore confidence, financial stability and growth. This is the Action Plan for Growth and Jobs.",
                },
                {
                  id: 13,
                  year: "2010 KR",
                  logo: "./assets/logo/2010KR.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2010_KR/1.jpg",
                      caption:
                        "G20 leaders pose for a family photo at G20 Seoul Summit 2010",
                    },
                  ],
                  summit_head:
                    "G20 Summit in Seoul, Republic of Korea, 11-12 November 2010 ",
                  summit_info:
                    "The G20 Seoul Summit was held on November 11-12, 2010. G20 countries and invited participants including five countries and seven international organizations attended the summit. About 6,000 government delegates and 4,000 people from the media community visited Korea, while 120 CEOs from global corporations attended the Business Summit. The G20 Seoul Summit was indeed the largest event in the history of Korea. \n The G20 Seoul Summit was a great success in terms of agenda, protocol, and management. The major outcome of the G20 Seoul Summit included such agreements as ‘the framework for strong, sustainable and balanced growth’, ‘IMF quota reform and adjustment the Executive Board’s composition’, ‘the Basel III agreement and SIFI (Systemically Important Financial Institutions) problem solutions’, and ‘reaffirming commitment to the DDA’. Considering that the ‘currency conflict’ was the topic of international interest then, the consensus was reached for making a set of indicative guidelines. Its policy orientation was agreed to make a shift towards a more market-based exchange rate that reflected economic fundamentals, as well as the establishment of a more flexible exchange rate are deemed as significant outcomes. This would not have been possible without the strong mutual understanding of G20 leaders on the G20 spirit of international cooperation - an agreement on preventing the global economy from turning to protectionism and finding solutions through international coordination. \n In regard to the reform of international financial organization and financial regulatory measures, the Seoul Summit reached agreement on the 6% quota shift to emerging and developing countries, which IMF Managing Director Dominique Strauss-Kahn called the most historically significant agreement ever reached since the G20 Finance Ministers and Central Bank Governors Meeting (October 22-23, 2010, Gyeongju). By agreeing to adjust the composition of Executive Board members and adopt Basel III, leaders at the Seoul Summit were able to reach agreement on issues which had not been agreed upon for a very long time.\n Furthermore, by adopting the ‘Seoul Development Consensus for Shared Growth’ and ‘Multi-Year Action Plan on development', the Seoul Summit laid the foundation for developing countries to achieve sustainable growth through capacity building.\n In regard to global financial safety nets, the summit produced tangible outcomes on the creation of a preemptive response system for future financial crisis by improving the existing flexible credit line and introducing a precautionary credit line and a multinational flexible credit line. These outcomes are of keen interest to developing and emerging countries, the majority in the international community, which will help Korea play a bridging role between non-G20 countries and G20 member states, and lay the institutional and academic basis for increasing the legitimacy of the G20 in the future. \n It would have been impossible for the Seoul Summit to produce such tangible outcomes on key interests of developing and emerging economies without the Korean Government’s efforts to engage in continuous consultation with non-G20 countries on multiple aspects. These consultations were largely carried out by the Ambassador at large for the G20 who visited Asia, Africa, America and Europe for multiple briefing sessions with key international organizations like the ILO (International Labor Organization) and UN (United Nations), in order to collect the general opinion of the international community and explain them the details on the preparatory works directed toward the Seoul Summit.",
                },
                {
                  id: 14,
                  year: "2010 CA",
                  logo: "./assets/logo/2010CA.jpeg",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2010_CA/1.jpg",
                      caption:
                        "Leaders of the G20 nations in a family photo taken in Toronto Canada",
                    },
                  ],
                  summit_head: "G20 Summit in Toronto, Canada, 26-27 June 2010",
                  summit_info:
                    "At the time of G20 Toronto Summit, most of the countries were entering recovery mode from the global economic recession. The Summit Declaration stated that serious challenges remained in the form of high unemployment rates in various economies and the concurrent existence of the impact of the financial crisis. The International Monetary Fund, in its post-summit document, indicated that a speedy cut in deficits might substantially slow growth. The organization insisted that balanced public spending could stabilize bond markets, reduce interest rates from less government spending, and encourage private investment. It also recommended that emerging economies such as China, which had largely benefited from trade surpluses, should rely less on developed nations and increase their own spending in order to promote domestic demand.",
                },
                {
                  id: 15,
                  year: "2009",
                  logo: "./assets/logo/2009.gif",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2009/1.jpg",
                      caption: "G20 leaders at G20 London Summit 2009",
                    },
                  ],
                  summit_head: "G20 Summit in London,UK, 2nd April 2009",
                  summit_info:
                    "The London Summit took place at a time when the world confronts the worst economic crisis since the Second World War. The London Summit aims were to bring together leaders of the world’s major economies and key international institutions to take the collective action necessary to stabilize the world economy and secure recovery and jobs. Leaders faced an unprecedented range of challenges – of averting an even more severe downturn and restoring growth in the short term, while at the same time reshaping the financial system, preserving the world trading system, and laying the foundations for a sustainable recovery. Real action was agreed at the Summit, with Leaders agreeing on steps to restore confidence, growth and jobs; strengthen financial supervision and regulation; fund and reform our international financial institutions to overcome this crisis and prevent future ones; promote global trade and investment and reject protectionism, to underpin prosperity; and to build an inclusive green and sustainable recovery.",
                },
                {
                  id: 16,
                  year: "2008",
                  logo: "./assets/logo/2008.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2021/1.jpg",
                      caption:
                        "Opening Ceremony for G20 Washington Summit 2008",
                    },
                  ],
                  summit_head:
                    "G20 Summit in Washington DC, USA, 14-15 November 2008",
                  summit_info:
                    "The 2008 G20 summit was held in Washington D.C. in the wake of the sub-prime mortgage financial crisis and was titled ‘Declaration of the Summit on Financial Markets and the World Economy’. The leaders discussed efforts to strengthen economic growth, deal with the extant financial crisis, and to lay the foundation for reform to help to ensure that a similar crisis does not happen again. The Summit achieved five key objectives. \n  The leaders: Reached a common understanding of the root causes of the global crisis; Reviewed actions countries have taken and will take to address the immediate crisis and strengthen growth; Agreed on common principles for reforming our financial markets;  Launched an action plan to implement those principles and asked ministers to develop further specific recommendations that will be reviewed by leaders at a subsequent summit; and Reaffirmed their commitment to free market principles. \n The leaders approved an Action Plan that sets forth a comprehensive work plan to achieve these objectives, and asked finance ministers to work to ensure that the Action Plan is fully and vigorously implemented. The Plan included immediate actions to address weaknesses in accounting and disclosure standards for off-balance sheet vehicles; ensure that credit rating agencies meet the highest standards and avoid conflicts of interest, provide greater disclosure to investors, and differentiate ratings for complex products; ensure that firms maintain adequate capital, and set out strengthened capital requirements for banks' structured credit and securitization activities; develop enhanced guidance to strengthen banks' risk management practices, and ensure that firms develop processes that look at whether they are accumulating too much risk; establish processes whereby national supervisors who oversee globally active financial institutions meet together and share information; and expand the Financial Stability Forum to include a broader membership of emerging economies.                ",
                },
              ],
            },
            {
              id: 4,
              page_topic: "G20 India 2023",
              main_head: "Logo & Theme",
              paratext:
                "The G20 Logo draws inspiration from the vibrant colours of India’s national flag – saffron, white and green, and blue. It juxtaposes planet Earth with the lotus, India’s national flower that reflects growth amid challenges. The Earth reflects India’s pro-planet approach to life, one in perfect harmony with nature. Below the G20 logo is “Bharat”, written in the Devanagari script. \n The theme of India’s G20 Presidency - “Vasudhaiva Kutumbakam” or “One Earth · One Family · One Future” - is drawn from the ancient Sanskrit text of the Maha Upanishad. Essentially, the theme affirms the value of all life – human, animal, plant, and microorganisms – and their interconnectedness on the planet Earth and in the wider universe.\n The theme also spotlights LiFE (Lifestyle for Environment), with its associated, environmentally sustainable and responsible choices, both at the level of individual lifestyles as well as national development, leading to globally transformative actions resulting in a cleaner, greener and bluer future. \n The logo and the theme together convey a powerful message of India’s G20 Presidency, which is of striving for just and equitable growth for all in the world, as we navigate through these turbulent times, in a sustainable, holistic, responsible, and inclusive manner. They represent a uniquely Indian approach to our G20 Presidency, of living in harmony with the surrounding ecosystem.\n For India, the G20 Presidency also marks the beginning of “Amritkaal”, the 25-year period beginning from the 75th anniversary of its independence on 15 August 2022, leading up to the centenary of its independence, towards a futuristic, prosperous, inclusive and developed society, distinguished by a human-centric approach at its core.  ",
            },
            {
              id: 5,
              page_topic: "G-20 India 2023",
              main_head: "New Delhi Summit",
              paratext:
                "The 18th G20 Heads of State and Government Summit will take place on 9th-10th September 2023 in New Delhi. The Summit will be a culmination of all the G20 processes and meetings held throughout the year among ministers, senior officials, and civil societies. A G20 Leaders’ Declaration will be adopted at the conclusion of the New Delhi Summit, stating Leaders’ commitment towards the priorities discussed and agreed upon during the respective ministerial and working group meetings.",
              sub_head: "G20 Leaders",
              people: [
                {
                  name: "Alberto Fernandez",
                  country: "Argentina",
                  position: "President",
                  photo: "./assets/members/1.png",
                  flag_photo: "./assets/flags/1.jpeg",
                },
                {
                  name: "Anthony Albanese",
                  country: "Australia",
                  position: "Prime Minister",
                  photo: "./assets/members/2.png",
                  flag_photo: "./assets/flags/2.jpeg",
                },
                {
                  name: "Jair Bolsonaro",
                  country: "Brazil",
                  position: "President",
                  photo: "./assets/members/3.png",
                  flag_photo: "./assets/flags/3.jpeg",
                },
                {
                  name: "Justin Pierre James Trudeau",
                  country: "Canada",
                  position: "Prime Minister",
                  photo: "./assets/members/4.jpeg",
                  flag_photo: "./assets/flags/4.jpeg",
                },
                {
                  name: "Xi Jinping",
                  country: "China",
                  position: "President",
                  photo: "./assets/members/5.jpeg",
                  flag_photo: "./assets/flags/5.jpeg",
                },
                {
                  name: "Emmanuel Macron",
                  country: "France",
                  position: "President",
                  photo: "./assets/members/6.jpeg",
                  flag_photo: "./assets/flags/6.jpeg",
                },
                {
                  name: "Olaf Scholz",
                  country: "Germany",
                  position: "Chancellor",
                  photo: "./assets/members/7.png",
                  flag_photo: "./assets/flags/7.jpeg",
                },
                {
                  name: "Narendra Modi",
                  country: "India",
                  position: "Prime Minister",
                  photo: "./assets/members/8.png",
                  flag_photo: "./assets/flags/8.jpeg",
                },
                {
                  name: "Joko Widodo",
                  country: "Indonesia",
                  position: "President",
                  photo: "./assets/members/9.png",
                  flag_photo: "./assets/flags/9.jpeg",
                },
                {
                  name: "Giorgia Meloni",
                  country: "Italy",
                  position: "Prime Minister",
                  photo: "./assets/members/10.png",
                  flag_photo: "./assets/flags/10.jpeg",
                },
                {
                  name: "Fumio Kishida",
                  country: "Japan",
                  position: "Prime Minister",
                  photo: "./assets/members/11.png",
                  flag_photo: "./assets/flags/11.jpeg",
                },
                {
                  name: "Andrés Manuel López Obrador",
                  country: "Mexico",
                  position: "President",
                  photo: "./assets/members/12.jpeg",
                  flag_photo: "./assets/flags/12.jpeg",
                },
                {
                  name: "Yoon Suk-Yeol",
                  country: "Republic of Korea",
                  position: "President",
                  photo: "./assets/members/13.jpeg",
                  flag_photo: "./assets/flags/13.png",
                },
                {
                  name: "Vladimir Putin",
                  country: "Russia",
                  position: "President",
                  photo: "./assets/members/14.png",
                  flag_photo: "./assets/flags/14.png",
                },
                {
                  name: "Salman bin Abdulaziz Al Saud",
                  country: "Saudi Arabia",
                  position: "King",
                  photo: "./assets/members/15.jpeg",
                  flag_photo: "./assets/flags/15.jpeg",
                },
                {
                  name: "Cyril Ramaphosa",
                  country: "South Africa",
                  position: "President",
                  photo: "./assets/members/16.jpeg",
                  flag_photo: "./assets/flags/16.jpeg",
                },
                {
                  name: "Recep Tayyip Erdoğan",
                  country: "Türkiye",
                  position: "President",
                  photo: "./assets/members/17.jpeg",
                  flag_photo: "./assets/flags/17.jpeg",
                },
                {
                  name: "Rishi Sunak",
                  country: "United Kingdom",
                  position: "Prime Minister",
                  photo: "./assets/members/18.jpeg",
                  flag_photo: "./assets/flags/18.jpeg",
                },
                {
                  name: "Joseph R. Biden Jr.",
                  country: "United States of America",
                  position: "President",
                  photo: "./assets/members/19.png",
                  flag_photo: "./assets/flags/19.jpeg",
                },
                {
                  name: "Charles Michel",
                  country: "European Union",
                  position: "President of the European Council",
                  photo: "./assets/members/20.jpeg",
                  flag_photo: "./assets/flags/19.jpeg",
                },
                {
                  name: "Ursula von der Leyen",
                  country: "European Union",
                  position: "President of the European Council",
                  photo: "./assets/members/21.png",
                  flag_photo: "./assets/flags/19.jpeg",
                },
              ],
            },
            {
              id: 6,
              page_topic: "Explore India",
              main_head: "Explore India",
              topic1: "Travel and experience the beauty of Incredible India",
              sub_paratext1:
                "India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the finest destinations for a holistic vacation. Extending from the snow-covered Himalayan heights to the tropical rain forests of the south, India is home to spectacular landscapes - long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes, serene ghats and largest tiger reserve. India is known for its monuments and edifices that display the fine architecture and grandiose of different eras in the country.",

              topic2: "Culture & Heritage of India",
              sub_paratext2:
                "The rich cultural heritage of India, one of the world’s oldest civilizations, is an all-embracing confluence of religions, traditions and customs. Over the years, numerous styles of art, architecture, painting, music, dance, festivals and customs have developed in India. The finesse of Indian handiwork, the richness of silk and cotton textiles, the ethnicity of jewellery, everything has come down as a heritage from ancient times and is being kept alive generation after generation. Festivals reflect the soul of India’s diversity and its rich cultural heritage. Various festivals of differing character - national, social, cultural and religious, are celebrated across the country throughout the year.",

              topic3: "Azadi Ka Amrit Mahotsav",
              sub_paratext3:
                "Azadi Ka Amrit Mahotsav is an initiative of the Government of India to celebrate and commemorate 75 years of independence and the glorious history of its people, culture and achievements. This Mahotsav is dedicated to the people of India who have not only been instrumental in bringing India thus far in its evolutionary journey but also hold within them the power and potential to enable Prime Minister Narendra Modi's vision of activating India 2.0, fuelled by the spirit of Aatmanirbhar Bharat. \n The official journey of Azadi ka Amrit Mahotsav commenced on 12th March 2021 which started a 75-week countdown to our 75th anniversary of independence and will end post a year on 15th August 2023.                ",

              topic4: "India’s Achievements",
              sub_paratext4:
                "The journey of India since August 15, 1947 has been one of development. India is the world’s largest democracy, it’s fifth largest economy, a lucrative destination for foreign direct investment, and a global information technology (IT) powerhouse. On India’s proposal, the United Nation’s General Assembly had adopted the International Day of Yoga (celebrated since 2014) and the International Year of Millets (coinciding with India’s G20 Presidency). Some of India’s latest development initiatives across sectors include Startup India Initiative; Digital India; Make in India campaign; Pradhan Mantri Jan Dhan Yojana (PMJDY) - one of the biggest financial inclusion initiatives in the world; AYUSHMAN Bharat- the biggest government-sponsored healthcare scheme in the world; and PM Ujjwala Yojana – providing universal access to clean energy, International Solar Alliance, among others.",
            },
          ],
        },
      },
      hin: {
        translation: {
          home: "Home",
          about_g20: "G20 के बारे में",
          overview: "विवरण",
          g20_members: "G20 के सदस्य",
          previous_summits: "पिछले शिखर सम्मेलन",
          logo_theme: "लोगो और विषय",
          ndsummit: "नई दिल्ली शिखर सम्मेलन",

          g20_india2023: "G20 भारत 2023",
          explore_india: "भारत को जानिए",
          view_next: "View Next",
          pages: [
            {
              id: 1,
              page_topic: "G20 के बारे में",
              main_head: "विवरण",
              main_paratext:
                "ग्रुप ऑफ ट्वेंटी (G20) अंतरराष्ट्रीय आर्थिक सहयोग का प्रमुख मंच है। यह सभी प्रमुख अंतरराष्ट्रीय आर्थिक मुद्दों पर वैश्विक संरचना और अधिशासन निर्धारित करने तथा उसे मजबूत करने में महत्वपूर्ण भूमिका निभाता है। \n भारत 1 दिसंबर 2022 से 30 नवंबर 2023 तक G20 की अध्यक्षता करेगा।",
              img_path: "./assets/flags.png",
              sub_topic1: "नेता-स्तरीय समुन्नयन",
              sub_paratext1:
                "2007 के वैश्विक आर्थिक और वित्तीय संकट के मद्देनजर G20 को राष्ट्राध्यक्षों/शासनाध्यक्षों के स्तर तक उन्नत किया गया था, और 2009 में इसे 'अंतर्राष्ट्रीय आर्थिक सहयोग हेतु प्रमुख मंच' के रूप में नामित किया गया था। \n  G20 शिखर सम्मेलन प्रतिवर्ष एक क्रमिक अध्यक्षता में आयोजित किया जाता है। शुरुआत में G20 व्यापक आर्थिक मुद्दों पर केंद्रित था, परंतु बाद में इसके एजेंडे में विस्तार करते हुए इसमें अन्य बातों के साथ व्यापार, जलवायु परिवर्तन, सतत विकास, स्वास्थ्य, कृषि, ऊर्जा, पर्यावरण, जलवायु परिवर्तन और भ्रष्टाचार-विरोध शामिल किया गया। ",
              sub_topic2: "G20 की स्थापना",
              sub_paratext2:
                "G20 की स्थापना 1999 में एशियाई वित्तीय संकट के बाद वित्त मंत्रियों और केंद्रीय बैंक के गवर्नरों के लिए वैश्विक आर्थिक और वित्तीय मुद्दों पर चर्चा करने के लिए एक मंच के रूप में की गई थी।",
            },
            {
              id: 2,
              page_topic: "About G20",
              main_head: "G20 के सदस्य",
              guest_country: "अतिथि देश",
              main_paratext:
                "ग्रुप ऑफ ट्वेंटी (G20) में 19 देश (अर्जेंटीना, ऑस्ट्रेलिया, ब्राजील, कनाडा, चीन, फ्रांस, जर्मनी, भारत, इंडोनेशिया, इटली, जापान, कोरिया गणराज्य, मैक्सिको, रूस, सऊदी अरब, दक्षिण अफ्रीका, तुर्किये, यूनाइटेड किंगडम और संयुक्त राज्य अमेरिका) और यूरोपीय संघ शामिल हैं। G20 सदस्य देशों में वैश्विक सकल घरेलू उत्पाद का लगभग 85%, वैश्विक व्यापार का 75% से अधिक और विश्व की लगभग दो-तिहाई आबादी है।",
            },
            {
              id: 3,
              page_topic: "About G20",
              main_head: "पिछले शिखर सम्मेलन",
              gallery: "गैलरी",
              summit_info_btn: "शिखर सम्मेलन की जानकारी",
              year_summit: [
                {
                  id: 1,
                  year: "2022",
                  logo: "./assets/logo/2022.png",
                  total_img: "2",
                  images: [
                    {
                      pic: "./assets/year_summits/2022/1.jpg",
                      caption:
                        "इंडोनेशिया में आयोजित विदेश मंत्रियों की बैठक में विदेश मंत्री डॉ. एस. जयशंकर",
                    },
                    {
                      pic: "./assets/year_summits/2022/2.jpg",
                      caption:
                        "बाली, इंडोनेशिया में वित्त मंत्रियों और सेंट्रल बैंक गवर्नर्स की दूसरी बैठक में केन्द्रीय वित्त मंत्री श्रीमती निर्मला सीतारमण",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन बाली, इंडोनेशिया, 15-16 नवंबर 2022",
                  summit_info:
                    "17वें G20 राष्ट्राध्यक्षों एवं शासनाध्यक्षों का शिखर सम्मेलन 15-16 नवंबर 2022 को बाली में आयोजित किया गया। इस शिखर सम्मेलन मे G20 की प्रक्रिया और वर्ष भर मंत्रिस्तरीय बैठकों कार्यसमूहों और संपर्क समूहों के तहत किए जाने वाले गहन कार्य शामिल थे।",
                },
                {
                  id: 2,
                  year: "2021",
                  logo: "./assets/logo/2021.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2021/1.jpg",
                      caption:
                        "रोम, इटली में मन्‍नत के लिए सिक्का उछालने के लिए ट्रेवी फाउंटेन की पारंपरिक यात्रा पर G20 नेता",
                    },
                    {
                      pic: "./assets/year_summits/2021/2.jpg",
                      caption:
                        "पीएम मोदी बिल्ड बैक बेटर फॉर द वर्ल्ड (बी3डब्ल्यू) में भाग लेते हुए।",
                    },
                    {
                      pic: "./assets/year_summits/2021/3.jpg",
                      caption:
                        "प्रधानमंत्री ने G20 की तर्ज पर वैश्विक आपूर्ति श्रृंखला के लचीलेपन पर शिखर सम्मेलन में भाग लिया।",
                    },
                  ],
                  summit_head: "G20 शिखर सम्मेलन रोम, इटली, 30-31 अक्तूबर 2021",
                  summit_info:
                    "इटली की अध्यक्षता के तहत G20 शिखर सम्मेलन 30-31 अक्तूबर 2021 को रोम में आयोजित किया गया था जिसमें इसके सदस्यों, छह आमंत्रित देशों (स्पेन, नीदरलैंड, सिंगापुर, कांगो लोकतांत्रिक गणराज्य, रवांडा और ब्रुनेई, नेपाड और आसियान) एवं नौ अंतरराष्ट्रीय संगठनों के प्रतिनिधियों ने भाग लिया। 'लोग, ग्रह, समृद्घि' के सिद्घांत के तहत नेताओं के शिखर सम्मेलन में तीन मुख्य सत्रों में स्वास्थ्य संकट से जुड़े बृहद आर्थिक वैश्विक विकास; पर्यावरण और जलवायु चुनौतियों के समाधान; वैश्विक स्तर पर सतत विकास को विकसित करने की आवश्यकता पर चर्चा की गई। बाद के दो कार्यक्रम एसएमई के वित्तीय समावेशन (महिलाओं के नेतृत्व किये जाने वाले कार्य पर केंद्रित) और जलवायु परिवर्तन से निपटने में सार्वजनिक- निजी भागीदारी से संबंधित थे। शिखर सम्मेलन ने नेताओं की एक घोषणा पारित किया जिसमें न केवल अंतरराष्ट्रीय कराधान, विशेष आहरण अधिकार, स्वास्थ्य-वित्त कार्य बल की स्थापना में महत्वपूर्ण प्रगति को सुनिश्चित करता है बल्कि टीकों की वैश्विक सुलभता और आपूर्ति विशेष रूप से अतिसंवेदनशील देशों को समर्थन देने एवं जलवायु परिवर्तन से निपटने के लिए G20 देशों के परस्पर उद्देश्य भी शामिल है। इटली अध्यक्षता के अन्य महत्वपूर्ण परिणामों में खाद्य सुरक्षा पर मटेरा घोषणा की औपचारिक स्वीकृति, वैश्विक स्तर पर 2030 तक एक ट्रिलियन वृक्षारोपण का साझा लक्ष्य शामिल थे। G20 शिखर सम्मेलन ने 'ब्रिस्बेन लक्ष्यों के लिए और उसके बाद की कार्ययोजना' लागू करने की प्रतिबद्घता दिखाते हुए महिला सशक्तिकरण के प्रति अपना समर्थन व्यक्त किया। अंत में नेताओं ने G20 मुद्दे के रूप में संस्कृति की पहचान की तथा भ्रष्टाचार के विरुद्घ लड़ाई में नवाचारी साधनों को अपनाया।",
                },
                {
                  id: 3,
                  year: "2020",
                  logo: "./assets/logo/2020.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2020/1.jpg",
                      caption:
                        "रियाद, सऊदी अरब के बाहर अद-दिरियाह में यूनेस्को की विश्व धरोहर स्थल एट-तुरीफ जिले की दीवारों पर G20 नेताओं की सामूहिक तस्वीर",
                    },
                  ],

                  summit_head:
                    "G20 शिखर सम्मेलन रियाद, सउदी अरब, 21-22 नवंबर 2020",
                  summit_info:
                    "सउदी अरब ने 21-22 नवंबर 2020 को रियाद में एक वर्चुअल G20 शिखर सम्मेलन की मेजबानी की। G20 नेताओं ने वैश्विक कार्रवाई, एकजुटता और बहुपक्षीय सहयोग के संबंध में, ग्रह की सुरक्षा और नई सीमाएँ स्थापित करने का समन्वय करने के लिए अपनी प्रतिबद्घता व्यक्त की। इसके अलावा G20 के नेताओं ने कोविड-19 महामारी से निपटने के लिए मिलकर काम करने, विकास को बढ़ावा देने एवं अधिक समावेशी, सतत और सहज भविष्य बनाने के लिए प्रतिबद्घता व्यक्त की। G20 नेताओं ने अतिसंवेदनशील एवं कमजोर देशों विशेष रूप से अफ्रीका में महामारी के खिलाफ लड़ाई में अपना समर्थन देने के लिए दृढ़ संकल्प किया। G20 के नेताओं ने उन लाखों श्रमिकों विशेष रूप से महिलाओं और युवाओं के रोजगार पर भी ध्यान केंद्रित किया जो नौकरी और आय हानि का सामना कर रहे हैं। इसने सभी के लिए जो अनौपचारिक अर्थव्यवस्था में शामिल है, के साथ सक्रिय सामाजिक सुरक्षा पर भी ध्यान केंद्रित किया।सउदी अरब ने 21-22 नवंबर 2020 को रियाद में एक वर्चुअल G20 शिखर सम्मेलन की मेजबानी की। G20 नेताओं ने वैश्विक कार्रवाई, एकजुटता और बहुपक्षीय सहयोग के संबंध में, ग्रह की सुरक्षा और नई सीमाएँ स्थापित करने का समन्वय करने के लिए अपनी प्रतिबद्घता व्यक्त की। इसके अलावा G20 के नेताओं ने कोविड-19 महामारी से निपटने के लिए मिलकर काम करने, विकास को बढ़ावा देने एवं अधिक समावेशी, सतत और सहज भविष्य बनाने के लिए प्रतिबद्घता व्यक्त की। G20 नेताओं ने अतिसंवेदनशील एवं कमजोर देशों विशेष रूप से अफ्रीका में महामारी के खिलाफ लड़ाई में अपना समर्थन देने के लिए दृढ़ संकल्प किया। G20 के नेताओं ने उन लाखों श्रमिकों विशेष रूप से महिलाओं और युवाओं के रोजगार पर भी ध्यान केंद्रित किया जो नौकरी और आय हानि का सामना कर रहे हैं। इसने सभी के लिए जो अनौपचारिक अर्थव्यवस्था में शामिल है, के साथ सक्रिय सामाजिक सुरक्षा पर भी ध्यान केंद्रित किया। ",
                },
                {
                  id: 4,
                  year: "2019",
                  logo: "./assets/logo/2019.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2019/1.jpg",
                      caption:
                        "29 जून, 2019 को ओसाका, जापान में G20 शिखर सम्मेलन 2019 के दौरान महिला सशक्तिकरण पर एक विशेष कार्यक्रम में G20 नेता।",
                    },
                    {
                      pic: "./assets/year_summits/2019/2.jpg",
                      caption:
                        "ओसाका, जापान में 28 जून, 2019 को G20 जापान शिखर सम्मेलन में भाग लेने वाले साथी नेताओं के साथ ओसाका गेहिंकान में G20 सांस्कृतिक कार्यक्रम के दौरान एक सामूहिक तस्वीर में प्रधानमंत्री मोदी",
                    },

                    {
                      pic: "./assets/year_summits/2019/3.jpg",
                      caption:
                        "28 जून, 2019 को ओसाका, जापान में G20 शिखर सम्मेलन 2019 के दूसरे सत्र में प्रधानमंत्री ने डिजिटल अर्थव्यवस्था और आर्टिफिशियल इंटेलिजेंस पर अपने विचार व्‍यक्‍त किए।",
                    },
                  ],

                  summit_head: "G20 शिखर सम्मेलन ओसाका, जापान, 28-29 जून, 2019",
                  summit_info:
                    "G20 शिखर सम्मेलन, जिसकी मेजबानी 2019 में जापान ने पहली बार ओसाका में की जिसमें, G20 के सदस्य, 8 आमंत्रित देश और 9 अंतरराष्ट्रीय संगठनों के प्रतिनिधि शामिल थे और जो ऐतिहासिक रूप से जापान में आयोजित अब तक का सबसे बड़ा शिखर सम्मेलन था। प्रमुख देशों के नेता एक सामान्य आधार की पहचान करने और विश्व अर्थव्यवस्था से संबंधित प्रमुख मुद्दों से संयुक्त रूप से निपटने हेतु एकत्र हुए।  \n वैश्वीकरण से होने वाले परिवर्तनों से उत्पन्न विश्वव्यापी अशांति एवं असंतोष के बीच जापान ने अध्यक्ष के रूप में यह सुनिश्चित करते हुए नेतृत्व किया कि G20 ओसाका नेताओं की घोषणा के माध्यम से विश्व को सशक्त संदेश मिले जिसमें विभिन्न क्षेत्रों जैसे बढ़ती हुई वैश्विक आर्थिक विकास के जरिए मुक्त व्यापार और नवोन्मेष को बढ़ावा देना एवं असमानतओं को दूर करने के साथ-साथ पर्यावरणीय एवं वैश्विक चुनौतियों का समाधान करने के लिए योगदान देना शामिल है। ",
                },
                {
                  id: 5,
                  year: "2018",
                  logo: "./assets/logo/2018.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2018/1.jpg",
                      caption:
                        "30 नवंबर, 2018 को ब्यूनस आयर्स में G20 शिखर सम्मेलन के पूर्ण सत्र में G20 सदस्यों का सामूहिक चित्र।",
                    },
                    {
                      pic: "./assets/year_summits/2018/2.jpg",
                      caption:
                        "प्रधानमंत्री ने 30 नवंबर, 2018 को ब्यूनस आयर्स में G20 शिखर सम्मेलन के अवसर पर आरआईसी अनौपचारिक शिखर सम्मेलन को संबोधित किया।",
                    },

                    {
                      pic: "./assets/year_summits/2018/3.jpg",
                      caption:
                        "प्रधानमंत्री ने 29 नवंबर, 2018 को ब्यूनस आयर्स में G20 शिखर सम्मेलन के दौरान संयुक्त राष्ट्र महासचिव एंटोनियो गुटेरेस से मुलाकात की।",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन ब्यूनस आयर्स, अर्जेंटीना, 30 नवंबर- 1 दिसंबर, 2018",
                  summit_info:
                    "अर्जेंटीना ने 1 दिसंबर, 2017 को ग्रुप ऑफ़ ट्वेंटी (G20) की अध्यक्षता संभाली, जो 1 दिसंबर, 2018 तक चली, जब ब्यूनस आयर्स शहर में नेताओं का शिखर सम्मेलन संपन्न हुआ। चूंकि अर्जेंटीना ने दक्षिण अमेरिका में आयोजित पहले G20 शिखर सम्मेलन की मेजबानी की थी, इसलिए वैश्विक आर्थिक अधिशासन के लिए सबसे प्रासंगिक मंच की अध्यक्षता करने के लिए चुने जाने का तथ्य बहुत महत्वपूर्ण था। यह मंच अंतरराष्ट्रीय सहयोग, बहुपक्षवाद और वैश्विक शासन के साथ-साथ मुख्य वैश्विक चुनौतियों की पहचान करने के लिए सरकार की प्रतिबद्धता को प्रदर्शित करने का अवसर प्रदान करता है। अर्जेंटीना ने बैठक का नेतृत्व करने और अंतरराष्ट्रीय व्यापार, अतिरिक्त इस्पात क्षमता, साथ ही जलवायु परिवर्तन के क्षेत्र में पेरिस समझौते की भूमिका और 2030 एजेंडे पर किस तरह कार्य करना चाहिए, जैसे संवेदनशील मुद्दों पर आम सहमति बनाने के लिए अपनी क्षमता प्रमाणित की। \n सिद्धांतों की अवसंरचना के भीतर 'न्यायसंगत और सतत विकास के लिए आम सहमति तैयार करना', G20 2018 में ये मुद्दे महत्वपूर्ण थे तथा इनमें तीन प्राथमिकताएं निर्धारित की गईं हैः 'कार्य का भविष्य', 'विकास के लिए अवसंरचना' तथा 'एक स्थायी खाद्य भविष्य', जो अर्जेंटीना की अध्यक्षता में शामिल की जाएंगी। G20 के एजेंडे में लोगों को इसकी मुख्य धुरी माना गया है। वैसे ही जैसे अर्जेंटीना ने महिलाओं के परिपेक्ष्य के मुद्दे को उठाया और मंच के विभिन्न कार्य समूहों में उसको बढ़ावा दिया।  \n सालभर में 60 से अधिक बैठकें आयोजित की गईं जिनमें से 10 बैठकें मंत्रीस्तरीय थीं। ये बैठकें ब्यूनस आयर्स और नेउक्वेन, ब्यूनस आयर्स, मेंडोसा, सांता फे, जुजुए, साल्टा, टुकुमन और टिएरा दे फ्यूगो के प्रांतो में आयोजित की गई थीं। परिणामस्वरूप वित्त, रोजगार, शिक्षा (जिनके कार्य समूहों का निर्माण G20 के इतिहास में पहली बार और अर्जेंटीना की पहल के रूप में किया गया), डिजिटल अर्थव्यवस्था, कृषि, स्वास्थ्य, व्यापार और ऊर्जा के क्षेत्र में मंत्रीस्तरीय घोषणाएं की गई थीं। \n अर्जेंटीना ने G20 में विकासशील देशों के परिप्रेक्ष्य को बढ़ावा देने के इरादे से तथा बैठक को व्यापक एवं अधिक समावेशी बनाने के उद्देश्य से कार्य किया है।  \n अर्जेंटीना की G20 अध्यक्षता के कार्य से सदस्यों के बीच वार्ता के लिए विभिन्न उदाहरणों का प्रसार हुआ है जिसमें कार्य समूहों के ढांचे के भीतर हुए करारों को दर्शाने का प्रयास किया गया है और इस प्रयास का परिणाम नेताओं की मौलिक विज्ञप्ति, यहां तक कि व्यापार और जलवायु परिवर्तन जैसे अंतरराष्ट्रीय एजेंडे से संबंधित संबंधित मामलों में भी दर्शाया गया है। उसी प्रकार, अर्जेंटीना विरोधाभास की स्थिति को और अधिक गंभीर न बनाकर समानान्तर कार्यों की पहचान करने में समर्थ रहा, जैसा कि पूरे वर्ष आयोजित अन्य मंचों में हुआ। सदस्य राष्ट्रों ने यह स्वीकार किया कि यह सामान्य स्थितियों का पुनर्स्थापन शुरू करने का समय था, भले ही वे अतीत मे हुए करारों की तुलना में कम महत्वाकांक्षी लग सकते हैं जो आज प्रभावपूर्ण नहीं हैं।",
                },
                {
                  id: 6,
                  year: "2017",
                  logo: "./assets/logo/2017.png",
                  total_img: "4",
                  images: [
                    {
                      pic: "./assets/year_summits/2017/1.jpg",
                      caption:
                        "7 जुलाई, 2017 को जर्मनी के हैम्बर्ग में G20 राष्ट्रों के नेताओं की सामूहिक तस्वीर",
                    },
                    {
                      pic: "./assets/year_summits/2017/2.jpg",
                      caption:
                        "जर्मनी के हैम्बर्ग में G20 राष्ट्रों के अन्य नेताओं के साथ सामूहिक फोटोग्राफ में प्रधान मंत्री",
                    },

                    {
                      pic: "./assets/year_summits/2017/3.jpg",
                      caption:
                        "07 जुलाई, 2017 को जर्मनी के हैम्बर्ग में 12वें G20 शिखर सम्मेलन के अवसर पर ब्रिक्स देशों के नेताओं की अनौपचारिक बैठक में प्रधानमंत्री।",
                    },
                    {
                      pic: "./assets/year_summits/2017/4.jpg",
                      caption:
                        "8 जुलाई, 2017 को जर्मनी के हैम्बर्ग में 12वें G20 शिखर सम्मेलन के समापन के बाद प्रधानमंत्री कार्यक्रम स्थल से बाहर आते हुए।",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन हैम्बर्ग, जर्मनी, 7-8 जुलाई 2017",
                  summit_info:
                    "'शेपिंग एन इंटरकनेक्टेड वर्ल्ड' के आदर्श वाक्य के तहत, हैम्बर्ग (2017) में G20 ने प्रमुख मुद्दों पर वास्तविक बहुपक्षीय सहयोग के लिए प्राथमिकता दी और मार्ग प्रशस्त किया जो आज भी महत्‍वपूर्ण रूप से प्रासंगिक हैं। G20 ने महामारी की तैयारी और एएमआर पर उल्लेखनीय विवेक का प्रदर्शन किया, और G20 अफ्रीका साझोदारी स्थापना की, जिसमें अफ्रीका के साथ स्थायी निवेश और अवसरों पर केंद्रित करार शामिल है। \n हैम्बर्ग में हुए G20 सम्मेलन में कई नई पहलों को पारित किया, जैसे कि पेरिस समझौते के कार्यान्वयन के लिए G20 हैम्बर्ग जलवायु और ऊर्जा कार्य योजना, और सतत विकास के लिए 2030 एजेंडा को लागू करने के लिए हैम्बर्ग अपडेट। \n इसके अतिरिक्त, G20 ने बहुपक्षीय नियम-आधारित व्यापार प्रणाली की पुष्टि की, जिसमें स्थायी आपूर्ति श्रृंखलाओं के लिए पुनः प्रतिबद्धता और अतिरिक्त क्षमताओं पर ध्यान देना शामिल है; वित्तीय कार्रवाई कार्य बल के माध्यम से आतंकवाद-रोधी क्षमताओं को सुदृढ़ करना; महिला सशक्तिकरण के माध्यम से स्त्री-/पुरुष समानता प्राप्त करने की दिशा में ठोस कदम उठाना (इसमें #eSkills4Girls और महिला उद्यमी वित्त पहल जैसी पहलें शामिल हैं, जिसे विकासशील देशों में महिलाओं को अपना व्यवसाय स्थापित  करने में मदद करने हेतु डिज़ाइन किया गया है) और विस्थापन के अंतर्निहित कारणों को दूर करने की आवश्यकता पर प्रकाश डाला, और शरणार्थियों और प्रवासियों की जरूरतों रो पूरा करना शामिल है।",
                },
                {
                  id: 7,
                  year: "2016",
                  logo: "./assets/logo/2016.jpeg",
                  total_img: "2",
                  images: [
                    {
                      pic: "./assets/year_summits/2016/1.jpg",
                      caption:
                        "हांग्जो, चीन में G20 शिखर सम्मेलन 2016 में एक सामूहिक तस्वीर में विश्व के अन्य नेताओं के साथ प्रधान मंत्री।",
                    },
                    {
                      pic: "./assets/year_summits/2016/2.jpg",
                      caption:
                        "4 सितंबर, 2016 को चीन के हांगझोउ में G20 शिखर सम्मेलन 2016 के दौरान ब्रिक्स नेताओं की बैठक में भाग लेते हुए प्रधान मंत्री।",
                    },
                  ],
                  summit_head: "G20 शिखर सम्मेलन हांग्जो, चीन, 4-5 सितंबर 2016",
                  summit_info:
                    "4-5 सितंबर, 2016 को 11वां G20 शिखर सम्मेलन चीन के हांग्जो में आयोजित किया गया था। इसका विषय 'एक अभिनव, सक्रिय, परस्पर और समावेशी विश्व अर्थव्यवस्था की ओर' था। प्रतिभागियों ने चार प्रमुख कार्यसूची मदों - विकास के लिए एक नया मार्ग प्रशस्‍त करना, अधिक प्रभावी और कुशल वैश्विक आर्थिक और वित्तीय शासन, मजबूत अंतर्राष्ट्रीय व्यापार और निवेश, और समावेशी और परस्पर विकास पर व्यापक विचार विमर्श किया। \n विश्व आर्थिक विकास और G20 के रूपांतरण के लिए एक महत्वपूर्ण मोड़ के साथ, हांग्जो शिखर सम्मेलन को सभी पक्षों से अधिक आशाएं हैं। G20 लीडर्स कम्युनिक हांग्जो शिखर सम्मेलन और 28 परिणाम दस्तावेजों को पारित करने के बाद इसका समापन हुआ। इन परिणामों ने चुनौतियों का सामना करने के लिए मिलकर काम करने की भावना को दर्शाया, और विश्व अर्थव्यवस्था के लिए मार्ग प्रशस्‍त किया। सतत विकास के लिए 2030 कार्यसूची पर G20 कार्य योजना और वैश्विक व्यापार विकास के लिए G20 रणनीति जैसी व्यावहारिक कार्य योजनाओं का समर्थन आम विकास के प्रति प्रतिबद्धता को दर्शाता है। \n हांग्जो शिखर सम्मेलन ने अंतर्राष्ट्रीय समुदाय को यह संदेश दिया: G20 न केवल अपने सदस्यों बल्कि व्यापक दुनिया, विशेष रूप से विकासशील देशों और उनके लोगों की सेवा करता है। इसने शिखर सम्मेलन के मेजबान के रूप में चीन के अद्वितीय दृष्टिकोण को दर्शाया।",
                },
                {
                  id: 8,
                  year: "2015",
                  logo: "./assets/logo/2015.png",
                  total_img: "3",
                  images: [
                    {
                      pic: "./assets/year_summits/2015/1.jpg",
                      caption: "2015 तुर्की",
                    },
                    {
                      pic: "./assets/year_summits/2015/2.jpg",
                      caption:
                        "15 नवंबर, 2015 को अंताल्या, तुर्की में G20 तुर्की नेताओं के शिखर सम्मेलन के दौरान G20 नेता एक सामूहिक तस्वीर खिंचवाते हुए।",
                    },

                    {
                      pic: "./assets/year_summits/2015/3.jpg",
                      caption:
                        "प्रधान मंत्री नरेंद्र मोदी, जर्मन चांसलर एंजेला मर्केल और यूरोपीय आयोग के अध्यक्ष जीन-क्लाउड जंकर 'समावेशी विकास: वैश्विक अर्थव्यवस्था विकास रणनीतियाँ, रोजगार और निवेश रणनीतियों' पर कार्य सत्र-1 में भाग लेते हुए।",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन अंताल्या, तुर्की, 15-16 नवंबर 2015",
                  summit_info:
                    "तुर्किये 2015 में G20 अध्यक्ष था और इसने 15-16 नवंबर 2015 को अंताल्या में नेताओं के शिखर सम्मेलन की मेजबानी की। तुर्किये G20 अध्‍यक्षता का उद्देश्य अधिक समावेशी वैश्विक विकास विकसित करने, निवेश बढ़ाने और पिछली प्रतिबद्धताओं को प्रभावी ढंग से लागू करने पर ध्यान केंद्रित करना था। इसलिए, तुर्किये ने अपनी G20 अध्‍यक्षता संबं‍धी प्राथमिकताओं को तीन आई अर्थात् 'समावेशी, निवेश और कार्यान्वयन' से परिभाषित किया। \n नेताओं के शिखर सम्मेलन में 13.000 प्रतिभागियों के साथ 26 देशों और 07 अंतरराष्ट्रीय संगठनों के प्रतिनिधियों ने भाग लिया, जिसकी शुरुआत राष्ट्रपति एर्दोआन के प्रतिनिधिमंडल के प्रमुख के स्वागत समारोह और सामूहिक तस्वीर के साथ हुई। राष्ट्रपति एर्दोआन ने शिखर सम्मेलन के उद्घाटन समारोह के अवसर पर भाषण दिया। \n शिखर सम्मेलन के पहले दिन, नेताओं ने 'विकास और जलवायु परिवर्तन' पर वर्किंग लंच, 'समावेशी विकास: वैश्विक अर्थव्यवस्था, विकास रणनीतियाँ, रोजगार और निवेश रणनीतियाँ' शीर्षक वाले सत्र और 'वैश्विक चुनौतियाँ: आतंकवाद और शरणार्थी संकट' पर व‍र्किंग डिनर में भाग लिया। \n  नेताओं ने 'एनहांसिंग रेजिलिएशन' नामक सत्र में वित्तीय नियमों, अंतर्राष्ट्रीय कर, भ्रष्टाचार विरोधी और आईएमएफ सुधार पर चर्चा की। व्यापार और ऊर्जा वर्किंग लंच की कार्ययोजना में सबसे ऊपर था, जहां शिखर सम्मेलन की अंतिम विज्ञप्ति और अंताल्या कार्य योजना को अंगीकार किया गया।                  ",
                },
                {
                  id: 9,
                  year: "2014",
                  logo: "./assets/logo/2014.png",
                  total_img: "4",
                  images: [
                    {
                      pic: "./assets/year_summits/2014/1.jpg",
                      caption:
                        "G20 शिखर सम्मेलन के नेता ब्रिस्बेन में बैठक के दौरान सामूहिक तस्वीर खिंचवाते हुए।",
                    },
                    {
                      pic: "./assets/year_summits/2014/2.jpg",
                      caption:
                        "ऑस्ट्रेलिया के ब्रिस्बेन में G20 शिखर सम्मेलन के लिए प्रधानमंत्री का आगमन।",
                    },

                    {
                      pic: "./assets/year_summits/2014/3.jpg",
                      caption:
                        "15 नवंबर, 2014 को ब्रिस्बेन, ऑस्ट्रेलिया में G20 शिखर सम्मेलन के पहले पूर्ण सत्र में प्रधान मंत्री।",
                    },
                    {
                      pic: "./assets/year_summits/2014/4.jpg",
                      caption:
                        "प्रधान मंत्री नरेंद्र मोदी G20 नेताओं के आधिकारिक शिखर सम्‍मेलन के सामूहिक फोटो पर हस्ताक्षर करते हुए।",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन ब्रिस्बेन, ऑस्ट्रेलिया, 15-16 नवंबर 2014",
                  summit_info:
                    "ऑस्ट्रेलिया का 2014 का G20 शिखर सम्मेलन 15-16 नवंबर को ब्रिस्बेन में आयोजित किया गया था। शिखर सम्मेलन में विकास और नौकरियों, आर्थिक लचीलेपन और वैश्विक संस्थानों के सशक्तिकरण पर कार्यसूची के तीन विषयों पर परिणाम प्रस्तुत किए गए हैं। \n ब्रिस्बेन शिखर सम्मेलन में नेताओं ने आर्थिक विकास के लिए प्रमुख वैश्विक आर्थिक चुनौतियों और रणनीतियों पर चर्चा की। G20 5 वर्षों से G20 जीडीपी को 2 प्रतिशत से अधिक बढ़ाने के लिए प्रतिबद्ध है। ब्रिस्बेन कार्य योजना और संबद्ध विकास रणनीतियों में निर्धारित विकास को बढ़ावा देने और गुणवत्तापूर्ण रोजगार सृजित करने पर भी सहमत हुआ। \n नेताओं ने वैश्विक अवसंरचना केन्‍द्र के निर्माण के माध्यम से बुनियादी ढांचे में निवेश बढ़ाने; ऊर्जा सहयोग पर G20 सिद्धांतों के माध्यम से ऊर्जा सहयोग में सुधार और ऊर्जा बाजारों को मजबूत करने; और ब्रिस्बेन लक्ष्य के माध्यम से 2025 तक पुरुष और महिला कार्यबल भागीदारी दरों के बीच अंतर को 25 प्रतिशत तक कम करने पर सहमति व्यक्त की। नेताओं ने वित्तीय विनियमन को मजबूत करने और कर परिहार का मुकाबला करने के लिए सुधारों पर भी सहमति व्यक्त की। शिखर सम्मेलन के परिणामस्वरूप नेताओं की विज्ञप्ति, ब्रिस्बेन कार्य योजना और इबोला पर एकल बयान आया।",
                },
                {
                  id: 10,
                  year: "2013",
                  logo: "./assets/logo/2013.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2013/1.jpg",
                      caption:
                        "5 सितंबर, 2013 को रूस के सेंट पीटर्सबर्ग में आयोजित G20 शिखर सम्मेलन में नेताओं के पहले कार्य सत्र में प्रधान मंत्री।",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन सेंट पीटर्सबर्ग, रूस, 5-6 सितंबर 2013",
                  summit_info:
                    "सेंट पीटर्सबर्ग में G-20 शिखर सम्मेलन G20 देशों के नेताओं की आठवीं बैठक थी, जो 5-6 सितंबर, 2013 को सेंट पीटर्सबर्ग में रूस में आयोजित की गई थी। \n इस शिखर सम्मेलन के विचार के लिए प्रस्तावित मुख्य विषय थे: \n  सतत, मजबूत और संतुलित विकास के लिए रूपरेखा करार का कार्यान्वयन; \n  रोजगार उपलब्ध कराना; अंतरराष्ट्रीय मौद्रिक और वित्तीय प्रणाली में सुधार करना; \n वित्तीय विनियमन और पर्यवेक्षण में सुधार करना; \n वैश्विक ऊर्जा बाजारों का सतत विकास; \n अंतरराष्ट्रीय विकास को बढ़ावा देना; \n बहुपक्षीय व्यापार को मजबूत बनाना; \n भ्रष्टाचार रोध। \n जहां तक ​​रूसी G20  अध्यक्षता के उद्देश्य हैं, इसने कार्यसूची में कोई नया मद शामिल नहीं करने का निर्णय लिया, बल्कि विश्वभर में स्थायी, समावेशी और संतुलित विकास और रोजगार सृजन के समर्थन में पारंपरिक ट्रैक पर ध्यान केंद्रित करने का निर्णय लिया। इस रणनीतिक लक्ष्य को पूरा करने के लिए, रूस ने नए वैश्विक आर्थिक विकास चक्र को शुरू करने के उद्देश्य से निम्नलिखित तीन प्राथमिकताओं के लिए आम ध्यान केंद्रित करने की योजना बनाई, जिसमें, कौशल नौकरियों और निवेश के साथ, बाजारों में विश्वास और पारदर्शिता द्वारा और कारगर और कुशल विनियमन के माध्यम से विकास को बढ़ावा देना शामिल है। पारंपरिक G20 एजेंडा के अलावा दो नए वित्तीय विषय जोड़े गए - निवेश के लिए वित्तपोषण और सरकारी उधारी तथा सार्वजनिक ऋण स्थिरता। रूस ने नीतिगत उपायों के समन्वय पर ध्यान केंद्रित किया जो विकास के दीर्घकालिक निवेश स्रोतों के विस्तार और विकास को प्रोत्साहित करने के साथ-साथ सहमत अंतरराष्ट्रीय नियमों के एक सेट के लिए राष्ट्रीय प्रतिबद्धताओं के संदर्भ में संप्रभु उधार के भविष्य पर चर्चा करने के लिए अपनाए जा सकते हैं। \n पिछली प्रतिबद्धताओं की निरंतरता और कार्यान्वयन सुनिश्चित करने के लिए रूस ने G20 कार्यसूची जैसे वैश्विक ऊर्जा बाजारों में स्थिरता बनाए रखने, अंतरराष्ट्रीय विकास को आगे बढ़ाने, बहुपक्षीय व्यापार को मजबूत करने और भ्रष्टाचार का मुकाबला करने सहित आईएमएफ फॉर्मूला और कोटा में सुधार के साथ-साथ वैश्विक अर्थव्यवस्था की स्थिति, मजबूत, सतत और संतुलित विकास के लिए संरचनात्‍मक समझौते का कार्यान्वयन, रोजगार सृजन की सुविधा, मुद्रा और वित्तीय विनियमन और पर्यवेक्षण प्रणाली में सुधार पर पारंपरिक महत्वपूर्ण मुद्दों को आगे बढ़ाने के लिए सहभागियों के साथ मिलकर काम करने पर ध्यान केंद्रित किया है।",
                },
                {
                  id: 11,
                  year: "2012",
                  logo: "./assets/logo/2012.png",
                  total_img: "2",
                  images: [
                    {
                      pic: "./assets/year_summits/2012/1.jpg",
                      caption:
                        "18 जून, 2012 को लॉस काबोस, मैक्सिको में G20 नेताओं के साथ एक सामूहिक तस्वीर में प्रधान मंत्री।",
                    },
                    {
                      pic: "./assets/year_summits/2012/2.jpg",
                      caption:
                        "लॉस काबोस, मैक्सिको में G20 शिखर सम्मेलन के पहले पूर्ण सत्र में प्रधान मंत्री।",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन लॉस कैबोस, मेक्सिको, 18-19 जून 2012",
                  summit_info:
                    "मेक्सिको ने उभरते और विकासशील देशों के हितों और प्राथमिकताओं पर विचार करते हुए एक अधिक कारगर वैश्विक आर्थिक शासन प्रणाली प्राप्त करने के उद्देश्य से 2012 में G20 की अध्यक्षता ग्रहण की। \n मैक्सिकयाई अध्यक्षता की प्राथमिकताएं आर्थिक स्थिरता और विकास तथा रोजगार के लिए संरचनात्मक सुधार करना; वित्तीय प्रणाली को मजबूत बनाना और आर्थिक विकास में बढ़ोतरी के लिए वित्तीय समावेशन को बढ़ावा देना; आपस में जुड़ी वैश्विक अर्थव्यवस्था में अंतरराष्ट्रीय वित्तीय संरचना में सुधार करना; खाद्य सुरक्षा को सुदृढ़ करना और कच्चे माल की कीमत की अस्थिरता को कम करना; सतत विकास, हरित विकास को बढ़ावा देना और जलवायु परिवर्तन से निपटना शामिल था।",
                },
                {
                  id: 12,
                  year: "2011",
                  logo: "./assets/logo/2011.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2011/1.jpg",
                      caption:
                        "3 नवंबर 2011 को आयोजित G20 शिखर सम्मेलन, कान्स की सामूहिक तस्वीर",
                    },
                  ],
                  summit_head: "G20 शिखर सम्मेलन कान्स, फ्रांस, 3-4 नवंबर 2011",
                  summit_info:
                    "G20 नेताओं का शिखर सम्मेलन 3-4 नवंबर 2011 को कान्स, फ्रांस में आयोजित किया गया था। \n निम्नलिखित कदम उठाए गए और उनमें हुई प्रगति निम्नानुसार है: \n कमोडिटी बाजार में पारदर्शिता : कमोडिटी की कीमतों में अनावश्यक अस्थिरता को रोकने के लिए G20 ने कान में भौतिक-ऊर्जा एवं कृषि- और वित्तीय कमोडिटी बाजारों में पारदर्शिता बढ़ाने के लिए दृढ़ प्रतिबद्धताएं व्यक्त की हैं। \n विकासशील देशों में बुनियादी ढांचे में निवेश : G20, विकासशील देशों आदि में मानव संसाधन और क्षमता निर्माण के लिए श्री टिडजाने थियाम की अध्यक्षता में निजी क्षेत्र के विशेषज्ञों के उच्च-स्तरीय पैनल और विकास बैंकों द्वारा की गई सिफारिशों का समर्थन करता है।  \n विकास और जलवायु के लिए नवोन्मेषी वित्तपोषण : कान्स में, G20 ने पहली बार, विकास और जलवायु परिवर्तन के लिए अभिनव वित्तपोषण के लिए समर्थन जुटाया है।\n बैंकिंग विनियमन : G20, 2007 से बैंकिंग क्षेत्र के सामने आने वाली कठिनाइयों की प्रतिक्रिया में बैंकों पर लागू नियमों का एक नया ढांचा तैयार करने पर सहमत हुआ। \n  कृषि कीमतों का अस्थिरता से बचाव : मूल्य अस्थिरता विकासशील देशों के लिए अत्यधिक समस्याएं पैदा करती है, कीमतों में वृद्धि से उपभोक्ताओं को बोझ पड़ता है और कीमतें गिरने से उत्पादकों को कठिनाई होती है, इससे अनिश्चितता पैदा होती है जो निवेश निर्णयों, उत्पादन और उत्पादकता बढ़ाने, और अंततः कृषि विकास के लिए अनुकूल नहीं है।\n भ्रष्टाचार से मुकाबला करना: नवंबर 2010 में सियोल शिखर सम्मेलन के बाद से G20 ने भ्रष्टाचार के खिलाफ लड़ाई में अत्यधिक प्रगति की है। G20 देशों द्वारा व्यक्तिगत और सामूहिक प्रगति का श्रेय फ्रांस की G20 अध्यक्षता को दिया जाना चाहिए। इसके अलावा, G20 देशों ने संपत्ति की वसूली, मनी लॉन्ड्रिंग के खिलाफ लड़ाई, व्हिसलब्लोअर संरक्षण, भ्रष्टाचार विरोधी एजेंसियों की कार्यप्रणाली और स्वतंत्रता, सार्वजनिक क्षेत्र की पारदर्शिता और अंतर्राष्ट्रीय सहयोग सहित कई क्षेत्रों में काम करना शुरू कर दिया है। \n बाजार विनियमन : कान में, G20 ने वित्तीय क्षेत्र के इस प्रमुख सुधार को पूर्ण करने और नियामक मध्यस्थता के जोखिमों से बचने के लिए राष्ट्रीय व्यवस्था को उसके अनुरूप बनाने हेतु प्रतिबद्धता व्यक्त की है। G20 ने 1) गैर-केंद्रीय रूप से स्वीकृत डेरिवेटिव पर लागू वित्तीय गारंटी आवश्यकताओं संबंधी नियमावली और 2) केंद्रीय डेटाबेस और नियामक डेटा एक्सेस के लिए प्रक्रियाओं के सामंजस्य से संबंधित राष्ट्रीय व्यवस्थाओं को एकरूप बनाने के लिए नई व्यवस्थाएँ शुरू करने का भी निर्णय लिया है। \n व्यापार: G20 सदस्य देशों ने 2013 से पहले व्यापार को प्रतिबंधित करने से संबंधित नए उपाय लागू नहीं करने और पहले से लागू किए गए सभी संरक्षणवादी उपायों को वापस लेने की अपनी प्रतिबद्धता को दोहराया है, जिनको पहले ही  लागू किया जा चुका है। डबल्यूटीओ को ओईसीडी और यूएनसीटीएडी के साथ हर छह माह में G20 की स्थिति की समीक्षा करने का कार्य सौंपा गया है। यह निर्णय ऐसे समय में विभिन्न देशों के बीच संघर्ष को रोकने में मदद करेगा जब सहयोग अत्यंत महत्वपूर्ण है। \n आईएमएफ़ की कार्रवाई क्षमता और निगरानी में वृद्धि: G20 ने अंतर्राष्ट्रीय मौद्रिक प्रणाली में सुधार के लिए आपदा से निपटने,इसको रोकने तथा अपने सदस्य देशों और विश्व अर्थव्यवस्था की निगरानी में सुधार करने के लिए आईएमएफ़ की क्षमता को बढ़ाने का निर्णय लिया है। \n कृषि:फ्रांस ने कृषि और खाद्य सुरक्षा को G20 की प्राथमिकताओं के केंद्र में रखा है। इस गणराज्य के राष्ट्रपति ने पहली बार ब्रूनो ले मायेर को संयुक्त राष्ट्र के खाद्य और कृषि संगठन (एफएओ) सहित खाद्य सुरक्षा के लिए उत्तरदायी प्रमुख अंतरराष्ट्रीय संगठनों के साथ G20 कृषि मंत्रियों को एक साथ लाने के लिए कहा है। G20 ने 'खाद्य मूल्य अस्थिरता और कृषि पर कार्य योजना' को पारित किया है। यह विश्व कृषि और खाद्य चुनौती को पूरा करने के लिए महत्वाकांक्षी, ठोस और तत्काल समाधान प्रदान करता है।\n वैश्वीकरण का सामाजिक विनियमन: 2011 में, G20 की फ्रांसीसी अध्यक्षता में वैश्वीकरण के सामाजिक आयाम को G20 एजेंडा में जोड़ा गया। फ्रांस गणराज्य के राष्ट्रपति ने जेवियर बर्ट्रेंड को 26 और 27 सितंबर को पेरिस में G20 के  श्रम और रोजगार मंत्रियों के बीच एक बैठक की व्यवस्था करने के लिए कहा है। कान्स में, राष्ट्राध्यक्षों ने यह स्वीकार किया है कि सामाजिक आयाम को दीर्घकाल के लिए G20 एजेंडा में शामिल करना आवश्यक है। \n आपातकालीन मानवीय खाद्य भंडार: 23 जून 2011 को पारित खाद्य मूल्य अस्थिरता और कृषि संबंधी G20 कार्य योजना, विश्व खाद्य कार्यक्रम (डब्ल्यूएफपी) और संयुक्त राष्ट्र एवं विश्व बैंक जैसे अन्य सक्षम अंतरराष्ट्रीय संगठनों को मौजूदा राष्ट्रीय खाद्य भंडार के साथ-साथ अफ्रीका में ऐसी प्रणाली के कार्यान्वयन पर व्यवहार्यता अध्ययन करने का अधिदेश देती है। अफ्रीकी क्षेत्रीय संगठनों के साथ एक व्यवहार्यता अध्ययन सम्पन्न किया गया है।\n अंतर्राष्ट्रीय मौद्रिक प्रणाली में सुधार: G20 ने पूंजी प्रवाह का कारगर ढंग से प्रबंधन करने के लिए एक संदर्भ ढांचा अपनाया है: यह स्वीकार करता है कि पूंजी प्रवाह के प्रबंधन या निगरानी के उपाय वैध हो सकते हैं, क्योंकि वे मजबूत वृहद आर्थिक नीतियों के पूरक हैं और जब विशेष रूप से उच्च और अस्थिर पूंजी प्रवाह होता हैं तो ये अमल में लाए जा सकते हैं । \n कर मुक्त क्षेत्र और गैर-सहकारी क्षेत्राधिकार: कान्स में G20 ने इन प्रक्रियाओं की पूरी तरह से समीक्षा की है। यह एक अत्यंत कठिन कवायद है, क्योंकि इसमें कुछ अत्यंत अनिच्छुक देशों को सामूहिक निर्णय लेने का आवाहन किया है।\n विकास और रोजगार के लिए कार्य योजना:वैश्विक अर्थव्यवस्था के लिए बढ़े हुए तनाव और महत्वपूर्ण नकारात्मक जोखिम से G20  को विश्वास, वित्तीय स्थिरता और विकास को बहाल करने के लिए निर्णायक कार्रवाई करने के लिए प्रेरित किया है। यह विकास और नौकरियों के लिए कार्य योजना है।",
                },
                {
                  id: 13,
                  year: "2010 KR",
                  logo: "./assets/logo/2010KR.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2010_KR/1.jpg",
                      caption:
                        "G20 सियोल शिखर सम्मेलन 2010 के दौरान फैमिली फोटो खिंचवाते हुए G20 नेतागण",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन सियोल, कोरिया गणराज्य, 11-12 नवंबर 2010",
                  summit_info:
                    "G20 सियोल शिखर सम्मेलन 11-12 नवंबर, 2010 को आयोजित किया गया था। G20 देशों और पांच देशों तथा सात अंतर्राष्ट्रीय संगठनों सहित आमंत्रित प्रतिभागियों ने शिखर सम्मेलन में भाग लिया। लगभग 6,000 सरकारी प्रतिनिधियों और मीडिया समुदाय के 4,000 लोगों ने कोरिया की यात्रा की, जबकि वैश्विक निगमों के 120 सीईओ ने बिजनेस समिट में भाग लिया। G20 सियोल शिखर सम्मेलन वास्तव में कोरिया के इतिहास में सबसे बड़ा आयोजन था। \n G20 सियोल शिखर सम्मेलन एजेंडा, प्रोटोकॉल और प्रबंधन के मामले में एक बड़ी सफलता थी। G20 सियोल शिखर सम्मेलन के प्रमुख परिणामों में 'मजबूत, सतत और संतुलित विकास के लिए रूपरेखा', 'आईएमएफ कोटा सुधार और कार्यकारी बोर्ड की संरचना का समायोजन', 'बेसल III करार और एसआईएफआई (प्रणालीगत रूप से महत्वपूर्ण वित्तीय संस्थान) समस्या समाधान'और 'डीडीए के प्रति प्रतिबद्धता की पुष्टि'जैसे करार शामिल थे।  यह मानते हुए कि 'मुद्रा संघर्ष'तब अंतरराष्ट्रीय हित का विषय था, सांकेतिक दिशा-निर्देशों का एक सेट बनाने के लिए आम सहमति बनी थी। इसके नीतिगत रुख में  एक अधिक बाजार-आधारित विनिमय दर तैयार करना शामिल था जो आर्थिक बुनियादी बातों को दर्शाता है, और साथ ही एक अधिक लोचशील विनिमय दर की स्थापना महत्वपूर्ण परिणाम माने गए हैं। यह अंतर्राष्ट्रीय सहयोग की G20 भावना- वैश्विक अर्थव्यवस्था को संरक्षणवाद में बदलने और अंतर्राष्ट्रीय समन्वय के माध्यम से समाधान खोजने संबंधी करार- पर G20 नेताओं की दृढ़ आपसी समझ के बिना संभव नहीं होता। \n अंतरराष्ट्रीय वित्तीय संगठन और वित्तीय नियामक उपायों के सुधार के संबंध में, सियोल शिखर सम्मेलन में उभरते और विकासशील देशों के लिए 6% कोटा शिफ्ट पर सहमति हुई, जिसे आईएमएफ के प्रबंध निदेशक डोमिनिक स्ट्रॉस-कान ने G20 वित्त मंत्रियों और सैंट्रल बैंक के गवर्नरों की बैठक (अक्टूबर 22-23, 2010, ग्योंगजू) के बाद से अब तक का सबसे ऐतिहासिक रूप से महत्वपूर्ण करार कहा।  कार्यकारी बोर्ड के सदस्यों की संरचना को समायोजित करने और बेसल III को अपनाने के लिए सहमत होकर, सियोल शिखर सम्मेलन में नेताओं ने उन मुद्दों पर सहमति व्यक्त की जिन पर बहुत लंबे समय से सहमति नहीं बनी थी। \n इसके अलावा, 'साझा विकास के लिए सियोल विकास सहमति'और 'विकास संबंधी बहु-वर्षीय कार्य योजना'को अपनाकर, सियोल शिखर सम्मेलन ने क्षमता निर्माण के माध्यम से विकासशील देशों द्वारा सतत विकास हासिल करने की प्रक्रिया की नींव रखी। \n वैश्विक वित्तीय सुरक्षा व्यवस्था के संबंध में, शिखर सम्मेलन में मौजूदा लचीली ऋण सहायता में सुधार करके और एक एहतियाती ऋण सहायता और एक बहुराष्ट्रीय लचीली ऋण सहायता की शुरुआत करके भविष्य के वित्तीय संकट के लिए एक पूर्व निर्धारित प्रतिक्रिया प्रणाली के निर्माण पर ठोस परिणाम प्राप्त हुए। ये परिणाम विकासशील और उभरते हुए देशों, जोकि अंतरराष्ट्रीय समुदाय में अधिकांश देश हैं, के लिए गहरी रुचि वाले परिणाम हैं, जो कोरिया को गैर-G20 देशों और G20 सदस्य राष्ट्रों के मध्य मतभेदों को दूर करने वाली भूमिका निभाने में मदद करेंगे, और भविष्य में G20की कानूनी मान्यता में वृद्धि के लिए संस्थागत और शैक्षणिक आधार तैयार करेंगे।  \n सियोल शिखर सम्मेलन में कई पहलुओं पर गैर-G20 देशों के साथ निरंतर परामर्श में शामिल होने के कोरियाई सरकार के प्रयासों के बिना विकासशील और उभरती अर्थव्यवस्थाओं के प्रमुख हितों पर इस तरह के ठोस परिणाम प्राप्त करना असंभव होता। ये परामर्श बड़े पैमाने पर G20 के लिए नियुक्त राजदूत द्वारा किए गए थे, जिन्होंने अंतरराष्ट्रीय समुदाय की आम राय और उसके संबंध में सियोल शिखर सम्मेलन की ओर निर्देशित तैयारी कार्यों के विवरण को एकत्र करने की दृष्टि से आईएलओ (अंतर्राष्ट्रीय श्रम संगठन) और संयुक्त राष्ट्र जैसे प्रमुख अंतरराष्ट्रीय संगठनों के साथ अनेक ब्रीफिंग सत्रों के लिए एशिया, अफ्रीका, अमेरिका और यूरोप की यात्रा की थी।                  ",
                },
                {
                  id: 14,
                  year: "2010 CA",
                  logo: "./assets/logo/2010CA.jpeg",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2010_CA/1.jpg",
                      caption:
                        "टोरंटो कनाडा में ली गई एक पारिवारिक तस्वीर में G20 देशों के नेता।",
                    },
                  ],
                  summit_head: "G20 शिखर सम्मेलन टोरंटो, कनाडा, 26-27 जून 2010",
                  summit_info:
                    "G20 टोरंटो शिखर सम्मेलन के समय, अधिकांश देशों ने वैश्विक आर्थिक मंदी से उबरना शुरू कर दिया था। शिखर सम्मेलन घोषणा में कहा गया कि विभिन्न अर्थव्यवस्थाओं में उच्च बेरोजगारी दर और वित्तीय संकट के प्रभाव के समवर्ती अस्तित्व के रूप में गंभीर चुनौतियां बनी हुई हैं। अंतर्राष्ट्रीय मुद्रा कोष ने शिखर सम्मेलन के बाद के अपने दस्तावेज़ में यह संकेत दिया था कि घाटे में तीव्र कटौती विकास को काफी धीमा कर सकती है। संगठन ने जोर देकर कहा कि संतुलित लोक व्यय बांड बाजारों को स्थिर कर सकता है, कम सरकारी खर्च से ब्याज दरों को कम कर सकता है तथा निजी निवेश को प्रोत्साहित कर सकता है। इसमें यह सिफारिश भी की गई थी कि चीन जैसी उभरती अर्थव्यवस्थाओं, जिन्हें व्यापार अधिशेष से काफी हद तक लाभ हुआ था, को विकसित देशों पर कम भरोसा करना चाहिए और घरेलू मांग को बढ़ावा देने के लिए अपने स्वयं के खर्च में वृद्धि करनी चाहिए।",
                },
                {
                  id: 15,
                  year: "2009",
                  logo: "./assets/logo/2009.gif",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2009/1.jpg",
                      caption: "G20 लंदन शिखर सम्मेलन 2009 में G20 नेतागण",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन लंदन, यूनाइटेड किंगडम, 2 अप्रैल 2009",
                  summit_info:
                    "लंदन शिखर सम्मेलन ऐसे समय में हुआ जब विश्व द्वितीय विश्व युद्ध के बाद सबसे विकट आर्थिक संकट का सामना कर रहा था। लंदन शिखर सम्मेलन का उद्देश्य विश्व की बड़ी अर्थव्यवस्थाओं और प्रमुख अंतरराष्ट्रीय संस्थानों के नेताओं को एक साथ लाना था ताकि वैश्विक अर्थव्यवस्था को स्थिर करने तथा आर्थिक बहाली सुनिश्चित करने और नौकरियों को सुरक्षित रखने के लिए आवश्यक सामूहिक कार्रवाई की जा सके। नेताओं को अनेक अभूतपूर्व चुनौतियों का सामना करना पड़ा - अर्थात एक अधिक गंभीर मंदी को रोकना और अल्पावधि में विकास को बहाल करना, साथ ही वित्तीय प्रणाली को पुनर्स्थापित करना, विश्व व्यापार प्रणाली को संरक्षित करना तथा स्थायी आर्थिक बहाली के लिए  बुनियाद रखना। शिखर सम्मेलन में वास्तविक कार्रवाई पर सहमति हुई जिसके तहत नेताओं ने विश्वास, विकास और नौकरियों को बहाल करने; वित्तीय पर्यवेक्षण और विनियमन को सुदृढ़ करने; इस संकट को दूर करने और भावी संकटों को रोकने के लिए हमारे अंतरराष्ट्रीय वित्तीय संस्थानों का वित्तपोषण करने और उनमें सुधार करने; समृद्धि को बढ़ावा देने के लिए वैश्विक व्यापार और निवेश को प्रोत्साहित करने और संरक्षणवाद को अस्वीकृत करने; तथा एक समावेशी, हरित और स्थायी आर्थिक बहाली का निर्माण करने के लिए किए जाने वाले उपायों  पर सहमति व्यक्त की।",
                },
                {
                  id: 16,
                  year: "2008",
                  logo: "./assets/logo/2008.png",
                  total_img: "1",
                  images: [
                    {
                      pic: "./assets/year_summits/2021/1.jpg",
                      caption:
                        "G20 वाशिंगटन शिखर सम्मेलन 2008 का उद्घाटन समारोह",
                    },
                  ],
                  summit_head:
                    "G20 शिखर सम्मेलन वाशिंगटन डीसी, यूएसए, 14- 15 नवंबर 2008",
                  summit_info:
                    "2008 G20 शिखर सम्मेलन वाशिंगटन डीसी में सब-प्राइम मॉर्टगेज वित्तीय संकट को ध्यान में रखते हुए आयोजित किया गया था और इसे 'वित्तीय बाजारों और विश्व अर्थव्यवस्था पर शिखर सम्मेलन की घोषणा'शीर्षक दिया गया था। नेताओं ने आर्थिक विकास को सुदृढ़ करने, मौजूदा वित्तीय संकट से निपटने और सुधार की नींव रखने के प्रयासों पर चर्चा की ताकि यह सुनिश्चित किया जा सके कि इस तरह का संकट फिर से उत्पन्न न हो। शिखर सम्मेलन में पांच प्रमुख उद्देश्य प्राप्त किए गए: \n  नेताओं के बीच इस वैश्विक संकट के मूल कारणों के संबंध में एक आम सहमति बनी; \n देशों द्वारा तत्काल संकट से निपटने और विकास को सुदृढ़ करने के लिए किए गए और किए जाने वाले कार्यकलापों की समीक्षा की गई; \n  हमारे वित्तीय बाजारों में सुधार के लिए सामान्य सिद्धांतों पर सहमति हुई; \n उन सिद्धांतों को लागू करने के लिए एक कार्य योजना शुरू की गई और मंत्रियों से विशिष्ट सिफारिशें तैयार करने के लिए भी कहा जिनकी समीक्षा बाद के शिखर सम्मेलन में नेताओं द्वारा की जाएगी; तथा \n  मुक्त बाजार सिद्धांतों के लिए अपनी प्रतिबद्धता की पुनः पुष्टि की। \n नेताओं ने एक कार्य योजना अनुमोदित की जिसके तहत इन उद्देश्यों को प्राप्त करने के लिए एक व्यापक कार्य योजना तैयार की जाएगी और वित्त मंत्रियों को कार्रवाई करने के लिए कहा ताकि इस कार्य योजना का पूरी तरह से और सख्ती से कार्यान्वयन सुनिश्चित किया जा सके। इस योजना में ऑफ-बैलेंस शीट साधनों के संबंध में लेखांकन और प्रकटीकरण मानकों में निहित कमियों को दूर करने के लिए तत्काल कार्रवाई करना; यह सुनिश्चित करना कि क्रेडिट रेटिंग एजेंसियां उच्चतम मानकों को पूरा करती हैं और हितों के टकराव से बचती हैं, निवेशकों को अधिक पारदर्शिता प्रदान करती हैं और जटिल उत्पादों के लिए रेटिंग में अंतर करती हैं; यह सुनिश्चित करना कि फर्म पर्याप्त पूंजी रखती हैं और बैंकों के संरचित ऋण एवं प्रतिभूतिकरण संबंधी कार्यकलापों के लिए सुदृढ़ पूंजी आवश्यकताओं का निर्धारण करती हैं; बैंकों की जोखिम प्रबंधन प्रथाओं को सुदृढ़ करने के लिए बेहतर दिशानिर्देश विकसित करना और यह सुनिश्चित करना कि फर्म ऐसी प्रक्रियाएं विकसित करती हैं जो यह निगरानी रखती हैं कि क्या वे बहुत अधिक जोखिम तो नहीं ले रहीं हैं; ऐसी प्रक्रियाएं स्थापित करना जिससे वैश्विक स्तर पर सक्रिय वित्तीय संस्थानों की देखरेख करने वाले राष्ट्रीय पर्यवेक्षक बैठक करें और जानकारी साझा करें; तथा उभरती अर्थव्यवस्थाओं की व्यापक सदस्यता को शामिल करने के लिए वित्तीय स्थिरता मंच का विस्तार करना शामिल था।",
                },
              ],
            },
            {
              id: 4,
              page_topic: "G20 India 2023",
              main_head: "लोगो और विषय",
              paratext:
                "G20 लोगो भारत के राष्ट्रीय ध्वज के जीवंत रंगों - केसरिया, सफेद और हरे, एवं नीले रंग से प्रेरित है। इसमें भारत के राष्ट्रीय पुष्‍प कमल को पृथ्वी ग्रह के साथ प्रस्‍तुत किया गया है जो चुनौतियों के बीच विकास को दर्शाता है। पृथ्वी जीवन के प्रति भारत के पर्यावरण अनुकूल दृष्टिकोण को दर्शाती है, जिसका प्रकृति के साथ पूर्ण सामंजस्य है। G20 लोगो के नीचे देवनागरी लिपि में 'भारत' लिखा है। \n भारत का G20 अध्‍यक्षता का विषय - 'वसुधैव कुटुम्बकम' या 'एक पृथ्वी · एक कुटुंब · एक भविष्य' - महा उपनिषद के प्राचीन संस्कृत पाठ से लिया गया है। अनिवार्य रूप से, यह विषय सभी प्रकार के जीवन मूल्यों - मानव, पशु, पौधे और सूक्ष्मजीव - और पृथ्वी एवं व्यापक ब्रह्मांड में उनके परस्पर संबंधों की पुष्टि करता है। \n  यह विषय (थीम) व्यक्तिगत जीवन शैली और राष्ट्रीय विकास दोनों स्‍तरों पर पर्यावरण की दृष्टि से धारणीय और जिम्मेदार विकल्पों से संबद्ध LiFE (पर्यावरण के लिए जीवन शैली) पर भी प्रकाश डालता है, जिससे वैश्विक स्तर पर परिवर्तनकारी कार्यों के परिणामस्वरूप एक स्वच्छ, हरे-भरे और उज्जवल भविष्य का निर्माण होता है।यह विषय सामाजिक और व्यक्तिगत उत्पादन और उपभोग विकल्पों पर भी प्रकाश डालता है और पर्यावरण की दृष्टि से व्यवहार्य और जिम्मेदार व्यवहार विकल्प अपनाने का आह्वान करता है जिससे वैश्विक सुधारात्मक कार्रवाई की जा सके ताकि मानवता को अपेक्षाकृत स्वच्छ, हरित और उज्जवल भविष्य प्राप्त हो। \n लोगो और विषय (थीम) एक साथ भारत की G20 अध्‍यक्षता का एक सशक्‍त संदेश देते हैं, जो दुनिया में सभी के लिए न्यायसंगत और समान विकास के प्रयास को दर्शाता है। क्योंकि आज जब हम एक स्थायी, समग्र, जिम्मेदार और समावेशी तरीके से इस चुनौतीपूर्ण समय से गुजर रहे हैं तो ऐसे समय में ये G20 अध्‍यक्षता के लिए हमारे आसपास के पारिस्थितिकी तंत्र के अनुकूल जीवन से संबंधित हमारे विलक्षण भारतीय नजरिये को दर्शाते हैं। \n भारत के लिए, G20 अध्‍यक्षता 'अमृतकाल' की शुरुआत है, जो 15 अगस्त 2022 को स्वतंत्रता की 75 वीं वर्षगांठ से शुरू होकर एक भविष्यवादी, समृद्ध, समावेशी और विकसित समाज, जिसकी मुख्‍य विशेषता मानव-केंद्रित दृष्टिकोण है, के लिए अपनी स्‍वतंत्रता की शताब्‍दी तक 25 वर्ष की अवधि है। ",
              video: "",
            },
            {
              id: 5,
              page_topic: "G-20 India 2023",
              main_head: "नई दिल्ली शिखर सम्मेलन",
              paratext:
                "18वां G20 राष्ट्राध्यक्षों और शासनाध्यक्षों का शिखर सम्मेलन 9-10 सितंबर 2023 को नई दिल्ली में होगा। यह शिखर सम्मेलन मंत्रियों, वरिष्ठ अधिकारियों और नागरिक समाजों के बीच पूरे वर्ष आयोजित होने वाली सभी G20 प्रक्रियाओं और बैठकों की परिणति होगी। नई दिल्ली शिखर सम्मेलन के समापन पर G20 नेताओं की एक घोषणा को अपनाया जाएगा, जिसमें संबंधित मंत्रिस्तरीय और कार्य समूह की बैठकों के दौरान चर्चा की गई और सहमत प्राथमिकताओं के प्रति नेताओं की प्रतिबद्धता को बताया जाएगा।",
              sub_head: "नेता सदस्य",
              people: [
                {
                  name: "अल्बर्टो फर्नांडीज",
                  country: "अर्जेंटीना",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/1.png",
                  flag_photo: "./assets/flags/1.jpeg",
                },
                {
                  name: "एंथनी अल्बनीज",
                  country: "ऑस्ट्रेलिया",
                  position: "प्रधानमंत्री",
                  photo: "./assets/members/2.png",
                  flag_photo: "./assets/flags/2.jpeg",
                },
                {
                  name: "जायर बोल्सोनारो",
                  country: "ब्राज़ील",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/3.png",
                  flag_photo: "./assets/flags/3.jpeg",
                },
                {
                  name: "जस्टिन पियरे जेम्स ट्रूडो",
                  country: "कनाडा",
                  position: "प्रधानमंत्री",
                  photo: "./assets/members/4.jpeg",
                  flag_photo: "./assets/flags/4.jpeg",
                },
                {
                  name: "शी जिनपिंग",
                  country: "चीन",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/5.jpeg",
                  flag_photo: "./assets/flags/5.jpeg",
                },
                {
                  name: "इमैनुएल मैक्रों",
                  country: "फ़्रांस",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/6.jpeg",
                  flag_photo: "./assets/flags/6.jpeg",
                },
                {
                  name: "ओलाफ स्कोलज़",
                  country: "जर्मनी",
                  position: "चांसलर",
                  photo: "./assets/members/7.png",
                  flag_photo: "./assets/flags/7.jpeg",
                },
                {
                  name: "नरेंद्र मोदी",
                  country: "भारत",
                  position: "प्रधानमंत्री",
                  photo: "./assets/members/8.png",
                  flag_photo: "./assets/flags/8.jpeg",
                },
                {
                  name: "जोको विडोडो",
                  country: "इंडोनेशिया",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/9.png",
                  flag_photo: "./assets/flags/9.jpeg",
                },
                {
                  name: "जॉर्जिया मेलोनी",
                  country: "इटली",
                  position: "प्रधानमंत्री",
                  photo: "./assets/members/10.png",
                  flag_photo: "./assets/flags/10.jpeg",
                },
                {
                  name: "फ़ुमिओ किशिदा",
                  country: "जापान",
                  position: "प्रधानमंत्री",
                  photo: "./assets/members/11.png",
                  flag_photo: "./assets/flags/11.jpeg",
                },
                {
                  name: "आंद्रेस मैनुअल लोपेज ओब्राडोर",
                  country: "मेक्सिको",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/12.jpeg",
                  flag_photo: "./assets/flags/12.jpeg",
                },
                {
                  name: "यूं सुक-येओल",
                  country: "कोरिया गणराज्य",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/13.jpeg",
                  flag_photo: "./assets/flags/13.png",
                },
                {
                  name: "व्लादिमीर पुतिन",
                  country: "रूस",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/14.png",
                  flag_photo: "./assets/flags/14.png",
                },
                {
                  name: "सलमान बिन अब्दुलअजीज अल सऊद",
                  country: "सऊदी अरब",
                  position: "किंग",
                  photo: "./assets/members/15.jpeg",
                  flag_photo: "./assets/flags/15.jpeg",
                },
                {
                  name: "सिरिल रामफोसा",
                  country: "दक्षिण अफ़्रीका",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/16.jpeg",
                  flag_photo: "./assets/flags/16.jpeg",
                },
                {
                  name: "रेसेप तैयप एर्दोआन",
                  country: "तुर्किये",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/17.jpeg",
                  flag_photo: "./assets/flags/17.jpeg",
                },
                {
                  name: "ऋषि सुनक",
                  country: "यूके",
                  position: "प्रधानमंत्री",
                  photo: "./assets/members/18.jpeg",
                  flag_photo: "./assets/flags/18.jpeg",
                },
                {
                  name: "जोसेफ आर. बाइडेन जूनियर",
                  country: "अमेरिका",
                  position: "राष्ट्रपति",
                  photo: "./assets/members/19.png",
                  flag_photo: "./assets/flags/19.jpeg",
                },
                {
                  name: "चार्ल्स मिशेल",
                  country: "यूरोपीय संघ",
                  position: "अध्यक्ष, यूरोपीय परिषद",
                  photo: "./assets/members/20.jpeg",
                  flag_photo: "./assets/flags/19.jpeg",
                },
                {
                  name: "उर्सुला वॉन डेर लेयेन",
                  country: "यूरोपीय संघ",
                  position: "अध्यक्ष, यूरोपीय आयोग",
                  photo: "./assets/members/21.png",
                  flag_photo: "./assets/flags/19.jpeg",
                },
              ],
            },
            {
              id: 6,
              page_topic: "भारत को जानिए",
              main_head: "भारत को जानिए",
              topic1: "अतुल्य भारत",
              sub_paratext1:
                "भारत बहुसांस्कृतिक अनुभवों का संगम है। यह समृद्ध विरासत और अनगणित आकर्षणों वाला देश है जो पर्यटन के लिए बेहतरीन गंतव्यों में से एक है। यहाँ बर्फ से ढकी हिमालय की चोटियों से लेकर दक्षिण के उष्णकटिबंधीय वर्षा वनों तक फैले दर्शनीय स्थल हैं जिसमें लंबा समुद्री तट रेखा; गर्म, ठंडे और सफेद नमक वाले विशाल रेगिस्तान; घने वन; उच्च पर्वतीय तृण भूमि और झीलें, निर्मल घाट और सबसे बड़ा बाघ अभयारण्य शामिल हैं। भारत अपने स्मारकों और भवनों के लिए जाना जाता है जो इस देश के विभिन्न युगों की उत्कृष्ट वास्तुकला और भव्यता को दर्शाते हैं।",

              topic2: "संस्कृति और विरासत",
              sub_paratext2:
                "भारत की समृद्ध सांस्कृतिक विरासत विश्व की सबसे पुरानी सभ्यताओं में से एक है, जो विभिन्न धर्मों, परंपराओं और रीति-रिवाजों का एक अनूठा संगम है। भारत में अनेक वर्षों के दौरान अनेक प्रकार के कला, वास्तुकला, चित्रकला, संगीत, नृत्य, पर्वों और रीति-रिवाजों का विकास हुआ है। भारतीय हस्तशिल्प की उत्कृष्टता उत्तम रेशम और सूती वस्त्र, यहां की आभूषण शैली सब कुछ प्राचीन काल से विरासत के रूप में मिला है और पीढ़ी दर पीढ़ी सहेज कर रखा जा रहा है। यहां के पर्व भारत की विविधता और इसकी समृद्ध सांस्कृतिक विरासत के सार को प्रदर्शित करते हैं। पूरे देशभर में वर्षभर विभिन्न प्रकार के उत्सव मनाए जाते हैं जिसमें राष्ट्रीय, सामाजिक, सांस्कृतिक और धार्मिक उत्सव शामिल हैं।",

              topic3: "आजादी का अमृत महोत्सव",
              sub_paratext3:
                "आज़ादी का अमृत महोत्सव, स्वतंत्रता के 75वें वर्ष का जश्न मनाने एवं इसके लोगों, संस्कृति और उपलब्धियों के गौरवशाली इतिहास को याद करने के लिए भारत सरकार की एक पहल है। \n यह महोत्सव भारत के उन लोगों को समर्पित है, जो न केवल भारत की अब तक की विकास यात्रा में सहायक रहे है, बल्कि जिनमें आत्मनिर्भर की भावना से प्रेरित प्रधानमंत्री मोदी के भारत एक्टीवेटिंग2.0 के लक्ष्य को प्राप्त करने की शक्ति और सामर्थ्य है। \n आज़ादी का अमृत महोत्सव की आधिकारिक यात्रा स्वतंत्रता की 75वीं वर्षगांठ के 75 सप्ताह पहले 12 मार्च 2021 को शुरू हो गई थी तथा यह एक वर्ष के लिए 15 अगस्त 2023 तक चलेगी।",

              topic4: "भारत की उपलब्धियां",
              sub_paratext4:
                "15 अगस्त 1947 से भारत की यात्रा विकास की यात्रा रही है। भारत दुनिया का सबसे बड़ा लोकतंत्र है,यह पांचवीं सबसे बड़ी अर्थव्यवस्था है, प्रत्यक्ष विदेशी निवेश के लिए एक आकर्षक गंतव्य स्थल है और वैश्विक सूचना प्रौद्योगिकी (आईटी) का सशक्त केंद्र है। भारत के प्रस्ताव पर संयुक्त राष्ट्र महासभा ने अंतर्राष्ट्रीय योग दिवस (2014 से मनाया जाता है) और अंतर्राष्ट्रीय अनाज वर्ष (भारत की G20 की अध्यक्षता के समय पर) को अंगीकार किया है। विभिन्न क्षेत्रों में भारत की कुछ नवीनतम विकास पहलों में स्टार्टअप इंडिया पहल; डिजिटल इंडिया; मेक इन इंडिया अभियान; प्रधान मंत्री जन धन योजना (पीएमजेडीवाई) जो विश्व में सबसे बड़ी वित्तीय समावेशी पहलों में से एक है; आयुष्मान भारत जो सरकार द्वारा प्रायोजित विश्व की सबसे बड़ी स्वास्थ्य सेवा योजना है; और पीएम उज्ज्वला योजना स्वच्छ ऊर्जा की सार्वभौमिक सुविधा प्रदान करती है और अंतर्राष्ट्रीय सौर गठबंधन शामिल है ।",
            },
          ],
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
